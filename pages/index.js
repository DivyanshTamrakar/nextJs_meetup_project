// ourdomain/
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../constant/dummy_meetups";


function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    // fetch the data from the server
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }

}

export default HomePage;