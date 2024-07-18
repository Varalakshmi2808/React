import {useEffect, useState} from 'react'
import "./App.css"
let App=()=>{
  let a=["https://th.bing.com/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&w=334&h=186&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.pAcu7875Nl6e_M0tBXBzGQHaE5&w=307&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    "https://tse4.mm.bing.net/th/id/OIP.anp0XQz24UeOEE5qf-5swQHaEo?w=298&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://tse4.mm.bing.net/th/id/OIP.rjExmgmKTbfTBdhiO6pcZAHaE8?w=292&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://tse3.mm.bing.net/th/id/OIP.zBTFCq6IB11YUgBOc7c1mwHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  ]
  let h=["image-1","image-2","image-3","image-4","image-5"]
  let [i,setI]=useState(0)
  let inc=()=>{
    setI((i)=>(i+1)%a.length)
  }
  let dec=()=>{
    setI((i)=>{
      if(i===0){
        return a.length-1
      }
      else{
        return i-1
      }
  })
  }

  let upd=(ind)=>{
    setI((i)=>ind)
  }
  useEffect(()=>{
    let iid=setInterval(inc,3000)
    return ()=>{
      clearInterval(iid)
    }
  })

  return(<div className="con">
        <img src={a[i]}/>
        <h1 className="head">{h[i]}</h1>
        <i class="fa-solid fa-less-than pre" onClick={dec}></i>
        <i class="fa-solid fa-chevron-right nex" onClick={inc}></i>
        <div className='dots'>
        {
          a.map((item,index)=>{
            return(<i className={index===i? "fa-solid fa-circle":"fa-regular fa-circle"} onClick={()=>upd(index)}></i>)
          })
        }
        </div>
  </div>)
}
export default App