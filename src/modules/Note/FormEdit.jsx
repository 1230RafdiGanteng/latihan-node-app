import { useEffect, useRef, useState } from 'react'

function FormEdit({ onEdit, note, targetValue, onCancel }) {
    const [title, setTitle] = useState(targetValue.title)
    const [notes, setNotes] = useState(targetValue.content)

    useEffect(() => {
        const noteToEdit = note.find((note) => note.id === targetValue.id)
        if(noteToEdit){
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content )
        }
    }, [note])

    const handleEdit = () => {
        onEdit(targetValue.id, title, notes)
        setTitle("")
        setNotes("")
    }
    return (
        <section className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-10">

                <div className="font-serif font-semibold text-3xl text-black text-center">
                    <h1>React Notes</h1>

                    <textarea type="text" placeholder="Your title notes here"
                        className="w-full border-2 border-black text-black mt-2 text-left text-xl" value={title} onChange={e => setTitle(e.target.value)}></textarea>

                    <textarea type="text" placeholder="Note" cols="30" rows="5"
                        className="w-full border-2 border-black text-black mt-2 text-left text-xl" value={notes} onChange={e => setNotes(e.target.value)}></textarea>

                    <div className='text-left'>
                        <button className='border-2 border-black hover:text-red-700 rounded-xl w-[200px] text-xl text-black' onClick={handleEdit}>Edit Note</button>
                        <button className='border-2 border-black hover:text-red-700 rounded-xl w-[200px] text-xl text-black ml-5' onClick={() => onCancel()}>Cancel Edit</button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FormEdit