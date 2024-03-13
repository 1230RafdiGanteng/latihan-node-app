function NoteItem({ title, content, id, onDelete, onEdit }) {
  return (
    <section class="flex mt-10 font-serif text-xl">

      <div class="p-10 rounded-2xl text-left text-black font-mono bg-[url('kertas.jpg')] bg-cover bg-center bg-no-repeat">

        <div className="flex justify-between   text-left text-3xl font-semibold text-black font-mono">
          <h1 className='font-semibold text-2xl'>{title}</h1>
        </div>

        <p className='mt-3'>{content}</p>

        <div className="mt-5">
          <button className="hover:text-red-700 border-2 border-black w-[100px] mr-5" onClick={() => onDelete(id)}>Delete</button>
          <button className=" hover:text-red-700 border-2 border-black w-[100px]" onClick={() => onEdit(id)}>Edit</button>
        </div>

      </div>

    </section>
  )
}

export default NoteItem