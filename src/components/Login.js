import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";
import { saveToLocalStorage } from "../utils/localStorage";


export default function Login(){
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const history = useHistory();
    const {login, setLogin} = useContext(UserContext);

    useEffect(()=>{
        if(login) history.push('/home')
    },[login,history])
    

    function signIn(e){
        e.preventDefault();
        axios.post("http://192.168.100.5:4000/",{
            email,
            password
        })
        .then(res => {
            setLogin(res.data);
            saveToLocalStorage(res.data)
            history.push("/home");
        })
        .catch(err => {
            if(err.response.status === 401) {alert("E-mail ou Senha Incorreto");}
            else{alert("Erro Desconhecido");}
        })
    }


    return(
        <Container>
            <Centralized onSubmit={signIn}>
                <h1>My Wallet</h1>
                <StyledForm>
                    <input
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <input 
                        type='password' 
                        placeholder='Senha'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button type='submit'> Entrar </button>
                </StyledForm>
                <p onClick={()=> history.push('/sign-up')}>Primeira vez? Cadastre-se!</p>
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
        font-family: 'Saira Stencil One', cursive;
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