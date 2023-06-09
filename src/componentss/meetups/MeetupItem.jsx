import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <adress>{props.address}</adress>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button>To Favorites</button>
        </div>
        </Card>
    </li>
  )
}

export default MeetupItem