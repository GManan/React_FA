import { Link } from 'react-router-dom';
import { IoTrashBinOutline } from "react-icons/io5";
import { Navigate } from 'react-router-dom';
const BlogList = ({ blogs, title }) => {
    const handleDelete = (id) => {
        console.log("in handle delete id ", id)
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            // Navigate("/");
            console.log("in handle delete id ", id)
            window.location.reload();

        })
    };
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p> Written by {blog.author}</p>
                    </Link>
                    <IoTrashBinOutline className="preview-bin" onClick={() => { handleDelete(blog.id) }} />
                </div>
            ))}
        </div >
    );
}

export default BlogList;