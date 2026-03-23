export const useFormData = () => {

    const GENEROS = [
        { id: 1, descripcion: "Mujer" },
        { id: 2, descripcion: "Hombre" },
        { id: 3, descripcion: "Otro" },
    ];

    const TALLAS = [
        { id: 1, descripcion: "S" },
        { id: 2, descripcion: "M" },
        { id: 3, descripcion: "L" },
    ];

    const PAISES = [
        { id: 1, nom_pais: "México" },
        { id: 2, nom_pais: "Estados Unidos" },
        { id: 3, nom_pais: "Canadá" },
        { id: 4, nom_pais: "Colombia" },
        { id: 5, nom_pais: "Argentina" },
        { id: 6, nom_pais: "Chile" },
        { id: 7, nom_pais: "Uruguay" },
        { id: 8, nom_pais: "Ecuador" },
        { id: 9, nom_pais: "Panamá" },
    ];

    const ESTADOS = [
        { id: 1, nom_estado: "Aguascalientes" },
        { id: 2, nom_estado: "Baja California" },
        { id: 3, nom_estado: "Baja California Sur" },
        { id: 4, nom_estado: "Campeche" },
        { id: 5, nom_estado: "Chiapas" },
        { id: 6, nom_estado: "Chihuahua" },
        { id: 7, nom_estado: "Ciudad de México" },
        { id: 8, nom_estado: "Coahuila" },
        { id: 9, nom_estado: "Colima" },
        { id: 10, nom_estado: "Durango" },
        { id: 11, nom_estado: "Estado de México" },
        { id: 12, nom_estado: "Guanajuato" },
        { id: 13, nom_estado: "Guerrero" },
        { id: 14, nom_estado: "Hidalgo" },
        { id: 15, nom_estado: "Jalisco" },
        { id: 16, nom_estado: "Michoacán" },
        { id: 17, nom_estado: "Morelos" },
        { id: 18, nom_estado: "Nayarit" },
        { id: 19, nom_estado: "Nuevo León" },
        { id: 20, nom_estado: "Oaxaca" },
        { id: 21, nom_estado: "Puebla" },
        { id: 22, nom_estado: "Querétaro" },
        { id: 23, nom_estado: "Quintana Roo" },
        { id: 24, nom_estado: "San Luis Potosí" },
        { id: 25, nom_estado: "Sinaloa" },
        { id: 26, nom_estado: "Sonora" },
        { id: 27, nom_estado: "Tabasco" },
        { id: 28, nom_estado: "Tamaulipas" },
        { id: 29, nom_estado: "Tlaxcala" },
        { id: 30, nom_estado: "Veracruz" },
        { id: 31, nom_estado: "Yucatán" },
        { id: 32, nom_estado: "Zacatecas" }
    ];
   
    const UNIVERSIDADES = [
        { id: 1, universidad_nombre: "Tec de Monterrey", estado_id: 19  },
        { id: 2, universidad_nombre: "UANL", estado_id: 19 },
        { id: 3, universidad_nombre: "UNAM", estado_id: 9 },
        { id: 4, universidad_nombre: "UDEM", estado_id: 5  },
    ];

    const CARRERAS = [
        { id: 1, carrera_nombre: "Ingeniería en Sistemas Computacionales"},
        { id: 2, carrera_nombre: "Ingeniería Industrial" },
        { id: 3, carrera_nombre: "Administración de Empresas" },
        { id: 4, carrera_nombre: "Contaduría Pública" },
        { id: 5, carrera_nombre: "Diseño Gráfico" },
        { id: 6, carrera_nombre: "Psicología" },
        { id: 7, carrera_nombre: "Derecho" },
        { id: 8, carrera_nombre: "Arquitectura" },
        { id: 9, carrera_nombre: "Mercadotecnia" },
        { id: 10, carrera_nombre: "Ingeniería Civil" }
    ];

    const SEMESTRES = [
        { id: 1, descripcion: "1°" },
        { id: 2, descripcion: "2°" },
        { id: 3, descripcion: "3°" },
        { id: 4, descripcion: "4°" },
        { id: 5, descripcion: "5°" },
        { id: 6, descripcion: "6°" },
        { id: 7, descripcion: "7°" },
        { id: 8, descripcion: "8°" },
        { id: 9, descripcion: "9° +" },
    ];

    return { GENEROS, TALLAS, PAISES, ESTADOS, UNIVERSIDADES,CARRERAS, SEMESTRES };
};