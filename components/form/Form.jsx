import styled from "styled-components";
import { Formik, Field } from "formik";
import Swal from "sweetalert2";
import "animate.css";
import { useUser } from "../../context/userContext";
import { useShowHide } from "../../context/ShowHideContext";
import { validate, clean, format, getCheckDigit } from "rut.js";








const Form = ({ regiones }) => {

  const { user, setUser } = useUser();
   const { show, setShow } = useShowHide();

        const token = document.cookie.replace("token=", "");


  return (
    <Formik
      initialValues={{
        nombre: "",
        email: "",
        rut: "",
        telefono: "",
        region: "",
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
        if (!validate(valores.rut)) {
          errores.rut = "Debes ingresar un RUT válido";
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

      //submit del formulario
      onSubmit={async (valores, { resetForm }) => {
        const requestOptions = {
          method: "POST",
          headers: {
            'authorization': token,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(valores),
        };
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}user`,
          requestOptions
        );
        const data = await response.json();
        console.log("data recibida al registrar");

        //window.localStorage.setItem('token', JSON.stringify(data.token))
        document.cookie = `token=${data.token}; max-age=${60 * 5}; path=/; samesite=strict;`
        //console.log(document.cookie);

        //---------------CASO 1 - USUARIO NUEVO, NO REGISTRADO
        if (!data.usuario.voto && !data.usuario.jugado) {
          //enviar datos de usuario registrado al context
          setUser((prev) => ({
            user: {
              id: data.usuario.id,
              rut: data.usuario.rut,
              email: data.usuario.email,
              telefono: data.usuario.telefono,
              nombre: data.usuario.nombre,
              voto: data.usuario.voto,
              jugado: data.usuario.jugado,
              correcto: data.usuario.correcto,
            },
            player: {
              ...prev.player,
            },
          }));

          //levantamos modal retroalimentación
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
              //si la persona presiona el boton IR A VOTAR
              //ocultamos el formulario y mostramos los jugadores para votar
              setShow((prev) => ({
                ...prev,
                formulario: false,
                votar: true,
              }));
            }
          }); //end then swal
        }



        //---------------CASO 2 - USUARIO REGISTRADO, NO HA VOTADO
          //no es necesario este caso

        //---------------CASO 3 - USUARIO REGISTRADO, VOTO, PERO NO HA JUGADO LA TRIVIA
if (data.usuario.voto && !data.usuario.jugado) {
  //enviar datos de usuario registrado al context
  setUser((prev) => ({
    user: {
      id: data.usuario.id,
      rut: data.usuario.rut,
      email: data.usuario.email,
      telefono: data.usuario.telefono,
      nombre: data.usuario.nombre,
      voto: data.usuario.voto,
      jugado: data.usuario.jugado,
      correcto: data.usuario.correcto,
    },
    player: {
      ...prev.player,
    },
  }));

  //levantamos modal retroalimentación
  Swal.fire({
    title: `${data.mensaje}`,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    text: "Te invitamos a jugar en EL JUGADOR CLARO",
    icon: "success",
    color: "var(--black)",
    background: "white",
    confirmButtonText: "Ir a jugar",
    confirmButtonColor: "var(--red)",

    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('confirmado a votar');
      //si la persona presiona el boton IR A VOTAR
      //ocultamos el formulario y mostramos los jugadores para votar
      setShow((prev) => ({
        ...prev,
        formulario: false,
        votar: false,
        quizModal: true,
        showQuiz: false,
      }));
    }
  }); //end then swal
}

        //---------------CASO 4 - USUARIO REGISTRADO, VOTO Y JUGO LA TRIVIA
        if (data.usuario.voto && data.usuario.jugado) {
          //levantamos modal retroalimentación
          Swal.fire({
            title: `${data.mensaje}`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            text: "Solo puedes votar y jugar una sola vez",
            icon: "success",
            color: "var(--black)",
            background: "white",
            confirmButtonText: "Terminar",
            confirmButtonColor: "var(--red)",

            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          }).then((result) => {
            if (result.isConfirmed) {
             //limpiamos el formulario
              resetForm();
            }
          }); //end then swal
        }


















        //usuario nuevo, enviar a votar
        // if (data.voto === false) {
        //   //inicio swal
        //   Swal.fire({
        //     title: `${data.mensaje}`,
        //     showClass: {
        //       popup: "animate__animated animate__fadeInDown",
        //     },
        //     text: "Ahora puedes votar por tu jugador favorito",
        //     icon: "success",
        //     color: "var(--black)",
        //     background: "white",
        //     confirmButtonText: "Ir a Votar",
        //     confirmButtonColor: "var(--red)",

        //     hideClass: {
        //       popup: "animate__animated animate__fadeOutUp",
        //     },
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       //si la persona presiona el boton IR A VOTAR
        //       //ocultamos el formulario y mostramos los jugadores para votar
        //       // setVote((prev) => ({
        //       //   ...prev,
        //       //   vote: "show",
        //       //   isVoted: false,
        //       //   user: {
        //       //     id: data.usuario.id,
        //       //     rut: data.usuario.rut,
        //       //     email: data.usuario.email,
        //       //     telefono: data.usuario.telefono,
        //       //     nombre:data.usuario.nombre
        //       //   },
        //       //   player: prev.player,
        //       // }));
        //     }
        //   }); //end then swal
        // }
        //usuario ya registrado que no ha votado, enviar a votar
        // if (data.goto === "votar") {
        //   //inicio swal
        //   Swal.fire({
        //     title: `${data.mensaje}`,
        //     showClass: {
        //       popup: "animate__animated animate__fadeInDown",
        //     },
        //     text: "Ahora puedes votar por tu jugador favorito",
        //     icon: "success",
        //     color: "var(--black)",
        //     background: "white",
        //     confirmButtonText: "Ir a Votar",
        //     confirmButtonColor: "var(--red)",

        //     hideClass: {
        //       popup: "animate__animated animate__fadeOutUp",
        //     },
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       //si la persona presiona el boton IR A VOTAR
        //       //ocultamos el formulario y mostramos los jugadores para votar
        //       // setVote((prev) => ({
        //       //   ...prev,
        //       //   vote: "show",
        //       //   isVoted: false,
        //       //   user: {
        //       //     id: data.usuario.id,
        //       //     rut: data.usuario.rut,
        //       //     email: data.usuario.email,
        //       //     telefono: data.usuario.telefono,
        //       //     nombre: data.usuario.nombre
        //       //   },
        //       //   player: prev.player,
        //       // }));
        //     }
        //   }); //end then swal
        // }

        //enviar a usuario a jugar la trivia
        // if (data.goto === "jugar") {
        //   Swal.fire({
        //     title: `${data.mensaje}`,
        //     showClass: {
        //       popup: "animate__animated animate__fadeInDown",
        //     },
        //     text: "Te invitamos a jugar la trivia de EL JUGADOR CLARO",
        //     icon: "success",
        //     color: "var(--black)",
        //     background: "white",
        //     confirmButtonText: "Ir a la trivia",
        //     confirmButtonColor: "var(--red)",

        //     hideClass: {
        //       popup: "animate__animated animate__fadeOutUp",
        //     },
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       // setQuiz(() => ({
        //       //   jugar: true,
        //       //   usuario_id: data.usuario.id,
        //       //   showTrivia:false,
        //       // }));
        //       // setVote((prev) => ({
        //       //   ...prev,
        //       //   vote: "hide",
        //       //   isVoted: true,
        //       //   user: {
        //       //     id: data.id,
        //       //     rut: data.rut,
        //       //     email: data.email,
        //       //     telefono: data.telefono,
        //       //     nombre: data.nombre
        //       //   },
        //       //   player: prev.player,
        //       // }));
        //     }
        //   });
        // }

        //usuario ya voto, ya jugo, recargar la página
        // if (data.goto === "reload") {
        // }

        //resetear formulario despues de enviar
        //resetForm();
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
