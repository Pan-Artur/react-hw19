import styled from "styled-components";

export const StyledGifSearch = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 10px;
  width: 500px;
  margin: 0 auto;
  padding: 50px 0 0 0;

  & > input {
    flex: 1;
    padding: 12px 15px;
    font-size: 16px;
    border: 2px solid #3498db;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
  }

  & > button {
    padding: 12px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2980b9;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;