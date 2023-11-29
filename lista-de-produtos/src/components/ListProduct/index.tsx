"use cleint"

import "./styles.scss"
import { Itens } from '@/components/Itens'
import { useState } from "react";

import { FaSearchPlus } from "react-icons/fa";

export function ListProduct () {
    return (
        <section className="list-container">    
                <input type="text" placeholder="Adicione um novo produto" />
                <div className="list">
                <div className="search">
                <input type="text" id="search" placeholder="Qual produto está procurando?" /> 
                </div>
                <Itens 
                productDescription="Descriçao do produto"
                numberStock="10"
                />
                </div>
        </section>
    )
}