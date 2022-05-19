import React, { useEffect, useState } from 'react'
import buildEnv from '../buildEnv'
const Record = (props) => (
    <tr>
        <td>{props.record.timestamp}</td>
        <td>{props.record.ip}</td>
    </tr>
)

export default function RecordList() {
    const [records, setRecords] = useState([])

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`${buildEnv()}/record/`)
            console.debug(response)
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`
                window.alert(message)
                return
            }

            const records = await response.json()
            setRecords(records)
        }

        getRecords()

        return
    }, [records.length])

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
            return <Record record={record} key={record._id} />
        })
    }

    // This following section will display the table with the records of individuals.
    return (
        <div>
            <h3>Record List (Total count: {records.length})</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>IP</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    )
}
