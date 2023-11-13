import React, { useEffect, useState } from "react"

export default (props) => {

    const [plating, setPlating] = useState([])
    const parts = props.node.data._links.plating.href.split("/")
    const REST_URL = 'http://localhost:8080/api/processes/' + parts[(parts.length - 2)] + '/plating'

    useEffect(() => getPlating(), [])

    const getPlating = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPlating(responseData)
            })
            .catch(error => console.error(error))
    }

    return <span>{plating.platingMaterial}</span>

}