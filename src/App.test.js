import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom'
import Goal from './Card/Goal'

test('test goal card showing right things', ()=>{
    let goal = {
        "deleted": false,
        "rejected": false, 
        "confirmed": true,
        "archivedCreator": false, 
        "archivedInvitee": false, 
        "key": "-M95fFkz8Z6yJAtYIvLp",
        "title": "Reading",
        "description": "Read a book for 10 minutes",
        "startDate": "6/5/2020",
        "duration": "1",
        "goalType": "Qualitative",
        "groupMembers": {
          "creator": "gQ7yfse35iwjfoea",
          "invitee": "gQ7yfse35iwjfoeb",
        },
        "minimum": "1",
        "metric": "gQ7yfse35iwjfoea",
        "progress": {
          "gQ7yfse35iwjfoea": {
            0: 0,
          },
          "gQ7yfse35iwjfoeb": {
            0: 0,
          },
        },
        "lastRemindCreator": -1,
        "lastRemindInvitee": -1,
    };
    let user = {uid:"gQ7yfse35iwjfoeb", displayName:"Tester",email:"travistest2@gmail.com" }
    render(<Goal goal={goal} user={user}/>)
    fireEvent.click(screen.getByText('See More'))
    fireEvent.click(screen.getByText('Close'))
})