// import img from '../../../assets/images/';
export const IntroduceLangdingPage = () => {
    return (
        <div id="intro" className=" max-h-[70vh] flex justify-between items-center mb-120px">
            <div className="">
                <img className=" max-h-[800px]" src="src/assets/images/img-intro-landing.png" alt="" />
            </div>
            <div className=" w-2/3 flex flex-col justify-center items-center">
                <div className=" pl-6">
                    <h1 className=" mb-10 font-plusjakartasans text-heading-4 text-primary-blue-800 font-heading-4">
                        Website này dạy gì thế ?
                    </h1>
                    <p className=" text-body-1 font-plusjakartasans text-primary-black font-body-1">
                        Đây là website dạy tiếng Anh chuyên ngành công nghệ thông tin. Nơi đây bạn sẽ được học những
                        thuật ngữ chuyên ngành các coder hay dùng để học, đọc tài liệu, xem hướng dẫn học tập và hơn nữa
                        là trong môi trường làm việc chuyên nghiệp từ những thứ căn bản nhất cho đến thứ nâng cao.
                    </p>
                </div>
            </div>
        </div>
    );
};
