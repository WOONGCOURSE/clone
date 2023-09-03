import React from 'react';
import * as S from './Navbar.style.jsx';

//IMG
const InstaTextLogo = '../../../Img/NavIcon/InstagramTextLogo.svg';
const HomeIcon = '../../../Img/NavIcon/HomeIcon.svg';
const Search = '../../../Img/NavIcon/Search.svg';
const Compass = '../../../Img/NavIcon/Compass.svg';
const Reels = '../../../Img/NavIcon/Reels.svg';
const Message = '../../../Img/NavIcon/Message.svg';
const Alarm = '../../../Img/NavIcon/Alarm.svg';
const Plus = '../../../Img/NavIcon/Plus.svg';
const Burger = '../../../Img/NavIcon/Burger.svg';
const Profile = '../../../Img/NavIcon/Profile.jpg';

const Navbar = () => {
    return (
        <S.NavbarContainer>
            <S.FullImg src={InstaTextLogo} />
            <S.Items>
                <S.Item>
                    <S.icon src={HomeIcon} />
                    <S.ItemText>홈</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Search} />
                    <S.ItemText>검색</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Compass} />
                    <S.ItemText>탐색 탭</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Reels} />
                    <S.ItemText>릴스</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Message} />
                    <S.ItemText>메시지</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Alarm} />
                    <S.ItemText>알람</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Plus} />
                    <S.ItemText>만들기</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.Profileicon src={Profile} />
                    <S.ItemText>프로필</S.ItemText>
                </S.Item>

                <S.UnderItem>
                    <S.icon src={Burger} />
                    <S.ItemText>더보기</S.ItemText>
                </S.UnderItem>
            </S.Items>
        </S.NavbarContainer>
    );
};

export default Navbar;
