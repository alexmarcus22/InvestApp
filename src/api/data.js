import { assetsData } from "../theme/mockData";

const TIME = 1000;

export default {
  getData: (cb, timeout) => setTimeout(() => cb(assetsData), timeout || TIME),
};
