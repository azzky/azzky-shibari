import React from "react"
import Lightbox from "react-image-lightbox"
import PropTypes from "prop-types"

export const ImagesLightBox = ({
  imagesLightbox,
  photoIndex,
  lightBoxDispatch,
  lightBoxAdditionalProps,
}) => {
  return(
  <Lightbox className={!imagesLightbox[photoIndex].data.nsfw ? '' : 'nsfw'}
  mainSrc={imagesLightbox[photoIndex].full}
  nextSrc={imagesLightbox[(photoIndex + 1) % imagesLightbox.length].full}
  prevSrc={
    imagesLightbox[
      (photoIndex + imagesLightbox.length - 1) % imagesLightbox.length
    ].full
  }
    onCloseRequest={() => lightBoxDispatch({ type: "close" })}
    onMovePrevRequest={() =>
      lightBoxDispatch({
        type: "photoIndex",
        photoIndex:
          (photoIndex + imagesLightbox.length - 1) % imagesLightbox.length,
      })
    }
    onMoveNextRequest={() =>
      lightBoxDispatch({
        type: "photoIndex",
        photoIndex: (photoIndex + 1) % imagesLightbox.length,
      })
    }
    imageTitle={
      imagesLightbox[photoIndex].lightboxTitle &&
      imagesLightbox[photoIndex].lightboxTitle
    }
    imageCaption={
      imagesLightbox[photoIndex].lightboxCaption &&
      imagesLightbox[photoIndex].lightboxCaption
    }
    {...lightBoxAdditionalProps}
  />
)};

ImagesLightBox.propTypes = {
  imagesLightbox: PropTypes.array.isRequired,
  photoIndex: PropTypes.number,
  lightBoxDispatch: PropTypes.func,
  lightBoxAdditionalProps: PropTypes.object,
};

export default ImagesLightBox;
