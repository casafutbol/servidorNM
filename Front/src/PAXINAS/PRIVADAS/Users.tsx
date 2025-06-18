import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import "../../estilo/Users.App.css";
import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";

interface UsersProps {
  icono: string;
}

const Users = ({ icono }: UsersProps) => {
  const estiloUsers = "estilo-paxinas-app height-100vh";
  const estiloSeccionUsers = "estilo-seccion-users";

  const estilos: DatosWrapperHeader = {
    seccion: "header-paxina",
    titulo: "estilo-titulo",
    icono: "icono-User",
  };

  return (
    <Wrapper estilo={estiloUsers}>
      <Wrapper estilo={estiloSeccionUsers}>
        <WrapperHeader estilos={estilos} titulo="Users" icono={icono} />
      </Wrapper>
      <MenuLateral url={3} />
    </Wrapper>
  );
};

export default Users;