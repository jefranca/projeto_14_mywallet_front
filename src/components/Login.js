import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Login(){
    const history = useHistory();
    

    function signIn(e){
        e.preventDefault();
        history.push("/home")
    }


    return(
        <Container>
            <Centralized onSubmit={signIn}>
                <h1>My Wallet</h1>
                <StyledForm>
                    <input type='email' placeholder='E-mail'></input>
                    <input type='password' placeholder='Senha'></input>
                    <button type='submit'> Entrar </button>
                </StyledForm>
                <p>Primeira vez? Cadastre-se!</p>
            </Centralized>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 100vh;

    & div{
        display: flex;
        flex-direction: column;
    }
`;
const Centralized = styled.div`
    margin: auto;
    width:320px;

    & h1{
        margin: auto;
        color:#FFFFFF;
        font-size: 32px;
    }

    & p{
        margin: auto;
        color:#FFFFFF;
        font-size: 15px;
    }
`;

const StyledForm = styled.form`
     margin: 25px 0 36px 0px;
        display: flex;
        flex-direction: column;
        height: 200px;
        justify-content: space-between;

        & input{
            height: 58px;
            border-radius: 5px;
            border: hidden;
            font-size: 20px;
            padding: 10px;
            box-sizing: border-box;
        }
        & button{
            height: 46px;
            background-color: #A328D6;
            border-radius: 5px;
            border: hidden;
            color:#FFFFFF;
            font-size: 20px;
            font-weight: 700;
        }
`;

export {
    Container,
    Centralized
}