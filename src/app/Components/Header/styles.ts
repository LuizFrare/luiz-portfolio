import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: var(--black);
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

  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
    position: relative;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    top: 4.9375rem;
    background-color: var(--black);
    padding: 2rem 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
    opacity: 0;
    visibility: hidden;
    right: 0rem;
  }

  &.open {
    display: flex;
    visibility: visible;
    opacity: 1;
    z-index: 9;
  }
`;

export const MenuItem = styled.li`
  color: white;
  text-decoration: none;
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:first-child {
    color: var(--gray-light);
  }

  &:hover {
    opacity: 0.7;
    transition: all 0.4s ease-in-out;
    background-position: 0;
  }

  &:hover::before {
    width: 100%;
  }

  &:before {
    content: "";
    background: var(--gray-light);
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
`;
