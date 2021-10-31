import React, {useState} from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Layout({children}) {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <>
            <Sidebar menuCollapse={menuCollapse} menuIconClick={menuIconClick}  />
            <div style={{paddingLeft: "80px"}}>
            {children}
            </div>
            <main className="py-3" padding="20px">
                
            </main>
            <Footer/>
        </>
    )
}

export default Layout
