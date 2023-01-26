import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PinkDivider from "../components/PinkDivider";
import faqImg from "../assets/faq.png";
import contactImg from "../assets/contact.png";

enum SubjectEnum {
  work = "work",
  sugg = "sugg",
  other = "other",
}

interface IFormInput {
  email: String;
  name: String;
  subject: SubjectEnum;
  checkbox: Boolean;
  message: String;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <Navbar />

      <div className="gray-bg d-flex justify-content-center justify-content-lg-start align-items-center position-relative" style={{ padding: "0 13rem" }}>
        <div className="d-flex flex-column my-5 py-5 col-12 col-lg-8">
          <button
            className="btn bg-transparent text-white border-white fst-italic fs-4 rounded-4 py-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample1"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Como faço para trabalhar na Aurora?
          </button>
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body text-center bg-transparent text-white border-white rounded-4 rounded-top-0 mx-5 px-5">Nos envie um e-mail no fim da página!</div>
          </div>

          <button
            className="btn bg-transparent text-white border-white fst-italic fs-4 rounded-4 py-4 mt-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Quando a Aurora Borealis começou?
          </button>
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body text-center bg-transparent text-white border-white rounded-4 rounded-top-0 mx-5 px-5">
              Iniciamos com a Aurora em 2019, participando de game jams e criando pequenos projetos.
            </div>
          </div>

          <button
            className="btn bg-transparent text-white border-white fs-4 rounded-4 fst-italic py-4 mt-5"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample3"
            aria-expanded="false"
            aria-controls="multiCollapseExample3"
          >
            Quais são os projetos principais da Aurora atualmente?
          </button>
          <div className="collapse multi-collapse" id="multiCollapseExample3">
            <div className="card card-body text-center bg-transparent text-white border-white rounded-4 rounded-top-0 mx-5 px-5">
              Atualmente estamos com o estúdio de desenvolvimento fazendo nosso jogo Lovestruck, e com o estúdio de criação de conteúdo trabalhando com o Aurostars!
            </div>
          </div>
        </div>

        <img src={faqImg} alt="" className="position-absolute bottom-0 d-none d-lg-block" width="20%" style={{ right: "5%" }} />
      </div>

      <PinkDivider />

      <div className="contact d-flex justify-content-center justify-content-lg-end position-relative gray-bg text-white p-5">
        <div className="col-8 my-5">
          <div className="text-center text-lg-start">
            <h1 className="fw-bold m-0">Fale conosco</h1>
            <p className="fst-italic">Quer mandar algum feedback ou reclamação? Entre em contato!</p>
          </div>

          <form className="d-flex justify-content-center justify-content-lg-start" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6 me-5">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Seu e-mail
                </label>
                <input
                  type="email"
                  placeholder="Exemplo: contato@auroraborealis.com"
                  className="form-control bg-transparent text-white"
                  id="exampleInputEmail"
                  {...register("email", { required: true, minLength: 10, maxLength: 50 })}
                />
                {errors.email && (
                  <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                    Esse campo precisa ser preenchido
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Seu nome
                </label>
                <input
                  type="text"
                  placeholder="Exemplo: Aurora Borealis"
                  className="form-control bg-transparent text-white"
                  id="exampleInputName"
                  {...register("name", { required: true, minLength: 3, maxLength: 50 })}
                />
                {errors.name && (
                  <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                    Esse campo precisa ser preenchido
                  </p>
                )}
              </div>

              <div className="mb-3 col-12 col-lg-6">
                <label htmlFor="exempleSelectSubject" className="form-label">
                  Assunto
                </label>
                <select id="exempleSelectSubject" className="form-select bg-transparent text-white" aria-label="Selecione o assunto" {...register("subject")}>
                  <option value="carreira">Trabalhe conosco</option>
                  <option value="sugestoes">Sugestões</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" {...register("checkbox", { required: true })} />
                <label className="form-check-label fst-italic text-gray" htmlFor="flexCheckDefault">
                  Ao selecionar esta caixa, você nos autoriza a compartilhar seu e-mail conosco.
                </label>
                {errors.checkbox && (
                  <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                    Esse campo precisa ser assinalado
                  </p>
                )}
              </div>

              <div className="d-flex flex-column col-12 col-lg-6">
                <button className="btn bg-transparent text-white border-white fst-italic py-3">Adicionar arquivo</button>
                <span className="fst-italic text-gray">Formato de arquivos permitidos .pdf, .png, .jpg, .jpeg e .zip</span>
              </div>
            </div>

            <div className="col-4">
              <label htmlFor="" className="form-label color-transparent" style={{ color: "transparent" }}>
                label
              </label>
              <textarea className="form-control bg-transparent text-white h-50" placeholder="Digite sua mensagem aqui" {...register("message", { required: true, maxLength: 1000 })}></textarea>
              {errors.message && (
                <p role="alert" className="ms-3" style={{ color: "#ff0f0f" }}>
                  Esse campo precisa ser preenchido
                </p>
              )}
              <input type="submit" className="btn bg-transparent text-white border-white fst-italic py-3 mt-3 w-100" value="Enviar mensagem" />
            </div>
          </form>
        </div>
        <img src={contactImg} alt="" width="25%" className="position-absolute bottom-0 d-none d-lg-block" style={{ left: "5%" }} />
      </div>

      <PinkDivider />

      <Footer />
    </>
  );
};

export default Contact;
