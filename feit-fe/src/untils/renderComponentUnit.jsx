// Hàm render các bài học trong unit.jsx
export const RenderComponentUnit = ({ listen, example, count }) => {
    let componentToRender;

    switch (count) {
        case 0:
            componentToRender = listen;
            break;
        case 1:
            componentToRender = example;
            break;
        default:
            componentToRender = <div>Default Component</div>;
            break;
    }
    return <div className="">{componentToRender}</div>;
};
