export const product = {
  name: "五常·稻花香",
  origin: "黑龙江省齐齐哈尔市讷河市和盛乡龙庆粳57号地",
  certification: "碳标签认证",
  heroImage: "/images/rice-field.jpg"
};

export const carbonMetrics = [
  { value: 1.83, decimals: 2, suffix: "", label: "kgCO₂eq/kg", color: "#1a3c1a" },
  { value: 35, decimals: 0, suffix: "%", prefix: "-", label: "较常规种植减排", color: "#2d7a2d" },
  { value: 2.1, decimals: 1, suffix: "", label: "相当于种树（棵）", color: "#1a3c1a" }
];

export const timeline = [
  { icon: "🌱", title: "春耕整地", description: "4月 · 黑土地翻耕，秸秆还田固碳", image: "/images/timeline-1.jpg" },
  { icon: "🌾", title: "插秧播种", description: "5月 · 稻花香2号插秧，行距30cm", image: "/images/timeline-2.jpg" },
  { icon: "🦀", title: "蟹苗入田", description: "6月 · 中华绒螯蟹苗投放，每亩800只", image: "/images/timeline-3.jpg" },
  { icon: "☀️", title: "稻蟹共生", description: "7-8月 · 蟹吃虫除草，减少农药化肥施用", image: "/images/timeline-4.jpg" },
  { icon: "🌾", title: "收获烘干", description: "10月 · 适时收获，低温循环烘干", image: "/images/timeline-5.jpg" },
  { icon: "📦", title: "加工运输", description: "11月 · 精米加工，短链物流直达", image: "/images/timeline-6.jpg" }
];

export const farmer = {
  name: "王伯伯",
  identity: "黑龙江省齐齐哈尔市讷河市和盛乡龙庆粳57号地 · 种稻18年",
  avatar: "/images/farmer.jpg",
  story: "我种了一辈子稻子，头一回听说种地还能'减碳'。去年试了稻蟹共生，蟹在田里吃虫除草，农药化肥少用一大半，米还比以前好吃。现在告诉我这袋米贴了碳标签，城里人扫码能看到我的田——说实话，挺自豪的。",
  quote: "每亩省农药化肥约125元，蟹田米亩均增收约300元。",
  source: "——2025年8月实地调研记录"
};
