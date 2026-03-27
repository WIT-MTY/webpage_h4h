'use client';
import { useRouter } from "next/navigation";

export const useFetchProtegido = () => {
    const router = useRouter();

    const fetchProtegido = async (url: string, options?: RequestInit) => {
        const token = document.cookie
            .split("; ")
            .find(row => row.startsWith("token="))
            ?.split("=")[1];

        const res = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                ...options?.headers,
            },
        });

        if (res.status === 401) {
            document.cookie = "token=; path=/; max-age=0";
            router.push("/login");
            return null;
        }

        return res.json();
    };

    return { fetchProtegido };
};