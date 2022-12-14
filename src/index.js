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
import CodeWriter from './routes/mock-code-writer/code-writer'
import Profile from 'routes/profile/profile'
import AddImformation from 'routes/add-information/add-information'
import Referral from 'routes/referral/referral'
import CoinValue from 'routes/coin-value/coinValue'
import Graph from './routes/graph-component/graph'

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
        path: 'stories/codewriter',
        element: <CodeWriter />,
      },
      {
        path: 'stories/profile',
        element: <Profile />,
      },
      {
        path: 'stories/coinvalue',
        element: <CoinValue />,
      },
      {
        path: 'stories/graph-component',
        element: <Graph />,
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
