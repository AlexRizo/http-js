import { init } from "./js/usuarios-page";
import { obtenerUsuarios } from "./js/http-provider";

obtenerUsuarios().then(console.log)
init();