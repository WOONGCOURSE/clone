import React from 'react';
import * as S from './Storys';

//img
const my = './img/story/my.png';

const Story = () => {
    return (
      <>
       <S.CircleContainer>
        {Array.from({ length: 8 }).map((_, index) => (
          <S.Circle key={index} />
        ))}
      </S.CircleContainer>
      <S.CircleTextContainer>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
        <S.CircleText>huiioae</S.CircleText>
      </S.CircleTextContainer>
      
      </>
     
    );
  };
  
  export default Story;