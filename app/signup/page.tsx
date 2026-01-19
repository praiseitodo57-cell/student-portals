'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sign() {
  const [formData, setFormData] = useState({
   firstName: "",
   lastName: "",
    password: "",
    discipline: "",
    year: "",
    course: "",
    semester: "",
    unit: "",
    profileImage:""
  }) 
  const router = useRouter()



   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    
    const newUsers = [...existingUsers, formData];

    
    localStorage.setItem("users", JSON.stringify(newUsers));

    
    router.push("/");
    alert("Account created successfully!");
  };

   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
}

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.password &&
    formData.discipline &&
    formData.year &&
    formData.course &&
    formData.semester &&
    formData.unit 

  return (
      <main className="bg-gradient-to-t flex min-h-screen bg-gray-100 w-full items-center justify-center md:p-2 ">
        <section className="rounded-md shadow-2xl  w-full overflow-hidden lg:max-w-screen-lg h-150">
          <div className="rounded-md w-full justify-center overflow-hidden md:flex h-200">
            <aside className="bg-gray-50 bg-opacity-50 text-primary p-8 hidden justify-center items-center md:flex  ">
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
              <form onSubmit={handleSubmit} noValidate className="flex flex-col h-full p-8 md:p-12 ng-untouched ng-pristine ng-invalid ">
                <h1 className="font-bold py- text-center text-lg pb-4 uppercase md:text-xl md:pb-8 lg:text-2xl">SIGN UP</h1>
                
                <div className="py-4 flex ">
                  
                    <div className="w-70">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mb-2 block">First Name</label>
                  <input id="email" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Please Enter Your First Name" className="border rounded bg-gray-50 text-sm w-full py-2 px-3 text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                  </div>
                  <div className="ml-10 w-70">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mt-2 block">Last Name</label>
                  <input id="email" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Please Enter Your Last Name" className="border rounded bg-gray-50 text-sm w-full py-2 px-3 text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                   </div>
                </div>
                
                <div className="pb-4 flex">
                    <div className="w-100">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mb-2 block">Password</label>
                  <input id="email" type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="****************" className="border rounded bg-gray-50 text-sm w-full py-2 px-3  text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                  </div>
                   <div className="ml-10 w-100">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mt-2 block">Discipline</label>
                  <input id="email" type="text" name="discipline" value={formData.discipline} onChange={handleChange} required placeholder=" E.g Bachelor of Arts in English" className="border rounded bg-gray-50 text-sm w-full py-2 px-3  text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                   </div>
                </div>
                
                <div className="pb-4 flex">
                    <div className="w-100">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mt-3 block">Year</label>
                  <input id="email" type="text" name="year" value={formData.year} onChange={handleChange} required placeholder=" " className="border rounded bg-gray-50 text-sm w-full py-2 px-3  text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                  </div>
                  <div className="ml-10 w-100">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mt-3 block">Courses</label>
                  <input id="email" type="text" name="course" value={formData.course} onChange={handleChange} required placeholder=" Number course you offer" className="border rounded bg-gray-50 text-sm w-full py-2 px-3  text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                   </div>
                </div>

                <div className="pb-4 flex">
                    <div className="w-100">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mt-3 block">Semester</label>
                  <input id="email" type="text" name="semester" value={formData.semester} onChange={handleChange} required placeholder="Enter Your Current Semester " className="border rounded bg-gray-50 text-sm w-full py-2 px-3  text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                  </div>
                  <div className="ml-10 w-100">
                  <label htmlFor="email" className="font-bold text-grey-darker text-sm mt-3 block">Units</label>
                  <input id="email" type="text" name="unit" value={formData.unit} onChange={handleChange} required placeholder=" " className="border rounded bg-gray-50 text-sm w-full py-2 px-3  text-gray-700 appearance-none focus:outline-none focus-within:border border-gray-300 ng-untouched ng-pristine ng-invalid"/>
                   </div>
                   
                </div>
                <div className="py-4">
                  <button disabled={!isFormValid} className={`w-full ${ isFormValid ? "bg-blue-300" : "bg-blue-100"}  font-medium hover:bg-primary md:px-8 px-4 py-2 rounded text-sm text-white uppercase w-full whitespace-nowrap `}>
                    <div className="flex max-w-screen-sm w-full gap-4 items-center justify-center p-1 ">Sign UP</div>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </main>
  );
}
