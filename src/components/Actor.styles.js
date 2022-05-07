import styled from "styled-components";

export const Image = styled.img`
@media screen and (max-width: 768px) {
    font-size: var(--fontBig);
  }
`

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 20px;
  background-color: black;

  h1 {
    color: var(--medGrey);
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

`;