function Item({item, key, onDeleteItem }){
    return(
        <li>
            <span style={item.packed ? {textDecoration:"line-through"}:{}} key={key}>{item.quantity} {item.desc}</span>
            <button onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>
    )
}
export default Item;