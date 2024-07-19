
const Navbar = () => {

    return (
        <div className="navbar bg-base-300" >
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">React Hooks</a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>

        </div>
    )
}



export default Navbar;