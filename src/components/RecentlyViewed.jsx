import BaseCardCarousel from "./BaseCardCarousel"
import { items }  from '../items'
import {Container} from "react-bootstrap"


function RecentlyViewed(){
    return(
        <Container className="section--container">
            <h1 className="section--name">Recently Viewed</h1>
            <BaseCardCarousel className="carousel"
            items={items}
            >
            </BaseCardCarousel>
        </Container>
    )
}

export default RecentlyViewed;