import { MbtiTypes } from '@typedef/components/Mbti/mbti.types';

export const getMbtiLinkConfig = (mbti: MbtiTypes) => ({
  link: `https://hangangnow/mbti/${mbti}`,
  domainUriPrefix: 'https://hangangnow.page.link',
  android: {
    packageName: 'com.hangangnow',
  },
});

export const parseMbtiLink = (link: string | null): MbtiTypes | null => {
  if (!link) {
    return null;
  }

  if (link.match('mbti')) {
    return link.split('/').pop() as MbtiTypes;
  }

  return null;
};
