// ourdomain/
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../constant/dummy_meetups";
import {useEffect,useState} from 'react'
function HomePage() {
    const [loadedMeetups, setloadedMeetups] = useState([])


    useEffect(() => {
        //doing fetching form the backend 
        setloadedMeetups(DUMMY_MEETUPS)

    }, [])

    return <div>
        <MeetupList meetups={loadedMeetups} />
    </div>
}

export default HomePage;