import Lottie from 'react-lottie';
import animationData from '../assets/1.json';
import { styled } from 'styled-components';

export default function ReactLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LottieWrap>
      <Lottie options={defaultOptions} />
    </LottieWrap>
  );
}

export const LottieWrap = styled.div`
  width: 200px;
  margin: auto auto auto 70%;
  position: absolute;
`;
