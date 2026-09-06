import '../style/itemMiniCard.css'

const ItemMiniCard = ({item, onClick}) =>{
    return(
        <div className="item-mini-card"
            onClick={onClick}
            role="button"
            tabIndex={0}>
            <img src={item.image} alt="NA" />
            <span className="title-mini-card">{item.title}</span>
        </div>
    )
}

export default ItemMiniCard;