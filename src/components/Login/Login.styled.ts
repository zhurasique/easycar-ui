import styled from "styled-components";

export const FormCenter = styled.div<any>`
  margin: auto;
  text-align: center;
  
  .ant-form-item {
    margin-bottom: 10px;
  }
  
  button {
    width: 100%;
  }
  
  h4 {
    margin-bottom: 5px;
  }
`;

export const ErrorDiv = styled.div<any>`
  color: red;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  
  p {
    padding-left: 5px;
  }
`;

export const OAuth2Item = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #cccccc;
  border-radius: 5px;
  color: black;
  
  :hover {
    border: 1px solid #7f76e3;
    color: #5246c7;
  }
  
  img {
    padding-top: 5px;
    max-width: 30px;
  }
  
  p {
    padding-left: 5px;
    margin: 0;
  }
`;