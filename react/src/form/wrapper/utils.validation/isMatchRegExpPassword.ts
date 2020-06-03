export function isMatchRegExpPassword(passwordValue: string) {
  const validatePattern = new RegExp('^\\w{5,}$')
  return validatePattern.test(passwordValue);
}