/* eslint-disable */
export function regEmail(email: string) {
  const regEmail =
    /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9\w\.\_\-]+\.)+[a-zA-Z0-9]{2,8}$/i;

  return regEmail.test(email);
}
