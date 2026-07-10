    export const  formValidationChecker = (email , password , name)=>{

    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValidation =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);
    const nameValidation = /^[a-zA-Z]+([ \-'][a-zA-Z]+)*$/.test(name)   
    
        const data = {
            email : emailValidation ,
            password : passwordValidation,
            name : nameValidation 
        }
     


        return data ;


    }