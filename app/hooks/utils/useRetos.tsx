import { useState } from "react";

interface Reto {
    id: number;
    title: string;
    description: string;
}

export const useRetos = () => {
    const [retos, setRetos] = useState<Reto[]>([
        { id: 1, 
            title: "Churn Hunters: Anticipándonos al abandono de clientes", 
            description:"Construir un sistema que identifique clientes en riesgo de abandono antes de que ocurra y explique las razones detrás de esa predicción."
        },
        { id: 2, 
            title: "Order Rescue: Sustitución inteligente", 
            description:"Anticipar qué pedidos tienen una alta probabilidad de requerir una sustitución para intervenir antes de que el cliente lo reciba sin previo aviso."

        },
        { id: 3, 
            title: "Tuali Growth Agent", 
            description:"Diseñar un prototipo de un Agente de Crecimiento dentro de Tuali que responda esta pregunta de forma inteligente y personalizada."
        },
        { id: 4, 
            title: "Always on Shelf: Surtido predictivo para canal moderno", 
            description:"Desarrollar una solución de IA capaz de aprender un proceso entre sistemas web observándolo una sola vez y ejecutarlo de forma autónoma, eliminando tareas manuales, errores y tiempo operativo."
        }
    ]);

    return { retos, setRetos };
};
