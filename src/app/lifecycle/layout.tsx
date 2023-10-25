
type Props = {
    children: React.ReactNode
    graph: React.ReactNode
}
const Layout = ({children, graph}: Props) => {
    return (
        <>
            <h1>{children}</h1>
            <h2>{graph}</h2>
        </>
    )
}

export default Layout