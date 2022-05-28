import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {

    const homeClass = useLocation().pathname === "/" ? "active": "";
    const thoiSuClass = useLocation().pathname === "/chu-de/thoi-su" ? "active": "";
    const theGioiClass = useLocation().pathname === "/chu-de/the-gioi" ? "active": "";
    const kinhTeClass = useLocation().pathname === "/chu-de/kinh-te" ? "active": "";
    const giaiTriClass = useLocation().pathname === "/chu-de/giai-tri" ? "active": "";
    const theThaoClass = useLocation().pathname === "/chu-de/the-thao" ? "active": "";
    const giaoDucClass = useLocation().pathname === "/chu-de/giao-duc" ? "active": "";
    const sucKhoeClass = useLocation().pathname === "/chu-de/suc-khoe" ? "active": "";
    const doiSongClass = useLocation().pathname === "/chu-de/doi-song" ? "active": "";
    const phapLuatClass = useLocation().pathname === "/chu-de/phap-luat" ? "active": "";
    const duLichClass = useLocation().pathname === "/chu-de/du-lich" ? "active": "";
    const khoaHocClass = useLocation().pathname === "/chu-de/khoa-hoc" ? "active": "";
    const congNgheClass = useLocation().pathname === "/chu-de/cong-nghe" ? "active": "";

    return (
        <div className="navbar-user">
            <div className="navbar-navbar">
                <div className="align">
                    <nav>
                        <ul>
                            <li>
                                <div className={homeClass}>
                                    <Link to="/" >
                                        <span>Nóng</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={thoiSuClass}>
                                    <Link to={"/chu-de/thoi-su"}>
                                        <span>Thời sự</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={theGioiClass}>
                                    <Link to={"/chu-de/the-gioi"}>
                                        <span>Thế giới</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={kinhTeClass}>
                                    <Link to={"/chu-de/kinh-te"}>
                                        <span>Kinh tế</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={giaiTriClass}>
                                    <Link to={"/chu-de/giai-tri"}>
                                        <span>Giải trí</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={theThaoClass}>
                                    <Link to={"/chu-de/the-thao"}>
                                        <span>Thể thao</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={giaoDucClass}>
                                    <Link to={"/chu-de/giao-duc"}>
                                        <span>Giáo dục</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={sucKhoeClass}>
                                    <Link to={"/chu-de/suc-khoe"}>
                                        <span>Sức khỏe</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={doiSongClass}>
                                    <Link to={"/chu-de/doi-song"}>
                                        <span>Đời sống</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={phapLuatClass}>
                                    <Link to={"/chu-de/phap-luat"}>
                                        <span>Pháp luật</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={duLichClass}>
                                    <Link to={"/chu-de/du-lich"}>
                                        <span>Du lịch</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={khoaHocClass}>
                                    <Link to={"/chu-de/khoa-hoc"}>
                                        <span>Khoa học</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className={congNgheClass}>
                                    <Link to={"/chu-de/cong-nghe"}>
                                        <span>Công nghệ</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}