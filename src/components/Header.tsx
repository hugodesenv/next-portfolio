'use client';
import { CSSProperties, useEffect, useState } from "react"

export const Header = () => {
  const autorFinal = 'HUGO SOUZA';
  const [autor, setAutor] = useState("|");

  useEffect(() => {
    escreverAutor();
  }, []);

  async function sleep() {
    await new Promise((resolver) => setTimeout(resolver, 300));
  }

  async function escreverAutor() {
    let autorMontagem = "";

    for (let i = 0; i < autorFinal.length; i++) {
      autorMontagem = `${autorMontagem}${autorFinal[i]}`;
      await sleep();
      setAutor(autorMontagem);
    }

    piscarCursorAutor();
  }

  function piscarCursorAutor() {
    setTimeout(() => {
      setAutor((prev) =>
        prev.endsWith("|")
          ? autorFinal
          : `${autorFinal} |`
      );
      piscarCursorAutor();
    }, 600);
  }

  return (
    <ul style={style.conjunto}>
      <li style={style.lista}>
        <ul>
          <li style={style.welcome}>
            <span>Bem vindo ao meu portfolio</span>
            <span>Santa Bárbara d'Oeste - SP</span>
          </li>
          <li style={style.posicao}>
            <label>Fullstack developer</label>
          </li>
          <li style={style.autor}>
            <label>{autor}</label>
          </li>
        </ul>
      </li>
    </ul>
  )
}

const style = {
  autor: {
    fontSize: '30px',
    fontFamily: "Arial",
  },
  lista: { width: '100%' },
  conjunto: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '4px solid'
  },
  posicao: {
    borderBottom: '1px dashed',
    fontWeight: 'bold',
    width: "100%"
  },
  welcome: {
    fontSize: '12px',
    paddingBottom: '4px',
    borderBottom: '1px dashed',
    display: 'flex',
    justifyContent: 'space-between',
    fontStyle: 'italic'
  }
} as Record<string, CSSProperties>;