// ourdomain/new-meetup

import { useRouter } from 'next/router';
import React from 'react'
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';

function NewMeetupPage() {

    const router = useRouter();

    async function addMeetupHandler(data) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        router.push('/');
    }


    return (
        <Fragment>
            <Head>
                <title>Add New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create oppurtunities"
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage;