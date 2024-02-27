import {Navbar} from '../../layouts';

import {HeroLandingPage, IntroduceLangdingPage, FeatureLangdingPage} from './component';

export default function LandingPage() {
    return (
        <div className="">
            <Navbar />
            <div className=" p-120px">
                <HeroLandingPage />
                <IntroduceLangdingPage />
                <FeatureLangdingPage />
            </div>

            <h1>Landingpage</h1>
        </div>
    );
}
