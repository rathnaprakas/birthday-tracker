import '../App.css';

let Header=(props)=>{
    return <div>
        {props.total===1?<h2>{props.total} birthday today</h2>:<h2>{props.total} birthdays today</h2>}
        </div>
}

export default Header;