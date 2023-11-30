import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./style";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Member } from "../../components/Member";
import { data, states } from "../../utils/data";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { InputFilter } from "../../components/InputFilter";

export function Details() {
    const [allViews, setAllViews] = useState(data.map( member => {
        return(
            <Member 
                userImage={member.picture.large}
                firstName={member.name.first}
                lastName={member.name.last}
                street={member.location.street}
                city={member.location.city}
                state={member.location.state}
                postcode={member.location.postcode}
                key={member.email}
            />
                )
            }));

    
    const [atualPage, setAtualPage] = useState(1)

    const memberPerView = 9;
    const maxViews = parseInt(allViews.length % memberPerView == 0 ? allViews.length / memberPerView : allViews.length / memberPerView + 1);

    const [startNumberView, setStartNumberView] = useState(1);
    const [endNumberView, setEndNumberView] = useState(memberPerView);
            
    let count = 0;
    const [views, setViews] = useState(allViews.filter( member => {
        count++;
        const inTheRange = count <= memberPerView;
        if ( inTheRange ) {
            return (member)
        }
    }));

    function chooseViews(event, value) {
        let count = 0;
        let views = [];

        allViews.map( view => {
            count++;
            const inTheRange = count > (value - 1) * memberPerView && count <= (value) * memberPerView

            if ( inTheRange ) {
                views.push(view)
            }
        })

        setAtualPage(value)
        
        const endNumber = value == maxViews ? allViews.length : value * memberPerView
        const startNumber = value == 1 ? 1 : ((value - 1 ) * memberPerView) + 1
        
        setViews(views)
        setStartNumberView(startNumber)
        setEndNumberView(endNumber)
    }

    const [ascendingOrder, setAscendingOrder] = useState(false);
    function sortMembers(event) {
        let sortedAllViews = [...allViews]
        let icon;

        if ( event.target.tagName == "BUTTON" ) {
            icon = event.target.querySelector("svg");
        } else {
            icon = event.target
        }
        
        icon.classList.toggle("sorted")
        if ( !ascendingOrder ) {
            sortedAllViews.sort((a, b) => {
                const firstNameA = a.props.firstName
                const firstNameB = b.props.firstName;
              
                return firstNameB.localeCompare(firstNameA);
            })

        } else {
            sortedAllViews.sort((a, b) => {
                const firstNameA = a.props.firstName
                const firstNameB = b.props.firstName;
              
                return firstNameA.localeCompare(firstNameB);
            })   
        }

        setAscendingOrder(!ascendingOrder)
        setAllViews(sortedAllViews)
}

    const [filters, setFilters] = useState([])

    useEffect(() => {
        let count = 0;
        let views = [];
        allViews.filter( view => {
            count++;
            const inTheRange = count > (1 - 1) * memberPerView && count <= (1) * memberPerView

            if ( inTheRange ) {
                views.push(view)
            }
        })
        setViews(views)
        setAtualPage(1)
        setStartNumberView(1)
        setEndNumberView(9)
    }, [allViews])

    const filterViewsByState = (event) => {

        const allMembers = data.map( member => {
            return(
                <Member 
                    userImage={member.picture.large}
                    firstName={member.name.first}
                    lastName={member.name.last}
                    street={member.location.street}
                    city={member.location.city}
                    state={member.location.state}
                    postcode={member.location.postcode}
                    key={member.email}
                />
                    )
                });

        const isChecked = event.target.checked
        const value = event.target.value

        let tmpFilters = filters;

        if ( isChecked ) {
            tmpFilters.push(value)
        } else {
            tmpFilters = filters.filter( item => item != value)
        }

        setFilters(tmpFilters)

        const filteredViews = allMembers.filter( view => {
            return tmpFilters.includes(view.props.state)
        }).sort((a, b) => {

            if ( ascendingOrder ) {
                const firstNameA = a.props.firstName;
                const firstNameB = b.props.firstName;
                return firstNameB.localeCompare(firstNameA);
            } else {
                const firstNameA = a.props.firstName;
                const firstNameB = b.props.firstName;
                return firstNameA.localeCompare(firstNameB);
            }
        })

        setAllViews( (tmpFilters.length != 0) ? filteredViews : allMembers)
    }

    const [seeMore, setSeeMore] = useState(false);
    const showMore = (event) => {
        event.preventDefault()
        setSeeMore(!seeMore)
    }

    return(
        <Container>
            <Header />
            
            <div className="title">
                <ul className="breadcrumb">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>&gt;</li>
                
                    <li>
                        <a href="#">Usuários</a>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <a href="#">Detalhes</a>
                    </li>
                </ul>

                <h1>Lista de membros</h1>
            </div>

            <main>
                <div className="filter-section">
                    <h2>Por Estado</h2>

                    <div className="wrapper-filters">
                        <ul className={seeMore ? "see-more" : ""} >
                            {
                                states.map( state => {
                                    return (
                                        <InputFilter stateName={state} onChange={filterViewsByState} key={state}/>
                                    )
                                })
                            }
                        </ul>
                        <a onClick={showMore}>{seeMore ? "Ver Menos" : "Ver Mais"}</a>
                    </div>

                </div>

                <div className="order-section">
                    <div>
                        <p>Exibindo do {startNumberView} ao {endNumberView}</p>
                    </div>

                    <div>
                        <span>Ordenar por:</span>
                        <button onClick={sortMembers}>Nome <MdKeyboardArrowDown className="sorted" size={20}/> </button>
                    </div>
                </div>

                <div className="members-section">
                    <div className="members-wrapper">
                        {
                            views
                        }
                    </div>

                <Stack spacing={2}>
                    <Pagination page={atualPage} count={maxViews} onChange={chooseViews}/>
                </Stack>
                </div>
                
            </main>

            <Footer />
        </Container>
    )
}