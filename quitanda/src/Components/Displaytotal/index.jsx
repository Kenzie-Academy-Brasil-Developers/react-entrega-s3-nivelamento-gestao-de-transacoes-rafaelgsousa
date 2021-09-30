import "./style.css"
function DisplayTotal({transactions}){

    return(
        <>
            <h2>Total</h2>
            <ul>
                {transactions.map((e,i)=><li key={i}>Nome:{e.name},
                <span>qtd:{Number(e.quantity)} e</span>
                <span>valor:{e.price}</span></li>)}
            </ul>
        </>
    )
}

export default DisplayTotal