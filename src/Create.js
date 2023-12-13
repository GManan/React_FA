import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        console.log("blog", blog);
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                    type="text"
                    required
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea required
                    defaultValue={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog author</label>
                <select
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}>

                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>

        </div >
    )

}
export default Create;