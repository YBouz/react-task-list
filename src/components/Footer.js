import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2021 <a href="https://bouz.me">Bouz</a></p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
