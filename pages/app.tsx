import { useState, useEffect } from 'react';
export function Contador({ valorInicial }: ContadorProps) {
  valorInicial: Number;
}
const [valor, setValor] = useState(valorInicial)
function Adicionar() {
  setValor(valor + 1);
}

function Remover() {
  setValor(valor - 1);
}
useEffect(() => {
  if (valor >= 20) {
    alert('Você chegou em $(valor)');
  }
}, [valor]);

return (
  <div>
    <h2>Contador = {valor}</h2>
    {valor >= 10 && <h2>Teste</h2>}
    <button onClick={Adicionar}>Adicionar</button>
    <button onClick={Remover}>Remover</button>
  </div>
);