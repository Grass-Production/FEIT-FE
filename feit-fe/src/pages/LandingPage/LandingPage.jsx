import {Navbar} from '../../layouts';
import {useState, useEffect} from 'react';
import {HeroLandingPage, IntroduceLangdingPage, FeatureLangdingPage, StoryLandingPage} from './component';

export default function LandingPage() {
    // --- Try Set Query URL ---
    // const [Color, setColor] = useState('red');

    // const Colors = ['red', 'blue', 'white', 'black'];

    // useEffect(() => {
    //     window.history.pushState(null, '', `?color=${Color}`);
    // }, [Color]);

    // function handleClick(value) {
    //     SetCoLor(value);
    // }

    // function SetCoLor(value) {
    //     setColor(value);
    // }
    // --- Try Set Query URL ---

    return (
        <div className="">
            <Navbar />
            <div className=" p-120px">
                <HeroLandingPage />
                <IntroduceLangdingPage />
                <FeatureLangdingPage />
                <StoryLandingPage />
            </div>

            {/* Try Query URL */}
            {/* <div className="">
                {Colors.map((Color) => {
                    return (
                        <button key={Color} className=" bg-slate-400 p-12" onClick={() => handleClick(Color)}>
                            Choice {Color}
                        </button>
                    );
                })}
            </div> */}
        </div>
    );
}
