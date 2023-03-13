import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px 20px 5px 20px;
  border-bottom: 1px solid #e5e3e3;
  
  h3 {
    margin: 0;
  }
`;

export const AuthButtons = styled.div`
  button {
    margin-left: 4px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  p {
    padding-left: 5px;
  }

  &:hover p {
    color: #5246c7;
  }

  &:hover svg {
    color: #5246c7;
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