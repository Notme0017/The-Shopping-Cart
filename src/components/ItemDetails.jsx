import '../style/itemDetails.css'
import { useNavigate } from 'react-router-dom'

const ItemDetails = ({item, onCountChange, onClose, onAddToCart, onIncrement, onDecrement, error, loading}) =>{
    const navigate = useNavigate();

    const handleAddToCart = () =>{
        onAddToCart(item);
        navigate("/cart");
    }

    if(loading) return <p>Loading...</p>
    if(error) return <p>We have encountered a network error.</p>
    return(
        <div className="item-detail-card">
            <img src={item.image} alt="item.title" />
            <h3>{item.title}</h3>
            <span className="description">
                {item.description}
            </span>
            <section className="price-and-rate">
                <span className="price">Price: {item.price}</span>
                <span className="rate">Ratings: {item.rating.rate}</span>
            </section>
            <section className="count">
                <input placeholder="1"
                    name="count" 
                    value={item.count}
                    onChange={(e) => onCountChange({id: item.id, e})} 
                />
                <section className="buttons-section">
                    <button type="button" onClick={() => onDecrement(item.id)}>-</button>
                    <button type="button" onClick={() => onIncrement(item.id)}>+</button>
                </section>
            </section>
            <button className="add-to-cart-btn" type="button" onClick={handleAddToCart}>Add To Cart</button>
            <button className='close-btn' type="button" onClick={onClose}>X</button>
        </div>
    )
}

export default ItemDetails;