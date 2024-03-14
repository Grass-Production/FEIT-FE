import { Button } from '../../components';

export default function HomePage() {
    return (
        <div className="grid grid-cols-3 gap-4 h-screen px-10 py-7">
            <div className=" bg-gray-300 rounded-lg">01</div>
            <div className=" bg-gray-300 rounded-lg">02</div>
            <div className=" bg-gray-300 rounded-lg">03</div>
            <div className="col-span-2  bg-gray-300 rounded-lg">04</div>
            <div className=" bg-gray-300 rounded-lg">05</div>
            <div className=" bg-gray-300 rounded-lg">06</div>
            <div className="col-span-2  bg-gray-300 rounded-lg">07</div>
        </div>
    );
}
