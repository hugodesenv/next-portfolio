'use client';
import { ReactNode, useEffect, useState } from 'react';
import '../css/dropdown.css';

export const Dropdown = (props: IProps) => {
  const [expandir, setExpandir] = useState({ abrir: props.abrir });
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    setTitulo(() => expandir.abrir ? 'Fechar' : 'Abrir');
  }, [expandir]);

  const handleAbrir = (e: any) => {
    e.preventDefault();
    const dados = { ...expandir, abrir: !expandir.abrir };
    setExpandir(dados);
  }

  return (
    <>
      <ul>
        <li className='dropdown-fundo'>
          {props.titulo}
          <button onClick={handleAbrir}>{titulo}</button>
        </li>
        <li style={{ display: expandir.abrir ? 'block' : 'none' }}>
          <div className='dropdown-children'>
            {props.children}
          </div>
        </li>
      </ul>
    </>
  )
}

interface IProps {
  titulo: string;
  abrir: boolean;
  children: ReactNode
}