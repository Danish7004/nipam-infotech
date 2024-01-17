import React, { useEffect } from "react";
import { fetchDetail } from "./detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import config from "../../config";
import "./detail.css";
import CastCard from "./CastCard";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(fetchDetail({ id: id }));
  }, [dispatch, id]);
  return (
    <div>
      <div className="detail">
        <img
          className="poster"
          src={`${config.IMAGE_URL}/${data.backdrop_path}`}
          alt="poster1"
        />
        <div className="overlay">
          <div className="box">
            <img src={`${config.IMAGE_URL}/${data.poster_path}`} alt="poster" />
            <div style={{ padding: "5px 10px" }}>
              <h5>
                {data.title}:{data.tagline}
              </h5>
              <p style={{ color: "#24ffc6", margin: "5px 0", display: "flex" }}>
                Rating: {data.vote_average}
              </p>
              <div style={{ margin: "30px 0px" }}>
                <span style={{ display: "flex" }}>
                  {data.runtime} min
                  <div style={{ paddingLeft: "15px" }}>
                    {data.genres?.map((el, i) => (
                      <span key={i}>{el.name}, </span>
                    ))}
                  </div>
                </span>
                <span style={{ display: "flex" }}>
                  Release Date: {data.release_date}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#fff",
              textAlign: "left",
              margin: "0 10px",
              maxWidth: "60%",
            }}
          >
            <h4>overview :</h4>
            <span>{data.overview}</span>
          </div>
        </div>
      </div>
      <CastCard id={id} />
    </div>
  );
}

export default Details;
