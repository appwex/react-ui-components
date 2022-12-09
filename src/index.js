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
import NotificationStory from './routes/notification-page/index'
import Cookie from './routes/cookie/cookie'
import Payment from './routes/payment/payment'
import Activities from 'routes/recent-activities/recent-activities'
import ChartStory from 'routes/chart-page'
import SidebarMenuComponent from 'routes/sidebarmenu-component/sidebarmenu'

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
        path: 'stories/recent-activity',
        element: <Activities />,
      },
      {
        path: 'stories/chart',
        element: <ChartStory />,
      },
      {
        path: 'stories/sidebarmenu',
        element: <SidebarMenuComponent />,
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
