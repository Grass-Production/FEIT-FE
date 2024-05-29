import { InputSection } from '../../../../components';

export const JsonUI = ({ data }) => {
    return (
        <>
            {data.map((v, i) => {
                return (
                    <div key={i} className=" border border-primary-black mb-12 p-3">
                        <div className=" w-16">
                            <InputSection label="Chọn" />
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Id</h1>
                            <h1>{v._id}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Course Id</h1>
                            <h1>{v.course_id}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Tên</h1>
                            <h1>{v.name}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Nội dung</h1>
                            <h1>{v.content}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Hình</h1>
                            <h1>{v.image_url}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Thời gian tạo</h1>
                            <h1>{v._created_at}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Thời gian cập nhật</h1>
                            <h1>{v.updated_at}</h1>
                        </div>
                        <div className=" flex justify-between w-1/2">
                            <h1>Người cập nhật</h1>
                            <h1>{v.who_updates}</h1>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export const TableData = ({ data }) => {
    return (
        <table className=" w-full">
            <tr className=" justify-between items-center bg-primary-blue-400  ">
                <th className="px-5 py-2 border border-primary-black border-t-0">
                    {/* <input clas type="checkbox" /> */}
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Id
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Course Id
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Tên
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Nội dung
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Hình
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Thời gian tạo
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Thời gian cập nhật
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Người cập nhật
                </th>
            </tr>
            {data.map((v, i) => {
                return (
                    <tr key={i} className=" justify-between items-center ">
                        <td className="px-5 py-2 border border-primary-black border-t-0">
                            <input type="checkbox" />
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v._id}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.course_id}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.name}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.content}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.image_url}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.created_at}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.updated_at}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.who_updates}
                        </td>
                    </tr>
                );
            })}
        </table>
    );
};
