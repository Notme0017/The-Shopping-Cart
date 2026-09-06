import ItemMiniCard from "./ItemMiniCard"
import '../style/itemList.css'

const ItemList = ({items, onItemClick, error, loading}) =>{
    if(loading) return <p>Loading...</p>
    if(error) return <p>A network error has been detected.</p>

    return (
        <div className="item-list">
            {items.map((item) =>
                <ItemMiniCard key={item.id} item={item} onClick={() => onItemClick(item.id)} />
            )}
        </div>
    )
}

export default ItemList;