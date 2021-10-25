import { useContext, useState } from "react"
import styled from "styled-components";
import UserContext from "../context/UserContext";
import { Centralized } from "./Login";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function InputEntry(){
const {login}=useContext(UserContext);
const [description, setDescription] = useState("");
const [amount, setAmount] = useState(0);
const history= useHistory();

function addEntry(e){
    e.preventDefault();
    const config = {
        headers: { Authorization: `Bearer ${login.token}` }
    };

    if(amount === 0) alert("Digite um valor");
    else{
        axios.post("http://localhost:4000/balance", {
        amount,
        description,
        type:"income"
    },config)
            .then(res => {
                history.push('/home')
            })
            .catch(err => {
                alert("Não foi possivel finalizar a operação")
            })
    }
    
}

    return(
        <Container>
            <Centralized>
                <span>Nova Entrada</span>
                <StyledForm onSubmit={addEntry}>
                    <input 
                                type='text' 
                                placeholder='Descrição'
                                value={description}
                                onChange={(e)=>{setDescription(e.target.value)}}
                                required
                    />
                    <input 
                                type='number' 
                                placeholder='Valor'
                                value={amount}
                                onChange={(e)=>{setAmount(e.target.value)}}
                                required
                    />
                    <button type='submit'> Salvar Entrada </button>
                </StyledForm>
            </Centralized>
        </Container>
        
    )
}

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

const Container = styled.div`
    display: flex;
    padding: 30px;

    & span{
        font-size: 28px;
        color:#FFFFFF;
    }
`;

export {
    Container,
    StyledForm
}