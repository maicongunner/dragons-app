import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #666;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: relative;
  z-index: 10;

  &:hover {
    background-color: ${darken(0.08, '#f1f1f1')};
  }

  &.btn-return {
    margin-top: 30px;
    background: transparent;
    border: 0;
    font-weight: bold;
  }

  &.btn-submit {
    width: 100px;
    justify-content: center;
  }

  &.btn-logout {
    position: absolute;
    right: 20%;
    background-color: #000000;
    span {
      color: #ffffff;
    }
    @media (max-width: 767px) {
      right: 5%;
    }
  }

  img {
    width: 12px;
    height: 12px;
    margin: 0 5px;
  }

  span {
    font-size: 12px;
    line-height: 12px;
    color: #666;
  }
`;
