import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'

export const Router = () => {
    return (
        <BrowserRouter>
        <Route exact path="/">
            <Home />
        </Route>
        </BrowserRouter>
    )
}
