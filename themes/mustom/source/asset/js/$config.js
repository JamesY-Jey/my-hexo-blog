/**
 * 全局js配置
 */
const isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(window.navigator.userAgent);
const isChinese = /^(zh)/i.test(window.navigator.browserLanguage || window.navigator.language || 'zh');

const $config = {
    isMobile: isMobile, // 是否是移动端
    isChinese: isChinese, // 浏览器语言
    closeDrawer: isMobile, // 左侧aside
    closeAside: false, // 右侧aside
    skin: 'colorful', // 默认皮肤
    langshift: !isChinese, // 转换语言，默认中文
    night: false, // 夜间模式
    transfigure: false, // 透明live2d看板娘
    lyride: true, // 隐藏歌词
    autoplay: false, // 自动播放music
    noCanvas: false, // 隐藏live2d看板娘
};

export default $config;
