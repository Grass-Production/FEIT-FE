import {Button} from '../../components';
import {useState} from 'react';

export const HomePage = () => {
    const [load, setLoad] = useState(false);
    function handleSetLoad() {
        setLoad(!load);
        setTimeout(() => {
            setLoad((n) => !n);
        }, 3000);
    }
    return (
        <div>
            <button className=" bg-primary-subtile" onClick={handleSetLoad}>
                load
            </button>
            <Button onClick={handleSetLoad} icon={true} size={'md'} color={'primary'} title={'Load'}>
                <h1>ICon</h1>
            </Button>
            <div className={load ? 'animate-pulse' : ''}>
                <h1 className=" ">Home Page</h1>
                <Button icon={true} size={'md'} color={'primary'} title={'Click me'}>
                    <h1>ICon</h1>
                </Button>
                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-200 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
