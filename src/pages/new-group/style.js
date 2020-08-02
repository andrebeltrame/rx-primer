import styled from 'styled-components';

export const GroupUsers = styled.div`
margin: 40px 0;
.users-label {
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:nowrap;
    h4 {
        font-weight:100;
        font-size:1em;
        & strong {
            font-weight:800;
        }
    }
}
`;
export default GroupUsers;
