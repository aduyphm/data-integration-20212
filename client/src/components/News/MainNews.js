import { convertTime } from "../../utils/convertTime";

const imgSource = {
    'vnexpress.net': 'https://upload.wikimedia.org/wikipedia/commons/f/fd/VnExpress_logo.png',
    'laodong.vn': 'https://media-cdn.laodong.vn/storage/newsportal/2018/12/19/647577/Bao-Gia-Quang-Cao-Ba.png',
    'thanhnien.vn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Thanh_Ni%C3%AAn_logo.svg/1280px-Thanh_Ni%C3%AAn_logo.svg.png',
    'nguoilambao.vn': 'https://nguoilambao.vn/images/logos/logo.png',
    'kienthuc.net.vn': 'https://bagiang.com/wp-content/uploads/2018/04/kienthuc.net-thuoc-dai-trang-hoan-ba-giang-min.png',
}

export default function MainNews({ data }) {
    const { thumbnail, link, title, source, release_time } = data;
    return (
        <div>
            <div className='group overflow-hidden'>

                <a href={link} target="_blank" rel="noreferrer">
                        <img src={thumbnail} alt="" className='h-40 mb:h-48 md:max-h-mi-5 w-full md:h-i-5 lg:object-cover rounded' />
                </a>
                <div className="mt-2">
                    <span className='text-2xl font-semibold group-hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    </span>
                    <div className='flex gap-3 mt-1 items-end'>
                        <a href={`http://${source}`}>
                            <img src={imgSource[source]} alt="" className='max-h-4 object-cover' />
                        </a>
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(release_time)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}