import toast from "react-hot-toast";

export async function usernameValidate(values){
    
   
    const errors=usernameVerify({},values);
    return errors;
}

export async function passwordValidate(values){
    
    const errors=passwordVerify({},values);
    return errors;
 
}

export async function registerValidate(values){
    const errors=emailVerify({},values);
    usernameVerify(errors,values);
    passwordVerify(errors,values);

    return errors;
}
export async function otpValidate(values){
    const error =otpVerify({},values);
    return error;

}
export async function  emailValidate(values){
    const error = emailVerify({},values);
    return error;
}

export async function secondPasswordValidate(values){
    const error =passwordVerify({},values);
    if(values.password!==values.secondPassword){
        error.secondPassword=toast.error("Passwords do not match");
    }
    return error;
}



function passwordVerify(error={},values){
   
    let pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    
    if(!values.password){
        error.password=toast.error("Please enter a password");
    }
    else if(values.password.length<8){
        error.password=toast.error("Password should be at least 8 characters long");
    }
    else if((pattern.test(values.password))==false){
        error.password=toast.error("Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character");
    }
    
    return error;

}


function otpVerify(error={},values){
    if(!values.otp){
        error.otp=toast.error("Please enter a OTP");
    }
    else if(isNaN(values.otp)){
        error.otp=toast.error("OTP should be a number");
    }
    else if(values.otp.length!==6){
        error.otp=toast.error("OTP should be 6 digits long");
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

function emailVerify(error={},values){
    let pattern = new RegExp(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
    
    if(!values.email){
        error.email=toast.error("Please enter an email");
    }
    else if((pattern.test(values.email))===false){
        error.email=toast.error("Please enter a valid email");
    }
    
    return error;
 
}