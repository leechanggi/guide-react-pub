import { Routes, Route } from 'react-router';
import HomePage from '@/pages/home';
import PagesCategoryEngineering from '@/pages/category/engineering';
import PagesCategoryDesign from '@/pages/category/design';
import PagesArticle from '@pages/article';
import PagesNotFound from '@/pages/notfound';

const RouteComponent = ({ menuItems }) => {
  const flatRoutes = menuItems
    .flatMap(item => item.children ?? [item])
    .filter(r => r.element && r.path);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='category'>
        <Route path='engineering' element={<PagesCategoryEngineering />} />
        <Route path='design' element={<PagesCategoryDesign />} />
      </Route>

      <Route path='article/:articleId' element={<PagesArticle />} />

      {flatRoutes.map(route => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}

      <Route path='*' element={<PagesNotFound />} />
    </Routes>
  );
};

export default RouteComponent;
