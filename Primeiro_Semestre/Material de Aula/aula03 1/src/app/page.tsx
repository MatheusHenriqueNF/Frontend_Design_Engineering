'use client'

import Botao from "./components/Botao/page"



export default function Home(){
  return(
    <>
   
      <h1>Hello World!!</h1>

      <Botao cor="green" texto="Acessar" clicado={()=>{alert("Acessado")}} />
      <Botao cor="red" texto="Deletar" clicado={ () =>{ alert("Deletado") } } />
      <Botao />

      

    </>
  )
}