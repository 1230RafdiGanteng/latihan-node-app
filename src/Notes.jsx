import { useEffect, useRef, useState } from 'react'
import './App.css'
import NoteItem from './noteItem'
import FormTambah from './formTambah'
import FormEdit from './FormEdit'
import { nanoid } from 'nanoid'
import axios, { Axios } from 'axios'

function Note() {
  const [notes, setNote] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null)
  const [isEditKlik, setIsEditKlik] = useState(null)



  useEffect(() => {
    tampilkan()
  }, [])

  const tampilkan = async () => {
    const notes = await axios.get('http://192.168.26.35:8000/api/v1/')
      .then((response) => {
        return response
        // console.log(response.data)
      })
      .catch((error) => {
        return error
      })
    console.log(notes.data.data)
    setNote(notes.data.data)
  }

  const addNote = async (title, content) => {
    // setNote((oldNote) => {
    const noteBaru = {
      // id: nanoid(),
      title: title,
      content: content,
      writer: 2,
    }
    // return [...oldNote, noteBaru]
    await axios.post('http://192.168.26.35:8000/api/v1/', noteBaru)
      .then((response) => {
        console.log(response.data)
        tampilkan()
        setNote((oldNote) => [...oldNote, response.data])
      })
      .catch((error) => {
        console.error('Error adding note:', error)
      })

  }

  const deleteNote = async (id) => {
    // console.log(notes)
    // const newNote = notes.filter(n => n.id != idNote)
    // setNote(newNote)
    const deletes = await axios.delete(`http://192.168.26.35:8000/api/v1//${id}`)
      .then((response) => {
        /** tampilkan()
         * setNotes((oldNote) => oldNote.filter((note) => note.id !== id))
         */
        return response
      })
      .catch((error) => {
        return error
      })
    console.log(deletes)
    alert(deletes.data)
    tampilkan()
  }

  const editNote = (id, title, content) => {
    setNote((oldNote) =>
      oldNote.map((note) => (note.id === id ? {...note, title, content}: note))
    )
    setIsEditKlik(null)
    setIsEditKlik(false)
  }

  const handleEdit = (id) => {
    setCurrentNoteId(id)
  }

  const handleCancel = () => {
    setCurrentNoteId(null)
  }

  return (
    <>
      <div>
        {currentNoteId ? <FormEdit onEdit={editNote} onCancel={handleCancel} targetValue={notes.filter(e => e.id == currentNoteId)[0]} currentNoteId={currentNoteId} />
          : <FormTambah onAdd={addNote} />
        }
      </div>



      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          content={note.content}
          id={note.id}
          onDelete={deleteNote}
          onEdit={handleEdit} />
      ))}





      {/* <h1>Sticky Notes</h1>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Save {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default Note
