import '../css/habilidades.css';

export const Habilidades = () => {
  return (
    <>
      <div className='habilidades-titulo'>Habilidades/Ferramentas</div>
      <div className='habilidades'>
        {
          opcoes.map(({ src_imagem, titulo }) => {
            return (
              <ul className='habilidades-opcao' key={src_imagem}>
                <li>
                  <img src={src_imagem} />
                </li>
                <li>
                  <span>{titulo}</span>
                </li>
              </ul>
            )
          })
        }
      </div>
    </>
  )
}

const opcoes = [
  {
    titulo: "Fastify",
    src_imagem: "tecnologias/Fastify.png"
  },
  {
    titulo: "Nest Js",
    src_imagem: "tecnologias/Nest.js.png"
  },
  {
    titulo: "Typescript",
    src_imagem: "tecnologias/TypeScript.png"
  },
  {
    titulo: "GraphQL",
    src_imagem: "tecnologias/GraphQL.png"
  },
  {
    titulo: "Next.js",
    src_imagem: "tecnologias/Next.js.png"
  },
  {
    titulo: "Swagger",
    src_imagem: "tecnologias/Swagger.png"
  },
  {
    titulo: "Flutter",
    src_imagem: "tecnologias/Flutter.png"
  },
  {
    titulo: "Docker",
    src_imagem: "tecnologias/Docker.png"
  },
  {
    titulo: "N8N",
    src_imagem: "tecnologias/n8n-color.png"
  },
  {
    titulo: "Github",
    src_imagem: "tecnologias/GitHub.png"
  },
  {
    titulo: "HTML",
    src_imagem: "tecnologias/HTML5.png"
  },
  {
    titulo: "CSS3",
    src_imagem: "tecnologias/CSS3.png"
  },
  {
    titulo: "Antdesign",
    src_imagem: "tecnologias/Ant Design.png"
  },
  {
    titulo: "Tailwind CSS",
    src_imagem: "tecnologias/Tailwind CSS.png"
  },
  {
    titulo: "Material",
    src_imagem: "tecnologias/Material UI.png"
  },
  {
    titulo: "Postgres 12",
    src_imagem: "tecnologias/PostgresSQL.png"
  },
  {
    titulo: "SQLServer",
    src_imagem: "tecnologias/Microsoft SQL Server.png"
  },
  {
    titulo: "MySQL",
    src_imagem: "tecnologias/MySQL.png"
  },
  {
    titulo: "Firebase",
    src_imagem: "tecnologias/Firebase.png"
  },
  {
    titulo: "Postman",
    src_imagem: "tecnologias/Postman.png"
  },
  {
    titulo: "Jira",
    src_imagem: "tecnologias/Jira.png"
  }
] as { titulo: string; src_imagem: string }[];