import React from "react";



function PhotosModal( {closeModal, src, city, hashtags}) {
  
    let top = 0;
    if(document.body.scrollTop) {
      top = document.body.scrollTop;
    }
    else{
      top = document.documentElement.scrollTop;
    }

    let namedTags = [];
    let cont = 0;

   while (cont < hashtags.length){
    namedTags[cont] = (
          <span
          className={`hashtag-modal text-light col-md-1`}
        >
          {hashtags[cont]}
        </span>
        );      
   
    cont++;
   }

  return(
    <div className="modal-background" style={{top: top}}>
      <div className="modal-container" >
        <div className="title-close-btn">
          <buton onClick={() => closeModal(false)}><i className="fas fa-times"></i></buton>
        </div>
        <div className="modal-title">
          <h1 className="modal-title">{city}</h1>
        </div>
        <div className="modal-body contain">
          <img className="contain modal-element" src={src} />
        </div>
        <div className="footer-gallery-modal">
          {namedTags}
        </div>
      </div>
    </div>
  );
}

export default PhotosModal;