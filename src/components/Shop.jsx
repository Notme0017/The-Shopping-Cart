import { useState } from "react"
import ItemDetails from "./ItemDetails";
import ItemList from "./ItemList";

const Shop = ({items, setItems, onAddToCart, loading, error}) =>{
    const [selectedItemId, setSelectedItemId] = useState(null);
    
    const selectedItem = items.find((item) => item.id === selectedItemId) || null;

      const increment = (id) =>{
        setItems((prev) =>{
            console.log("prev right before map:", prev);
            const updated = prev.map((item) => item.id === id ? {...item, count: item.count + 1}: item);
            console.log("updated right after map:", updated);
            return updated;
    }
    )
  };

        const decrement = (id) =>{
            setItems((prev) =>{
            const updated = prev.map((item) => (item.id === id ? {...item, count: Math.max(item.count - 1, 0)}: item));
            return updated;
            });
        }

        const countChange = ({id, e}) =>{
        const value = Number(e.target.value) || 0;
        setItems((prev) =>{
        const updated = prev.map((item) => (item.id === id ? {...item, count: value}: item));
        return updated;
        });
  }

    return selectedItem?
        (<ItemDetails
            item={selectedItem}
            onCountChange={countChange}
            onClose={() => setSelectedItemId(null)}
            onAddToCart={onAddToCart}
            onIncrement={increment}
            onDecrement={decrement}
            error = {error}
            loading = {loading}
        />
    ) : (
        <ItemList
            items={items}
            onItemClick={setSelectedItemId}
            error={error}
            loading={loading}
        />
    )
}

export default Shop