import styled from 'styled-components';

export const GroupUsers = styled.div`
margin: 40px 0;
.users-label {
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:nowrap;
    margin: 0 0 20px 0;
    h4 {
        font-weight:100;
        font-size:1.2em;
        & strong {
            font-weight:800;
        }
    }
}
`;
export default GroupUsers;
