import { Habilidades } from "@/components/Habilidades";
import { Header } from "@/components/Header";
import { LocalTrabalhado } from "@/components/LocalTrabalhado";
import { Menu } from "@/components/Menu";
import { Pagina } from "@/components/Pagina";
import { Rodape } from "@/components/Rodape";
import { Sobre } from "@/components/Sobre";
import { Spacer } from "@/components/Spacer";

export default function Home() {
  return (
    <>
      <Pagina>
        <Header />
        <Spacer tamanho={10} />
        <Menu />
        <Sobre />
        <Spacer tamanho={10} />
        <Habilidades />
        <Spacer tamanho={30} />
        <LocalTrabalhado />
        <Spacer tamanho={30} />
        <Rodape />
      </Pagina>
    </>
  );
}
