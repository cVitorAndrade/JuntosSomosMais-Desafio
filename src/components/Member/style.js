import styled from "styled-components";

export const Container = styled.div`
    width: 31.6rem;
    border-radius: .4rem;
    border: 1px solid #E5E5E5;
    text-align: center;
    padding: 4rem 0;
    height: 31rem;
    
    .active {
        display: none;
    }

    > img {
        height: 8rem;
        width: 8rem;
        border-radius: 50%;
    }

    .name {
        margin: 2.4rem 0 1.6rem;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.6rem;
        color: #222D39;
    }

    .street {
        margin-bottom: 1.2rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
        color: #222D39;
    }

    .city {
        font-weight: 400;
        font-size: 1.4rem;
        color: #222D39;
        line-height: 1.6rem;
    }

`;