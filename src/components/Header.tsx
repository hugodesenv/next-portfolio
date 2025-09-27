import { CSSProperties } from "react"

export const Header = () => {
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
            <label>HUGO SOUZA</label>
          </li>
        </ul>
      </li>
    </ul>
  )
}

const style = {
  autor: {
    fontSize: '60px',
    fontFamily: "fantasy",
    textAlign: "center",
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