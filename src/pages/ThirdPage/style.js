import styled from "styled-components";



export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E5E5E5;
    height: 100vh;
    margin-top: 70px;
    padding: 0 17px;
    p {
        margin-top: 28px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666; 
    }

 
`;

export const Title = styled.div`
      display: flex;
      justify-content: space-between;
   
      margin-top: 28px;
      
      h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        
        color: #126BA5;

        margin-right: 152px;
    }
`;

export const AddButton = styled.div`
    width: 40px;
    height: 35px;
    background: #52B6FF;
   
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
    cursor: pointer;
   
    text-align: center;

    color: #FFFFFF;


`;

export const NewHabit = styled.div`
    width: 340px;
    
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 18px;
  

    input {
        width: 100%;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
      
    }
   
`;

export const Days = styled.div`
    width: 30px;
    height: 30px;
    margin: 8px 4px 0 0;
    background: ${props => props.status.background};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    text-align: center;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.status.color};

`;

export const DaysDiv = styled.div`
    display: flex;

`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 29px;
    cursor: pointer;

    button {
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        cursor: pointer;
        color: #FFFFFF;
    }
    div {
        width: 84px;
        height: 35px;
        margin-right: 13px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #52B6FF;
    }
`;

