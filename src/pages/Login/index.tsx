/** Import Component */
import React from 'react';
import { useState } from 'react';

/** Import Assets */
import CloverLogo from './assets/clover-logo.svg'
import GoogleIcon from './assets/google-icon.svg'
import FacebookIcon from './assets/fb-icon.svg'
import VisibilityOn from './assets/visibility_black_24dp.svg'
import VisibilityOff from './assets/visibility_off_black_24dp.svg'

const Login = () => {
  let [identifierStatus, setIdentifierStatus] = useState(false)
  let [passwordStatus, setPasswordStatus] = useState(false)
  let [passwordVisibility , setPasswordVisibility] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    // POST request
  }

  const handleIdentifierChange = (e: any) => {
    if(e.target.value !== ""){
      setIdentifierStatus(true)
    } else {
      setIdentifierStatus(false)
    }
  }

  const handlePasswordChange = (e: any) => {
    if(e.target.value !== ""){
      setPasswordStatus(true)
    } else {
      setPasswordStatus(false)
    }
  }

  const handlePasswordVisibility = () => {
    setPasswordVisibility((status) => !status)
  }

  const inputStyle = "ring-2 focus:outline-none focus:ring-green-primary bg-[color:#FAFAFB] rounded-full w-full px-5 py-[12px] font-medium"

  return (
    <div>
      <div className="flex justify-center my-10 lg:my-20">
        <img src={CloverLogo} alt="clover-logo" className="w-1/8"/>
      </div>

      <div className="flex justify-center font-primary font-medium text-[16px]">
        <div className="border border-solid border-black border-opacity-10 px-6 py-8 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-8 px-4">
            <p className="text-[25px] text-green-secondary font-bold">
              Masuk
            </p>
            <a href="/register" className="text-green-primary">
              Daftar
            </a>
          </div>
          <form id="login-form" onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-5">
            <input type="text" name="login-identifier" onChange={(e) => handleIdentifierChange(e)} placeholder="Nomor handphone atau email" className={`${identifierStatus ? "ring-green-primary" : "ring-[color:#F1F1F5]"} ${inputStyle} `}/>
            <label className="relative">
              <div onClick={() => handlePasswordVisibility()}  className="cursor-pointer h-6 w-6 absolute top-1/2  transform -translate-y-1/2 right-5 z-10">
                <img src={passwordVisibility ? VisibilityOn : VisibilityOff} alt="visibility-icon"/>
              </div>
              <input type={passwordVisibility ? "text" : "password"} name="login-password" onChange={(e) => handlePasswordChange(e)} placeholder="Password" className={`${passwordStatus ? "ring-green-primary" : "ring-[color:#F1F1F5]"} ${inputStyle}`}/>
            </label>
            <button type="submit" disabled={!(identifierStatus && passwordStatus)} className={`rounded-full ${(identifierStatus && passwordStatus) ? "bg-green-primary text-white cursor" : "bg-gray-200 text-[color:#6D737D] cursor-default"}  w-full px-28 py-[10px] font-bold`}>
              Selanjutnya
            </button>
          </form>

          <div className="flex justify-center w-full my-6 text-[color:#ADAEAE]">
              atau
          </div>
          
          <div id="other-login-opt" className="flex flex-col gap-5">
            <button type="button" className="rounded-full border border-solid border-gray-100 w-full px-24 py-[10px]">
              <div className="flex justify-center gap-3 text-green-secondary font-bold">
                <img src={GoogleIcon} alt="google-icon"/>
                <p>
                  Continue with Google
                </p>
              </div>
            </button>
            <button type="button" className="rounded-full border border-solid border-gray-100 w-full px-24 py-[10px]">
              <div className="flex justify-center gap-3 text-green-secondary font-bold">
                <img src={FacebookIcon} alt="fb-icon"/>
                <p>
                  Continue with Facebook
                </p>
              </div>
            </button>
          </div>
          
          <div className="mt-6">
            <hr />
          </div>

          <div id="forget-pass" className="flex justify-center mt-8">
            <a href="#"className="text-green-primary">
              Lupa password?
            </a>
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-5 mb-4 md:mt-10 md:mb-10 lg:mt-16 lg:mb-19 text-sm text-[color:#696974] items-center">
        <a href="#">Privacy policy</a> <span className="font-bold text-xl px-1"> &#183; </span> <a href="#">Terms of use</a>
      </div>

    </div>
  );
};

export default Login;
