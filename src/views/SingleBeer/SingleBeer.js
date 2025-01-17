import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";



const SingleBeer = () => {
    const { id } = useParams()
    const [beer, setBeer] = useState(null);
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((getBeers) => {
          setBeer(getBeers.data);
        });
      }, [id]);


    return (
        <div className="container">
            {beer ?
                (
                    <div key={beer._id}>
                        <img className="card-img-top w-25 h-75 d-inline-block mt-4" src={beer.image_url} alt={beer.name} />
                        <div className="bodyBeer">
                            <div className="d-flex justify-content-between">
                                <h1 className="text-start fs-3">{beer.name}</h1>
                                <p className='fs-3 text-muted'>{beer.attenuation_level}</p>

                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="text-muted me-4">{beer.tagline}</p>
                                <p className='fs-8'><strong> {beer.first_brewed} </strong></p>
                            </div>
                            <p className='text-start'>{beer.description}</p>
                            <p className="text-start text-muted">{beer.contributed_by}</p>
                        </div>

                    </div>
                ) :
                loading}
        </div>

    );
};

export default SingleBeer;