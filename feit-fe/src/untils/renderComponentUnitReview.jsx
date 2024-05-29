import 'animate.css';

// Hàm render các bài học trong unit.jsx
export const RenderComponentUnitReview = ({ multipleChoice, fillInTheBlank, count, listen }) => {
    let componentToRender;

    switch (count) {
        case 0:
            componentToRender = <div className="animate__animated wow animate__fadeIn">{multipleChoice}</div>;
            break;
        case 1:
            componentToRender = <div className="animate__animated wow animate__fadeIn">{fillInTheBlank}</div>;
            break;
        case 2:
            componentToRender = <div className="animate__animated wow animate__fadeIn">{listen}</div>;
            break;
        default:
            componentToRender = <div>Default Component</div>;
            break;
    }
    return <>{componentToRender}</>;
};
