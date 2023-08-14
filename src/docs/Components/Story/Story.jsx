import React from 'react';
import * as S from './Story.style.jsx';

//IMG
const Story1 = '../../../Img/Story/Story1.jpg';

const Story = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <S.StoryContainer>
            <S.LeftButton onClick={slideLeft}>left</S.LeftButton>
            <S.Items id='slider'>
                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun1</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun2</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun3</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun4</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun5</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun6</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun7</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun8</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun9</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun10</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun11</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun12</S.ItemText>
                </S.Item>

                <S.Item>
                    <S.icon src={Story1} />
                    <S.ItemText>SeoungHyun13</S.ItemText>
                </S.Item>
            </S.Items>
            <S.RightButton onClick={slideRight}>Right</S.RightButton>
        </S.StoryContainer>
    );
};

export default Story;
