import {useState} from "react";
import { useSession } from '@clerk/clerk-react'

const useFetch = (cb, options={})=>{
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const {session} = useSession();

    const fn= async (...args)=>{
        setLoading(true);
        setError(null);

        try{
            const supabaseAcessToken= await session.getToken({
             template:"supabase"
            });
            const response= await cb(supabaseAcessToken,options,...args);
            setData(response);
            setError(null);
        }catch(error){
            setError(error)
        }finally{
            setLoading(false);
        }
    };
    return {data, loading, error, fn};
};

export default useFetch;