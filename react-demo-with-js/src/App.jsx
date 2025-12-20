import { Route, Routes } from 'react-router-dom';
import Home from './components/basic/Home';
import Aboutus from './components/basic/Aboutus';
import Layout from './components/master/Layout';
import SidebarLayout from './components/master/SidebarLayout';
import ProductList from './components/basic/ProductList';
import ContactUs from './components/basic/ContactUs';

function App() {
  return (
    <Routes>
        {/* <Route element={<SidebarLayout />}> */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* optional default route */}
          <Route index element={<Home />} />
        </Route>
    </Routes>
  )
}

export default App
