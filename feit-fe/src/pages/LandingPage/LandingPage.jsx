import { Header } from '../../layouts';

import {
    HeroLandingPage,
    IntroduceLangdingPage,
    FeatureLangdingPage,
    StoryLandingPage,
    TeamLandingPage,
} from './component';

export default function LandingPage() {
    return (
        <div className="">
            <Header />
            <div className=" p-120px">
                <HeroLandingPage />
                <IntroduceLangdingPage />
                <FeatureLangdingPage />
                <StoryLandingPage />
                <TeamLandingPage />
            </div>
        </div>
    );
}
