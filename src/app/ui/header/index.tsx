import { Button } from "@/shared/ui";
import { Link } from "react-router";
import { LogoBonce, LogoBLifeCare, LogoLg } from "@/shared/assets/images/logo";
import { IconPerson, IconArrowDown } from "@/shared/assets/images/icon";
import { useAuth } from '@app/context/AuthContext';

const Header = () => {
  const { admin, login } = useAuth();

  return (
    <>
      {
        admin
        ? (
          <header className="z-100 absolute flex justify-between w-full items-center h-17.5 px-7.5 bg-[#1C2536]">
            <Link to="/">
              <LogoBonce/>
            </Link>
            <nav className="flex items-center justify-end gap-10">
              {login ? (
                <>
                  <div className="flex items-center gap-2">
                    <LogoLg/>
                      <span className="text-white font-sm">관리자1(관리자)</span>
                  </div>
                  <Button variant="skyGrayLine" size="sm" round="rounded">로그아웃</Button>
                </>
              ):(
                <Button variant="colorLine" size="sm" round="rounded">로그인</Button>
              )}
            </nav>
          </header>
        ) : (
          <header className="z-100 absolute flex justify-between w-full items-center h-17.5 px-7.5 bg-[#F1F4F9]">
            <Link to="/">
              <LogoBLifeCare/>
            </Link>
            <Button variant="transparent"><IconPerson />{"김엔솔"} 님<IconArrowDown /></Button>
          </header>
        )
      }
    </>
  )
};

export default Header;
