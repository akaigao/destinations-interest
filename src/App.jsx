import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getCities, getCountries } from "./api/UserAPI.js";
import { BoxForm } from "./components/BoxForm/index.jsx";
import { Input } from "./components/Input/index.jsx";
import { SelectInput } from "./components/SelectInput/index.jsx";
import { getErros } from "./scripts/validations.jsx";
import { Container } from "./styles/container.js";

export function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  const [countries, setCountries] = useState();
  const [cities, setCities] = useState();

  useEffect(() => {
    async function fetchDataTwo() {
      const responseCountries = await getCountries();
      setCountries(responseCountries);

      const responseCities = await getCities();
      setCities(responseCities);
    }
    fetchDataTwo();
  }, []);

  return (
    <Container>
      <div className="right">
        <h1>Destino de Interesse</h1>
        <h2>
          Para reservar um orçamento, preencha o formulário abaixo e entraremos
          em contato com mais informações.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BoxForm>
            <Input data={register} label="Nome e Sobrenome" type="text" />
            <Input data={register} label="Email" type="email" />
            <Input
              data={register}
              label="Phone / Whatsapp"
              placeholder="(xx) xxxxx-xxxx"
              type="tel"
            />
            <Input data={register} label="CPF" type="cpf" />

            <div className="boxSelect">
              <Controller
                control={control}
                name="selectCountry"
                rules={{ required: true }}
                render={({ field }) => (
                  <SelectInput
                    data={field}
                    op={countries}
                    placeholder="Países..."
                  />
                )}
              />
              <Controller
                control={control}
                name="selectCity"
                rules={{ required: true }}
                render={({ field }) => (
                  <SelectInput
                    data={field}
                    op={cities}
                    placeholder="Cidades..."
                  />
                )}
              />
            </div>

            <div className="error--message">
              {getErros.length(errors)}
              {getErros.tel(errors)}
              {getErros.cpf(errors)}
            </div>

            <button>Enviar</button>
          </BoxForm>
        </form>
      </div>

      <div className="left">
        <h1>Contato</h1>
        <h2>
          <strong>Adoraríamos falar com você.</strong> Veja como entrar em
          contato:
        </h2>
        <br />
        <br />
        <BoxForm>
          <div className="contact">
            <p>Ribeirão Preto, SP.</p>
            <br />
            <p>
              P: <strong>+55 16 3315-9950</strong>
            </p>
            <p>E: contato@allyhub.co</p>
          </div>
        </BoxForm>
      </div>
    </Container>
  );
}
