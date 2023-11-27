import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        font-size: 52.5%;
    }

    body {
        font-size: 1.6rem;
    }

    ul {
        list-style: none;
    }
`