import Masonry from "react-masonry-css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotosModal from "./PhotosModal";
import Loading from "../../utils/Loading";

const Columns = {
  default: 4,
  1200: 3,
  1000: 2,
  700: 1,
};

const Photos = (props) => {
  const [getPhotos, setGetPhotos] = useState([]);
  const [getHashtags, setGetHashtags] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  //Valores para modal
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedImgCity, setSelectedImgCity] = useState("");
  const [selectedImgTags, setSelectedImgTags] = useState([]);

  //Get de fotos y hashtags
  useEffect(() => {
    async function fetchPhotos() {
      const URL = `${process.env.REACT_APP_API}/fotos/16`;
      try {
        const res = await axios.get(URL);

        setGetPhotos(res.data.data.registros);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchHashtags() {
      const URL = `${process.env.REACT_APP_API}/tags`;
      try {
        const res = await axios.get(URL);
        setGetHashtags(res.data.data.registros);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPhotos();
    fetchHashtags();
    setLoading(false);
  }, []);

  const Posts = getPhotos
    .filter((item) => {

      let cont = 0;
      let searchParam = props.searchFilter;
      let matchesTagsId = [];
      let foundMatch = false;

      getHashtags.forEach(function(tag){
        if(tag.nombre.includes(searchParam)){
          matchesTagsId[cont] = tag.id; 
          cont++;
        }
      })

      let splitedTags = item.tags.split(",");
      
      for (let i = 0; i < splitedTags.length; i++) {
        if (matchesTagsId.some(id => parseInt(id) === parseInt(splitedTags[i]))) {
          foundMatch = true;
          break;
        }
      }
      
      if (
        item.ciudad
          .toString()
          .toLowerCase()
          .includes(searchParam.toLowerCase())) { 
            foundMatch = true;
      }
      if(foundMatch){
        console.log(item);
      }

      return foundMatch ? item : null;

    })
    .map(({ id, imagen, ciudad, tags }) => {
      imagen =
        "http://www.turismo.sanluis.gov.ar/api-turismo/public/recursos/galeriaLocalidad/" +
        imagen;

      let namedTags = [];
      let countTag = 0;
      let splitedTags = tags.split(",");
      splitedTags.forEach(function(tagid) {
        getHashtags.forEach(function(tag) {
          if (tagid == tag.id) {
            let positionTag = "";
            switch (countTag) {
              case 0:
                positionTag = "first";
                break;
              case 1:
                positionTag = "second";
                break;
              case 2:
                positionTag = "third";
                break;
              case 3:
                positionTag = "fourth";
                break;
              case 4:
                positionTag = "fifth";
                break;
              default:
                console.log("demasiados tags");
            }

            namedTags[countTag] = (
              <span
                className={`hashtag text-light col-sm-auto m-0 ${positionTag}`}
              >
                #{tag.nombre}
              </span>
            );

            countTag++;
          }
        });
      });
      //setLoading(false);
      return (
        <div
          className="container-img"
          onClick={() => setModal(id, imagen, ciudad)}
          key={id}
        >
          <img clasName="imagen" src={imagen} alt="" />
          <div className="ciudad">
            <p className="text-light m-1">{ciudad}</p>
          </div>
          <div className="hashtag-container">{namedTags}</div>
        </div>
      );
    });
  // ) : (
  //   console.log("Sin resultados");
  // )}

  function setModal(id, imagen, ciudad) {
    setOpenModal(true);

    setSelectedImg(imagen);
    setSelectedImgCity(ciudad);

    //Set array hashtags
    let spanTags = [];
    let hashtags = getPhotos.find((x) => x.id == id).tags.split(",");

    hashtags.forEach(function(tagId) {
      getHashtags.forEach(function(tag) {
        if (tagId == tag.id) {
          spanTags.push("#" + tag.nombre);
        }
      });
    });

    setSelectedImgTags(spanTags);
  }

  return (
    
    <div className="center-masonry">
       {loading ? (
            <div className="loading">
              <Loading margins="20px" />
              <p>Cargando fotos...</p>
            </div>
          ) : (
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid col-sm-10 offset-sm-1 mb-5"
        columnClassName="my-masonry-grid_column"
      >
           {Posts}
       
      </Masonry>
       )}
      {openModal && (
        <PhotosModal
          closeModal={setOpenModal}
          src={selectedImg}
          city={selectedImgCity}
          hashtags={selectedImgTags}
        />
      )}
    </div>
  );
};

export default Photos;