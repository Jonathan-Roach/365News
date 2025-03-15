import React from "react"

function NavBar() {
    return (
        <nav className="bg-black border-b-3 border-gray-200">
            <div className="mx-auto px-4 text-md text-white">
                <div className="flex justify-between items-center py-3 px-10">

                    {/*Logo */}
                    <div>
                        <a className="flex items-center">
                        <svg className="h-10 w-10 mr-2 fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                        </svg>
                        <span className="text-2xl font-bold">365NEWS</span>
                        </a> 
                    </div>
 

                    {/* Primary Navigation Bar */}
                    <div className="hidden md:flex space-x-1 items-center font-semibold">
                        <div className="flex pr-5 space-x-1 items-center">
                            <span>Categories</span>
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                        <a href="/signup" className="bg-blue-500 rounded px-4 py-2 font-bold">Sign in</a>
                    </div>

                    {/* Mobile Hamburger*/}

                    

                </div>
            </div>

        </nav>
    )
}

export default NavBar