import { Container } from "./style";

export function InputFilter({ stateName, ...rest}) {
    const state = stateName.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return(
        <Container {...rest}>
            <input type="checkbox" value={stateName} name={stateName} id={stateName} />
            <label htmlFor={stateName} >{state}</label>
        </Container>
    )
}