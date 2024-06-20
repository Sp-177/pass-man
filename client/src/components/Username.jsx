
import '../index.css';
export default function Username() {
  return (
   <>
    <div className="canvas">
        <div className='container'>
            <div className='header'>
             <div><h1>Hello Again !</h1>
             <span>Expore More by connecting with us</span>
             </div>
             <div className='profile'>
             <lord-icon
    src="https://cdn.lordicon.com/szoiozyr.json"
    trigger="in"
    delay="1500"
    state="in-reveal"
    >
</lord-icon></div>
             <div>
                <form>
                    <div>
                        <input type='text' placeholder='username'></input>
                        <input type='submit' value="Let's Go"></input>
                    </div>
                    <div >
                        <a className='button' href='/register'><span>Not a Member ? </span><lord-icon  src="https://cdn.lordicon.com/akqsdstj.json"trigger="loop"delay="10"></lord-icon></a>
                    </div>
                </form>
             </div>
            
            </div>
        </div>
    </div>
   </>
  )
}
