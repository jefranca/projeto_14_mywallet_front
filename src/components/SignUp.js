import { useHistory } from "react-router-dom";
import {Container, Centralized} from "./Login"
import styled from "styled-components";

export default function Login(){
    const history = useHistory();
    

    function signUp(e){
        e.preventDefault();
        history.push("/")
    }


    return(
        <Container>
            <Centralized onSubmit={signUp}>
                <h1>My Wallet</h1>
                <StyledForm>
                    <input type='text' placeholder='Nome'></input>
                    <input type='email' placeholder='E-mail'></input>
                    <input type='password' placeholder='Senha'></input>
                    <input type='password' placeholder='Confirme a Senha'></input>
                    <button type='submit'> Cadastrar </button>
                </StyledForm>
                <p>Já tem uma conta? Entre agora!</p>
            </Centralized>
        </Container>
    )
}

const StyledForm = styled.form`
     margin: 25px 0 36px 0px;
        display: flex;
        flex-direction: column;
        height: 340px;
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