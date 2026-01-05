import React, { useState } from 'react'
import { BiMobile } from 'react-icons/bi'
import { BsEarbuds, BsWatch } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { GrCompliance } from 'react-icons/gr'
import { IoMdMic } from 'react-icons/io'
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [open,setopen]=useState(false)
  return (
    <div className=' bg-[#48afff] py-[8px] flex  items-center justify-between '>



     <div className='flex items-center p-4 md:gap-5 gap-1'>

        <div onClick={()=>setopen(true)} className='text-white cursor-pointer     '>
          <RiMenu2Line size={20}/>
        </div>
        <img
  className="w-28 md:w-40 h-auto"
  src="https://static.priceoye.pk/images/logo.svg"
  alt="logo"/>

    </div> 

  <Sidebar faiq={open} affan={setopen}/>

   



    <div className='flex items-center   mr-[4px] bg-white rounded-lg'>


      <input className=' border-none  md:px-20 py-2 px-[2px]  border-white outline-none rounded-lg ' type="text" placeholder='Search... ' />
      <p className='text-blue-800 md:text-[30px] text-[20px]'><IoMdMic size={15} /></p>


    </div>


    <div className='md:flex gap-2 px-5  hidden md:block '>

      <Link to='/Login'> <button className='px-5 bg-white py-2 text-[#48afff]  rounded-lg'>Log in</button></Link>
       <Link to='/Login'><button className='px-5 rounded-lg border-white border py-2  text-white'>Register</button></Link>

    </div>

    </div>
  )
}

export default Navbar

 


































// import React, { useState } from 'react'

// const Search = () => {
//     const [names ,setname] = useState("")
//     const list = [
//         {
//         name:"yousaf",email: "yoousaf@gmail.com",number:22323,
//     },
//         {
//         name:"ali",email: "alli@gmail.com",number:23456
//     },
//         {
//         name:"hamza",email: "haamza@gmail.com",number:87654
//     },
//         {
//         name:"saad",email: "saaad@gmail.com",number:64533
//     },
//     ]

//     const filteritem = list.filter((item,index) =>
//         item.name.toLowerCase().includes(names.toLowerCase())
//     )



//   return (
//     <div>
//       <input type="text" placeholder='search anything' value={names} onChange={(e) => setname(e.target.value)} />
//         <div className="">
//             {filteritem.map((item, index) =>{
//                 return(
//                     <div key={index}>
//                       <ul>
//                         <li >{item.name}</li>   
//                         <li >{item.email}</li>
//                         <li >{item.number}</li>
//                         </ul>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default Search




























// import React, { useState } from 'react'


// const Navbar = () => {

//   const [name,setname]=useState("")

// const list =[
//   {
//      image: "/vite.svg" ,name:"yousf",email:"Yousuf@gmail.com" , password:"47654655"
//   },
//   {
//      image:"https://images.priceoye.pk/xinji-cobee-ca1-smart-watch-pakistan-priceoye-1sxc5-270x270.jpg", name:"Ayan",email:"Ayan@gmail.com" , password:"47654655"
//   },
//   {
//     image:"https://images.priceoye.pk/airox-ca04-pd-car-charger-qc-pakistan-priceoye-wjwxs-270x270.jpg", name:"ali",email:"Ali@gmail.com" , password:"47654655"
//   },
//    {
//     image:"https://images.priceoye.pk/airox-ca04-pd-car-charger-qc-pakistan-priceoye-wjwxs-270x270.jpg", name:"ali",email:"Ali@gmail.com" , password:"47654655"
//   },
//    {
//     image:"https://images.priceoye.pk/airox-ca04-pd-car-charger-qc-pakistan-priceoye-wjwxs-270x270.jpg", name:"ali",email:"Ali@gmail.com" , password:"47654655"
//   },
// ]
// const filteritem = list.filter((item) =>
//  item.name.toLowerCase().includes(name.toLowerCase()))

//   return (
//     <div>
//       <input type="text" placeholder='Search...' className='outline-none flex  justify-center  bg-blue-600' value={name} onChange={(e) => setname(e.target.value)}/>
//       <div>
//         {filteritem.map((item,index) =>{
//           return(
//             <div  key={index} className='px-10 py-2'>
//               <ul className='flex w-20 gap-10'>
                
//                 <img className='w-10 h-10' src={item.image} alt="logo"/>
//                  <li className='font-normal uppercase  opacity-75'>{item.name}</li>
//                 <li>{item.email}</li>
//                 <li>{item.password}</li>
//               </ul>

//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Navbar

























// import React, { useState } from 'react'


// const Navbar = () => {
//   const [name,setname]=useState("")
//   const list =[
//      {
//      image: "/vite.svg" ,name:"yousf",email:"Yousuf@gmail.com" , password:"47654655"
//   },

//   {
//      image: "/vite.svg" ,name:"yousf",email:"Yousuf@gmail.com" , password:"47654655"
//   },

//   {
//      image: "/vite.svg" ,name:"yousf",email:"Yousuf@gmail.com" , password:"47654655"
//   },

//   {
//      image: "/vite.svg" ,name:"ali",email:"Yousuf@gmail.com" , password:"47654655"
//   },
//   {
//      image: "/vite.svg" ,name:"ahmed",email:"Ahmed@gmail.com" , password:"47654655"
//   },
  

//   ]

//   const filteritem = list.filter((item) =>
//   item.name.toLowerCase().includes(name.toLowerCase()))
//   return (
//     <div className='bg-blue-500 flex justify-center p-10'>
//       <input type="text" placeholder='Search...' className='outline-none px-10 rounded-lg fixed  py-1 '  value={name} onChange={(e)=> setname(e.target.value)}/>
//       <div>
//         {filteritem.map((item,index) =>{
//           return (
//             <div className='mt-10 ' key={index}>
//               <ul className='flex gap-2  mt-2'>
//                 <img src={item.image} alt=""/>
//                 <li>{item.name}</li>
//                 <li>{item.password}</li>
//                 <li>{item.email}</li>
//               </ul>

//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Navbar
