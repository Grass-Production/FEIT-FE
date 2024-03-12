export const Example = ({ word, mean }) => {
    return (
        <div className=" h-[80vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-Dmd">Câu ví dụ</h1>
                <h1 className=" text-center text-Hsm ">Bạn hãy đọc kỹ phần ví dụ để hiểu rõ hơn từ vựng nha hí hí !</h1>
            </div>
            <div className="mx-auto w-3/4">
                <div className="">
                    <div className=" mb-10">
                        <h1 className=" text-lg mb-3">Tiếng Anh</h1>
                        <p className=" text-lg">
                            The National Institute of Standards and Technology held a competition for a publicly
                            available symmetric-key encryption <strong> algorithm </strong>and started accepting entries
                            in 1997.
                        </p>
                    </div>
                    <div>
                        <h1 className=" text-lg mb-3">Tiếng Việt</h1>
                        <p className=" text-lg">
                            Viện Tiêu chuẩn và Công nghệ Quốc gia đã tổ chức một cuộc thi về thuật toán mã hóa khóa đối
                            xứng công khai và bắt đầu chấp nhận các mục vào năm 1997.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
