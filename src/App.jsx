import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Layout from "./layout/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
     
        <Route path="/" element={<Homepage />} />

        <Route path="/Aboutus" element={<Aboutus />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/projects" element={<Projects />} />
       </Route>
    )
  );

  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;