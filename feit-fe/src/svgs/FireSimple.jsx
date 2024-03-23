const FireSimple = ({ color = '#3C79FE', className, size = '24' }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M30.2442 3.76514C30.0362 3.59218 29.7896 3.47178 29.5253 3.41408C29.261 3.35637 28.9867 3.36306 28.7255 3.43358C28.4643 3.5041 28.2239 3.63637 28.0246 3.81926C27.8252 4.00215 27.6728 4.23028 27.5801 4.48443L22.9395 17.2272L17.8432 12.2891C17.6721 12.1231 17.4677 11.9953 17.2435 11.914C17.0194 11.8327 16.7806 11.7999 16.5428 11.8176C16.305 11.8354 16.0737 11.9033 15.8641 12.0169C15.6545 12.1305 15.4713 12.2873 15.3267 12.4769C10.7578 18.4633 8.4375 24.4855 8.4375 30.3749C8.4375 35.298 10.3932 40.0194 13.8743 43.5006C17.3555 46.9817 22.0769 48.9374 27 48.9374C31.9231 48.9374 36.6445 46.9817 40.1257 43.5006C43.6068 40.0194 45.5625 35.298 45.5625 30.3749C45.5625 17.8347 34.849 7.59365 30.2442 3.76514ZM27 45.5624C22.9734 45.5579 19.113 43.9564 16.2657 41.1092C13.4185 38.2619 11.817 34.4015 11.8125 30.3749C11.8125 25.7343 13.519 20.927 16.8877 16.0649L22.4501 21.4607C22.6521 21.6569 22.9 21.7994 23.1712 21.8752C23.4424 21.9511 23.7282 21.9579 24.0027 21.895C24.2772 21.8321 24.5316 21.7015 24.7427 21.5151C24.9537 21.3287 25.1148 21.0924 25.2112 20.8279L29.9088 7.94592C34.638 12.2512 42.1875 20.6528 42.1875 30.3749C42.183 34.4015 40.5815 38.2619 37.7343 41.1092C34.887 43.9564 31.0266 45.5579 27 45.5624Z"
                fill={color}
            />
        </svg>
    );
};
export default FireSimple;
