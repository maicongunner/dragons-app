import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../../Services/api';

import Form from '../../../components/Layout/Form';
import Button from '../../../components/Layout/Button';
import Container from '../../../components/Layout/Container';

export default function Edit({ match }) {
  const idDragon = match.params.id;
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function loadDataDragon() {
      const response = await api.get(`/dragon/${idDragon}`);
      setName(response.data.name);
      setType(response.data.type);
      setHistories(response.data.histories);
    }
    loadDataDragon();
  }, []);

  async function handleEditSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.put(`/dragon/${idDragon}`, {
        id: idDragon,
        name,
        type,
        histories,
      });
      if (response.data) {
        toast.success('Dados alterados com sucesso!');
      }
      history.push('/');
    } catch (error) {
      toast.error(
        `Houve um erro ao editar os dados do dragão [${error.message}]`
      );
    }
  }

  return (
    <Container>
      <h3>Editar dragão</h3>
      <Form onSubmit={handleEditSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Informe o nome do dragão"
          required
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="type">Tipo:</label>
        <input
          id="type"
          type="text"
          value={type}
          required
          onChange={e => setType(e.target.value)}
        />

        <label htmlFor="histories">Histórias:</label>
        <textarea
          id="histories"
          value={histories}
          onChange={e => setHistories(e.target.value)}
        />
        <Button
          type="submit"
          texto="Salvar"
          textoBotao="Salvar"
          classe="btn-submit"
        />
      </Form>
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

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
