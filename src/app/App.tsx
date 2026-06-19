import { BrowserRouter, Routes, Route } from 'react-router';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import Navi from './ui/navi';
import menuItems from './menuItems';
import { AuthProvider } from './context/AuthContext';

import './styles/global.css';

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Header />
      <div>
        <div className="container">
          <Navi menuItems={menuItems} />
          <Routes>
            {menuItems.flatMap(item =>
              item.children
                ? item.children.map(child => (
                    <Route key={child.id} path={child.path} element={child.element} />
                  ))
                : [<Route key={item.id} path={item.path} element={item.element} />]
            )}
          </Routes>
          
        </div>
      </div>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
