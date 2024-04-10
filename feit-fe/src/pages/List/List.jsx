import { NavLink } from 'react-router-dom';
import { CardFavoritesList } from './component';

export default function List() {
    return (
        <div className=" px-10">
            <h1 className=" mt-7 text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-8">
                Danh sách của bạn
            </h1>
            <div className="grid grid-cols-6 gap-4">
                <div className=" h-72">
                    <NavLink to="/list/favoritelist">
                        <CardFavoritesList />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
