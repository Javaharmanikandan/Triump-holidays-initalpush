

export const ScrolltoTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export const EncodeUrl = (String) => {

   return window.btoa(String);
}


export const DecodeUrl = (String) => {
   
    return  window.atob(String)

}

export const  reDirect = (type, url) => {


    switch (type) {
        case 'link':
            window.open(url, '_blank');

            break;
        case 'email':
            window.location.href = "mailto:" + url;

            break;
        case 'whatsapp':
            window.open("https://api.whatsapp.com/send/?phone="+url+"&text=Hello%2C+I%27d+like+to+contact+someone+regarding+an+Trip+plan%21&type=phone_number&app_absent=0", '_blank');

            break;
        case 'number':
            window.location.href = "tel:"+url;

            break;
        default:
            console.log("Redirect Error");
            break;
    }


}