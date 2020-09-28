import styled from "styled-components";

export const CategoriesList = styled.ul`
         margin: 0 0 30px 0;
         display: block;
         width: 100%;
         /* align-content: justify-content; */
         /* flex: 1; */

         li {
           padding: 20px 15px;
           background-color: #f2f7f1;
           margin: 0 0 1px 0;
           width: 100%;
           display: flex;
           flex-direction: row;
           align-content: justify-content;
           align-items: center;
           &:hover {
             background-color: #f5f5f5;
           }

           svg {
             float: right;
             display: block;
           }
           button {
             margin: 0 20px 0 0;
             background-color: #222b4e;
             padding: 10px;
             color:#fff
           }
         }
       `;

export default CategoriesList;
