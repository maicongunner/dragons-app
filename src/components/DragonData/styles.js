import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.li`
  margin: 0;
  border-bottom: 1px solid #cccccc;
  border-radius: 2px;
  padding: 15px 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  div {
    display: flex;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s ease;
    position: relative;
    z-index: 20;
    margin: 10px 0 0 0;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    div {
      margin: 0;
    }
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    div {
      opacity: 0;
      position: absolute;
      top: 15px;
      right: 0;
    }
    &:hover {
      background-color: ${darken(0.03, '#ffffff')};
      div {
        opacity: 1;
      }
    }
  }
`;
