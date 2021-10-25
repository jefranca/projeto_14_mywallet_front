import { Container,StyledForm } from "./InputEntry";
import { useContext, useState } from "react"
import UserContext from "../context/UserContext";
import { Centralized } from "./Login";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function OutputEntry(){
const {login}=useContext(UserContext);
const [description, setDescription] = useState("");
const [amount, setAmount] = useState(0);
const history= useHistory();

function addEntry(e){
    e.preventDefault();
    const config = {
        headers: { Authorization: `Bearer ${login.token}` }
    };
    axios.post("http://localhost:4000/balance", {
        amount,
        description,
        type:"outcome"
    },config)
            .then(res => {
                history.push('/home')
            })
            .catch(err => {
                alert("Não foi possivel finalizar a operação")
            })
}

    return(
        <Container>
            <Centralized>
                <span>Nova Saída</span>
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
                    <button type='submit'> Salvar Saída </button>
                </StyledForm>
            </Centralized>
        </Container>
        
    )
}