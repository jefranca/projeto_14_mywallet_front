import styled from "styled-components";

export default function HomePage(){
    return(
        <Container>
            <Top>
                <h2>Olá, Fulano</h2>
                <h2>Icon</h2>
            </Top>
            <Register>
                <h3>Não há registros de entrada ou saida</h3>
            </Register>
            <Actions>
                <div>
                    <h2>Icon</h2>
                    <span>Nova entrada</span>
                </div>
                <div>
                    <h2>Icon</h2>
                    <span>Nova saída</span>
                </div>
            </Actions>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing:border-box;
    padding: 24px;
    justify-content: space-between;
    height: 100vh;

`;
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const Register = styled.div`
    display: flex;
    height: 446px;
    background-color: white;
   width: 100%;
   & h3{
       margin: auto auto;
   }
`;
const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    & div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #A328D6;
        height: 114px;
        width: 45%;
        box-sizing: border-box;
        padding: 12px;
        font-size: 21px;
        color: #FFFFFF;
        font-weight: 700;
    }
    
    
`;
