import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
  padding: 100px 8px 40px 8px;

  &:hover {
    cursor: pointer;
    background-color: #f1f2f7;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const Author = styled.span`
  font-size: 16px;
  color: grey;
  text-align: center;
  margin-top: 10px;
`
