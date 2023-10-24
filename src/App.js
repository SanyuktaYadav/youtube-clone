import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path:"/watch",
        element: <WatchPage />,
      },
    ]
  },

])
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter} />

      {
        /*
        *
        * Head
        * Body
        *   Sidebar
        *     MenuItems
        *   MainContainer
        *     ButtonsList
        *     VideoContainer
        *     VideoCard
        */
      }
    </div>
    </Provider>
  );
}

export default App;
