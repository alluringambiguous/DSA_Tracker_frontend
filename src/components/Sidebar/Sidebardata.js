import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
export const Sidebardata = [
    {
        title:"Home",
        icon: <HomeIcon/>,
        link:"/home"

    },
    {
        title:"Profile",
        icon: <PeopleIcon/>,
        link:"/profile"

    },
    {
        title:"Browse",
        icon: <OpenInBrowserIcon/>,
        link:"/browse"

    },

]
    