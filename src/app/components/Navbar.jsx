import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-center'>
          <ul className='flex justify-between w-1/2'>
            <li>
              home
            </li>
            <li>
              services
            </li>
            <li>
              about
            </li>

          </ul>
        </nav>
        </div>
    );
};

export default Navbar;