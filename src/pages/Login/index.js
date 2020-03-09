import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Container from '../../components/Layout/Container';
import Form from '../../components/Layout/Form';
import Button from '../../components/Layout/Button';

import * as actionsLogin from '../../store/modules/login/actions';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(actionsLogin.signIn(usuario, senha));
  }

  return (
    <Container>
      <h3>Login</h3>
      <p>Digite seus dados abaixo para acessar o sistema:</p>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="usuario">Usuário:</label>
        <input
          id="usuario"
          type="text"
          value={usuario}
          required
          onChange={e => setUsuario(e.target.value)}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          type="password"
          value={senha}
          required
          onChange={e => setSenha(e.target.value)}
        />
        <Button
          texto="Acessar"
          textoBotao="Acessar"
          type="submit"
          classe="btn-submit"
        />
      </Form>
    </Container>
  );
}
