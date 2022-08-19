const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const userUrl = "https://reqres.in/api/users?page=2";

const obtenerChiste = async() => {

    try {
        const resp = await fetch(jokeUrl);

        if(!resp.ok) throw 'No se pudo realizar la petición';
    
        const {icon_url, id, value} = await resp.json(); 

        return {icon_url, id, value};
    } catch (error) {
        throw error;
    }


}

const obtenerUsuarios = async() => {
    try {
        const resp = await fetch(userUrl);

        if (!resp.ok) throw 'No se pudo realizar la petición';

        const {data:usuarios} = await resp.json();
        // console.log(usuarios);

        return usuarios;
    } catch (error) {
        throw error;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios
}