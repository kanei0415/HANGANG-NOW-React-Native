export type MbtiLinkResultTypes =
  | {
      type: 'result';
      uid: string;
    }
  | {
      type: 'start';
      uid: null;
    };

export const getMbtiLinkConfig = (mbtiUid?: string) => ({
  link: `https://hangangnow/mbti${mbtiUid ? '/result/' + mbtiUid : '/start'}`,
  domainUriPrefix: 'https://hangangnow.page.link',
  android: {
    packageName: 'com.hangangnow',
  },
});

export const parseMbtiLink = (
  link: string | null,
): MbtiLinkResultTypes | null => {
  if (!link) {
    return null;
  }

  if (link.endsWith('start')) {
    return {
      type: 'start',
      uid: null,
    };
  }

  const mbtiUid = link.split('/result/')[1];

  if (!mbtiUid) {
    throw Error('dynamiclink malformed error');
  }

  return {
    type: 'result',
    uid: mbtiUid,
  };
};
