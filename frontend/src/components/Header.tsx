import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useGetMyUser } from "@/api/MyUserApi";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  // const {currentUser, isLoading} = useGetMyUser();
  const { logout } = useAuth0();

  return (
    <div className="border-b-2 border-b-gray-950 py-6">
      <div className="justify-between items-center inline-block">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-white mx-10"
        >
          AcadVault
        </Link>
      </div>
      
      <div className="flex float-right justify-between items-center gap-6 mx-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex gap-1 items-center justify-center ">
              <p className="text-white border-0">Hello {user?.name}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="rounded-full border-[1px] size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  to="/user-profile"
                  className="flex bg-white items-center font-bold hover:text-slate-700"
                >
                  User Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="course/new"
                  className="flex bg-white items-center font-bold hover:text-slate-700"
                >
                  Create Course
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/material"
                  className="flex bg-white items-center font-bold hover:text-slate-700"
                >
                  My Material
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/material/statusPending"
                  className="flex bg-white items-center font-bold hover:text-slate-700"
                >
                  Status Pending Material 
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/material/new"
                  className="flex bg-white items-center font-bold hover:text-slate-700"
                >
                  Upload Material
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex bg-white items-center font-bold hover:text-slate-700"
              onClick={() => {
                logout();
              }}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex float-right justify-between items-center gap-6">
        <Link
          to="/announcement"
          className="flex gap-1 items-center justify-center text-white font-bold"
        >
          Announcements
        </Link>
      </div>
    </div>
  );
};

export default Header;
