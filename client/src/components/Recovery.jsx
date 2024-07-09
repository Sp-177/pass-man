
import '../index.css';
import { Link } from 'react-router-dom';
import Vanta from './Vanta';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { otpValidate } from './helper/validate';
export default function Recovery() {
    const formik=useFormik({
        initialValues:{
            otp:''
        },
        validate:otpValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit: async values=>{
            console.log(values);
        }
    });
  return (
   <>
   <Vanta></Vanta>
    <div className="canvas">
        <div className='container'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='header'>
             <div style={{textAlign:'center'}}>
                <h1>Recovery</h1>
                <span>Enter OTP to recover password</span>
             </div>
             <div className='profile'>
             <lord-icon src="https://cdn.lordicon.com/gjkgpzlj.json"trigger="loop"delay="2000"style={{width:'250px',height:'250px'}}></lord-icon>
             </div>
             <div>
             <span>Enter 6 digit OTP sent to your email address.</span>
                <form  onSubmit={formik.handleSubmit}>
                  
                    <div style={{display:'flex' , justifyContent:'center', alignContent:'center'}}>
                    
                        <input  type='tel' pattern="\d*"  maxLength={6}  placeholder='OTP' {... formik.getFieldProps('otp')} ></input>
                        <button id="submit"type='submit'>Enter</button>
                    </div>
                    <div className='button' style={{display:'flex', flexDirection:'column'}}>
                        <span>Can&apos;t get the OTP ?</span>
                     <Link className='button' to='/recovery'><span> Resend!</span><lord-icon src="https://cdn.lordicon.com/twemlvxy.json"trigger="loop"></lord-icon></Link>
                    </div>
                   
                </form>
             </div>
            
            </div>
        </div>
    </div>
   </>
  )
}
