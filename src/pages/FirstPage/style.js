import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const Logo = styled.div`
    width: 180px;
    height: 178px;
    background: #52B6FF;
    margin-top: 68px;
`;

export const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    button {
        align-self: center;
        background: #52B6FF;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;



    }
    input {
      width: 303px;
      height: 45px;
      margin-bottom: 6px;
      background: #FFFFFF;
      border: 1px solid #D5D5D5;
      border-radius: 5px;

      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;


      color: #DBDBDB;


    }
`;

export const TextoCadastro = styled.p`

      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 13.976px;
      line-height: 17px;
      text-align: center;
      text-decoration-line: underline;

      color: #52B6FF;

`;