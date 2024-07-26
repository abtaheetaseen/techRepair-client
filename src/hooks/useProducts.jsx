import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {

    const axiosPublic = useAxiosPublic();

    const {data: products = [], refetch, isLoading} = useQuery({
        queryKey: ["products"],
        queryFn: async() => {
            const res = await axiosPublic.get("/products");
            return res?.data;
        }
    })
    return [products, refetch, isLoading];
}

export default useProducts
