const IconBook = ({ color = '"#14121B"', size = '32' }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M26 3H9C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7V28C5 28.2652 5.10536 28.5196 5.29289 28.7071C5.48043 28.8946 5.73478 29 6 29H24C24.2652 29 24.5196 28.8946 24.7071 28.7071C24.8946 28.5196 25 28.2652 25 28C25 27.7348 24.8946 27.4804 24.7071 27.2929C24.5196 27.1054 24.2652 27 24 27H7C7 26.4696 7.21071 25.9609 7.58579 25.5858C7.96086 25.2107 8.46957 25 9 25H26C26.2652 25 26.5196 24.8946 26.7071 24.7071C26.8946 24.5196 27 24.2652 27 24V4C27 3.73478 26.8946 3.48043 26.7071 3.29289C26.5196 3.10536 26.2652 3 26 3ZM25 23H9C8.29768 22.999 7.60763 23.1841 7 23.5362V7C7 6.46957 7.21071 5.96086 7.58579 5.58579C7.96086 5.21071 8.46957 5 9 5H25V23Z"
                fill={color}
            />
        </svg>
    );
};
export default IconBook;
