// ourdomain/
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from 'mongodb'
import { Fragment } from "react";
import Head from 'next/head';



function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups App </title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active react meetups"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://divyansh:developer@neog-cluster.j0bu3.mongodb.net/meetup')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close()

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                image: meetup.image,
                id: meetup._id.toString(),
                address: meetup.address
            }))
        },
        revalidate: 1
    }

}

export default HomePage;