import { Link } from 'react-router';
import { Button } from '../../atoms/button';
import { IconHome } from '@/shared/assets/images/icon';

export const Breadcrumb = ({ parent, child }) => {
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb_list">
        <li className="breadcrumb_item"><Link to="/"><Button variant="transparent" size="icon"><IconHome /></Button></Link></li>
        {/* 홈 버튼은 어느 페이지에 있든 항상 보여줌 */}
        {parent.path !== "/"  &&
          <>
            <li className="breadcrumb_item"><Link to={parent.id}>{parent.label}</Link></li>
            {child && <li className="breadcrumb_item"><Link to={child.path}>{child.label}</Link></li>}
            {/* 2Depth는 있으면 보여주고 없으면 안 보여줌 */}
          </>
        }
      </ul>
    </nav>
  );
}
