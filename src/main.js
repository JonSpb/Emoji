import { useState, useEffect } from "react";
import Card from "./card";
// import emoji from "./emoji.json";


// export function Main() {
//   const [search, setSearch] = useState("");
//   const filterKeywords = emoji.filter(function (el) {
//     return (el.keywords.toLowerCase().includes(search))
//   });

//   return (
//     <>
//       <div className="header">
//         <h1>Emoji Finder</h1>
//         <p>Find emoji by keywords</p>
//         <input
//           className="search"
//           type="search"
//           placeholder="Placeholder"
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//         ></input>
//       </div>
//       <div className="container">
//         <div className="all__card">
//           {filterKeywords.map(( card ) => (
//             <Card
//               key={card.title}
//               symbol={card.symbol}
//               title={card.title}
//               keywords={Array.from(new Set(card.keywords.split(" "))).join(" ")}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Main;


// export function Main() {
//   const [search, setSearch] = useState("");
//   const filterKeywords = emoji.filter(function (el) {
//     return search.split(' ').every((searchWord) => el.keywords.toLowerCase().includes(searchWord.toLowerCase()))
//   });

//   return (
//     <>
//       <div className="header">
//         <h1>Emoji Finder</h1>
//         <p>Find emoji by keywords</p>
//         <input
//           className="search"
//           type="search"
//           placeholder="Placeholder"
//           value={search}
//           onChange={(event) => setSearch(event.target.value)}
//         ></input>
//       </div>
//       <div className="container">
//         <div className="all__card">
//           {filterKeywords.map(( card ) => (
//             <Card
//               key={card.title}
//               symbol={card.symbol}
//               title={card.title}
//               keywords={Array.from(new Set(card.keywords.split(" "))).join(" ")}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Main;


export function Main() {
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([]);

 
useEffect(() => {
  fetch ("https://emoji.ymatuhin.workers.dev/")
  .then (responce => responce.json())
  .then (json => {console.log(json)
    setPost(json)})
}, [])

const filterKeywords = post.filter(function (el) {
      return search.split(' ').every((searchWord) => el.keywords.toLowerCase().includes(searchWord.toLowerCase()))
    });

  return (
    <>
      <div className="header">
        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>
        <input
          className="search"
          type="search"
          placeholder="Placeholder"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </div>
      <div className="container">
        <div className="all__card">
          {filterKeywords.map(( card ) => (
            <Card                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
              key={card.title}
              symbol={card.symbol}
              title={card.title}
              keywords={Array.from(new Set(card.keywords.split(" "))).join(" ")}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;