import MainNews from "../News/MainNews";
import SubNews from "../News/SubNews";
import TopTitle from "../News/TopTitle";
import { API_URL } from "../../config/Constants";
import { useState, useEffect } from "react";

export default function GiaiTri({ articles, reload }) {

    const [GiaiTriList, setGiaiTriList] = useState([])
    useEffect(() => {
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
                <div>
                    <TopTitle title={'Giải trí'} topic={'/chu-de/giai-tri'} />
                    < div className="sm:gap-5 mb-3">
                        {
                            GiaiTriList.slice(0, 1).map((article, idx) => (
                                article &&
                                    <MainNews key={idx} data={article} />
                            ))
                        }
            
                    </div>
                    <hr className="border-gray-300 bg-gray-300" />
                    <div className="mt-5">
                        {
                            GiaiTriList.slice(1, 5).map((article, idx) => (
                                article &&
                                    <SubNews key={idx} data={article} />
                            ))
                        }
                    </div>
                </div> 
    )
}