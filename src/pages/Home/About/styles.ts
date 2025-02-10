import styled from "styled-components";

export const AboutSection = styled.section`
  background-color: var(--gray-100);
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 1.25rem;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem 1.875rem;
  flex: 1;

  @media (max-width: 769px) {
    img {
      display: none;
    }
  }
`;

export const AboutTitle = styled.h1`
  color: var(--gray-900);
  font-family: var(--primary-font);
  font-size: 4.125rem;
  line-height: 1.1;

  @media (max-width: 769px) {
    text-align: center;
    div {
      display: inline;
    }
  }
`;

export const AboutDescription = styled.p`
  color: var(--gray-850);
  font-size: 1.4375rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

export const AboutQuote = styled.cite`
  color: var(--gray-900);
  font-size: 1.5rem;
  font-weight: 500;
  max-width: 38rem;
  margin: 0 auto;
  text-align: center;
  text-wrap: balance;
`;

export const AboutImage = styled.img`
  border-radius: 0.75rem;
  object-fit: cover;
  flex: 1;
`;

export const ImageContainer = styled.div`
  img {
    height: 100%;
  }
  max-width: 30rem;
`;
