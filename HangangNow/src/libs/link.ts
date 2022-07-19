import { FirebaseDynamicLinksTypes } from '@react-native-firebase/dynamic-links';

export const getMbtiLinkConfig = (mbtiUid?: string) => ({
  link: `https://hangangnow/mbti/${mbtiUid ?? 'start'}`,
  domainUriPrefix: 'https://hangangnow.page.link',
  android: {
    packageName: 'com.hangangnow',
  },
});

export const parseMbtiLink = (
  link: FirebaseDynamicLinksTypes.DynamicLink,
): string | null => {
  const mbtiUid = link.url.split('mbti/')[1];

  if (!mbtiUid) {
    return null;
  }

  return mbtiUid;
};
