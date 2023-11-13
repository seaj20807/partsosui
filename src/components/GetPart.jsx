import React, { useEffect, useState } from "react"

export default (props) => {

    const [part, setPart] = useState([])
    const parts = props.node.data._links.part.href.split("/")
    const REST_URL = 'http://localhost:8080/api/processes/' + parts[(parts.length - 2)] + '/part'

    useEffect(() => getPart(), [])

    const getPart = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPart(responseData)
            })
            .catch(error => console.error(error))
    }

    return <span>{part.name}</span>

}