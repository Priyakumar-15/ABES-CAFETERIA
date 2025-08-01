import React from 'react';
import { data } from "../Pages/restApi.json"

const Qualities = () => {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {
            data[0].ourQualities.map(element=>(
                <div className="card" key={element.id}>
                    <img src ={element.image} alt={element.title}/>
                    <p className="title"> {element.title}</p>
                    <p className="description"> {element.description}</p>
                </div>
            ))
        }
      </div>



    </section>
  );
};

export default Qualities;