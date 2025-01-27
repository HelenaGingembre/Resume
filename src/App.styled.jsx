import styled from 'styled-components';

export const LinkSide = styled.a`
  display: inline-block;
  position: absolute;
  right: 20px;
  height: 50px;
  padding: 5px 20px;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  align-content: center;

  cursor: pointer;
  transition: all 250ms var(--timingFn);
  color: var(--accentColor);
  background-color: #fff;
  border: 2px solid var(--accentColor);
  border-radius: 25px;
  :hover,
  :focus {
    color: var(--accentColor);
    background-color: transparent;
  }
`;
