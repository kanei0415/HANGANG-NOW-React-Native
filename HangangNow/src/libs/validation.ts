export const VALIDATION_FAILURE_MESSAGE = '올바른 형식이 아닙니다';

export const REGEX = {
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  loginId: /^([a-z0-9]{5,20})$/,
  password: /^([a-zA-Z0-9]{8,15})$/,
  birth: /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/,
  code: /^([0-9]{6})$/,
} as const;

export function check(source: string, regex: RegExp): boolean {
  return regex.test(source);
}
