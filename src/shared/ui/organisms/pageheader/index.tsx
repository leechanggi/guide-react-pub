import { useLocation } from 'react-router';
import { PageTitle } from "../../atoms/pagetitile";
import { Breadcrumb } from "../../molecules/breadcrumb";

export const PageHeader = ({ menuItems }) => {
  const { pathname } = useLocation();
  // useLocation은 React Router에서 현재 URL(주소) 정보를 가져오는 Hook

  let parent = null;
  let child = null;

  // 현재 경로와 일치하는 메뉴 항목을 탐색해 parent/child 결정
  for (const item of menuItems) {
    if (item.path === pathname) {
      // 1depth 메뉴가 현재 경로와 일치
      parent = item;
      break;
    }
    if (item.children) {
      // 2depth 메뉴에서 현재 경로 탐색
      const found = item.children.find(c => c.path === pathname);
      if (found) {
        parent = item;
        child = found;
        break;
      }
    }
  }

  return (
    <section className="gnb">
      <Breadcrumb parent={parent} child={child} />
      <PageTitle>{child.label}</PageTitle>
    </section>
  )
};