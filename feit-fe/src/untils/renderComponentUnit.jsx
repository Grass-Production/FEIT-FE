import 'animate.css';

// Hàm render các bài học trong unit.jsx
export const RenderComponentUnit = ({ listen, example, fillInTheBlank, count }) => {
    let componentToRender;

    switch (count) {
        case 0:
            componentToRender = <div className="animate__animated wow animate__fadeIn">{listen}</div>;
            break;
        case 1:
            componentToRender = <div className="animate__animated wow animate__fadeIn">{example}</div>;
            break;
        case 2:
            componentToRender = <div className="animate__animated wow animate__fadeIn">{fillInTheBlank}</div>;
            break;
        default:
            componentToRender = <div>Default Component</div>;
            break;
    }
    return <>{componentToRender}</>;
};
