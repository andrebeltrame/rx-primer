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

  .Menu {
    display:flex;
  }


  & .Menu ul {
      display:flex;
      list-style:none;
      flex-wrap:wrap;
      margin: 5px 20px 0 20px;
      
  }
  & .Menu li {
    display: inline-block;
    padding:5px 0 0 20px;
  }

  & .Menu a {
        color: ${colors.white};
        text-transform: uppercase;
        font-size: 1em;
        font-weight:400;
        display:flex;
        &:hover {
          color: ${colors.secundary};
        }

    }

    .Menu a svg {
      float: right;
       margin: 3px 0 0 6px;
    }


  @media (max-width: 760px) {
      .NotMobile {
        display:none!important;
      }
      h1 {
      font-size:1em;
      }

      .Menu ul {
        margin: 0;
      }

      .Menu a {
        font-size:1em;
      }
  }


`;

export default Header;

