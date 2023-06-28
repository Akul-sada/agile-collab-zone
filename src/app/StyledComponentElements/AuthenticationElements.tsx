import styled from "styled-components";

export const AuthContainer = styled.div`

display: flex;
align-items: center;
flex-direction: column;
width: 47rem;
gap: 35px;
`;

export const AuthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`;
export const AuthForm = styled.div`
  width: 60%;
  max-height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  
`;
export const InputEmail = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid grey;  
  padding: 15px;
  border-radius: 5px;
  &:focus{
    border: blue;
  }
  `;
export const InputPassword = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid grey;  
  padding: 15px;
  border-radius: 5px;
  &:focus{
    border: blue;
  }
  `;
  export const EmailLabel = styled.label`
    font-size: 1.5rem;
    font-weight:400;
    color: #333;

    `;
  export const PasswordLabel = styled.label`
    font-size: 1.5rem;
    font-weight:400;
    color: #333;

  `;
export const LoginButton = styled.button`
  width:100%;
  height: 50px;
  background-color: blue;
  border-radius: 8px;
  
  `;

export const authHeader = styled