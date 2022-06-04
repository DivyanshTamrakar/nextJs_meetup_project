// ourdomain/
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../constant/dummy_meetups";
import { MongoClient } from 'mongodb'


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
    const client = await MongoClient.connect('mongodb+srv://divyansh:developer@neog-cluster.j0bu3.mongodb.net/meetup')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close()

    return {
        props: {
            meetups: meetups.map((meetup)=>({
                title:meetup.title,
                image:meetup.image,
                id:meetup._id.toString(),
                address:meetup.address
            }))
        },
        revalidate:1
    }

}

export default HomePage;