import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { Button, Card } from "react-bootstrap";
import "../content/cards.scss";

const Cards = (props) => {
    const { id, name, image, price, sale, rate } = props;

    const addToProduct = (productName) => {
        alert(`Product "${productName}" was added to the basket`);
    };


    const rateFont = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rate) {
                stars.push(<i key={i} className='text-warning'><IoStar /></i>);
            } else {
                stars.push(<i key={i} className='text-warning'><FaRegStar /></i>);
            }
        }
        return stars;
    }
    return (
        <div>
            <Card className="text-center" dataSetId={id}>
                <Card.Body>
                    <Card.Img variant="top" src={image} />
                    <Card.Title className="mt-4">{name}</Card.Title>
                    <Card.Text>{rateFont()}</Card.Text>
                    <Card.Subtitle>  {sale ?
                        <span >
                            <strong className='sale'> ${price}  </strong> &nbsp; $ {(price - (price * 0.1)).toFixed(2)}
                        </span>
                        :
                        <span className='price'>
                            ${price}
                        </span>
                    }</Card.Subtitle>

                    <Button onClick={() => addToProduct(name)} className="box mt-3">
                        Add to <FaBasketShopping />
                    </Button>
                </Card.Body>
            </Card>
        </div>
  )
}

export default Cards
