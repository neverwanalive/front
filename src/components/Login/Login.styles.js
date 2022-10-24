import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin-bottom: 15px;
  height: 135px;
  width: 135px;
  background: black;
  border-radius: 50%;
`;

export const Rectangle = styled.div`
  background: #d9d9d9;
  width: 38px;
  height: 30px;
  position: fixed;
  top: 335px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 12px;
  margin-top: 30px;
  padding: 14px 20px;
  width: 332px;
  border: none;
  ::placeholder {
    color: black;
  }
`;

export const Button = styled.div`
  font-size: 12px;
  margin-top: 45px;
  width: 372px;
  padding: 14px 0px;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  text-align: center;
  box-shadow: 0px 5px 3px 0px rgba(0, 0, 0, 0.15);
  user-select: none;
  cursor: pointer;
`;
