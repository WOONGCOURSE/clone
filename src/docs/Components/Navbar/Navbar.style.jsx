import styled from 'styled-components';

export const NavbarContainer = styled.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    
    position: fixed;
    border-right: 0.5px solid lightgrey;
    
    width: 244px;
    height: 100vh;
`;

export const FullImg = styled.img`
    width: 103px;
    cursor: pointer;
    margin-top: 3vh;
    margin-left: 25px;
`;

export const Items = styled.div`

`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
`

export const UnderItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 21vh;
`

export const ItemText = styled.span`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`

export const icon = styled.img`
    margin-left: 15%;
    margin-right: 16px;
    width: 24px;
`
export const Profileicon = styled.img`
    margin-left: 15%;
    margin-right: 16px;
    width: 24px;
    border-radius: 24px;
`