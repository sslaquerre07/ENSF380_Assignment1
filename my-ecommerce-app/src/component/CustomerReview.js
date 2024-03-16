import React, {useState, useEffect} from 'react'

//Incomplete, finish up

function CustomerReview(){
    const [name, setName] = useState(null);
    const [content, setContent] = useState(null);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetch("../data/reviews.js")
         .then((response) => {
            let int = Math.floor(Math.random() * response.length);
            let data = response[int];
            setName(data["customerName"]);
            setContent(data["reviewContent"]);
            setRating(data["stars"]);
         })
         .catch((error) => console.log(error));

    }, []);

    return(
        <div>
            <p>{name}</p>
            <i>{content}</i>
            <p>Stars: {rating}</p>
        </div>
    );
}

export default CustomerReview;