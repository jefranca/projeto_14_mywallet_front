import styled from "styled-components";
import {useEffect, useContext, useState} from "react";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BiExit } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Transaction from "./Transaction";


export default function HomePage(){
    const {login, setLogin} =useContext(UserContext);
    const [transactions, setTransactions]=useState("");
    let balance = 0;
    const history=useHistory();

    for(let i=0; i< transactions.length;i++){
        if(transactions[i].type === "income") balance= balance + transactions[i].amount;
        if(transactions[i].type === "outcome") balance= balance - transactions[i].amount;
    }

    useEffect(()=>{
        if(!login) {
            history.push('/')
        }
        else{
            const config = {
                headers: { Authorization: `Bearer ${login.token}` }
            };
            axios.get("http://localhost:4000/balance", config)
            .then(res => {
                setTransactions(res.data)
            })
            .catch(err => alert("Erro ao obter Dados"))
        }
        
    },[login,history])

    return(
        <Container>
            <Top>
                <h2>Olá, Fulano</h2>
                <BiExit onClick={()=>{
                    localStorage.clear();
                    setLogin(false);
                    history.push('/');
                    const config = {
                        headers: { Authorization: `Bearer ${login.token}` }
                    };
                    axios.delete ("http://localhost:4000/logout", config);
                }}/>
            </Top>
            <Register>
                {transactions ? 
                <>
                        <div className="transactions">
                            {transactions.map(transaction=> <Transaction key={transaction.id} transaction={transaction} />)}
                        </div>{}
                        <Saldo>
                            <span>Saldo</span>
                            {balance === 0?
                                <h4>{balance}</h4>
                            :
                            balance > 0 ? 
                                <h5>{balance}</h5>
                            :
                                <h6>{balance}</h6>
                            }
                            
                            
                        </Saldo>
                </>
                :
                    <h3>Não há registros de entrada ou saida</h3>
                }
            </Register>
            <Actions>
                <div onClick={()=>{
                    history.push('/input-entry');
                }}>
                    <AiOutlinePlusCircle/>
                    <span>Nova entrada</span>
                </div>
                <div onClick={()=>{
                    history.push('/output-entry');
                }}>
                    <AiOutlineMinusCircle/>
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
    color: #FFFFFF;
    font-size: 26px;
    font-weight: 700;
`;
const Register = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 66vh;
    background-color: white;
    width: 100%;
    box-sizing:border-box;
    padding: 5px;
   & h3{
       margin: auto auto;
   }

   & .transactions{
       height: 60vh;
       overflow: scroll;
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
        font-size: 24px;
        color: #FFFFFF;
        font-weight: 700;
    }
`;

const Saldo = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    bottom:0;
    right: 0;
    left: 0;
    box-sizing: border-box;
    padding: 5px;
    font-size:19px;

    & h5{
        color:#03AC00;
    }

    & h6{
        color: red;
    }
`;
