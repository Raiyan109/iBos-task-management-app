import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import LoginProvider from './context/LoginProvider'


function App() {

  return (
    <div>
      <LoginProvider>
        <RouterProvider router={routes} />
      </LoginProvider>
    </div>
  )
}

export default App
