import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
            <nav className="block w-full px-4 py-2 mx-auto bg-white dark:bg-slate-800 bg-opacity-90 sticky top-0 mb-16 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]" >
                <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800 max-w-screen-lg">
                    <Link to='/' className="mr-4 block cursor-pointer py-1.5 text-slate-800 font-bold text-xl">
                        React Movies
                    </Link>
                    <div className="flex flex-col">
                        <button
                        className="relative cursor-pointer ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button" onclick="displayMenu()">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                        </button>
                        <div className="hidden lg:block" id="menu">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <Link to="/" className="flex items-center text-slate-600 hover:text-orange-600 hover:underline font-semibold">Home</Link>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <Link to="/favorites" className="flex items-center text-slate-600 hover:text-orange-600 hover:underline font-semibold">Favorites</Link>
                            </li>

                        </ul>
                        </div>
                    </div>
        
                </div>
            </nav>
        </>
    )
}

export default Navbar;