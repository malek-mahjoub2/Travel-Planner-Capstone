import React from 'react';

import TunisiaVideo from '../videos/tunisia.mp4';
import QatarVideo from '../videos/qatar.mp4';
import UAEVideo from '../videos/uae.mp4';
import MoroccoVideo from '../videos/maroc.mp4';
import AlgeriaVideo from '../videos/algerie.mp4';
import SaudiArabiaVideo from '../videos/saudiArabia.mp4';  


const countryVideos = {
  Tunisia: TunisiaVideo,
  Qatar: QatarVideo,
  UAE: UAEVideo,
  Morocco: MoroccoVideo,
  Algeria: AlgeriaVideo,
  SaudiArabia: SaudiArabiaVideo,
};

function CountryVideo({ country }) {
  const videoSrc = countryVideos[country];

  if (!videoSrc) {
    return <div>Sorry, no video available for this country.</div>;
  }

  return (
    <div className="video-container">
      <h2>Watch a video about {country}</h2>
      <video width="560" height="315" controls autoPlay>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default CountryVideo;
