import { Route, Routes } from 'react-router-dom';
import Home from './components/basic/Home';
import Aboutus from './components/basic/Aboutus';
import Layout from './components/master/Layout';
import SidebarLayout from './components/master/SidebarLayout';
import ProductList from './components/basic/ProductList';
import ContactUs from './components/basic/ContactUs';
import Demo1 from './components/demo/Demo1';
import Notfound from './components/master/Notfound';
import Counter from './components/demo/Counter';
import UserRegistrationForm from './components/demo/UserRegistrationForm';

function App() {
  return (
    <Routes>
        {/* <Route element={<SidebarLayout />}> */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/demo1" element={<Demo1 />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/registerform" element={<UserRegistrationForm />} />

          {/* optional default route */}
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Route>
    </Routes>
  )
}

export default App
