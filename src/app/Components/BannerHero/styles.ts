'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 6rem;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;

  .Memoji {
    max-width: 25rem;
    height: auto;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem;

    .Memoji {
      width: 20rem !important;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 2rem;

  .content {
    position: relative;
    overflow: hidden;
    font-size: 2.1875rem;
    line-height: 2.5rem;
    color: #ecf0f1;

    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 2.5rem;

      &__text {
        display: inline;
        float: left;
        margin: 0;
      }

      &__list {
        margin-top: 0;
        padding-left: 5.875rem;
        text-align: left;
        list-style: none;
        animation-name: change;
        animation-duration: 17s;
        animation-iteration-count: infinite;

        &__item {
          line-height: 2.5rem;
          margin: 0;
        }
      }
    }
  }

  @-webkit-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-webkit-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @-o-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-o-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @-moz-keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @-moz-keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @keyframes opacity {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  @keyframes change {
    0%,
    12.66%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    16.66%,
    29.32% {
      transform: translate3d(0, -25%, 0);
    }
    33.32%,
    45.98% {
      transform: translate3d(0, -50%, 0);
    }
    49.98%,
    62.64% {
      transform: translate3d(0, -75%, 0);
    }
    66.64%,
    79.3% {
      transform: translate3d(0, -50%, 0);
    }
    83.3%,
    95.96% {
      transform: translate3d(0, -25%, 0);
    }
  }

  @media (max-width: 1024px) {
    margin: 0 0 2rem 0;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 2rem;
  position: relative;
  transform: translatey(0px);
  animation: float 7s ease-in-out infinite;

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
      animation: floatReact 5s ease-in-out infinite;
    }

    &.js {
      bottom: 2.5rem;
      right: 0rem;
      animation: floatJs 5s ease-in-out infinite;
    }

    &.css {
      bottom: 0;
      left: 2.5rem;
      animation: floatCss 5s ease-in-out infinite;
    }

    @keyframes float {
      0% {
        transform: translatey(0px) translateX(0px) rotate(0deg);
      }
      40% {
        transform: translatey(-3px) translateX(-4px) rotate(0.3deg);
      }
      80% {
        transform: translatey(-2px) translateX(-3px) rotate(0.1deg);
      }
      100% {
        transform: translatey(0px) translateX(0px) rotate(0deg);
      }
    }

    @keyframes floatJs {
      0% {
        transform: translateX(0px) rotate(0deg);
      }
      40% {
        transform: translateX(-0.2px) rotate(-5deg);
      }
      80% {
        transform: translateX(-0.1px) rotate(-0.2deg);
      }
      100% {
        transform: translateX(0px) rotate(0deg);
      }
    }

    @keyframes floatReact {
      0% {
        transform: translateX(0px) rotate(0deg);
      }
      40% {
        transform: translateX(-8px) rotate(-4deg);
      }
      80% {
        transform: translateX(-0.1px) rotate(-0.2deg);
      }
      100% {
        transform: translateX(0px) rotate(0deg);
      }
    }

    @keyframes floatCss {
      0% {
        transform: translateX(0px) rotate(0deg);
      }
      40% {
        transform: translateX(4px) rotate(9deg);
      }
      80% {
        transform: translateX(-0.1px) rotate(-2deg);
      }
      100% {
        transform: translateX(0px) rotate(0deg);
      }
    }
  }
`;
