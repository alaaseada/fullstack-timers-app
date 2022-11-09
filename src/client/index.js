import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import TimerDashboard from './timer-dashboard';

const root = ReactDOMClient.createRoot(document.getElementById('content'));
root.render(<TimerDashboard />);
