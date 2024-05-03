const IconChartBar = ({ color = '#14121B', className, size = '24' }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 18.8589H20.25V3.85889C20.25 3.65997 20.171 3.46921 20.0303 3.32856C19.8897 3.1879 19.6989 3.10889 19.5 3.10889H14.25C14.0511 3.10889 13.8603 3.1879 13.7197 3.32856C13.579 3.46921 13.5 3.65997 13.5 3.85889V7.60889H9C8.80109 7.60889 8.61032 7.6879 8.46967 7.82856C8.32902 7.96921 8.25 8.15997 8.25 8.35889V12.1089H4.5C4.30109 12.1089 4.11032 12.1879 3.96967 12.3286C3.82902 12.4692 3.75 12.66 3.75 12.8589V18.8589H3C2.80109 18.8589 2.61032 18.9379 2.46967 19.0786C2.32902 19.2192 2.25 19.41 2.25 19.6089C2.25 19.8078 2.32902 19.9986 2.46967 20.1392C2.61032 20.2799 2.80109 20.3589 3 20.3589H21C21.1989 20.3589 21.3897 20.2799 21.5303 20.1392C21.671 19.9986 21.75 19.8078 21.75 19.6089C21.75 19.41 21.671 19.2192 21.5303 19.0786C21.3897 18.9379 21.1989 18.8589 21 18.8589ZM15 4.60889H18.75V18.8589H15V4.60889ZM9.75 9.10889H13.5V18.8589H9.75V9.10889ZM5.25 13.6089H8.25V18.8589H5.25V13.6089Z"
                fill={color}
            />
        </svg>
    );
};
export default IconChartBar;