"use client";
import React from "react";
import Pagination from "./pagination";
import useSWR from "swr";
import Loading from "../loading";
import { useState, useEffect } from "react";

// const API = process.env.API_KEY;
// console.log(API, "api key");
// async function getMovie() {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/popular/?api_key=${API}`
//   );
//   if (!res.ok) {
//     throw new Error("error fetching data");
//   }
//   return res.json();
// }

// async function getMovieSearch(q) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${API}`
//   );
//   if (!res.ok) {
//     throw new Error("error fetching data");
//   }
//   return res.json();
// }

export default function ListMovie() {
  const [tambah, setTambah] = useState(1);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular/?api_key=1b81f32a1b275e662103b44eb3211c4f`,
    fetcher
  );
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  console.log(data, "<dataaaa");
  // let movie = await getMovie();

  // const search = async (q) => {
  //   const query = await getMovieSearch(q);
  //   console.log({ query: query });
  // };
  // movie = await getMovieSearch(q);

  // const nextt = async () => {
  //   setTambah(tambah + 1);
  //   let hasil = await fetch(
  //     `https://api.themoviedb.org/3/movie/popular/?api_key=1b81f32a1b275e662103b44eb3211c4f&page=${tambah}`
  //   );
  //   return hasil.json();
  // };

  // let dataNext = await nextt();
  // console.log(dataNext, "<< dta");

  return (
    <div className="container mt-5">
      <div className="container d-flex flex-row justify-content-between">
        <h2 className="text-light">Film Populer</h2>
        <form class="d-flex" role="search">
          <input
            class="search text-light"
            type="search"
            placeholder="Cari"
            aria-label="Search"
          />
          <button class="btn" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </div>
      <div className="row">
        {data.results.map((movi, idx) => (
          <div className=" col-sm-6 col-md-5 col-lg-4 colom mb-3" key={movi.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movi.poster_path}`}
                className="card-img-top"
                alt="gambar"
              />

              {/* <div class="card-body">
                <h5 class="card-title">{movi.original_title}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-5">
        <div className="col  d-flex justify-content-center ">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
