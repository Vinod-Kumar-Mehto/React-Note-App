import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note"


function App() {


  let [addItem, setitem] = useState([]);
  const addnote = (note) => {
    setitem((oldItem) => {
      return [...oldItem, note]


    })

  }

  const deleteItem = (id) => {
    setitem((old) => {
      return (old.filter((cur, ind) => {
        return ind !== id
      }))

    })




  }

  return (
    <>
      <Header />
      <Createnote passnote={addnote} />

      {addItem.map((current, index) => {
        return <Note
          key={index}
          id={index}
          title={current.title}
          content={current.content}
          passfun={deleteItem}
        />
      })}
      <Footer />


    </>
  )
}

export default App;
