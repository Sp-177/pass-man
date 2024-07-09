
import '../index.css';
import { Link } from 'react-router-dom';
import Vanta from './Vanta';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { usernameValidate } from './helper/validate';
export default function Username() {
    const formik=useFormik({
        initialValues:{
            username:''
        },
        validate:usernameValidate,
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
                <h1>Hello Again !</h1>
                <span>Expore More by connecting with us</span>
             </div>
             <div className='profile'>
             <lord-icon src="https://cdn.lordicon.com/szoiozyr.json" trigger='in' state='in-reveal'  style={{width:'90px',height:'90px'}}></lord-icon>
             </div>
             <div>
                <form  onSubmit={formik.handleSubmit}>
                    <div style={{display:'flex' , justifyContent:'center', alignContent:'center'}}>
                    
                        <input type='text' placeholder='username...'   {...formik.getFieldProps('username')}></input>
                        <button id="submit"type='submit'>Let&apos;s Go</button>
                    </div>
                    <div className='button' style={{display:'flex', flexDirection:'column'}}>
                        <span>Not a member ?</span>
                     <Link className='button' to='/register'><span> Register</span><lord-icon  src="https://cdn.lordicon.com/akqsdstj.json"trigger="loop"delay="10"></lord-icon></Link>
                    </div>
                   
                </form>
             </div>
            
            </div>
        </div>
    </div>
   </>
  )
}
