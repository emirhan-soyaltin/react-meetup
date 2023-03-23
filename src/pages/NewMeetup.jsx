import NewMeetupForm from "../componentss/meetups/NewMeetupForm"

import { useNavigate } from 'react-router-dom'


const NewMeetup = () => {

  const history = useNavigate()

function addMeetupHandler(meetupData) {
  fetch('https://react-refresher-eb70d-default-rtdb.firebaseio.com/meetups.json',
  {
    method: 'POST',
    body: JSON.stringify(meetupData),
    headers: {
      'Content-Type': 'application/json'
     }
   }
 ).then(() => {
  history.replace('/')
 })
}
  
  return (
   <section>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
   </section>

  )

}

export default NewMeetup