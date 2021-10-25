
import styled from "styled-components"
export default function Transaction({transaction}){
    return(
        <Purchase>
            <span>{transaction.date.replace("2021-","").replace("-","/").substring(0, 5)}</span>
            <p>{transaction.description}</p>
            {transaction.type === "income"  ?
                <AmountIncome> {transaction.amount}</AmountIncome>
            :
                <AmountOutcome> {transaction.amount}</AmountOutcome>
            }
            
        </Purchase>
    )
   
}


const AmountIncome = styled.div`
    color: #03AC00;
`;

const AmountOutcome = styled.div`
    color: red;
`;


const Purchase = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0 0 0;
    font-size:18px;
    overflow: hidden;

    & span{
        color:#C6C6C6;
    }
    & p{
        width: 68%;
    }
`;
