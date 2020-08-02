

import styled from "styled-components";
import colors from "../../assets/css/colors";

export const ListGroup = styled.ul`
         ul {
           list-style: none;
           display: grid;
           grid-template-columns: repeat(3, 1fr);
           grid-auto-rows: 1fr;
           grid-column-gap: 20px;
           grid-row-gap: 5px;
           margin: 0 0 30px 0;
         }

         @media (max-width: 780px) {
           ul {
             grid-template-columns: repeat(2, 1fr);
           }
         }

         li {
           margin-bottom: 35px;
           a {
             color: ${colors.base};
             font-weight:bold;
           }
         }

         img {
           width: 100%;
         }

         .thumbnail {
           width: 100%;
           height: 170px;
           background-size: cover;
           background-repeat: no-repeat;
           display: block;
           margin: 0 0 15px 0;
         }
         .btn {
           display: block;
           margin: 5px 0 0 0;
           text-transform: uppercase;
         }
       `;

export default ListGroup;