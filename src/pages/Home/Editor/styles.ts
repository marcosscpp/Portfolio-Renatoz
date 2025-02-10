import styled from "styled-components";

export const EditorSection = styled.section`
  color: var(--white);
  max-width: 78rem;
  margin: 0 auto;
`;

export const EditorHeader = styled.header`
  text-align: center;
  max-width: 65rem;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const EditorTitle = styled.h1`
  font-size: 4rem;
  font-family: var(--primary-font);
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

export const EditorDescription = styled.p`
  font-size: 1.4375rem;
  font-weight: 300;
`;

export const EditorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export const EditorMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 37rem;
  flex-grow: 1;
`;

export const EditorMenuItem = styled.li`
  align-items: center;
  background: linear-gradient(
    180deg,
    var(--purple-300-transparent),
    var(--purple-600-transparent)
  );
  cursor: pointer;
  border-radius: 0.75rem;
  border: 1px solid var(--gray-100);
  display: flex;
  font-family: var(--primary-font);
  font-size: 1.75rem;
  gap: 2rem;
  padding: 2rem;

  img {
    background-color: var(--white);
    border-radius: 50%;
    padding: 0.625rem;
    height: 3.25rem;
    width: 3.25rem;
  }

  &.active {
    border: 2px solid var(--purple-200);
    color: var(--purple-200);
    padding: calc(2rem - 1px);

    img {
      background-color: var(--purple-200);
    }
  }
`;

export const EditorSliderContainer = styled.div`
  border-radius: 0.75rem;
  flex: 1;
  overflow: hidden;

  & > div {
    max-height: 38rem;
    & > img {
      height: auto !important;
    }
  }
`;
