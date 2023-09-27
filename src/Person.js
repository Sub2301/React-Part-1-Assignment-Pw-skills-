// 1. Create a component named "Person" that takes two props - "name" and "age". The component should
// display the persons name and age in a paragraph Element.

function Person(props){
return (
    <div>
    <p>{props.name} is {props.age} years old. </p>
    
    </div>
)

}
export default Person;