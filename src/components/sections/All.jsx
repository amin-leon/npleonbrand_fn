import React from "react";
import Projectcard from "../common/Projectcard";

const imageUrls = [
  "https://s3-alpha.figma.com/hub/file/3745921144/d06cf387-29c9-485e-9d3f-70688ac36fad-cover.png",
  "https://s3-alpha.figma.com/hub/file/3745921144/d06cf387-29c9-485e-9d3f-70688ac36fad-cover.png",
  "https://s3-alpha.figma.com/hub/file/3745921144/d06cf387-29c9-485e-9d3f-70688ac36fad-cover.png",
  "https://s3-alpha.figma.com/hub/file/3745921144/d06cf387-29c9-485e-9d3f-70688ac36fad-cover.png",
  "https://s3-alpha.figma.com/hub/file/3745921144/d06cf387-29c9-485e-9d3f-70688ac36fad-cover.png",
  "https://s3-alpha.figma.com/hub/file/3745921144/d06cf387-29c9-485e-9d3f-70688ac36fad-cover.png",
];

function All() {
  return (
    <div className="projects-list grid grid-cols-3 gap-3">
      {imageUrls.map((url, index) => (
        <Projectcard key={index} image={url} />
      ))}
    </div>
  );
}

export default All;
