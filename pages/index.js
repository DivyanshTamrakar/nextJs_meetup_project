// ourdomain/
import  MeetupList  from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../constant/dummy_meetups";

function HomePage() {
    return <div>
        <MeetupList meetups={DUMMY_MEETUPS}/>
    </div>
}

export default HomePage;