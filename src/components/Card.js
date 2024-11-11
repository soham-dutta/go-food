import React from 'react'

export default function Card() {
  return (
    <div>
      <div
          className="card m-3"
          style={{ width: "30rem", maxHeight: "30rem" }}
        >
          <img
            src="https://www.spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Chicken Tandoori</h5>
            <p className="card-text">
              Indulge in the fiery flavors of perfectly grilled Chicken Tandoori
              – where every bite is a journey to spice paradise!
            </p>
            <div className="container w-100 d-flex">
              <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i} value={i}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className='m-2 h-100 bg-success rounded'>
                <option  value="half">Half plate</option>
                <option  value="full">Full plate</option>
              </select>
            </div>
          </div>
        </div>
    </div>
  );
}
