import React, { FC } from 'react'
import Footer from './footer'
import Header from './header'

interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="h-[82%] bg-[#cbd5e1] animate-fade">{children}</main>
            <Footer />
        </>
    )
}

export default Layout
