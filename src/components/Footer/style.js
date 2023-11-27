import styled from "styled-components";
export const Container = styled.footer`
    width: 100%;
    background-color: #3A3A3A;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    padding: 3.2rem 0 5.6rem;

    > h4 {
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.8rem;
        color: #FFF;
        margin-top: 2.4rem;
    }

    .social-medias {
        p {
            margin: 2.4rem 0 2rem;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: #FFF;
        }

        ul {
            display: flex;
            gap: 1.6rem;
        }
    }
    
    
`;