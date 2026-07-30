
// import {useState,useEffect} from 'react'
// import {useParams,Link,useNavigate} from 'react-router-dom'


// function EditNotes({titles, setTitles, notes, setNotes, allNotes, setAllNotes}){
//  const { index } = useParams(); 
//   const noteIndex = parseInt(index)
//   const navigate = useNavigate();

// useEffect(() => {
//     if (allNotes[noteIndex]) {
//       setTitles(allNotes[noteIndex].title);
//       setNotes(allNotes[noteIndex].note);
//     }
//   }, [noteIndex, allNotes, setTitles, setNotes]);


//   function handleSave(){
//     const updatedNotes = [...allNotes];
//     updatedNotes[noteIndex] = { title: titles, note: notes };
//     setAllNotes(updatedNotes);
//     setTitles('');
//     setNotes('');
//     navigate('/savednotes');
//   }



//     return(<div>
//              <input type='text'  value={titles} onChange={(e) => setTitles(e.target.value)} ></input>
//             <br></br>
//             <textarea  rows='4' cols='50' value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
//             <br></br>
//             <button onClick={handleSave}>Save</button> 
//             <br></br>
//             <Link to="/savednotes"><button>Get All Notes</button></Link>

//     </div>)


// }

// export default EditNotes;





import {useEffect} from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'

function EditNotes({titles, setTitles, notes, setNotes, allNotes, setAllNotes}){
 const { index } = useParams();
  const noteIndex = parseInt(index)
  const navigate = useNavigate();

useEffect(() => {
    if (allNotes[noteIndex]) {
      setTitles(allNotes[noteIndex].title);
      setNotes(allNotes[noteIndex].note);
    }
  }, [noteIndex, allNotes, setTitles, setNotes]);

  function handleSave(){
    const updatedNotes = [...allNotes];
    updatedNotes[noteIndex] = { title: titles, note: notes };
    setAllNotes(updatedNotes);
    setTitles('');
    setNotes('');
    navigate('/savednotes');
  }

    return(
      <div className="page">
        <div className="card form-card">
          <h1 className="page-title">Edit Note</h1>

          <label className="field-label">Title</label>
          <input className="input" type='text' value={titles} onChange={(e) => setTitles(e.target.value)} />

          <label className="field-label">Note</label>
          <textarea className="textarea" rows='6' value={notes} onChange={(e) => setNotes(e.target.value)} />

          <div className="button-row">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
            <Link to="/savednotes"><button className="btn btn-secondary">Get All Notes</button></Link>
          </div>
        </div>
      </div>
    )
}
export default EditNotes;