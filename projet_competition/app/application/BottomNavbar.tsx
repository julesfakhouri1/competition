import React from "react";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[80px] bg-[#EAE2F3] flex justify-between items-center px-4 rounded-t-[30px]">
      {/* Home Icon */}
      <div className="flex flex-col items-center">
        <svg
          width="18"
          height="20"
          viewBox="0 0 20 22" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1"
        >
          <path
            d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 21V11H13V21"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] font-darker-grotesque font-[600]">
          Accueil
        </span>
      </div>

      {/* Users Icon */}
      <div className="flex flex-col items-center">
        <svg
          width="20"
          height="18"
          viewBox="0 0 23 20" // Adjusted the viewBox to ensure no clipping
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1"
        >
          <path
            d="M20.3397 2.49592C19.829 1.98492 19.2225 1.57957 18.5551 1.303C17.8876 1.02644 17.1722 0.884094 16.4497 0.884094C15.7272 0.884094 15.0118 1.02644 14.3444 1.303C13.6769 1.57957 13.0705 1.98492 12.5597 2.49592L11.4997 3.55592L10.4397 2.49592C9.40803 1.46423 8.00876 0.884629 6.54972 0.884629C5.09069 0.884629 3.69141 1.46423 2.65972 2.49592C1.62803 3.52761 1.04843 4.92689 1.04843 6.38592C1.04843 7.84495 1.62803 9.24423 2.65972 10.2759L3.71972 11.3359L11.4997 19.1159L19.2797 11.3359L20.3397 10.2759C20.8507 9.76516 21.2561 9.15873 21.5326 8.49127C21.8092 7.82382 21.9515 7.10841 21.9515 6.38592C21.9515 5.66343 21.8092 4.94802 21.5326 4.28056C21.2561 3.61311 20.8507 3.00668 20.3397 2.49592Z"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] font-darker-grotesque font-[600]">
          Mise en relation
        </span>
      </div>

      {/* Message Icon */}
      <div className="flex flex-col items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20" // Adjusted the viewBox to ensure no clipping
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1"
        >
          <path
            d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] font-darker-grotesque font-[600]">
          Messagerie
        </span>
      </div>

      {/* Calendar Icon */}
      <div className="flex flex-col items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 22 22" // Adjusted the viewBox to ensure no clipping
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1"
        >
          <path
            d="M11.5 21C17.0228 21 21.5 16.5228 21.5 11C21.5 5.47715 17.0228 1 11.5 1C5.97715 1 1.5 5.47715 1.5 11C1.5 16.5228 5.97715 21 11.5 21Z"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.06 1.75C12.43 7.78 14.08 11.17 16.09 19.47M18.63 4.09C14.91 8.44 9.69 9.75 1.75 9.94M21.25 11.84C17.75 10.91 14.62 11.02 12.31 11.84C9.73 12.76 7.3 14.7 4.87 18.16"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] font-darker-grotesque font-[600]">
          Activités
        </span>
      </div>

      {/* User Icon */}
      <div className="flex flex-col items-center">
        <svg
          width="18"
          height="20"
          viewBox="0 0 20 22" // Adjusted the viewBox to ensure no clipping
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1"
        >
          <path
            d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
            stroke="#4C3768"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] font-darker-grotesque font-[600]">
          Profil
        </span>
      </div>
    </nav>
  );
};

export default BottomNavbar;
