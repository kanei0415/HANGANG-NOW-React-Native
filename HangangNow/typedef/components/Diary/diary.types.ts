export type EmotionTypes =
  | 'EXCITED'
  | 'LOVELY'
  | 'BIG_SMILE'
  | 'FUNNY'
  | 'PEACEFUL'
  | 'SMILE'
  | 'SAD'
  | 'ANGRY'
  | 'FROWNING'
  | 'DIZZY';

export type Weathertypes =
  | 'SUN'
  | 'SUN_CLOUD'
  | 'CLOUD'
  | 'CLOUD_RAIN'
  | 'CLOUD_SNOW'
  | 'SNOWMAN'
  | 'UMBRELLA'
  | 'WIND';

export type DiaryType = {
  content: string;
  diaryDate: string;
  diaryWeather: Weathertypes;
  emotion: EmotionTypes;
  id: number;
  title: string;
  url: string;
};
