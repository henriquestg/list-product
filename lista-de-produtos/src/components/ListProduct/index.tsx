"use cleint"

import "./styles.scss"

import { FaSearchPlus } from "react-icons/fa";

interface NameProductType {
    NameProduct: string;
}

export function ListProduct () {
    return (
        <section className="list-container">
                <input type="text" placeholder="Adicione um novo produto" />
                <div className="list">
                <div className="search">
                <input type="text" id="search" placeholder="Qual produto está procurando?" /> 
                </div>
                </div>
        </section>
    )
}