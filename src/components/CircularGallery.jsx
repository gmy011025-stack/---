import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl';
import { useEffect, useRef } from 'react';

import './CircularGallery.css';

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function createTextTexture(gl, text, font, color) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const size = Number(font.match(/(\d+)px/)?.[1] ?? 30);
  ctx.font = font;
  const width = Math.ceil(ctx.measureText(text).width + 40);
  const height = Math.ceil(size * 1.65);
  canvas.width = width;
  canvas.height = height;
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.clearRect(0, 0, width, height);
  ctx.fillText(text, width / 2, height / 2);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width, height };
}

class GalleryApp {
  constructor(container, options) {
    this.container = container;
    this.items = options.items;
    this.bend = options.bend;
    this.textColor = options.textColor;
    this.borderRadius = options.borderRadius;
    this.font = options.font;
    this.scrollSpeed = options.scrollSpeed;
    this.onSelect = options.onSelect;
    this.scroll = { current: 0, target: 0, last: 0, ease: options.scrollEase };
    this.medias = [];

    this.createRenderer();
    this.createCamera();
    this.scene = new Transform();
    this.geometry = new Plane(this.gl, { widthSegments: 64, heightSegments: 32 });
    this.onResize();
    this.createMedias();
    this.addEvents();
    this.update();
  }

  createRenderer() {
    this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
  }

  createMedias() {
    const data = [...this.items, ...this.items];
    this.medias = data.map((item, index) => this.createMedia(item, index, data.length));
  }

  createMedia(item, index, length) {
    const texture = new Texture(this.gl, { generateMipmaps: true });
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = item.image;
    image.onload = () => {
      texture.image = image;
      program.uniforms.uImageSizes.value = [image.naturalWidth, image.naturalHeight];
    };

    const program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z += sin((p.x * 5.0) + uTime) * 0.035 * (1.0 + abs(uSpeed));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform float uBorderRadius;
        varying vec2 vUv;

        float roundedBox(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec2 ratio = vec2(
            max((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            max((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * 0.5, vUv.y * ratio.y + (1.0 - ratio.y) * 0.5);
          vec4 color = texture2D(tMap, uv);
          float edge = roundedBox(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float alpha = 1.0 - smoothstep(-0.003, 0.003, edge);
          gl_FragColor = vec4(color.rgb, color.a * alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uImageSizes: { value: [1, 1] },
        uPlaneSizes: { value: [1, 1] },
        uBorderRadius: { value: this.borderRadius },
        uTime: { value: Math.random() * 100 },
        uSpeed: { value: 0 },
      },
    });

    const plane = new Mesh(this.gl, { geometry: this.geometry, program });
    plane.setParent(this.scene);

    const label = createTextTexture(this.gl, item.text, this.font, this.textColor);
    const labelProgram = new Program(this.gl, {
      transparent: true,
      depthTest: false,
      depthWrite: false,
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: label.texture } },
    });
    const labelMesh = new Mesh(this.gl, { geometry: new Plane(this.gl), program: labelProgram });
    labelMesh.setParent(plane);

    const media = { item, plane, labelMesh, index, length, extra: 0, width: 0, widthTotal: 0, x: 0 };
    this.resizeMedia(media, label.width / label.height);
    return media;
  }

  resizeMedia(media, labelAspect = 4) {
    const scale = this.screen.height / 520;
    media.plane.scale.y = Math.max(8.8, this.viewport.height * 0.92 * scale);
    media.plane.scale.x = media.plane.scale.y * 0.78;
    media.plane.program.uniforms.uPlaneSizes.value = [media.plane.scale.x, media.plane.scale.y];
    media.width = media.plane.scale.x + 1.05;
    media.widthTotal = media.width * media.length;
    media.x = media.width * media.index;
    media.labelMesh.scale.y = media.plane.scale.y * 0.08;
    media.labelMesh.scale.x = media.labelMesh.scale.y * labelAspect;
    media.labelMesh.position.y = -media.plane.scale.y * 0.58;
  }

  updateMedia(media, direction) {
    media.plane.position.x = media.x - this.scroll.current - media.extra;
    const x = media.plane.position.x;
    const half = this.viewport.width / 2;
    const curve = this.bend === 0 ? 0 : Math.sin((x / half) * Math.PI * 0.5) * this.bend;
    media.plane.position.y = -Math.abs(curve) * 0.55;
    media.plane.rotation.z = -curve * 0.045;
    media.plane.program.uniforms.uSpeed.value = this.scroll.current - this.scroll.last;
    media.plane.program.uniforms.uTime.value += 0.035;

    const planeOffset = media.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    if (direction === 'right' && media.plane.position.x + planeOffset < -viewportOffset) {
      media.extra -= media.widthTotal;
    }
    if (direction === 'left' && media.plane.position.x - planeOffset > viewportOffset) {
      media.extra += media.widthTotal;
    }
  }

  onResize = () => {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    this.viewport = { width: height * this.camera.aspect, height };
    this.medias.forEach((media) => this.resizeMedia(media));
  };

  onWheel = (event) => {
    event.preventDefault();
    const delta = event.deltaY || event.wheelDelta || 0;
    this.scroll.target += (delta > 0 ? 1 : -1) * this.scrollSpeed * 0.22;
  };

  onPointerDown = (event) => {
    this.isDown = true;
    this.start = event.clientX;
    this.startY = event.clientY;
    this.scrollStart = this.scroll.target;
  };

  onPointerMove = (event) => {
    if (!this.isDown) return;
    this.scroll.target = this.scrollStart + (this.start - event.clientX) * this.scrollSpeed * 0.018;
  };

  onPointerUp = (event) => {
    if (this.isDown && Math.abs(this.scroll.target - this.scrollStart) < 0.08) {
      const rect = this.container.getBoundingClientRect();
      const localX = this.start - rect.left;
      const localY = this.startY - rect.top;
      const releaseX = event.clientX - rect.left;
      const releaseY = event.clientY - rect.top;

      if (Math.hypot(releaseX - localX, releaseY - localY) > 8) {
        this.isDown = false;
        return;
      }

      const x = (localX / this.screen.width) * 2 - 1;
      const y = -((localY / this.screen.height) * 2 - 1);
      const clicked = this.medias
        .filter((media) => {
          const px = media.plane.position.x / (this.viewport.width / 2);
          const py = media.plane.position.y / (this.viewport.height / 2);
          const sx = media.plane.scale.x / this.viewport.width;
          const sy = media.plane.scale.y / this.viewport.height;
          return x > px - sx && x < px + sx && y > py - sy && y < py + sy;
        })
        .sort((a, b) => Math.abs(a.plane.position.x) - Math.abs(b.plane.position.x))[0];
      if (clicked) this.onSelect?.(clicked.item);
    }
    this.isDown = false;
  };

  onKeyDown = (event) => {
    if (event.key === 'ArrowRight') this.scroll.target += this.scrollSpeed;
    if (event.key === 'ArrowLeft') this.scroll.target -= this.scrollSpeed;
  };

  addEvents() {
    window.addEventListener('resize', this.onResize);
    this.container.addEventListener('wheel', this.onWheel, { passive: false });
    this.container.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    this.container.addEventListener('keydown', this.onKeyDown);
  }

  update = () => {
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left';
    this.medias.forEach((media) => this.updateMedia(media, direction));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = requestAnimationFrame(this.update);
  };

  destroy() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.onResize);
    this.container.removeEventListener('wheel', this.onWheel);
    this.container.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    this.container.removeEventListener('keydown', this.onKeyDown);
    if (this.gl?.canvas?.parentNode) this.gl.canvas.parentNode.removeChild(this.gl.canvas);
    this.gl?.getExtension('WEBGL_lose_context')?.loseContext();
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#ffffff',
  borderRadius = 0.05,
  font = 'bold 30px Inter',
  scrollSpeed = 2,
  scrollEase = 0.05,
  onSelect,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !items?.length) return undefined;
    const app = new GalleryApp(containerRef.current, {
      items,
      bend,
      textColor,
      borderRadius,
      font,
      scrollSpeed,
      scrollEase,
      onSelect,
    });
    return () => app.destroy();
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, onSelect]);

  return (
    <div
      className="circular-gallery"
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Selected project gallery. Use mouse wheel, drag, or arrow keys to navigate."
    />
  );
}
