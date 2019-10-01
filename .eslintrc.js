module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["import"],
  rules: {
    "no-console": 0,
    "no-alert": 0,
    "no-undef": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0
  }
};
