import React from 'react';
import Buscar from './pages/buscar';
import { useState } from 'react';
import Mostrar from './pages/mostrarAlumno'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Entrevista from './pages/formularios/entrevista';



function App() {
  const [user, setUser] = useState([])
  const router = createBrowserRouter([
    {
      path: "/",
      element:         
      !user.length > 0
      ? <Buscar setUser={setUser} />
      : <Mostrar user={user}/>,
    },
    {
      path: "/entrevista",
      element: <Entrevista user={user}/>,
    }
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;