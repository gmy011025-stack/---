import React from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bot,
  BrainCircuit,
  CircleX,
  Component,
  DatabaseZap,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  MousePointer2,
  Phone,
  Sparkles,
  Waypoints,
} from 'lucide-react';
import BorderGlow from './components/BorderGlow';
import CircularGallery from './components/CircularGallery';
import LightRays from './components/LightRays';
import MagicBento from './components/MagicBento';
import TiltedCard from './components/TiltedCard';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const contacts = [
  { icon: Phone, label: '电话', value: '13185050272', href: 'tel:13185050272' },
  { icon: Mail, label: '邮箱', value: '1362369675@qq.com', href: 'mailto:1362369675@qq.com' },
  { icon: MapPin, label: '城市', value: '杭州' },
];

const directContact = {
  phone: '13185050272',
  wechat: '13185050272',
};

const metrics = [
  { value: '6+', label: '年 UI / 产品设计经验' },
  { value: '40%', label: '客户留存率提升' },
  { value: '30%+', label: '开发效率提升' },
  { value: '2亿', label: '建联销售 GMV' },
];

const lynkcoShowcaseSections = [
  {
    id: 'app',
    label: 'APP',
    title: '领克 APP',
    images: Array.from({ length: 32 }, (_, index) => asset(`assets/lynkco-showcase/${String(index + 1).padStart(2, '0')}.png`)),
  },
];

const dashboardShowcaseSections = [
  {
    id: 'admin',
    label: '后台',
    title: '疆山赋后台',
    images: Array.from({ length: 17 }, (_, index) => asset(`assets/dashboard-showcase/后台/${String(index + 1).padStart(2, '0')}.png`)),
  },
  {
    id: 'miniapp',
    label: '小程序',
    title: '疆山赋小程序',
    images: Array.from({ length: 18 }, (_, index) => asset(`assets/dashboard-showcase/小程序/小程序${String(index + 1).padStart(2, '0')}.png`)),
  },
];

const projects = [
  {
    title: '吉利领克',
    label: 'Mini Program',
    meta: 'Lynk & Co',
    image: asset('assets/lynkco-cover.png'),
    accent: '#b8f36b',
    description: '围绕 LYNK & CO 年轻、开放、都市化的品牌气质，梳理多端业务入口与用户任务路径，让高端出行服务、会员运营与数字触点形成更一致的体验闭环。',
    galleryTitle: '吉利领克',
    gallerySections: lynkcoShowcaseSections,
  },
  {
    title: 'Figma Make AI全流程落交互原型展示',
    label: 'Interaction',
    meta: 'Demo Flow',
    mediaType: 'video',
    video: asset('assets/night-demo.mp4'),
    image: asset('assets/agent-slides/4.png'),
    badge: '可预览',
    accent: '#ff00ea',
    description: '需求-Agents处理产品PRD-自动确认端-一站式完成交互效果',
  },
  {
    title: '疆山赋企服管理系统',
    label: 'Admin System',
    meta: 'Enterprise Service',
    image: asset('assets/dashboard-showcase/后台/01.png'),
    accent: '#3e6cff',
    description: '重构企服管理后台信息架构，覆盖销售分析、资源库、经营分析与服务数据管理。',
    galleryTitle: '疆山赋企服管理系统',
    gallerySections: dashboardShowcaseSections,
  },
  {
    title: 'Codex全流程AI设计',
    label: 'AI Web',
    meta: 'Personal Site',
    image: asset('assets/case-ai-website.png'),
    badge: '此网站',
    accent: '#6ee7f5',
    description: '以个人品牌、AI 能力与项目展示为核心，搭建暗色科技感作品集首屏和案例浏览体验。',
  },
];

const galleryItems = [
  { image: asset('assets/1.png'), text: '帅车' },
  { image: asset('assets/2.png'), text: 'NFCC' },
  { image: asset('assets/3.png'), text: '今狮' },
  { image: asset('assets/4.png'), text: '领克' },
  { image: asset('assets/5.png'), text: '宇数租机' },
  { image: asset('assets/6.png'), text: '疆山赋' },
  { image: asset('assets/7.png'), text: '浙江图书馆' },
  { image: asset('assets/8.png'), text: '挖达人' },
];

const jiangshanfuAdminImages = [
  '员工分析.png',
  '字段展示.png',
  '服务分析-弹窗.png',
  '服务分析.png',
  '登录.png',
  '经营分析-客户分析.png',
  '经营分析-服务分析.png',
  '资源库-公司转让.png',
  '资源库-发布.png',
  '资源库-商标转让.png',
  '资源库-资质转让.png',
  '销售分析-展开.png',
  '销售分析-收起.png',
  '销售分析.png',
  '首页-员工分析.png',
  '首页-排名展开.png',
  '首页-服务分析.png',
  '首页-营销活动.png',
  '首页-销售分析.png',
  '首页.png',
];

const jiangshanfuMiniappImages = [
  '关于我们.png',
  '分类.png',
  '分类上拉.png',
  '合作案例.png',
  '名片.png',
  '学习-企业专区.png',
  '学习-多维企服.png',
  '学习.png',
  '我的-2.png',
  '资源库-商标转让.png',
  '资源库-资质转让.png',
  '资源库.png',
  '首页.png',
];

const yushuMiniappImages = [
  '产品02.png',
  '产品分类-文娱.png',
  '产品选择备份.png',
  '产品页.png',
  '发布.png',
  '发布评价.png',
  '愿景-1.png',
  '愿景-2.png',
  '愿景.png',
  '我的收藏.png',
  '我的订单.png',
  '提交订单-填写信息.png',
  '未登录页面.png',
  '社区.png',
  '首页-1.png',
  '首页.png',
];

const wadarenImageGroups = {
  banner: [
    'tik tok 海外-美区英区海报 1.png',
    'tik tok 海外-美区英区海报 2.png',
    'tik tok 海外-美区英区海报 3.png',
    'tik tok 海外-美区英区海报 4.png',
    'tik tok 海外-美区英区海报 5.png',
    'tik tok 海外-美区英区海报 6.png',
    'tik tok 海外-美区英区海报 7.png',
    'tik tok 海外-美区英区海报 8.png',
    'tik tok 海外-美区英区海报 9.png',
    'tik tok 海外-美区英区海报 10.png',
    'tik tok 海外-美区英区海报 11.png',
    'tik tok 海外-美区英区海报 12.png',
    'tik tok 海外-美区英区海报 13.png',
    'tik tok 海外-美区英区海报 14.png',
    'tik tok 海外-美区英区海报 15.png',
    'tik tok 海外-美区英区海报 16.png',
    'tik tok 海外-美区英区海报 17.png',
    'tik tok 海外-美区英区海报 18.png',
    'tik tok 海外-美区英区海报 19.png',
    'tik tok 海外-美区英区海报 20.png',
    '运营海报-2 1.png',
  ],
  miniapp: [
    '运营海报-2 1.png',
    '运营海报-2 2.png',
    '运营海报-2 3.png',
    '运营海报-2 4.png',
    '运营海报-2 5.png',
    '运营海报-2 6.png',
    '运营海报-2 7.png',
    '运营海报-2 8.png',
    '运营海报-2 9.png',
    '运营海报-2 10.png',
    '运营海报-2 11.png',
    '运营海报-2 12.png',
    '运营海报-2 13.png',
    '运营海报-2 14.png',
    '运营海报-2 15.png',
  ],
  desktop: [
    '登录 22.png',
    '登录 23.png',
    '登录 24.png',
    '登录 25.png',
    '登录 26.png',
    '登录 27.png',
    '登录 28.png',
    '登录 29.png',
    '登录 30.png',
  ],
  website: [
    '登录 22.png',
    '1-商品管理 1.png',
    '1-商品管理 2.png',
    '1-商品管理 3.png',
    '1-商品管理 4.png',
    '1-商品管理 5.png',
    '1-商品管理 6.png',
  ],
  campaign: [
    '封面 1.png',
    '封面 2.png',
    '封面 3.png',
    '封面 4.png',
    '封面 5.png',
    '封面 6.png',
    '封面 7.png',
    '封面 8.png',
    '秒督获客 1.png',
    '秒督营销 1.png',
  ],
};

const projectCases = [
  {
    id: 'sureauto',
    name: '帅车',
    summary: '汽车交易与数据平台',
    cover: asset('assets/1.png'),
    images: [asset('assets/1.png'), asset('assets/7.png'), asset('assets/3.png')],
    sections: {
      app: Array.from({ length: 22 }, (_, index) => asset(`assets/sureauto/APP${String(index + 1).padStart(2, '0')}.png`)),
    },
  },
  {
    id: 'nfcc',
    name: 'NFCC',
    summary: '数字内容与品牌视觉',
    cover: asset('assets/2.png'),
    images: [asset('assets/2.png'), asset('assets/4.png'), asset('assets/5.png')],
    sections: {
      miniapp: [
        {
          title: 'NFCC 小程序',
          images: ['023979fbdfcc60469f7806631c9e7aa7.jpg', '0f1cf09898376e9c0c25e7b38ac500f6.jpg', '2c6ba2ca2ff93cfb260755eb07e15774.jpg', '2d40c8ba7e43817f042104ac03e6bf33.jpg', '3da8eb4f36ada3813c355bfde25b06f1.jpg', '4e7fdc7e4f1f32fbab89deeb10f2265d.jpg', '56a1ba53a324e6851c83b2b83003a3ae.jpg', '57c89b3e9bd18aae7f71a0ae2ff7296b.jpg', '91c98d3db51a1cee4eb25f742dac2341.jpg', 'aeef35f05bb058fb96eb703650fa97fa.jpg', 'c6f7b816377efdab4277cb4251d6bcf2.jpg', 'd4eecf7825f0ab611918d1d60364d902.jpg', 'f5c054875c26b8a8f11c56ede2c8a00f.jpg', '首页.png', '首页-new！.png', '首页-new2！.png']
            .map((name) => asset(`assets/nfcc/${name}`)),
        },
      ],
    },
  },
  {
    id: 'jinshi',
    name: '今狮',
    summary: 'AI 产品与系统体验',
    cover: asset('assets/3.png'),
    images: [asset('assets/3.png'), asset('assets/5.png'), asset('assets/2.png')],
    sections: {
      app: [
        {
          title: '今狮 APP',
          images: Array.from({ length: 37 }, (_, index) => asset(`assets/jinshi/今狮${String(index + 1).padStart(2, '0')}.png`)),
        },
        {
          title: '东瓷 APP',
          images: Array.from({ length: 9 }, (_, index) => asset(`assets/jinshi/APP-东瓷${String(index + 1).padStart(2, '0')}.png`)),
        },
      ],
    },
  },
  {
    id: 'lynkco',
    name: '领克',
    summary: 'SCRM 与多端体验',
    cover: asset('assets/4.png'),
    images: [asset('assets/4.png'), asset('assets/3.png'), asset('assets/2.png')],
    sections: {
      app: [
        {
          title: '领克 企业微信端',
          images: ['1 2.png', '1 3.png', '1 3-1.png', '1 3-2.png', '1 4.png', '1 4-1.png', '1 4-2.png', '1 5.png', '1 5-1.png', '1 5-2.png', '1 6.png', '1 6-1.png', '客户详情.png', '客户详情弹窗.png', '客户详情基本信息.png', '客户详情用户旅程.png', '任务中心.png', '邀请函配置.png', '邀请函输入.png', '营销素材.png', '智慧话术.png', '状态通知.png']
            .map((name) => asset(`assets/lynkco/企业微信端/${name}`)),
        },
      ],
      admin: [
        {
          title: '领克 后台',
          images: ['新-运营工具-营销素材.png', '新-运营工具-智慧话术.png', '终-弹窗.png', '终-赋能应用-待办中心.png', '终-赋能应用-服务窗口.png', '终-客户运营-客户群列表.png', '终-客户运营-客户群提醒.png', '终-群运营-标签建群.png', '终-群运营-群SOP.png', '终-群运营-自动拉群.png', '终-系统管理-角色管理.png', '终-系统管理-离职人员检索.png', '终-系统管理-离职员工客户.png', '终-系统管理-权限管理.png', '终-系统管理-员工管理.png', '终-新建渠道活码-新.png', '终-营销工具-短链引流.png', '终-营销工具-欢迎语.png', '终-营销工具-企微客服.png', '终-营销工具-渠道活码.png', '终-营销工具-消息群发.png']
            .map((name) => asset(`assets/lynkco/后台/${name}`)),
        },
      ],
      miniapp: [
        {
          title: '领克 小程序',
          images: ['1 3.png', '1 4.png', '1 5.png', '1 6.png', '3-弹窗.png', '弹窗01.png', '小程序首页.png']
            .map((name) => asset(`assets/lynkco/小程序/${name}`)),
        },
      ],
      campaign: [
        {
          title: '领克 运营图',
          images: ['1 3.png', '1 4.png', '1 5.png', '1 6.png']
            .map((name) => asset(`assets/lynkco/运营图/${name}`)),
        },
      ],
    },
  },
  {
    id: 'yushu',
    name: '宇数租机',
    summary: '租机业务增长界面',
    cover: asset('assets/5.png'),
    images: [asset('assets/5.png'), asset('assets/4.png'), asset('assets/6.png')],
    sections: {
      miniapp: [
        {
          title: '宇数租机 小程序',
          images: yushuMiniappImages.map((name) => asset(`assets/yushu/${name}`)),
        },
      ],
    },
  },
  {
    id: 'jiangshanfu',
    name: '疆山赋',
    summary: '品牌系统与营销设计',
    cover: asset('assets/6.png'),
    images: [asset('assets/6.png'), asset('assets/7.png'), asset('assets/1.png')],
    sections: {
      admin: [
        {
          title: '疆山赋 后台',
          images: jiangshanfuAdminImages.map((name) => asset(`assets/jiangshanfu/后台/${name}`)),
        },
      ],
      miniapp: [
        {
          title: '疆山赋 小程序',
          images: jiangshanfuMiniappImages.map((name) => asset(`assets/jiangshanfu/小程序/${name}`)),
        },
      ],
    },
  },
  {
    id: 'library',
    name: '浙江图书馆',
    summary: '公共空间数字体验',
    cover: asset('assets/7.png'),
    images: [asset('assets/7.png'), asset('assets/2.png'), asset('assets/1.png')],
    sections: {
      app: [
        {
          title: '浙江图书馆 APP',
          images: ['登录 10.png', '登录 11.png', '登录 12.png', '登录 15.png', '登录 20.png', '登录 21.png', '登录 4.png', '登录 5.png', '登录 6.png', '登录 7.png', '登录 8.png', '登录 9.png']
            .map((name) => asset(`assets/library/APP/${name}`)),
        },
        {
          title: '网借服务 APP',
          images: ['1 8.png', '登录 10.png', '登录 11.png', '登录 12.png', '登录 13.png', '登录 14.png', '登录 15.png', '登录 16.png', '登录 17.png', '登录 18.png', '登录 4.png', '登录 6.png', '登录 7.png', '登录 8.png', '登录 9.png']
            .map((name) => asset(`assets/library/APP2/${name}`)),
        },
      ],
      website: [
        {
          title: '浙江图书馆 网站',
          images: ['1 7.png', '3 1.png', '4 1.png', '检索详情 1.png', '检索详情.png', '快递还书 1.png', '快递还书详情 1.png', '首页@1x.png', '书单荐购 1.png', '数字资源.png', '搜索框为空点击检索时.png', '特藏文献.png', '图书荐购说明页 1.png', '图书预约记录 1.png', '我的订单 1.png']
            .map((name) => asset(`assets/library/网站/${name}`)),
        },
        {
          title: '网借服务 网站',
          images: ['10 1.png', '11 1.png', '12 1.png', '2 24.png', '4 2.png', '5 2.png', '7 1.png', '8 247941.png', '网借首页-未登录 2.png']
            .map((name) => asset(`assets/library/网站2/${name}`)),
        },
      ],
    },
  },
  {
    id: 'wadaren',
    name: '挖达人',
    summary: '全店运营与增长素材',
    cover: asset('assets/8.png'),
    images: [asset('assets/8.png')],
    sections: {
      banner: [
        {
          title: '挖达人 Banner',
          images: wadarenImageGroups.banner.map((name) => asset(`assets/wadaren/banner/${name}`)),
        },
      ],
      miniapp: [
        {
          title: '挖达人 小程序',
          images: wadarenImageGroups.miniapp.map((name) => asset(`assets/wadaren/小程序/${name}`)),
        },
      ],
      desktop: [
        {
          title: '挖达人 桌面端',
          images: wadarenImageGroups.desktop.map((name) => asset(`assets/wadaren/桌面端/${name}`)),
        },
      ],
      website: [
        {
          title: '挖达人 网站',
          images: wadarenImageGroups.website.map((name) => asset(`assets/wadaren/网站/${name}`)),
        },
      ],
      campaign: [
        {
          title: '挖达人 运营图',
          images: wadarenImageGroups.campaign.map((name) => asset(`assets/wadaren/运营图/${name}`)),
        },
      ],
    },
  },
];

const caseTypeLabels = [
  { id: 'banner', label: 'BANNER' },
  { id: 'campaign', label: '运营图' },
  { id: 'miniapp', label: '小程序' },
  { id: 'website', label: '网站' },
  { id: 'desktop', label: '桌面端' },
  { id: 'app', label: 'APP' },
  { id: 'admin', label: '后台' },
];

const getCaseImageDisplayPriority = (src) => {
  const fileName = decodeURIComponent(src.split('/').pop() ?? '').toLowerCase();
  const compactName = fileName.replace(/\s+/g, '');

  if (/^(首页|主页|小程序首页|home|index)([-_@.\d！\w]*)?\.(png|jpg|jpeg|webp)$/.test(compactName)) return 0;
  if (compactName.includes('首页') || compactName.includes('主页') || compactName.includes('小程序首页')) return 1;
  if (compactName.includes('未登录') || compactName.includes('登录')) return 2;
  if (compactName.includes('产品页') || compactName.includes('产品02') || compactName.includes('产品')) return 3;
  if (compactName.includes('分类') || compactName.includes('资源库') || compactName.includes('仪表盘')) return 4;
  return 10;
};

const sortCaseImagesForDisplay = (images) => images
  .map((image, index) => ({ image, index, priority: getCaseImageDisplayPriority(image) }))
  .sort((a, b) => a.priority - b.priority || a.index - b.index)
  .map(({ image }) => image);

const buildCaseSections = (project) => {
  if (!project) return [];
  const sectionMap = project.sections ?? {};

  return caseTypeLabels.map((type) => {
    const entries = sectionMap[type.id] ?? [];
    const groups = entries.length > 0 && typeof entries[0] === 'object'
      ? entries.map((group) => ({
        title: group.title,
        images: sortCaseImagesForDisplay(group.images).map((image, imageIndex) => ({
          src: image,
          title: group.title,
          meta: `${type.label} ${String(imageIndex + 1).padStart(2, '0')}`,
        })),
      }))
      : [{
        title: '',
        images: sortCaseImagesForDisplay(entries).map((image, imageIndex) => ({
          src: image,
          title: `${project.name} · ${type.label}`,
          meta: `${type.label} ${String(imageIndex + 1).padStart(2, '0')}`,
        })),
      }];

    const images = groups.flatMap((group) => group.images.map((image) => {
      return {
        ...image,
        groupTitle: group.title,
      };
    }));

    return {
      ...type,
      groups,
      images,
    };
  });
};

const getCaseColumnCount = (sectionId) => {
  if (sectionId === 'admin' || sectionId === 'website' || sectionId === 'desktop') return 2;
  if (sectionId === 'app' || sectionId === 'miniapp' || sectionId === 'campaign' || sectionId === 'banner') return 4;
  return 3;
};

const getImageRatioHint = (src) => {
  if (src.includes('/library/网站/') && src.includes('首页@1x')) return 1920 / 7854;
  if (src.includes('/library/APP/') && src.includes('登录 5')) return 516 / 5142;
  if (src.includes('/library/APP2/') && src.includes('1 8')) return 516 / 2516;
  if (src.includes('/lynkco/小程序/') && src.includes('小程序首页')) return 375 / 4408;
  if (src.includes('/sureauto/')) return 375 / 884;
  if (src.includes('/nfcc/') && src.endsWith('.jpg')) return 1080 / 2316;
  if (src.includes('/wadaren/banner/') || src.includes('/wadaren/运营图/')) return 750 / 1000;
  if (src.includes('/wadaren/桌面端/') || src.includes('/wadaren/网站/') || src.includes('/library/网站') || src.includes('/lynkco/后台')) return 1440 / 960;
  return src.includes('/APP') || src.includes('/小程序') || src.includes('/jinshi') || src.includes('/library/APP') || src.includes('/lynkco/企业微信端')
    ? 375 / 812
    : 9 / 16;
};

const splitIntoColumns = (items, columnCount) => {
  const columns = Array.from({ length: columnCount }, () => []);

  items.forEach((item, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(item);
  });

  return columns;
};

const flipWords = [
  { text: '处理产品需求', color: '#3E6CFF' },
  { text: '输出交互DEmo', color: '#00B8DB' },
  { text: '设计UI页面', color: '#FFCC00' },
  { text: '搭建AI产品设计工作流', color: '#FF00EA' },
  { text: '处理产品需求', color: '#3E6CFF' },
];

const strengths = [
  {
    icon: BrainCircuit,
    title: '本地初始化AI-Agents',
    text: '新项目&新窗口投喂Agents进行本地初始化设置，待skill和规则文件完成后可以进行下一步需求投喂',
  },
  {
    icon: Component,
    title: '投喂需求-定义需求-产出PRD',
    text: '拿到投喂需求-进行产品skill分析-定义需求环节-回复确认后进行PRD输出和飞书文档自动录入',
  },
  {
    icon: Bot,
    title: '确认UI端设计方向',
    text: '读取上一步需求MD文档，进行配置skill的端口确认，也可以自定义风格，确认后进行设计图原型交互设计',
  },
  {
    icon: Gauge,
    title: '预览&MCP源文件处理',
    text: '效果输出后优化细节方案，如需其他操作可以通过第三方MCP进行源文件处理。',
  },
];

const strengthShowcaseSlides = [
  {
    id: 'beam',
    type: 'beam',
    title: 'AI Agents Workflow',
  },
  {
    id: 'agent-slide-1',
    type: 'image',
    title: '本地初始化 AI-Agents',
    src: asset('assets/agent-slides/1.png'),
  },
  {
    id: 'agent-slide-2',
    type: 'image',
    title: '投喂需求与定义需求',
    src: asset('assets/agent-slides/2.png'),
  },
  {
    id: 'agent-slide-3',
    type: 'image',
    title: '确认 UI 端设计方向',
    src: asset('assets/agent-slides/3.png'),
  },
  {
    id: 'agent-slide-4',
    type: 'image',
    title: '预览与 MCP 源文件处理',
    src: asset('assets/agent-slides/4.png'),
  },
];

const timeline = [
  {
    time: '2023.02 - 2026.05',
    company: '浙江凌雅科技',
    role: 'AI设计师 + 产品助理',
    detail:
      '结合用户需求确定业务方向，完成需求框架、原型与设计评审，主导数据分析平台改版，并使用 AIGC 完成促销海报及 IP 应用。',
  },
  {
    time: '2021.05 - 2023.02',
    company: '杭州疆山赋科技',
    role: 'UI设计师',
    detail:
      '管理设计部门工作安排，重构老后台 UI，搭建设计组件库，梳理 UED 流程与微 UX 体验，推动企服小程序重构。',
  },
  {
    time: '2018.11 - 2020.10',
    company: '浙江帅车数据科技',
    role: 'UI设计师',
    detail:
      '主导品牌视觉规范搭建，参与产品评审与用户测试，建立设计评审机制，推动线下交易模式升级为线上平台。',
  },
];

function ResumeGlow({ children, className = '', radius = 14, animated = false }) {
  return (
    <BorderGlow
      className={className}
      backgroundColor="rgba(11, 16, 23, 0.86)"
      borderRadius={radius}
      glowColor="190 90 72"
      glowRadius={12}
      glowIntensity={0.58}
      edgeSensitivity={26}
      coneSpread={18}
      fillOpacity={0}
      animated={animated}
      colors={['#6ee7f5', '#5b8cff', '#b8f36b']}
    >
      {children}
    </BorderGlow>
  );
}

function Nav() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);
  const contactRef = React.useRef(null);
  const items = [
    ['经历', '#experience'],
    ['项目', '#projects'],
    ['优势', '#strengths'],
    ['联系', '#contact'],
  ];

  React.useEffect(() => {
    if (!isContactOpen) return undefined;
    const handlePointerDown = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsContactOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isContactOpen]);

  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="回到首页">
        <span className="brand-mark">W</span>
        <span>个人网站</span>
      </a>
      <nav aria-label="主导航">
        {items.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <div className="nav-contact-wrap" ref={contactRef}>
        <button
          className="nav-contact"
          type="button"
          aria-expanded={isContactOpen}
          aria-controls="nav-contact-popover"
          onClick={() => setIsContactOpen((open) => !open)}
        >
          <Phone size={16} />
          电话
        </button>
        {isContactOpen && (
          <div className="nav-contact-popover" id="nav-contact-popover" role="dialog" aria-label="电话和微信">
            <a href={`tel:${directContact.phone}`}>
              <Phone size={17} />
              <span>
                <small>电话</small>
                {directContact.phone}
              </span>
            </a>
            <div>
              <MessageCircle size={17} />
              <span>
                <small>微信</small>
                {directContact.wechat}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const [activeProjectId, setActiveProjectId] = React.useState(null);
  const caseWorkPanelRef = React.useRef(null);
  const activeProject = projectCases.find((project) => project.id === activeProjectId);
  const activeCaseSections = React.useMemo(
    () => buildCaseSections(activeProject),
    [activeProject],
  );
  const visibleCaseSections = React.useMemo(
    () => activeCaseSections.filter((section) => section.images.length > 0),
    [activeCaseSections],
  );
  const openProject = React.useCallback((item) => {
    const selected = projectCases.find((project) => project.name === item.text || project.cover === item.image);
    setActiveProjectId(selected?.id ?? projectCases[0].id);
  }, []);
  const scrollToCaseType = React.useCallback((sectionId) => {
    const panel = caseWorkPanelRef.current;
    const scroller = panel?.querySelector('.case-work-sections');
    const target = scroller?.querySelector(`[data-case-section="${sectionId}"]`);
    if (!scroller || !target) return;
    const top = target.offsetTop - scroller.offsetTop;
    scroller.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });
  }, []);

  React.useEffect(() => {
    if (!activeProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveProjectId(null);
    };
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.classList.add('modal-open');
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('modal-open');
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activeProject]);

  React.useEffect(() => {
    const scroller = caseWorkPanelRef.current?.querySelector('.case-work-sections');
    if (scroller) scroller.scrollTo({ top: 0 });
  }, [activeProjectId]);

  return (
    <section className="hero" id="top">
      <div className="hero-fallback" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-pill">
          <Sparkles size={16} />
          AI DESIGNER / UI DESIGNER
        </div>
        <div className="hero-flip" aria-label="能力流程">
          <span>我可以</span>
          <div className="flip-window">
            <div className="flip-track">
              {flipWords.map((word, index) => (
                <strong key={`${word.text}-${index}`} style={{ color: word.color }}>
                  {word.text}
                </strong>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-gallery" aria-label="精选项目画廊">
          <CircularGallery
            items={galleryItems}
            onSelect={openProject}
            bend={0.55}
            textColor="#E8F7FF"
            borderRadius={0.035}
            font="bold 24px Inter"
            scrollSpeed={1.2}
            scrollEase={0.045}
          />
        </div>
        <p className="hero-gallery-note">*点击查看案例页面</p>
      </div>
      {activeProject &&
        createPortal(
          <div className="case-modal" role="dialog" aria-modal="true" aria-label="项目图片展示">
            <button className="case-modal-backdrop" type="button" onClick={() => setActiveProjectId(null)} aria-label="关闭图片预览" />
            <div className="case-modal-panel">
              <div className="case-modal-main">
                <div className="case-modal-header">
                  <div className="case-tabs" aria-label="项目分类">
                    {projectCases.map((project) => (
                      <button
                        key={project.id}
                        className={project.id === activeProject.id ? 'is-active' : ''}
                        type="button"
                        onClick={() => setActiveProjectId(project.id)}
                      >
                        <img src={project.cover} alt="" />
                        <span>
                          <strong>{project.name}</strong>
                          <small>{project.summary}</small>
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="case-title">
                    <span>此处只做图片案例展示</span>
                    <h2>{activeProject.name}</h2>
                  </div>
                </div>
              </div>
              <div className="case-modal-masonry">
                <div className="case-work-panel" ref={caseWorkPanelRef}>
                  <div className="case-type-nav" aria-label="端类型分类">
                    <span>{activeProject.name}</span>
                    <div>
                      {visibleCaseSections.map((section) => (
                        <button
                          className="case-type-button"
                          key={section.id}
                          type="button"
                          onClick={() => scrollToCaseType(section.id)}
                        >
                          <span>{section.label}</span>
                          {' '}
                          <small>{section.images.length}</small>
                        </button>
                      ))}
                      <button className="case-modal-close" type="button" onClick={() => setActiveProjectId(null)} aria-label="关闭">
                        <CircleX size={22} strokeWidth={2.15} />
                      </button>
                    </div>
                  </div>
                  <div className="case-work-sections">
                    {visibleCaseSections.map((section) => (
                      <section
                        className={`case-work-section case-work-${section.id}`}
                        data-case-section={section.id}
                        key={section.id}
                      >
                        <div className="case-work-heading">
                          <h3>{section.label}</h3>
                          <i aria-hidden="true" />
                        </div>
                        {section.groups.map((group, groupIndex) => (
                          <div className="case-work-group" key={`${section.id}-${group.title || groupIndex}`}>
                            {group.title && <h4>{group.title}</h4>}
                            <div
                              className="case-work-grid"
                              style={{ '--case-columns': getCaseColumnCount(section.id) }}
                            >
                              {splitIntoColumns(group.images, getCaseColumnCount(section.id)).map((column, columnIndex) => (
                                <div className="case-work-column" key={`${section.id}-${group.title || groupIndex}-${columnIndex}`}>
                                  {column.map((image) => (
                                    <article className="case-work-card" key={`${section.id}-${image.src}`}>
                                      <img src={image.src} alt={image.title} />
                                      <div aria-hidden="true">{image.meta}</div>
                                    </article>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="resume-panel">
        <div className="resume-left">
          <div className="resume-stats">
            <ResumeGlow className="resume-stat-card" animated>
              <article>
                <strong>6+</strong>
                <span>年 UI / 产品设计经验</span>
                <p>覆盖 C 端 APP、小程序、B 端系统、桌面端与应用端设计。</p>
              </article>
            </ResumeGlow>
            <ResumeGlow className="resume-stat-card">
              <article>
                <strong>0-1</strong>
                <span>项目落地能力</span>
                <p>从需求、原型、交互 Demo 到高保真 UI 与设计规范推进上线。</p>
              </article>
            </ResumeGlow>
          </div>

          <ResumeGlow className="resume-statement" radius={14}>
            <h3>联系我的方式</h3>
            <div className="resume-contact">
              {contacts.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <Icon size={17} />
                    <span>
                      <small>{label}</small>
                      {value}
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href}>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </ResumeGlow>
        </div>

        <ResumeGlow className="resume-photo-card" radius={14}>
          <TiltedCard
            imageSrc={asset('assets/profile-photo.jpg')}
            altText="王伟个人照片"
            captionText="Wang Wei"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={7}
            scaleOnHover={1.035}
            displayOverlayContent
            overlayContent={
              <div className="resume-hero">
                <span>PROFILE</span>
                <h2>王伟</h2>
                <p>
                  AI产品/UI设计师。擅长将业务需求转译为可上线、可复用、可验证的产品体验，并用AIGC工作流提升视觉与交付效率。
                </p>
              </div>
            }
          />
        </ResumeGlow>
      </div>
    </section>
  );
}

function ExperienceFlow() {
  return (
    <section className="experience-flow" aria-label="工作经历路径">
      <div className="flow-grid">
        {timeline.map((item, index) => (
          <article className="flow-card" key={item.company}>
            <div className="flow-top">
              <span className="flow-dot" aria-hidden="true" />
              <div className="flow-line" aria-hidden="true" />
            </div>
            <div className="flow-meta">{item.time}</div>
            <h3>{item.company}</h3>
            <strong>{item.role}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [previewVideo, setPreviewVideo] = React.useState(null);
  const [previewGallery, setPreviewGallery] = React.useState(null);
  const showcaseScrollerRef = React.useRef(null);

  React.useEffect(() => {
    if (!previewVideo && !previewGallery) return undefined;
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewVideo(null);
        setPreviewGallery(null);
      }
    };

    body.classList.add('modal-open');
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('modal-open');
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [previewVideo, previewGallery]);

  const closeProjectPreview = React.useCallback(() => {
    setPreviewVideo(null);
    setPreviewGallery(null);
  }, []);

  const scrollShowcaseSection = React.useCallback((sectionId) => {
    const scroller = showcaseScrollerRef.current;
    const target = scroller?.querySelector(`[data-showcase-section="${sectionId}"]`);
    if (!scroller || !target) return;
    scroller.scrollTo({
      top: Math.max(0, target.offsetTop - scroller.offsetTop),
      behavior: 'smooth',
    });
  }, []);

  return (
    <section className="section projects" id="projects">
      <div className="section-heading">
        <span>Selected Work</span>
        <h2>设计思路详解案例</h2>
      </div>
      <MagicBento
        items={projects}
        textAutoHide={false}
        enableStars
        enableSpotlight
        enableBorderGlow
        enableTilt
        enableMagnetism
        clickEffect
        spotlightRadius={320}
        particleCount={8}
        glowColor="110, 231, 245"
        onCardSelect={(project) => {
          if (project.video) setPreviewVideo(project.video);
          if (project.gallerySections) setPreviewGallery(project);
        }}
      />
      {previewVideo &&
        createPortal(
          <div className="video-modal" role="dialog" aria-modal="true" aria-label="视频案例预览">
            <button className="video-modal-backdrop" type="button" onClick={closeProjectPreview} aria-label="关闭视频预览" />
            <div className="video-modal-panel">
              <button className="video-modal-close" type="button" onClick={closeProjectPreview}>
                <CircleX size={24} strokeWidth={2.15} />
              </button>
              <video src={previewVideo} controls autoPlay playsInline />
            </div>
          </div>,
          document.body,
        )}
      {previewGallery &&
        createPortal(
          <div className="showcase-modal" role="dialog" aria-modal="true" aria-label={`${previewGallery.galleryTitle}案例预览`}>
            <button className="showcase-modal-backdrop" type="button" onClick={closeProjectPreview} aria-label="关闭案例预览" />
            <div className="showcase-modal-panel">
              <aside className="showcase-modal-side">
                <h2>{previewGallery.galleryTitle}</h2>
                <p>{previewGallery.description}</p>
              </aside>
              <div className="showcase-work-panel">
                <div className="showcase-type-nav" aria-label="案例分类">
                  <strong>{previewGallery.galleryTitle}</strong>
                  <div>
                    {previewGallery.gallerySections.map((section) => (
                      <button
                        className="case-type-button"
                        key={section.id}
                        type="button"
                        onClick={() => scrollShowcaseSection(section.id)}
                      >
                        <span>{section.label}</span>
                        <small>{section.images.length}</small>
                      </button>
                    ))}
                    <button className="case-modal-close" type="button" onClick={closeProjectPreview} aria-label="关闭">
                      <CircleX size={22} strokeWidth={2.15} />
                    </button>
                  </div>
                </div>
                <div className="showcase-work-sections" ref={showcaseScrollerRef}>
                  {previewGallery.gallerySections.map((section) => (
                    <section
                      className={`case-work-section case-work-${section.id}`}
                      data-showcase-section={section.id}
                      key={section.id}
                    >
                      <div className="case-work-heading">
                        <h3>{section.label}</h3>
                        <i aria-hidden="true" />
                      </div>
                      <div className="case-work-group">
                        <h4>{section.title}</h4>
                        <div className={`case-work-grid showcase-ordered-grid showcase-ordered-grid--${section.id}`}>
                          {section.images
                            .map((src, imageIndex) => ({
                              src,
                              title: `${section.title} ${String(imageIndex + 1).padStart(2, '0')}`,
                              meta: String(imageIndex + 1).padStart(2, '0'),
                            }))
                            .map((image) => (
                              <article className="case-work-card" key={image.src}>
                                <img src={image.src} alt={image.title} loading="lazy" />
                                <div aria-hidden="true">{image.meta}</div>
                              </article>
                            ))}
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

function AgentsBeamGraphic() {
  const nodes = [
    { id: 'product', icon: asset('assets/agent-icons/2.png'), x: 18, y: 24 },
    { id: 'figma', icon: asset('assets/agent-icons/3.png'), x: 18, y: 50 },
    { id: 'design', icon: asset('assets/agent-icons/4.png'), x: 18, y: 76 },
    { id: 'github', icon: asset('assets/agent-icons/5.png'), x: 82, y: 24 },
    { id: 'preview', icon: asset('assets/agent-icons/6.png'), x: 82, y: 50 },
  ];

  return (
    <div className="agents-beam" aria-label="AI Agents 工作流动效">
      <svg viewBox="0 0 1000 526" role="img">
        <defs>
          <linearGradient id="beamLineLeft" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(110,231,245,0.12)" />
            <stop offset="50%" stopColor="rgba(110,231,245,0.78)" />
            <stop offset="100%" stopColor="rgba(255,0,234,0.58)" />
          </linearGradient>
          <linearGradient id="beamLineRight" x1="1" x2="0" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(110,231,245,0.12)" />
            <stop offset="50%" stopColor="rgba(110,231,245,0.78)" />
            <stop offset="100%" stopColor="rgba(255,0,234,0.58)" />
          </linearGradient>
          <filter id="beamGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="beam-lines">
          <path className="beam-path beam-path--base" d="M500 263 C392 216 300 152 180 126" />
          <path className="beam-path beam-path--base" d="M500 263 C390 263 300 263 180 263" />
          <path className="beam-path beam-path--base" d="M500 263 C392 310 300 374 180 400" />
          <path className="beam-path beam-path--base" d="M500 263 C608 216 700 152 820 126" />
          <path className="beam-path beam-path--base" d="M500 263 C610 263 700 263 820 263" />
          <path className="beam-path beam-path--active beam-path--left beam-delay-1" d="M500 263 C392 216 300 152 180 126" />
          <path className="beam-path beam-path--active beam-path--left beam-delay-2" d="M500 263 C390 263 300 263 180 263" />
          <path className="beam-path beam-path--active beam-path--left beam-delay-3" d="M500 263 C392 310 300 374 180 400" />
          <path className="beam-path beam-path--active beam-path--right beam-delay-4" d="M500 263 C608 216 700 152 820 126" />
          <path className="beam-path beam-path--active beam-path--right beam-delay-5" d="M500 263 C610 263 700 263 820 263" />
        </g>
      </svg>
      {nodes.map((node) => (
        <div
          className="agents-beam-node"
          key={node.id}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <img src={node.icon} alt="" />
        </div>
      ))}
      <div className="agents-beam-center">
        <img src={asset('assets/agent-icons/1.png')} alt="" />
      </div>
    </div>
  );
}

function StrengthShowcase() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [previewSlide, setPreviewSlide] = React.useState(null);
  const activeSlide = strengthShowcaseSlides[activeIndex];

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % strengthShowcaseSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (!previewSlide) return undefined;
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setPreviewSlide(null);
    };

    body.classList.add('modal-open');
    body.style.overflow = 'hidden';
    documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.classList.remove('modal-open');
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [previewSlide]);

  return (
    <>
      <div className="strength-showcase" aria-label="AI Agents 流程轮播">
        <button
          className="strength-showcase-stage"
          type="button"
          onClick={() => {
            if (activeSlide.type === 'image') setPreviewSlide(activeSlide);
          }}
          aria-label={activeSlide.type === 'image' ? `查看${activeSlide.title}` : activeSlide.title}
        >
          {activeSlide.type === 'beam' ? (
            <AgentsBeamGraphic />
          ) : (
            <img src={activeSlide.src} alt={activeSlide.title} />
          )}
        </button>
        <div className="strength-showcase-dots" aria-label="轮播进度">
          {strengthShowcaseSlides.map((slide, index) => (
            <button
              className={index === activeIndex ? 'is-active' : ''}
              key={slide.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`切换到${slide.title}`}
            />
          ))}
        </div>
      </div>
      {previewSlide &&
        createPortal(
          <div className="image-preview-modal" role="dialog" aria-modal="true" aria-label={previewSlide.title}>
            <button className="image-preview-backdrop" type="button" onClick={() => setPreviewSlide(null)} aria-label="关闭图片预览" />
            <div className="image-preview-panel">
              <button className="video-modal-close" type="button" onClick={() => setPreviewSlide(null)}>
                <CircleX size={24} strokeWidth={2.15} />
              </button>
              <img src={previewSlide.src} alt={previewSlide.title} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

function Strengths() {
  return (
    <section className="section strengths" id="strengths">
      <div className="section-heading">
        <span>Capability</span>
        <h2>AI-Codex产品&UI交互Agents搭建</h2>
      </div>
      <StrengthShowcase />
      <MagicBento
        className="strength-bento"
        items={strengths.map(({ icon: Icon, title, text }, index) => ({
          title,
          description: text,
          label: `Step ${String(index + 1).padStart(2, '0')}`,
          step: String(index + 1).padStart(2, '0'),
          icon: Icon,
          accent: ['#6ee7f5', '#5b8cff', '#ff00ea', '#b8f36b'][index],
        }))}
        layout="strength"
        textAutoHide={false}
        enableStars
        enableSpotlight
        enableBorderGlow
        enableTilt
        enableMagnetism
        clickEffect
        spotlightRadius={260}
        particleCount={10}
        glowColor="110, 231, 245"
      />
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-finale" id="contact">
      <div className="finale-orbit" aria-hidden="true" />
      <div className="finale-inner">
        <div className="section-heading">
          <span>Contact</span>
          <h2>期待与你一起，把下一款产品做得更清晰、更高效、更有记忆点。</h2>
        </div>
        <div className="finale-actions">
          <a className="primary-button" href="mailto:1362369675@qq.com">
            <Mail size={18} />
            1362369675@qq.com
          </a>
          <a className="ghost-button" href="tel:13185050272">
            <Phone size={18} />
            13185050272
          </a>
        </div>
        <div className="finale-strip">
          <span>
            <Layers3 size={18} />
            UI Design
          </span>
          <span>
            <Waypoints size={18} />
            Product UX
          </span>
          <span>
            <DatabaseZap size={18} />
            SaaS / B端
          </span>
          <span>
            <MousePointer2 size={18} />
            AIGC Workflow
          </span>
        </div>
      </div>
    </section>
  );
}

function SiteMotion() {
  React.useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      gsap.set('.site-nav', { y: -28, autoAlpha: 0, scaleX: 0.92, transformOrigin: '50% 0%' });
      gsap.set('.hero-pill', { clipPath: 'inset(0 100% 0 0)', y: 20, autoAlpha: 0 });
      gsap.set('.hero-flip', { clipPath: 'inset(0 0 100% 0)', y: 82, scaleY: 0.68, autoAlpha: 0, transformOrigin: '50% 100%' });
      gsap.set('.hero-gallery', { clipPath: 'inset(0 0 100% 0)', y: 96, scale: 0.94, autoAlpha: 0 });
      gsap.set('.hero-gallery-note', { y: 18, autoAlpha: 0 });

      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .to('.site-nav', { y: 0, autoAlpha: 1, scaleX: 1, duration: 1.05 })
        .to('.hero-pill', { clipPath: 'inset(0 0% 0 0)', y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.45')
        .to('.hero-flip', { clipPath: 'inset(0 0 0% 0)', y: 0, scaleY: 1, autoAlpha: 1, duration: 1.35 }, '-=0.24')
        .to('.hero-gallery', { clipPath: 'inset(0 0 0% 0)', y: 0, scale: 1, autoAlpha: 1, duration: 1.55 }, '-=0.65')
        .to('.hero-gallery-note', { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.65');

      const sections = gsap.utils.toArray('main > section');
      sections.forEach((section) => {
        const heading = section.querySelector('.section-heading h2');
        const kicker = section.querySelector('.section-heading span');
        const cards = section.id === 'experience'
          ? section.querySelectorAll('.resume-panel')
          : section.querySelectorAll('.resume-stat-card, .resume-photo-card, .resume-statement, .flow-card, .magic-bento-card, .strength-showcase, .finale-actions, .finale-strip');
        const images = section.querySelectorAll('.strength-showcase-stage');

        if (kicker) {
          gsap.from(kicker, {
            y: 22,
            autoAlpha: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 74%', once: true },
          });
        }

        if (heading) {
          gsap.from(heading, {
            y: 118,
            scaleY: 0.68,
            autoAlpha: 0,
            clipPath: 'inset(0 0 100% 0)',
            transformOrigin: '50% 100%',
            duration: 1.18,
            ease: 'power4.out',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true },
          });
        }

        if (cards.length > 0) {
          gsap.from(cards, {
            y: 72,
            autoAlpha: 0,
            scale: 0.965,
            duration: 1.08,
            ease: 'power3.out',
            stagger: 0.13,
            scrollTrigger: { trigger: section, start: 'top 62%', once: true },
          });
        }

        images.forEach((image) => {
          gsap.from(image, {
            clipPath: 'inset(0 0 100% 0)',
            y: 44,
            scale: 1.04,
            duration: 1.35,
            ease: 'power4.out',
            scrollTrigger: { trigger: image, start: 'top 82%', once: true },
          });
        });
      });

      gsap.utils.toArray('.strength-showcase-stage > img').forEach((image) => {
        gsap.to(image, {
          yPercent: -7,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}

function App() {
  return (
    <>
      <SiteMotion />
      <div className="site-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-right"
          raysColor="#e5f0ff"
          raysSpeed={1.12}
          lightSpread={1.24}
          rayLength={1.92}
          fadeDistance={1.28}
          saturation={1.28}
          followMouse
          mouseInfluence={0.12}
          noiseAmount={0}
          distortion={0.08}
        />
      </div>
      <Nav />
      <Hero />
      <main>
        <Experience />
        <ExperienceFlow />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </>
  );
}

const rootElement = document.getElementById('root');
const appRoot = window.__wangWeiPortfolioRoot ?? createRoot(rootElement);
window.__wangWeiPortfolioRoot = appRoot;
appRoot.render(<App />);
