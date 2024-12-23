type IconProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1835 11.8359L12.5296 2.18907C12.4601 2.11942 12.3776 2.06417 12.2867 2.02647C12.1958 1.98877 12.0984 1.96936 12 1.96936C11.9016 1.96936 11.8041 1.98877 11.7132 2.02647C11.6223 2.06417 11.5398 2.11942 11.4703 2.18907L1.81636 11.8359C1.53511 12.1172 1.37573 12.4992 1.37573 12.8977C1.37573 13.725 2.04839 14.3977 2.87573 14.3977H3.89292V21.2813C3.89292 21.6961 4.22808 22.0313 4.64292 22.0313H10.5V16.7813H13.125V22.0313H19.357C19.7718 22.0313 20.107 21.6961 20.107 21.2813V14.3977H21.1242C21.5226 14.3977 21.9046 14.2406 22.1859 13.957C22.7695 13.3711 22.7695 12.4219 22.1835 11.8359Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TasksIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17L5 19L9 15"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 7L5 9L9 5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 6H21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 12H21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 18H21"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const AddIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33398 8.5H12.6673"
        stroke="white"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 3.83325V13.1666"
        stroke="white"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TrashIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 4.49998H13M11.6667 4.49998V13.8333C11.6667 14.5 11 15.1666 10.3333 15.1666H3.66667C3 15.1666 2.33333 14.5 2.33333 13.8333V4.49998M4.33333 4.49998V3.16665C4.33333 2.49998 5 1.83331 5.66667 1.83331H8.33333C9 1.83331 9.66667 2.49998 9.66667 3.16665V4.49998M5.66667 7.83331V11.8333M8.33333 7.83331V11.8333"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CloudSunIcon = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_51_122)">
        <path
          d="M10 2.44672V4.11338"
          stroke="#9A9C9F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.1084 4.88837L5.2834 6.06337"
          stroke="#9A9C9F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6667 10.78H18.3334"
          stroke="#9A9C9F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.8916 4.88837L14.7166 6.06337"
          stroke="#9A9C9F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.2891 11.3217C13.3916 10.7005 13.3161 10.0629 13.0713 9.48275C12.8265 8.90263 12.4224 8.40372 11.9057 8.04377C11.3891 7.68383 10.7811 7.47758 10.1521 7.4489C9.52308 7.42021 8.89881 7.57028 8.35156 7.88171"
          stroke="#9A9C9F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.8333 19.1134H5.8333C5.04494 19.1132 4.2728 18.8894 3.60657 18.4679C2.94033 18.0464 2.40734 17.4446 2.06949 16.7323C1.73164 16.02 1.6028 15.2265 1.69793 14.4439C1.79307 13.6613 2.10827 12.9217 2.60693 12.3111C3.1056 11.7005 3.76726 11.2439 4.51507 10.9943C5.26288 10.7448 6.06615 10.7125 6.83158 10.9012C7.59702 11.0899 8.29321 11.4919 8.8393 12.0605C9.38539 12.6291 9.75896 13.3409 9.91663 14.1134H10.8333C11.4963 14.1134 12.1322 14.3768 12.6011 14.8456C13.0699 15.3144 13.3333 15.9503 13.3333 16.6134C13.3333 17.2764 13.0699 17.9123 12.6011 18.3811C12.1322 18.85 11.4963 19.1134 10.8333 19.1134Z"
          stroke="#9A9C9F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_122">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.780029)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MoonIcon = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.56C9.00544 3.55456 8.4467 4.90347 8.4467 6.31C8.4467 7.71652 9.00544 9.06544 10 10.06C10.9946 11.0546 12.3435 11.6133 13.75 11.6133C15.1565 11.6133 16.5054 11.0546 17.5 10.06C17.5 11.5434 17.0601 12.9934 16.236 14.2268C15.4119 15.4601 14.2406 16.4214 12.8701 16.9891C11.4997 17.5568 9.99168 17.7053 8.53683 17.4159C7.08197 17.1265 5.7456 16.4122 4.6967 15.3633C3.64781 14.3144 2.9335 12.978 2.64411 11.5232C2.35472 10.0683 2.50325 8.56032 3.07091 7.18987C3.63856 5.81943 4.59986 4.64809 5.83323 3.82398C7.0666 2.99987 8.51664 2.56 10 2.56Z"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SunIcon = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3333 12.6667C12.1743 12.6667 13.6667 11.1743 13.6667 9.33333C13.6667 7.49238 12.1743 6 10.3333 6C8.49238 6 7 7.49238 7 9.33333C7 11.1743 8.49238 12.6667 10.3333 12.6667Z"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 2.16666V3.83332"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 17.1667V18.8333"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.1084 4.60834L5.2834 5.78334"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.7166 15.2167L15.8916 16.3917"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66675 10.5H3.33341"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6667 10.5H18.3334"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.2834 15.2167L4.1084 16.3917"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8916 4.60834L14.7166 5.78334"
        stroke="#9A9C9F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg
      width="20"
      height="25"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5809 3.84912L5.29513 10.1348L2.43799 7.27769"
        stroke="white"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LoaderIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="20"
      height="25"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Passa as props como className, etc.
    >
      <g clipPath="url(#clip0_176_97)">
        <path
          d="M11.9215 7.33537C11.9214 8.42142 11.5775 9.47958 10.9391 10.3582C10.3007 11.2368 9.40058 11.8907 8.36767 12.2263C7.33477 12.5619 6.22214 12.5619 5.18925 12.2262C4.15637 11.8906 3.25624 11.2366 2.61789 10.358C1.97954 9.47931 1.63573 8.42113 1.63574 7.33508C1.63575 6.24903 1.97957 5.19086 2.61794 4.31223C3.2563 3.43359 4.15643 2.7796 5.18932 2.44399C6.22222 2.10837 7.33484 2.10835 8.36774 2.44394"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_176_97">
          <rect
            width="13.7143"
            height="13.7143"
            fill="currentColor"
            transform="translate(0.142822 0.422913)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DetailsIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.6667 11.0578V15.7245C14.6667 16.137 14.5028 16.5327 14.2111 16.8244C13.9193 17.1161 13.5237 17.28 13.1111 17.28H4.55556C4.143 17.28 3.74733 17.1161 3.45561 16.8244C3.16389 16.5327 3 16.137 3 15.7245V7.1689C3 6.75634 3.16389 6.36068 3.45561 6.06895C3.74733 5.77723 4.143 5.61334 4.55556 5.61334H9.22222"
        stroke="#9A9C9F"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.333 3.28003H16.9997V7.9467"
        stroke="#9A9C9F"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.44434 11.8356L16.9999 3.28003"
        stroke="#9A9C9F"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ChevroRightIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="7"
      height="9"
      viewBox="0 0 4 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.5 6.5L3.5 3.5L0.5 0.5"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.99984 12.8333L1.1665 6.99999M1.1665 6.99999L6.99984 1.16666M1.1665 6.99999H12.8332"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
