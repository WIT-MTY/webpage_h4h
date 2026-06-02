
export const getToken = (): string | undefined =>
    document.cookie
        .split("; ")
        .find(row => row.startsWith("token="))
        ?.split("=")[1];