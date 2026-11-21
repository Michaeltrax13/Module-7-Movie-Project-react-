import React, { useState } from 'react'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [searchData, setSearchData] = useState({
        result: [],
        query: '' //necessary to show what user searhered for dynamically
    })

    const [loading, setLoading] = useState(true)
    //skeleton loading state lives here since Nav triggers it and
    //Home displays it

  return (
    <>
        <Nav setSearchData={setSearchData} setLoading={setLoading} />
        <Outlet context={{ searchData, loading }}/>
        <Footer />
    </>
  )
}

export default Layout