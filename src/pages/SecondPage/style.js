import styled from "styled-components";

export const Header = styled.div`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    height: 70px;
    display: flex;
    justify-content: space-between;

    padding: 10px 18px;


`;

export const Titulo = styled.p`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    color: #FFFFFF;
`;

export const ImagemLogin = styled.div`
    
    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
`;

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;

        color: #BABABA; 
        
    }
`;


export const Data = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;

    margin-top: 28px;
   
`;

export const HabitosDiv = styled.div`
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const HabitosText = styled.div`

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        color: #666666;     

    h1 {
        font-size: 20px;
        line-height: 25px;
        
    }

    p {
        font-size: 13px;
        line-height: 16px;
    }
     
`;

export const CheckDiv = styled.div`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`;

export const Menu = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;

    padding: 0 35px;
  
    position: fixed;
    left: 0;
    bottom: 0;

   
`;

export const HojeDiv = styled.div`
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 60px;
   
    color: #FFFFFF;

`;