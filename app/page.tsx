'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {

 const router = useRouter();
  const [loginData, setLoginData] = useState({ firstName: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const matchedUser = users.find(
      (user: any) =>
        user.firstName === loginData.firstName &&
        user.password === loginData.password
    );

    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    } else {
      setError("Invalid login details");
    }
  };


  return (
      <main className="bg-gradient-to-t flex min-h-screen bg-gray-100 w-full items-center justify-center md:p-2 ">
        <section className="rounded-md shadow-2xl  w-full overflow-hidden lg:max-w-screen-lg h-150">
          <div className="rounded-md w-full justify-center overflow-hidden md:flex h-200">
            <aside className="bg-gray-50 bg-opacity-50 text-primary p-8 hidden justify-center items-center md:flex md:w-1/3 lg:w-1/2">
              <div className="bg-contain bg-center bg-no-repeat bg-opacity-50 h-64 text-white w-64 mb-60">
                <Image
                    src="/unilag.jpeg" 
                    width={400}        
                    height={400}       
                    alt="Picture of the author"
                     className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
              </div>
            </aside>
            <section className="bg-white flex-grow h-screen overflow-y-auto md:h-full ">
              <form onSubmit={handleLogin} noValidate className="flex flex-col h-full p-8 md:p-12 ng-untouched ng-pristine ng-invalid ">
                <h1 className="font-bold py- text-center text-lg pb-4 uppercase md:text-xl md:pb-8 lg:text-2xl">Log in</h1>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="py-4">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mb-2 block">Matric/Application number</label>
                  <input id="email" type="text" name="firstName" value={loginData.firstName || ""} onChange={handleChange} required placeholder="Matric/Application number" className="border rounded bg-gray-50 text-sm w-full py-2 px-3 text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                </div>
                <div className="text-xs text-error-dark italic relative bottom-2 mb-3">Please enter your Matric or Application number</div>
                <div className="pb-4">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mb-2 block">Password</label>
                  <input id="email" type="text" name="password" value={loginData.password || ""} onChange={handleChange} required placeholder="****************" className="border rounded bg-gray-50 text-sm w-full py-2 px-3 pt-3 text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                  <Link href="/signup">
                  <div className="text-sm text-red-500 italic mt-5">Please enter a password.</div>
                   </Link>
                </div>
                <div className="text-right">
                  <a href="/forgot-password" className="font-bold text-sl text-blue-600 inline-block align-baseline hover:text-primary-dark hover:underline">Forgot Password?</a>
                </div>
                <div className="py-4">
                  <button className="w-full bg-blue-300  font-medium hover:bg-primary md:px-8 px-4 py-2 rounded text-sm text-white uppercase w-full whitespace-nowrap ">
                    <div className="flex max-w-screen-sm w-full gap-4 items-center justify-center p-1 ">Sign In</div>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </main>
      
  );
}

