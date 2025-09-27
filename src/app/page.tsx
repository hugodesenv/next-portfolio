import { Habilidades } from "@/components/Habilidades";
import { Header } from "@/components/Header";
import { LocalTrabalhado } from "@/components/LocalTrabalhado";
import { Menu } from "@/components/Menu";
import { Pagina } from "@/components/Pagina";
import { PaginaBackground } from "@/components/PaginaBackground";
import { Rodape } from "@/components/Rodape";
import { Sobre } from "@/components/Sobre";
import { Spacer } from "@/components/Spacer";

export default function Home() {
  return (
    <>
      <PaginaBackground />
      <Pagina>
        <Header />
        <Spacer tamanho={10} />
        <Menu />
        <Spacer tamanho={20} />
        <Sobre />
        <LocalTrabalhado />
        <Spacer tamanho={10} />
        <Habilidades />
        <Spacer tamanho={30} />
        <Rodape />
      </Pagina>
    </>
  );
}
