export const Lesson = ({ name, img = '' }) => {
    return (
        <div className="">
            <div className="">
                <div className=" h-80  overflow-hidden rounded-lg mb-3 ">
                    <img className="object-cover" src="/src/assets/images/img-card.jpg" alt="" />
                </div>
                <h1 className=" text-Hlg mb-3">{name}</h1>
            </div>
        </div>
    );
};
