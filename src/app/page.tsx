import Header from "./Components/Header";

export default function Home() {
  const headerLinks = [
    { href: "/", children: "Home" },
    { href: "/about", children: "Projetos" },
    { href: "/about", children: "Sobre" },
    { href: "/contact", children: "Contato" },
  ];
  return (
    <>
      <Header links={headerLinks} />
    </>
  );
}
