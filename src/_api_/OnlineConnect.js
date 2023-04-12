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
        
     const token =await localStorage.getItem('Truimp-UserData')
        if(token)
        {
          var dat =await JSON.parse(token)
            var headers = {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer ' + dat.token

            }

        }
        else{

            var headers = {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
 
        }
        console.log(headers)
        try {
            console.log(payload ," Get")
            const response = await axios.post(url, payload, { headers });
            console.log(response ,"Data Get ")
            return response

        } catch (error) {
            return error
        }
    }
}

export default OnlineConnect