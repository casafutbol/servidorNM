import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import { useDatosContext } from "../../HOOKS/useDatosContext";
import { LinksRutasPrivadasApp } from "../../RUTAS/Links.PAXINAS.PRIVADAS";

import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";

interface HomeProps {
  icono: string;
}

const Home = ({ icono }: HomeProps) => {
  const { logout } = useDatosContext();

  const estiloHome = "height-100vh";

  const estilos: DatosWrapperHeader = {
    seccion: "header-paxina",
    titulo: "estilo-titulo",
    icono: "icono-User",
  };

  return (
    <Wrapper estilo={estiloHome}>
      <LinksRutasPrivadasApp>
        <WrapperHeader estilos={estilos} titulo="Home" icono={icono} />
      </LinksRutasPrivadasApp>

      <MenuLateral url={0} />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={logout}>Salir</button>
      </div>
    </Wrapper>
  );
};

export default Home;