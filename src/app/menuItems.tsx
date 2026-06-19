import IconHome from '@/shared/assets/images/icon/IconHome';
import IconService from '@/shared/assets/images/icon/IconService';
import IconMonitor from '@/shared/assets/images/icon/IconMonitor';
import IconFileCheck from '@/shared/assets/images/icon/IconFileCheck';
import IconMessage from '@/shared/assets/images/icon/IconMessage';
import IconSetting from '@/shared/assets/images/icon/IconSetting';
import PagesHome from '@/pages/home';
import PagePlaceholder from '@/pages/placeholder';

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
    element: <PagesHome />,
  },
  {
    id: 'service',
    label: '서비스 관리',
    icon: <IconService />,
    children: [
      { id: 'member', label: '회원관리', path: '/service/member', element: <PagePlaceholder label="회원관리" /> },
      { id: 'devices', label: '데이터 수집장치 현황', path: '/service/devices', element: <PagePlaceholder label="데이터 수집장치 현황" /> },
      { id: 'service-usage', label: '서비스 이용 현황', path: '/service/service', element: <PagePlaceholder label="서비스 이용 현황" /> },
      { id: 'partners', label: '제휴사 차량 관리', path: '/service/partners', element: <PagePlaceholder label="제휴사 차량 관리" /> },
      { id: 'model', label: '지원차종 관리', path: '/service/model', element: <PagePlaceholder label="지원차종 관리" /> },
    ],
  },
  {
    id: 'display',
    label: '전시 관리',
    icon: <IconMonitor />,
    children: [
      { id: 'display-one', label: '1 Depth', path: '/display/one', element: <PagePlaceholder label="전시 관리 1 Depth" /> },
      { id: 'display-two', label: '2 Depth', path: '/display/two', element: <PagePlaceholder label="전시 관리 2 Depth" /> },
    ],
  },
  {
    id: 'board',
    label: '게시판 관리',
    icon: <IconFileCheck />,
    children: [
      { id: 'board-one', label: '1 Depth', path: '/board/one', element: <PagePlaceholder label="게시판 관리 1 Depth" /> },
      { id: 'board-two', label: '2 Depth', path: '/board/two', element: <PagePlaceholder label="게시판 관리 2 Depth" /> },
    ],
  },
  {
    id: 'message',
    label: '메시지 관리',
    icon: <IconMessage />,
    children: [
      { id: 'message-one', label: '1 Depth', path: '/message/one', element: <PagePlaceholder label="메시지 관리 1 Depth" /> },
      { id: 'message-two', label: '2 Depth', path: '/message/two', element: <PagePlaceholder label="메시지 관리 2 Depth" /> },
    ],
  },
  {
    id: 'common',
    label: '공통 관리',
    icon: <IconSetting />,
    children: [
      { id: 'common-one', label: '1 Depth', path: '/common/one', element: <PagePlaceholder label="공통 관리 1 Depth" /> },
      { id: 'common-two', label: '2 Depth', path: '/common/two', element: <PagePlaceholder label="공통 관리 2 Depth" /> },
    ],
  },
];

export default menuItems;
