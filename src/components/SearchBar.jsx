import { Container, Row, InputGroup, FormControl, Button } from "react-bootstrap"

function SearchBar(){
    return(
        <Row className="d-flex justify-content-flex-end">
            <InputGroup className="searchBar">
                <FormControl type="search" placeholder="Search" className="searchField" />
            </InputGroup>
        </Row>
    )
}

export default SearchBar