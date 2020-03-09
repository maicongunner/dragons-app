import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import { Link } from 'react-router-dom';

import api from '../../../Services/api';

import Button from '../../../components/Layout/Button';
import Container from '../../../components/Layout/Container';

export default function Details({ match }) {
  const [dragon, setDragon] = useState([]);
  const [dataCadastro, setDataCadastro] = useState('');

  const idDragon = match.params.id;

  useEffect(() => {
    async function loadDataDragon() {
      const response = await api.get(`/dragon/${idDragon}`);
      setDragon(response.data);

      const formatDataCadastro = format(
        parseISO(response.data.createdAt),
        "dd/MM/yyyy 'às' HH:mm"
      );
      setDataCadastro(formatDataCadastro);
    }
    loadDataDragon();
  }, []);

  return (
    <Container key={dragon.id}>
      <h3>Detalhes</h3>
      <div>
        <p>
          <b>Data de criação:</b> {dataCadastro}
        </p>
        <p>
          <b>Name:</b> {dragon.name}
        </p>
        <p>
          <b>Tipo:</b> {dragon.type}
        </p>
      </div>
      <Link to="/">
        <Button
          texto="Voltar"
          icon="return"
          textoBotao="Voltar"
          classe="btn-return"
        />
      </Link>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
