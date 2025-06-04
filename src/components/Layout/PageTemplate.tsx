import React from "react";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import { Link } from "react-router-dom";
import "./styles.css"

const { Header, Content, Footer } = Layout;

const items = [
  { key: "home", label: <Link to="/">Home</Link> },
  { key: "loja", label: <Link to="/loja">Loja</Link> },
  { key: "sobre", label: <Link to="/sobre-nos">Sobre Nós</Link> },
  { key: "tutorial", label: <Link to="/tutorial">Faça Você Mesmo</Link> },
  { key: "franqueado", label: <Link to="/franqueado">Franquia</Link> },
  { key: "contato", label: <Link to="/contato">Contato</Link> },
];

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => (
  <Layout className="page-layout">
    <Header className="page-header">
      <div className="logo-placeholder">
        {/* Aqui vai a logo */}
        <span>Logo Café</span>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
        className="page-menu"
      />
    </Header>

    <Content className="page-content">{children}</Content>

    <Footer className="page-footer">
      Café do Seu Jeito ©{new Date().getFullYear()}
    </Footer>
  </Layout>
);

export default PageTemplate;
