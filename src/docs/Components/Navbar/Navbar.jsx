import React from 'react';
import * as S from './Navbar.style.jsx';

const InstaTextLogo = '../../../Img/InstagramTextLogo.svg';
const HomeIcon = '../../../Img/HomeIcon.svg';
const Search = '../../../Img/Search.svg';
const Compass = '../../../Img/Compass.svg';
const Reels = '../../../Img/Reels.svg';
const Message = '../../../Img/Message.svg';
const Alarm = '../../../Img/Alarm.svg';
const Plus = '../../../Img/Plus.svg';
const Burger = '../../../Img/Burger.svg';
const Profile = '../../../Img/Profile.jpg';

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
