import { ReactNode } from "react";
import { Dropdown } from "./Dropdown";
import { Spacer } from "./Spacer";

export const LocalTrabalhado = () => {
  return <>
    <Dropdown abrir titulo="Histórico">
      <ul key='historico' style={{ padding: '10px' }}>
        {
          opcoes.map((x, index) => {
            return (
              <li key={`subtitulo-${index}`}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <img style={{ width: '50px', height: '50px', borderRadius: '10px' }} src={x.src} />
                  <div>
                    <label style={{ fontWeight: 'bold' }}>{x.nome_empresa}</label>
                    {
                      x.feito.map(({ titulo, subtitulo }, index) => {
                        return (
                          <ul key={`feito-${index}`}>
                            <li key={titulo} style={{ fontWeight: 'bold' }}>{titulo}</li>
                            <li key={`${titulo}-${index}`}>{subtitulo}</li>
                          </ul>
                        )
                      })
                    }
                  </div>
                </div>
                {
                  index < opcoes.length - 1
                    ? <div style={{
                      width: '100%',
                      border: '1px dashed rgb(170, 170, 170)',
                      marginTop: '15px',
                      marginBottom: '15px'
                    }} />
                    : <></>
                }
              </li>
            )
          })
        }
      </ul>
    </Dropdown>
  </>
}

interface IOpcao {
  nome_empresa: string;
  src: string;
  feito: {
    titulo: string;
    subtitulo: ReactNode;
  }[]
}

/*
const ItensTrabalhados = (props: { titulo: string, descricoes: string[] }) => {
  return <ul>
    <li style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{props.titulo}</li>
    {
      props.descricoes.map((descricao) => {
        return <li key={descricao}>
          {descricao}
        </li>
      })
    }
  </ul>
}
*/

const opcoes = [
  {
    nome_empresa: "MBM Software Solutions (Atual)",
    src: "mbmsolutions_logo.jpg",
    feito: [
      {
        titulo: "Programador Sênior",
        subtitulo: <div>
          <p>Estou atualmente na MBM trabalhando com desenvolvimento Web, backend e aplicativos. Sou do time de inovações.</p>
          <p>Sou o responsável por desenvolver do zero várias aplicações, como por exemplo: O aplicativo de conferência de estoque, sistema Web feito com React para controle de lançamentos financeiros, API Rest criada com Fastify, integrações bancárias etc.</p>
          <p>Amadureci muito na empresa. Por muito tempo fui o único sênior, então tive que "dar o jeito" e me virar pra gente conseguir entregar o trabalho da melhor forma e contribuir significamente para o crescimento e visão da empresa.</p>
        </div>
      }
    ]
  },
  {
    nome_empresa: "Ao³",
    src: "ao3tech_logo.jpg",
    feito: [
      {
        titulo: "Analista e desenvolvedor de sistemas",
        subtitulo: <div>
          <p>Trabalhei na empresa de forma remota quando surgiu a pandemia. Tive experiência com folha de pagamento e sistema fiscal/contábil.</p>
          <p>Foi muito importante minha passagem pela empresa pois nela eu cresci e amadureci profissional, estando pronto para qualquer desafio.</p>
        </div>
      }
    ]
  },
  {
    nome_empresa: "Futura Sistemas",
    src: "futura_sistemas_logo.jpg",
    feito: [
      {
        titulo: "Programador Júnior",
        subtitulo: <>
          <p>Após todo meu progresso de suporte para analista de qualidade, prestei o processo seletivo interno da empresa e me tornei programador Júnior.</p>
          <p>Nessa fase eu ganhei muito conhecimento principalmente em SQL. Fiquei basicamente 1 ano inteiro montando dos mais diversos SQL's para concluir meu trabalho principal, que era importação de dados de dados de sistemas de terceiros para o banco de dados da empresa.</p>
        </>
      },
      {
        titulo: "Analista de qualidade",
        subtitulo: <p>Trabalhei com teste de qualidade do sistema PDV, gerencial, NFE, aplicativos entre outros.</p>
      },
      {
        titulo: "Suporte ao cliente",
        subtitulo: <>
          <p>Iniciei minha vida profissional em 2016 trabalhando com suporte técnico.</p>
          <p>Aprendi como lidar com o cliente, fazer instalações de equipamentos, auxiliar os clientes em suas dúvidas, falhas do sistema etc</p>
          <p>Me considerei muito importante para a equipe nessa época, pois sempre fui muito empenhado e empolgado em ajudar o próximo.</p>
        </>
      }
    ]
  }
] as IOpcao[]