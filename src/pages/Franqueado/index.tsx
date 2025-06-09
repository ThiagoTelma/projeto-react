import React from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css";
import Form, { type FormProps } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import Button from "antd/lib/Button";
import { IdcardTwoTone, MailTwoTone, PhoneTwoTone } from "@ant-design/icons";
import IconeInvestimento from "../../assets/Icons/icon-004.png";
import IconeRetorno from "../../assets/Icons/icon-005.png";

type FieldType = {
    nome?: string;
    email?: string;
    telefone?: number;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const Franqueado: React.FC = () => {
    return (
        <PageTemplate>
            <div className="main-container">
                <div className="description-container">
                    <div className="descricao">
                        <h2>
                            Seja um <br />
                            Franqueado
                        </h2>
                        <span>
                            Empreenda ao lado de quem <br /> entende o que você
                            precisa.
                        </span>
                        <br />
                        <br />
                        <p className="texto">
                            Digite seus dados no formulário ao lado e você
                            receberá em seu e-mail todas as informações sobre
                            como fazer parte do nosso grupo seleto de
                            Franqueados e começar a faturar em um dos nichos de
                            mercado que mais cresce no Brasil.
                        </p>
                    </div>
                    <div className="formulario">
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            size="large"
                        >
                            <FormItem<FieldType>
                                name="nome"
                                id="input"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor, digite o seu nome",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Nome"
                                    prefix={
                                        <IdcardTwoTone twoToneColor="#f3c300" />
                                    }
                                />
                            </FormItem>

                            <FormItem<FieldType>
                                name="email"
                                id="input"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, digite o seu email",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Email"
                                    prefix={
                                        <MailTwoTone twoToneColor="#f3c300" />
                                    }
                                />
                            </FormItem>
                            <FormItem<FieldType>
                                name="telefone"
                                id="input"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor, digite o seu telefone",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Telefone"
                                    prefix={
                                        <PhoneTwoTone twoToneColor="#f3c300" />
                                    }
                                />
                            </FormItem>

                            <FormItem>
                                <Button
                                    size="large"
                                    id="botao"
                                    htmlType="submit"
                                >
                                    Quero mais informações
                                </Button>
                            </FormItem>
                        </Form>
                        <span className="spam">
                            🔐 Não fazemos SPAM, seus dados estão protegidos.
                        </span>
                    </div>
                </div>
                <div className="profit-description">
                    <div className="cards">
                        <div className="card">
                            <div className="img-and-tag-local">
                                <img src={IconeInvestimento} alt="Ícone" />
                                <div className="tag-group">
                                    <span className="tag">Investimento</span>
                                    <span>Entre 20 e 100K</span>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="img-and-tag-local">
                                <img src={IconeRetorno} alt="Ícone" />
                                <div className="tag-group">
                                    <span className="tag">Retorno</span>
                                    <span>Payback de 8 a 12 meses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Franqueado;
