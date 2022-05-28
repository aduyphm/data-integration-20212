import React, { useEffect, useState } from 'react';
import './Search.css';
import { API_URL } from "../../config/Constants";
import { useParams } from 'react-router-dom';
import SubNews from "../News/SubNews";
import TopTitle from "../News/TopTitle";

export default function Search(props) {
    
    const [articlesList, setArticlesList] = useState([]);
    const { query } = useParams();
    console.log(query)
    
    useEffect(() => {
        try {
            const getArticlesList = async () => {
                const response = await fetch(API_URL + '/api/articles/search', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                    body: JSON.stringify({query: query})
                });
                const json = await response.json();
                setArticlesList(json.data);
                console.log(articlesList)
            }
            getArticlesList();

        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <div className="ml-[140px] mr-[140px] mt-4 mb-4">
            <div>
                <div className="align">
                    <TopTitle title={`Kết quả tìm kiếm cho từ khóa "${query}"`} />
                    <div className="timeline">
                        {articlesList[0] &&  articlesList.map((article, idx) => <SubNews data={article} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}