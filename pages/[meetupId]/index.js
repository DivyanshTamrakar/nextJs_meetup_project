// ourdomain/meetupId
import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb';

function MeetupDetails(props) {
    return (
        <div>
            <MeetupDetail
                title={props.meetupData.title}
                address={props.meetupData.address}
                image={props.meetupData.image}
                description={props.meetupData.description}
            />

        </div>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://divyansh:developer@neog-cluster.j0bu3.mongodb.net/meetup')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))

    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://divyansh:developer@neog-cluster.j0bu3.mongodb.net/meetup')
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    client.close()
    return {
        props: {
            meetupData: {
                id:selectedMeetup._id.toString(),
                title:selectedMeetup.title,
                description:selectedMeetup.description,
                address:selectedMeetup.address,
                image:selectedMeetup.image
            }
        }
    }
}

export default MeetupDetails