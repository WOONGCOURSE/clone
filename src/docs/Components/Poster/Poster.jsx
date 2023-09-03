import React from 'react';
import * as S from './Poster.style.jsx';

//IMG
const Profile1 = '../../../Img/Posts/Post1/ProfileIMG.jpg';
const Source1 = '../../../Img/Posts/Post1/SourceIMG.jpg';
const Plus = '../../../Img/Posts/Plus.png';
const Icon_Hurt = '../../../Img/Posts/Icon/Hurt.svg';
const Icon_Comment = '../../../Img/Posts/Icon/Comment.svg';
const Icon_Message = '../../../Img/Posts/Icon/Message.svg';
const Icon_BookMark = '../../../Img/Posts/Icon/BookMark.svg';

const Poster = () => {
    return (
        <S.PostContainer>
            <S.Header>
                <S.Header_Img src={Profile1} />
                <S.Header_ID>happy.life.Korea</S.Header_ID>
                <S.Header_PlusIMG src={Plus} />
            </S.Header>
            <S.Body>
                <S.Body_Img src={Source1} />
            </S.Body>
            <S.Icons>
                <S.Icon src={Icon_Hurt} />
                <S.Icon src={Icon_Comment} />
                <S.Icon src={Icon_Message} />
                <S.Icon src={Icon_BookMark} />
            </S.Icons>
            <S.Footer>
                <S.Footer_Title>_wlgb님 여러 명이 좋아합니다</S.Footer_Title>
                <S.Footer_Body>
                    개강 전에 다운로드 받아놓자 ( •̀ .̫ •́ )✧!!
                    <br />
                    대학생들 갓생 살게 해주는 💙아이폰 필수어플 추천63💙
                    <br />
                    <br />
                    +) 마지막장에 보너스로 꿀 어플까지 넣어놨음!!
                </S.Footer_Body>
            </S.Footer>
        </S.PostContainer>
    );
};
export default Poster;
