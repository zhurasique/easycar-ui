import styled from "styled-components";

export const Container = styled.div<any>`
  position: absolute;
  left: 35%;
  top: 35%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: flex;

  img {
    max-width: 150px;
  }
  
  div {
    padding-left: 30px;
  }
`;

export const Info = styled.div<any>`
  h2 {
    font-size: 28px;
    font-weight: normal;
    padding-top: 40px;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 0;
    padding-top: 8px;
    color: #4a4a4a;
  }
`;

export const BackPropose = styled.div<any>`
  margin-top: 15px;
  padding: 0 !important;
  
  div {
    padding: 0;
  }
  
  span {
    padding-left: 5px;
    color: #5246c7;
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }

  p {
    font-size: unset;
  }
`;
