import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';

import iconEdit from '../../../assets/icons/writing.svg';
import iconDelete from '../../../assets/icons/trash.svg';
import iconDetail from '../../../assets/icons/search.svg';
import iconReturn from '../../../assets/icons/return.svg';
import iconAdd from '../../../assets/icons/plus.svg';

function retornaIcon(icon) {
  switch (icon) {
    case 'edit':
      return iconEdit;
      break;
    case 'delete':
      return iconDelete;
      break;
    case 'return':
      return iconReturn;
      break;
    case 'detail':
      return iconDetail;
      break;
    case 'new':
      return iconAdd;
      break;
    default:
      return '';
  }
}

const Button = ({ texto, icon, textoBotao, classe, type, click }) => (
  <ButtonStyle type={type} className={classe || ''} onClick={click}>
    {icon && <img src={retornaIcon(icon)} alt={texto} title={texto} />}
    <span>{textoBotao}</span>
  </ButtonStyle>
);

Button.defaultProps = {
  classe: '',
  icon: '',
  type: 'button',
  click: null,
};

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  textoBotao: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classe: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
