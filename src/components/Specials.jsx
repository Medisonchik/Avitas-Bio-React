import BaseCardCarousel from "./BaseCardCarousel";
import {Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { app, firestore } from '../../firebase';




function Specials(){
    const [items, setItems] = useState([]);
    console.log(items);

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
            <h1 className="section--name">Specials!</h1>
            <BaseCardCarousel className="carousel"
            items={items}
            >
            </BaseCardCarousel>
        </Container>
    )
}

export default Specials;