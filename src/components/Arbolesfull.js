import React, { useEffect, useState, useRef } from "react";
import { Consumer } from "../context";
import Loading from "../utils/Loading";
import { Link } from "react-router-dom";
import axios from "axios";
import { pink } from "@mui/material/colors";

const Arbolesfull = () => {
  const [visibles, setVisibles] = useState({ list: [] });
  const [data, setData] = useState({ list: [] });
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    axios({
      method: "get",
      headers: {
        Authorization: "token",
      },
      url: `${process.env.REACT_APP_API}/arboles`,
      responseType: "json",
    })
      .then((response) => {
        setVisibles({ list: response.data.data.registros.splice(0, 12) });
        setData({ list: response.data.data.registros });
      })
      .catch((error) => {
        console.log(error);
      });

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    // here we simulate adding new posts to List
    const newList = visibles.list.concat(data.list.splice(0, 12));
    setVisibles({
      list: newList,
    });
    setData({ list: data.list });
  }, [page]);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <React.Fragment>
      {
        <div>
          <div className="container Arbolesfull">
            <div
              className="container ListadoAtractivofull"
              style={{
                paddingTop: "130px",
                paddingLeft: "80px",
              }}
            >
              <h3 style={{ color: `#722789` }}>Listado de Árboles</h3>
            </div>
            <br />
          </div>
          <hr></hr>
          <div className="container">
            {visibles.list.map((arb, index) => {
              let descripcion = arb.descripcion.substr(0, 450) + "...";
              //let fecha = nov.fecha.split("-");
              return (
                <Link to={`/arbol/${arb.id}`} key={`nov-f-${arb.id}`}>
                  <div class="blog-item">
                    <a href="#">
                      <div class="icon">
                        <img
                          className=""
                          src={`${process.env.REACT_APP_API_RECURSOS}/recursos/arboles/${arb.foto_uno}`}
                          alt="Img"
                        />
                      </div>
                      <div class="content">
                        <div class="title" style={{ color: "#722789" }}>
                          {arb.nombre_popular} <br></br>
                          <span class="blog-date">
                            <i> {arb.nombre_cientifico} </i>
                          </span>
                        </div>
                        <div class="rounded"></div>

                        <p>{descripcion}</p>
                      </div>

                      <div class="item-arrow">
                        {" "}
                        <p className="leerMas">Leer más</p>
                        <br></br>
                        <i
                          class="fa fa-long-arrow-right"
                          aria-hidden="true"
                          style={{ color: "#e36838" }}
                        ></i>
                      </div>
                    </a>
                  </div>{" "}
                  <hr></hr>
                </Link>
              );
            })}
            <div className="loading" ref={loader}>
              <Loading margins="96px" />
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  );
};

Arbolesfull.contextType = Consumer;

export default Arbolesfull;
