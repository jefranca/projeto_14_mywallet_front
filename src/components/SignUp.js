import { useHistory } from "react-router-dom";
import {Container, Centralized} from "./Login"
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export default function SignUp(){
    const history = useHistory();
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmedPassword, setConfirmedPassword]= useState("");
    

    function signUp(e){
        e.preventDefault();
        if(password !== confirmedPassword) alert("Confirmação de Senha Incorreta")
        const body={name,email,password};
        axios.post("http://localhost:4000/signup",body)
        .then(res=>{
            alert("Conta criada com Sucesso");
            history.push("/");
        })
        .catch(error => {
            if(error.response.status === 401) alert("E-mail já cadastrado");
            else alert("Erro Desconhecido");
        })
        
    }


    return(
        <Container>
            <Centralized onSubmit={signUp}>
                <h1>My Wallet</h1>
                <StyledForm>
                    <input 
                        type='text' 
                        placeholder='Nome'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        required
                    />
                    <input 
                        type='email' 
                        placeholder='E-mail'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                    />
                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                    />
                    <input 
                        type='password'
                        placeholder='Confirme a Senha'
                        value={confirmedPassword}
                        onChange={(e)=>{setConfirmedPassword(e.target.value)}}
                        required
                    />
                    <button type='submit'> Cadastrar </button>
                </StyledForm>
                <p onClick={()=> history.push('/')}>Já tem uma conta? Entre agora!</p>
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