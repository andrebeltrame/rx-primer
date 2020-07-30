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

  .MobileMenu {
   position:relative;
   z-index: 999;
  }

  .LeftMenu {
    visibility:hidden;
    position: fixed;
    left:-100%;
    background-color: ${colors.main};
    width:350px;
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.29);
    height: 100vh;
    top: 0;
    transition: all .3s ease-in;
    z-index:90;
   
  }

  .MobileMenu.active .LeftMenu {
    visibility:visible;
    left: 0;
  }

   .LeftMenu ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      margin: 30px 0 0 0;
      
   }
   .LeftMenu li {
     flex: 1;
     padding: 10px 35px;
     & a {
        color: ${colors.white};
        display:block;
        &:hover {
          color: ${colors.primary}
        }
     }
   }

   .MobileMenu.active {
     & .menuOpacity {
       position: fixed;
       width:100vw;
       height: 100vh;
       background-color:#0000008a;
       z-index:-1;
       top: 0;
       left: 0;
       transition: all .3s ease-in;
     }
   }
  
`;

export default Header;

