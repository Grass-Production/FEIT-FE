import { IconSpeakerHigh } from '../../svgs';
import { useState } from 'react';
export function Sound({ sound }) {
    const [id, setId] = useState(document.getElementById('audio'));
    function playAudio() {
        var audio = document.getElementById('audio');
        audio.play();
    }
    return (
        <div>
            <audio id="audio">
                <source src={sound} type="audio/mpeg" />
            </audio>
            <div
                onClick={playAudio}
                className=" m-auto border-[4px] flex justify-center items-center border-secondary-gray w-44 h-44 rounded-[40px] bg-white">
                <IconSpeakerHigh sizew="100" sizeh="100" color="#14121B" />
            </div>
        </div>
    );
}

// export function Sound({ sound }) {
//     let audioRef = useRef(null); // Sử dụng useRef để tham chiếu đến audio element

//     const playAudio = () => {
//         if (audioRef.current) {
//             audioRef.current.play(); // Phát lại âm thanh khi người dùng nhấp vào
//         }
//     };
//     return (
//         <div>
//             <audio ref={audioRef}>
//                 <source src={sound} type="audio/mpeg" />
//             </audio>
//             <div
//                 onClick={playAudio}
//                 className=" m-auto border-[4px] flex justify-center items-center border-secondary-gray w-44 h-44 rounded-[40px] bg-white">
//                 <IconSpeakerHigh sizew="100" sizeh="100" color="#14121B" />
//             </div>
//         </div>
//     );
// }
