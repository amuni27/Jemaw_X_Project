import React from 'react';
import Header from "../component/Header.jsx";
import TruthOrDare from "../component/TruthOrDare.jsx";

function Home(props) {
    return (
        <>
            <Header/>
            <div className="w-full flex mt-10">
                <div className="w-1/5"></div>
                <div className="w-3/5">
                    <TruthOrDare name="Amanuel" question="ከራስ ጋር ጭፈራ መጨፈር" qustionType="Dare(Medium)"/>
                    <TruthOrDare name="Mengesha" question="በጩህት መሳቅ" qustionType="Dare(Medium)"/>
                    <TruthOrDare name="kal" question="እንደ ህፃን ልጅ መሳቅ" qustionType="Dare(Medium)"/>
                </div>
                <div className="w-1/5"></div>
            </div>
        </>
    );
}

export default Home;