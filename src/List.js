// 4. Create a component named "List" that takes one prop - "items". The component should display an
// unordered list element with the given list items.

function List (props){
const items = props.names.map((name) =>
    <li>{name}</li>
    ) 
return (
    <ul>{items}</ul>

)


}
export default List;