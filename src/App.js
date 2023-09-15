// import Header from "./Header";
// import Button from "./Button";
// import { useState } from "react";

// const articles = {};
// const menuItems = [];

// // export default function App() {
// const [name, setName] = useState("Ludwig");

// function handleButtonOnClick() {
//   setName("van Bethoven");
// }

// return (
//   <div>
//     <Header name={name}></Header>
//     <Button text="Press me!" onClick={handleButtonOnClick}></Button>
//   </div>
// );

// const menuTitles = "";

// export default function App() {
//   return (
//     <div>
//       <Header text={menuTitles}></Header>
//     </div>
//   );
// }

// function External()

// console.log(s);
// // Component:
// // -- data
// // -- logic
// // -- return jsx

// <App>
//   <Header>
//     <MenuItem text={}></MenuItem>
//   </Header>
//   <Title>
//     <Logo />
//   </Title>
// --------------------
//   <Body>
//     <Article title={} article={} img={} />
//   </Body>
// </App>;

import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Info from "./components/info/Info.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo>
        Гранд-финал 2022
        <span>3-6 ноября</span>
      </Promo>
      <Info />
    </div>
  );
}

export default App;

// siteData = [
//   {
//     title: "Gran Tour de France",
//     text: "Will be started on May 23th",
//     image: "../car.jpg",
//     imageStyle: "wide",
//   },
// ];

// <Container image={image} imageStyle={className}>
//   {(title, text)}
// </Container>;

// function Container({ image, imageStyle, children }) {
//   return;
// }

// function Image({ image, imageStyle }) {}

// siteData.map((site) => (
//   <Container>
//     {site.title}
//     {site.text}
//   </Container>
// ));
