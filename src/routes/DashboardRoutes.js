import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroe/HeroeScreen'
import { marvelScreen } from '../components/marvel/marvelScreen'
import { NavBar } from '../components/ui/NavBar'
import { SearchScreen } from '../search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar/> 

            <div  className="" style={{marginLeft:50, marginRight:50}}>
                <Switch>
                    <Route exact path="/marvel" component={marvelScreen} />
                    <Route exact path="/heroe/:id" component={HeroeScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/marvel"/>
                </Switch>
            </div>  
        </>
    )
}
