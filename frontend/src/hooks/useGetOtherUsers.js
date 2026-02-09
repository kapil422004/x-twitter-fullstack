import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getOtherUser } from "../redux/userSlice";

axios.defaults.withCredentials = true;
const backendUrl = import.meta.env.VITE_BACKEND_USER_URL

const useOtherUsers = (id) =>{
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchOtheUser = async () => {
                try {
                    const res = await axios.get(backendUrl + `/otherusers/${id}`)
                    dispatch(getOtherUser(res.data.otherUser))
                } catch (error) {
                    console.log(error)
                }
        }
        fetchOtheUser()
    },[])

}

export default useOtherUsers