import React from 'react';
import { HiOutlineViewList, HiOutlineSearch } from 'react-icons/hi';
import { BsMicFill, BsBell} from 'react-icons/bs';
import { RiVideoAddLine} from 'react-icons/ri'
import YoutubeLogo from '../../img/youtube.png';
import Avatar from '../../img/avatar.jpg';
function Header(){
    return (
        <div className='Header'>
            <nav className='Header__navbar'>
                <ul className = 'Header__navbar-group'>
                    <li className = 'Header__navbar-item'>
                        <HiOutlineViewList className = 'Header__icon-item'/>
                    </li>
                    <li className = 'Header__navbar-item Header__logo'>
                       <img src={YoutubeLogo} alt="Youtube Logo" className = 'Header__logo-item'/>
                       <h1 className='Header__logo-text'>Youtube</h1>
                    </li>
                    <li>
                        
                    </li>
                </ul>

                <ul className = 'Header__navbar-group Header__navbar-search'>
                    <li className = 'Header__navbar-item Header__box-item'>
                            <input type="text" placeholder='Search' className ='Header__box-textField'/>
                            <label htmlFor="" className='Header__box-icon'>
                                <HiOutlineSearch/>
                            </label>
                    </li>
                    <li className = 'Header__navbar-item'>
                        <BsMicFill className = 'Header__icon-item'/>
                    </li>
                </ul>

                <ul className='Header__navbar-group'>
                    <li className = 'Header__navbar-item '>
                        <RiVideoAddLine className='Header__icon-item'/>
                    </li>
                    <li className = 'Header__navbar-item'>
                        <BsBell className='Header__icon-item'/>
                    </li>
                    <li className = 'Header__navbar-item '>
                        <img src={Avatar} alt="Avatar" className='Header__avatar-item'/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;