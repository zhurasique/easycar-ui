import styled from "styled-components"

export const UserPhoto = styled.div<any>`
  position: relative;
  max-width: 25px;
  width: 25px;
  max-height: 25px;
  height: 25px;
  border-radius: 12px;
  background-color: rgb(115, 56, 166);

  span {
    color: white;
    font-size: 12px;
    margin: 0;
    position: absolute;
    top: 20%;
    left: 35%;
  }
`;