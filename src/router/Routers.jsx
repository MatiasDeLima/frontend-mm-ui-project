
import { Routes, Route, Navigate } from "react-router-dom";
import VisaoGeral from "../pages/VisaoGeral";
import GerenciamentoUrbano from "../pages/GerenciamentoUrbano";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<VisaoGeral />} />
            <Route path="/urbano" element={<GerenciamentoUrbano />} />
        </Routes>
    );
};

export default Routers;