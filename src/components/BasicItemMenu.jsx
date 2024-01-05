import { Container, Breadcrumb, Row, Col, Tabs, Tab, InputGroup, FormControl, Button } from "react-bootstrap"
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

import NumericDropdown from "../utilityFunction/NumericDropdown";
import SmallCarousel from "./SmallCarousel";


function BasicItemMenu() {
    const { firebaseId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItemData = async () => {
            try {    
            const itemDocRef = doc(firestore, 'items', firebaseId);
            const itemDocSnap = await getDoc(itemDocRef);   

            if (itemDocSnap.exists()) {
                console.log('Item found:', itemDocSnap.data());
                setItem(itemDocSnap.data());
            } else {
                console.error('Item not found');
            }
            } catch (error) {
            console.error('Error fetching item data:', error);
            }
        }; 

        fetchItemData();
    }, [firebaseId]);

    if (!item) {
    return <div>Loading...</div>;
    }  

    const paragraphs = item.description;
    const listItems = paragraphs.map((paragraph, index) => 
        <li key={index}>{paragraph}</li>
    );

    const avaiable = 
    item.numberInStorage > 0 
        ? "In stock. Ready to ship!" 
        : `Sorry, ${item.name} is unavailable`;

    return(
        <Container className="item--container">
            <Breadcrumb className="item--breadcrumbs">
                <Breadcrumb.Item href="#home">Avitas Bio </Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    {item.category}
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="item--active">{item.name}</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="item--row">
                <Col className="img--col" lg={5} sm={12}>
                    <SmallCarousel
                        mainImage={item.img}
                        smallImages={item.images}
                     />
                </Col>
                         
                <Col className="text--col" lg={7} sm={12}>
                    <section className="item--descriptiion--section">
                        <h1 className="item--name">{item.name}</h1>
                        <span className="item--subText">{item.subText}</span>
                        <span className="item--caution">{item.caution}</span>
                        <span className="item--code">{item.code}</span>
                        <span className="item--rating">({item.rating})</span>
                        <ul className="item--list">
                            {listItems}
                        </ul>
                        <span className="item--price">${item.price.toFixed(2)}</span>
                        <span className="item--availability">{avaiable}</span>
                        <span className="item--quantity">Quantity 
                            <NumericDropdown />
                        </span>
                    </section>                                                       
                    <Button></Button>
                </Col>
            </Row>

            <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3 item--tabs"
            fill
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                    Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>

        </Container>
    )
}
export default BasicItemMenu