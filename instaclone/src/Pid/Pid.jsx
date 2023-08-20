import React from 'react';
import * as S from './Pids';

 //IMG
 const my = './img/pid/my.png';
 const pid2 = './img/pid/pid2.jpg';
 const ali = '../../../img/pid/Alarm.svg';
 const chat= '../../../img/pid/Comment.svg';
 const send = '../../../img/pid/Message.svg';
 const bookmark = '../../../img/pid/BookMark.svg';

  function Pid(){
     return (
         <S.PostContainer>
             <S.Head>
                 <S.Himg src={my} />
                 <S.Hid>day_cody_what</S.Hid>
             </S.Head>
             <S.Body>
                 <S.Bimg src={pid2} />
             </S.Body>
             <S.Icon>
                 <S.icon src={ali} />
                 <S.icon src={chat} />
                 <S.icon src={send} />
                 <S.icon src={bookmark} />
             </S.Icon>
             <S.text>
                 <S.textname>
                    <br />
                    <br />
                    좋아요 190개
                 </S.textname>
                 <S.textdown>
                     day_cody_what 옆구리살 커버하는 💛
                     <br />
                     날씬코디꿀팁모음!
                     <br />
                     살빼고 싶다ㅠㅠㅠ
                     <br />
                     <br />
                     요즘 패선 트렌드는 👉 @day_cody_what
                 </S.textdown>
             </S.text>
         </S.PostContainer>
     );
 }
 export default Pid;