'use client'
import Link from 'next/link';
import styles from './MenuContainer.module.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

// Generate type for menu icons
interface MenuIconsObj {
    name: string;
    title: string;
    icon: JSX.Element;
}

interface Props {
    postMenu: (data: string) => void;
}
const MenuContainer: React.FC<Props> = ({ postMenu }) => {
    const [click, setClick] = useState<string>('home');
    
    // Passing clicked post type to the postMenu props
    useEffect(() => {
        postMenu(click);
    }, [click]) 
    // Menu icons array
    const menuIcons: MenuIconsObj[] = [
        {
            name: 'home',
            title: 'Home',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22ZM8.39757 15.5532C8.64423 15.2204 9.11395 15.1506 9.44671 15.3973C10.1751 15.9371 11.0542 16.2498 12.0001 16.2498C12.946 16.2498 13.8251 15.9371 14.5535 15.3973C14.8863 15.1506 15.356 15.2204 15.6026 15.5532C15.8493 15.8859 15.7795 16.3557 15.4467 16.6023C14.4743 17.3231 13.2851 17.7498 12.0001 17.7498C10.7151 17.7498 9.5259 17.3231 8.55349 16.6023C8.22072 16.3557 8.15092 15.8859 8.39757 15.5532Z" style={{fill: `${click==='home'?'var(--on-background)':'var(--on-background-matte)'}`}}></path> </g></svg>
                
            )
        },
        {
            name: 'blog',
            title: 'Blogs',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20.8293 10.7154L20.3116 12.6473C19.7074 14.9024 19.4052 16.0299 18.7203 16.7612C18.1795 17.3386 17.4796 17.7427 16.7092 17.9223C16.6129 17.9448 16.5152 17.9621 16.415 17.9744C15.4999 18.0873 14.3834 17.7881 12.3508 17.2435C10.0957 16.6392 8.96815 16.3371 8.23687 15.6522C7.65945 15.1114 7.25537 14.4115 7.07573 13.641C6.84821 12.6652 7.15033 11.5377 7.75458 9.28263L8.27222 7.35077C8.3591 7.02654 8.43979 6.7254 8.51621 6.44561C8.97128 4.77957 9.27709 3.86298 9.86351 3.23687C10.4043 2.65945 11.1042 2.25537 11.8747 2.07573C12.8504 1.84821 13.978 2.15033 16.2331 2.75458C18.4881 3.35883 19.6157 3.66095 20.347 4.34587C20.9244 4.88668 21.3285 5.58657 21.5081 6.35703C21.7356 7.3328 21.4335 8.46034 20.8293 10.7154ZM11.0524 9.80589C11.1596 9.40579 11.5709 9.16835 11.971 9.27556L16.8006 10.5697C17.2007 10.6769 17.4381 11.0881 17.3309 11.4882C17.2237 11.8883 16.8125 12.1257 16.4124 12.0185L11.5827 10.7244C11.1826 10.6172 10.9452 10.206 11.0524 9.80589ZM10.2756 12.7033C10.3828 12.3032 10.794 12.0658 11.1941 12.173L14.0919 12.9495C14.492 13.0567 14.7294 13.4679 14.6222 13.868C14.515 14.2681 14.1038 14.5056 13.7037 14.3984L10.8059 13.6219C10.4058 13.5147 10.1683 13.1034 10.2756 12.7033Z" fill={`${click==='blog'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path opacity="0.5" d="M16.4149 17.9745C16.2064 18.6128 15.8398 19.1903 15.347 19.6519C14.6157 20.3368 13.4881 20.6389 11.2331 21.2432C8.97798 21.8474 7.85044 22.1496 6.87466 21.922C6.10421 21.7424 5.40432 21.3383 4.86351 20.7609C4.17859 20.0296 3.87647 18.9021 3.27222 16.647L2.75458 14.7152C2.15033 12.4601 1.84821 11.3325 2.07573 10.3568C2.25537 9.5863 2.65945 8.88641 3.23687 8.3456C3.96815 7.66068 5.09569 7.35856 7.35077 6.75431C7.7774 6.64 8.16369 6.53649 8.51621 6.44534C8.51618 6.44545 8.51624 6.44524 8.51621 6.44534C8.43979 6.72513 8.3591 7.02657 8.27222 7.35081L7.75458 9.28266C7.15033 11.5377 6.84821 12.6653 7.07573 13.6411C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6393 12.3508 17.2435C14.3833 17.7881 15.4999 18.0873 16.4149 17.9745Z" fill={`${click==='blog'?'var(--on-background)':'var(--on-background-matte)'}`}></path> </g></svg>
            )
        },
        {
            name: 'video',
            title: 'Videos',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.25 2.0315C11.1701 2.01094 11.0863 2 11 2H8.66667C8.345 2 8.03979 2 7.75 2.00094L7.75002 2.00684V6.25032L11.25 6.25032L11.25 2.0315Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M11.25 7.75032L2.00195 7.75032L2.00003 7.75032L2 14C2 14.4517 2 14.8673 2.00398 15.2505L2.01927 15.2503H11.25V7.75032Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M11.25 16.7503L7.75002 16.7503L7.75002 19.9938L7.75 19.9991C8.03979 20 8.345 20 8.66667 20H11.25L11.25 16.7503Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M6.25002 2.02325C4.64034 2.07802 3.6617 2.26183 2.97631 2.87868C2.22628 3.55371 2.05245 4.54479 2.01216 6.25032L6.25002 6.25032V2.02325Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M6.25002 16.7503L6.25002 19.9768C4.64034 19.922 3.6617 19.7382 2.97631 19.1213C2.38678 18.5907 2.15323 17.8649 2.0607 16.7503L6.25002 16.7503Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <g opacity="0.5"> <path d="M12.75 7.00596L12.75 7.00032L12.75 6.99468V4H15.3333C15.655 4 15.9602 4 16.25 4.00094L16.25 4.00684V8.25032L12.75 8.25032V7.00596Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M12.75 16.0059L12.75 16.0003L12.75 15.9947L12.75 9.75032L21.9981 9.75032L22 9.75032L22 16C22 16.4517 22 16.8673 21.996 17.2505L21.9808 17.2503H12.75V16.0059Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M12.75 21.9685C12.8299 21.9891 12.9137 22 13 22H15.3333C15.655 22 15.9602 22 16.25 21.9991L16.25 21.9938L16.25 18.7503H12.75V21.9685Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M17.75 8.25032V4.02325C19.3597 4.07802 20.3383 4.26183 21.0237 4.87868C21.7737 5.55371 21.9476 6.54479 21.9878 8.25032L17.75 8.25032Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path d="M21.9393 18.7503H17.75V21.9768C19.3597 21.922 20.3383 21.7382 21.0237 21.1213C21.6132 20.5907 21.8468 19.8649 21.9393 18.7503Z" fill={`${click==='video'?'var(--on-background)':'var(--on-background-matte)'}`}></path> </g> </g></svg>
            )
        },
        {
            name: 'photo',
            title: 'Photos',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M11.1822 15.3618L6.89249 11.0721C6.03628 10.2159 4.66286 10.1702 3.75159 10.9675L2.751 11.8623C2.73407 11.8751 2.7002 11.9607 2.7002 12.2004C2.7002 17.3366 6.86395 21.5004 12.0002 21.5004C15.2197 21.5004 18.057 19.8645 19.7264 17.3786L19.609 17.2612L17.7765 15.599C16.7369 14.6634 15.1888 14.5702 14.0446 15.3744L13.7464 15.5839C12.9512 16.1428 11.8694 16.0491 11.1822 15.3618Z" fill={`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path opacity=".5" d="M15 11C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7C13.8954 7 13 7.89543 13 9C13 10.1046 13.8954 11 15 11Z" fill={`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM20.9794 9.76985C21.1886 10.5446 21.3002 11.3595 21.3002 12.2004C21.3002 17.3366 17.1364 21.5004 12.0002 21.5004C6.86395 21.5004 2.7002 17.3366 2.7002 12.2004C2.7002 11.3658 2.81014 10.5568 3.01634 9.78724C4.00808 5.74714 7.65403 2.75 12 2.75C16.3397 2.75 19.9814 5.73854 20.9794 9.76985Z" fill={`${click==='photo'?'var(--on-background)':'var(--on-background-matte)'}`}></path> </g></svg>
            )
        },
        {
            name: 'music',
            title: 'Music',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 13.25C6.37665 13.25 4.25 15.3766 4.25 18C4.25 20.6234 6.37665 22.75 9 22.75C11.6234 22.75 13.75 20.6234 13.75 18C13.75 15.3766 11.6234 13.25 9 13.25Z" fill={`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path fillRule="evenodd" clipRule="evenodd" d="M13 1.25C13.4142 1.25 13.75 1.58579 13.75 2C13.75 4.8995 16.1005 7.25 19 7.25C19.4142 7.25 19.75 7.58579 19.75 8C19.75 8.41421 19.4142 8.75 19 8.75C15.2721 8.75 12.25 5.72792 12.25 2C12.25 1.58579 12.5858 1.25 13 1.25Z" fill={`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`}></path> <path opacity="0.5" d="M12.25 14.5359V2C12.25 3.60747 12.8119 5.08371 13.75 6.243V18C13.75 16.6339 13.1733 15.4024 12.25 14.5359Z" fill={`${click==='music'?'var(--on-background)':'var(--on-background-matte)'}`}></path> </g></svg>
            )
        },
    ];
    
    const windowWidth = useWindowWidth();
    function useWindowWidth(){
        const [windowSize, setWindowSize] = useState<number>();
        useEffect(() => {
            // only execute all the code below in client side
            // Handler to call on window resize
            function handleWindowResize(){
                setWindowSize(window.innerWidth);
            }
            window.addEventListener('resize', handleWindowResize);
            // Call handler right away so state gets updated with initial window size
            handleWindowResize();
            return () => {
            window.removeEventListener('resize', handleWindowResize);
            };
        },[]);
        return windowSize
    }
    
  return (
    <div className={`${styles.menuContainer} ${styles.gridBlock}`}>
        <Link href='/' className={styles.brandName}>
            {
                windowWidth! > 1355 ?
                <Image priority={true} alt='logo-brand' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.logoBrand} src='/assets/icons/fotorgasm-brand-name-white.png'></Image> :
                <Image priority={true} alt='logo-brand' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.logoBrand} src='/assets/icons/fotorgasm-logo-no-ring.png'></Image>
            }
        </Link>
        <div className={styles.mainMenu}>
            <ul>
                {
                    menuIcons.map((icon: MenuIconsObj,ind: number) => {
                        return(
                            <li key={ind} onClick={() => setClick(icon.name)}>
                                <div className={styles.iconContainer}>
                                    {icon.icon}
                                </div>
                                {
                                    windowWidth! > 1355 &&
                                    <span style={{color:`${click===icon.name?'var(--on-background)':'var(--on-background-matte)'}`}}>{icon.title}</span>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className={styles.logOut} onClick={() => signOut()}>
            <div className={styles.iconContainer}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.6" d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z" fill="#ffffff"></path> <path opacity="0.4" d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 11.4697C4.17678 11.7626 4.17678 12.2374 4.46967 12.5303L6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303C7.82322 14.2374 7.82322 13.7626 7.53033 13.4697L6.81066 12.75L14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25L6.81066 11.25L7.53033 10.5303C7.82322 10.2374 7.82322 9.76256 7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967L4.46967 11.4697Z" fill="#ffffff"></path> </g></svg>
            </div>
            {
                windowWidth! > 1355 &&
                <span>Log Out</span>
            }
        </div>
    </div>
  )
}

export default MenuContainer