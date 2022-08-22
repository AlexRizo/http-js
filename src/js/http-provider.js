const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const userUrl = "https://reqres.in/api/users?page=2";

// Cloudinary
const cloudPreset = 'kgkwtvc8'
const cloudUrl = 'https://api.cloudinary.com/v1_1/dhgb3akqr/upload'

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

const subirImagen = async (archivo) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivo);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}