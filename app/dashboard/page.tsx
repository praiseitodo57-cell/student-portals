'use client'
import Image from "next/image";
import { BookOpenCheck, BookOpenText, BookX, CreditCard, FileBox, FileUser, Grid2x2, House, LayoutGrid, LogOut, Newspaper, NotebookPen, RectangleEllipsis, User, UserCircle, Vote  } from "lucide-react";
import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function (){
    const router = useRouter();
  const [user, setUser] = useState<any>(null);
    const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem ("currentUser");
  

    if (!isLoggedIn || !storedUser) {
      router.push("/"); 
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  const router1 = useRouter();
  const [user1, setUser1] = useState<any>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("currentUser");

    if (!isLoggedIn || !storedUser) {
      router.push("/"); 
    } else {
      setUser1(JSON.parse(storedUser));
    }
  }, [router1]);

    const logout = (e) => {
    e.preventDefault(); 
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    router.push("/"); 
  }

  if (!user) return <p>Loading...</p>;

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedUser = {
        ...user,
        profileImage: reader.result,
      };

      setUser(updatedUser);
      setUser1(updatedUser);

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      // ✅ Update user inside users array
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const updatedUsers = users.map((u: any) =>
        u.firstName === updatedUser.firstName ? updatedUser : u
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    reader.readAsDataURL(file);
  };

  if (!user) return null;

    return(
        <div>
            <main className="flex flex-col h-screen max-h-screen bg-primary/5 overflow-hidden pb-5">
              {user1 &&(
                
              <header className="bg-white shadow-xl flex flex-wrap py-2 px-4 items-center justify-between md:px-8">
                 
                <div className="block pb-2 md:hidden">
                    <nav className="block">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-500 w-10 h-10 relative focus:outline-none"
                        >
                        <span className="sr-only">Open main menu</span>

                        <div className="block w-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span className="block absolute h-0.5 w-5 bg-current"></span>
                            <span className="block absolute h-0.5 w-5 bg-current mt-1.5"></span>
                            <span className="block absolute h-0.5 w-5 bg-current mt-3"></span>
                        </div>
                     </button>
                    </nav>
                </div>
                <h1 className="flex-shrink-0 leading-none">
                    <a  href="/" className="flex itmes-center">
                      <Image
                        src="/unilag.jpeg" 
                        width={37}        
                        height={37}       
                        alt="logo"
                        className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="font-semibold text-blue-700 ml-2 uppercase text-lg">
                            <div className="hidden md:block mt-2">University of Lagos</div>
                            <div className="md:hidden">unilag</div>
                        </div>
                    </a>
                </h1>
                
                <div className="flex flex-shrink-0 gap-4 items-center">
                    <div className="group">
                        
                            
                        <div className="rounded-lg flex py-1 px-2 gap-4 items-center hover:bg-primary/5">
                           {user.profileImage ? (
                            <img
                                src={user.profileImage}
                                className="w-11 h-11 rounded-full  mx-auto object-cover"
                            />
                            ) : (
                            <div className="w-12 h-12 rounded-full mx-auto bg-gray-300 flex items-center justify-center">
                                <UserCircle/>
                            </div>
                            )}
                          
                          <div className="font-medium text-xs hidden md:block">{user1.lastName}</div>
                         <section role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1} className="bg-white border border-gray-300 rounded-md shadow-2xl ring-black text-sm origin-top-right right-2 w-56 z-50 absolute hidden focus:outline-none group-hover:inline-block mt-75">
                            <a tabIndex={-1} role="menuitem" id="user-profile" href="/bio-data" className="border-b bg-gray-100 p-2 block hover:bg-primary/5 hover:text-primary">
                            {user1.profileImage ? (
                            <img
                                src={user1.profileImage}
                                className="border border-gray-300 rounded-full object-cover mx-auto  h-20 w-20"
                            />
                            ) : (
                            <div className="w-12 h-12 rounded-full mx-auto bg-gray-300 flex items-center justify-center">
                                <UserCircle/>
                            </div>
                            )}
                            <div className="font-medium text-center text-xs truncate">
                                
                            <div className="pt-2 text-2xl text-blue-500">{user1.firstName} {user1.lastName}</div>
                             </div>
                            
                                <div className="pt-1 text-blue-500">[09909090909]</div>
                                
                            
                            </a>
                            <input
                                type="file"
                                accept="image/*"
                                id="profileImage"
                                className="hidden"
                                onChange={handleImageChange}
                                />
                                 <div className="text-sm material-icons relative top-7 left-2"><FileUser/></div>
                                
                                <label
                                htmlFor="profileImage"
                                className="flex text-left text-sm w-full p-2 text-gray-700 gap-4 hover:bg-gray-100 ml-7 cor    sur pointer"
                                >
                                Choose File
                                </label>
                            <a tabIndex={-1} href="/reset-passworld" className="flex text-left text-sm w-full p-2 text-gray-700 gap-4 hover:bg-gray-100 ">
                             <div className="text-sm material-icons"><Newspaper/></div>
                             <div>News & Update</div>
                            </a>
                            <div className="border-t">
                                <button  className="flex text-left text-sm w-full p-2 text-gray-700 gap-4 block hover:bg-gray-100">
                                    <span className="text-sm material-icons"><LogOut/></span>
                                    <div>Logout</div>
                                </button>
                            </div>
                        </section>
                         
                        </div>
                       
                    </div>
                     
                </div>
                
              </header>
               )}

              <section className="flex-grow h-full justify-between flex">
                <nav className="overflow-hidden md:h-full">
                    <nav className="text-sm overflow-hidden">
                        <ul className="pl-0">
                            
                            <div className={`p-2 absolute bg-blue-300 text-white md:bg-transparent absolute md:relative h-screen  ${menuOpen ? "block" : "hidden"} md:block`}>
                                <li className="block w-50 ">
                                    <a href="" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><LayoutGrid /></div>
                                       <div className="whitespace-nowrap block mt-1">Dashboard</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><FileUser/></div>
                                       <div className="whitespace-nowrap block mt-1">Student Data</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><CreditCard/></div>
                                       <div className="whitespace-nowrap block mt-1">Payments</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><BookOpenText /></div>
                                       <div className="whitespace-nowrap block mt-1">Course Registration</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><BookOpenCheck /></div>
                                       <div className="whitespace-nowrap block mt-1">Results</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"> <BookX/></div>
                                       <div className="whitespace-nowrap block mt-1">Appointment</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><Vote /></div>
                                       <div className="whitespace-nowrap block mt-1">Election</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><House /></div>
                                       <div className="whitespace-nowrap block mt-1">Accommodation</div>
                                    </a>
                                </li>
                                <li className="block">
                                    <a href="/" className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><NotebookPen /></div>
                                       <div className="whitespace-nowrap block mt-1">Student Application </div>
                                    </a>
                                </li>

                                <li className="block">
                                    <button onClick={logout} className="flex flex-row p-3 text-white md:text-gray-600 gap-1 duration-300 items-center hover:text-blue-200 focus:bg-blue-100  md:border-0 md:border-r-2 border-white md:!border-blue-100 p-5">
                                       <div className="text-lg material-icons inline-block"><LogOut /></div>
                                       <div className="whitespace-nowrap block mt-1">Logout </div>
                                    </button>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </nav>
                <main className="h-full max-h-full flex-1 pb-28 pt-2  px-3 sm:px-4 md:px-6 overflow-y-auto md:pb-20">
                    <div className="flex flex-col pb-4 gap-4">
                         {user &&(
                        <section className="bg-blue-300 rounded-md text-white p-4 lg:p-6 w-full lg:w-240">
                            <div className="font-black text-lg md:text-xl">{user.firstName} {user.lastName}</div>
                            <div className="flex flex-col gap-8 justify-between md:flex-row md:gap-4 md:items-end">
                                <div className="pt-4">
                                    <div className="font-bold text-sm pb-1">{user.discipline}</div>
                                    <div className="text-xs uppercase">english</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-center">
                                        <div className="font-bold text-sm pb-1 capitalize">{user.year}</div>
                                        <div className="text-sm">Year</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-sm pb-1 capitalize">{user.semester}</div>
                                        <div className="text-sm">Semester</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-sm pb-1 capitalize">{user.course}</div>
                                        <div className="text-sm">Courses</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-sm pb-1 capitalize">{user.unit}</div>
                                        <div className="text-sm">Units</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        )}
                        <section className="grid gap-3 pt-3 pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full lg:w-240">
                            <div className="col-span-2 sm:grid-cols-1">
                                <div className="bg-white rounded-md cursor-pointer h-full border-2 text-left p-6 transform duration-200 group hover:boder border-blue-400 hover:scale-105 pd-2">

                                  <Image
                                    src="/document.png" 
                                    width={16}        
                                    height={16}       
                                    alt="logo"
                                    className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 w-16 h-16"
                                  />
                                    <div className="font-medium text-sm pt-2 pb-1 capitalize md:text-lg text-gray-500">Coures</div>
                                    <div className="text-xs text-gray-500">
                                        <span>&nbsp; 0/123 completed</span>
                                    </div>
                                    <div className="rounded-md bg-blue-200 h-1.5 mt-3 pb-0"></div>
                                </div>
                            </div>

                            <div className="bg-white rounded-md cursor-pointer h-full border-2 text-left p-6 transform duration-200 group hover:border border-blue-300 hover:scale-105 pb-2">
                                <Image
                                    src="/refresh.png" 
                                    width={16}        
                                    height={16}       
                                    alt="logo"
                                    className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 w-16 h-16"
                                  />
                                  <div className="font-medium text-sm pt-2 pb-1 capitalize md:text-lg text-gray-500">Refreach Payment Status</div>
                                  <div className="text-xs text-gray-500"></div>
                            </div>

                            <div className="bg-white rounded-md cursor-pointer h-full border-2 text-left p-6 transform duration-200 group hover:border border-blue-300 hover:scale-105 pb-2">
                                <Image
                                    src="/card.png" 
                                    width={16}        
                                    height={16}       
                                    alt="logo"
                                    className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 w-16 h-16"
                                  />
                                  <div className="font-medium text-sm pt-2 pb-1 capitalize md:text-lg text-gray-500">Payment</div>
                                  <div className="text-xs text-gray-500"></div>
                            </div>

                            <div className="bg-white rounded-md cursor-pointer h-full border-2 text-left p-6 transform duration-200 group hover:border border-blue-300 hover:scale-105 pb-2">
                                <Image
                                    src="/homework.png" 
                                    width={16}        
                                    height={16}       
                                    alt="logo"
                                    className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110 w-16 h-16"
                                  />
                                  <div className="font-medium text-sm pt-2 pb-1 capitalize md:text-lg text-gray-500">Application</div>
                                  <div className="text-xs text-gray-500"></div>
                            </div>
                        </section>

                        <aside className="bg-white border border-gray-300 min-h w-70 overflow-y-auto hidden lg:block absolute left-303 h-160 rounded-xl">
                                <section>
                                    <div className="pt-2">
                                        <div>
                                            <a href="/courses" className="border border-gray-400 rounded-lg mx-4 text-sm mb-2 py-3 px-4 duration-300 block hover:border-blue-500">
                                              <div className="text-blue-900 ">Complete your coures registration</div>
                                              <div className="text-xs text-blue-900 py-1">3 Days Left</div>
                                              <div className="rounded-md bg-blue-200 h-1.5 mt-1.5">
                                                <div className="bg-blue-300 rounded-md h-full w-3.33333%"></div>
                                              </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/courses" className="border border-gray-400 rounded-lg mx-4 text-sm mb-2 py-3 px-4 duration-300 block hover:border-blue-500">
                                              <div className="text-blue-900 ">Complete your payment</div>
                                              <div className="text-xs text-blue-900 py-1">3 Days Left</div>
                                              <div className="rounded-md bg-blue-200 h-1.5 mt-1.5">
                                                <div className="bg-blue-300 rounded-md h-full w-3.33333%"></div>
                                              </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/courses" className="border border-gray-400 rounded-lg mx-4 text-sm mb-2 py-3 px-4 duration-300 block hover:border-blue-500">
                                              <div className="text-blue-900 ">Edit your course registration</div>
                                              <div className="text-xs text-blue-900 py-1">10 Days Left</div>
                                              <div className="rounded-md bg-blue-200 h-1.5 mt-1.5">
                                                <div className="bg-blue-300 rounded-md h-full w-3.33333%"></div>
                                              </div>
                                            </a>
                                        </div>
                                        <div></div>
                                    </div>
                                </section>
                            </aside>
                    </div>
                </main>
              </section>
            
            </main>
        </div>
    )
}