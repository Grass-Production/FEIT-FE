const IconSearch = ({ color = '#14121B', sizew = '24', sizeh = '25' }) => {
    return (
        <svg width={sizew} height={sizeh} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask
                id="mask0_761_1863"
                style={{ maskType: 'luminance' }} // Thay đổi style từ chuỗi sang đối tượng
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="20"
                height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 2.10889H21.4768V21.5859H2V2.10889Z" fill="white" />
            </mask>
            <g mask="url(#mask0_761_1863)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.7388 3.60889C7.19582 3.60889 3.49982 7.30389 3.49982 11.8469C3.49982 16.3899 7.19582 20.0859 11.7388 20.0859C16.2808 20.0859 19.9768 16.3899 19.9768 11.8469C19.9768 7.30389 16.2808 3.60889 11.7388 3.60889ZM11.7388 21.5859C6.36882 21.5859 1.99982 17.2169 1.99982 11.8469C1.99982 6.47689 6.36882 2.10889 11.7388 2.10889C17.1088 2.10889 21.4768 6.47689 21.4768 11.8469C21.4768 17.2169 17.1088 21.5859 11.7388 21.5859Z"
                    fill={color}
                />
            </g>
            <mask
                id="mask1_761_1863"
                style={{ maskType: 'luminance' }} // Thay đổi style từ chuỗi sang đối tượng
                maskUnits="userSpaceOnUse"
                x="17"
                y="17"
                width="6"
                height="6">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2399 17.8159H22.264V22.8307H17.2399V17.8159Z"
                    fill="white"
                />
            </mask>
            <g mask="url(#mask1_761_1863)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.5142 22.8307C21.3232 22.8307 21.1312 22.7577 20.9842 22.6117L17.4602 19.0977C17.1672 18.8047 17.1662 18.3297 17.4592 18.0367C17.7512 17.7417 18.2262 17.7437 18.5202 18.0347L22.0442 21.5497C22.3372 21.8427 22.3382 22.3167 22.0452 22.6097C21.8992 22.7577 21.7062 22.8307 21.5142 22.8307Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};
export default IconSearch;
