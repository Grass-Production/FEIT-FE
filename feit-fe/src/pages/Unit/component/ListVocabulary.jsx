import { IconDictionary, IconList } from '../../../svgs';

export const ListVocabulary = ({ list = ['a', 'b', 'c', 'd'] }) => {
    return (
        <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-start gap-20 items-center">
            <div className=" flex justify-center gap-4 items-center">
                <IconDictionary />
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Đây là những từ vựng của bài học này !
                </h1>
            </div>
            <div className="  overflow-y-scroll overflow-x-hidden">
                {list.map((value, i) => {
                    return (
                        <div key={i} className="w-[30vw] flex justify-between items-center">
                            <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray">
                                {i + 1}. &nbsp;{value}
                            </h1>
                            <IconList />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
