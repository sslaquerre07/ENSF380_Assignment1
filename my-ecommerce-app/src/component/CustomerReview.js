import React, {useState, useEffect} from 'react'
import reviews from "../data/reviews.js";

function CustomerReview(){
    const [name, setName] = useState(null);
    const [content, setContent] = useState(null);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        let int = Math.floor(Math.random() * reviews.length);
        let data = reviews[int];
        setName(data["customerName"]);
        setContent(data["reviewContent"]);
        setRating(data["stars"]);
    }, []);

    function RatingDiv(){
        const stars = [];
        for(let i = 0;i<rating;i++){
            stars.push(<img src={process.env.PUBLIC_URL + '/images/star.jpg'} alt="Star" className='star-image'/>);
        }
        return stars;
    }

    return(
        <div className='review'>
            <p>{name}</p>
            <i>{content}</i>
            <p className='rating'>Stars: {RatingDiv()}</p>
        </div>
    );
}

export default CustomerReview;