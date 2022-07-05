import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./navbar.component"
import SideBar from './sidebar.component';
import Categories from './categories/categories';
import NewsList from './article/article';
import UserList from './user/user';
import Url from './Url/url';
import Crawl from './crawl/crawl';
import Article from './article/viewarticle';
import UpdateUrl from './Url/updateUrl';
import AdminHome from './AdminHome/home';
import ArticleInC from './categories/article';

function Admin(props) {
  return (   
      <> <SideBar />
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<AdminHome />} />
                    <Route exact path="/category" element={<Categories />} />
                    <Route exact path="/category/:id" element={<ArticleInC />} />
                    <Route exact path="/news" element={<NewsList />} />
                    <Route exact path='/article/:id' element={<Article />} />
                    <Route exact path="/users" element={<UserList/>} />
                    <Route exact path="/crawl" element={<Crawl/>} />
                    <Route exact path="/static" element={<Url/>} />
                    <Route exact path='/url/:id' element={<UpdateUrl />} />
                </Routes>
             </div>
      </>     
  );
}

export default Admin;