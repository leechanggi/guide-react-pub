import { IconHome, IconService, IconMonitor, IconFileCheck, IconMessage, IconSetting } from '@/shared/assets/images/icon';
import HomePage from '@/pages/home';
import Board from '@/pages/board';
import { ServicePage } from '@/pages/category/service';

export type MenuItem = {
  id: string;
  label: string;
  path?: string;
  element?: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: '메인',
    icon: <IconHome />,
    path: '/',
    element: <HomePage/>,
  },
  {
    id: 'service',
    label: '서비스 관리',
    path: '/service',
    icon: <IconService />,
    children: [
      { id: 'member', label: '회원관리', path: '/service/member', element: <ServicePage /> },
      { id: 'devices', label: '데이터 수집장치 현황', path: '/service/devices', element: <ServicePage /> },
      { id: 'service-usage', label: '서비스 이용 현황', path: '/service/service', element: <ServicePage /> },
      { id: 'partners', label: '제휴사 차량 관리', path: '/service/partners', element: <ServicePage /> },
      { id: 'model', label: '지원차종 관리', path: '/service/model', element: <ServicePage /> },
    ],
  },
  {
    id: 'display',
    label: '전시 관리',
    path: '/dispaly',
    icon: <IconMonitor />,
    children: [
      { id: 'display-one', label: '1 Depth', path: '/display/one', element: <ServicePage /> },
      { id: 'display-two', label: '2 Depth', path: '/display/two', element: <ServicePage /> },
    ],
  },
  {
    id: 'board',
    label: '게시판 관리',
    path: '/board',
    icon: <IconFileCheck />,
    children: [
      { id: 'board-one', label: '공지사항', path: '/board/one', element: <Board/> },
      { id: 'board-two', label: '2 Depth', path: '/board/two', element: <ServicePage /> },
    ],
  },
  {
    id: 'message',
    label: '메시지 관리',
    path: '/message',
    icon: <IconMessage />,
    children: [
      { id: 'message-one', label: '1 Depth', path: '/message/one', element: <ServicePage /> },
      { id: 'message-two', label: '2 Depth', path: '/message/two', element: <ServicePage /> },
    ],
  },
  {
    id: 'common',
    label: '공통 관리',
    path: '/common',
    icon: <IconSetting />,
    children: [
      { id: 'common-one', label: '1 Depth', path: '/common/one', element: <ServicePage /> },
      { id: 'common-two', label: '2 Depth', path: '/common/two', element: <ServicePage /> },
    ],
  },
];

export default menuItems;
