import styled from 'styled-components';
//import colors from '../../assets/css/colors';

export const ListRecipies = styled.div`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
   // grid-auto-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    margin: 0 0 30px 0;
  }

@media (max-width:780px) {
  ul {
     grid-template-columns: repeat(2, 1fr);
  }
}

  li {

  }

  img {
    width:100%;
  }


  
`;

export default ListRecipies;
