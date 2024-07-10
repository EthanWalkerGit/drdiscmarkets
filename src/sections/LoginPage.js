import React, { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';


const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setLoggedInUser(null); // Set logged-in user to null
    };

    return (
      <div>
            <div className="mt-20 flex flex-row justify-center mb-7">
            <div className="w-frImageW">
          <div className="">
            {loggedInUser ? (
                <div>
                    <p>Welcome {loggedInUser}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <Register />
                    <Login setLoggedInUser={setLoggedInUser} />
                </div>
            )}
          </div>
          </div>
          </div>
          </div>
    );
};

export default LoginPage;