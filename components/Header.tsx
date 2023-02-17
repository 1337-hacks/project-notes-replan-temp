import Link from 'next/link'

export default function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Project:NOTES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" href="/">{/*<i className="bi bi-house"></i>*/}About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">{/*<i className="bi bi-journals"></i>*/}Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">{/*<i className="bi bi-gear"></i>*/}Contact</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link className="nav-link" href="#">{/*<i className="bi bi-gear"></i>*/}Login</Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}