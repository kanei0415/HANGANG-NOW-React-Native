const images = {
  components: {
    common: {
      back: require('./images/components/common/ic-back.png'),
      check: require('./images/components/common/ic-check.png'),
      checked: require('./images/components/common/ic-checked.png'),
      passwordHide: require('./images/components/common/ic-password-hide.png'),
      passwordShow: require('./images/components/common/ic-password-show.png'),
      unChecked: require('./images/components/common/ic-un-check.png'),
    },
    Splash: {
      line: require('./images/components/Splash/ic-splash-line.png'),
      text: require('./images/components/Splash/ic-splash-text.png'),
    },
  },
} as const;

export default images;
