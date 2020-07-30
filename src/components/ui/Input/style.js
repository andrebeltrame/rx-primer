import styled from 'styled-components';
import colors from '../../../assets/css/colors';

export const FormField = styled.div`
  label {
      display:block;
      color:${colors.gray};
      padding: 0 0 10px 0;
  }
  input {
      display:block;
      padding:9px 15px;
      background: ${colors.faded};
      width:100%;
      border: 2px solid transparent;
      border-radius:3px;
      &:hover {
          outline: 2px solid  ${colors.primary};
           border-radius:3px;
      }
  }

  .formField {
      margin: 0 0 20px 0;
  }
`;

export default FormField;