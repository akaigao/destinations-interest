export const getErros = {
  length: function (e) {
    return Object.values(e).length > 0 ? (
      <span key={1}>Todos os campos são obrigatórios.</span>
    ) : (
      ""
    );
  },
  tel: function (e) {
    return Object.keys(e).map((item) => {
      return item === "Phone / Whatsapp" ? (
        <span key={2}>Número inválido.</span>
      ) : (
        ""
      );
    });
  },
  cpf: function (e) {
    return Object.keys(e).map((item) => {
      return item === "CPF" ? (
        <span key={4} className="error--message">
          O CPF deve conter 11 e somente números.
        </span>
      ) : (
        ""
      );
    });
  },
};
