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
                        <div className=" flex justify-between w-3/4">
                            <h1>Id</h1>
                            <h1>{v._id}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Unit Id</h1>
                            <h1>{v.unit_id}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Từ</h1>
                            <h1>{v.word}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Loại từ</h1>
                            <h1>{v.part_of_speech}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Phát âm</h1>
                            <h1>{v.pronunciation}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Ví dụ tiếng việt</h1>
                            <h1>{v.example_vie}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Ví dụ tiếng anh</h1>
                            <h1>{v.example_eng}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Giải thích tiếng việt</h1>
                            <h1>{v.explain_vie}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Giải thích tiếng anh</h1>
                            <h1>{v.explain_eng}</h1>
                        </div>
                        <div className=" flex justify-between w-3/4">
                            <h1>Thể loại</h1>
                            <h1>{v.field_of_it}</h1>
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
                    Unit Id
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Từ
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Loại từ
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Phát âm
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Ví dụ tiếng việt
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Ví dụ tiếng anh
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Giải thích tiếng việt
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Giải thích tiếng anh
                </th>
                <th className=" px-5 border border-primary-black border-t-0 py-2 text-body-2 font-body-2 text-white font-plusjakartasans">
                    Thể loại
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
                            {v.unit_id}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.word}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.part_of_speech}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.pronunciation}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.example_vie}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.example_eng}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.explain_vie}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.explain_eng}
                        </td>
                        <td className=" px-5 border border-primary-black text-left py-2 text-body-2 font-body-2 text-primary-black font-plusjakartasans">
                            {v.field_of_it}
                        </td>
                    </tr>
                );
            })}
        </table>
    );
};
