import styled from 'styled-components';
import colors from '../../assets/css/colors';

export const ArticlePostItem = styled.div`
 ul {
     display:block;
     li {
         display:flex;
         width:100%;
         align-items:center;
         border:1px solid #f3e8e8;
         margin: 0 0  10px 0;
     }
     a {
         color:#333;
     }
     h3 {
         font-weight:200;
         font-size:1.3rem
     }
 }
  .thumbnail {
    width:100px;
    height:100px;
    background-size: cover;
    background-repeat:no-repeat;
    margin: 0 15px 0px 0px;
    background-position:center;
  }

`;

export default ArticlePostItem;
