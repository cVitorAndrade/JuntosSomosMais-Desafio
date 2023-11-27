import { Container } from "./style";
import logo from "./assets/Logo.png";
import facebook from "./assets/Facebook.png";
import linkedin from "./assets/LinkedIn.png";
import instagram from "./assets/Instagram.png";

export function Footer() {
    return(
        <Container>
            <img src={logo} alt="logo juntos somos mais" />
            <h4>Juntos Somos Mais Fidelização S.A.</h4>
            <div className="social-medias">
                <p>Siga-nos nas redes sociais:</p>

                <ul>
                    <li>
                        <a href="https://www.facebook.com/juntossomosmais/" target="_blank">
                            <img src={facebook} alt="" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.linkedin.com/company/juntos-somos-mais/" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/juntossomosmais/" target="_blank">
                            <img src={instagram} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    )
}