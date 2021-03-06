import React from 'react';

const GalleryItem = ({ galleryItemData }) => {
  const itemClass = `grid-item ${galleryItemData ? galleryItemData.size : null}`;
  return (
    <div 
      className={ itemClass } 
      style={{ backgroundImage: `url('assets/img/thumbs/${galleryItemData.src}')`}}
      alt={ galleryItemData.name }
    >
      <div className="img-overlay"><p>{galleryItemData.name}</p></div>
    </div>
  );
}

export default GalleryItem;