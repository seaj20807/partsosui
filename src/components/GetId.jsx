import React from "react"

export default (props) => {

    const parts = props.node.data._links.self.href.split("/")

    return <span>{parts[(parts.length - 1)]}</span>

}