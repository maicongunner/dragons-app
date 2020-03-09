import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    line-height: 12px;
    color: #999;
    margin-top: 20px;
    font-weight: bold;
  }

  input,
  textarea {
    border: 1px solid #eeeeee;
    padding: 10px;
    font-size: 12px;
    line-height: 12px;
    color: #000000;
    margin: 5px 0;
    border-radius: 4px;
  }

  textarea {
    resize: none;
  }
`;

export default Form;
