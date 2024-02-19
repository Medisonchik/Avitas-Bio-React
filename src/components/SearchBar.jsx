import { Container, Row, InputGroup, FormControl, Button } from "react-bootstrap"

function SearchBar(){
    return(
        <Container className="row--search-container">
            <Row className="d-flex justify-content-flex-end">
                <InputGroup className="searchBar">
                    <FormControl type="search" placeholder="Search" className="searchField" />
                </InputGroup>
            </Row>
        </Container>
    )
}

export default SearchBar;