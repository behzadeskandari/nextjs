import React from 'react'
import Header from '../Header/Header';

const Layout = ({children}) => (
    <div>
        <div>
            <Header />
        </div>
        {children}
    </div>
)

export default Layout;