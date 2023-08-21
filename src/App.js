import React from 'react';
import Mostrar from './pages/mostrarTutorado';
import MostrarEstudios from './pages/estudios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mostrar/>,
  },
  {
    path: "/estudios/:idgrupo/:nombre",
    element: <MostrarEstudios/>,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;