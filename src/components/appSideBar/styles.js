import styled from "@emotion/styled/macro";

export const AppSideBarPane = styled.aside`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-height: 100vh;
  min-width: 250px;
  border-right: 1px solid ${(props) => props.theme.colors.border};
`;

export const Title = styled.h2`
  margin-left: 0.5em;
`;

export const BoardTitle = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 3px;
  padding-left: 1em;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const BoardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 1em;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export const BoardName = styled.p`
  margin-left: 0.5em;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

export const CreateNewTitle = styled.p`
  margin-left: 0.5em;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primaryAccent};

  &:hover {
    color: ${(props) => props.theme.colors.primaryAccentLight};
  }
`;