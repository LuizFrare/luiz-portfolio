import styled from "styled-components";

export const MenuIcon = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  flex-direction: column;
  justify-content: space-between;
  width: 1.5625rem;
  height: 1.25rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    width: 3rem;
    height: 3rem;
  }
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;

  .line {
    fill: none;
    stroke: var(--white);
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .opened.line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  .opened.line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  
  .opened.line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`;
