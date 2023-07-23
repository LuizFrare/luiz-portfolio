import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: var(--gray-dark);
  width: 100%;
  color: var(--white);
  padding: 1rem 2rem;

  .header-content {
    width: 100%;
    max-width: 85rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 2rem;
    background-color: var(--gray-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  &.open {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  color: white;
  text-decoration: none;
  &:first-child {
    color: var(--gray-light);
  }
  &:hover {
    opacity: 0.7;
    transition: all 0.4s ease-in-out;
  }
`;
