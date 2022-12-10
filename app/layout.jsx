import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
// import "bootstrap/dist/js/bootstrap.bundle";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
