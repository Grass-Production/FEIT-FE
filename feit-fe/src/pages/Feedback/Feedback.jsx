import { CardFormFeedback, CardContact, CardContribute } from './component';

export default function Feedback() {
    return (
        <div className=" flex justify-center items-center h-screen px-10">
            <div className=" shadow-card-home border-[4px] border-primary-black p-8">
                <div class="grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-6">
                    <div class="row-span-3 col-span-1 bg-primary-blue-50 flex justify-center items-center p-8 border-[2px] border-primary-black ">
                        <CardFormFeedback />
                    </div>
                    <div class="col-span-1 bg-foundation-green-highlight-50 flex justify-center items-center p-8 border-[2px] border-primary-black ">
                        <CardContact />
                    </div>
                    <div class="row-span-2 bg-white flex justify-center items-center p-8 border-[2px] border-primary-black  col-span-1">
                        <CardContribute />
                    </div>
                </div>
            </div>
        </div>
    );
}
