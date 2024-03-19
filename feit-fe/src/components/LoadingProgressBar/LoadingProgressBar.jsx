import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'flex flex-col justify-center rounded-full overflow-hidden bg-primary-blue-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-primary-blue-500',
});

export const LoadingProgressBar = ({ percent, className }) => {
    return (
        <div className={` ${className} flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700`}>
            <div className={` ${buttonVariants({})}`} style={{ width: `${percent}%` }}></div>
        </div>
    );
};
