import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Button from '@mui/material/Button'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import GetId from './GetId'
import GetPart from './GetPart'
import GetPlating from './GetPlating'

export default function Processes() {

    const [processesList, setProcessesList] = useState([])
    const REST_URL = "http://localhost:8080/api/processes"

    useEffect(() => getProcessesList(), [])

    const getProcessesList = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setProcessesList(responseData._embedded.processes)
                console.log(processesList)
            })
            .catch(error => console.error(error))
    }

    const columns = [
        {
            cellRenderer: GetId, headerName: 'Process ID'
        },
        {
            cellRenderer: GetPart, headerName: 'Part ID'
        },
        {
            cellRenderer: GetPlating, headerName: 'Plating ID'
        },
        { field: 'thickness' }
    ]

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '100%', margin: 'auto' }}>
            <AgGridReact
                rowData={processesList}
                columnDefs={columns}
            />
        </div>
    )
}