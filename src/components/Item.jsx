function Item({item,key}){
    return(
        <li>
            <span style={item.packed ? {textDecoration:"line-through"}:{}} key={key}>{item.quantity} {item.desc}</span>
            <button>❌</button>
        </li>
    )
}
export default Item;