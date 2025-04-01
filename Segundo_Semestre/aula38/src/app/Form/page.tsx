'use client';
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    cep: string;
    rua: string;
    numero: string;
    estado: string;
    cidade: string;
    bairro: string;
}

export default function FormValuesComponent() {
    const { register, handleSubmit, formState: { errors }, getValues, setValue, setFocus, watch } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    const cep = watch("cep");

    const buscarCEP = async (cep: string) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                alert("CEP não encontrado");
            } else {
                setValue("rua", data.logradouro);
                setValue("bairro", data.bairro);
                setValue("cidade", data.localidade);
                setValue("estado", data.uf);
                setFocus("numero");
            }
        } catch (error) {
            alert("Erro ao buscar endereço");
        }
    };

    useEffect(() => {
        if (cep && cep.length === 8) {
            buscarCEP(cep);
        }
    }, [cep]);

    return (
        <>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nome</label>
                <input {...register("nome", {
                    required: "Campo obrigatório",
                    minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })} />
                {errors.nome && <span>{errors.nome.message}</span>}
                <br />

                <label>Sobrenome</label>
                <input {...register("sobrenome", { required: true })} />
                {errors.sobrenome && <span>Campo obrigatório</span>}
                <br />

                <label>Email</label>
                <input {...register("email", {
                    required: "Campo obrigatório",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "E-mail incorreto"
                    }
                })} />
                {errors.email && <span>{errors.email.message}</span>}
                <br />

                <label>Senha</label>
                <input type="password"
                    {...register("senha", {
                        required: "Campo obrigatório",
                        minLength: { value: 6, message: "Mínimo 8 caracteres" },
                        validate: value =>
                            !/[A-Z]/.test(value) ? 'Senha deve conter letra maiúscula' :
                                !/[0-9]/.test(value) ? 'Senha deve conter número' :
                                    !/[a-z]/.test(value) ? 'Senha deve conter letra minúscula' :
                                        !/[^A-Za-z0-9]/.test(value) ? 'Senha deve conter caractere especial' : true
                    })}
                />
                {errors.senha && <span>{errors.senha.message}</span>}
                <br />

                <label>Confirmar Senha</label>
                <input type="password"
                    {...register("confirmarSenha", {
                        required: "Campo obrigatório",
                        minLength: { value: 6, message: "Mínimo 8 caracteres" },
                        validate: value => {
                            const senha = getValues("senha");
                            return value === senha || "As senhas devem ser iguais";
                        }
                    })}
                />
                {errors.confirmarSenha && <span>{errors.confirmarSenha.message}</span>}
                <br /><br />

                <label>CEP</label>
                <input {...register('cep', {
                    required: "Campo obrigatório",
                    pattern: { value: /^[0-9]{8}$/, message: "CEP incorreto" }
                })} />
                {errors.cep && <span>{errors.cep.message}</span>}
                <br />

                <label>Logradouro</label>
                <input {...register("rua")} />
                <br />

                <label>Complemento</label>
                <input />
                <br />

                <label>Número</label>
                <input {...register("numero")} />
                <br />

                <label>Bairro</label>
                <input {...register("bairro")} />
                <br />

                <label>Cidade</label>
                <input {...register("cidade")} />
                <br />

                <label>Estado</label>
                <input {...register("estado")} />
                <br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}