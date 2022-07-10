import MainNews from "../News/MainNews";
import SubNews from "../News/SubNews";
import TopTitle from "../News/TopTitle";
import { API_URL } from "../../config/Constants";
import { useState, useEffect } from "react";

export default function TheThao({ articles, reload }) {

    const [TheThaoList, setTheThaoList] = useState([])
    useEffect(() => {
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
    }, []);

    return (
                <div>
                    <TopTitle title={'Thể thao'} topic={'/chu-de/the-thao'} />
                    < div className="sm:gap-5 mb-3">
                        {
                            TheThaoList.slice(0, 1).map((article, idx) => (
                                article &&
                                    <MainNews key={idx} data={article} />
                            ))
                        }
            
                    </div>
                    <hr className="border-gray-300 bg-gray-300" />
                    <div className="mt-5">
                        {
                            TheThaoList.slice(1, 5).map((article, idx) => (
                                article &&
                                    <SubNews key={idx} data={article} />
                            ))
                        }
                    </div>
                </div> 
    )
}