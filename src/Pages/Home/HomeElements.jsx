import styled from "styled-components";

export const RoutinesWrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 20px;
  min-height: 100vh;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Heading = styled.h1`
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
`;
export const Routines = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RoutineCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap: 5px;
  flex-direction: column;
  background: #e8e3e4;
  width: 100%;
  box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 24px -10px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  cursor: pointer;
`;

export const HomeItems = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const NoActivities = styled.div`
  color: white;
  height: 100%;
  width: 25%;
  background: #e8042e;
  border-radius: 15px;
  padding: 15px;
`;
export const Activities = styled.div`
  display: flex;
  justify-content: start;
  justify-items: center;
  color: white;
  height: 100%;
  width: 100%;
  background: #e8042e;
  border-radius: 15px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 15px;
    color: white;
  }
`;
export const Activity = styled.div`
  color: white;
  font: bold;
  font-size: 18px;
`;
export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  gap: 10px;
  padding: 10px;
  color: #d82148;
  align-items: center;
  background: #fff8fa;
  border-radius: 10px;
`;

export const Action = styled.div`
  padding: 6px;
  border-radius: 50%;
  &:hover {
    background: #000;
  }
`;

export const Title = styled.div`
  color: gray;
  font: bold;
  font-size: 15px;
`;
export const ActivitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 15px;
    color: white;
  }
`;
export const ItemContent = styled.div`
  color: #000;
  font: bold;
  font-size: 20px;
`;
