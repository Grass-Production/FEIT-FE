import { IconSpeakerHigh } from '../../svgs';
import { useState, useRef } from 'react';
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
                className=" m-auto border-[4px] flex justify-center items-center border-primary-black w-44 h-44  bg-white">
                <IconSpeakerHigh sizew="100" sizeh="100" color="#14121B" />
            </div>
        </div>
    );
}

// export function Sound({ sound }) {
//     const audioRef = useRef(null);

//     const playSlowAudio = () => {
//         const audio = audioRef.current;
//         const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//         const source = audioContext.createMediaElementSource(audio);
//         const gainNode = audioContext.createGain();
//         const playbackRate = 0.75; // Tốc độ phát lại chậm lại 25%

//         gainNode.gain.value = 1; // Giá trị mặc định là 1

//         // Tạo node bộ lọc để chậm lại audio
//         const playbackRateNode = audioContext.createPlaybackRate();
//         playbackRateNode.playbackRate.value = playbackRate;

//         // Kết nối các node với nhau
//         source.connect(playbackRateNode).connect(gainNode).connect(audioContext.destination);

//         // Bắt đầu phát audio
//         audio.play();
//     };

//     return (
//         <div>
//             <audio ref={audioRef} id="audio">
//                 <source src={sound} type="audio/mpeg" />
//             </audio>
//             <button onClick={playSlowAudio}>Play Slow</button>
//         </div>
//     );
// }

export function SoundSmall({ sound }) {
    const [id, setId] = useState(document.getElementById('audiosmall'));
    function playAudio() {
        var audio = document.getElementById('audiosmall');
        audio.play();
    }
    return (
        <div>
            <audio id="audiosmall">
                <source src={sound} type="audio/mpeg" />
            </audio>
            {/* <div
                onClick={playAudio}
                className=" m-auto border-[4px] flex justify-center items-center border-primary-black w-44 h-44  bg-white">
                <IconSpeakerHigh sizew="100" sizeh="100" color="#14121B" />
            </div> */}
            <div onClick={playAudio} className=" flex justify-start items-center border-primary-blue-400 border ">
                <IconSpeakerHigh />
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
