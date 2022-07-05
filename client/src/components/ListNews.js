import MainNews from "../components/News/MainNews";
import SubNews from "../components/News/SubNews";
import { API_URL } from "../config/Constants";
import { useState, useEffect } from "react";

export default function ListNews({topic}) {

    const [articlesList, setArticlesList] = useState([])
    useEffect(() => {
        try {
            const getArticlesList = async (name) => {
                const response = await fetch(API_URL.concat('/api/articles/getArticlesByCategory/', name), {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setArticlesList(json.data);
            }
            getArticlesList(topic)
        } catch (e) {
            console.log(e)
        }
    }, [topic]);

    return (
        <div className=" ml-[140px] mr-[140px] mt-5">
            <div className="grid grid-cols-2 gap-5 ">
                <div>
                    <div className="sm:gap-5 mb-3">
                            {
                                articlesList.slice(0, 1).map((article) => (
                                    article &&
                                        <MainNews data={article} />
                                ))
                            }
                
                    </div>
                    <hr className="border-gray-300 bg-gray-300" />
                    <div className="mt-5">
                        {
                            articlesList.slice(1, 50).map((article) => (
                                article &&
                                    <SubNews data={article} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        articlesList.slice(50, 100).map((article) => (
                            article &&
                                <SubNews data={article} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}