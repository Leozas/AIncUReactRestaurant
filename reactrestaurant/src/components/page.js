import React from 'react';
import Carousel from './carousel';

function Page() {
    return (

        <>
            <Carousel />

            <div className="row">
                <p>hello</p>
                <div className="col">
                    <p>world</p>
                </div>
            </div>
        </>
    );
}

export default Page;