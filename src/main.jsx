import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import FirstPage from './components/FirstPage/FirstPage';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/POstDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <FirstPage></FirstPage>
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:id',
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
