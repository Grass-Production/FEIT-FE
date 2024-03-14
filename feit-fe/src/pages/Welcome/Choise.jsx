import { LessonCard, LessonLoading } from '../Learn';

export const Choise = ({ lessons = [], status, level }) => {
    return (
        <div className=" p-28 m-auto">
            <h1 className=" text-5xl text-center mb-20">Bạn là ai trong ngành IT ?</h1>
            <p className=" text-2xl mb-10">
                Vì bạn là người mới bắt đầu nên chúng tôi đề xuất cho bạn những chủ để sau để bạn làm quen với những
                thuật ngữ của ngành IT. Hãy chọn tối đa là 3 chủ để đảm bảo chất lượng học tập được hiệu quả nhất.
            </p>
            {status ? (
                <div className=" grid grid-cols-4 gap-4">
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                    <LessonCard />
                </div>
            ) : (
                <div className=" grid grid-cols-4 gap-4">
                    {lessons.map((lesson) => {
                        return (
                            <div key={lesson.id} className=" p-3 bg-gray-400 rounded-lg">
                                <LessonCard />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
