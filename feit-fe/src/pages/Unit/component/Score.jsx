import { IconNote } from '../../../svgs';

export const Score = ({ score = '10' }) => {
    return (
        <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-start gap-20 items-center">
            <div className=" flex justify-center items-center">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Số điểm đạt được
                </h1>
            </div>
            <div className="">
                <div className=" w-32 h-36 bg-white shadow-card-home ">
                    <h1 className=" text-center text-heading-1 font-heading-1 font-bitter text-primary-blue-500">
                        {score}
                    </h1>
                </div>
            </div>
        </div>
    );
};
