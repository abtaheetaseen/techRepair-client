import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: cart = [], refetch, isLoading} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })
    return [cart, refetch, isLoading]
}

export default useCart
