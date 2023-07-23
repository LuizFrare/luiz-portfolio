"use client";

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 85rem;
  font-weight: 500;
  background-color: var(--hamilton-blue);
  width: 100%;
  color: var(--white);
  padding: 1rem 0;

  nav {
    ul {
      display: flex;
      gap: 1rem;
      li {
        list-style: none;
      }
    }
  }
`;
