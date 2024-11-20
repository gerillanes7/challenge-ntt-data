import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px;
  width: 100%;
  height: max-content;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Divider = styled.hr`
  border-top: 1px solid #f1f2f7;
  margin: 20px 0px 20px 0px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SongName = styled.strong`
  font-size: 16px;
`;

export const ArtistName = styled.span`
  font-size: 14px;
  font-style: italic;
`;

export const DescriptionLabel = styled.strong``;

export const DescriptionContent = styled.span`
  font-size: 14px;
  font-style: italic;
  overflow-wrap: break-word;
`;

export const DescriptionContentDiv = styled.div``;
