'use client';

import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const ThemeButton = () => {
    
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error("ThemeButton deve estar dentro de um ThemeProvider");
    }

    const {theme, toggleTheme} = context;

    return (
        <>
            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: theme === 'light' ? '#007bff' : '#fff',
                    color: theme === 'light' ? '#fff' : '#000',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'all 0.3 ease'
                }}>
                Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
            </button>
        </>
    );
}

export default ThemeButton;
