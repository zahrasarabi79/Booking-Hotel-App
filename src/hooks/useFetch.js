import {useEffect, useState} from 'react'
import axios from "axios";
import toast from "react-hot-toast";

const useFetch = (url, query = "") => {
    const [date, setDate] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get(`${url}?${query}`)
                setDate(data)
            } catch (error) {
                setDate([])
                toast.error(error?.message)
            } finally {
                setIsLoading(false)
            }


        }
        fetchData()
    }, [query, url]);
    return {isLoading, date}
}

export default useFetch