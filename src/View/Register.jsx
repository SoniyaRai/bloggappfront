// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css'
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [signUpUserName, setSignUpUserName] = useState('');
//   const [signUpEmail, setSignUpEmail] = useState('');
//   const [signUpPhone, setSignUpPhone] = useState('');
//   const [signUpGender, setSignUpGender] = useState('');

//   const [signUpPassword, setSignUpPassword] = useState('');
//   const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
//   const [signUpRole, setsignUpRole] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   console.log(signUpUserName);
//   console.log(signUpEmail);
//   console.log(signUpPassword);
//   console.log(signUpConfirmPassword);

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (signUpPassword !== signUpConfirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('https://localhost:7062/api/Account/register', {
//         name: signUpUserName,
//         phone:signUpPhone,
//         gender:signUpGender,
//         email: signUpEmail,
//         password: signUpPassword,
//         confirmPassword: signUpConfirmPassword,
//         role: signUpRole
//       });

//       console.log(response);

//       if (response.status === 200) {
//         // Registration successful, clear form fields
//         setSignUpUserName('');
//         setSignUpPhone(''),
//         setSignUpGender(''),
//         setSignUpEmail('');
//         setSignUpPassword('');
//         setSignUpConfirmPassword('');
//         setErrorMessage('');
//         console.log(response);

//         console.log(response.data.message);

//         // if (response.data.message = "Login completed"){
//         //   alert(response.data.message)

//         // }
//       } else {
//         setErrorMessage('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error.message);
//       setErrorMessage('Error during registration. Please try again.');
//     }
//   };

//   return (
//     <div className='main-div'>
//       <h2>Register</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={handleSignUp}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={signUpUserName}
//             onChange={(e) => setSignUpUserName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="phone"
//             value={signUpPhone}
//             onChange={(e) => setSignUpPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <input
//             type="gender"
//             value={signUpGender}
//             onChange={(e) => setSignUpEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={signUpEmail}
//             onChange={(e) => setSignUpEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={signUpPassword}
//             onChange={(e) => setSignUpPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={signUpConfirmPassword}
//             onChange={(e) => setSignUpConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <input
//             type="text"
//             value={signUpRole}
//             onChange={(e) => setsignUpRole(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>

//     </div>
//   );
// };

// export default Register;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css'
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [signUpUserName, setSignUpUserName] = useState('');
//   const [signUpEmail, setSignUpEmail] = useState('');
//   const [signUpPhone, setSignUpPhone] = useState('');
//   const [signUpGender, setSignUpGender] = useState('');

//   const [signUpPassword, setSignUpPassword] = useState('');
//   const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
//   const [signUpRole, setsignUpRole] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   console.log(signUpUserName);
//   console.log(signUpEmail);
//   console.log(signUpPassword);
//   console.log(signUpConfirmPassword);

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // Check if passwords match
//     if (signUpPassword !== signUpConfirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('https://localhost:7062/api/Account/register', {
//         name: signUpUserName,
//         phone:signUpPhone,
//         gender:signUpGender,
//         email: signUpEmail,
//         password: signUpPassword,
//         confirmPassword: signUpConfirmPassword,
//         role: signUpRole
//       });

//       console.log(response);

//       if (response.status === 200) {
//         // Registration successful, clear form fields
//         setSignUpUserName('');
//         setSignUpPhone(''),
//         setSignUpGender(''),
//         setSignUpEmail('');
//         setSignUpPassword('');
//         setSignUpConfirmPassword('');
//         setErrorMessage('');
//         console.log(response);

//         console.log(response.data.message);

//         // if (response.data.message = "Login completed"){
//         //   alert(response.data.message)

//         // }
//       } else {
//         setErrorMessage('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error.message);
//       setErrorMessage('Error during registration. Please try again.');
//     }
//   };

//   return (
//     <div className='main-div'>
//       <h2>Register</h2>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <form onSubmit={handleSignUp}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={signUpUserName}
//             onChange={(e) => setSignUpUserName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="phone"
//             value={signUpPhone}
//             onChange={(e) => setSignUpPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <input
//             type="gender"
//             value={signUpGender}
//             onChange={(e) => setSignUpEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={signUpEmail}
//             onChange={(e) => setSignUpEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={signUpPassword}
//             onChange={(e) => setSignUpPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={signUpConfirmPassword}
//             onChange={(e) => setSignUpConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <input
//             type="text"
//             value={signUpRole}
//             onChange={(e) => setsignUpRole(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>

//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";
import Logo from "../assets/images/logo.png";

const Register = () => {
  const [signUpUserName, setSignUpUserName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");
  const [signUpGender, setSignUpGender] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [signUpRole, setsignUpRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (signUpPassword !== signUpConfirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7062/api/Account/register",
        {
          name: signUpUserName,
          phone: signUpPhone,
          gender: signUpGender,
          email: signUpEmail,
          password: signUpPassword,
          confirmPassword: signUpConfirmPassword,
          role: signUpRole,
        }
      );

      console.log(response);

      if (response.data === "User registered successfully.") {
        // Registration successful, clear form fields
        setSignUpUserName("");
        setSignUpPhone("");
        setSignUpGender("");
        setSignUpEmail("");
        setSignUpPassword("");
        setSignUpConfirmPassword("");
        setsignUpRole("");
        setErrorMessage("");
        alert(response.data);
        navigate("/");
      } else {
        alert(response.data[0].description);
        setErrorMessage("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      setErrorMessage("Error during registration. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <img style={{ width: '30%' }} className="profile" alt="profilepicture" src={Logo} /> */}
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={signUpUserName}
            onChange={(e) => setSignUpUserName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            type="phone"
            autoComplete="phone"
            value={signUpPhone}
            onChange={(e) => setSignUpPhone(e.target.value)}
          />
          <FormControl component="fieldset" sx={{ mt: 1 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={signUpGender}
              onChange={(e) => setSignUpGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={signUpConfirmPassword}
            onChange={(e) => setSignUpConfirmPassword(e.target.value)}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={signUpRole}
              label="Role"
              onChange={(e) => setsignUpRole(e.target.value)}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Blogger">Blogger</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
