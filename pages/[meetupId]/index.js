// ourdomain/meetupId
import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
    return (
        <div>
            <MeetupDetail
                title='A First Meetup'
                address='sector 1234, Some area of banglore'
                image='https://images.unsplash.com/photo-1477925181867-37d89ee64b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80'
                description="Dummy-Content"
            />

        </div>
    )
}

export default MeetupDetails