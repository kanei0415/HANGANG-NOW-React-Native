const images = {
  components: {
    common: {
      back: require('./images/components/common/ic-back.png'),
      check: require('./images/components/common/ic-check.png'),
      passwordHide: require('./images/components/common/ic-password-hide.png'),
      passwordShow: require('./images/components/common/ic-password-show.png'),
      unChecked: require('./images/components/common/ic-unchecked.png'),
    },
    Splash: {
      line: require('./images/components/Splash/ic-splash-line.png'),
      text: require('./images/components/Splash/ic-splash-text.png'),
    },
    Login: {
      label: require('./images/components/Login/ic-label.png'),
      kakao: require('./images/components/Login/ic-kakao.png'),
    },
    Signup: {
      done: require('./images/components/Signup/ic-done.png'),
    },
  },
} as const;

export default images;
