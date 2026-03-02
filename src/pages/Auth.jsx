import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Input from '../shared/components/FormElements/Input';
import ErrorModal from '../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../shared/util/validators';
import { useForm } from '../shared/hooks/form-hook';
import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';
import './Auth.css';


const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {  // register
      setFormData(
        {
          ...formState.inputs,
          first_name: undefined,
          last_name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {  // login
      setFormData(
        {
          ...formState.inputs,
          first_name: {
            value: '',
            isValid: false,
          },
          last_name: {
            value: '',
            isValid: false,
          },
        },
        false,
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/users/login`,
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            'Content-Type': 'application/json',
          },
        );
        auth.login(responseData.id, responseData.first_name, responseData.last_name, responseData.email, responseData.title, responseData.profile_pic, responseData.token);
        navigate(from.pathname, { replace: true });
      } catch (err) {
        console.error(err)
      }
    } else {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_API_URL}/users/signup`,
          'POST',
          JSON.stringify({
            first_name: formState.inputs.first_name.value,
            last_name: formState.inputs.last_name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            'Content-Type': 'application/json',
          },
        );
        auth.login(responseData.id, responseData.first_name, responseData.last_name, responseData.email, responseData.profile_pic, responseData.token);
        navigate(from.pathname, { replace: true });
      } catch (err) {
        console.error(err)
      }
    }
  };

  const eyeClickHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="d-flex align-items-center text-center">
        <div className="left-div">
          <div>
            {isLoading && <LoadingSpinner asOverlay />}
            {/* <img src={logo} className="logo" /> */}
            <form onSubmit={authSubmitHandler}>
              {!isLoginMode && (
                <div>
                  <label className="flex text-style">First Name</label>
                  <Input
                    element="input"
                    id="first_name"
                    type="UserName"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a First Name."
                    onInput={inputHandler}
                  />
                </div>

              )
              }
              {!isLoginMode && (

                <div>
                  <label className="flex text-style">Last Name</label>
                  <Input
                    element="input"
                    id="last_name"
                    type="UserName"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a Last Name."
                    onInput={inputHandler}
                  />
                </div>
              )}
              <div style={{ margin: '1px' }}>
                <label className="flex text-style">Email Address</label>
                <Input
                  element="input"
                  id="email"
                  type="email"
                  validators={[VALIDATOR_EMAIL()]}
                  errorText="Please enter a valid email address."
                  onInput={inputHandler}
                />
              </div>
              <div className="user-pass-wrap">
                <label className="flex text-style">Password</label>
                <Input
                  element="input"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  validators={[VALIDATOR_MINLENGTH(6)]}
                  errorText="Please enter a valid password, at least 6 characters."
                  onInput={inputHandler}
                  style={{ postion: 'absoulte' }}
                />
                <span className="eye-icon" onClick={eyeClickHandler}>
                  <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                </span>
              </div>
              <div className="forgetmenot" style={{"justifycontent": "space-between"}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" />
                  <label className="flex Remember text-style">Remember Me</label>
                </div>
                {isLoginMode && (
                  <button type="submit" className="btn btn-secondary" disabled={!formState.isValid}>
                    <span>Log In</span>
                  </button>
                )}
              </div>
              <div className="createFreeAccount">


                {!isLoginMode && (
                  <div className='d-flex flex-column align-items-center'>
                    <button type="submit" className="btn btn-warning w-100" disabled={!formState.isValid}>
                      <div >
                        <span>Create FREE Account</span>
                      </div>
                    </button>
                    <small>(No Credit Card, No Fees)</small>
                  </div>
                )}
              </div>
              <div
                style={{
                  float: 'left',
                  margintop: '40px',
                  fontSize: '12px',
                  position: 'reletive',
                  bottom: '19%',
                }}
              >
                <a
                  style={{ color: 'black', cursor: 'pointer', fontsize: '13px' }}
                  onClick={switchModeHandler}
                >
                  {isLoginMode ? <><span className='btn btn-warning'>Create FREE Account</span><div>(No Credit Card, No Fees)</div></> : <span><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Back to Log In</span>}
                </a>

              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Auth;
