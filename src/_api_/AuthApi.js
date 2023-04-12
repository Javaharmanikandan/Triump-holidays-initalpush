import OnlineConnect from "./OnlineConnect";


export class AuthApi{
    
    //To Do User Login Api 
    static userLogin = async(url,payload) =>{
        const ResponseData = await OnlineConnect.PostMothod(url,payload);
         const UserData =ResponseData && ResponseData.data.data;
        
         if (ResponseData && ResponseData.data.status) {
            
         await  localStorage.setItem('Truimp-UserData', JSON.stringify(UserData));


         }

        return ResponseData && ResponseData.data;
    }

    //To Do User 
    static userRegister = async(url,payload) =>{
    
      
        const ResponseData = await OnlineConnect.PostMothod(url,payload);


          console.log(ResponseData && ResponseData.response !==undefined ,"resposnse")

          if(ResponseData && ResponseData.response !==undefined){
            console.log(ResponseData && ResponseData.response.data,"resposnse if")
            return ResponseData && ResponseData.response.data;
          }
          else{

            if (ResponseData && ResponseData.data.status ) {
                const UserData =ResponseData && ResponseData.data.data;
    
               localStorage.setItem('Truimp-UserData', JSON.stringify(UserData));
            }
            return ResponseData && ResponseData.data;
          }
        
      
    }
    //To Check User Loged In Or not
    static isAuthenticated = async() =>{
        const user = await localStorage.getItem('Truimp-UserData');
        if (!user) {
    
            return {};
        }
        return JSON.parse(user);
    }   
}