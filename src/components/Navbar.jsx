import logo from "/images/logo.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" />
            <p>my travel journal.</p>
        </nav>
    )
}