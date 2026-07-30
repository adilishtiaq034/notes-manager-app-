// import Content from "./content.jsx";
// import SavedNotes from './savednotes.jsx'
// import EditNotes from './editnotes.jsx';
// import {useState,useEffect} from 'react'
// import { Routes, Route} from 'react-router-dom'

// function App(){
//  const[allNotes, setAllNotes] = useState([]);
//  const[titles, setTitles] = useState('');
//     const[notes, setNotes] = useState('');

//  useEffect(() => {
//     const savedNotes = localStorage.getItem("allNotes");

//     if (savedNotes !== null) {
//         setAllNotes(JSON.parse(savedNotes));
//     }
// }, []);

// useEffect(() => {
//     localStorage.setItem("allNotes", JSON.stringify(allNotes));
// }, [allNotes]);

//   return(
//     <div>
//     <h2>Adil Notes</h2>
//         <Routes>
//           <Route path='/' element={<Content allNotes={allNotes} setAllNotes={setAllNotes} titles={titles} setTitles={setTitles} notes={notes} setNotes={setNotes} />} />
//           <Route path='/savednotes' element={<SavedNotes allNotes={allNotes} setAllNotes={setAllNotes} titles={titles} setTitles={setTitles} notes={notes} setNotes={setNotes} />} />
//           <Route path='/editnote/:index' element={<EditNotes  titles={titles} setTitles={setTitles} notes={notes} setNotes={setNotes} allNotes={allNotes} setAllNotes={setAllNotes} />} />
//         </Routes>
//     </div>
//   )
// }
// export default App;

import Content from "./content.jsx";
import SavedNotes from './savednotes.jsx'
import EditNotes from './editnotes.jsx';
import {useState,useEffect} from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App(){
 const[allNotes, setAllNotes] = useState([]);
 const[titles, setTitles] = useState('');
    const[notes, setNotes] = useState('');

 useEffect(() => {
    const savedNotes = localStorage.getItem("allNotes");

    if (savedNotes !== null) {
        setAllNotes(JSON.parse(savedNotes));
    }
}, []);

useEffect(() => {
    localStorage.setItem("allNotes", JSON.stringify(allNotes));
}, [allNotes]);

  return(
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="brand">
          <span className="brand-mark">N</span>
          <span>Adil Notes</span>
        </Link>
      </header>

      <main className="app-main">
        <Routes>
          <Route path='/' element={<Content allNotes={allNotes} setAllNotes={setAllNotes} titles={titles} setTitles={setTitles} notes={notes} setNotes={setNotes} />} />
          <Route path='/savednotes' element={<SavedNotes allNotes={allNotes} setAllNotes={setAllNotes} titles={titles} setTitles={setTitles} notes={notes} setNotes={setNotes} />} />
          <Route path='/editnote/:index' element={<EditNotes  titles={titles} setTitles={setTitles} notes={notes} setNotes={setNotes} allNotes={allNotes} setAllNotes={setAllNotes} />} />
        </Routes>
      </main>
    </div>
  )
}
export default App;