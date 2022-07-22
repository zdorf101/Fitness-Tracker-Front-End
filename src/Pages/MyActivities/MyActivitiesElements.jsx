import styled from "styled-components";

export const ActivitiesWrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 20px;
  height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: gray;
  margin-bottom: 10px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 70%;
  background: #fff4f6;
  border-radius: 15px;
  box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.35);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const LabelTag = styled.label`
  font-size: 16px;
`;
export const InputTag = styled.input`
  outline: none;
  padding: 12px 15px;
  border: 1px solid #7986cb;
  border-radius: 10px;
  color: rgb(107 114 128);
  font-size: 18px;
`;
export const GroupWrapper2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const GroupWrapper3 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
