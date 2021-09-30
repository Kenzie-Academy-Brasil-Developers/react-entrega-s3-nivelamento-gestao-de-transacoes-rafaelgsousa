function DisplaySaidas({saidas}){
    return (
        <>
            <h2>Saidas</h2>
            <ul>
                {saidas.filter((e)=>Number(e.quantity)<0)
                .map((e,i)=><li key={i}>Nome:{e.name},
                <span>qtd:{Number(e.quantity)>0?Number(e.quantity):-1*Number(e.quantity)} e</span>
                <span>valor:{e.price}</span></li>)}
            </ul>
        </>
    )
}

export default DisplaySaidas