// import Content from "./content.jsx";
// import {Link} from 'react-router-dom'
// import {useState} from 'react'
// function SavedNotes({allNotes, setAllNotes, titles, setTitles, notes, setNotes}){
  

                 



    
//     return(<>
//      {allNotes.length === 0 && <p>No notes saved yet.</p>}
//      {allNotes.length > 0 && <h3>All Notes</h3>}
      
//             {allNotes.map((note, index) => (
//                 <p key={index}>{index + 1}. {note.title}<br></br>{note.note} 
//           <Link to={`/editnote/${index}`}> <button>Edit</button></Link> 
//           <button onClick={() => {
//             const updatedNotes = [...allNotes];
//             updatedNotes.splice(index, 1);
//             setAllNotes(updatedNotes);
//           }}>Delete</button>
//             </p> 
//             ))}
            

//             <Link to="/"> <button>Back to Home</button></Link>
    
//     </>)

// }
// export default SavedNotes;

import {Link} from 'react-router-dom'

function SavedNotes({allNotes, setAllNotes}){

    return(
      <div className="page">
        <div className="list-header">
          <div>
            <h1 className="page-title">All Notes</h1>
            <p className="page-subtitle">{allNotes.length} {allNotes.length === 1 ? 'note' : 'notes'} saved</p>
          </div>
          <Link to="/"><button className="btn btn-primary">+ New Note</button></Link>
        </div>

        {allNotes.length === 0 && (
          <div className="empty-state">
            <p>No notes saved yet.</p>
            <Link to="/"><button className="btn btn-secondary">Create your first note</button></Link>
          </div>
        )}

        <div className="notes-grid">
          {allNotes.map((note, index) => (
            <div className="card note-card" key={index}>
              <h3 className="note-title">{note.title}</h3>
              <p className="note-body">{note.note}</p>
              <div className="note-actions">
                <Link to={`/editnote/${index}`}>
                  <button className="btn btn-outline btn-sm">Edit</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    const updatedNotes = [...allNotes];
                    updatedNotes.splice(index, 1);
                    setAllNotes(updatedNotes);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/"><button className="btn btn-secondary back-btn">Back to Home</button></Link>
      </div>
    )
}
export default SavedNotes;