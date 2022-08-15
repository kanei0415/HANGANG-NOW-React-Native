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
    Mbti: {
      back: require('./images/components/Mbti/ic-primary-back.png'),
      text: require('./images/components/Mbti/ic-text.png'),
    },
    Diary: {
      triangle: require('./images/components/Diary/ic-tri.png'),
    },
    HangangNow: {
      char: require('./images/components/HangangNow/ic-char.png'),
    },
    MyPage: {
      placeholder: require('./images/components/MyPage/ic-ph-profile.png'),
      rightArrow: require('./images/components/MyPage/ic-right-arrow.png'),
      setting: require('./images/components/MyPage/ic-setting.png'),
      prev: require('./images/components/MyPage/ic-prev.png'),
      next: require('./images/components/MyPage/ic-next.png'),
      add: require('./images/components/MyPage/ic-add.png'),
      checked: require('./images/components/MyPage/ic-checked.png'),
    },
    Home: {
      mainbanner: require('./images/components/Home/ic-home-banner.png'),
      prev: require('./images/components/Home/ic-prev.png'),
      next: require('./images/components/Home/ic-next.png'),
    },
    Leaflet: {
      downArrow: require('./images/components/Leaflet/ic-down-arrow.png'),
    },
  },
} as const;

export default images;
