/** Import Component */
import React, { useState, useEffect } from 'react';
import { PasswordStrengthMeter } from '../../components';

/** Import Assets */
import CloverLogo from './assets/clover-logo.svg'
import GoogleIcon from './assets/google-icon.svg'
import FacebookIcon from './assets/fb-icon.svg'
import VisibilityOn from './assets/visibility_black_24dp.svg'
import VisibilityOff from './assets/visibility_off_black_24dp.svg'

const passwordStrengthText: {[key: number]: string} = {0:"None", 1:"Very Weak", 2:"Weak", 3:"Medium", 4:"Strong", 5:"Very Strong"}

const Register = () => {
  let [emailStatus, setEmailStatus] = useState(false)
  let [usernameStatus, setUsernameStatus] = useState(false)
  let [password, setPassword] = useState("")
  let [passwordStatus, setPasswordStatus] = useState(false)
  let [passwordVisibility , setPasswordVisibility] = useState(false)
  let [rPassword, setRPassword] = useState("")
  let [rPasswordStatus, setRPasswordStatus] = useState(false)
  let [rPasswordVisibility , setRPasswordVisibility] = useState(false)
  let [passwordStrength , setPasswordStrength] = useState(0)
  let [passwordStrengthStatus , setPasswordStrengthStatus] = useState("None")
  let [passwordMatch, setPasswordMatch] = useState(false)


  useEffect(() => {
    setPasswordStrengthStatus(passwordStrengthText[passwordStrength])
  }, [passwordStrength])

  useEffect(() => {
    if(rPassword !== "") {
      setPasswordMatch(password === rPassword)
    }
  }, [password, rPassword])

  const handleRegister = (e: React.FormEvent) => {
    // POST request
  }

  const handleGoogleRegister = () => {
    // POST request
  }

  const handleFacebookRegister = () => {
    // POST request
  }

  const handleEmailChange = (e: any) => {
    if(e.target.value !== ""){
      setEmailStatus(true)
    } else {
      setEmailStatus(false)
    }
  }

  const handleUsernameChange = (e: any) => {
    if(e.target.value !== ""){
      setUsernameStatus(true)
    } else {
      setUsernameStatus(false)
    }
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
    if(e.target.value !== ""){
      setPasswordStatus(true)
      // Check password in backend
      let passStrength = Math.floor(Math.random() * 6)
      setPasswordStrength(passStrength)
    } else {
      setPasswordStatus(false)
      setPasswordStrength(0)
    }
  }

  const handleRPasswordChange = (e: any) => {
    setRPassword(e.target.value)
    if(e.target.value !== ""){
      setRPasswordStatus(true)
      // Check password in backend
    } else {
      setRPasswordStatus(false)
    }
  }

  const handlePasswordVisibility = () => {
    setPasswordVisibility((status) => !status)
  }

  const handleRPasswordVisibility = () => {
    setRPasswordVisibility((status) => !status)
  }

  const inputStyle = "ring-2 focus:outline-none focus:ring-green-primary bg-[color:#FAFAFB] rounded-full w-full px-5 py-[12px] font-medium"

  return (
    <div>
      <div className="flex justify-center my-10 lg:mb-20 lg:mt-20">
        <img src={CloverLogo} alt="clover-logo" className="w-1/8"/>
      </div>

      <div className="flex justify-center font-primary font-medium text-[16px]">
        <div className="border border-solid border-black border-opacity-10 px-6 py-8 rounded-2xl shadow-md">
          <div className="flex items-center mb-8 px-4">
            <p className="text-[25px] text-green-secondary font-bold">
              Daftar Akun
            </p>
          </div>

          <form id="login-form" onSubmit={(e) => handleRegister(e)} className="flex flex-col gap-5">
            <input type="text" name="email-no-hp" onChange={(e) => handleEmailChange(e)} placeholder="Email/No Hp" className={`${emailStatus ? "ring-green-primary" : "ring-[color:#F1F1F5]"} ${inputStyle} `}/>
            <input type="text" name="username" onChange={(e) => handleUsernameChange(e)} placeholder="Username" className={`${usernameStatus ? "ring-green-primary" : "ring-[color:#F1F1F5]"} ${inputStyle} `}/>
            <label className="relative">
              <div onClick={() => handlePasswordVisibility()}  className="cursor-pointer h-6 w-6 absolute top-1/2  transform -translate-y-1/2 right-5 z-10">
                <img src={passwordVisibility ? VisibilityOn : VisibilityOff} alt="visibility-icon"/>
              </div>
              <input type={passwordVisibility ? "text" : "password"} name="login-password" onChange={(e) => handlePasswordChange(e)} placeholder="Password" className={`${passwordStatus ? "ring-green-primary" : "ring-[color:#F1F1F5]"} ${inputStyle}`}/>
            </label>
            <label className="relative">
              <div onClick={() => handleRPasswordVisibility()}  className="cursor-pointer h-6 w-6 absolute top-1/2  transform -translate-y-1/2 right-5 z-10">
                <img src={rPasswordVisibility ? VisibilityOn : VisibilityOff} alt="visibility-icon"/>
              </div>
              <input type={rPasswordVisibility ? "text" : "password"} name="login-password" onChange={(e) => handleRPasswordChange(e)} placeholder="Repeat Password" className={`${rPasswordStatus ? (passwordMatch ? "ring-green-primary" : "ring-red-500") : "ring-[color:#F1F1F5]"} ${inputStyle}`}/>
            </label>
            <div className="flex items-center gap-3 pl-12 pr-2">
              <PasswordStrengthMeter height="0.375em" value={passwordStrength} max={5}/>
              <p className="text-[color:#92929D] w-1/2 text-[14px]">
                {passwordStrengthStatus}
              </p>
            </div>
            <button type="submit" disabled={!(emailStatus && usernameStatus && passwordStatus && rPasswordStatus && passwordMatch)} className={`rounded-full ${(emailStatus && usernameStatus && passwordStatus && rPasswordStatus && passwordMatch) ? "bg-green-primary text-white cursor" : "bg-gray-200 text-[color:#6D737D] cursor-default"}  w-full px-28 py-[10px] font-bold`}>
              Register
            </button>
          </form>

          <div className="flex justify-center w-full my-6 text-[color:#ADAEAE]">
              atau
          </div>
          
          <div id="other-login-opt" className="flex flex-col gap-5">
            <button type="button" onClick={() => handleGoogleRegister()} className="rounded-full border border-solid border-gray-100 w-full px-24 py-[10px]">
              <div className="flex justify-center gap-3 text-green-secondary font-bold">
                <img src={GoogleIcon} alt="google-icon"/>
                <p>
                  Register with Google
                </p>
              </div>
            </button>
            <button type="button" onClick={() => handleFacebookRegister()} className="rounded-full border border-solid border-gray-100 w-full px-24 py-[10px]">
              <div className="flex justify-center gap-3 text-green-secondary font-bold">
                <img src={FacebookIcon} alt="fb-icon"/>
                <p>
                  Register with Facebook
                </p>
              </div>
            </button>
          </div>
          
          <div className="mt-6">
            <hr />
          </div>

          <div id="forget-pass" className="flex justify-center mt-8 gap-2">
            <p className="text-green-secondary">
              Sudah punya akun?
            </p>
            <a href="/login"className="text-green-primary">
              Masuk
            </a>
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-5 mb-4 md:mt-10 md:mb-10 lg:mt-15 lg:mb-19 text-sm text-[color:#696974] items-center">
        <a href="#">Privacy policy</a> <span className="font-bold text-xl px-1"> &#183; </span> <a href="#">Terms of use</a>
      </div>

    </div>
  );
};

export default Register;
