import storage from "./storage.js";
import $config from "../$config.js";

const config = Object.assign({
  closeDrawer: $config.isMobile,
  closeAside: $config.closeAside,
  skin: $config.skin,
  langshift: $config.langshift,
  night: $config.night,
  transfigure: $config.transfigure,
  lyride: $config.lyride,
  autoplay: $config.autoplay
}, storage.get('config'));

const get = key => {
  return config[key];
};

const set = (key, value) => {
  if (Object.keys(config).includes(key)) {
    config[key] = value;
    storage.set('config', config);
  }
};

export default {
  get,
  set
}