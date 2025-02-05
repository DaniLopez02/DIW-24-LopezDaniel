
//Ejercicio 1
type Coordenadas = [latitud: number, lungitud: number];
let cord: Coordenadas = [40, 30];
cord = [20, 30, 40]

//Ejercicio 2
//   Declara una variable id que pueda ser string o number.
// • Crea una función imprimirId(id: string | number) que:
// – Imprima un mensaje distinto si el ID es string (por ejemplo,
// mayúsculas) o número (por ejemplo, sumar 1).
// • Llama a la función con distintos tipos de id.

función decirTipo(id: number | string): void {
  if(typeof variable === 'number') {
  console.log("Es un numero ");
} else {
  console.log("Es un string")
}
}
decirTipo(3)
decirTipo("hola")
decirTipo(true)
//Ejercicio 3
// Define una interfaz Producto con propiedades obligatorias: id: number,
// nombre: string, precio: number.
// • Crea una función actualizarProducto(producto: Producto, cambios:
// Partial<Producto>): Producto que:
// – Devuelva un nuevo objeto de tipo Producto aplicando los cambios indicados en
// cambios.
// • Comprueba cómo puedes actualizar solo una parte del producto, gracias
// a que Partial<Producto> vuelve las propiedades opcionales.

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

function cambiar(producto: Producto, cambios: Partial<Producto>): Producto {
  return { Producto ,cambios}
}


const p1: Producto = { id: 1, nombre: "producto", precio: 2 };

const p1Actualizado = cambiar(p1, { precio: 5 });

//Ejercicio 4
// Define una interfaz Configuracion con propiedades opcionales: url?:
// string, puerto?: number.
// • Crea una función inicializarApp(config: Required<Configuracion>)
// que reciba una configuración, pero ahora todas las propiedades
// deben ser requeridas.
// • Verifica que TypeScript te obligue a pasar valores para ambas
// propiedades.
interface Configuracion {
  url?: string;
  puerto?: number; 
}

función inicializar(configuracion: Required<Configuracion>):void{
  console.log("verificacion exitosa")
}
let conf:Configuracion={url:"url"}
inicializar(conf)

//Ejercicio 5 
// • Define un tipo literal para roles de usuario, por ejemplo: type Rol =
// 'admin' | 'editor' | 'viewer';.
// • Usa Record<Rol, boolean> para crear un tipo Permisos.
// • Declara una variable permisosUsuario de tipo Permisos y asígnale
// valores booleanos para cada rol.
// • Muestra por consola cómo acceder a uno de los permisos.

type Roles = 'admin' | 'editor' | 'viewer';
type Permisos = Record<Roles, boolean>;

const rolPermisos: Permisos = {admin: true, editor: false, viewer: false}; 
console.log(rolPermisos.admin)
console.log(rolPermisos.editor)
console.log(rolPermisos.admin)