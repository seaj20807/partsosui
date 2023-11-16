export default (props) => {

    const parts = props.node.data._links.self.href.split("/")

    return parts[(parts.length - 1)]

}