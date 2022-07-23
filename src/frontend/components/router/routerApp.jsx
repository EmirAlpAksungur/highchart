import React from 'react'
import { Route, Routes } from 'react-router-dom'


import LineChart from '../charts/LineChart'
import SplineChart from '../charts/splinechartaxios';
import DraggableResizeble from '../charts/draggableresizable';
import Annotations from '../charts/annotations';
import Boost from '../charts/boost';
import Captain from '../charts/captain';
import Chart from '../charts/chart'
import ColorAxis from '../charts/coloraxis'
import Credits from '../charts/credits';
import Data from '../charts/data';
import Defs from '../charts/defs';
import DrillDown from '../charts/drilldown';
import Exporting from '../charts/exporting';
import Labels from '../charts/labels'
import Legend from '../charts/legend';
import Loadings from '../charts/loadings';
import Navigation from '../charts/navigation';
import NoData from '../charts/nodata';
import Pane from '../charts/pane';
import Plotoptions from '../charts/plotoptions'
import Responsive from '../charts/responsive';
import Series from '../charts/series';
import Subtitle from '../charts/subtitle';
import Time from '../charts/time';
import Title from '../charts/title';
import Tooltip from '../charts/tooltip';
import Xaxis from '../charts/xaxis';
import Yaxis from '../charts/yaxis';
import Zaxis from '../charts/zaxis';

const routerApp = () => {
  return (
    <Routes>
            <Route path="/linechart" element={<LineChart/>}/>
            <Route path="/splinechartaxios" element={<SplineChart/>}/>
            <Route path="/draggableresizable" element={<DraggableResizeble/>}/>
            <Route path="/annotations" element={<Annotations/>}/>
            <Route path="/boost" element={<Boost/>}/>
            <Route path="/captain" element={<Captain/>}/>
            <Route path="/chart" element={<Chart/>}/>
            <Route path="/coloraxis" element={<ColorAxis/>}/>
            <Route path="/credits" element={<Credits/>}/>
            <Route path="/data" element={<Data/>}/>
            <Route path="/defs" element={<Defs/>}/>
            <Route path="/drilldown" element={<DrillDown/>}/>
            <Route path="/exporting" element={<Exporting/>}/>
            <Route path="/labels" element={<Labels/>}/>
            <Route path="/legend" element={<Legend/>}/>
            <Route path="/loadings" element={<Loadings/>}/>
            <Route path="/navigation" element={<Navigation/>}/>
            <Route path="/nodata" element={<NoData/>}/>
            <Route path="/pane" element={<Pane/>}/>
            <Route path="/plotoptions" element={<Plotoptions/>}/>
            <Route path="/responsive" element={<Responsive/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/subtitle" element={<Subtitle/>}/>
            <Route path="/time" element={<Time/>}/>
            <Route path="/title" element={<Title/>}/>
            <Route path="/tooltip" element={<Tooltip/>}/>
            <Route path="/xaxis" element={<Xaxis/>}/>
            <Route path="/yaxis" element={<Yaxis/>}/>
            <Route path="/zaxis" element={<Zaxis/>}/>
            <Route path="/" element={<LineChart/>}/>
        </Routes>
  )
}

export default routerApp