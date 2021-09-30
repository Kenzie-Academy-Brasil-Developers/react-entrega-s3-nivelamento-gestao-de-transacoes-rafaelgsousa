import "./style.css"
import {useState} from "react"

function Formulario({setTransactions,transactions}){

    const [name,setName]=useState("")
    const [qtd,setQtd]=useState("")
    const [valor,setValor]=useState("")

    const handleEstoque=(name,qtd,valor)=>{
        setTransactions([...transactions,{name:name,quantity:qtd,price:valor}])
        setValor("")
        setQtd("")
        setName("")
      }

    return (
        <div className="formulario">
            <input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="quantidade" value={qtd} onChange={(e)=>setQtd(e.target.value)}/>
            <input placeholder="valor" value={valor} onChange={(e)=>setValor(e.target.value)}/>
            <button onClick={()=>handleEstoque(name,qtd,valor)}>Registrar</button>
        </div>
    )
}

export default Formulario