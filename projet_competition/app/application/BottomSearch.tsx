import React from "react";

const BottomSearch = () => {
  return (
    <>
      <div className="pt-[39px] flex pl-[28px] w-full">
        <div className="absolute pt-[3px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8H1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 15L1 8L8 1"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-center font-darker-grotesque font-[600] text-[17px] leading-[22px] w-screen">
          Trouve ton petit enfant !
        </h1>
      </div>
      <nav className="fixed bottom-0 left-0 right-0 h-1/2 bg-[#F3EFF6] flex flex-col  rounded-t-[30px]">
        <div className="mt-[38px] w-full h-[5px] grid place-items-center">
          <div className="w-12 h-[5px] rounded-3xl bg-[#E5E6EB]"></div>
        </div>
        <div className="mt-[24px] flex flex-col gap-[12px] font-[400] text-[16px] text-[#22172A] px-[23.5px]">
          <h1 className="font-hellixregular ">About</h1>
          <p className="font-hellixmedium">
            A good listener. I love having a good talk to know each other’s side
            😍.
          </p>
        </div>
        <div className="mt-[24px] px-[43.5px]">
          <h1 className="font-hellixregular font-[400] text-[16px] text-[#22172A]">
            Interest
          </h1>
          <div className="mt-[12px] flex gap-[12px] flex-wrap">
            <div className="w-fit px-[12px] py-[8px] h-[40px] rounded-[32px] bg-white border border-[#4B164C33] flex items-center justify-center gap-2.5">
              🍃 Nature
            </div>
            <div className="w-fit px-[12px] py-[8px] h-[40px] rounded-[32px] bg-white border border-[#4B164C33] flex items-center justify-center gap-2.5">
              🏝 Travel
            </div>
            <div className="w-fit px-[12px] py-[8px] h-[40px] rounded-[32px] bg-white border border-[#4B164C33] flex items-center justify-center gap-2.5">
              ✍🏻 Writing
            </div>
            <div className="w-fit px-[12px] py-[8px] h-[40px] rounded-[32px] bg-white border border-[#4B164C33] flex items-center justify-center gap-2.5">
              🙂 People
            </div>
            <div className="w-fit px-[12px] py-[8px] h-[40px] rounded-[32px] bg-white border border-[#4B164C33] flex items-center justify-center gap-2.5">
              💪 Gym & Fitness
            </div>
          </div>
        </div>
        <div className="w-full grid place-items-center">
          <div className="mt-[38px] h-[92px] w-[184px] rounded-[60px] bg-[#e7def1] flex items-center justify-center gap-[24px]">
            <div className="translate-x-10">
              <svg
                width="148"
                height="133"
                viewBox="0 0 148 133"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_231)">
                  <rect
                    x="40"
                    y="32"
                    width="68"
                    height="68"
                    rx="34"
                    fill="#EAE2F3"
                  />
                  <path
                    d="M84 56L64 76"
                    stroke="#4C3768"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64 56L84 76"
                    stroke="#4C3768"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_231"
                    x="0"
                    y="0"
                    width="148"
                    height="148"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.294118 0 0 0 0 0.0862745 0 0 0 0 0.298039 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_231"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_231"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="-translate-x-10">
              <svg
                width="148"
                height="133"
                viewBox="0 0 148 133"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_236)">
                  <rect
                    x="40"
                    y="32"
                    width="68"
                    height="68"
                    rx="34"
                    fill="#4C3768"
                  />
                  <path
                    d="M83.697 57.7681C83.1367 57.2076 82.4715 56.7629 81.7393 56.4595C81.0071 56.1562 80.2223 56 79.4297 56C78.6372 56 77.8524 56.1562 77.1202 56.4595C76.388 56.7629 75.7228 57.2076 75.1625 57.7681L73.9997 58.9309L72.8369 57.7681C71.7051 56.6364 70.1701 56.0006 68.5696 56.0006C66.9691 56.0006 65.4341 56.6364 64.3023 57.7681C63.1706 58.8999 62.5348 60.4349 62.5348 62.0354C62.5348 63.6359 63.1706 65.1709 64.3023 66.3027L65.4651 67.4655L73.9997 76L82.5342 67.4655L83.697 66.3027C84.2576 65.7424 84.7022 65.0771 85.0056 64.3449C85.309 63.6128 85.4651 62.828 85.4651 62.0354C85.4651 61.2429 85.309 60.4581 85.0056 59.7259C84.7022 58.9937 84.2576 58.3284 83.697 57.7681Z"
                    fill="#EAE2F3"
                    stroke="#EAE2F3"
                    strokeWidth="1.64547"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_236"
                    x="0"
                    y="0"
                    width="148"
                    height="148"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.294118 0 0 0 0 0.0862745 0 0 0 0 0.298039 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_236"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_236"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomSearch;
