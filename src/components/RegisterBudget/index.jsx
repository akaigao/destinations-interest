import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectInputProvider from "../../context/SelectInputProvider";
import { validate11Digits } from "../../utils/validation";
import { BasicAlert } from "../BasicAlert";
import { ContainerChildren } from "../ContainerChildren";
import { Form } from "../Form";
import { BasicInput } from "../Input/BasicInput";
import { CPFInput } from "../Input/CPFInput";
import { NumberInput } from "../Input/NumberInput";
import { SelectInput } from "../SelectInput";

export function RegisterBudget() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      cpf: "",
      selectCities: [],
      selectCountry: [],
    },
    mode: "onChange",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [severityAlert, setSeverityAlert] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));

    if (Object.values(errors).length === 0) {
      setSeverityAlert("success");
      setMessageAlert("Orçamento enviado! Aguarde nosso contato =)");
      setShowAlert(true);

      reset({
        name: "",
        email: "",
        tel: "",
        cpf: "",
        selectCities: [],
        selectCountry: [],
      });
    }
  };

  const onError = () => {
    if (errors.tel) {
      if (errors.tel.type === "checkLength") {
        setSeverityAlert("warning");
        setMessageAlert("O campo número deve conter 11 dígitos =D");
        setShowAlert(true);
        return;
      }
    }

    if (errors.cpf) {
      if (errors.cpf.type === "checkLength") {
        setSeverityAlert("warning");
        setMessageAlert("O campo CPF deve conter 11 dígitos =D");
        setShowAlert(true);
        return;
      }
    }

    if (Object.values(errors).length >= 0) {
      setSeverityAlert("error");
      setMessageAlert("Todos os campos são obrigatórios =(");
      setShowAlert(true);
      return;
    }
  };

  return (
    <ContainerChildren>
      <h1>Destino de Interesse</h1>
      <hr />
      <h2>
        Para reservar um orçamento, preencha o formulário abaixo e entraremos em
        contato com mais informações.
      </h2>

      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <BasicInput
          control={control}
          name="name"
          label="Nome"
          placeholder="João das Neves"
          rules={{ required: true }}
        />
        <BasicInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="meumelhor@email.com"
          rules={{ required: true }}
        />
        <NumberInput
          control={control}
          name="tel"
          label="Phone / Whatsaap"
          rules={{
            required: true,
            validate: { checkLength: (v) => validate11Digits(v) },
          }}
        />
        <CPFInput
          control={control}
          name="cpf"
          label="CPF"
          rules={{
            required: true,
            validate: { checkLength: (v) => validate11Digits(v) },
          }}
        />

        <SelectInputProvider>
          <SelectInput
            control={control}
            name="selectCountry"
            placeholder="Países"
            rules={{ required: true }}
          />

          <SelectInput
            control={control}
            name="selectCities"
            placeholder="Cidades"
            rules={{ required: true }}
          />
        </SelectInputProvider>

        {showAlert && (
          <BasicAlert
            severity={severityAlert}
            message={messageAlert}
            show={setShowAlert}
          />
        )}
      </Form>
    </ContainerChildren>
  );
}
