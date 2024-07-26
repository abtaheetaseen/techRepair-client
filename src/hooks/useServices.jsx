import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useServices = () => {

    const axiosPublic = useAxiosPublic();

    const {data: services = [], refetch, isLoading} = useQuery({
        queryKey: ["services"],
        queryFn: async() => {
            const res = await axiosPublic.get("/services");
            return res.data;
        }
    })
    return [services, refetch, isLoading];
}

export default useServices
