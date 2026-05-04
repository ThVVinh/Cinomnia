import api from "../utils/api";

export const userService = {
    login: async (email: string, password: string) => {
        const res = await api.post("/auth/login", {
            email,
            password,
        });

        return res.data;
    },
    
    register: async (
        fname: string,
        lname: string,
        email: string,
        password: string,
    ) => {
        const res = await api.post("/auth/register", {
            fname,
            lname,
            email,
            password,
        });
        return res.data;
    }
}