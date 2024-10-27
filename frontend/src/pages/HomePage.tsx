import CategoryCards from "@/components/CategoryCards";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const categories = [
  { code: "CS", title: "Computer Science" },
  { code: "IT", title: "Information Technology" },
  { code: "EL", title: "Electronics" },
  { code: "CT", title: "Communication Theory" },
  { code: "SC", title: "Science" },
  { code: "IE", title: ".." },
  { code: "HM", title: "Humanities" },
  { code: "MC", title: ".." },
  { code: "IC", title: "Information and Communication" },
  { code: "PC", title: "Project" },
];

const HomePage = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className="flex flex-col min-h-screen bg-slate-900 bg-cover min-w-screen">
          <Header />
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-1 min-w-[45%] lg:min-w-[30%]"
              >
                <CategoryCards
                  code={category.code}
                  title={category.title}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen bg-slate-900">
          <div className="flex flex-col flex-1 items-center justify-center">
            <h1 className="text-[90px] font-bold text-white">AcadVault</h1>
            <p className="block text-[22px] text-white">
              One-Stop Repository for all the Acad Needs
            </p>
            <div className="m-9">
              <Button
                onClick={() => {
                  loginWithRedirect();
                }}
                className="hover:bg-purple-700 text-xl px-8 py-5 mx-4 rounded-xl border-purple-700 border-[1px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
                <p className="pl-2">Login</p>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
