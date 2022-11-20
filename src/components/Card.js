import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div>
            <img alt='robots' src={`https://robohash.org/rocky${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;