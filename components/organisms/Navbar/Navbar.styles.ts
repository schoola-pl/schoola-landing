import styled from 'styled-components';

export const Logo = styled.div`
  position: relative;
  font-size: 2.3rem;
  font-weight: 700;
  padding-left: 2.5rem;

  &::after {
    content: '.';
    color: #55ab67;
  }
`;
