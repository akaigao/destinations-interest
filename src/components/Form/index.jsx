import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getCities, getCountries } from "../../api/UserAPI.js";
import { getErros } from "../../scripts/validations.jsx";
import { ContainerChildren } from "../ContainerChildren/index.jsx";
import { Input } from "../Input/index.jsx";
import { SelectInput } from "../SelectInput/index.jsx";
import { Box } from "./style.js";

export function Form({ input }) {
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

  function teste() {
    <div className="error--message">
      {getErros.length(errors)}
      {getErros.tel(errors)}
      {getErros.cpf(errors)}
    </div>;
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContainerChildren>
          {input.map((item) => {
            return (
              <Input
                key={item.id}
                data={register}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
              />
            );
          })}

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

          {errors ? (
            <div className="error--message">
              {getErros.length(errors)}
              {getErros.tel(errors)}
              {getErros.cpf(errors)}
            </div>
          ) : null}

          <button
            onClick={() => "handleOpen"}
            disabled={Object.keys(errors).length > 0 ? true : false}
          >
            Enviar
          </button>
        </ContainerChildren>
      </form>
    </Box>
  );
}
