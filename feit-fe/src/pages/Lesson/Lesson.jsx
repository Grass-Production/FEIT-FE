import {useCallback, useMemo, useState} from 'react';
import Test from './component/test';
export default function Lesson() {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(20);
    function fibonacci(n) {
        if (n < 2) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.time('fibonacci');
    // fibonacci(43);
    // const result = useMemo(() => {
    //     return fibonacci(43);
    // }, []);
    console.timeEnd('fibonacci');
    const handleCount = () => {
        setCount((count) => count + 1);
    };
    // const render =  () => {
    //         console.log('helo');
    //     };
    const render = useCallback(() => {
        console.log('helo');
    }, []);

    return (
        <div className="">
            <button onClick={handleCount}>Count : {count}</button>
            <Test toTal={total} OnClick={render} />
        </div>
    );
}
