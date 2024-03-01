import {Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { app, firestore } from '../../firebase';

import BaseCardCarousel from "./BaseCardCarousel";


function RecentlyViewed({ onAddToCart }){
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemCollection = collection(firestore, 'items');
    
        const unsubscribe = onSnapshot(itemCollection, (querySnapshot) => {
          const data = querySnapshot.docs.map(doc => doc.data());
    
          setItems(data);
        });
        return () => unsubscribe();
      }, [firestore]);

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