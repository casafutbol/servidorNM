interface UserData {
    username: string;
}

interface LocalContextType {
    login: (dato: any) => void;
    logout: () => void;
    isUserLogueado: boolean;
}

interface DatosUser {
    username: string;
    // Cambia 'pwd' por 'age' según lo que necesites:
    pwd?: string;
    age?: string;
}

interface DatosWrapperHeader {
    seccion: string;
    titulo: string;
    icono: string;
}

export type {
    UserData,
    LocalContextType,
    DatosUser,
    DatosWrapperHeader
};
