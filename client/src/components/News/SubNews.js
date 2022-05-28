import { convertTime } from "../../utils/convertTime";

const imgSource = {
    'vnexpress.net': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/VnExpress_logo.png',
    'laodong.vn': 'https://media-cdn.laodong.vn/storage/newsportal/2018/12/19/647577/Bao-Gia-Quang-Cao-Ba.png',
    'thanhnien.vn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Thanh_Ni%C3%AAn_logo.svg/1280px-Thanh_Ni%C3%AAn_logo.svg.png',
    'nguoilambao.vn': 'https://nguoilambao.vn/images/logos/logo.png',
    'kienthuc.net.vn': 'https://bagiang.com/wp-content/uploads/2018/04/kienthuc.net-thuoc-dai-trang-hoan-ba-giang-min.png',
}

export default function SubNews({ data }) {
    const { thumbnail, link, title, source, sapo, release_time } = data;
    const date = release_time;
    return (
        <div>
            <div className=' group grid grid-cols-6 mb-2 mt-2 ml-4 mr-4 gap-5 overflow-hidden'>
                <a href={link} target="_blank" rel="noreferrer" className="block col-start-1 col-end-3" >
                        <img src={thumbnail} alt="" className=' h-i-3 w-full object-cover rounded' />
                </a>
                <div className="col-start-3 col-end-7">
                    <span className='text-sm sm:text-lg font-medium group-hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer" style={{textAlign: 'justify'}} >{title}</a>
                    </span>
                    <div>
                        <p style={{textAlign: 'justify', fontSize: 12}}>{sapo}</p>
                    </div>
                    <div className='flex gap-3 mt-2 items-end overflow-hidden'>
                        <a href={`http://${source}`}>
                            <img src={imgSource[source]} alt="" className='max-h-4 object-cover' />
                        </a>
                        <span className='text-xs font-medium font-text text-gray-400'>{ convertTime(release_time) }</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-2" />
        </div>
    )
}