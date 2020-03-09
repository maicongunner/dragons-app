import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';

import api from '../../Services/api';

import { DragonsList } from './styles';

import DragonData from '../../components/DragonData';
import Container from '../../components/Layout/Container';
import Button from '../../components/Layout/Button';

export default function Home() {
  const [dragons, setDragons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const pageLimit = 10;

  async function loadDragons() {
    const response = await api.get('/dragon');
    const orderData = response.data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDragons(orderData);
  }

  useEffect(() => {
    loadDragons();
  }, []);

  useEffect(() => {
    setCurrentData(dragons.slice(offset, offset + pageLimit));
  }, [offset, dragons]);

  return (
    <Container>
      <Link to="/dragon/new">
        <Button
          texto="Novo dragão"
          textoBotao="Cadastrar novo dragão"
          icon="new"
        />
      </Link>
      <DragonsList>
        {currentData.map(dragon => (
          <DragonData key={dragon.id} data={dragon} loadDragons={loadDragons} />
        ))}
      </DragonsList>

      <Paginator
        totalRecords={dragons.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
}
