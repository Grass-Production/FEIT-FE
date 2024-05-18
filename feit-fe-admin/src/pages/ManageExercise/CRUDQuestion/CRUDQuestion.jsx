import { FormCreate, FormUpdate } from './component';
import { NavLink } from 'react-router-dom';
import { InputSection } from '../../../components';
import { IconArrowUpLeft } from '../../../svgs';
import { Button } from '../../../components';
import { useParams } from 'react-router-dom';

export default function CRUDLesson() {
    const [isCheck, setIsCheck] = useState(false);

    let { idexam, idquestion } = useParams();

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsCheck(value === 'create');
        console.log(isCheck);
    };

    return (
        <div className="">
            <NavLink to={`/manage/exam`}>
                <Button icon={true} title="Trở về" left={true}>
                    <IconArrowUpLeft />
                </Button>
            </NavLink>
            <div className="p-5 border bg-primary-grey border-primary-black flex gap-3">
                <div className=" w-1/2  ">
                    <div className=" border-b border-primary-black pb-2 mb-5">
                        <h1 className=" text-heading-6 font-heading-6 font-plusjakartasans text-primary-black">
                            Tạo bài kiểm tra
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                            Đây là form tạo bài kiểm, dựa vào chủ đề và chương để tạo bài kiểm nhé
                        </p>
                    </div>
                    <div className=" flex justify-start items-center gap-7">
                        <InputSection
                            size={' w-6 h-6'}
                            className={' w-2/4 text-label-2 font-label-2 font-plusjakartasans text-primary-black'}
                            label="Sửa"
                            id="Updatee"
                            value="update"
                            name="Setting"
                            type="radio"
                            Checked={true}
                            onChange={handleRadioChange}
                        />
                        <InputSection
                            size={' w-6 h-6'}
                            className={' w-full text-label-2 font-label-2 font-plusjakartasans text-primary-black'}
                            label="Tạo Câu hỏi mới"
                            id="Create"
                            name="Setting"
                            onChange={handleRadioChange}
                            value="create"
                            type="radio"
                        />
                    </div>
                </div>
                <div className=" w-1/2 bg-white">
                    {isCheck ? <FormCreate idexam={idexam} /> : <FormUpdate idexam={idexam} idquestion={idquestion} />}
                </div>
            </div>
        </div>
    );
}
