import styled from "styled-components";
import colors from "../../assets/css/colors";

export const ListGroup = styled.ul`
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    margin: 0 0 30px 0;
  }

  @media (max-width: 780px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  li {
    margin-bottom: 35px;
    text-align:center;
    a {
      color: ${colors.base};
      font-weight: bold;
    }
  }

  img {
    width: 100%;
  }

  .thumbnail {
    width: 120px;
    height: 120px;
    border-radius:100px;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto 20px auto;
  }
  .btn {
    display: block;
    margin: 5px 0 0 0;
    text-transform: uppercase;
  }
`;

export default ListGroup;
