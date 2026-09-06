import '../style/cart.css'

const Cart = ({cartItems, setCart}) =>{
    if(cartItems.length === 0) return <p>Your cart is empty</p>

    const total = cartItems.reduce((sum, items) => sum + items.price * items.count, 0);

    const increment = (id) => {
        setCart((prev) =>
            prev.map((item) => (item.id === id ? {...item, count: item.count + 1}: item))
        );
    };

    const decrement = (id) => {
        setCart((prev) =>
        prev
            .map((item) => item.id === id ? {...item, count: Math.max(item.count - 1, 0)}: item))
    }

    const removeFromCart = (id) =>{
        setCart((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div className="cart">
            {cartItems.map((item) => (
                <div key={item.id} className="cart-row">
                    <button className="remove-btn" type="button" onClick={() => removeFromCart(item.id)}>X</button>
                    <img src={item.image} alt={item.title} />
                    <span className='title'>{item.title}</span>
                    <button type="button" onClick={() => decrement(item.id)}>-</button>
                    <span className='count'>Qty: {item.count}</span>
                    <button type="button" onClick={() => increment(item.id)}>+</button>
                    <span className='price'>${(item.price * item.count).toFixed(2)}</span>
                </div>
            ))}
            <h3 className='cart-total'>
                <span>Total: </span>
                <span>${total.toFixed(2)}</span>
            </h3>
        </div>
    );
};

export default Cart;