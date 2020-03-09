export function signIn(usuario, senha) {
  return {
    type: 'SIGN_IN',
    payload: { usuario, senha },
  };
}

export function signOut() {
  return {
    type: 'SIGN_OUT',
  };
}
