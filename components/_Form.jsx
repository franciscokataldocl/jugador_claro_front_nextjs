import styled from "styled-components";
import { motion } from "framer-motion";
import { Formik, Field } from "formik";
import Swal from "sweetalert2";
import "animate.css";
//import { useVote } from "../context/userVote";




const Form = ({ regiones }) => {

  //state hook for set user data on register
  //const { uservote, setUservote } = useVote();



  return (
    <Formik
      initialValues={{
        nombre: "",
        email: "",
        rut: '',
        telefono: '',
        region: '',
      }}
      validate={(valores) => {
        //objeto errores
        let errores = {};

        //validacion nombre
        if (!valores.nombre) {
          errores.nombre = "Debes ingresar un nombre";
        } else if (!/^[a-zA-ZÁ-Ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre = "Ingresa solo letras y espacios";
        }

        //validacion email
        if (!valores.email) {
          errores.email = "Debes ingresar un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email = "Debes ingresar un email válido";
        }

        //validacion rut
        if (!valores.rut) {
          errores.rut = "Debes ingresar un RUT";
        }

        //validacion telefono
        if (!valores.telefono) {
          errores.telefono = "Debes ingresar un teléfono";
        }

        //validacion region
        if (!valores.region) {
          errores.region = "Selecciona una región";
        }

        return errores;
      }}
          onSubmit={ async (valores, { resetForm }) => {

            //enviar valores al backend
            const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
                body: JSON.stringify(valores),
            };
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user`, requestOptions);
              const data = await response.json();

              if (data.status === 200) {
                    Swal.fire({
                      title: `${data.mensaje}`,
                      showClass: {
                        popup: "animate__animated animate__fadeInDown",
                      },
                      text: "Ahora puedes votar por tu jugador favorito",
                      icon: "success",
                      color: "var(--black)",
                      background: "white",
                      confirmButtonText: "Ir a Votar",
                      confirmButtonColor: "var(--red)",

                      hideClass: {
                        popup: "animate__animated animate__fadeOutUp",
                      },
                    }).then((result) => {
                      if (result.isConfirmed) {
                        /* aca deberia cambiar un estado que oculta y muestra
                        el contenedor de los jugadores para poder votar
                        al cambiar ese estado tambien se deberá hacer un llamado a un endpoint
                        que trarea: 1 el listado de jugadores

                        al hacer click en uno de esos jugadores
                        debera cambiar otro estado este estado se encargará de ocultar
                        el boton para votar y en su lugar renderizara el % de votos por cada jugador
                        en relacion al total de votos y jugadores votados hasta el momento.
                        por lo que este mismo estado debera ejecutar un llamado a otro endpoint que devuelva dicha data
                        */


                      }
                    });
              }

              if (data.status === 400) {
                Swal.fire({
                  title: `${data.mensaje}`,
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  text: "Intenta registrar otra persona",
                  icon: "warning",
                  color: "var(--black)",
                  background: "white",
                  confirmButtonText: "Reintentar",
                  confirmButtonColor: "var(--red)",

                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              }



            //resetear formulario despues de enviar
            resetForm();
          }}
    >
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
      }) => (
        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="" className="c-grey">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: francisco"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && (
              <p className="errormsg">{errors.nombre}</p>
            )}
          </InputGroup>
          <InputGroup>
            <label htmlFor="" className="c-grey">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej: francisco@claro.cl"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="errormsg">{errors.email}</p>
            )}
          </InputGroup>
          <InputGroup>
            <label htmlFor="" className="c-grey">
              Rut
            </label>
            <input
              type="text"
              id="rut"
              name="rut"
              placeholder="ej: 168212631"
              value={values.rut}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.rut && errors.rut && (
              <p className="errormsg">{errors.rut}</p>
            )}
          </InputGroup>
          <InputGroup>
            <label htmlFor="" className="c-grey">
              Teléfono
            </label>
            <input
              type="number"
              id="telefono"
              name="telefono"
              placeholder="Ej: 920210860"
              value={values.telefono}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.telefono && errors.telefono && (
              <p className="errormsg">{errors.telefono}</p>
            )}
          </InputGroup>
          <InputGroup>
            <label htmlFor="" className="c-grey">
              Región
            </label>
            <Field as="select" name="region">
              {regiones &&
                regiones.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.nombre}
                  </option>
                ))}
            </Field>
            {touched.region && errors.region && (
              <p className="errormsg">{errors.region}</p>
            )}
          </InputGroup>
          <InputGroup>
            <button type="submit" className="btn btn-red c-white aniamte-2s">
              PARTICIPAR
            </button>
          </InputGroup>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;

const FormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 0;

`;

const InputGroup = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0 3% 0;
  @media (max-width: 768px) {
    width: 100%;
  }

  & label {
    font-weight: var(--regular);
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
  & input {
    border-radius: 5px;
    border: var(--grey) solid 1px;
    padding: 3% 5%;
    color: var(--grey);
    width: 100%;
  }
  & select {
    border-radius: 5px;
    border: var(--grey) solid 1px;
    padding: 3% 5%;
    color: var(--grey) !important;
    width: 100%;

    background: white;
  }
  & button {
    margin: 15px auto 0 auto;
  }
`;
