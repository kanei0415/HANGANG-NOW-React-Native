export const REGEX = {
  email: /^$/,
  id: /^([a-z0-9]{5,20})$/,
  pw: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,15}$/,
  birth: /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/,
} as const;

export function check(source: string, regex: RegExp): boolean {
  return regex.test(source);
}
