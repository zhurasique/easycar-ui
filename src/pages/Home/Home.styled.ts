import styled from "styled-components";


export const Layout = styled.div`
  max-width: 1255px;
  margin: auto;

  .padding-bottom {
    padding-bottom: 15px;
  }
`;

export const Searchbar = styled.div`
  padding: 15px;
  background-color: white;
  border: 1px solid #9a9a9a;
  max-width: 350px;
  min-width: 350px;
  max-height: 240px;
  border-radius: 15px;
  
  p {
    color: #4a4a4a;
    padding-left: 2px;
    font-weight: bold;
    margin: 0;
    padding-bottom: 6px;
  }
  
  .ant-select {
    width: 150px;
    padding-bottom: 15px;
  }
  
  .ant-select-selector {
    background-color: #f6f6f6 !important;
  }
  
  .ant-select-arrow {
    top: 40% !important;
  }
  
  button {
    height: 100%;
    width: 100%;

    p {
      color: white;
      margin: 0;
      padding: 0;
    }
  }

  button:hover {
    color: #9a9a9a !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block = styled.div`
  display: block;
`;
