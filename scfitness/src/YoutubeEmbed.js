import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.js'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="300"
      height="300"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="10"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;