import "./topbar.scss"
import { Mail } from "@material-ui/icons"
import { Person } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'topbar ' + (menuOpen && "active")} >
            <div className="wrapper ">
                <div className="left">
                    <a href="#intro" className="logo">Anika.</a>
                    <div className="itemContainer">
                        <Person className="icon">

                        </Person>
                        <span>
                            +880 13050 985435
                        </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon">

                        </Mail>
                        <span>
                            anikatasnim1@iut-dhaka.edu
                        </span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}
