'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;

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
  gap: 0.5rem;
`;
