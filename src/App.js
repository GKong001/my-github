import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header" style={{ backgroundColor: '#FFD54F', padding: '20px' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#ff6f00', fontWeight: 'bold', margin: 0 }}>food<span style={{ color: '#ffa000' }}>wagon</span></h1>
          <span>Deliver to: <b>Mohammadpur Bus Stand, Dhaka</b></span>
        </div>
        <div className="search-area" style={{ marginTop: '20px' }}>
          <h2>Are you starving?</h2>
          <p>Within a few clicks, find meals that are accessible near you</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button style={{ padding: '10px 20px', backgroundColor: '#ff6f00', border: 'none', color: 'white', borderRadius: '5px' }}>Delivery</button>
            <button style={{ padding: '10px 20px', backgroundColor: 'white', border: '1px solid #ff6f00', color: '#ff6f00', borderRadius: '5px' }}>Pickup</button>
          </div>
          <input
            type="text"
            placeholder="Enter Your Address"
            style={{ width: '300px', padding: '10px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd' }}
          />
          <button style={{ padding: '10px 20px', backgroundColor: '#ff6f00', border: 'none', color: 'white', borderRadius: '5px' }}>Find Food</button>
        </div>
      </header>

      {/* Promo Cards Section */}
      <section className="promos" style={{ padding: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {[15, 10, 25, 20].map((discount, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              width: '200px',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            <img
              src={`https://via.placeholder.com/150?text=Food+${index + 1}`}
              alt="Promo"
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p style={{ margin: '10px 0', fontWeight: 'bold' }}>{discount}% Off</p>
            <p>Greys Vage</p>
            <p style={{ color: '#ff6f00', fontWeight: 'bold' }}>{6 + index} Days Remaining</p>
          </div>
        ))}
      </section>

      {/* Featured Restaurants Section */}
      <section className="featured-restaurants" style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#ff6f00' }}>Featured Restaurants</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {[
            { name: 'Foodworld', discount: '20% off', status: 'Opens tomorrow', rating: 46 },
            { name: 'Pizzahub', discount: '15% off', status: 'Opens tomorrow', rating: 40 },
            { name: 'Donuts hut', discount: '10% off', status: 'Open Now', rating: 20 },
            { name: 'Donuts hut', discount: '15% off', status: 'Open Now', rating: 50 },
            { name: 'Ruby Tuesday', discount: '10% off', status: 'Open Now', rating: 26 },
            { name: 'Kuakata Fried Chicken', discount: '25% off', status: 'Open Now', rating: 53 },
            { name: 'Red Square', discount: '10% off', status: 'Open Now', rating: 45 },
            { name: 'Taco Bell', discount: '10% off', status: 'Open Now', rating: 35 },
          ].map((restaurant, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                width: '200px',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              <img
                src={`https://via.placeholder.com/150?text=${restaurant.name}`}
                alt="Restaurant"
                style={{ width: '100%', borderRadius: '10px' }}
              />
              <p style={{ margin: '10px 0', fontWeight: 'bold' }}>{restaurant.discount}</p>
              <p>{restaurant.name}</p>
              <p style={{ color: '#00c853', fontWeight: 'bold' }}>{restaurant.status}</p>
              <p>⭐ {restaurant.rating}</p>
            </div>
          ))}
        </div>
        <button style={{ display: 'block', margin: '20px auto', padding: '10px 20px', backgroundColor: '#ff6f00', border: 'none', color: 'white', borderRadius: '5px' }}>View All</button>
      </section>

      {/* Call to Action Section */}
      <section className="cta" style={{ backgroundColor: '#FFD54F', padding: '20px', textAlign: 'center' }}>
        <h2>Are you ready to order with the best deals?</h2>
        <button style={{ padding: '10px 20px', backgroundColor: '#ff6f00', border: 'none', color: 'white', borderRadius: '5px' }}>Proceed to Order</button>
      </section>

    </div>
    
  );
}

export default App;
