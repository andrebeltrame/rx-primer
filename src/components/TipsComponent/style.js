import styled from 'styled-components';
import colors from '../../assets/css/colors';

export const TipsMainList = styled.ul`
  list-style:none;
  & ::last-child {
          border: none;
      }
  li {
      display: flex;
      padding: 20px 0 20px 0;
      border-bottom:1px solid #eceaea;
      margin: 0 0 10px 0;
      align-items:baseline;
      justify-content: center;
      
      & .btn {
        margin: 0 0 0 30px;
        color: ${colors.secundary}
      }
  }
`;
export default TipsMainList;