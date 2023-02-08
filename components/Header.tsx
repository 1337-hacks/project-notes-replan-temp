import Link from 'next/link'

export default function Header() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Project:NOTES</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" href="/"><i className="bi bi-house"></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#"><i className="bi bi-journals"></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#"><i className="bi bi-gear"></i></Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}