import { CSSProperties } from "react"

export const Sobre = () => {
  return (
    <div style={style.corpo}>
      {/** pra nao esticar a imagem */}
      <div>
        <img style={style.foto} src="hugo.png" />
      </div>
      <div style={style.corpo_sobre}>
        <h4 style={style.titulo}>Quem sou eu?</h4>
        <div style={style.texto}>
          <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li style={{ flex: 1 }}>
              <ul style={style.lista}>
                <li style={{ paddingRight: '30px', width: '100%' }}>
                  Sou um desenvolvedor fullstack apaixonado por tecnologia desde 2010, quando comecei a programar ainda aos 12 anos, movido pela
                  curiosidade de entender como as coisas funcionavam.
                  <br /><br />
                  <p>
                    Essa curiosidade evoluiu para dedicação e profissionalismo, e hoje tenho orgulho de dizer que estou preparado para enfrentar
                    qualquer desafio no mundo da programação.
                  </p>
                </li>
                <li style={{ paddingRight: '30px', width: '100%' }}>
                  Minha jornada tem sido marcada pela busca constante em aprender, evoluir e me destacar, sempre contribuindo para o crescimento das
                  equipes e empresas onde atuo.
                  <br /><br />
                  <p>Gosto de transformar ideias em soluções práticas e eficientes, equilibrando qualidade técnica com visão estratégica.</p>
                </li>
                <li style={{ width: '100%' }}>
                  Atualmente, atuo em diferentes projetos e continuo expandindo minhas habilidades em desenvolvimento web, backend e frontend,
                  sempre com foco em entregar resultados que façam a diferença.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const style = {
  titulo: {
    fontWeight: 'bold',
  },
  corpo: { display: 'flex', gap: '10px' },
  foto: {
    border: '3px solid',
    borderRadius: '10px',
    width: '200px',
  },
  corpo_sobre: {
    flex: 1,
    padding: '10px',
    fontSize: '14px'
  },
  texto: {
    width: '100%',
    marginTop: '5px',
  },
  lista: {
    gap: '10px',
    display: 'flex',
    justifyContent: 'space-between'
  }
} as Record<string, CSSProperties>;