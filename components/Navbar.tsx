import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from 'react';

export default function Navbar({ children }: { children: React.ReactNode }) {
    
    const { user, logOut } = useAuth();
    const router = useRouter();

    const [userState, setUserState] = useState(false);
    
    useEffect(()=> {
        if(!user.uid) {
            setUserState(false);
        }
        else {
            setUserState(true);
        }
    }, [user])

    const menuItems = [
        {
            id: 1,
            name: "About",
            link: "/about",
        },
        {
            id: 2,
            name: "Blog",
            link: "/blog",
        },
        {
            id: 3,
            name: "Contact",
            link: "/contact",
        },
    ];

    const loginItems = [
        {
            id: 1,
            name: "Login",
            link: "/login",
        },
        {
            id: 2,
            name: "Sign up",
            link: "/signup",
        }
    ];
    
    const handleLogout = async () => {
        try {
            await logOut();
            router.push("/");
        } catch (error: any) {
            console.log(error.message);
        }
    };

    // const userItems = [
    //     {
    //         id: 1,
    //         name: "Dashboard",
    //         link: "/dashboard",
    //         action: null,
    //     },
    //     {
    //         id: 2,
    //         name: "Logout",
    //         link: "/",
    //         action: handleLogout,
    //     }
    // ];

    

    return(
        <>
        <header>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Project:NOTES</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <>
                                {menuItems.map((item) => (
                                    <li className="nav-item" key={item.id}>
                                        <Link className="nav-link" href={item?.link}>
                                            {item?.name}
                                        </Link>
                                    </li>
                                ))}
                            </>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <>
                                {!userState && loginItems.map((item) => (
                                    <li className="nav-item" key={item.id}>
                                        <Link className="nav-link" href={item?.link}>
                                            {item?.name}
                                        </Link>
                                    </li>
                                ))}
                                {userState && 
                                <Link className="nav-link" href="/dashboard">
                                    Dashboard
                                </Link>}
                                {userState && 
                                <Link className="nav-link" href="/" onClick={handleLogout}>
                                    Logout
                                </Link>}
                            </>
                        </ul>
                    </div>
                </div>
            </nav> 
        </header>
        
        {children}
        </>
        
    )
}