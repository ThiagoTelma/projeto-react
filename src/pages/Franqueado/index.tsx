import React, { useCallback } from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./franqueado.css";
import Form, {
    useForm,
    type FormInstance,
    type FormProps,
} from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import { IdcardTwoTone, MailTwoTone, PhoneTwoTone } from "@ant-design/icons";
import IconeInvestimento from "../../assets/Icons/icon-004.png";
import IconeRetorno from "../../assets/Icons/icon-005.png";
import IconeFaturamento from "../../assets/Icons/icon-007.png";
import { Button } from "antd";
import { set, z } from "zod/v4";
import type { FormRule } from "antd";

export const useValidation = <T = unknown,>(schema: z.ZodType<T>) =>
    useCallback(
        ({ getFieldsValue }: FormInstance) => ({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            validator: async ({ field }) => {
                const result = await schema.safeParseAsync(getFieldsValue());
                const error =
                    !result.success &&
                    result.error.issues.filter((issue) =>
                        issue.path.includes(field)
                    )[0]?.message;

                return error ? Promise.reject(error) : Promise.resolve();
            },
        }),
        [schema]
    ) as FormRule;

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
    name: z
        .string({
            error: "Por favor, digite o seu nome.",
        })
        .nonempty({ error: "O campo nome deve ser preenchido." })
        .min(2, {
            error: "Por favor, digite o seu nome.",
        }),
    email: z
        .string({ error: "Insira um e-mail válido." })
        .nonempty({ error: "O campo e-mail deve ser preenchido." })
        .email({ error: "Insira um e-mail válido." }),
    telefone: z
        .string({ error: "Insira um número de telefone válido." })
        .regex(phoneRegex, "Insira um número de telefone válido."),
});

const onFinish = (values: any) => {
    alert("Sucesso!");
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

const Franqueado: React.FC = () => {
    const formValidation = useValidation(formSchema);

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
                            name="basic"
                            autoComplete="off"
                            size="large"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <FormItem name="name" rules={[formValidation]}>
                                <Input
                                    placeholder="Nome"
                                    className="input"
                                    prefix={
                                        <IdcardTwoTone twoToneColor="#f3c300" />
                                    }
                                />
                            </FormItem>

                            <FormItem name="email" rules={[formValidation]}>
                                <Input
                                    placeholder="Email"
                                    className="input"
                                    prefix={
                                        <MailTwoTone twoToneColor="#f3c300" />
                                    }
                                />
                            </FormItem>
                            <FormItem name="telefone" rules={[formValidation]}>
                                <Input
                                    placeholder="Telefone"
                                    className="input"
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
                        <div className="profit">
                            <div className="img-and-tag-local">
                                <img src={IconeInvestimento} alt="Ícone" />
                                <div className="tag-group">
                                    <span className="titleProfit">
                                        Investimento
                                    </span>
                                    <span className="textProfit">
                                        Entre 20 e 100K
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="profit">
                            <div className="img-and-tag-local">
                                <img src={IconeFaturamento} alt="Ícone" />
                                <div className="tag-group">
                                    <span className="titleProfit">
                                        Faturamento Médio
                                    </span>
                                    <span className="textProfit">
                                        A partir de R$ 600.000,00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="profit">
                            <div className="img-and-tag-local">
                                <img src={IconeRetorno} alt="Ícone" />
                                <div className="tag-group">
                                    <span className="titleProfit">Retorno</span>
                                    <span className="textProfit">
                                        Payback de 8 a 12 meses
                                    </span>
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
