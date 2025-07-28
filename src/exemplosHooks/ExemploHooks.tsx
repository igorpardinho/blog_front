import { useState } from "react"

function ExemploHooks() {
    const [valor, setValor] = useState(0)

    function handleClick(){
        setValor(valor + 1);
    }
  return (
    <>
        <div>
            <h2>o valor atual é: {valor}</h2>
            <button onClick={handleClick}>Adicionar 1</button>
        </div>
    </>
  )
}

export default ExemploHooks