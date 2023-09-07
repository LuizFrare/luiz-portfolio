'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 8rem;

  img {
    width: 100%;
    max-width: 25rem;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 4rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 2rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 2rem;
  position: relative;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  .svgIcon {
    width: 100%;
    height: auto;
    max-width: 2.5rem;
    max-height: 2.5rem;
    position: absolute;
    overflow: hidden;

    &.react {
      top: 0;
      left: 2.5rem;
    }

    &.js {
      bottom: 2.5rem;
      right: 0rem;
    }

    &.css {
      bottom: 0;
      left: 2.5rem;
    }

    @keyframes float {
      0% {
        transform: translatey(0px) translateX(0px) rotate(0deg);
      }
      40% {
        transform: translatey(-20px) translateX(-15px) rotate(1deg);
      }
      80% {
        transform: translatey(-5px) translateX(-5px) rotate(-1deg);
      }
      100% {
        transform: translatey(0px) translateX(0px) rotate(0deg);
      }
    }
  }
`;
