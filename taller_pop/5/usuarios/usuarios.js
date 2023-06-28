const usuarios = {
    "12456789": "carlos",
    "75684289": "Juan",
    "56973185": "Samuel",
    "98731465": "Jose",
    "25796431": "Daniel",
    "1519199": "Julian",
    "2929259": "Mario",
    "6195171": "Luis",
    "78191841": "Jhon",
    "9159175": "Sebastian"
  };
  
  console.log("Nombres de usuarios:");
  for (let documento in usuarios) {
    if (usuarios.hasOwnProperty(documento)) {
      const nombre = usuarios[documento];
      console.log(nombre, "CC:", documento);
    }
  }  
