/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import './index.css';
import Home from './pages/Home/Home';
import  Games from "./pages/Games/Games"

const root = document.getElementById('root');

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/Games" component={Games} />
        </Router>
    ),
    root!
);