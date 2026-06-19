import { Link, useLocation } from "react-router";
import cn from '@shared/lib/cn';
import { useState } from "react";
import IconArrowDown from "@/shared/assets/images/icon/IconArrowDown";
import IconArrowRight from "@/shared/assets/images/icon/IconArrowRight";

const SideBar = ({ menuItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const location = useLocation();

  const handleToggle = () => {
    setIsExpanded(prev => {
      if (prev) setOpenMenuId(null);
      return !prev;
    })
  };

  const handleMenuClick = (id: string) => {
    setOpenMenuId(prev => (prev === id ? null : id));
  };

  return (
    <aside 
      className={cn(
      "absolute top-0 flex flex-col h-screen pt-21.5 px-3.5 bg-[#f1f4f9] shrink-0",
      "transition-[width] duration-300 ease-in-out",
      isExpanded ? "w-60" : "w-20"
    )}
    >
      {/* s: 토글 버튼 */}
      <button
        onClick={handleToggle}
        aria-label={isExpanded ? '메뉴 접기' : '메뉴 펼치기'}
        className={cn(
          `absolute top-24.25 flex items-center justify-center w-5 h-8 bg-[#f9f9fb] border border-[#e6e7ee]`,
          `${isExpanded? "right-0 rounded-tl-md rounded-bl-md":"-right-5 rounded-tr-md rounded-br-md"}`
        )}
      >
        <span className={cn(
          'transition-transform duration-300',
          isExpanded && 'rotate-180' 
        )}>
          <IconArrowRight/>
        </span>
      </button>
      {/* e: 토글 버튼 */}

      <nav className="flex flex-col gap-y-2">
        {menuItems.map( item => {
          const isMenuOpen = openMenuId === item.id;
          const isActive = item.path
            ? location.pathname === item.path
            : (item.children?.some(c => c.path === location.pathname) ?? false);

          return (
            <div key={item.id}>
              {/* 1Depth */}
              {item.children ? (
                // 2Depth가 있는 것 (아코디언 버튼 o)
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={cn(
                    "flex justify-center items-center w-full h-13.5 transition-colors",
                    isExpanded ? 'gap-3 px-3.5' : 'justify-center',
                    isActive && "bg-white rounded-lg",
                  )}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {isExpanded && (
                    // 아코디언 버튼을 클릭했을 때
                    <>
                      <span className="flex-1 text-base text-left ">{item.label}</span>
                      <span className={cn(
                        "shrink-0 transition-transform duration-200",
                        isMenuOpen ? "rotate-180 text-[#333]" : "text-[#999]"
                      )}>
                        <IconArrowDown/>
                      </span>
                    </>
                  )}
                </button>
              ) : (
                // 2Depth가 없는 것 (아코디언 버튼 x)
                <Link
                  to={item.path ?? '/'}
                  className={cn(
                    "flex justify-center items-center w-full h-13.5 transition-color",
                    isActive
                      ? "bg-white rounded-lg"
                      : "",
                    isExpanded
                      ? "bg-[#F1F4F9] justify-start px-3.5 gap-x-3"
                      : "",
                  )}
                >
                  <span>{item.icon}</span>
                  {isExpanded && (
                    <span>{item.label}</span>
                  )}
                </Link>
              )}
              {/* 2Depth 아코디언 */}
              {isExpanded && item.children && (
                <div 
                  className={cn("overflow-hidden transition-[max-height] duration-300 ease-in-out",
                  isMenuOpen ? "max-h-60" : "max-h-0")}
                >
                  {item.children.map(child => {
                    const isChildActive = location.pathname === child.path;

                    return (
                      <Link
                        key={child.id}
                        to={child.path ?? '/'}
                        className={cn(
                          "flex items-center pl-[48px] pr-5 py-2.5 rounded-lg text-sm transition-colors",
                          isChildActive 
                          ? "bg-white text-[#0582F0]"
                          : "text-[#333] hover:bg-[#E6E9F0] hover:text-[#1A94FF]"
                        )}
                      >
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  );
}

export default SideBar;