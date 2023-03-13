/*
 * Copyright (c) 2022 by SafeQual. All rights reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
