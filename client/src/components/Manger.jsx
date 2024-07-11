import { useEffect,useState } from "react";


function Manger() {

    const [form,setForm]=useState({site:"",username:"",password:""});
    const [passwordArray,setPasswordArray]=useState([]);
    const handleChange=(e)=>{
    
         
        setForm({...form , [e.target.name]:e.target.value});
    }
    const savePssword = ()=>{
        
        // console.log(form);
        setPasswordArray([...passwordArray,form])
        localStorage.setItem('passwords',JSON.stringify([...passwordArray,form]));
        
        console.log([...passwordArray,form]);
    }
    useEffect( ()=>{
        
        let passwords=localStorage.getItem('passwords');
        if(passwords){
            setPasswordArray(JSON.parse(passwords));
        }
    },[]);
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div></div>
    <div className="flex-col justify-center p-20 items-center  text-center">
        <div className="">
        <div className="text-center p-10"><span className="font-bold text-5xl "><span className="text-green-500">&lt;</span>Pass<span className="text-green-500">-Man/&gt;</span></span><br/>
        <span>Your Own Password Manger</span>
        </div>
        <div className="flex-col justify-center items-center flex ">
            <input name="site" value={form.site} onChange={handleChange} type="text" placeholder="Enter Website URl ..." className="w-1/2" ></input> 
            <div className="flex">
            <input name="username" value={form.username} onChange={handleChange} type="text" placeholder="Enter UserName ..." ></input>
            <input name="password" value={form.password} onChange={handleChange}type="password" id="inputpassword" placeholder="Enter Password ..."></input>
            <button style={{borderTop:'solid black 8px',borderRadius:'30% 30% 45% 45%', width:'50px',height:'50px'}} onClick={()=>{var x = document.getElementById("inputpassword");x.type='text';setTimeout(()=>{x.type='password'},2000)}}><lord-icon src="https://cdn.lordicon.com/mgszhlom.json"trigger="click" style={{width:'50px',height:'50px',margin:'-10px'}}></lord-icon></button>
            </div>
            <button onClick={savePssword} className=" flex justify-center items-center rounded-full border-2 bg-green-500 p-2 font-bold  hover:bg-green-600 ">Add Password <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json"trigger="loop" delay="1000"></lord-icon></button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Manger
