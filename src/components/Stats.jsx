function Stats({items}) {
  const numItems = items.length;
  const numPacked = items.filter((item)=>item.packed).length;
  const percentPacked = Math.round((numPacked/numItems)*100)
 //const packedItems = items.reduce((acc,curr)=>curr.packed ? acc+1:acc,0)
  return(
    <footer className="stats">
        <em>{percentPacked === 100 ? 'You got everything! Ready to go ✈️': `You have ${numItems} items in your list, and you already packed ${percentPacked}%`}</em> 
    </footer>
  )
}
export default Stats;