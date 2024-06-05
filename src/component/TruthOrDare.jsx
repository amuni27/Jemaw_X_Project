import React from 'react';
import ManIcon from "../assets/man_icon.png"

function TruthOrDare({name, question, qustionType}) {
    return (
        <div className="w-3/4 h-40 mt-6 border-2 border-gray-200 rounded-3xl bg-gray-50 shadow-xl flex-row">
            <div className="w-full h-1/3 flex  ">
                <div className="w-1/3 h-full flex items-center">
                    <img className="bg-amber-700 w-12 h-12 rounded-3xl ml-4 " src={ManIcon} alt=""/>
                    <span className="ml-2 text-lg">{name}</span>
                </div>
                <div className="w-2/3 h-full flex justify-end items-center mr-5">
                    <p className="text-lg">{qustionType}</p>
                </div>

            </div>
            <div className="w-full h-1/3  flex justify-center items-center text-3xl">{question} </div>
            <div className="w-full h-1/3  flex justify-end items-center">
                <button className="text-xl p-2 pl-8 pr-8 bg-amber-700 text-white rounded-3xl mr-5">Rate</button>
            </div>
        </div>
    );
}

export default TruthOrDare;