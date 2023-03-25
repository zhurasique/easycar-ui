import styled from "styled-components";

export const HeaderSection = styled.div`
  border-top: 3px solid #5246c7;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e5e3e3;
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  
  h3 {
    margin: 0;
  }
`;

export const LogoDiv = styled.div`
  cursor: pointer;
  color: black;
  margin-bottom: 12px;
  margin-top: 15px;
`;

export const AuthButtons = styled.div`
  button {
    margin-left: 4px;
    margin-bottom: 4px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);

  :hover {
    border-bottom: 1px solid #5246c7;
  }

  p {
    padding-left: 8px;
  }

  &:hover p {
    color: #5246c7;
  }

  &:hover svg {
    color: #5246c7;
  }

  img {
    max-width: 25px;
    border-radius: 12px;
  }
`;

export const UserMenuPopover = styled.div`
  display: block;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover p {
      color: #5246c7;
    }

    &:hover svg {
      color: #5246c7;
    }
  }

  p {
    padding-left: 8px;
    margin: 0;
  }

  .last {
    padding-top: 10px;
  }
`;