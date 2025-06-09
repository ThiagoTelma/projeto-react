import React, {useState} from 'react';
import PageTemplate from '../../components/Layout/PageTemplate';
import './loja.css';
import CoffeeLogo from "../../assets/CoffeeImg.svg";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { cafes } from "../../components/CardCafes/CatalogCoffee";

const Loja: React.FC = () => {
    
       const [quantidades, setQuantidades] = useState<{ [id: number]: number }>({});

        function increment(id: number) {
        setQuantidades((state) => ({
            ...state,
            [id]: (state[id] ?? 0) + 1,
        }));
    }

    function decrement(id: number) {
        setQuantidades((state) => ({
            ...state,
            [id]: state[id] > 0 ? state[id] - 1 : 0,
        }));
    }
return (
    <PageTemplate>
        <div className="main-container">
            <div className="description-container">
                <div className="descricao">
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    <div>
                        <ul>
                            <li>
                                <div className="icon-container icon-yellow-500">
                                    <ShoppingCart weight="fill" />
                                </div>
                                Compra simples e segura
                            </li>
                            <li>
                                <div className="icon-container icon-gray-500">
                                    <Package weight="fill" />
                                </div>
                                Embalagem mantém o café intacto
                            </li>
                            <li>
                                <div className="icon-container icon-yellow-300">
                                    <Timer weight="fill" />
                                </div>
                                Entrega rápida e rastreada
                            </li>
                            <li>
                                <div className="icon-container icon-purple-100">
                                    <Coffee weight="fill" />
                                </div>
                                O café chega fresquinho até você
                            </li>
                        </ul>
                    </div>
                </div>
                <img src={CoffeeLogo} alt="Logo do Café" />
            </div>

            <div className="loja-container">
                <h1>Nossos Cafés</h1>
                <div className="cards">
                    {cafes.map((cafe) => (
                        <div className="card" key={cafe.id}>
                            <div className="img-and-tag-local">
                                <img src={cafe.imagem} alt={cafe.nome} />
                                <div className="tag-group">
                                    {cafe.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="description-card-local">
                                <h3 className="title">{cafe.nome}</h3>
                                <p className="descricao-coffee">{cafe.descricao}</p>
                            </div>

                            <div className="buy-local">
                                <div className="price">
                                    <strong>{cafe.preco.toFixed(2)}</strong>
                                </div>

                                <div className="botao-quantidade">
                                    <button onClick={() => decrement(cafe.id)}>-</button>
                                    <span>{quantidades[cafe.id] ?? 0}</span>
                                    <button onClick={() => increment(cafe.id)}>+</button>
                                </div>

                                <div className="cart-button-container">
                                  <button className="cart-button" aria-label="Download">
                                    <ShoppingCart weight="fill" size={18} />
                                  </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </PageTemplate>
  );
};

export default Loja;