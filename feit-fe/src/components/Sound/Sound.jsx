import { IconSpeakerHigh } from '../../svgs';
import { useState, useRef, useEffect } from 'react';
export function Sound({ sound }) {
    const audioRef = useRef(null);
    useEffect(() => {
        // Update the audio source whenever the sound prop changes
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [sound]);
    function playAudio() {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Audio playback failed:', error);
            });
        }
    }
    return (
        <div>
            <audio ref={audioRef} id="audio">
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

export function SoundSmall({ sound }) {
    const audioRef = useRef(null);
    useEffect(() => {
        // Update the audio source whenever the sound prop changes
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [sound]);

    function playAudio() {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error('Audio playback failed:', error);
            });
        }
    }
    return (
        <div>
            <audio ref={audioRef} id="audiosmall">
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
