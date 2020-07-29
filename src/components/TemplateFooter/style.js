import styled from 'styled-components';
import colors from '../../assets/css/colors';

export const Footer = styled.footer`
  padding:20px;
  text-align:center;
  & p {
    color: ${colors.muted}
  }
 
`;

export default Footer;