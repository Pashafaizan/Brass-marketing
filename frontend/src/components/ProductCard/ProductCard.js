import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { fetchData } from "../../middleWare/requestHandler";
import { Link } from "react-router-dom";
import "./productCard.css";
import ProductList from "../ProductList/ProductList";
import { useState, useEffect, useReducer, useCallback, useRef } from "react";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 20,
    minWidth: 200,
    minHeight: 200,
    maxHeight: 250,
  },
  container: {
    // margin: 20,
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "90vw",
    display: "flex",
    flexWrap: "wrap",

    // border: "10px solid black"
  },
  media: {
    height: 150,
  },
});

export default function ProductCard() {
  console.log("faizan pasha");
  const classes = useStyles();
  const [list, setList] = useState([]);

  const imgReducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case "STACK_IMAGES":
        console.log("STckImages");
        return { ...state, data: state.data.concat(action.data) };
      case "FETCHING_IMAGES":
        console.log("fetching here");
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const [imgData, imgDispatch] = useReducer(imgReducer, {
    data: [],
    fetching: true,
  });
  console.log(imgData);
  const pageReducer = (state, action) => {
    switch (action.type) {
      case "ADVANCE_PAGE":
        console.log(state.page + 1);
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };

  const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0 });

  useEffect(async () => {
    imgDispatch({ type: "FETCHING_IMAGES", fetching: true });
    const data = await fetchData(`/list?page=${pager.page}&limit=4`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => {
        // console.log("==========================")
        // console.log(e);
        imgDispatch({ type: "STACK_IMAGES", data });
        imgDispatch({ type: "FETCHING_IMAGES", fetching: false });
      })
      .catch((e) => {
        // handle error
        imgDispatch({ type: "FETCHING_IMAGES", fetching: false });
        return e;
      });

    // fetch('https://picsum.photos/v2/list?page=0&limit=10')
    //   .then(data => data.json())
    //   .then(images => {
    //     console.log(images);
    //     imgDispatch({ type: 'STACK_IMAGES', images })
    //     imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
    //   })
    //   .catch(e => {
    //     // handle error
    //     imgDispatch({ type: 'FETCHING_IMAGES', fetching: false })
    //     return e
    //   })
  }, [imgDispatch, pager.page]);

  // App.js

  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            pagerDispatch({ type: "ADVANCE_PAGE" });
          }
        });
      }).observe(node);
    },
    [pagerDispatch]
  );
  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  console.log(imgData);

  // useEffect(async () => {
  //   const data = await fetchData('/list', {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },

  //   }).then(e => {

  //     setList(e);

  //   })

  // }, []);

  // const logo = require("../logo.svg");
  // const one = require("../../../../backend/app/controlers/public/mobile.jpg")
  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
          {/* 
      {imgData.images.map((image, index) => {
          const { author, download_url } = image
          return (
            <div key={index} className="card">
              <div className="card-body ">
                <img
                  alt={author}
                  className="card-img-top"
                  src={download_url}
                />
              </div>
              <div className="card-footer">
                <p className="card-text text-center text-capitalize text-primary">Shot by: {author}</p>
              </div>
            </div>
          )

        })} */}

          {imgData.data.map((item) => {
            {
              console.log(item.filePath);
            }
            return (
              <>
                <Link to={`/product/${item._id}`}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={`http://localhost:7860/images/${item.fileName}`}
                        title="Contemplative Reptile"
                      />
                      {}
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.item_name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.item_description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <div
        id="page-bottom-boundary"
        style={{ border: "1px solid red" }}
        ref={bottomBoundaryRef}
      ></div>
    </>
  );
}
