
import '../index.css';
import { Link } from 'react-router-dom';
import Vanta from './Vanta';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { passwordValidate } from './helper/validate';
export default function Password() {
    const formik=useFormik({
        initialValues:{
            password:''
        },
        validate:passwordValidate,
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
             <button onClick={()=>{var x = document.getElementById("inputpassword");x.type='text';setTimeout(()=>{x.type='password'},2000)}}><lord-icon src="https://cdn.lordicon.com/mgszhlom.json"trigger="click" style={{width:'50px',height:'50px',margin:'-10px'}}></lord-icon></button>
                <form  onSubmit={formik.handleSubmit}>
                  
                    <div style={{display:'flex' , justifyContent:'center', alignContent:'center'}}>
                    
                        <input id="inputpassword" type='password' placeholder='password' {... formik.getFieldProps('password')}></input>
                        <button id="submit"type='submit'>Sign In</button>
                    </div>
                    <div className='button' style={{display:'flex', flexDirection:'column'}}>
                        <span>Forget Password ?</span>
                     <Link className='button' to='/recovery'><span> Recover!</span><lord-icon  src="https://cdn.lordicon.com/akqsdstj.json"trigger="loop"delay="10"></lord-icon></Link>
                    </div>
                   
                </form>
             </div>
            
            </div>
        </div>
    </div>
   </>
  )
}
