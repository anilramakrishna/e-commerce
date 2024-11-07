import React, { useEffect, useState,CSSProperties } from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Watches from '../components/Watches'
import Menfasion from '../components/Menfasion'
import Womenfashion from '../components/Womenfashion'
import Furniture from '../components/Furniture'
import Speakers from '../components/Speakers'
import ClipLoader from 'react-spinners/ClipLoader'
import Loader from 'react-spinner-loader'

const override = {
    display: "block",
    margin: "10px auto ",
};
function LandingPage() {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);
    })
    if (loading) {

        return (
            <>
                <Navbar />
                <ClipLoader
                    cssOverride={override}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </>

        )
    }
    return (
        <div>
            <Navbar />
            <Products />
            <Watches />
            <Menfasion />
            <Womenfashion />
            <Furniture />
            <Speakers />
        </div>
    )
}

export default LandingPage
