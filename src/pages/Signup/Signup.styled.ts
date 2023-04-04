import styled from "styled-components";

export const Layout = styled.div`
  text-align: center;
  max-width: 950px;
  margin: auto;
  border: 2px dashed #dedcdc;
  padding: 5px 5px 15px;
  background-color: white;
  
  p {
    margin: 0;
    color: #4a4a4a;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Step = styled.div`
  text-align: left;
  padding-top: 25px;
  max-width: 250px;
  margin: auto;
  height: 250px;
  
  p {
    margin: 0;
    padding-bottom: 5px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  position: relative;
`;

export const SecondStep = styled.div`
  
  div {
    text-align: center;
    
    p {
      margin: 0;
      color: #4a4a4a;
      font-size: 10px;
      font-weight: bold;
      padding-bottom: 45px;
    }
  }
`;

export const Block = styled.div`
  display: block;
`;

export const Previous = styled.div`
    position: absolute;
    left: 40px;
`;