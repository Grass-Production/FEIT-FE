import React from 'react';

export default React.memo(function Test({OnClick, toTal}) {
    console.log('render the con');
    return (
        <div className="">
            <button onClick={OnClick}>Xin Chào {toTal}</button>
        </div>
    );
});
