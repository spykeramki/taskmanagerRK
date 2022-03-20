import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.isPopupOpen ? '#2FA9F1' : '#4E97C2'};
    height: 36px;
    padding: 0px 12px;
    border-radius: 4px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    &:hover{
        background-color: #2FA9F1;
    }
`