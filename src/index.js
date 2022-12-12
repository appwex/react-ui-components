import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App'

import ErrorPage from './routes/error-page/error-page'
import StoryPage from './routes/story-page/story-page'
import Homepage from './routes/homepage/homepage'
import TestPage from './routes/test-page.jsx/test-page'
import ComponentStory from './routes/story-page/componet'
import ButtonStory from './routes/story-page/button'
import QuickTransfer from './components/quickTransfer/QuickTransfer'
import AnotherProfile from './components/anotherProfile/anotherProfile'
import NotificationStory from './routes/notification-page/index'
import Payment from './routes/payment/payment'
import Cookie from './routes/cookie/cookie'
import SidebarMenuComponent from './routes/sidebarmenu-component/sidebarmenu'
import CardPayment from './routes/card-payment/CardPayment'
import Profile from 'routes/profile/profile'
import CoinValue from 'routes/coin-value/coinValue'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: 'stories',
        element: <StoryPage />,
      },
      {
        path: 'test',
        element: <TestPage />,
      },
      {
        path: 'stories/component',
        element: <ComponentStory />,
      },
      {
        path: 'stories/button',
        element: <ButtonStory />,
      },
      {
        path: 'stories/quicktransfer',
        element: <QuickTransfer />,
      },
      {
        path: 'stories/anotherProfile',
        element: <AnotherProfile />,
      },
      {
        path: 'stories/notification',
        element: <NotificationStory />,
      },
      {
        path: 'stories/payment',
        element: <Payment />,
      },
      {
        path: 'stories/cookie',
        element: <Cookie />,
      },
      {
        path: 'stories/sidebarmenu',
        element: <SidebarMenuComponent />,
      },
      {
        path: 'stories/cardpayment',
        element: <CardPayment />,
      },
      {
        path: 'stories/profile',
        element: <Profile />,
      },
      {
        path: 'stories/coinvalue',
        element: <CoinValue />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
