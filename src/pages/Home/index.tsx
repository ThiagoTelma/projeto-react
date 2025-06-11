import React from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css"



const Home: React.FC = () => {
  return (
    <PageTemplate>
      <div className="home-container">
        <h1>Bem-vindo ao Mundo dos Cafés</h1>
        <p>
          Descubra os melhores cafés, suas origens, métodos de preparo e dicas para apreciar cada xícara ao máximo.
        </p>

        <section className="featured-coffees">
          <h2>Cafés em Destaque</h2>
          <ul>
        <li>
          <strong>Café Arábica</strong> – Sabor suave e aroma marcante, perfeito para quem aprecia uma bebida equilibrada.
        </li>
        <li>
          <strong>Café Robusta</strong> – Mais intenso e encorpado, ideal para quem gosta de um café forte.
        </li>
        <li>
          <strong>Café Gourmet</strong> – Grãos selecionados para uma experiência única e sofisticada.
        </li>
          </ul>
          <a href="/loja" className="cta-button">
        Visite nossa Loja de Cafés
          </a>
        </section>

        <section className="delivery-info">
          <h2>Entrega Rápida e Segura</h2>
          <p>
        Receba seus cafés favoritos no conforto da sua casa. Trabalhamos com parceiros de entrega confiáveis para garantir que seu pedido chegue fresco e no prazo.
          </p>
          <a href="/entrega" className="cta-link">
        Saiba mais sobre a entrega
          </a>
        </section>

        <section className="coffee-tips">
          <h2>Dicas para Preparar um Bom Café</h2>
          <ol>
        <li>Escolha grãos frescos e de qualidade.</li>
        <li>Moagem na hora faz toda a diferença.</li>
        <li>Use água filtrada e na temperatura ideal (cerca de 92°C a 96°C).</li>
        <li>Experimente diferentes métodos de preparo: coado, prensa francesa, espresso, entre outros.</li>
          </ol>
        </section>

        <section className="menu-calls">
          <h2>Explore Mais</h2>
          <ul>
        <li>
          <a href="/origens">Conheça as Origens dos Cafés</a>
        </li>
        <li>
          <a href="/metodos">Métodos de Preparo</a>
        </li>
        <li>
          <a href="/dicas">Dicas e Curiosidades</a>
        </li>
        <li>
          <a href="/contato">Fale Conosco</a>
        </li>
          </ul>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Home;
