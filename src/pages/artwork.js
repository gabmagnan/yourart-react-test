import {useEffect} from "react";
import zero_json from '../0.json';
import artworkStyles from '../styles/artwork.module.css'
import favImage from '../assets/fav.png';
import sablier from '../assets/sablier.png';
import tick from '../assets/tick.png';

const Artwork = () => {

    // const [artworkData, setArtworkData] = useState();
    const jsonData = zero_json;

    /* const fetchArtworkData = async () => {
        const { data } = await ArtworkService.getExamplesData(0);
        setArtworkData(zero_json);
    }; */


    useEffect(() => {
        // fetchArtworkData().then(r => r.data);
        // fetch('https://storage.googleapis.com/ya-misc/interviews/front/examples/0.json').then(r => r.data);
    }, []);

    return (
        <div>
            <div className={artworkStyles.divContent}>
                <div className={artworkStyles.leftColumn}>
                    <img
                        src={jsonData.imageUrl}
                        alt={'paintingImage'}
                    />
                </div>
                <div className={artworkStyles.rightColumn}>
                    <div className={artworkStyles.divFullName}>
                        <div className={artworkStyles.paintingName}>
                            {jsonData.fullname}
                        </div>
                        <img
                            src={favImage}
                            alt={'favImage'}
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className={artworkStyles.divArtistName}>
                        <div className={artworkStyles.artistName}>
                            {jsonData.artistShort.fullname}
                        </div>
                        <div className={artworkStyles.artistCountry}>
                            {jsonData.artistShort.country}
                        </div>
                    </div>
                    <div className={artworkStyles.paintingTypeDate}>
                        {`${jsonData.category}, ${jsonData.creationYear}`}
                    </div>
                    <div className={artworkStyles.paintingInfos}>
                        {`${jsonData.dimensions.width} W x ${jsonData.dimensions.height} H x ${jsonData.dimensions.depth} D`}
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
                            <b style={{'font-weight' : '800'}}>131€ estimated delivery fee</b> for France
                        </div>
                    </div>
                    <div className={artworkStyles.accurateDeliveryFeeText}>
                        In order to obtain an accurate delivery fee,
                        please enter your country of residence and zip code
                    </div>
                    <div className={artworkStyles.residenceAndZipCodeArea}>
                        <div className={artworkStyles.residenceZip}>

                        </div>
                        <div className={artworkStyles.residenceCode}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artwork;
