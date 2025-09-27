import { CSSProperties } from "react";
import { Dropdown } from "./Dropdown"

export const Habilidades = () => {
  return (
    <Dropdown abrir={false} titulo="Habilidades">
      <div style={style.corpo}>
        {
          opcoes.map(({ titulo, opcoes }) => {
            return (
              <section key={titulo}>
                <h2 style={style.titulo}>{titulo}</h2>
                <ul>
                  {opcoes.map((s, index) => <li key={`${titulo}${index}`}>{s}</li>)}
                </ul>
              </section>
            )
          })
        }
      </div>
    </Dropdown>
  )
}

interface IOpcao {
  titulo: string;
  opcoes: string[]
}

const opcoes = [
  {
    titulo: 'Backend',
    opcoes: [
      'Fastify e NestJS (TypeScript, JWT, Knex, Sockets, TypeORM)',
      'GraphQL e documentação com Swagger',
      'Domain-Driven Design (DDD)',
      'Docker'
    ]
  },
  {
    titulo: 'Frontend',
    opcoes: [
      'React.js e Next.js',
      'Consumo de APIs (Axios)',
      'Criação de componentes reutilizáveis',
      'TypeScript, HTML e CSS'
    ]
  },
  {
    titulo: 'Mobile',
    opcoes: [
      'Flutter (BloC, Provider, Sockets, HTTP requests)'
    ]
  },
  {
    titulo: 'Banco de dados',
    opcoes: [
      'PostgreSQL, Supabase, MongoDB, Firebase, Firebird, SQL Server, MySQL'
    ]
  },
  {
    titulo: 'Outros',
    opcoes: [
      'Git (controle de versão)',
      'Integrações bancárias (Itaú, Santander)',
      'N8N (automações e integração com IA)'
    ]
  },
  {
    titulo: 'Projetos relevantes',
    opcoes: [
      'Sistema web de gestão financeira (Next.js + Express)',
      'Automação com N8N para suporte a clientes e equipe interna',
      'Integrações financeiras via APIs bancárias',
      'Aplicativo de conferência de estoque em Flutter integrado ao ERP',
      'API ERP desenvolvida em Fastify + TypeScript'
    ]
  }
] as IOpcao[];

const style = {
  corpo: {
    display: 'flex',
    gap: '15px',
    flexDirection: 'column'
  },
  titulo: {
    fontWeight: 'bold'
  }
} as Record<string, CSSProperties>