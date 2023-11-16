import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import GetId from './GetId'
import GetPart from './GetPart'
import GetPlating from './GetPlating'

export default function Processes() {

    const [processesList, setProcessesList] = useState([])
    const REST_URL = "https://partsos.onrender.com/api/processes"

    useEffect(() => getProcessesList(), [])

    const getProcessesList = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setProcessesList(responseData._embedded.processes)
            })
            .catch(error => console.error(error))
    }

    const columns = [
        {
            valueGetter: GetId,
            headerName: 'Process ID',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            cellRenderer: GetPart,
            headerName: 'Part Name',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            cellRenderer: GetPlating,
            headerName: 'Plating Material',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'thickness',
            sortable: true,
            filter: true,
            floatingFilter: true
        }
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