import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import RouteComponent from '@app/routes';

import './styles/global.css';

const App = () => {
  return (
    <>
      <Header />
      <RouteComponent />
      <Footer />
    </>
  );
};

export default App;
