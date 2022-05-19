import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import buildEnv from '../buildEnv'

export default function Create() {
    const [form, setForm] = useState({
        name: '',
        position: '',
        level: ''
    })
    const navigate = useNavigate()

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault()

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form }

        await fetch(`${buildEnv()}/record/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPerson)
        }).catch((error) => {
            window.alert(error)
            return
        })

        setForm({ name: '', position: '', level: '' })
        navigate('/')
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Click to Add a Timestamp / IP to the DB."
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}
