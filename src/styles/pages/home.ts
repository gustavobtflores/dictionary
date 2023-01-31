import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  padding: 3rem 0;
  display: flex;
`;

export const SearchInput = styled.input`
  padding: 1.25rem 1.5rem;
  width: 100%;
  border-radius: 12px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray200};
  transition: box-shadow 0.2s ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue500};
  }
`;

export const WordContainer = styled.section`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  > h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  > span {
    color: ${(props) => props.theme.colors.blue500};
    font-size: 1.5rem;
  }
`;

export const MeaningsContainer = styled.div`
  margin-top: 2.5rem;
`;

export const Meaning = styled.div`
  & + & {
    margin-top: 2.5rem;
  }

  > span {
    color: ${(props) => props.theme.colors.gray400};
    font-size: 1.25rem;
  }
`;

export const MeaningType = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2.5rem;

  strong {
    font-size: 1.5rem;
  }

  hr {
    margin-top: 4px;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray300};
    height: 1px;
  }
`;

export const Definition = styled.li`
  margin-top: 1.5rem;

  &::marker {
    color: ${(props) => props.theme.colors.blue500};
  }

  p {
    font-size: 1.125rem;
  }

  p:first-child {
    color: ${(props) => props.theme.colors.gray900};
  }

  p:not(:first-child) {
    color: ${(props) => props.theme.colors.gray400};
    margin-top: 0.75rem;
  }
`;

export const Synonyms = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2.5rem;

  strong {
    font-size: 1.125rem;
  }
`;

export const SynonymsList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${(props) => props.theme.colors.blue500};
  flex-wrap: wrap;
  row-gap: 0.5rem;

  span {
    font-weight: 700;
    font-size: 1.125rem;
  }
`;
