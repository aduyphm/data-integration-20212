import React, { useEffect, useState } from 'react';
import './Home.css';
import { API_URL } from "../../config/Constants";

export default function Home() {

    const [articlesList, setArticlesList] = useState([])
    const [ThoiSuList, setThoiSuList] = useState([])
    const [KinhTeList, setKinhTeList] = useState([])
    const [TheThaoList, setTheThaoList] = useState([])
    const [GiaiTriList, setGiaiTriList] = useState([])

    useEffect(() => {

        try {
            const getArticlesList = async () => {
                const response = await fetch(API_URL + '/api/articles/getListArticles', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setArticlesList(json.data);
                console.log(articlesList)
            }
            getArticlesList();

        } catch (e) {
            console.log(e)
        }

        try {
            const getThoiSuList = async () => {
                const response = await fetch(API_URL + '/api/articles/getArticlesByCategory/thoi-su', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setThoiSuList(json.data);
            }
            getThoiSuList()
        } catch (e) {
            console.log(e)
        }

        try {
            const getKinhTeList = async () => {
                const response = await fetch(API_URL + '/api/articles/getArticlesByCategory/kinh-te', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setKinhTeList(json.data);
            }
            getKinhTeList()
        } catch (e) {
            console.log(e)
        }

        try {
            const getTheThaoList = async () => {
                const response = await fetch(API_URL + '/api/articles/getArticlesByCategory/the-thao', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setTheThaoList(json.data);
            }
            getTheThaoList()
        } catch (e) {
            console.log(e)
        }

        try {
            const getGiaiTriList = async () => {
                const response = await fetch(API_URL + '/api/articles/getArticlesByCategory/giai-tri', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setGiaiTriList(json.data);
            }
            getGiaiTriList()
        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <div className="content">
            <div>
                <div className="align">
                    {articlesList[0] && <div className="l-content">
                        <div className="zone-heading">
                            Tin tức mới nhất
                        </div>
                        <div className="highlight">
                            <article className="story">
                                <a className="story-thumb" href={articlesList[0].link}>
                                    <img src={articlesList[0].thumbnail} alt=""/>
                                </a>
                                <h2>
                                    <a className="story-title" href={articlesList[0].link}>
                                        {articlesList[0].title}
                                    </a>
                                </h2>
                                <div className="meta">
                                    <span className="story-logo">
                                        {articlesList[0].source}
                                    </span>
                                    <span className="story-time">
                                        1 giờ
                                    </span>
                                </div>
                            </article>
                        </div>
                        <div className="feature">
                            <article className="story story-primary">
                                <a className="story-thumb" href={articlesList[1].link}>
                                    <img src={articlesList[1].thumbnail} alt=""/>
                                </a>
                                <h2>
                                    <a className="story-title" href={articlesList[1].link}>
                                        {articlesList[1].title}
                                    </a>
                                </h2>
                                <div className="meta">
                                    <span className="story-logo">
                                        {articlesList[1].source}
                                    </span>
                                    <span className="story-time">
                                        1 giờ
                                    </span>
                                </div>
                            </article>
                            <article className="story story-primary">
                                <a className="story-thumb" href={articlesList[2].link}>
                                    <img src={articlesList[2].thumbnail} alt=""/>
                                </a>
                                <h2>
                                    <a className="story-title" href={articlesList[2].link}>
                                        {articlesList[2].title}
                                    </a>
                                </h2>
                                <div className="meta">
                                    <span className="story-logo">
                                        {articlesList[2].source}
                                    </span>
                                    <span className="story-time">
                                        1 giờ
                                    </span>
                                </div>
                            </article>
                            <article className="story story-primary">
                                <a className="story-thumb" href={articlesList[3].link}>
                                    <img src={articlesList[3].thumbnail} alt=""/>
                                </a>
                                <h2>
                                    <a className="story-title" href={articlesList[3].link}>
                                        {articlesList[3].title}
                                    </a>
                                </h2>
                                <div className="meta">
                                    <span className="story-logo">
                                        {articlesList[3].source}
                                    </span>
                                    <span className="story-time">
                                        1 giờ
                                    </span>
                                </div>
                            </article>
                            <article className="story story-primary">
                                <a className="story-thumb" href={articlesList[4].link}>
                                    <img src={articlesList[4].thumbnail} alt=""/>
                                </a>
                                <h2>
                                    <a className="story-title" href={articlesList[4].link}>
                                        {articlesList[4].title}
                                    </a>
                                </h2>
                                <div className="meta">
                                    <span className="story-logo">
                                        {articlesList[4].source}
                                    </span>
                                    <span className="story-time">
                                        1 giờ
                                    </span>
                                </div>
                            </article> 
                        </div>
                        <div className="zone-heading">
                            Tin tức theo chủ đề
                        </div>
                        <div className="zone-timeline">

                        </div>




                    </div> }
                </div>
            </div>
        </div>
    )
}