import toast from "react-hot-toast";

export async function usernameValidate(values){
    
   
    const errors=usernameVerify({},values);
    return errors;
}

export async function passwordValidate(values){
    
    const errors=passwordVerify({},values);
    return errors;
 
}

function passwordVerify(error={},values){
    if(!values.password){
        error.password=toast.error("Please enter a password");
    }
    else if(values.password.length<8){
        error.password=toast.error("Password should be at least 8 characters long");
    }
    else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(values.password)){
        error.password=toast.error("Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character");
    }
    return error;

}
function usernameVerify(error={},values){
    if(!values.username){ 
        error.username=toast.error("Please enter a username");
    }
    else if(values.username.includes(" ")){
        error.username=toast.error("Invlide username");
    }
    return error;
}