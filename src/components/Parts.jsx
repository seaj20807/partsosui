import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import GetId from './GetId'
import GetSupplier from './GetSupplier'

export default function Parts() {

    const [partsList, setPartsList] = useState([])
    const REST_URL = 'https://partsos.onrender.com/api/parts'

    useEffect(() => getPartsList(), [])

    const getPartsList = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPartsList(responseData._embedded.parts)
            })
            .catch(error => console.error(error))
    }

    const columns = [
        {
            valueGetter: GetId,
            headerName: 'Part ID',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'name',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'surfaceArea',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'baseMaterial',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            cellRenderer: GetSupplier,
            headerName: 'Supplier',
            sortable: true,
            filter: true,
            floatingFilter: true
        }
    ]

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '100%', margin: 'auto' }}>
            <AgGridReact
                rowData={partsList}
                columnDefs={columns}
            />
        </div>
    )
}