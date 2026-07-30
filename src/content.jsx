
// import {useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'


// function Content({allNotes, setAllNotes, titles, setTitles, notes, setNotes}){
    
    
// function handleSave(){
//     if(titles.trim() === '' || notes.trim() === ''){
//         alert('Please enter both title and note.');
//         return;
//     }
//  setAllNotes([...allNotes, {title: titles, note: notes}]);
//  setTitles('');
//  setNotes('');

//  }


//     return(
//         <div>
//             <input type='text' placeholder='Enter title...' value={titles} onChange={(e) => setTitles(e.target.value)} ></input>
//             <br></br>
//             <textarea placeholder='Write note here...' rows='4' cols='50' value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
//             <br></br>
//             <button onClick={handleSave}>Add Note</button> 
//             <br></br>
//             <Link to="/savednotes"><button>View Notes</button></Link>
            

//         </div>
//     )
// }
// export default Content;


import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Content({allNotes, setAllNotes, titles, setTitles, notes, setNotes}){

function handleSave(){
    if(titles.trim() === '' || notes.trim() === ''){
        alert('Please enter both title and note.');
        return;
    }
 setAllNotes([...allNotes, {title: titles, note: notes}]);
 setTitles('');
 setNotes('');
 }

    return(
        <div className="page">
          <div className="card form-card">
            <h1 className="page-title">Create Note</h1>
            <p className="page-subtitle">A simple space for your notes.</p>

            <label className="field-label">Title</label>
            <input
              className="input"
              type='text'
              placeholder='Enter title...'
              value={titles}
              onChange={(e) => setTitles(e.target.value)}
            />

            <label className="field-label">Note</label>
            <textarea
              className="textarea"
              placeholder='Write note here...'
              rows='6'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <div className="button-row">
              <button className="btn btn-primary" onClick={handleSave}>Add Note</button>
              <Link to="/savednotes"><button className="btn btn-secondary">View Notes</button></Link>
            </div>
          </div>
        </div>
    )
}
export default Content;