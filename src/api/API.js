import axios from 'axios'

const API = {
    async GET(path = ""){
        try{
            return await axios.get(path);
        } catch (error){
            return false;
        }
    }
}

export { API };