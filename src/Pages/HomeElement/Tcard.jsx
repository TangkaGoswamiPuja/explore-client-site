import React from 'react';

const Tcard = ({to}) => {
    const {_id}=to
    return (
        <div>
            hi: {_id}
        </div>
    );
};

export default Tcard;