// ourdomain/
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../constant/dummy_meetups";


function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}


// export async function getServerSideProps(context){
//     const req = context.req;
//     const res =  context.res;
//     // fetch the data
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }

//     }
// }


export async function getStaticProps() {
    // fetch the data from the server
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    }

}

export default HomePage;