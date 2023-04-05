import styled from "styled-components";

export const FormCenter = styled.div<any>`
  margin: auto;
  text-align: center;
  
  .ant-form-item {
    margin-bottom: 10px;
  }
  
  button {
    width: 75%;
  }
`;

export const ManualLogin = styled.div<any>`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  
  p {
    text-align: left;
    margin: 0;
    color: #4a4a4a;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const ErrorDiv = styled.div<any>`
  padding-top: 10px;
  color: red;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  p {
    padding-left: 5px;
  }
`;

export const OAuth2Login = styled.div<any>`
  div {
    margin-bottom: 5px;
  }
  
  h4 {
    margin-bottom: 5px;
  }

  svg {
    padding-top: 10px;
    max-width: 30px;
    max-height: 30px;
  }

  p {
    padding-left: 7px;
    padding-top: 3px;
    margin: 0;
  }
`;

export const OAuth2ItemGoogle = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px dashed #cccccc;
  color: #4a4a4a;
  background-color: white;
  max-height: 40px;
  
  :hover {
    border: 1px solid #7f76e3;
    color: #5246c7;
  }
  
  p {
    padding-left: 10px;
  }
`;

export const OAuth2ItemFacebook = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #4267B2;
  border-radius: 5px;
  color: white;
  background-color: #4267B2;
  max-height: 40px;

  :hover {
    border: 1px solid #cccccc;
    color: #cccccc;
  }
`;

export const SignupPropose = styled.div<any>`
  padding-top: 10px;
  font-size: 12px;
  
  p {
    color: #4a4a4a;
  }
  
  span {
    padding-left: 5px;
    color: #5246c7;
    cursor: pointer;
  }
  
  span:hover {
    text-decoration: underline;
  }
`;