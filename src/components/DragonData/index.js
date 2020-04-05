import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../Services/api';

import Button from '../Layout/Button';

import { Container } from './styles';

export default function DragonData({ data, loadDragons }) {
  async function handleDelete(id) {
    try {
      const response = await api.delete(`/dragon/${id}`);
      if (response.data) {
        toast.success('Dragão excluído com sucesso!');
        loadDragons();
      }
    } catch (error) {
      toast.error(`Houve um erro ao excluir o dragão [${error.message}]`);
    }
  }

  return (
    <Container>
      <Link to={`dragon/details/${data.id}`}>
        <p>
          <b>Nome:</b> {data.name}
        </p>
      </Link>
      <div>
        <Link to={`/dragon/details/${data.id}`}>
          <Button
            texto="Visualizar dragão"
            icon="detail"
            textoBotao="Detalhes"
          />
        </Link>
        <Link to={`/dragon/edit/${data.id}`}>
          <Button texto="Editar dragão" icon="edit" textoBotao="Editar" />
        </Link>
        <Button
          click={() => handleDelete(data.id)}
          texto="Excluir dragão"
          icon="delete"
          textoBotao="Excluir"
        />
      </div>
    </Container>
  );
}
