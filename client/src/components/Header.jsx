import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, NavbarLink, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun} from "react-icons/fa";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import  {toggleTheme}  from "../redux/theme/themeSlice";
import { signoutSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const location = useLocation();
  const {currentUser} = useSelector(state => state.user);
  const  dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const searchTermFormUrl = urlParams.get('searchTerm');
    if(searchTermFormUrl){
      setSearchTerm(searchTermFormUrl);
    }
  }, [location.search]);
  const handleSignout = async()=>{
    try {
      const res = await fetch('/api/user/signout',{
        method:'POST',
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);

      }else {
        dispatch(signoutSuccess());
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm',searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }
  return (
    <Navbar className="border-b-2 bg-white">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 rounded-lg text-white">
          Talip{"'s"}
        </span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput type="text" placeholder="search" rightIcon={AiOutlineSearch} value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className="hidden lg:inline"/>
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch/>
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={()=> dispatch(toggleTheme())} >
          {theme === 'light' ? <FaSun/>:<FaMoon/>}
          
        </Button>
        {currentUser ? (

          <Dropdown arrowIcon={false} inline label={<Avatar alt="user avatar" img={currentUser.profilePicture}/>} rounded>
            <DropdownHeader>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">{currentUser.email}</span>
            </DropdownHeader>
            <Link to={'/dashboard?tab=profile'}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider/>
            <DropdownItem onClick={handleSignout}>Sign Out</DropdownItem>
          </Dropdown>
        ):
        (
          <Link to="/sign-in">
          <Button gradientDuoTone='purpleToBlue' pill>
            Sign In
          </Button>
          </Link>
          
        )}
        <Navbar.Toggle/>
      </div>
        <Navbar.Collapse>
          <NavbarLink active={path === "/"} as={"div"}>
            <Link to='/'>
              Home
            </Link>
          </NavbarLink>
          <NavbarLink active={path === "/about"} as={"div"}>
            <Link to='/about'>
              About
            </Link>
          </NavbarLink>
          <NavbarLink active={path === "/projects"} as={"div"}>
            <Link to='/projects'>
              Projects
            </Link>
          </NavbarLink>
        </Navbar.Collapse>
    </Navbar>
  );
}
