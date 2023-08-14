import React, { useEffect } from 'react';
import * as S from './Story.style.jsx';
import { data } from './StoryData.js';

//IMG
const LeftSvg = '../../Img/Story/Left.svg'
const RightSvg = '../../Img/Story/Right.svg'

const Story = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 550;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 550;
    };

    return (
        <S.StoryContainer>
            <S.LeftButton onClick={slideLeft}>
                <S.buttonImg src={LeftSvg} />
            </S.LeftButton>
            <S.Items id='slider'>
                {data.map((item) => (
                    <S.Item>
                        <S.icon src={item.img}/>
                        <S.ItemText>{item.id}</S.ItemText>
                    </S.Item>
                ))}
            </S.Items>
            <S.RightButton onClick={slideRight}>
                <S.buttonImg src={RightSvg} />
            </S.RightButton>
        </S.StoryContainer>
    );
};

export default Story;
