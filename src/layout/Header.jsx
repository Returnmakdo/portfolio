import { useEffect, useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export default function Header({ scrollToSkill }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤링 효과를 위한 옵션
    });
  };
  return (
    <Wrapper scrolled={scrolled}>
      <Name>
        <a>CHIYOUNG</a>
      </Name>
      <TagWrapper>
        <Tags onClick={scrollToTop}>Home</Tags>
        <Tags onClick={scrollToSkill}>Skills</Tags>
        <Tags>Qualification</Tags>
        <Tags>Services</Tags>
        <Tags>Projects</Tags>
        <Tags>Contact</Tags>
      </TagWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  padding-top: 30px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  text-align: center;
  justify-content: space-around;
  transition: 0.7s;
  z-index: 99;
  box-shadow: ${(props) => (props.scrolled ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
`;

export const TagWrapper = styled.div`
  width: 65%;
`;

export const Name = styled.a`
  width: 35%;
  font-size: 18px;
  font-weight: 600;
  a {
    cursor: pointer;
  }
`;

export const Tags = styled.a`
  margin-left: 40px;
  color: #848484;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    color: black;
  }
`;
