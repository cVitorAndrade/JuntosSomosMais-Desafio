import { Container } from "./style";
import logo from "./assets/juntossomosmais_logo.png"
import { IoIosSearch } from "react-icons/io";


export function Header() {
    return (
        <Container>
            <div className="content">
                <img src={logo} alt="Logo juntos somos mais" />

                <div className="wrapper">
                    <div className="search">
                        <label htmlFor="search-input">
                            <IoIosSearch size={20} />
                        </label>
                        <input type="text" name="" id="search-input" placeholder="Buscar aqui"/>
                    </div>

                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </Container>
    )
}