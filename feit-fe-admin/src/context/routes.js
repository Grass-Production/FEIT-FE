import { lazy } from "react";


import { IconLaptop, IconHouse, IconFileCloud, IconBookOpenText, IconNotePencil, IconSquaresFour, IconUsersFour, IconCheckSquareOffset, IconNote, IconBell, IconList, IconChartBar, IconSearch, IconUser, IconClockClockwise, IconCrown, IconChatTeardropText, IconUsers } from "../svgs";



const SignIn = lazy(() => import("../pages/SignIn"))
const SignUp = lazy(() => import("../pages/SignUp"))
const Unit = lazy(() => import("../pages/ManageLearn/Unit"))
const Lesson = lazy(() => import("../pages/ManageLearn/Lesson"))
const UnitDetails = lazy(() => import("../pages/ManageLearn/UnitDetails"))
const Vocabulary = lazy(() => import("../pages/ManageLearn/Vocabulary"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Course = lazy(() => import("../pages/ManageLearn/Course"))
const ManageLearn = lazy(() => import("../pages/ManageLearn"))
const ActivityLog = lazy(() => import("../pages/ActivityLog"))
const LessonDetail = lazy(() => import("../pages/ManageLearn/LessonDetail"))
const SubManageLearn = lazy(() => import("../pages/SubManageLearn"))
const VocabularyDetail = lazy(() => import("../pages/ManageLearn/VocabularyDetail"))
const CourseDetail = lazy(() => import("../pages/ManageLearn/CourseDetail"))
const CRUDCourse = lazy(() => import("../pages/ManageLearn/CRUDCourse"))
const CRUDLesson = lazy(() => import("../pages/ManageLearn/CRUDLesson"))
const CRUDUnit = lazy(() => import("../pages/ManageLearn/CRUDUnit"))
const CRUDVocabulary = lazy(() => import("../pages/ManageLearn/CRUDVocabulary"))
const Feedback = lazy(() => import("../pages/Feedback"))
const Users = lazy(() => import("../pages/Users"))
const Cloudinary = lazy(() => import("../pages/Cloudinary"))
const CloudinaryDetails = lazy(() => import("../pages/CloudinaryDetails"))

const CRUDExam = lazy(() => import("../pages/ManageExam/CRUDExam"))
const Exam = lazy(() => import("../pages/ManageExam/Exam"))
const ExamDetails = lazy(() => import("../pages/ManageExam/ExamDetails"))
const CRUDExamQuestion = lazy(() => import("../pages/ManageExam/CRUDQuestion"))

const CRUDExercise = lazy(() => import("../pages/ManageExercise/CRUDExam"))
const Exercise = lazy(() => import("../pages/ManageExercise/Exam"))
const ExerciseDetails = lazy(() => import("../pages/ManageExercise/ExamDetails"))
const CRUDExerciseQuestion = lazy(() => import("../pages/ManageExercise/CRUDQuestion"))

const CRUDQuiz = lazy(() => import("../pages/ManageQuiz/CRUDExam"))
const Quiz = lazy(() => import("../pages/ManageQuiz/Exam"))
const QuizDetails = lazy(() => import("../pages/ManageQuiz/ExamDetails"))
const CRUDQuizQuestion = lazy(() => import("../pages/ManageQuiz/CRUDQuestion"))
const FormAddFile = lazy(() => import("../pages/ManageLearn/FormAddFile"))


// import lesson from "../pages/ManageLearn/lesson";

export const CHILD = {
    Lesson: 'lesson',
    Unit: 'unit',
    Vocabulary: 'vocabulary',
    Course: 'course',
}

export const ROUTES = {

    Dashboard: '/',
    ActivityLog: '/logging',
    FormAddFile: '/manage/learn/addfile',


    Exam: '/manage/exam',
    ExamDetails: 'manage/exam/examdetail/:idexam',
    CRUDExamQuestion: '/manage/exam/:idexam/question/:idquestion/setting',
    CRUDExam: '/manage/exam/create',

    Exercise: '/manage/exercise',
    ExerciseDetails: 'manage/exercise/exercisedetail/:idexercise',
    CRUDExerciseQuestion: '/manage/exercise/:idexercise/question/:idquestion/setting',
    CRUDExercise: '/manage/exercise/create',

    Quiz: '/manage/quiz',
    QuizDetails: 'manage/quiz/quizdetail/:idquiz',
    CRUDQuizQuestion: '/manage/quiz/:idquiz/question/:idquestion/setting',
    CRUDQuiz: '/manage/quiz/create',

    Feedback: '/managefeedback',
    Cloudinary: '/cloudinary',
    CloudinaryDetails: '/cloudinary/:idcloudinary',

    Users: '/manageusers',
    SignIn: '/signIn',
    ManageLearn: '/manage/learn',
    SignUp: '/signUp',
    SubManageLearn: '/manage/learn/details/:idlesson',
    // /manage/learn/lesson/${}
    CourseDetail: '/manage/learn/coursedetails/:idcourse',
    LessonDetail: '/manage/learn/lessondetails/:idlesson',
    UnitDetails: '/manage/learn/lesson/:idlesson/unitdetails/:idunit',
    VocabularyDetail: '/manage/learn/lesson/:idlesson/vocabularydetails/:idvocabulary',

    CRUDCourse: '/manage/learn/coursedetails/:idcourse/setting',
    CRUDLesson: '/manage/learn/lessondetails/:idlesson/setting',
    CRUDUnit: '/manage/learn/unitdetails/:idunit/setting',
    CRUDVocabulary: '/manage/learn/unit/:idunit/vocabularydetails/:idvocabulary/setting',
    // / manage / learn / unit / ${ idUnit }/vocabularydetails/${ id } /setting
}


export const childRouter = [
    {
        title: 'FEIT',
        href: CHILD.Course,
        component: Course,
        showSidebar: false,
    },
    {
        title: 'FEIT',
        href: CHILD.Lesson,
        component: Lesson,
        showSidebar: false,

    },
    {
        title: 'FEIT',
        href: CHILD.Vocabulary,
        component: Vocabulary,
        showSidebar: false,

    },
    {
        title: 'FEIT',
        href: CHILD.Unit,
        component: Unit,
        showSidebar: false,
    },

]


export const privateRouter = [
    {
        title: 'FEIT',
        href: ROUTES.Dashboard,
        component: Dashboard,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.Feedback,
        component: Feedback,
        name: 'Dashboard',
        showSidebar: true,
    },
    //------------- Exam

    {
        title: 'FEIT',
        href: ROUTES.Exam,
        component: Exam,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.ExamDetails,
        component: ExamDetails,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDExamQuestion,
        component: CRUDExamQuestion,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDExam,
        component: CRUDExam,
        name: 'Exam',
        showSidebar: true,
    },

    //------------- Exercise
    {
        title: 'FEIT',
        href: ROUTES.Exercise,
        component: Exercise,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.ExerciseDetails,
        component: ExerciseDetails,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDExerciseQuestion,
        component: CRUDExerciseQuestion,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDExercise,
        component: CRUDExercise,
        name: 'Exam',
        showSidebar: true,
    },

    //------------- Quiz
    {
        title: 'FEIT',
        href: ROUTES.Quiz,
        component: Quiz,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.QuizDetails,
        component: QuizDetails,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDQuizQuestion,
        component: CRUDQuizQuestion,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDQuiz,
        component: CRUDQuiz,
        name: 'Exam',
        showSidebar: true,
    },


    {
        title: 'FEIT',
        href: ROUTES.Cloudinary,
        component: Cloudinary,
        name: 'Cloudinary',
        showSidebar: true,
    },

    {
        title: 'FEIT',
        href: ROUTES.FormAddFile,
        component: FormAddFile,
        name: 'Cloudinary',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CloudinaryDetails,
        component: CloudinaryDetails,
        name: 'Cloudinary',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.Users,
        component: Users,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.SubManageLearn,
        component: SubManageLearn,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CourseDetail,
        component: CourseDetail,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.LessonDetail,
        component: LessonDetail,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.UnitDetails,
        component: UnitDetails,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.VocabularyDetail,
        component: VocabularyDetail,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDCourse,
        component: CRUDCourse,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDLesson,
        component: CRUDLesson,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDUnit,
        component: CRUDUnit,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.CRUDVocabulary,
        component: CRUDVocabulary,
        name: 'Dashboard',
        showSidebar: true,
    },
    {
        title: 'FEIT',
        href: ROUTES.ActivityLog,
        component: ActivityLog,
        name: 'Activity Log',
        showSidebar: true,
    },
    {
        title: 'FEIT | Quản lý bài học',
        href: ROUTES.ManageLearn,
        component: ManageLearn,
        name: 'Quản lý bài học',
        showSidebar: true,
    },
    {
        title: 'FEIT | Sign In',
        href: ROUTES.SignIn,
        component: SignIn,
        name: 'Đăng nhập',
        showSidebar: false,
    },
]

export const publicRouter = [
    {
        title: 'FEIT | Sign In',
        href: ROUTES.SignIn,
        component: SignIn,
        name: 'Đăng nhập',
        showSidebar: false,
    },
]

export const routerSidebar = [
    {
        title: 'FEIT',
        href: ROUTES.Dashboard,
        component: Dashboard,
        name: 'Dashboard',
        icon: IconSquaresFour,
    },
    {
        title: 'FEIT',
        href: ROUTES.ManageLearn,
        component: ManageLearn,
        name: 'Quản lý khóa học',
        icon: IconLaptop,
    },
    {
        title: 'FEIT',
        href: ROUTES.Quiz,
        component: Quiz,
        name: 'Quản lý bài tập',
        icon: IconBookOpenText,
    },
    {
        title: 'FEIT',
        href: ROUTES.Exam,
        component: Exam,
        name: 'Quản lý bài kiểm tra',
        icon: IconCheckSquareOffset,
    },
    {
        title: 'FEIT',
        href: ROUTES.Exercise,
        component: Exercise,
        name: 'Quản lý bài học',
        icon: IconHouse,
    },

    {
        title: 'FEIT',
        href: ROUTES.Users,
        component: Users,
        name: 'Quản lý người dùng',
        icon: IconUsersFour,
    },
    {
        title: 'FEIT',
        href: ROUTES.ActivityLog,
        component: ActivityLog,
        name: 'Activity Log',
        icon: IconNotePencil,
    },
    {
        title: 'FEIT',
        href: ROUTES.Feedback,
        component: Feedback,
        name: 'Quản lý feedback',
        icon: IconChatTeardropText,
    },
    {
        title: 'FEIT',
        href: ROUTES.Cloudinary,
        component: Cloudinary,
        name: 'Cloudinary',
        icon: IconFileCloud,
    },
    {
        title: 'FEIT',
        href: ROUTES.SignIn,
        component: SignIn,
        name: 'Đăng nhập',
        icon: IconHouse,
    },
]

export const routerList = [
    {
        title: 'FEIT',
        href: CHILD.Course,
        component: Course,
        name: 'Khóa học',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: CHILD.Lesson,
        component: Lesson,
        name: 'Chủ đề',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: CHILD.Unit,
        component: Unit,
        name: 'Chương',
        icon: IconHouse,
    },
    {
        title: 'FEIT',
        href: CHILD.Vocabulary,
        component: Vocabulary,
        name: 'Từ vựng',
        icon: IconHouse,
    },

]
export default routerList
