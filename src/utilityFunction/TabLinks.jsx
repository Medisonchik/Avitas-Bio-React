import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TabLinks(tabsData) {
    return tabsData.map((tab) => (
        <NavLink key={tab.id}>
            <div className='tabs--link'>{tab.name}</div>
        </NavLink>
    ));
}
