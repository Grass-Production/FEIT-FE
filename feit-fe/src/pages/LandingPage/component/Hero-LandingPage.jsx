import { Button } from '../../../components';

export const HeroLandingPage = () => {
    return (
        <div>
            <div className=" mb-24">
                <div className="mb-10 text-center flex flex-col justify-center items-center">
                    <h1 className=" text-Dmd mb-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam beatae ullam iste numquam
                        corrupti repellat animi dolorem, doloremque, voluptatibus dolor ipsa et rerum expedita, eaque
                        deserunt vero! Sunt, fugit eius.
                    </h1>
                    <h2 className=" text-center text-Hsm mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga alias illum doloribus ipsam
                        sapiente cumque facilis voluptatibus fugit exercitationem harum, hic autem magnam maxime odit
                        facere! Aspernatur consequatur debitis aliquid!
                    </h2>
                    <Button title="Khám phá" className=" w-64" />
                </div>
                <div className=" flex gap-8 h-[40vh]">
                    <div className=" w-full bg-red-300">ds</div>
                    <div className=" w-full bg-red-300">ds</div>
                    <div className=" w-full bg-red-300">ds</div>
                    <div className=" w-full bg-red-300">ds</div>
                </div>
            </div>
        </div>
    );
};
export const HeroLandingPageLoading = () => {
    return (
        <div className=" mb-24">
            <div className="mb-10 text-center flex flex-col justify-center items-center">
                <div className=" text-Dmd p-10 w-full bg-gray-200 animate-pulse rounded-lg mb-8"></div>
                <div className=" text-Dmd p-10 w-[90%] bg-gray-200 animate-pulse rounded-lg mb-8"></div>

                <div className=" text-Dmd p-5 w-[20%] bg-gray-200 animate-pulse rounded-lg mb-8"></div>
            </div>
            <div className=" flex gap-8 h-[40vh]">
                <div className=" w-full bg-gray-200 animate-pulse rounded-lg"></div>
                <div className=" w-full bg-gray-200 animate-pulse rounded-lg"></div>
                <div className=" w-full bg-gray-200 animate-pulse rounded-lg"></div>
                <div className=" w-full bg-gray-200 animate-pulse rounded-lg"></div>
            </div>
        </div>
    );
};
