export const Loading = () => {
    return (
        <div class="w-full   bg-white opacity-75 ">
            <div class="flex justify-center items-center h-[30vh]">
                {/* <div class="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div> */}
                <div class="absolute animate-spin rounded-full  h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            </div>
        </div>
    );
};
