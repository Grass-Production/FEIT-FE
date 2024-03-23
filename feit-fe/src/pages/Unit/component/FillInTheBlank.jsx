import { InputField } from '../../../components';
export const FillInTheBlank = ({ word, mean }) => {
    return (
        <div className=" w-[56.563rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-Dmd">Hãy viết nào chỗ trống</h1>
                <h1 className=" text-center text-Hsm ">Hãy điền từ bạn nghe được vào chỗ còn trống ấy !</h1>
            </div>
            <div className="mx-auto w-3/4">
                <div className="">
                    <div className=" mx-auto mb-10 w-56 h-56 rounded-[40px] bg-gray-500"></div>
                    <div className=" mb-10">
                        <h1 className=" text-2xl mb-3">Câu:</h1>
                        <h1 className=" text-2xl font-medium">Today i’m gonna interview ______</h1>
                    </div>
                    <InputField className={' w-full'} placeholder={'Hãy viết từ còn trống'} />
                </div>
            </div>
        </div>
    );
};
