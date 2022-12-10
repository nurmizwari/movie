import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";
import Carousel from "./components/carousel";
import ListMovie from "./components/listMovie";
import { Suspense } from "react";
import Loading from "./loading";
import Pagination from "./components/pagination";

export default function Home() {
  return (
    <div className="semua">
      <Navbar />
      <Carousel />
      <Suspense fallback=<Loading />>
        <ListMovie />
      </Suspense>
    </div>
  );
}
