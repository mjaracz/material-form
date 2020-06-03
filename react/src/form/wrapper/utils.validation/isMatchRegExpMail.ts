export function isMatchRegExpMail(emailValue: string) {
  const validatePattern = new RegExp('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$');
  return validatePattern.test(emailValue)
}