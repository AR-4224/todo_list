export default function Ring() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-[50px] w-[50px]"
        fill="var(--color-Groove)"
        viewBox="0 0 600 600"
        stroke="var(--color-Groove)"
        strokeWidth="5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M256,0
            C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z 

            M256,486.4
            C128.751,486.4,25.6,383.249,25.6,256S128.751,25.6,256,25.6S486.4,128.751,486.4,256S383.249,486.4,256,486.4z"
        />
      </svg>
    );
  }