import { useState } from 'react';
import { Button } from '../../components';

export default function Search() {
    var data = [
        {
            title: 'a',
        },
        {
            title: 'b',
        },
        {
            title: 'c',
        },
        {
            title: 'd',
        },
    ];
    const [index, setIndex] = useState(null);

    function setIndexNe(i) {
        setIndex(i);
    }

    return (
        <div className="">
            {data.map((a, i) => {
                return (
                    <Button
                        key={i}
                        title={a.title}
                        color={'success'}
                        className={'w-96'}
                        // active={index === i}
                        onClick={() => setIndexNe(i)}
                        icon={false}></Button>
                );
            })}
        </div>
    );
}
