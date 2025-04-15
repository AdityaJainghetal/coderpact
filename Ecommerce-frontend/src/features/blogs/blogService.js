import axios from "axios";
import { base_url } from "../../utils/base_url";
import {config} from '../../utils/config'

const getAllBlogs = async ()=>{
    const response = await axios.get(`${base_url}blog`)
    return response.data
}

const getSingleBlog = async (id)=>{
    const response = await axios.get(`${base_url}blog/${id}`)
    return response.data
}


const blogService = {getAllBlogs,getSingleBlog}

export default blogService
