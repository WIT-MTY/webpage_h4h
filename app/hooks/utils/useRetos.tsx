import { useState } from "react";

interface Reto {
    id: number;
    title: string;
}

export const useRetos = () => {
    const [retos, setRetos] = useState<Reto[]>([
        { id: 1, title: "RETO 1" },
        { id: 2, title: "RETO 2" },
        { id: 3, title: "RETO 3" },
        { id: 4, title: "RETO 4" }
    ]);

    return { retos, setRetos };
};
