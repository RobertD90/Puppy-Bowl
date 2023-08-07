import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <>
            <h2>Puppy Bowl</h2>
            <Link to='/'>Home</Link>
            <Link to='/pet'>Pet Page</Link>

        </>
    )
}

export default NavBar