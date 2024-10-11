import { NavLink } from "react-router-dom"


export const Header = ()=>{
    return(
        <>
        <header className="mainHeader">
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">WorldAtlas</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/country">Country</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
    )
}