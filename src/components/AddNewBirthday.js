import {useRef} from 'react';
import '../App.css'

let AddNewBirthday=(props)=>{
    let imageInputRef=useRef()
    let nameInputRef=useRef()
    let dayInputRef=useRef()
    let monthInputRef=useRef()
    let yearInputRef=useRef()

    let submitHandler=(event)=>{
        event.preventDefault()
        let enteredImage=imageInputRef.current.value
        let enteredName=nameInputRef.current.value
        let enteredDay=dayInputRef.current.value
        let enteredMonth=monthInputRef.current.value
        let enteredYear=yearInputRef.current.value
        let enteredPerson={image:enteredImage,name:enteredName,date:Number(enteredDay),month:Number(enteredMonth),year:Number(enteredYear)}
        let data=JSON.parse(localStorage.getItem('friends'))
        data.push(enteredPerson)
        localStorage.friends=JSON.stringify(data)
        props.onFormSubmit()
        document.getElementById('myForm').reset()
    }

    return <form onSubmit={submitHandler} id='myForm'>
        <div>
            <label htmlFor="image"/>
            <input type="url" id="image" required ref={imageInputRef} placeholder='Enter image url'/>
        </div>
        <div>
            <label htmlFor="name"/>
            <input type="text" id="name" required ref={nameInputRef} placeholder='Enter name'/>
        </div>
        <div>
            <label htmlFor="day"/>
            <input type='number' id="day" min={1} max={31} required ref={dayInputRef} placeholder="day"/>
        </div>
        <div>
            <label htmlFor="month"/>
            <input type='number' id="month" min={1} max={12} required ref={monthInputRef} placeholder='month'/>
        </div>
        <div>
            <label htmlFor="year"/>
            <input type='number' id="year" min={1900} max={2024} required ref={yearInputRef} placeholder='year'/>
        </div>
        <div>
            <button>Add Birthday</button>
        </div>
    </form>
}

export default AddNewBirthday;