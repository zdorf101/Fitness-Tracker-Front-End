import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  height: 100vh;
  background-color: #e8cdce;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  background-color: #e8cccd;
  padding: 20px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: fill;
`;
export const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Station = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
export const Intro = styled.p`
  font-size: 13px;
  background: #bcc3e2;
  color: #000;
  font-weight: 700;
  padding: 5px 10px;
`;

export const FormInputs = styled.form``;
export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
export const Error = styled.div`
  width: 100%;
  margin-top: 10px;
  color: red;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  color: white;
  background: #d82148;
  border-radius: 10px;
  padding: 12px 15px;
  margin-top: 20px;
`;
