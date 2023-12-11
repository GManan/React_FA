import { useEffect, useState } from 'react';
import BlogList from './BlogList';
const Home = () => {

    const [blogs, setBlogs] = useState(null);

    /**
     * use effect hook is where we wanna fetch the data(typicly from db throu api endpoint)
     */
    useEffect((e) => {
        fetch('http://localhost:8000/blogs').then(res => {
            return res.json()
        }).then(data => {
            setBlogs(data);
            console.log(data);
        })
        console.log("use effect run");
    }, []);// empty array will make sure the useEffekt hook is running only once, on  the first render

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div >
    );
}

export default Home;