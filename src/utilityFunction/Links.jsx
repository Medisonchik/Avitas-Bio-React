import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Links(linksData) {
    return linksData.map((link) => (
        <NavLink to={link.path} key={link.name}>
             <div className='navbar--link'>{link.name}</div>
        </NavLink>
    ));
}