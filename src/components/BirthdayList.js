import '../App.css';

import BirthdayCard from "./BirthdayCard";

const date=new Date();
let today_year=date.getFullYear()

let BirthdayList=(props)=>{
    return <div><ul>{props.persons.map(person=>{
        return <li><BirthdayCard image={person.image} name={person.name} age={today_year-person.year}/></li>
    })}</ul></div>
}

export default BirthdayList;