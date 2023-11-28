import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        width: min(90%, 140rem);
        margin: auto;
        
        ul {
            display: flex;
            gap: .4rem;
            align-items: center;
            margin: 2.4rem 0;
            
            li a {
                color: #222D39;
                font-size: 1.2rem;
                line-height: 1.6rem;
                text-decoration: none;
            }
        }

        h1 {
            color: #222D39;
            font-weight: 700;
            font-size: 3.2rem;
            line-height: 4.8rem;
            margin-bottom: 4rem;
        }
    }

    > main {
        display: grid;

        grid-template-columns: 40.4rem 98rem;
        grid-template-rows: 6rem 106rem;

        grid-template-areas: "filter-section order-section" "filter-section members-section";

        grid-gap: 1.6rem;

        .filter-section {
            grid-area: filter-section;
            border-radius: .4rem;
            border: 1px solid #E5E5E5;
            
            padding: 2.4rem 2.7rem 0;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            
            ul {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-height: 23rem;
                overflow-y: hidden;
                transition: max-height 1s;
                margin-bottom: 1rem;

            }

            ul.see-more {
                max-height: 100%;
            }

            a {
                color: #222D39;
                cursor: pointer;
                text-decoration: underline;
            }

            a:hover {
                filter: brightness(0.9);
            }
        }

        .order-section {
            grid-area: order-section;
            border: 1px solid #E5E5E5;
            border-radius: 4px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.6rem;

            div:first-child {
                font-size: 1.6rem;
                line-height: 2.8rem;
                font-weight: 400;
            }


            div:last-child {
                display: flex;
                align-self: center;
                gap: 1rem;

                span {
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                    font-size: 1.4rem;
                    line-height: 2.4rem;
                }
            }

            button {
                display: flex;
                align-items: center;
                border: none;
                background: none;
                cursor: pointer;
                font-size: 1.4rem;
                font-weight: 400;
                line-height: 2.4rem;

                svg {
                    margin-left: 2.4rem;
                    transition: all .5s;
                }
            }

            .sorted {
                transform: rotate(180deg);
            }
        }

        .members-section {
            grid-area: members-section;
            border: 1px solid #E5E5E5;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            
            .members-wrapper {
                display: flex;
                flex-wrap: wrap;
                gap: 1.4rem;

            }

            .MuiButtonBase-root {
                font-size: 1.4rem;
            }

            .Mui-selected::after{
                content: "";
                height: 4px;
                width: 24px;
                background-color: #9B9B9B !important;
                position: absolute;
                top: 24px;
                border-radius: 4px;
            }
            
            .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
                background-color: transparent;
                transition: all 1s;

            }

            .MuiPaginationItem-previousNext {
                background-color: #4A4A4A;
                color: #FFF;
                font-size: 3rem;
                height: 3rem;
                width: 3rem;
            }

            .MuiSvgIcon-root {
                font-size: large;
            }

        }
    }
`