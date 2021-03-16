import styled from "styled-components";

export const CommentContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  margin: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: start;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const AvatarContainer = styled.div`
  max-width: 100px;
  max-height: 100px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
