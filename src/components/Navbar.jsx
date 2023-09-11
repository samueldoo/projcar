import logo from "../assets/pngwing.com.png"


const Navbar = () => {
    return (
        <nav className="flex justify-between bg-[#132928] text-white px-10 py-5">
        <div className="w-10 hover:animate-bounce">
            <img src={logo} alt="" />
        </div>
        <div>
        <ul className="flex gap-5 hover:container">
            <li className="hover:cursor-pointer">
                Resume
            </li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Experience</li>
            <li className="hover:cursor-pointer">TechStack</li>
            <li className="hover:cursor-pointer">Projects</li>
            <li className="hover:cursor-pointer">Contacts</li>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar