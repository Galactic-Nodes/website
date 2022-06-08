import axios from 'axios';
import { createContext, Dispatch, SetStateAction } from 'react';

export const userApiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'user-api.galacticnodes.com';

export const fetchUser = async (cookie: string) => axios.get(`${userApiUrl}/user`, { withCredentials: true, headers: { cookie } });

export interface User {
    email: string;
    name: string;
}

interface DataContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>> | (() => void);
}

export const dataContext = createContext<DataContextType>({
    user: {
        name: '',
        email: '',
    },
    setUser: () => null,
});
