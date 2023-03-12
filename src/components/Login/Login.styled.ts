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