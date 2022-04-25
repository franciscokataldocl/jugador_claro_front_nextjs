// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --black:#2B2B2B;
    --white:#fff;
    --red:#DA291C;
    --grey:#565656;
    --roboto:'Roboto', sans-serif;
    --light:300;
    --regular:400;
    --medium:500;
    --bold:700;
}
*{
   text-decoration:none;
}
body{
 font-family:var(--roboto);
 font-size:16px;
 color:var(--black);
 font-weight:var(--regular);
}

.aniamte-2s{
    -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
}

.bg-red{
    background:var(--red);
}
.bg-white{
    background:var(--white);
}
.c-red{
    color:var(--red);
}
.c-white{
    color:var(--white);
}
.c-black{
    color:var(--black);
}
.c-grey{
    color:var(--grey);
}

.shadow-1{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

h3{
    font-weight:var(--regular);
    color:var(--grey)
}

textarea:focus, input:focus{
    outline: none;
}
.btn{
border-radius:100px;
padding: 4% 12%;
border:none;
}
.btn:hover{
    cursor:pointer;
}
.btn-red{
    background:var(--red);
    color:var(--white);
    font-size:.9rem;
    letter-spacing:.09rem;
    font-weight:var(--regular);
    border:var(--red) solid 1px;
}
.btn-red:hover{
    background:var(--white);
    color:var(--red);
}
@keyframes bounce {
        0% {
    transform: scale(1,1) translate(0px, 0px);
  }

  30%{
    transform: scale(1,0.8) translate(0px, 10px);
  }

  75%{
    transform: scale(1,1.1) translate(0px, -25px);
  }

 100% {
    transform: scale(1,1) translate(0px, 0px);
  }
}

.correct{
    background: #61bc61!important;
    color: white!important;
    font-weight: 600!important;
    -webkit-animation: bounce 0.75s;
  animation-iteration-count: 2
}


@keyframes shake {
  0% {transform: translate(0px, 0)}
  1% {transform: translate(-3px, 0)}
  2% {transform: translate(5px, 0)}
  3% {transform: translate(-12px, 0)}
  4% {transform: translate(12px, 0)}
  5% {transform: translate(-5px, 0)}
  6% {transform: translate(3px, 0)}
  7% {transform: translate(0px, 0)}
}
.incorrect {
   background: #b00909!important;
    color: white!important;
    font-weight: 300!important;
    -webkit-animation: shake 4s;
  animation-iteration-count: 1
}
.errormsg{
    color: var(--red);
    font-style: italic;
    font-size: .8rem;
    text-align: center;
    width: 100%;
    padding-top: 3px;
}
/* .swal2-confirm{
    background:white!important;
    color:var(--red)!important;
} */
.swal2-icon.swal2-success .swal2-success-ring{
border: 0.25em solid rgb(255 255 255);
}
/* .swal2-icon.swal2-success [class^=swal2-success-line]{
background-color: white;
} */
.swal2-popup{
    border-radius: 30px;
}
.swal2-backdrop-show{
background:rgb(0 0 0 / 80%);
}

/*


.swal2-success-circular-line-right,.swal2-success-fix{
    display:none;
}
.swal2-title, .swal2-html-container{
    color:white;
}
.swal2-confirm{
    background:white!important;
    color:var(--red)!important;
} */

.btn-white{
    background:white;
    color:var(--red);
    font-size:.9rem;
    letter-spacing:.09rem;
    font-weight:var(--regular);
    border:var(--red) solid 1px;
}
.btn-white:hover{
    cursor: pointer;
    opacity: .8;
}

`;

export default GlobalStyles;