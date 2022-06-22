import Joi from "joi";

const minCharacterFirstName = 3;
const minCharacterLastName = 4;
const minCharacterCellDDD = 11;
const minCharacterAdress = 10;
const minCharacterCPF = 11;
const minCharacterCep = 8;

const firstStepSchema = Joi.object({
  name: Joi.string()
    .min(minCharacterFirstName)
    .message('o capo nome precisa ser no minimo 3 caracteres')
    .required('o campo não pode ser vazio'),

  lastname: Joi.string()
    .min(minCharacterLastName)
    .message(' sobrenome nome precisa ser no minimo 4 caracteres')
    .required(),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .message('insira um email valido')
    .required(),

  cell: Joi.string()
    .min(minCharacterCellDDD)
    .message('insira seu DDD + seu numero sem () parenteses')
    .required(),
});

const secondStepSchema = Joi.object({
  cep: Joi.string()
    .min(minCharacterCep)
    .message('o campo cep espera no minimo 8 caracteres')
    .required(),

  adress: Joi.string()
    .min(minCharacterAdress)
    .message('o endereço espera no minimo 10 caracteres')
    .required(),

  adresstwo: Joi.string(),
});

const thirdStepSchema = Joi.object({
  date: Joi.date()
    .message('insira uma data valida')
    .required(),
  cpf: Joi.string()
    .min(minCharacterCPF)
    .message('o campo cpf espera 11 caracteres')
    .required(),
  salary: Joi.number()
    .min(3)
    .message('o campo cpf espera 3 caracteres')
    .required()
});


export default {
  firstStepValidation: (dataStep1) => firstStepSchema.validate(dataStep1),
  secondStepValidation: (dataStep2) => secondStepSchema.validate(dataStep2),
  thirdStepValidation: (dataStep3) => thirdStepSchema.validate(dataStep3)
};
