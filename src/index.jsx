import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom'

import Charts from './components/app'

const container = document.getElementById('root');
const root = createRoot(container);



const App = () => (
    <Router>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/linechart" style={{color: "#6BBEED",textDecoration:"none"}}>Line Chart</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/splinechart" style={{color: "#6BBEED",textDecoration:"none"}}>Spline Chart</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/stockchart" style={{color: "#6BBEED",textDecoration:"none"}}>Stock Chart</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/annotations" style={{color: "#6BBEED",textDecoration:"none"}}>Annotations<span style={{color:"red"}}>!</span></Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/boost" style={{color: "#6BBEED",textDecoration:"none"}}>Boost</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/captain" style={{color: "#6BBEED",textDecoration:"none"}}>Captain</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/chart" style={{color: "#6BBEED",textDecoration:"none"}}>Chart !!look again</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/coloraxis" style={{color: "#6BBEED",textDecoration:"none"}}>Coloraxis</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/credits" style={{color: "#6BBEED",textDecoration:"none"}}>Credits<span style={{color:"red"}}>!</span></Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/data" style={{color: "#6BBEED",textDecoration:"none"}}>Data <span style={{color:"red"}}>!</span></Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/defs" style={{color: "#6BBEED",textDecoration:"none"}}>Defs</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/drilldown" style={{color: "#6BBEED",textDecoration:"none"}}>Drilldown</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/exporting" style={{color: "#6BBEED",textDecoration:"none"}}>Exporting !look again</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/labels" style={{color: "#6BBEED",textDecoration:"none"}}>Labels</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/legend" style={{color: "#6BBEED",textDecoration:"none"}}>Legend</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/loadings" style={{color: "#6BBEED",textDecoration:"none"}}>Loadings I couldn't use</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/navigation" style={{color: "#6BBEED",textDecoration:"none"}}>Navigation I couldn't use</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/nodata" style={{color: "#6BBEED",textDecoration:"none"}}>No Data <span style={{color:"red"}}>!</span></Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/pane" style={{color: "#6BBEED",textDecoration:"none"}}>Pane</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/plotoptions" style={{color: "#6BBEED",textDecoration:"none"}}>Plotoption <span style={{color:"red"}}>--</span></Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/responsive" style={{color: "#6BBEED",textDecoration:"none"}}>Responsive</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/series" style={{color: "#6BBEED",textDecoration:"none"}}>Series <span style={{color:"red"}}>!</span></Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/subtitle" style={{color: "#6BBEED",textDecoration:"none"}}>Subtitle</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/time" style={{color: "#6BBEED",textDecoration:"none"}}>Time</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/title" style={{color: "#6BBEED",textDecoration:"none"}}>Title</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/tooltip" style={{color: "#6BBEED",textDecoration:"none"}}>Tooltip</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/xaxis" style={{color: "#6BBEED",textDecoration:"none"}}>X Axis</Link>
            </li>
        </ul>
        <ul style={{display: "inline-block"}}>
            <li style={{marginBottom: "5px"}}>
                <Link to="/yaxis" style={{color: "#6BBEED",textDecoration:"none"}}>Y Axis</Link>
            </li>
            <li style={{marginBottom: "5px"}}>
                <Link to="/zaxis" style={{color: "#6BBEED",textDecoration:"none"}}>Z Axis</Link>
            </li>
        </ul>
        <Charts/>
    </Router>
)

root.render(<App/>);
