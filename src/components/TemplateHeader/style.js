import styled from 'styled-components';
import colors from '../../assets/css/colors';

export const Header = styled.header`
  background: ${colors.main};
  padding:20px;

  & h1 {
    color: ${colors.white};
    font-size:2em;
    text-transform: uppercase;
  }

  & .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  }

  & .Logo {
    display:flex
  }

    @media (max-width: 760px) {
      .Menu {
        display:none;
      }
    }


  & .Menu ul {
      display:flex;
      list-style:none;
      flex-wrap:wrap
  }
  & .Menu li {
    display: inline-block;
    padding:10px 0 0 20px;
  }

  & .Menu a {
        color: ${colors.white};
        text-transform: uppercase;
        font-size: 1.2em;
        font-weight:400;
        padding: 5px 0 0 0;
        display:inline-block;
      }
`;

export default Header;

