import styled from "styled-components";

export const PageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

export const Photo = styled.div`
  margin-right: 20px;
  display: grid;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoItem = styled.div`
  border-bottom: 1px solid black;
`;

export const UploadPhoto = styled.form`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
