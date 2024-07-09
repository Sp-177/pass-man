
import '../index.css';
import { Link } from 'react-router-dom';
import Vanta from './Vanta';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { registerValidate } from './helper/validate';
export default function Register() {
    const formik=useFormik({
        initialValues:{
          email:'',
            username:'',
            password:''
        },
        validate:registerValidate,
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
        <div className='container'  >
            <Toaster position="top-center" reverseOrder={false} />
            <div className='header'>
             <div style={{textAlign:'center',marginTop:'-25px'}}>
                <h1>Register</h1>
                <span>Happy to join us !</span>
             </div>
             <div className='profile' style={{textAlign:'center',marginBottom:'-25px'}}>
             <lord-icon src="https://cdn.lordicon.com/vducvgjw.json"trigger="loop"style={{width:'200px',height:'200px'}}></lord-icon>
             </div>
             <div>
                <form  onSubmit={formik.handleSubmit}>
                    <div style={{display:'flex',flexDirection:'column' , justifyContent:'center', alignContent:'center',marginBottom:'-15px'}}>
                    
                        <input type='text' placeholder='email' {... formik.getFieldProps('email')}></input>
                        <input type='text' placeholder='username' {... formik.getFieldProps('username')}></input>
                        <input type='text' placeholder='password' {... formik.getFieldProps('password')}></input>
                        <button id="submit"type='submit'>Login</button>
                    </div>
                    <div className='button' style={{display:'flex', flexDirection:'column'}}>
                        <span>Already Registered ?</span>
                     <Link className='button' to='/'><span>Login</span><lord-icon  src="https://cdn.lordicon.com/akqsdstj.json"trigger="loop"delay="10"></lord-icon></Link>
                    </div>
                   
                </form>
             </div>
            
            </div>
        </div>
    </div>
   </>
  )
}
