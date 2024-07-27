import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure"
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useOrders = () => {

    const {user} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

    const {data: userShopOrders = [], refetch, isLoading} = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/shop-orders/${user?.email}`);
            return res?.data;
        }
    })
    return [userShopOrders, refetch, isLoading];
}

export default useOrders
