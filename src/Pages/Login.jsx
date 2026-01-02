// import React from "react";
// import Navbar from "../Components/Navbar";

// const Login = () => {
//   return (
//     <div>
//       <Navbar />

//       <div className="bg-[#f1f3f6] min-h-screen  flex items-center justify-center">
        
//         {/* Card */}
//         <div className="bg-white shadow-lg rounded-lg w-[420px]">
          
//           {/* Image */}
//           <img
//             src="https://static.priceoye.pk/images/login-header-img.svg"
//             alt="Register"
//             className="w-full rounded-t-lg"
//           />

//           {/* Content */}
//           <div className="px-6 py-5">
//             <h1 className="text-xl font-medium text-center">
//               Sign In or Create an Account
//             </h1>

//             <p className="text-[13px] text-gray-500 text-center mt-3">
//               Enter your phone number for a faster checkout, to track the status
//               of your order and more.
//             </p>

//             <input
//               type="text"
//               placeholder="Mobile number"
//               className="w-full mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />

//             <button className="w-full mt-4 bg-[#48afff] text-white py-2 rounded-md">
//               Get OTP
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React from 'react'
import Navbar from "../Components/Navbar";
const Login = () => {
  return (
    <div>
      <Navbar/>

      <div className='bg-[#f1f3f6] flex min-h-screen  items-center justify-center'>

        {/* card */}
        <div className='bg-white shadow-lg rounded-lg  w-[420px]'>
          <img src="https://static.priceoye.pk/images/login-header-img.svg " className='w-full rounded-t-lg ' alt="Image"/> 


          <div className='px-6 py-5'>
            <h1 className='text-xl font-medium text-center '>Sign In or Create an Account</h1>
            <p className='text-[13px] text-center text-gray-500 mt-3'>Enter your phone number for a faster checkout, to track the status of your order and more.</p>

            <input type="text" placeholder='Mobile Number...' className='w-full mt-4  px-4 py-2  border border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
            <button className='w-full mt-4  bg-[#48afff] text-white py-2 rounded-md '>Get OTP</button>

           </div>
        </div>


      </div>


    </div>
  )
}

export default Login
