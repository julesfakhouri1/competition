import React from "react";

export default function RegisterPage() {
  return (
    <div className="bg-[#ddd5e6] h-screen px-[23px] py-[60px]">
      <div className="h-full w-full">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.77339 17.6044C9.52483 17.8577 9.18789 18 8.83659 18C8.48528 18 8.14835 17.8577 7.89978 17.6044L0.387695 9.93987C0.139441 9.68626 0 9.34249 0 8.98405C0 8.62562 0.139441 8.28185 0.387695 8.02824L7.89978 0.363673C8.15103 0.124462 8.48351 -0.00585393 8.82711 0.000201998C9.1707 0.00625793 9.49857 0.148213 9.74157 0.396135C9.98456 0.644069 10.1237 0.97859 10.1296 1.32916C10.1356 1.67973 10.0078 2.01896 9.77339 2.27531L4.52376 7.63148H17.6743C18.0259 7.63148 18.3631 7.77399 18.6117 8.02764C18.8603 8.2813 19 8.62533 19 8.98405C19 9.34278 18.8603 9.68681 18.6117 9.94046C18.3631 10.1941 18.0259 10.3366 17.6743 10.3366H4.52376L9.77339 15.6928C10.0216 15.9464 10.1611 16.2902 10.1611 16.6486C10.1611 17.0071 10.0216 17.3508 9.77339 17.6044Z"
            fill="#74549F"
          />
        </svg>
        <div className="pt-[112px] font-darker-grotesque text-primary leading-[26px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[25px] font-[700] text-left">
              Créez votre compte
            </h1>
            <h2 className=" font-[400] text-[22px] ">
              Inscrivez-vous en toute simplicité.
            </h2>
          </div>
          <div className="mt-[60px] flex flex-col gap-[12px]">
            <div>
              <p className="text-[20px] font-[400]">Adresse mail</p>
              <input className="w-full h-[47px] px-6 py-3 rounded-[9px] border bg-transparent border-primary"></input>
            </div>
            <div>
              <p className="text-[20px] font-[400]">Prénom</p>
              <input className="w-full h-[47px] px-6 py-3 rounded-[9px] border bg-transparent border-primary"></input>
            </div>
            <div>
              <p className="text-[20px] font-[400]">Mot de passe</p>
              <input className="w-full h-[47px] px-6 py-3 rounded-[9px] border bg-transparent border-primary"></input>
            </div>
            <div className="w-full h-[47px] rounded-[9px] border bg-primary flex items-center justify-center">
              <p className="text-[#DDD4E7] font-[500] text-[20px] leading-none">
                S’inscrire
              </p>
            </div>
            <div className="flex items-center w-full gap-3">
              <div className="flex-grow h-[0.5px] bg-[#9C88BB]"></div>
              <div className="w-[19px] h-[19px] flex items-center justify-center">
                <p className="text-primary text-sm font-[600]">ou</p>
              </div>
              <div className="flex-grow h-[0.5px] bg-[#9C88BB]"></div>
            </div>
            <div className="w-full h-[48px] rounded-[30px] border-t border-l border-[#333333] border-[0.76px] bg-white flex items-center justify-center">
              <div className="flex items-center gap-[12px]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <circle
                    cx="12.4383"
                    cy="12.3788"
                    r="10.6079"
                    fill="#74549F"
                  />
                  <path
                    d="M16.3888 15.623L16.86 12.629H13.9122V10.6869C13.9122 9.86757 14.3233 9.06846 15.6436 9.06846H16.9846V6.51947C16.9846 6.51947 15.7681 6.31717 14.6056 6.31717C12.1768 6.31717 10.5908 7.75147 10.5908 10.347V12.629H7.89207V15.623H10.5908V22.8614C11.1326 22.9443 11.6869 22.9868 12.2515 22.9868C12.8162 22.9868 13.3704 22.9443 13.9122 22.8614V15.623H16.3888Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[#333333] font-[400] text-sm font-avenir leading-none">
                  Sign up with Facebook
                </p>
              </div>
            </div>
            <div className="w-full h-[48px] rounded-[30px] border-t border-l border-[#333333] border-[0.76px] bg-white flex items-center justify-center">
              <div className="flex items-center gap-[12px]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2739 9.41456C17.2739 8.76041 17.2197 8.28305 17.1025 7.78802H9.48033V10.7405H13.9544C13.8642 11.4743 13.3771 12.5793 12.2947 13.3218L12.2795 13.4206L14.6895 15.2503L14.8564 15.2666C16.3899 13.8787 17.2739 11.8367 17.2739 9.41456"
                    fill="#4285F4"
                  />
                  <path
                    d="M9.47933 17.1938C11.6712 17.1938 13.5114 16.4866 14.8554 15.2667L12.2936 13.3219C11.6081 13.7904 10.688 14.1175 9.47933 14.1175C7.33251 14.1175 5.51042 12.7296 4.86089 10.8113L4.76569 10.8193L2.25975 12.7199L2.22697 12.8092C3.56197 15.4081 6.30415 17.1938 9.47933 17.1938Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.86219 10.8114C4.69081 10.3164 4.59162 9.78595 4.59162 9.23791C4.59162 8.6898 4.69081 8.15942 4.85318 7.66439L4.84864 7.55896L2.31128 5.62784L2.22827 5.66654C1.67805 6.74502 1.36234 7.95612 1.36234 9.23791C1.36234 10.5197 1.67805 11.7307 2.22827 12.8092L4.86219 10.8114"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9.47937 4.3582C11.0038 4.3582 12.0321 5.00351 12.6184 5.54279L14.9096 3.35047C13.5025 2.06868 11.6713 1.28192 9.47937 1.28192C6.30417 1.28192 3.56197 3.06758 2.22697 5.6665L4.85189 7.66435C5.51044 5.74609 7.33253 4.3582 9.47937 4.3582"
                    fill="#EB4335"
                  />
                </svg>

                <p className="text-[#333333] font-[400] text-sm font-avenir leading-none">
                  Sign up with Google
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
