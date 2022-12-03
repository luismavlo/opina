import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { startLogin } from "../redux/actions/auth";
import logo from "../assets/home-assets/logo-red.png";

const LoginScreen = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm(initialForm);

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (password.length >= 0) {
      dispatch(startLogin(email.trim(), password.trim()));
    }
  };

  return (
    <div className="auth__container">
      <div className="login__card">
        <h2>LOGIN</h2>
        <div className="login__card-header">
          <div className="login__user-icon">
            <img src={logo} alt="" />
          </div>
        </div>
        <form onSubmit={handleLogin} className="login__content-form">
          <div className="auth__input-group">
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
              autoComplete="off"
              required
            />
          </div>

          <div className="auth__input-group">
            <label htmlFor="password">Password</label>
            {/* pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}" */}
            {/* required */}
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}


            />
          </div>

          <input type="submit" value="Login" className="cPoint" />
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
