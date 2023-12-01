import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const Con = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Con>
      <SyncLoader color={"white"} />
    </Con>
  );
};
