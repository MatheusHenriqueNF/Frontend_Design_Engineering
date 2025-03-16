'use client';
import { useEffect, useState } from "react";
 

import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import ThemeButton from "./ThemeButton/ThemeButton";
import ListaUsuario from "./listaUsuario/listaUsuario";
 
 
export default function Home() {
 
  const [count,setCount] = useState(0);
  const [nomeExibido,setNomeExibido] = useState('');
 
  const [nome,setNome] = useState('');
  const [novoNomeExibido, setNovoNomeExibido] = useState('');
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNomeExibido(event.target.value);
  }
 
  const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNome(event.target.value);
  }
 
  const handleSubmit = () =>{
    setNovoNomeExibido(nome)
    setNome('')
  }
 
  useEffect( () => {
    document.title = `Contador:  ${count}`;
  },[count]
  )
 
  return (
    <ThemeProvider>
      <ThemeButton />
     
      <h1>Contador, habilita e desabilita botões</h1>
      <button onClick={ ()=>{ setCount(count + 1) } } hidden={ count > 10 }>Incrementar</button>
      <button onClick={ ()=>{ setCount(count - 1) } } disabled={ count == 0 }>Decrementar</button>
      <button onClick={ ()=>{ setCount(0) } }>Resetar</button>
      <p>Contador: { count }</p>
 
      <h1>Nome exibido enquanto valor é digitado</h1>
      <form>
        <label>Nome:</label>
        <input type="text" onChange={ handleChange } />
        <p>Nome: { nomeExibido } </p>
      </form>
 
      <h1>Nome exibido quando o botão for clicado</h1>
      <form onSubmit={ (e) => e.preventDefault()}>
        <label>Nome:</label>
        <input type="text" value={ nome } onChange={ handleChangeNome } />
        <button type="button" onClick={ handleSubmit }>Enviar</button>
        { novoNomeExibido && <p>Nome: { novoNomeExibido } </p> }
      </form>
 
      <ListaUsuario />
     
    </ThemeProvider>
  );
}