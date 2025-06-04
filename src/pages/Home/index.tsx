// Exemplo: Home/index.tsx
import PageTemplate from "../../components/Layout/PageTemplate";
import Button from "antd/es/button";


const Home: React.FC = () => {
  return (
    <PageTemplate>
      <h1>Bem-vindo ao Café do Seu Jeito!</h1>
      <p>Descubra sabores, aromas e experiências únicas.</p>
      <Button type="primary">Saiba mais</Button>
    </PageTemplate>
  );
};

export default Home;
