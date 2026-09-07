import React from 'react'

function Price() {
    return ( 

        <div className="container p-3">
            <div className="row p-5" >
                <div className="col-5 p-5">
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="
                    " style={{textDecoration:'none'}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-7">
                    <div className="container">
                        <div className="row">
                    <div className="col-4">
                        <img src="media/images/pricing-eq.svg" alt="" />
                    </div>
                    <div className="col-4">
                        <img src="media/images/pricing-eq1.svg" alt="" />
                    </div>
                    <div className="col-4">
                        <img src="media/images/other-trades.svg" alt="" />
                    </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Price;