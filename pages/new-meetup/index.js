// ourdomain/new-meetup

import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function addMeetupHandler(data) {
        console.log(data)

    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetupPage;