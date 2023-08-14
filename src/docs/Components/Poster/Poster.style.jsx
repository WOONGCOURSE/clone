import s from 'styled-components';

export const PostContainer = s.div`
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    
    margin-left: 40vw;
    margin-top: 5vh;
    width: 500px;
    border-bottom: 1px solid black;
`;

//Header
export const Header = s.div`
    display: flex;
    flex-direction: row;
`;

export const Header_Img = s.img`
    border-radius: 100%;
    width: 40px;
    height: 40px;
`;

export const Header_ID = s.span`
    font-size: 15px;
    line-height: 40px;
    margin-left: 1%;
`;

export const Header_PlusIMG = s.img`
    line-height: 40px;
    width: 30px;
    height: 30px;
    margin-left: 300px;
    float: right;
`;

//Body
export const Body = s.div`
`;

export const Body_Img = s.img`
    width: 500px;
    height: 600px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

//Icons
export const Icons = s.div`
`;

export const Icon = s.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;

    &:last-child {
        float: right;
    }
`;

//Footer
export const Footer = s.div`
    margin-bottom: 30px
`;

export const Footer_Title = s.div`
    
`;

export const Footer_Body = s.div`
    
`;
