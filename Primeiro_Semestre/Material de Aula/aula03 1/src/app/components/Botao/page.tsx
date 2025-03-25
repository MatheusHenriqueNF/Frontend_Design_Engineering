import React from "react"

type BotaoProps = { // criando a tipagem em TS
    texto?: string; // variável texto, do tipo string, '?' deixa a propriedade opcional, caso contrário ela é OBRIGATÓRIA
    cor?: string;
    clicado?: () => void;
}

const Botao : React.FC <BotaoProps> = ({ 
    texto = "Click",
    cor = "blue",
    clicado
}) =>{

    return(
        <>
            <button type="button" style={{ 
                backgroundColor: cor, 
                color:'#fff',
                padding: '10px 20px' ,
                margin:'10px'   
            }}
            onClick={ clicado }
            >{ texto }</button>
        </>
    )
}

export default Botao;


