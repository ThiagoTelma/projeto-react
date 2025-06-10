import React from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css";
import Card from "antd/es/card";
import Button from "antd/es/button";
import ExpressoCremoso from "../../assets/Cafes/Expresso Cremoso.svg";
import Havaiano from "../../assets/Cafes/Havaiano.svg";
import Macaccino from "../../assets/Cafes/Macaccino.svg";

const featuredCoffees = [
  {
    title: "Café Arábica",
    content: "Sabor suave e aroma marcante, perfeito para quem aprecia uma bebida equilibrada.",
    img: ExpressoCremoso,
    alt: "Expresso Cremoso",
  },
  {
    title: "Café Robusta",
    content: "Mais intenso e encorpado, ideal para quem gosta de um café forte.",
    img: Havaiano,
    alt: "Havaiano",
  },
  {
    title: "Café Gourmet",
    content: "Grãos selecionados para uma experiência única e sofisticada.",
    img: Macaccino,
    alt: "Macaccino",
  },
];

const Home: React.FC = () => {
  return (
    <PageTemplate>
      <div className="home-container">
        <div className="banner-section">
          <h1>Bem-vindo ao Software cafe</h1>
          <p>
            Descubra os melhores cafés, suas origens, métodos de preparo e dicas para apreciar cada xícara ao máximo.
          </p>
        </div>

        <section className="featured-coffees">
          <h2 id="cafe_em_destaque">Cafés em Destaque</h2>
          <div className="coffee-cards">
            {featuredCoffees.map((coffee) => (
              <Card
                key={coffee.title}
                className="custom-coffee-card"
                title={
                  <div className="card-title-centered">
                    {coffee.title}
                  </div>
                }
                variant="borderless"
                style={{ width: 300, minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "center" }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  background: "#B22222",
                  borderRadius: 12,
                  padding: 20,
                  height: 180,
                  justifyContent: "center",
                }}
                headStyle={{
                  background: "#3B2F2F",
                  color: "#F3C300",
                  textAlign: "center",
                  fontFamily: "'DynaPuff', cursive, sans-serif",
                  fontWeight: "bold",
                  fontSize: 22,
                  borderRadius: "12px 12px 0 0",
                }}
              >
                <p style={{ color: "#3B2F2F", fontWeight: 500, marginBottom: 12 }}>{coffee.content}</p>
                <img
                  src={coffee.img}
                  alt={coffee.alt}
                  className="coffee-card-img"
                  style={{ width: 60, marginTop: 0, marginBottom: 0 }}
                />
              </Card>
            ))}
          </div>
          <div className="custom-cta-btn-wrapper">
            <a href="/loja" className="cta-button-custom">
              <span>Visite nossa Loja de Cafés</span>
            </a>
          </div>
        </section>

        <div className="sections-tips-delivery">
          <section className="coffee-tips">
            <h2>Dicas para Preparar um Bom Café</h2>
            <ol>
              <li>Escolha grãos frescos e de qualidade.</li>
              <li>Moagem na hora faz toda a diferença.</li>
              <li>Use água filtrada e na temperatura ideal (cerca de 92°C a 96°C).</li>
              <li>Experimente diferentes métodos de preparo: coado, prensa francesa, espresso, entre outros.</li>
            </ol>
          </section>

          <section className="delivery-info">
            <div className="delivery-content delivery-bg-img">
              <div>
                <h2>Entrega Rápida e Segura</h2>
                <p>
                  Receba seus cafés favoritos no conforto da sua casa. Trabalhamos com parceiros de entrega confiáveis para garantir que seu pedido chegue fresco e no prazo.
                </p>
                <a href="/entrega" className="cta-link">
                  Saiba mais sobre a entrega
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="menu-calls">
          <div className="menu-calls-intro">
            <h2>Menu</h2>
            <p>
              Explore todas as áreas do nosso site e descubra tudo sobre cafés, franquias, dicas e muito mais. Escolha uma opção abaixo:
            </p>
          </div>
          <ul>
            <li>
              <a href="/loja">Loja</a>
            </li>
            <li>
              <a href="/sobre-nos">Sobre Nós</a>
            </li>
            <li>
              <a href="/tutorial">Faça Você Mesmo</a>
            </li>
            <li>
              <a href="/franqueado">Franquia</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Home;
