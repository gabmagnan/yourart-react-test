import {useEffect, useState} from "react";
import artworkStyles from '../styles/artwork.module.css'
import favImage from '../assets/fav.png';
import sablier from '../assets/sablier.png';
import tick from '../assets/tick.png';
import truck from '../assets/truck.png';
import pickup from '../assets/pickup.png';
import ar from '../assets/ar.png';
import eye from '../assets/eye.png';
import arrow from '../assets/arrow.png';
import {displayStringArray, getJsonData, NotFoundPage} from "../utils";

const Artwork = () => {

    // Get json data from json files according to value url path
    const value = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
    let jsonData = getJsonData(value);

    const [descriptionVisibility, setDescriptionVisibility] = useState(false);
    const [subjectMediumStyleVisibility, setSubjectMediumStyleVisibility] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [otherArtworkImages, setOtherArtworkImages] = useState([]);

    const descriptionVisibilityStyle = {
        display: descriptionVisibility ? 'block' : 'none'
    };

    const subjectMediumStyleVisibilityStyle = {
        display: subjectMediumStyleVisibility ? 'inline-flex' : 'none'
    };

    useEffect(() => {
        const artworkImagesArray = [];
        jsonData.otherArtworkImages.forEach((picture) => {
            const img = new Image();
            img.src = picture;
            artworkImagesArray.push(img)
        });
        setOtherArtworkImages(artworkImagesArray);
    }, [jsonData.otherArtworkImages]);

    // Switch to the carousel to the next picture
    function next () {
        if (currentIndex < (jsonData.otherArtworkImages.length - 5)) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    // Switch to the carousel to the previous picture
    function previous () {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <div>
            {
                value < 0 || value > 1 || isNaN(parseInt(value))
                    ? <NotFoundPage/>
                    :
                    <div>
                        <div className={artworkStyles.divContentTop}>
                            <div className={artworkStyles.leftColumn}>
                                <img
                                    src={jsonData.imageUrl}
                                    alt={'paintingImage'}
                                    width={580}
                                    height={580}
                                />
                                <div style={{marginTop: '12px'}}>
                                    <div className={artworkStyles.divViewInRoom}>
                                        <img
                                            src={eye}
                                            alt={'eye'}
                                            width={26}
                                            height={26}
                                        />
                                        <div className={artworkStyles.viewInRoomText}>
                                            VIEW IN A ROOM
                                        </div>
                                    </div>
                                    <div className={artworkStyles.divAr}>
                                        <img
                                            src={ar}
                                            alt={'ar'}
                                            width={26}
                                            height={26}
                                        />
                                        <div className={artworkStyles.arText}>
                                            AR VIEW
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={artworkStyles.descriptionTitle}
                                    onClick={() => setDescriptionVisibility(!descriptionVisibility)}
                                    style={{marginTop : '40px'}}
                                >
                                    DESCRIPTION
                                </div>
                                <div
                                    className={artworkStyles.descriptionBody}
                                    style={descriptionVisibilityStyle}
                                >
                                    {jsonData.description}
                                </div>
                                <div className={artworkStyles.separationLine}/>
                                <div
                                    className={artworkStyles.descriptionTitle}
                                    onClick={() => setSubjectMediumStyleVisibility(!subjectMediumStyleVisibility)}
                                >
                                    SUBJECT, MEDIUM, STYLE, MATERIALS
                                </div>
                                <div
                                    className={artworkStyles.descriptionBody}
                                    style={subjectMediumStyleVisibilityStyle}
                                >
                                    <div className={artworkStyles.paintingInfosLeftColumn}>
                                        <div className={artworkStyles.itemsKeyInfoStyle}>
                                            SUBJECT
                                        </div>
                                        <div className={artworkStyles.itemsKeyInfoStyle}>
                                            STYLE
                                        </div>
                                        <div className={artworkStyles.itemsKeyInfoStyle}>
                                            MEDIUM
                                        </div>
                                        <div className={artworkStyles.itemsKeyInfoStyle}>
                                            MATERIALS
                                        </div>
                                    </div>
                                    <div className={artworkStyles.paintingInfosRightColumn}>
                                        <div className={artworkStyles.itemsKeyValueStyle}>
                                            {displayStringArray(jsonData.subjects)}
                                        </div>
                                        <div className={artworkStyles.itemsKeyValueStyle}>
                                            {displayStringArray(jsonData.mediums)}
                                        </div>
                                        <div className={artworkStyles.itemsKeyValueStyle}>
                                            {displayStringArray(jsonData.styles)}
                                        </div>
                                        <div className={artworkStyles.itemsKeyValueStyle}>
                                            {displayStringArray(jsonData.materials)}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={artworkStyles.separationLine}
                                />
                            </div>
                            <div className={artworkStyles.rightColumn}>
                                <div className={artworkStyles.divFullName}>
                                    <div className={artworkStyles.paintingName}>
                                        {jsonData?.fullname}
                                    </div>
                                    <img
                                        src={favImage}
                                        alt={'favImage'}
                                        width={20}
                                        height={20}
                                        style={{cursor: 'pointer'}}
                                    />
                                </div>
                                <div className={artworkStyles.divArtistName}>
                                    <div className={artworkStyles.artistName}>
                                        {jsonData?.artistShort?.fullname}
                                    </div>
                                    <div className={artworkStyles.artistCountry}>
                                        {jsonData?.artistShort?.country}
                                    </div>
                                </div>
                                <div className={artworkStyles.paintingTypeDate}>
                                    {`${jsonData.category}, ${jsonData.creationYear}`}
                                </div>
                                <div className={artworkStyles.paintingInfos}>
                                    {`${jsonData?.dimensions?.width} W x ${jsonData?.dimensions?.height} H x ${jsonData?.dimensions?.depth} D`}
                                </div>
                                <div className={artworkStyles.pricing}>
                                    {`${jsonData.price} €`}
                                </div>
                                <button className={artworkStyles.acquireButton}>
                                    Acquire
                                </button>
                                <button className={artworkStyles.makeAnOfferButton}>
                                    Make an offer
                                </button>
                                <div className={artworkStyles.preReserveDiv}>
                                    <img
                                        src={sablier}
                                        alt={'sablier'}
                                        width={20}
                                        height={20}
                                    />
                                    <div className={artworkStyles.preReserveText}>
                                        PRE-RESERVE FOR 24 HOURS
                                    </div>
                                </div>
                                <div className={artworkStyles.estimatedDeliveryFeeDiv}>
                                    <img
                                        src={tick}
                                        alt={'tick'}
                                        width={20}
                                        height={20}
                                    />
                                    <div className={artworkStyles.estimatedDeliveryFeeText}>
                                        <b style={{'fontWeight' : '800'}}>131€ estimated delivery fee</b> for France
                                    </div>
                                </div>
                                <div className={artworkStyles.accurateDeliveryFeeText}>
                                    In order to obtain an accurate delivery fee,
                                    please enter your country of residence and zip code
                                </div>
                                <div className={artworkStyles.residenceAndZipCodeArea}>
                                    <div className={artworkStyles.residenceZip}>
                                        SPAIN
                                    </div>
                                    <div className={artworkStyles.residenceCode}>
                                        81932
                                    </div>
                                </div>
                                <div className={artworkStyles.estimatedDeliveryFeeDiv}>
                                    <img
                                        src={truck}
                                        alt={'sablier'}
                                        width={26}
                                        height={26}
                                    />
                                    <div className={artworkStyles.estimatedDeliveryFeeText}>
                                        Delivery fee is 129€
                                    </div>
                                </div>
                                <div className={artworkStyles.estimatedDeliveryFeeDiv}>
                                    <img
                                        src={pickup}
                                        alt={'sablier'}
                                        width={26}
                                        height={26}
                                    />
                                    <div className={artworkStyles.estimatedDeliveryFeeText}>
                                        Free pickup in <b style={{'fontWeight' : '800'}}>Bruxelles, Belgium</b>
                                    </div>
                                </div>
                                <div className={artworkStyles.estimatedDeliveryFeeDiv}>
                                    <img
                                        src={tick}
                                        alt={'sablier'}
                                        width={26}
                                        height={26}
                                    />
                                    <div className={artworkStyles.estimatedDeliveryFeeText}>
                                        Try 14 days at home for free
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={artworkStyles.divContentCarousel}>
                            <img
                                src={arrow}
                                alt={'arrowLeft'}
                                width={50}
                                height={80}
                                onClick={previous}
                                style={
                                    {
                                        transform: 'rotate(180deg)',
                                        cursor: 'pointer',
                                        visibility: currentIndex > 0 ? 'visible' : 'hidden'
                                    }
                                }
                            />
                            <div className={artworkStyles.pictureDiv}>
                                <img
                                    src={otherArtworkImages[currentIndex]?.src}
                                    alt={value.toString()}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className={artworkStyles.pictureDiv}>
                                <img
                                    src={otherArtworkImages[currentIndex + 1]?.src}
                                    alt={value.toString()}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className={artworkStyles.pictureDiv}>
                                <img
                                    src={otherArtworkImages[currentIndex + 2]?.src}
                                    alt={value.toString()}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className={artworkStyles.pictureDiv}>
                                <img
                                    src={otherArtworkImages[currentIndex + 3]?.src}
                                    alt={value.toString()}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className={artworkStyles.pictureDiv}>
                                <img
                                    src={otherArtworkImages[currentIndex + 4]?.src}
                                    alt={value.toString()}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <img
                                src={arrow}
                                alt={'arrowRight'}
                                width={50}
                                height={80}
                                onClick={next}
                                style={
                                {
                                    cursor: 'pointer',
                                    visibility: currentIndex < jsonData.otherArtworkImages.length - 5 ? 'visible' : 'hidden',
                                }
                            }
                            />
                        </div>
                    </div>
            }
        </div>
    );
};

export default Artwork;
