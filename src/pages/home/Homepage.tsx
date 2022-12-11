import React from 'react'
import { Navbar, ContactForm } from '../../components';
import { Toaster } from "react-hot-toast";

const Homepage = () => {
    return (
        <>
            <Toaster position="bottom-center" reverseOrder={false} />
            <Navbar />
            <ContactForm />
        </>
    )
}

export { Homepage }