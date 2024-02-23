
import { Outlet } from 'react-router-dom';
import Nav from '../ui/Nav';
import Brand from '../ui/Brand';
import Footer from '../ui/Footer';
import LoginNav from '../ui/LoginNav';

function AppLayout() {


  return (
    <div className=" ">
      <div className=" " >
        <div className="backdrop-blur-xl bg-white/30 sticky top-8 z-50 sm:mx-4 mx-8 sm:rounded-full rounded-2xl ">

          <div className=" text-neutral-800 flex justify-between items-center p-4 shadow-md sm:rounded-full rounded-2xl">
            <Brand />
            <div className="hidden sm:block">
              <Nav />
            </div>

            <LoginNav />
          </div>
        </div>

        <div className="overflow-auto">
          <main className="">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
