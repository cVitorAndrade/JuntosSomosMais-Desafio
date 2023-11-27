import { Container } from "./style";
export function Member({ userImage, firstName, lastName, street, city, state, postcode, active, ...rest}) {
    return (
        <Container {...rest}>
            <img src={userImage} alt="imagem do perfil do usuário" />

            <h2 className="name">{firstName} {lastName}</h2>
            <p className="street">{street}</p>
            <p className="city">{city} <br />{state} - CEP: {postcode}</p>
        </Container>
    )
}