import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../Services/api';

import Container from '../../../components/Layout/Container';
import Form from '../../../components/Layout/Form';
import Button from '../../../components/Layout/Button';

export default function New() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/dragon/`, {
        name,
        type,
        histories,
      });
      if (response.data) {
        toast.success('Dragão cadastrado com sucesso!');
      }
      history.push('/');
    } catch (error) {
      toast.error(`Houve um erro ao cadastrar o dragão [${error.message}]`);
    }
  }

  return (
    <Container>
      <h3>Novo Dragão</h3>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          value={name}
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
          texto="Cadastrar"
          textoBotao="Cadastrar"
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
