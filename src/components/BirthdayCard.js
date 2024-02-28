import '../App.css';

let BirthdayCard=(props)=>{
    return <div className='ind'>
        <div className='user-thumb'>
        <img src={props.image} alt={props.name}/>
        </div>
        <div className='user-info'>
        <span className='name'>{props.name}</span>
        <span className='age'>{props.age+' years'}</span>
        </div>
    </div>
}

export default BirthdayCard;