'use client';
import '../css/menu.css';

export const Menu = () => {
  const handleClick = (e: any, link: string) => {
    window.open(link);
  }

  return (
    <ul className="menus">
      {
        opcoes.map(opcao => {
          return (
            <li key={opcao.src}>
              <button onClick={(e) => handleClick(e, opcao.link)}>
                <img style={{ width: '20px' }} src={opcao.src} />
                <span>{opcao.titulo}</span>
              </button>
            </li>
          )
        })
      }
    </ul >
  )
}

interface IOpcao { link: string; src: string; titulo: string };

const opcoes = [
  {
    titulo: 'Github',
    link: 'https://github.com/hugodesenv',
    src: 'logo/github.png',
  },
  {
    titulo: 'Linkedin',
    link: 'https://www.linkedin.com/in/hugo-souza-591a891a4/',
    src: 'logo/linkedin.png'
  },
  {
    titulo: 'Blog',
    link: 'https://hugodesenv.wordpress.com/',
    src: 'logo/wordpress.png'
  }
] as IOpcao[];
