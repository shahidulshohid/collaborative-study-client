import React, { useEffect, useState } from "react";

const TopTutors = () => {
  const [tutors, setTutors] = useState([])
  useEffect(()=> {
    fetch(`/topTutors.json`)
    .then(res => res.json())
    .then(data => setTutors(data.tutors))
  }, [])
  return (
    <div className="my-16" id="topTutors">
      <h2 className="text-center text-[#3939c8] text-2xl md:text-3xl font-semibold dark:text-white">Top Tutors</h2>
      <p className="text-center mb-8 dark:text-white">
        Learn from the best! Our top-rated tutors are here to guide you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src={tutor.image}
              alt={tutor.name}
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-bold">{tutor.name}</h3>
              <p className="text-gray-600">{tutor.specialization}</p>
              <p className="text-yellow-500">⭐ {tutor.rating} / 5.0</p>
              <p className="text-gray-500">{tutor.shortBio.substring(0, 80)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTutors;
