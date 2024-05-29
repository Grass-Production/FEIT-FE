import { IconDelete } from '../../../svgs';
import { PopUp } from '../../../components/PopupVocabulary';
import { useState } from 'react';
export const CardsListDetails = ({
    word = 'Funcion',
    programing = 'Lập trình',
    link_url,
    part_of_speech,
    pronunciation,
    explain_vie,
    idVocabulary,
}) => {
    const [showpopup, setShowPopup] = useState(false);

    function handlePopUp() {
        setShowPopup(!showpopup);
    }

    const handleReceiveIsShowPopup = (value) => {
        setShowPopup(value);
    };

    return (
        <>
            <div className=" border-b border-secondary-gray px-3 py-2 mb-8 ">
                <div className=" flex justify-between items-center">
                    <div onClick={handlePopUp} className=" w-full">
                        <h1 className=" text-body-1 mb-3 font-body-1 font-plusjakartasans text-primary-black">
                            {word}
                        </h1>
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray">
                            {programing}
                        </h1>
                    </div>
                    <div className="">
                        <IconDelete />
                    </div>
                </div>
            </div>
            {showpopup && (
                <div className={showpopup ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeOut'}>
                    <PopUp
                        idVocabulary={idVocabulary}
                        OnClose={handlePopUp}
                        sound={link_url}
                        word={word}
                        partofspeech={part_of_speech}
                        pronunciation={pronunciation}
                        example={explain_vie}
                    />
                </div>
            )}
        </>
    );
};
