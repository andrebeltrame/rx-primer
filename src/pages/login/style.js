import styled from 'styled-components';
import BgFoods from '../../assets/img/continous.png'

export const LoginWrap = styled.section`
    display: flex;
    width:100vw;
    height: 100vh;
    background-image: url(${BgFoods});
    align-items: center;
    display: flex;
    justify-content: center;
    animation: slide 95s linear infinite;


    @keyframes slide {
    from {
            background-position: 0 0;
        }
        to {
            background-position: -1658px 0;
    }
}

   .my-login {
        max-width:380px;
        width: 100%;
        padding:20px;
        background:#fff;
        
    }

`;

export default LoginWrap;