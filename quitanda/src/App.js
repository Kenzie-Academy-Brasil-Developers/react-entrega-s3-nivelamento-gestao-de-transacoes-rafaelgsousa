import './App.css';
import Formulario from './Components/Formulario';
import DisplayTotal from './Components/Displaytotal';
import {useState} from "react"
import DisplaySaidas from './Components/DisplaySaidas';
import DisplayEntradas from './Components/DisplayEntradas';

function App() {

  const [transactions, setTransactions ] = useState([
    {name: "banana", quantity: 100, price: 5 },
    {name: "morango", quantity: -10, price: 2 },
    {name: "laranja", quantity: 50, price: 6 },
  ])

  

  const [show,setShow]=useState(false)

  return (
    <div className="App">
      {console.log(transactions)}
      <Formulario transactions={transactions} setTransactions={setTransactions}/>
      <button onClick={()=>setShow(!show)}>{show?"Mostrar Saídas":"Mostrar entradas"}</button>
      {show?
      <DisplayEntradas entradas={transactions}/>
      :
      <DisplaySaidas saidas={transactions}/>}
      <DisplayTotal transactions={transactions}/>
    </div>
  );
}

export default App;
