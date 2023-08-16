import s from 'styled-components';

export const StoryContainer = s.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    font-family: 'Raleway', sans-serif;
    
    margin-left: 20vw;
    width: 58vw;
    text-align: center;
    display: flex;

`;

export const Items = s.div`
    margin-top: 2vh;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
    display: none;
    }
    display: flex;
`;

export const Item = s.div`
    margin-right: 30px;
    width: 95px
`;

export const icon = s.img`
    width: 66px;
    height: 66px;
    border-radius: 100%;
    border: 0.5px solid lightgrey;
`;

export const ItemText = s.div`
    
`;

export const LeftButton = s.button`
    position: absolute;
    margin-top: 25px;
    margin-top: 3.5vh;
    background-color: lightgray;
    height: 35px;
    border-radius: 100%;
    border: none;
`

export const RightButton = s.button`
    position: absolute;
    right: 22%;
    margin-top: 3.5vh;
    background-color: lightgray;
    height: 35px;
    border-radius: 100%;
    border: none;
`

export const buttonImg = s.img`
    width: 18px;
`