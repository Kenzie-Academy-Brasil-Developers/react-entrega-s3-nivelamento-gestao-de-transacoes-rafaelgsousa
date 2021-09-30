function DisplayEntradas({entradas}){
    return (
        <>
            <h2>Entradas</h2>
            <ul>
                {entradas.filter((e)=>Number(e.quantity)>0)
                .map((e,i)=><li key={i}>Nome:{e.name},
                <span>qtd:{Number(e.quantity)>0?Number(e.quantity):-1*Number(e.quantity)} e</span>
                <span>valor:{e.price}</span></li>)}
            </ul>
        </>
    )
}

export default DisplayEntradas