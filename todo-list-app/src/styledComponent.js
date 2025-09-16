import styled from "styled-components";

const getBackgroundColor = ({ important }) => {
  if (important) {
    return "background-color: yellow;";
  } else {
    return "background-color: white";
  }
};
export const CardContainer = styled.div`
  ${getBackgroundColor}
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  padding: 16px;
  color: green;
`;
