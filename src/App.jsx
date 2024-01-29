import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';
import Header from './layout/Header';
import LottieAnimation from './components/Lottie';
import { useRef, useState } from 'react';

const GlobalStyle = createGlobalStyle`
 ${reset}
`;

function App() {
  const scrollToSkill = () => {
    const section = document.getElementById('skill');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const [stream, setStream] = useState(null);
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const userMediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(userMediaStream);
      videoRef.current.srcObject = userMediaStream;
    } catch (error) {
      console.error('카메라를 시작하는 동안 오류 발생:', error);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Header scrollToSkill={scrollToSkill} />
      <Introduce>
        <Title>안녕하세요</Title>
        <Title>프론트엔드 개발자 안치영입니다.</Title>
        <LottieAnimation />
      </Introduce>
      <div>
        <button onClick={startCamera}>카메라 시작</button>
        {stream && <video ref={videoRef} autoPlay />}
      </div>
      <BorderLine />
      <Skill id="skill">
        <SubTitle>Skills</SubTitle>
        <SubExplanation>skills that can i use</SubExplanation>
        <SkillList>
          <SkillItem>
            <img src="/html.png" />
            <p>HTML</p>
          </SkillItem>
          <SkillItem>
            <img src="/css.png" />
            <p>CSS</p>
          </SkillItem>
          <SkillItem>
            <img src="/js.png" />
            <p>JavaScript</p>
          </SkillItem>
          <SkillItem>
            <img src="/ts.png" style={{ marginTop: '23px' }} />
            <p style={{ marginTop: '32px' }}>TypeScript</p>
          </SkillItem>
          <SkillItem>
            <img src="/react.png" />
            <p>React</p>
          </SkillItem>
          <SkillItem>
            <img src="/vue.png" style={{ marginTop: '25px', width: '70%' }} />
            <p style={{ marginTop: '27px' }}>Vue</p>
          </SkillItem>
        </SkillList>
        <SkillList>
          <SkillItem>
            <img src="/git.png" style={{ width: '100%', marginTop: '0px' }} />
            <p style={{ marginTop: '15px' }}>GitHub</p>
          </SkillItem>
          <SkillItem>
            <img src="/php.png" style={{ marginTop: '30px' }} />
            <p style={{ marginTop: '42px' }}>PHP</p>
          </SkillItem>
          <SkillItem>
            <img src="/Next.png" style={{ width: '100%', marginTop: '15px' }} />
            <p style={{ marginTop: '28px' }}>Next</p>
          </SkillItem>
          <SkillItem>
            <img src="/react-query.svg" style={{ marginTop: '16px' }} />
            <p style={{ marginTop: '26px' }}>React Query</p>
          </SkillItem>
          <SkillItem>
            <img src="/redux.png" style={{ marginTop: '8px' }} />
            <p style={{ marginTop: '26px' }}>Redux</p>
          </SkillItem>
          <SkillItem>
            <img src="/pinia.svg" style={{ width: '50%', marginTop: '12px' }} />
            <p style={{ marginTop: '27px' }}>Pinia</p>
          </SkillItem>
        </SkillList>
      </Skill>
      <BorderLine style={{ marginTop: '100px' }} />
    </>
  );
}
export default App;

export const BorderLine = styled.div`
  width: 70%;
  margin: auto;
  border: 0.2px solid #848484;
`;

export const Introduce = styled.div`
  width: 80%;
  margin: 150px auto auto auto;
  text-align: center;
`;

export const Title = styled.p`
  margin-bottom: 15px;
  font-size: 30px;
`;

export const Skill = styled.div`
  width: 80%;
  margin: 70px auto auto auto;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const SubExplanation = styled.p`
  margin-top: 20px;
  color: #848484;
`;

export const SkillList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 80px auto auto auto;
`;

export const SkillItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e6e6e6;
  img {
    display: block;
    width: 80%;
    height: auto;
    margin: 12px auto auto auto;
  }
  p {
    margin-top: 20px;
  }
`;
