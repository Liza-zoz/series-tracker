import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
                <li><NavLink to="/series">Series</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/cartoons">Cartoons</NavLink></li>
                <li><NavLink to="/animated">Animated</NavLink></li>
                <li><NavLink to="/anime">Anime</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;