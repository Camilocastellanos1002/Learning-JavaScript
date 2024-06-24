alert("Bienvenido a la base de datos!");
let opcion;
let opcion2;
let opcion3;
let usuarioDatos=[];
let nombreUsuarios=[];

let contadorUsuarios=0;
while (opcion!=3) {
    opcion=Number(prompt(`Menu:\n1. Registrarse\n2. Iniciar sesion\n3.Salir\nseleccione: `));
    switch (opcion) {
        case 1:
            const usuario={
                us: prompt("Ingrese un usuario: "),
                nombre: prompt("Ingrese su nombre: "),
                contraseña: prompt("Ingrese una contraseña: "),
            }
            usuario.validarSi = function(){
                for (let i = 0; i < usuarioDatos.length; i++) {
                    if(i-1 == -1){
                        continue;
                    }
                    //for (let j = usuarioDatos.length-1; j > 0 ; j--){
                    if (usuarioDatos[i].us ==  usuarioDatos[i-1].us) {
                        console.log("Usuario ya existe");
                        usuarioDatos.pop();
                        contadorUsuarios--;
                    }
                    //}
                }
            }
            usuarioDatos.push(usuario);
            nombreUsuarios.push(usuario.us);
            contadorUsuarios++;
            usuario.validarSi();
            console.log(usuarioDatos);
            console.log(contadorUsuarios);
        break;
        case 2:
            console.log(contadorUsuarios);
            let user= prompt("Ingrese usuario: ");
            for (let i = 0; i < contadorUsuarios; i++) {
                if (user == usuarioDatos[i].us) {
                    let password= prompt("Ingrese constraseña: ");
                    if (password == usuarioDatos[i].contraseña) {
                        console.log("Bienvenido");
                        alert("Bienvenido");
                        usuarioDatos[i].genero=prompt("Ingrese genero: "),
                        usuarioDatos[i].estadoCivil=prompt("Ingrese estado civil: "),
                        usuarioDatos[i].ingresosMensuales=Number(prompt("Ingresos mensuales: ")),
                        usuarioDatos[i].grupo=prompt("Ingrese grupo: ");
                        do {
                            opcion2= Number(prompt("Menu:\n1.Mostrar datos\n2.Modificar datos\n3.Elminar datos\n4.Agregar datos\n5.Salir\nSeleccione: "));
                            switch (opcion2) {
                                case 1:
                                    console.log(usuarioDatos[i]);
                                break;
                                case 2:
                                    do {
                                        opcion3= Number(prompt("Menu:\n1.Modificar nombre\n2.Modificar genero\n3.Modificar estado civil\n4.Modificar ingresos mensuales\n5.Modificar grupo\n6.Salir\nSeleccione: "));
                                        switch (opcion3) {
                                            case 1:
                                                usuarioDatos[i].nombre=prompt("Ingrese nuevo nombre: ");
                                                console.log(`nuevo nombre: ${usuarioDatos[i].nombre}`);
                                            break;
                                            case 2:
                                                usuarioDatos[i].genero=prompt("Ingrese nuevo genero: ");
                                                console.log(`nuevo genero: ${usuarioDatos[i].genero}`);
                                            break;
                                            case 3:
                                                usuarioDatos[i].estadoCivil=prompt("Ingrese nuevo estado Civil: ");
                                                console.log(`nuevo estado civil: ${usuarioDatos[i].estadoCivil}`);
                                            break;
                                            case 4:
                                                usuarioDatos[i].ingresosMensuales=Number(prompt("Ingrese nuevos ingresos mensuales: "));
                                                console.log(`nuevos ingresos: ${usuarioDatos[i].ingresosMensuales}`);
                                            break;
                                            case 5:
                                                usuarioDatos[i].grupo=prompt("Ingrese nuevos ingresos mensuales: ");
                                                console.log(`nuevo grupo: ${usuarioDatos[i].grupo}`);
                                            break;
                                            default:
                                                console.log("Opcion erronea");
                                            break;
                                        } 
                                    } while (opcion3!=6);
                                    
                                break;
                                case 3:
                                    do {
                                        opcion3= Number(prompt("Menu:\n1.Eliminar nombre\n2.Eliminar genero\n3.Eliminar estado civil\n4.Eliminar ingresos mensuales\n5.Eliminar grupo\n6.salir\nSeleccione: "));
                                    switch (opcion3) {
                                        case 1:
                                            delete usuarioDatos[i].nombre;
                                            console.log(`nombre eliminado`);
                                        break;
                                        case 2:
                                            delete usuarioDatos[i].genero;
                                            console.log(`genero eliminado`);
                                        break;
                                        case 3:
                                            delete usuarioDatos[i].estadoCivil;
                                            console.log(`estado civil eliminado`);
                                        break;
                                        case 4:
                                            delete usuarioDatos[i].ingresosMensuales;
                                            console.log(`ingresos eliminados`);
                                        break;
                                        case 5:
                                            delete usuarioDatos[i].grupo;
                                            console.log(`grupo eliminado`);
                                        break;
                                        default:
                                            console.log("Opcion erronea");
                                        break;
                                    }
                                    } while (opcion3!=6);
                                break;
                                case 4:
                                    let key = prompt("Ingrese el tipo de dato: ");
                                    usuarioDatos[i].key = prompt("Ingrese el nuevo dato: ");
                                    console.log(`nuevo dato: ${usuarioDatos[i].key}`);
                                break;
                                default:
                                    console.log("Opcion erronea");
                                break;
                            }
                        } while (opcion2!=5);
                    }else{
                        console.log("Contraseña erronea");
                        alert("Contraseña erronea");
                    }
                }
            }
        break;
        default:
            console.log("Opcion erronea");
        break;
    }
}