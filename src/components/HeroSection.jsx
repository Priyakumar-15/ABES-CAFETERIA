import React from 'react';
//import Navbar from './Navbar';
const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 10,
      boxShadow:'0 2px 5px rgba(0,0,0,0.2)'
    }}>
      <div className="logo" style={{
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#ffdb58'
      }}>ABES</div>
      <div>
        <a href="/" style={{ color: '#fff', margin: '0 15px' , textDecoration: 'none', fontWeight: '500' }}>Home</a>
        <a href="#" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: '500'  }}>Menu</a>
        <a href="#" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: '500'  }}>About</a>
        <a href="#" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: '500'  }}>Login</a>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: 'url(/col.avif)', // Set the background image here
        backgroundSize: 'cover',  // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the image
        paddingBottom: '400px',
        color: '#000',
        textAlign: 'centre',
        display: 'flex', // Use flexbox for content alignment
        flexDirection: 'column',
        justifyContent: 'center', // Vertically center the content
        alignItems: 'center', // Align content to the start (left)
        minHeight: '100vh' // Ensure the section is at least the height of the viewport
      }}
    >

        <Navbar />
      
      <div className="container" style={{  maxWidth: '1200px', 
        margin: '0 auto', 
        paddingTop: '120px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: Add a semi-transparent white background for text
        borderRadius: '15px', // Optional: Add border radius for better text container appearance
        padding: '30px',
         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
        }}>
        <div className="row" style={{ display: 'flex', alignItems: 'centre', position: 'relative',flexDirection:'column' }}>
          <div className="col-lg-12" style={{
            flex: '1',
            paddingRight: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'centre',
            position: 'static',
           
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '40px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              maxWidth: '800px',
              width: '100%'
            }}>
           
            <h1 className="hero-title" style={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              
              color: '#000',
              marginTop: '0',
              textAlign:'centre',
              textShadow:'2px 2px 4px rgba(0,0,0,0.2)',
              letterSpacing:'3px'
            }}>
              ABES Cafeteria
            </h1>
            <p className="hero-description" style={{
              fontSize: '1.8rem',
              lineHeight: '1.8',
             
              color: '#000',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto '
            }}>
              Fueling your study sessions with delicious and affordable meals. Your go-to spot for quick bites and relaxing breaks.
            </p>
            </div>
          </div>
          <div className="col-lg-6" style={{
            flex: '1',
            paddingLeft: '20px',
            
            alignItems: 'stretch',
            position: 'static',
            display:'none'
          }}>
            <img
              src="/col.avif"
              alt="Cafeteria Food"
              className="hero-image"
              style={{
                borderRadius: '15px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default HeroSection;
