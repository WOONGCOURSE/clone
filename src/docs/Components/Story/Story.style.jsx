import s from 'styled-components';

export const StoryContainer = s.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    font-family: 'Raleway', sans-serif;
    margin-left: 15%;
    width: 1105px;
    text-align: center;
    background-color: red;
    overflow: hidden;
`

export const Items = s.div`
    display: flex;
`

export const Item = s.div`
    margin-right: 30px;
    width: 95px
`

export const icon = s.img`
    width: 66px;
    border-radius: 100%;
    border: 0.5px solid lightgrey;
`

export const ItemText = s.div`
    
`

export const LButton = s.button`
    position: absolute;
`

export const RButton = s.button`
    position: absolute;
    right: 1000px;

    &active {
        transform: translate(300px);
    }
`
