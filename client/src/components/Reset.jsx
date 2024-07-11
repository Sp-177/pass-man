
import '../index.css';

import Vanta from './Vanta';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {  secondPasswordValidate } from './helper/validate';
export default function Password() {
    const formik=useFormik({
        initialValues:{
            password:'',
            secondPassword:''
        },
        
        validate:secondPasswordValidate,
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
             <lord-icon src="https://cdn.lordicon.com/neujejkf.json"trigger="loop" delay='1000'style={{width:'250px',height:'250px'}}></lord-icon>
             </div>
             <div>
             <button style={{borderTop:'solid black 8px',borderRadius:'30% 30% 45% 45%',margin:'-10px'}} onClick={()=>{var x = document.getElementById("inputpassword");var z = document.getElementById("inputpassword1");z.type='text';x.type='text';setTimeout(()=>{x.type='password';z.type='password';},2000)}}><lord-icon src="https://cdn.lordicon.com/mgszhlom.json"trigger="click" style={{width:'50px',height:'50px',margin:'-10px'}}></lord-icon></button>
                <form  onSubmit={formik.handleSubmit}>
                  
                    <div style={{display:'flex',flexDirection:'column' , justifyContent:'center', alignContent:'center'}}>
                    
                        <input id="inputpassword" type='password'  placeholder='New password...' {... formik.getFieldProps('password')}onPaste={e => {e.preventDefault();return false;}}></input>
                        <input id="inputpassword1" type='password'  placeholder='Confirm password...' {... formik.getFieldProps('secondPassword')} onPaste={e => {e.preventDefault();return false;}}></input>
                        <button id="submit"type='submit'>Reset</button>
                    </div>
                    
                   
                </form>
             </div>
            
            </div>
        </div>
    </div>
   </>
  )
}
