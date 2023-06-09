import styled from "styled-components";

export const Layout = styled.div`
  text-align: center;
  max-width: 950px;
  margin: 60px auto 10px auto;
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

export const Form = styled.div`
  div {
    padding-top: 20px;
  }
`;

export const Step = styled.div`
  text-align: left;
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
  .hint {
    text-align: center;
    padding-top: 35px;
    
    p {
      margin: 0;
      color: #4a4a4a;
      font-size: 10px;
      font-weight: bold;
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

export const OAuth2Login = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
  
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

export const InputWithTip = styled.div`
  padding: 0 !important;
  position: relative;
`;

export const TipContainer = styled.div`
  padding: 0 !important;
  position: absolute;
  top: 8px;
  right: -24px;
`;