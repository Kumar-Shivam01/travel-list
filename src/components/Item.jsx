function Item({item, key, onDeleteItem, onToggleItems}){
    return(
        <li>
            <input type="checkbox" value={item.packed} onChange={()=>{onToggleItems(item.id)}}/>
            <span style={item.packed ? {textDecoration:"line-through"}:{}} key={key}>{item.quantity} {item.desc}</span>
            <button onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>
    )
}
export default Item;