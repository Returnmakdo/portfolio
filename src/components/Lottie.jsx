import Lottie from 'react-lottie';
import animationData from '../assets/4.json';
import { styled } from 'styled-components';

export default function LottieAnimation() {
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
  width: 500px;
  margin: auto;
`;
