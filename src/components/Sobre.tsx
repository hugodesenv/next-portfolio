import '../css/sobre.css';

export const Sobre = () => {
  return (
    <div className="sobre-corpo">
      {/**
       *<div>
          <img className="sobre-foto" src="hugo.png" />
        </div>
       */}
      <div className="sobre-corpo-sobre">
        <h4 className="sobre-titulo">Quem sou eu?</h4>
        <div className="sobre-texto">
          <ul className="sobre-lista">
            <li>
              <ul>
                <li>
                  Sou um desenvolvedor fullstack apaixonado por tecnologia desde 2010, quando comecei a programar ainda aos 12 anos, movido pela
                  curiosidade de entender como as coisas funcionavam.
                  <br /><br />
                  <p>
                    Essa curiosidade evoluiu para dedicação e profissionalismo, e hoje tenho orgulho de dizer que estou preparado para enfrentar
                    qualquer desafio no mundo da programação.
                  </p>
                </li>
                <li>
                  Minha jornada tem sido marcada pela busca constante em aprender, evoluir e me destacar, sempre contribuindo para o crescimento das
                  equipes e empresas onde atuo.
                  <br /><br />
                  <p>Gosto de transformar ideias em soluções práticas e eficientes, equilibrando qualidade técnica com visão estratégica.</p>
                </li>
                <li>
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