export const useFormData = () => {

    const GENEROS = [
        { id: 1, descripcion: "Mujer" },
        { id: 2, descripcion: "Hombre" },
        { id: 3, descripcion: "Otro" },
    ];

    const TALLAS = [
        { id: 1, medida: "S" },
        { id: 2, medida: "M" },
        { id: 3, medida: "L" },
    ];

    const PAISES = [
        { id: 1, nombre: "México" },
        { id: 2, nombre: "Estados Unidos" },
        { id: 3, nombre: "Canadá" },
        { id: 4, nombre: "Colombia" },
        { id: 5, nombre: "Argentina" },
        { id: 6, nombre: "Chile" },
        { id: 7, nombre: "Uruguay" },
        { id: 8, nombre: "Ecuador" },
        { id: 9, nombre: "Panamá" },
    ];

    const ESTADOS = [
        { id: 1, nombre: "Aguascalientes" },
        { id: 2, nombre: "Baja California" },
        { id: 3, nombre: "Baja California Sur" },
        { id: 4, nombre: "Campeche" },
        { id: 5, nombre: "Chiapas" },
        { id: 6, nombre: "Chihuahua" },
        { id: 7, nombre: "Ciudad de México" },
        { id: 8, nombre: "Coahuila" },
        { id: 9, nombre: "Colima" },
        { id: 10, nombre: "Durango" },
        { id: 11, nombre: "Estado de México" },
        { id: 12, nombre: "Guanajuato" },
        { id: 13, nombre: "Guerrero" },
        { id: 14, nombre: "Hidalgo" },
        { id: 15, nombre: "Jalisco" },
        { id: 16, nombre: "Michoacán" },
        { id: 17, nombre: "Morelos" },
        { id: 18, nombre: "Nayarit" },
        { id: 19, nombre: "Nuevo León" },
        { id: 20, nombre: "Oaxaca" },
        { id: 21, nombre: "Puebla" },
        { id: 22, nombre: "Querétaro" },
        { id: 23, nombre: "Quintana Roo" },
        { id: 24, nombre: "San Luis Potosí" },
        { id: 25, nombre: "Sinaloa" },
        { id: 26, nombre: "Sonora" },
        { id: 27, nombre: "Tabasco" },
        { id: 28, nombre: "Tamaulipas" },
        { id: 29, nombre: "Tlaxcala" },
        { id: 30, nombre: "Veracruz" },
        { id: 31, nombre: "Yucatán" },
        { id: 32, nombre: "Zacatecas" }
    ];
   
    const UNIVERSIDADES = [
        { id: 1, nombre: "Tec de Monterrey" },
        { id: 2, nombre: "UANL" },
        { id: 3, nombre: "UNAM" },
        { id: 4, nombre: "UDEM" },
    ];

    const CARRERAS = [
        { id: 1, nombre: "Ingeniería en Sistemas Computacionales" },
        { id: 2, nombre: "Ingeniería Industrial" },
        { id: 3, nombre: "Administración de Empresas" },
        { id: 4, nombre: "Contaduría Pública" },
        { id: 5, nombre: "Diseño Gráfico" },
        { id: 6, nombre: "Psicología" },
        { id: 7, nombre: "Derecho" },
        { id: 8, nombre: "Arquitectura" },
        { id: 9, nombre: "Mercadotecnia" },
        { id: 10, nombre: "Ingeniería Civil" }
    ];

    const SEMESTRES = [
        { id: 1, description: "1°" },
        { id: 2, description: "2°" },
        { id: 3, description: "3°" },
        { id: 4, description: "4°" },
        { id: 5, description: "5°" },
        { id: 6, description: "6°" },
        { id: 7, description: "7°" },
        { id: 8, description: "8°" },
        { id: 9, description: "9° +" },
    ];

    return { GENEROS, TALLAS, PAISES, ESTADOS, UNIVERSIDADES,CARRERAS, SEMESTRES };
};