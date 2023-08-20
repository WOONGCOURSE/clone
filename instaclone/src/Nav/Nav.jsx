import React from 'react';
import * as S from './Navs'; 

//img
 const instalog = '../../../img/nav/InstagramTextLogo.svg';
 const home = '../../../img/nav/HomeIcon.svg';
 const search = '../../../img/nav/Search.svg';
 const look = '../../../img/nav/Compass.svg';
 const li = '../../../img/nav/Reels.svg';
 const send = '../../../img/nav/Message.svg';
 const Alarm = '../../../img/nav/Alarm.svg';
 const the = '../../../img/nav/Plus.svg';
 const thelook = '../../../img/nav/Burger.svg';
 
function Nav(){
    return(
        <S.navbar>
             <S.log src={instalog} />
             <S.itembar>
                 <S.item>
                     <S.img src={home} />
                     <S.iconname>홈</S.iconname>
                 </S.item>

                 <S.item>
                     <S.img src={search} />
                     <S.iconname>검색</S.iconname>
                 </S.item>

                 <S.item>
                     <S.chimg src={look} />
                     <S.iconname>탐색 탭</S.iconname>
                 </S.item>

                 <S.item>
                     <S.chimg src={li} />
                     <S.iconname>릴스</S.iconname>
                 </S.item>

                 <S.item>
                     <S.chimg src={send} />
                     <S.iconname>메시지</S.iconname>
                 </S.item>

                 <S.item>
                     <S.img src={Alarm} />
                     <S.iconname>알람</S.iconname>
                 </S.item>

                 <S.item>
                     <S.img src={the} />
                     <S.iconname>만들기</S.iconname>
                 </S.item>


                 <S.down>
                     <S.img src={thelook} />
                     <S.iconname>더보기</S.iconname>
                 </S.down>
             </S.itembar>
 </S.navbar>
    );
}


export default Nav;