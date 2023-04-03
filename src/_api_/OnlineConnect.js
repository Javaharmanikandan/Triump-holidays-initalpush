import axios from "axios";

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
}

class OnlineConnect {

    static GetMethod = async (url) => {
    //    const connectUrl= baseUrl + url;
        try {
            const response = await axios.get(url, { headers })
            return response
        } catch (error) {
            return error
        }

    }

    static PostMothod = async (url, payload) => {
        
        try {
            const response = await axios.post(url, payload, { headers });
            return response
        } catch (error) {
            return error
        }
    }
}

export default OnlineConnect