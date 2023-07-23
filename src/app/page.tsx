import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";

export default function Home() {
  const headerLinks = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    { href: "/contact", children: "Contact" },
  ];
  return (
    <>
      <Header links={headerLinks} />
      <h1>Portfolio</h1>
    </>
  );
}
