import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  padding: 16px;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
`;



const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const Suggestions = styled.div`
  margin-top: 20px;
`;

const SuggestionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SuggestionItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SuggestedProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const FollowButton = styled.button`
  border: none;
  background-color: #0095f6;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

function InstagramSidebar() {
  return (
    <SidebarContainer>
      <UserInfo>
        <ProfileImage
          className="profileImage"
          src="https://via.placeholder.com/50"
          alt="프로필 이미지"
        />
        <div>
          <UserName>huise0ng</UserName>
          <div className="username">희성٭</div>
        </div>
      </UserInfo>
      <Suggestions>
        <h5>회원님을 위한 추천</h5>
        <SuggestionsList>
          {['cys_070124', 'cys_070124', 'cys'].map((friend, index) => (
            <SuggestionItem key={index}>
              <SuggestedProfileImage
                className="suggestedProfileImage"
                src={`https://via.placeholder.com/30`}
                alt="프로필 이미지"
              />
              {friend}
              <FollowButton>팔로우</FollowButton>
            </SuggestionItem>
          ))}
        </SuggestionsList>
      </Suggestions>
    </SidebarContainer>
  );
}

// StoryCircles
const CircleWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CircleProgress = styled.div`
  position: absolute;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 2px solid #d62976;
  background-image: linear-gradient(288.5deg, #5433FF 0%, #20BDFF 46%, #A5FECB 96%);
  z-index: 2;
`;

const CircleContent = styled.div`
  width: 60px;
  height: 60px;
  background-color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Caption = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
`;

const StyledStoryCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
`;

const StoryCircle = ({ text, caption }) => {
  return (
    <StyledStoryCircle>
      <CircleWrapper>
        <CircleProgress />
        <CircleContent>{text}</CircleContent>
      </CircleWrapper>
      <Caption>{caption}</Caption>
    </StyledStoryCircle>
  );
};

const InstaPostContainer = styled.div`
  width: 438px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  margin-bottom: 60px;
`;


const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const PostImage = styled.img`
  width: 438px;
  height: 438px;
  object-fit: cover;
`;


const PostFooter = styled.div`
  padding: 16px;
`;

const Likes = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const Username = styled.span`
  font-weight: 600;
  margin-left: 8px;
`;

const UserProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;


const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  flex-grow: 1;
  background-color: #FFFFFF;
  max-width: 1350px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const StorySection = styled.div`
  align-self: flex-start;
  margin: 0 auto 24px;
`;


const PostSection = styled.div`
  align-self: center; 
`;


const StoriesWrapper = styled.div`
  display: flex;
  justify-content: center; 
  padding: 16px;
  overflow: auto;
  white-space: nowrap;
`;

function App() {
  const circles = [
    { text: "A", caption: "huise0ng" },
    { text: "B", caption: "jiwon_diary..." },
    { text: "C", caption: "orn.lbh" },
    { text: "D", caption: "hyetchu" },
    { text: "E", caption: "jjoon1379" },
    { text: "F", caption: "tmdwn_n" },
    { text: "G", caption: "hwax._.423" },
  ];

  return (
    <div> 
      <InstagramSidebar />
      <AppContainer>
        <Container>
          <Content>
            <StorySection>
              <StoriesWrapper>
                {circles.map((circle, index) => (
                  <StoryCircle key={index} text={circle.text} caption={circle.caption} />
                ))}
              </StoriesWrapper>
            </StorySection>
            <PostSection>
              <InstaPostContainer>
                <PostHeader>
                  <UserProfileImage src="https://via.placeholder.com/32x32" alt="Profile" />
                  <Username>spursofficial</Username> ⦁ 5분
                </PostHeader>
                <PostImage src="https://via.placeholder.com/438x438" alt="Post" />
                <PostFooter>
                  <Likes>좋아요 1043개</Likes>
                  <Likes>spursofficial</Likes> KANE ADDS A FOURTH! 🤩
                  <Likes></Likes>댓글 23개 모두 보기
                  <Likes></Likes>댓글 달기 ...
                </PostFooter>
              </InstaPostContainer>
            </PostSection>
          </Content>
        </Container>
      </AppContainer>
    </div>
  );
}

export default App;