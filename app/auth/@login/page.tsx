'use client'
import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>();
  const router = useRouter();
  const session = useSession();
  if (session.status === 'authenticated' && session.data.user?.name === 'fotorgasm'){
    setTimeout(() => {
      router.push('/dashboard');
    }, 100);
  } else if (session.status === 'authenticated' && session.data.user?.name !== 'fotorgasm'){
    setTimeout(() => {
      router.push('/');
    }, 100);
  }
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const username = userRef.current?.value;
    const password = passRef.current?.value;

    if (username && password){
      signIn("credentials", { username, password});
    }
  }
  return (
    <form autoComplete='off' onSubmit={(e) => handleSignIn(e)}>
      <div className={styles.formInput}>
        <div className={styles.iconContainer} style={{borderRight:'2px solid var(--on-separate)'}}>
          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path className="st0" d="M256,265.308c73.252,0,132.644-59.391,132.644-132.654C388.644,59.412,329.252,0,256,0 c-73.262,0-132.643,59.412-132.643,132.654C123.357,205.917,182.738,265.308,256,265.308z"></path> <path className="st0" d="M425.874,393.104c-5.922-35.474-36-84.509-57.552-107.465c-5.829-6.212-15.948-3.628-19.504-1.427 c-27.04,16.672-58.782,26.399-92.819,26.399c-34.036,0-65.778-9.727-92.818-26.399c-3.555-2.201-13.675-4.785-19.505,1.427 c-21.55,22.956-51.628,71.991-57.551,107.465C71.573,480.444,164.877,512,256,512C347.123,512,440.427,480.444,425.874,393.104z"></path> </g> </g></svg>
        </div>
        <div className={styles.inputContainer}>
          <h4>Username</h4>
          <input autoFocus required ref={userRef} type='text' id='username' name='username' maxLength={30}></input>
        </div>
        <div className={styles.checkerContainer}>
          {
            error === true ? 
            <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" strokeWidth="0" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="cross-a" d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L9.70710678,8.29289322 C10.0976311,8.68341751 10.0976311,9.31658249 9.70710678,9.70710678 C9.31658249,10.0976311 8.68341751,10.0976311 8.29289322,9.70710678 L0.292893219,1.70710678 Z"></path> <path id="cross-c" d="M3.58578644,5 L0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L5,3.58578644 L8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 C10.0976311,0.683417511 10.0976311,1.31658249 9.70710678,1.70710678 L6.41421356,5 L9.70710678,8.29289322 C10.0976311,8.68341751 10.0976311,9.31658249 9.70710678,9.70710678 C9.31658249,10.0976311 8.68341751,10.0976311 8.29289322,9.70710678 L5,6.41421356 L1.70710678,9.70710678 C1.31658249,10.0976311 0.683417511,10.0976311 0.292893219,9.70710678 C-0.0976310729,9.31658249 -0.0976310729,8.68341751 0.292893219,8.29289322 L3.58578644,5 Z"></path> </defs> <g fill="none" fillRule="evenodd"> <g transform="translate(8 6)"> <mask id="cross-b" fill="#ffffff"> <use xlinkHref="#cross-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#cross-a"></use> <g fill="#4361ee" mask="url(#cross-b)"> <rect width="24" height="24" transform="translate(-8 -6)"></rect> </g> </g> <g transform="rotate(-90 12 5)"> <mask id="cross-d" fill="#ffffff"> <use xlinkHref="#cross-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#cross-c"></use> <g fill="#f72585" mask="url(#cross-d)"> <rect width="24" height="24" transform="translate(-7 -7)"></rect> </g> </g> </g> </g></svg> : error === false ?
            <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="check-a" d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"></path> <path id="check-c" d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)"> <g transform="translate(1 1)"> <mask id="check-b" fill="#ffffff"> <use xlinkHref="#check-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#check-a"></use> <g fill="#4361ee" mask="url(#check-b)"> <rect width="24" height="24" transform="translate(-7 -5)"></rect> </g> </g> <mask id="check-d" fill="#ffffff"> <use xlinkHref="#check-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#check-c"></use> <g fill="#f72585" mask="url(#check-d)"> <rect width="24" height="24" transform="translate(-6 -4)"></rect> </g> </g> </g></svg> : ' '
          }
        </div>
      </div>
      <div className={styles.formInput}>
        <div className={`${styles.iconContainer} ${styles.password}`} style={{borderRight:'2px solid var(--on-separate)'}}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 2V22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M11.0941 12H11.1031" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="0.4" d="M7.09412 12H7.1031" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
        <div className={styles.inputContainer}>
          <h4>Password</h4>
          <input required ref={passRef} type='password' id='password' name='password' maxLength={30}></input>
        </div>
        <div className={styles.checkerContainer}>
          {
            error === true ? 
            <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" strokeWidth="0" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="cross-a" d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L9.70710678,8.29289322 C10.0976311,8.68341751 10.0976311,9.31658249 9.70710678,9.70710678 C9.31658249,10.0976311 8.68341751,10.0976311 8.29289322,9.70710678 L0.292893219,1.70710678 Z"></path> <path id="cross-c" d="M3.58578644,5 L0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L5,3.58578644 L8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 C10.0976311,0.683417511 10.0976311,1.31658249 9.70710678,1.70710678 L6.41421356,5 L9.70710678,8.29289322 C10.0976311,8.68341751 10.0976311,9.31658249 9.70710678,9.70710678 C9.31658249,10.0976311 8.68341751,10.0976311 8.29289322,9.70710678 L5,6.41421356 L1.70710678,9.70710678 C1.31658249,10.0976311 0.683417511,10.0976311 0.292893219,9.70710678 C-0.0976310729,9.31658249 -0.0976310729,8.68341751 0.292893219,8.29289322 L3.58578644,5 Z"></path> </defs> <g fill="none" fillRule="evenodd"> <g transform="translate(8 6)"> <mask id="cross-b" fill="#ffffff"> <use xlinkHref="#cross-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#cross-a"></use> <g fill="#4361ee" mask="url(#cross-b)"> <rect width="24" height="24" transform="translate(-8 -6)"></rect> </g> </g> <g transform="rotate(-90 12 5)"> <mask id="cross-d" fill="#ffffff"> <use xlinkHref="#cross-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#cross-c"></use> <g fill="#f72585" mask="url(#cross-d)"> <rect width="24" height="24" transform="translate(-7 -7)"></rect> </g> </g> </g> </g></svg> : error === false ?
            <svg height='25px' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="check-a" d="M4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L1.90917969,5.46118164 C1.5186554,5.85170593 0.885490417,5.85170593 0.494966125,5.46118164 C0.104441833,5.07065735 0.104441833,4.43749237 0.494966125,4.04696808 L4.29289322,0.292893219 Z"></path> <path id="check-c" d="M10.7071068,13.2928932 C11.0976311,13.6834175 11.0976311,14.3165825 10.7071068,14.7071068 C10.3165825,15.0976311 9.68341751,15.0976311 9.29289322,14.7071068 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L2.41421356,5 L10.7071068,13.2928932 Z"></path> </defs> <g fill="none" fillRule="evenodd" transform="rotate(-90 11 7)"> <g transform="translate(1 1)"> <mask id="check-b" fill="#ffffff"> <use xlinkHref="#check-a"></use> </mask> <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#check-a"></use> <g fill="#4361ee" mask="url(#check-b)"> <rect width="24" height="24" transform="translate(-7 -5)"></rect> </g> </g> <mask id="check-d" fill="#ffffff"> <use xlinkHref="#check-c"></use> </mask> <use fill="#000000" fillRule="nonzero" xlinkHref="#check-c"></use> <g fill="#f72585" mask="url(#check-d)"> <rect width="24" height="24" transform="translate(-6 -4)"></rect> </g> </g> </g></svg> : ' '
          }
        </div>
      </div>
      <button className={styles.button} type='submit' >Sign In</button>
    </form>
  )
}

export default Login