// import { Route, Routes } from "react-router-dom";
// import AddUser from "./features/users/AddUser";
// import EditUser from "./features/users/EditUser";
// import UserList from "./features/users/UserList";

// function App() {
//   return (
//     <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
//       <h1 className="text-center font-bold text-2xl text-gray-700">CRUD with redux toolkit</h1>
//       <Routes>
//         <Route path="/" element={<UserList />} />
//         <Route path="/add-user" element={<AddUser />} />
//         <Route path="/edit-user/:id" element={<EditUser />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import Header from './ecommerse/component/Header'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './ecommerse/component/Home'

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Home />
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`App`}>
      <div className={`container ${isActive ? 'active' : ''}`}>
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={handleLoginClick}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
