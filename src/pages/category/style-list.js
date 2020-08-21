import styled from "styled-components";

export const CategoriesList = styled.ul`
         margin: 0 0 30px 0;
         display: block;
         width: 100%;
         /* align-content: justify-content; */
         /* flex: 1; */

         li {
           padding: 10px 15px;
           background-color: #f7f2eb;
           margin: 0 0 1px 0;
           width: 100%;
         
           display: flex;
           flex-direction: row;
           align-content: justify-content;
            align-items: center; 

            svg {
                float:right;
                display:block;
            }
         }
       `;

export default CategoriesList;
