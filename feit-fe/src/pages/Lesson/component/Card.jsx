import {Button} from '../../../components';

export const Card = ({course, percent}) => {
    return (
        <div className=" pr-8">
            <div className=" h-80  overflow-hidden rounded-lg mb-3 ">
                <img className="object-cover" src="/src/assets/images/img-card.jpg" alt="" />
            </div>
            <h1 className=" text-Hlg mb-3">{course}</h1>
            <div className="mb-3 flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                    style={{width: `${percent}%`}}></div>
            </div>
            <Button title="Tiếp tục" className=" w-full"></Button>
        </div>
    );
};
