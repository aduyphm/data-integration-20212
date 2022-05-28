import MainNews from "../../components/News/MainNews";
import SubNews from "../../components/News/SubNews";
import ThoiSu from "./ThoiSu";
import KinhTe from "./KinhTe";
import TheThao from "./TheThao";
import GiaiTri from "./GiaiTri";
import Article from "./Article";
import { API_URL } from "../../config/Constants";
import { useState, useEffect } from "react";

export default function Home() {

    const [ThoiSuList, setThoiSuList] = useState([])
    const [KinhTeList, setKinhTeList] = useState([])
    useEffect(() => {
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
    }, []);

    return (
        <div className=" ml-[140px] mr-[140px] mt-5">
            <div className="grid grid-cols-2 gap-5 ">
                <div>
                    <div> <Article /></div>
                    <div> <ThoiSu /></div>
                    <div> <KinhTe /></div>
                    <div> <TheThao /></div>
                    <div> <GiaiTri /></div>
                </div>
                <div className=" bg-gray-100">
                    {
                        ThoiSuList.slice(5, 100).map((article, idx) => (
                            article &&
                                <SubNews key={idx} data={article} />
                        ))
                    }
                    
                </div>
            </div>
            
        </div>
    )
}