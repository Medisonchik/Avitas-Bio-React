import React from 'react';
import { NavLink } from 'react-router-dom';



export function GenerateLinks(linksData) {
    return linksData.map((link) => (
        <NavLink to={link.path} key={link.name}>
             <div className='navbar--link'>{link.name}</div>
        </NavLink>
    ))
}
/* let tabsLinks = tabsData.map((tab) => (
    <NavLink key={tab.id}>
      <div className='tabs--link'>{tab.name}</div>
    </NavLink>
  )) */

export function TabLinks(tabsData) {
    return tabsData.map((tab) => (
        <NavLink key={tab.id}>
            <div className='tabs--link'>{tab.name}</div>
        </NavLink>
    ))
}