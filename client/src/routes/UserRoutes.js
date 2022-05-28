import ListNews from "../components/ListNews";

import  { FE_CATEGORY_ROUTES } from "./FERoutes";
import { Routes, Route } from "react-router-dom";

export default function UserRoutes() {
  return (
    <>
    <Routes>
      <Route exact path={FE_CATEGORY_ROUTES.thoisu.path} element={<ListNews topic={FE_CATEGORY_ROUTES.thoisu.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.thegioi.path} element={<ListNews topic={FE_CATEGORY_ROUTES.thegioi.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.kinhte.path} element={<ListNews topic={FE_CATEGORY_ROUTES.kinhte.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.thethao.path} element={<ListNews topic={FE_CATEGORY_ROUTES.thethao.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.giaitri.path} element={<ListNews topic={FE_CATEGORY_ROUTES.giaitri.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.giaoduc.path} element={<ListNews topic={FE_CATEGORY_ROUTES.giaoduc.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.suckhoe.path} element={<ListNews topic={FE_CATEGORY_ROUTES.suckhoe.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.doisong.path} element={<ListNews topic={FE_CATEGORY_ROUTES.doisong.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.phapluat.path} element={<ListNews topic={FE_CATEGORY_ROUTES.phapluat.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.dulich.path} element={<ListNews topic={FE_CATEGORY_ROUTES.dulich.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.khoahoc.path} element={<ListNews topic={FE_CATEGORY_ROUTES.khoahoc.topic} />} />
      <Route exact path={FE_CATEGORY_ROUTES.congnghe.path} element={<ListNews topic={FE_CATEGORY_ROUTES.congnghe.topic} />} />
    </Routes>
    </>
  )
}