import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actionsLogin from '../../store/modules/login/actions';

import Button from '../../components/Layout/Button';

import { Container } from './styles';

export default function Header() {

  const logado = useSelector(state => state.login.signed);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(actionsLogin.signOut());
  }

  return (
    <Container>
      <Link to="/">
        <h1>Dragon's App</h1>
      </Link>
      { logado && (
        <Button
          texto="Sair"
          textoBotao="Sair"
          icon=""
          classe="btn-logout"
          click={() => handleLogout()}
        />
      )}
    </Container>
  );
}
