import './OurCompany.css';
import React from "react";

const Company = () => {
    const team = [
        { id: 1, name: "Jane Doe", title: "CEO", img: "/bwlogo.png"},
        { id: 1, name: "Jane Doe", title: "CEO", img: "/bwlogo.png"},
        { id: 1, name: "Jane Doe", title: "CEO", img: "/bwlogo.png"},
        { id: 1, name: "Jane Doe", title: "CEO", img: "/bwlogo.png"},
        { id: 1, name: "Jane Doe", title: "CEO", img: "/bwlogo.png"},
        { id: 1, name: "Jane Doe", title: "CEO", img: "/bwlogo.png"},
    ];
    return (

        <section className="our-company">

            <div className="company-container">

                <div className="company-title">
                    <h3>Our Company</h3>

                    <p>Explore a variety of gifts to make  whether birthdays, <br /> anniversaries and milestones extra special</p>
                </div>

                <div className="marquee">

                    <div className="marquee-content">
                        {team.map((person) => (
                            <div key={person.id} className="profile-card">
                                <img src={person.img} alt={person.name} className="profile-img" />
                                <h3>{person.name}</h3>
                                <p>{person.title}</p>
                            </div>
                        ))}

                        {/* duplicate for infinite scroll */}
          {team.map((person) => (
            <div key={`dup-${person.id}`} className="profile-card">
              <img src={person.img} alt={person.name} className="profile-img" />
              <h3>{person.name}</h3>
              <p>{person.title}</p>
            </div>
          ))}
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Company;