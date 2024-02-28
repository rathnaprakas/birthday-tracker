import { useState } from 'react';
import './App.css';
import AddNewBirthday from './components/AddNewBirthday';
import BirthdayList from './components/BirthdayList';
import Header from './components/Header';

function App() {
  let data=JSON.parse(localStorage.getItem('friends'))

  let persons=data.filter((person)=>{return person.date===today_date&&person.month===today_month})

  let [state,setState]=useState(true)
  let onFormSubmit=()=>{
    setState(!state)
  }
  return (
    <div className='card'>
      <Header total={persons.length}/>
      <AddNewBirthday onFormSubmit={onFormSubmit}/>
      <BirthdayList persons={persons}/>
    </div>
  );
}

export default App;

const date=new Date();
let today_date=date.getDate()
let today_month=date.getMonth()+1

let friends=[{image:'https://static.toiimg.com/thumb/105854741/Tripti-Dimri.jpg?width=1200&height=900',name:'melissa',date:28,month:2,year:2003},
{image:'https://static.toiimg.com/thumb/105854741/Tripti-Dimri.jpg?width=1200&height=900',name:'priya',date:28,month:2,year:2001},
{image:'https://static.toiimg.com/thumb/105854741/Tripti-Dimri.jpg?width=1200&height=900',name:'riya',date:29,month:2,year:2002},
{image:'https://static.toiimg.com/thumb/105854741/Tripti-Dimri.jpg?width=1200&height=900',name:'keerthi',date:29,month:2,year:2001}]

localStorage.friends=JSON.stringify(friends)