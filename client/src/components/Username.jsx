
import '../index.css';
import { Link } from 'react-router-dom';
export default function Username() {
  return (
   <>
    <div className="canvas">
        <div className='container'>
            <div className='header'>
             <div style={{textAlign:'center'}}>
                <h1>Hello Again !</h1>
                <span>Expore More by connecting with us</span>
             </div>
             <div className='profile'>
             <lord-icon src="https://cdn.lordicon.com/szoiozyr.json"trigger="in"state="in-reveal" style={{width:'90px',height:'90px'}}></lord-icon>
             </div>
             <div>
                <form>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignContent:'center'}}>
                        <input type='text' placeholder='username'></input>
                        <Link to='/profile'><button type='submit'>Let&apos;s Go</button></Link>
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
