import styled from "styled-components";

export const StyledGifList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  gap: 20px;
  padding: 0;
  margin: 50px auto;
  list-style: none;

  & > li {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    cursor: pointer;
  }

  & img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  & > p {
    font-family: sans-serif;
    font-size: 24px;
    margin: 0 auto;
    color:rgb(51, 66, 81);
  }
`;