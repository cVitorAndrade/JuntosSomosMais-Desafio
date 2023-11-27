import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background-color: #F5F5F5;

    .content {
        width: min(90%, 140rem);
        margin: auto;
        padding: 2.8rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .wrapper {
            display: flex;
            gap: 1.6rem;
            max-width: 84.8rem;
            justify-content: space-between;
            align-items: center;

            .search {
                border-radius: 3.2rem;
                background-color: #FFF;
                display: flex;
                gap: 1rem;
                padding: 1.2rem 1.6rem;
                width: 46.4rem;
                border: 1px solid #B0B0B0;

                label {
                    color: #323232;
                }

                input {
                    border: none;
                    outline: none;
                    width: 100%;
                }

                input::placeholder {
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 2.8rem;
                    color: #9B9B9B;
                }
            }

            .bar {
                width: 17.6rem;
                background-color: #D8D8D8;
                height: 1.6rem;
                border-radius: 3.2rem;
            }
        }
    }
`;