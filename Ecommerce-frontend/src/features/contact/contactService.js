import axios from "axios";
import { base_url } from "../../utils/base_url";
import {config} from '../../utils/config'


const createEnquiry = async (enqData)=>{
    const response = await axios.post(`${base_url}enquiry/create`,enqData,config)
    return response.data
}


const contactService = {createEnquiry}

export default contactService
