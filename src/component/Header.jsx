import React from 'react';

function Header(props) {
    return (
        <div className="w-full h-28 flex shadow-xl">
            <div className="w-1/5 h-full flex  items-center "><p className="bg-amber-700 text-white p-2 ">JEMAW_X</p>
            </div>
            <div className="w-3/5 h-full flex justify-center items-center">
                <div className="w-full justify-center">
                    <input type="text" placeholder="search"
                           className="pl-5 text-xl  w-3/4 h-16 border-2 border-gray-200 shadow-sm rounded-3xl"/>
                    <button className="h-16 w-16 rounded-full bg-amber-700 text-white text-xl ml-4">+</button>
                </div>
            </div>
            <div className="w-1/5 h-full flex justify-center items-center ">
                <p className=" text-gray-900 text-xl">Logout</p>
            </div>
        </div>
    );
}

export default Header;