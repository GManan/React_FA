import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);
        setTimeout(() => {

            fetch("http://localhost:8000/blogs", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setIsPending(false);
                console.log("new blog added ");
                navigate("/");
            })
        }, 1000);
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
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Loading...</button>}
            </form>

        </div >
    )

}
export default Create;