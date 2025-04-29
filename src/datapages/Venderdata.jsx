// import React, { useState } from "react";
// import UserInfo from "../pages/UserInfo";

// const Venderdata = () => {
//   let samplearry = ["raju", "raghu", "ramesh", { username: "rajesh" }];
//   let players = [
//     {
//       cricket: "raju",
//       chese: "ramesh",
//       valeball: "ramu",
//       basketball: "mahesh",
//     },
//   ];
//   const [user, setUser] = useState(" ");
//   const [details, setDetails] = useState();
//   const [password, setpassWord] = useState();
//   const handle = (e) => {
//     setUser(e.target.value);
//   };
//   // const Createpass = (e) => {
//   //   setpassWord(e.target.value);
//   // };

//   const updateDetails = (e) => {
//     e.preventDefault();
//     setDetails(user);
//     setpassWord(password);
//   };

//   return (
//     <>
//       <UserInfo />
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//       {players.map((item) => {
//         return (
//           <div>
//             <h1>{item.cricket}</h1>
//           </div>
//         );
//       })}
//       <h3>my name is :{samplearry[2]}</h3>
//       <h2>hello: {details}</h2>

//     </>
//   );
// };

// export default Venderdata;
import React, { useState, useEffect } from "react";
import { useTitle } from "../TitleContext";
import UserInfo  from "../pages/UserInfo";

const FormValidation = () => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("pyton-cigereate-balancing-venders ");
  }, [setTitle]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null); // New state for submitted data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";
    if (name === "username" && value.length < 3) {
      error = "Username must be at least 3 characters";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Invalid email";
    }
    if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    }
    if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Object.values(errors).some((e) => e) ||
      Object.values(formData).some((v) => !v)
    ) {
      alert("Please fix the errors and fill all fields.");
    } else {
      setSubmittedData(formData); // Save submitted data to display it
    }
  };

  return (
    <>
      <UserInfo isvenders={true} />
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <small>{errors.username}</small>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small>{errors.password}</small>}
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
        </div>

        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <h1 className="submitted-result">
          Hello {submittedData.username}, your email is {submittedData.email}.
        </h1>
      )}
    </>
  );
};

export default FormValidation;
