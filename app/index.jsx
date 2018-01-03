import React from 'react';
import { render } from 'react-dom';
import DigitalClock from './features/clocks/digital-clock';
import './styles/css-styles.css'

render(
    <DigitalClock/>
    , document.querySelector('.app')
)