import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Switch> */}
          <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route path="/create" element={<Create />} ></Route>
            <Route path="/blogs/:id" element={<BlogDetails />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>

          {/* </Switch> */}
          {/* <Home></Home> */}

        </div>
      </div>
    </Router>
  );
}

export default App;
