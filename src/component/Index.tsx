import { Link, NavLink, Outlet } from "react-router-dom"
export type Menu = {
    name: string,
    id: string,
    position: number
}
type MenuProps = {
    menuList: Menu[]
}
const Index = ({ menuList }: MenuProps) => {
    return (
        <>
            <nav className="menu">
                {menuList.map(({ name, id }) => (
                    <NavLink key={id} to={`menu/${id}`} className={({ isActive, isPending }) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""
                    }>
                        <Link to={`menu/${id}`}>{name ? name : 'No Name'}</Link>
                    </NavLink>
                ))}
            </nav>
            <div className="main">
                <Outlet></Outlet>
            </div>
        </>
    )
}
export default Index