import React, { useEffect, useState } from "react";
import axios from "axios";
import Photos from "./subcomponentes/Photos";
import Loading from "../utils/Loading";

const Gallery = () => {
  const [searchFilter, setSearchFilter] = useState("");
  //const [getHashtagsG, setGetHashtagsG] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [loading, setLoading] = useState(true);
  
  console.log("Soy galeria: Me reacargue");

  //Api call - sugerencias de busqueda
  useEffect(() => {
    // async function fetchHashtagsG() {
    //   const URL = `${process.env.REACT_APP_API}/tags`;
    //   try {
    //     const res = await axios.get(URL);

    //     setGetHashtagsG(res.data.data.registros);

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchHashtagsG();
    setLoading(false);
  }, []);

  // const Tags  = getHashtagsG
  // .map((tag) => {
  //   return(
  //   <span key={tag.id}
  //     onClick={setTagsSelected(tag.id)}
  //     className={`hashtag-filter text-light small ${
  //       tagsSelected.includes(tag.id) ? " active" : ""
  //     } ${tag.visible ? " d-block" : " d-none"}`}>
  //       {/* ${tag.visible ? " d-block" : " d-none"} */}
  //       #{tag.nombre}
  //   </span>
  //   );
  // })

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <>
    <div class="header-gallery col-sm-10 offset-sm-1">
      <p className="gallery-title">Galería de localidades</p>
      <input
        id="buscar"
        type="text"
        className="gallery-search buscador-icon"
        placeholder="Buscá una localidad..."
        autoComplete="off"
        onChange={handleChange}
      />

    </div>
    {/* <div className="d-flex justify-content-center flex-wrap center-masonry col-sm-10 offset-sm-1">
      <p className="">Tags:</p> 
      {Tags}
    </div> */}
    {loading ? (
      <div className="PFiltroAlojamiento mb-5">
      <div>
        <Loading margins="96px" />
      </div>
    </div>
    ) : (
      <Photos searchFilter={searchFilter} /> 
    )}
    
    </>
  );
};

export default Gallery;