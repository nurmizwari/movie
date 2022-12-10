"use client";
import React from "react";
import useSWR from "swr";
import { useState } from "react";

export default function Pagination() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [tambah, setTambah] = useState(1);

  const nextt = async (e) => {
    e.preventDefault();
    await setTambah(tambah + 1);
    // nextPage(tambah);
  };

  const API = process.env.API_KEY;
  console.log(API, "apikey");
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular/?api_key=1b81f32a1b275e662103b44eb3211c4f&page=${tambah}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data, "dataaa");
  return (
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
              <a class="page-link" href="#" onClick={nextt}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
