// ourdomain/new-meetup

import { useRouter } from 'next/router';
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

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
        router.push('/')


    }


    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetupPage;