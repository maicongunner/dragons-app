import produce from 'immer';
import history from '../../../Services/history';

const INITIAL_STATE = {
  signed: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return produce(state, draft => {
        const { usuario, senha } = action.payload;
        if (usuario === 'maicon' && senha === 'maicon') {
          draft.signed = true;
          history.push('/');
        }
      });
    case 'SIGN_OUT':
      return produce(state, draft => {
        draft.signed = false;
        history.push('/login');
      });
    default:
      return state;
  }
}
