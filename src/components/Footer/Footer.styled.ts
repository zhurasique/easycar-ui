import styled from "styled-components";

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 100px;
  color: #b0b0b0;
  background-color: #f5f5f5;

  p {
    margin: unset;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-start;

  span {
    font-size: 20px;
    margin-right: 5px;
    
    &:hover {
      color: grey;
      cursor: pointer;
    }
  }
`;

export const Copywrite = styled.div`
  max-width: 150px;

  p {
    margin-top: 15px;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Suggestions = styled.div`
  p {
    padding-bottom: 5px;
  }
  
  .suggestion {
    &:hover {
      color: grey;
      cursor: pointer;
    }
  }
  
  .topic {
    font-weight: bold;
  }  
`;