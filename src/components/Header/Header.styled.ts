import styled from "styled-components";

export const HeaderSection = styled.div`
  border-top: 3px solid #000000;
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
  color: rgb(101 101 101);
  margin-bottom: 12px;
  margin-top: 15px;
`;

export const AuthButtons = styled.div`
  button {
    margin-left: 4px;
    margin-bottom: 4px;
  }
  
  button:hover {
    color: #9a9a9a !important;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0);

  :hover {
    border-bottom: 1px solid #000000;
  }

  p {
    padding-left: 8px;
  }

  &:hover p {
    color: #000000;
  }

  &:hover svg {
    color: #000000;
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
      color: #9a9a9a;
    }

    &:hover svg {
      color: #9a9a9a;
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

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const SellButton = styled.div`
  margin-left: 45px;

  button {
    background-color: #000000;
    color: #f5f5f5;
    font-weight: bold;
    border-color: #f5f5f5;
  }

  button:hover {
    border-color: #000000 !important;
    color: #9a9a9a !important;
  }
`;