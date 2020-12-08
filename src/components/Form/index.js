import React, { useState, useEffect } from "react";
import axios from "axios";

import Brand from "../Brand";
import Button from "../Button";

import Error from "../Error";
import Success from "../Success";

import * as S from "./styled";

function Form() {
  const [states, setStates] = useState([]);
  const [errorCRM, setErrorCRM] = useState(true);
  const [errorUF, setErrorUF] = useState(true);
  const [success, setSuccess] = useState(false);

  const [messageCRM, setMessageCRM] = useState("");
  const [messageUF, setMessageUF] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    }).then((response) => {
      setStates(response.data);
    });
  }, []);

  function validation(crm, uf) {
    setSuccess(false);

    if (crm === "") {
      setErrorCRM(true);
      setMessageCRM("O campo CRM está vazio.");
    } else if (crm.length < 5) {
      setErrorCRM(true);
      setMessageCRM("Seu CRM precisa ter no mínimo 5 caracteres.");
    } else {
      setErrorCRM(false);
      setMessageCRM("");
    }

    if (uf === "") {
      setErrorUF(true);
      setMessageUF("Selecione seu estado.");
    } else {
      setErrorUF(false);
      setMessageUF("");
    }

    if (errorCRM && errorUF) {
      setSuccess(false);
      setMessageSuccess("ocorreu um erro.");
    } else {
      setSuccess(true);
      setMessageSuccess("Sucesso.");
    }
  }

  function onSubmit(e) {
    validation(
      document.getElementById("inputCRM").value,
      document.getElementById("inputUF").value
    );
    e.preventDefault();
  }

  return (
    <>
      <Brand />
      <S.Form onSubmit={onSubmit}>
        <S.InputContainer>
          <S.Label>CRM</S.Label>
          <S.Input
            id="inputCRM"
            type="text"
            maxLength="7"
            placeholder="0000000"
          ></S.Input>
        </S.InputContainer>
        {errorCRM && <Error message={messageCRM} />}
        <S.InputContainer>
          <S.Label>UF</S.Label>
          <S.Select id="inputUF">
            <option defaultValue="" value="">
              Selecionar
            </option>
            {states.map((item) => (
              <option key={item.id} value={item.sigla}>
                {" "}
                {item.sigla}
              </option>
            ))}
          </S.Select>
        </S.InputContainer>

        {errorUF && <Error message={messageUF} />}

        <Button type="submit">Continue</Button>

        {success && <Success message={messageSuccess} />}
      </S.Form>

      <S.Disclaimer>Canal de compra exclusivo para classe médica</S.Disclaimer>
    </>
  );
}

export default Form;
