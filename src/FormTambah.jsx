import { useRef } from 'react'


function FormTambah({ onAdd }) {
    const titleInput = useRef()
    const contentInput = useRef()

    const handleSubmit = () => {
        const title = titleInput.current.value
        const content = contentInput.current.value
        onAdd(title, content)

        titleInput.current.value = "";
        contentInput.current.value = ""
    }

    return (
        <section className="flex items-center justify-center">
            <div className="flex items-center justify-center mt-10">

                <div className="font-serif font-semibold text-3xl text-black text-center">
                    <h1>React Notes</h1>

                    <textarea type="text" placeholder="Your title notes here"
                        className="w-full border-2 border-black text-black mt-2 text-left text-xl" ref={titleInput}></textarea>

                    <textarea type="text" placeholder="Note" cols="30" rows="5"
                        className="w-full border-2 border-black text-black mt-2 text-left  text-xl" ref={contentInput}></textarea>

                    <div className='text-left'>
                        <button className='border-2 border-black hover:text-[#11009E] rounded-xl w-full text-3xl text-black' onClick={handleSubmit}>+</button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FormTambah