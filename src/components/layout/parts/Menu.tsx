import {Link} from 'gatsby';
import React from 'react';


const Menu: React.FC = () => (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/projects'}>Projects</Link>
    </nav>
);


export default Menu;
