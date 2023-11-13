import React, { useEffect, useState } from "react"

export default (props) => {

    const [supplier, setSupplier] = useState([])
    const parts = props.node.data._links.part.href.split("/")
    const REST_URL = 'http://localhost:8080/api/parts/' + parts[(parts.length - 1)] + '/supplier'

    useEffect(() => getSupplier(), [])

    const getSupplier = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setSupplier(responseData)
            })
            .catch(error => console.error(error))
    }

    return <span>{supplier.name}</span>

}