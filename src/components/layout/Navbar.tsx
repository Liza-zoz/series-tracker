import { NavLink } from 'react-router-dom';
import styles from '../../styles/components/Navbar.module.css';

import { useState, useEffect } from "react";


interface Props {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

const Navbar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
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

            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />

        </nav>
    );
};

export default Navbar;