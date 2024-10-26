import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { BASE_PATH_DYNAMIC_CHECKOUT } from '@logic/consts';

import './globals.scss'
import CheckoutProvider from "@ui/CheckoutProvider/CheckoutProvider";
import PaypalProcedure from "@ui/PaypalProcedure/PaypalProcedure";

ReactDOM.createRoot(document.getElementById('i2xfpbh-5')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${BASE_PATH_DYNAMIC_CHECKOUT}/`} element={<CheckoutProvider />} />
        <Route path={`${BASE_PATH_DYNAMIC_CHECKOUT}/paypal/:id`} element={<PaypalProcedure />} />
        <Route path="*" element={<Navigate to={`${BASE_PATH_DYNAMIC_CHECKOUT}`} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
