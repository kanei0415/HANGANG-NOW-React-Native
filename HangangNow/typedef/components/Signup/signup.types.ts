export const MALE_TYPE = 'MALE';

export const FEMALE_TYPE = 'FEMALE';

export type GenderTypes = typeof MALE_TYPE | typeof FEMALE_TYPE;

export type SignupBodyTypes = {
  birthday: string;
  email: string;
  gender: string;
  loginId: string;
  name: string;
  password: string;
};

export type SignupResponseTypes = {
  email: string;
  id: number;
  loginId: string;
  name: string;
};
