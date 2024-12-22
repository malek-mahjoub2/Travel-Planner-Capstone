import React from 'react';

const countryVideos = {
  Tunisia: 'Y8A75btlAaA',  // YouTube video ID for Tunisia
  Qatar: 'Tqg5yUq4LS8',    // YouTube video ID for Qatar
  UAE: '2_NMp0V_Bqk',      // YouTube video ID for UAE
  Morocco: 'pg7J4dK5tOw',  // YouTube video ID for Morocco
  Algeria: '09JaxLa7Cms',  // YouTube video ID for Algeria
  SaudiArabia: 'your_video_id_here',  // Replace with actual video ID for Saudi Arabia
};

function CountryVideo({ country }) {
  const videoId = countryVideos[country];

 
  return (
    <div>
      <h2>Watch a video about {country}</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`YouTube video for ${country}`}
      ></iframe>
    </div>
  );
}

export default countryVideos;
