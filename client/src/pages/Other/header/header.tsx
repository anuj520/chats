import { NavLink } from "react-router-dom";
import '@/header.css';

export const Headers=()=>{
    return (
<header>
    <div className="container">
        <div className="grid navbar-grid ">
            <div className="Logo">
                <NavLink to="/">
                <span> <h1>PROBE STEM</h1> </span>
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"><span>About us</span></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                        Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/forums">Forums</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/research">Research</NavLink>
                    </li>
                    <li>
                        <NavLink to="/webinars">Webinars</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dasbord"}>Dasbord</NavLink>
                    </li>
                </ul>
                <div className="button">
                    <NavLink to="/sign-in">
                      <button className="join">
                        <span className="line2">Join</span>
                        <span className="line2"> Now</span> 
                       </button> 
                    </NavLink>
                    
                </div>
                
            </nav>
        </div>
    </div>
</header>
    )

};

