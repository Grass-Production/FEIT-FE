import { Header, Footer } from '../../layouts';

import {
    SlideLandingPage,
    IntroduceLangdingPage,
    FeatureLangdingPage,
    StoryLandingPage,
    TeamLandingPage,
} from './component';

export default function LandingPage() {
    return (
        <div className=" bg-white">
            <Header />
            <div className=" px-120px">
                <SlideLandingPage />
                <IntroduceLangdingPage />
                <FeatureLangdingPage />
                <StoryLandingPage />
                {/* <TeamLandingPage /> */}
            </div>
            <Footer />
        </div>
    );
}
