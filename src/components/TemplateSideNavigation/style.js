import styled from 'styled-components';
import colors from '../../assets/css/colors';

export const Aside = styled.aside`
    padding: 40px 0 0 40px;
    display: flex;
    flex: 1;
    flex-direction: column;

  ul {
    display:flex;
    align-items: flex-start;
  }
  & li {
      flex-direction: flex-row;
  }
  & li>a {
     padding: 0 0 15px 0;
    text-transform:uppercase;
    display: flex;
    color: ${colors.base};
    font-size:.9rem;
    line-height:1em;
        align-items: flex-start;
    &:hover {
         color: ${colors.secundary};
    }   
  }

`;

export default Aside;
