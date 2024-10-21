import React from 'react'; 
import Header from './Header';
import Sidebar from './Sidebar';
 
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar style={{ width: '250px' }} />
                <div style={{ flexGrow: 1, padding: '16px' }}>
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
};

export default Layout; 
