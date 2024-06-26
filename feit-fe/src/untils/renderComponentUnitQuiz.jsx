import 'animate.css';

// Hàm render các bài học trong unit.jsx
export const RenderComponentUnitQuiz = ({ multipleChoice, fillInTheBlank, count, listen, truefalse }) => {
    let componentToRender;

    switch (count) {
        case 'choose':
            componentToRender = <div className="animate__animated wow animate__fadeIn">{multipleChoice}</div>;
            break;
        case 'blank':
            componentToRender = <div className="animate__animated wow animate__fadeIn">{fillInTheBlank}</div>;
            break;
        case 'listen':
            componentToRender = <div className="animate__animated wow animate__fadeIn">{listen}</div>;
            break;
        case 'true/false':
            componentToRender = <div className="animate__animated wow animate__fadeIn">{truefalse}</div>;
            break;
        default:
            componentToRender = <div>Default Component</div>;
            break;
    }
    return <>{componentToRender}</>;
};
