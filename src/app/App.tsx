import { BrowserRouter } from 'react-router';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import RouteComponent from '@app/routes';
import IconHome from '@/shared/assets/images/icon/IconHome';
import IconService from '@/shared/assets/images/icon/IconService';
import IconMonitor from '@/shared/assets/images/icon/IconMonitor';
import IconFileCheck from '@/shared/assets/images/icon/IconFileCheck';
import IconMessage from '@/shared/assets/images/icon/IconMessage';
import IconSetting from '@/shared/assets/images/icon/IconSetting';

import './styles/global.css';
import SideBar from './ui/sidebar';

const menuItems = [
  {
    id: 'home',
    label: '메인',
    icon: <IconHome />,
    to: '/',
  },
  {
    id: 'service',
    label: '서비스 관리',
    icon: <IconService />,
    children: [
      { id: 'member', label: '회원관리', to: '/service/member' },
      { id: 'devices', label: '데이터 수집장치 현황', to: '/service/devices' },
      { id: 'service', label: '서비스 이용 현황', to: '/service/service' },
      { id: 'partners', label: '제휴사 차량 관리', to: '/service/partners' },
      { id: 'model', label: '지원차종 관리', to: '/service/model' },
    ],
  },
  {
    id: 'display',
    label: '전시 관리',
    icon: <IconMonitor />,
    children: [
      { id: 'one', label: '1 Depth', to: '/display/one' },
      { id: 'two', label: '2 Depth', to: '/display/two' },
    ],
  },
  {
    id: 'board',
    label: '게시판 관리',
    icon: <IconFileCheck />,
    children: [
      { id: 'one', label: '1 Depth', to: '/board/one' },
      { id: 'two', label: '2 Depth', to: '/board/two' },
    ],
  },
  {
    id: 'message',
    label: '메시지 관리',
    icon: <IconMessage />,
    children: [
      { id: 'one', label: '1 Depth', to: '/message/one' },
      { id: 'two', label: '2 Depth', to: '/message/two' },
    ],
  },
  {
    id: 'common',
    label: '공통 관리',
    icon: <IconSetting />,
    children: [
      { id: 'one', label: '1 Depth', to: '/common/one' },
      { id: 'two', label: '2 Depth', to: '/common/two' },
    ],
  },
];


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <div className="container">
          <SideBar menuItems={menuItems}/>
          <RouteComponent menuItems={menuItems} />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
