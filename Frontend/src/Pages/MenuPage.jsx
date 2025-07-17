// import React from 'react';

// const MenuPage = () => {
//   return (
//     <>
//       <section className="menu-page" id="menu-page" style={{ backgroundColor: 'white', padding: '20px' }}>
//         <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//           {/* Left section for Menu */}
//           <div style={{ flex: 1 }}>
//             <h1 className="heading">ABES Menu</h1>

//             <h2>Breakfast & Parathas</h2>
//             <ul>
//               <li>Paneer Paratha ₹50</li>
//               <li>Aloo Paratha ₹50</li>
//               <li>Bread Pakora ₹30</li>
//             </ul>

//             <h2>Main Courses</h2>
//             <ul>
//               <li>Chole Bhature ₹70</li>
//               <li>Rajma Chawal ₹90</li>
//               <li>Kadhi Chawal ₹85</li>
//               <li>Veg Pulao ₹75</li>
//               <li>Veg Noodles ₹80</li>
//             </ul>

//             <h2>Snacks & Fast Food</h2>
//             <ul>
//               <li>Chili Potato ₹70</li>
//               <li>Veg Burger ₹50</li>
//               <li>French Fries ₹40</li>
//               <li>Samosa ₹25</li>
//               <li>Veg Spring Roll ₹60</li>
//               <li>Veg Momos (Steamed) ₹70</li>
//               <li>Cheese Maggi ₹60</li>
//             </ul>

//             <h2>Beverages & Quick Bites</h2>
//             <ul>
//               <li>Fresh Juices ₹50</li>
//               <li>Lassi ₹45</li>
//               <li>Dahi (Curd) ₹30</li>
//               <li>Veg Sandwich ₹40</li>
//               <li>Chips (Packet) ₹20</li>
//             </ul>
//           </div>

//           {/* Right section for Image */}
//           <div className="banner" style={{ flex: 1, textAlign: 'right' }}>
//             <img src="/menu.jpg" alt="about" style={{ maxWidth: '100%', height: 'auto' }} />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MenuPage; 
import React from 'react';

const MenuPage = () => {
  return (
    // Main section for the menu page, using the class defined in App.css
    <section className="menu-page-section" id="menu-page">
      {/* Container for the menu content and image, using the class defined in App.css */}
      <div className="menu-container">
        {/* Left section for Menu content, using the class defined in App.css */}
        <div className="menu-content">
          {/* Main heading for the menu, using the class defined in App.css */}
          <h1 className="menu-heading">ABES Menu</h1>

          {/* Breakfast & Parathas section, using the class defined in App.css */}
          <div className="menu-category">
            <h2 className="category-heading">Breakfast & Parathas</h2>
            <ul className="menu-list">
              <li>
                <span>Paneer Paratha</span>
                <span className="price">₹50</span>
              </li>
              <li>
                <span>Aloo Paratha</span>
                <span className="price">₹50</span>
              </li>
              <li>
                <span>Bread Pakora</span>
                <span className="price">₹30</span>
              </li>
            </ul>
          </div>

          {/* Main Courses section, using the class defined in App.css */}
          <div className="menu-category">
            <h2 className="category-heading">Main Courses</h2>
            <ul className="menu-list">
              <li>
                <span>Chole Bhature</span>
                <span className="price">₹70</span>
              </li>
              <li>
                <span>Rajma Chawal</span>
                <span className="price">₹90</span>
              </li>
              <li>
                <span>Kadhi Chawal</span>
                <span className="price">₹85</span>
              </li>
              <li>
                <span>Veg Pulao</span>
                <span className="price">₹75</span>
              </li>
              <li>
                <span>Veg Noodles</span>
                <span className="price">₹80</span>
              </li>
            </ul>
          </div>

          {/* Snacks & Fast Food section, using the class defined in App.css */}
          <div className="menu-category">
            <h2 className="category-heading">Snacks & Fast Food</h2>
            <ul className="menu-list">
              <li>
                <span>Chili Potato</span>
                <span className="price">₹70</span>
              </li>
              <li>
                <span>Veg Burger</span>
                <span className="price">₹50</span>
              </li>
              <li>
                <span>French Fries</span>
                <span className="price">₹40</span>
              </li>
              <li>
                <span>Samosa</span>
                <span className="price">₹25</span>
              </li>
              <li>
                <span>Veg Spring Roll</span>
                <span className="price">₹60</span>
              </li>
              <li>
                <span>Veg Momos (Steamed)</span>
                <span className="price">₹70</span>
              </li>
              <li>
                <span>Cheese Maggi</span>
                <span className="price">₹60</span>
              </li>
            </ul>
          </div>

          {/* Beverages & Quick Bites section, using the class defined in App.css */}
          <div className="menu-category">
            <h2 className="category-heading">Beverages & Quick Bites</h2>
            <ul className="menu-list">
              <li>
                <span>Fresh Juices</span>
                <span className="price">₹50</span>
              </li>
              <li>
                <span>Lassi</span>
                <span className="price">₹45</span>
              </li>
              <li>
                <span>Dahi (Curd)</span>
                <span className="price">₹30</span>
              </li>
              <li>
                <span>Veg Sandwich</span>
                <span className="price">₹40</span>
              </li>
              <li>
                <span>Chips (Packet)</span>
                <span className="price">₹20</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right section for Image, using the class defined in App.css */}
        <div className="menu-image-section">
          <img
            src="/menu.jpg" // Changed image source to menu.jpg
            alt="Delicious food items from the menu"
            className="menu-image" // Using the class defined in App.css
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://placehold.co/600x800/E0F2F7/0056b3?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuPage;