//1er Punto

const Riwi ={
    informacion: {
        datosEmpresa: {
            razonSocial :"Rise Clusters S.A.S",
            tipoDocumento: "Nit",
            numeroDocumento: 9016554833,
            
        },
        contacto:{
            correo: "formacion@riwi.io"
        }
    },
    sedesEmpresa: {
        medellin:{
            direccionmed: "Calle 16 #55-129",
            telefono: 3017325327,
            recursos: {
                espacios: {
                    tercerPiso: {
                        esp1:"Lobby",
                        esp2:"salon Review",
                        esp3:"Coworking",
                        esp4: "gradas N1"
                    },
                    cuartoPiso: {
                        esp1:"salon Desarrollo de software",
                        esp2:"salon Review",
                        esp3:"oficina profesores",
                        esp4: "gradas N2"
                    },
                    quintoPiso:{
                        esp1:"salon Desarrollo de software",
                        esp2:"salon Review",
                        esp3:"salon Habilidades e Ingles",
                        esp4: "Baños",
                        esp5: "Zona de juegos"
                    }
                },
                materias:{
                    desarrolloDeSoftware: {
                        docentes: ["vermen", "el otro" ],
                        temas: ["python", "css", "html", "javascript"],
                        cantidadHoras : 4,
                        proyecto: "Crear tu propia pagina web responsiva y base de datos no relacional",
                        salon: "4 y 5",
                    },
                    ingles : {
                        docentes: ["javier", "el otro2" ],
                        habilidades :{
                            reading: {
                                porcentaje: 20,
                                dificultad: "medio"
                            },
                            speaking :{
                                porcentaje: 30,
                                dificultad: "alto"
                            },
                            writing:{
                                porcentaje: 20,
                                dificultad: "medio"
                            },
                            listening: {
                                porcentaje: 30,
                                dificultad: "alto"
                            },
                        },
                        cantidadHoras:1,
                        proyecto: "ganar una entrevista en ingles",
                        salon: "5",
                    },
                    habilidadesDeLaVida :{
                        docentes: ["liliana", "susana" ],
                        temas: ["manejo de emociones", "que harias si", "adaptacion al cambio", "tipo de mentalidad"],
                        cantidadHoras : 1,
                        proyecto: "poder controlar las emociones en cualquier ambito",
                        salon : "5"
                    },
                    review :{
                        docente: "NN",
                        temas: ["python", "css", "html", "javascript"],
                        cantidadHoras : 2,
                        salon: "3 y 4"
                    }
                },
                paginaWeb: {
                    menus: {
                        nuestroCurso:{
                            datos:["que es un coder", "como funciona", "requisitos", "que incluye", "plan de entrenamiento", "nuestros docentes" , "preguntas Frecuentes" , "soliocitar informacion", "visitanos"]
                        },
                        empleadores:{
                            datos:["bienvenida", "capacitacion y ubicacion", "que nos diferencia", "transformar vidas", "constante de desarrollo", "cumpliendo roles" , "preguntas Frecuentes" , "soliocitar informacion", "visitanos"]
                        },
                        sobreNosotros:{
                            datos:["historia", "vision", "proposito", "creencia", "por que riwi", "trabaja con nosotros"]
                        }
                    },
                    contacto: 3017325327,
                    idiomas : {
                        idioma1:"español",
                        idioma2:"ingles"
                    }
                }
            },
            
            integrantes: {
                empleados:{
                    Administracion: {
                        meroMero:{
                        datos: {
                            nombre: "Alberto Enrique Godoy",
                            documento: 73161304,
                            rh: "A-",
                            edad: 50,
                            estudios: {
                                colegio: {
                                    primaria : "liceo x",
                                    bachillerato: "colegio y",
                                },
                                universidad: {
                                    titulo: "ingeniero",
                                    posgrado: true,
                                    maestria: true,
                                    doctorado: true
                                }
                            },
                            bienes: {
                                casaPropia: true,
                                carroPropio: true,
                                empresaPropia: "riwi",
                                cantidadEmpresas: 3
                            }
                        },
                        funcion: "Representante legal",
                        tiempo: {
                            desde: "primer dia",
                            hasta: "que se termine riwi"
                        }
                        },
                        gerencia: {
                            datos:{
                                nombre: "Ricardo",
                                documento : 12345670,
                                rh: "A+",
                                edad :35,
                                estudios: {
                                    colegio: {
                                        primaria : "liceo x2",
                                        bachillerato: "colegio y2",
                                    },
                                    universidad: {
                                        titulo: "gerencia de proyectos",
                                        posgrado: false,
                                    }
                                },
                                bienes: {
                                    casaPropia: false,
                                    carroPropio: true,
                                }
                            },
                            tiempo: {
                                desde: 2022,
                                hasta: 2023
                            },
                            funcion: "Gerenciar proyectos de proyeccion de riwi",
                        },
                        recursos: {
                            datos:{
                                nombre: "jackeline",
                                documento: 731634,
                                edad: 32,
                                rh: "AB-",
                                estudios: {
                                    colegio: {
                                        primaria : "liceo x3",
                                        bachillerato: "colegio y3",
                                    },
                                    universidad: {
                                        titulo: "salud ocupacional",
                                    }
                                }
                            },
                            tiempo:{
                                desde: 2021,
                                hasta: 2023
                            },
                            funcion: "validad papeleria, salud, pagos",
                        },
                        abogado:{
                            datos: {
                                nombre: "mona",
                                documento: 1234565,
                            },
                            funcion: "validar estado de papeleria y porcesos judiciales"
                        },
                    },
                    Operacion: {
                        coordinador: {
                            nombre: "Mauricio",
                            documento : 1234,
                            edad: 32
                        },
                        trainers: {
                            Software:{
                                primerProfesorS :{
                                    datos: {
                                        nombre: "Vermen Ayala",
                                        documento: 731604,
                                        vivienda: {
                                            telefono: 322343423,
                                            direccionVivienda: "calle 1#3-32",
                                            barrio: "poblado",
                                        },     
                                        especialidad: "Back-End",
                                        rh: "A-",   
                                        edad: 40
                                    },
                                    horasLaborDiaria: 12,
                                    tiempoVinvulacon:{
                                        desde: 2018,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorS:{
                                    datos: {
                                        nombre: "no se",
                                        documento: 7316349,
                                        vivienda: {
                                            telefono: 322343422,
                                            direccionVivienda: "calle 1#35-60",
                                            barrio: "laureles",
                                        },
                                        especialidad: "Front-End",
                                        rh: "O-",   
                                        edad: 38
                                    },
                                    horasLaborDiaria: 10,
                                    tiempoVinvulacon:{
                                        desde: 2020,
                                        hasta: 2025
                                    }
                                }
                            },
                            ingles:{
                                primerProfesorI :{
                                    datos: {
                                        nombre: "Javier",
                                        documento: 5415325,
                                        vivienda: {
                                            telefono: 32616515,
                                            direccionVivienda: "calle 1#3-32",
                                            barrio: "belen",
                                        },
                                        especialidad: "Idiomas",
                                        rh: "B+",   
                                        edad: 30
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2021,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorI:{
                                    datos: {
                                        nombre: "Negrito",
                                        documento: 8418516,
                                        vivienda: {
                                            telefono: 45544510,
                                            direccionVivienda: "calle 15#60-39",   
                                            barrio: "itagui",
                                        },
                                        
                                        especialidad: "Idiomas",
                                        rh: "O-",   
                                        edad: 35
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2023,
                                        hasta: 2023
                                    }
                                }
                            },
                            habilidades: {
                                primerProfesorH :{
                                    datos: {
                                        nombre: "Liliana",
                                        documento: 2161561,
                                        vivienda: {
                                            telefono: 322343423,
                                            direccionVivienda: "calle 1#35-94b",
                                            barrio: "envigado",
                                        },
                                        especialidad: "Salud Ocupacional",
                                        rh: "A+",   
                                        edad: 30
                                    },
                                    horasLaborDiaria: 10,
                                    tiempoVinvulacon:{
                                        desde: 2020,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorH:{
                                    datos: {
                                        nombre: "La de las gafas",
                                        documento: 71652665,
                                        vivienda: {
                                            telefono: 32239989523,
                                            direccionVivienda: "calle 89#65-1",
                                            barrio: "parqueBerrio",
                                        }, 
                                        especialidad: "No sabe nada",
                                        rh: "AB+",   
                                        edad: 31
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2023,
                                        hasta: 2023
                                    }
                                }
                            }
                        },
                        serviciosGenerales :{
                            aseo:{
                                nombre: "Señora",
                                edad: 42,
                                vivienda: {
                                    telefono: 3223159,
                                    direccionVivienda: "calle 332# 1",
                                    barrio: "bello",
                                }, 
                            },
                            oficinosgenerales: {
                                nombre: "Calvito",
                                edad: 48,
                                vivienda: {
                                    telefono: 3223159,
                                    direccionVivienda: "calle 38# 19",
                                    barrio: "robledo",
                                },
                            }
                        },
                    },
                },
                coders:{
                    informacionGrupal: {
                        cantidadEstudiantes : 300,
                        clanes: {
                            meta: {
                                grupo: "1A",
                                cantidadEstudiantes: 15,
                                puntajeCodigoR : 30
                            },
                            vanRossum:{
                                grupo: "1B",
                                cantidadEstudiantes: 22,
                                puntajeCodigoR : 100
                            },
                            gates:{
                                grupo: "1C",
                                cantidadEstudiantes: 10,
                                puntajeCodigoR : 20
                            },
                            lovelace:{
                                grupo: "2A",
                                cantidadEstudiantes: 30,
                                puntajeCodigoR : 10
                            },
                            gosling:{
                                grupo: "2B",
                                cantidadEstudiantes: 25,
                                puntajeCodigoR : 12
                            },
                            dell:{
                                grupo: "2C",
                                cantidadEstudiantes: 18,
                                puntajeCodigoR : 27
                            },
                            jobs:{
                                grupo: "3A",
                                cantidadEstudiantes: 32,
                                puntajeCodigoR : 12
                            },
                            tesla:{
                                grupo: "3B",
                                cantidadEstudiantes: 25,
                                puntajeCodigoR : 0
                            },
                            ritchie:{
                                grupo: "3C",
                                cantidadEstudiantes: 40,
                                puntajeCodigoR : 70
                            }
                        },
                    },
                    informacionIndividual:{
                        datos:{
                            nombre:"Juan Camilo Chaparro Castellanos",
                            vivienda: {
                                direccion:"Calle 119 #64d-70",
                                barrio: "las brisas",
                            },
                            contacto:{
                                telefono: 3134254361,
                                correo: "jccaste1002@gmail.com",
                            },
                            transporte:{
                                distanciaRecorridoKm: 20,
                                vehiculoPropio: true,
                                transportePublico: false,
                            }
                        },
                        estudio:{
                            horarioEstudio:"mañana",
                            talentoEspecializado:"Back-End",
                            notas:{
                                desarrollo: 80,
                                ingles: 90,
                                habilidades: 65,
                                review: 70
                            },
                            entrevista:{
                                nombreEmpresa: "Globant",
                                cargo :"Junior Developer",
                                departamentoEmpresa: "Usa",
                                nombreEntrevistador: "scarlett johansson"
                            }
                        }
                    }
                },
            },
        },
        houston:{
            direcciontexas: "Hunting town park - ave 16",
            telefono: 103017325327,
            recursos: {
                espacios: {
                    tercerPiso: {
                        esp1:"Lobby",
                        esp2:"salon Review",
                        esp3:"Coworking",
                        esp4: "gradas N1"
                    },
                    cuartoPiso: {
                        esp1:"salon Desarrollo de software",
                        esp2:"salon Review",
                        esp3:"oficina profesores",
                        esp4: "gradas N2"
                    },
                    quintoPiso:{
                        esp1:"salon Desarrollo de software",
                        esp2:"salon Review",
                        esp3:"salon Habilidades e Ingles",
                        esp4: "Baños",
                        esp5: "Zona de juegos"
                    }
                },
                materias:{
                    desarrolloDeSoftware: {
                        docentes: ["vermen", "el otro" ],
                        temas: ["python", "css", "html", "javascript"],
                        cantidadHoras : 4,
                        proyecto: "Crear tu propia pagina web responsiva y base de datos no relacional",
                        salon: "4 y 5",
                    },
                    ingles : {
                        docentes: ["javier", "el otro2" ],
                        habilidades :{
                            reading: {
                                porcentaje: 20,
                                dificultad: "medio"
                            },
                            speaking :{
                                porcentaje: 30,
                                dificultad: "alto"
                            },
                            writing:{
                                porcentaje: 20,
                                dificultad: "medio"
                            },
                            listening: {
                                porcentaje: 30,
                                dificultad: "alto"
                            },
                        },
                        cantidadHoras:1,
                        proyecto: "ganar una entrevista en ingles",
                        salon: "5",
                    },
                    habilidadesDeLaVida :{
                        docentes: ["liliana", "susana" ],
                        temas: ["manejo de emociones", "que harias si", "adaptacion al cambio", "tipo de mentalidad"],
                        cantidadHoras : 1,
                        proyecto: "poder controlar las emociones en cualquier ambito",
                        salon : "5"
                    },
                    review :{
                        docente: "NN",
                        temas: ["python", "css", "html", "javascript"],
                        cantidadHoras : 2,
                        salon: "3 y 4"
                    }
                },
                paginaWeb: {
                    menus: {
                        nuestroCurso:{
                            datos:["que es un coder", "como funciona", "requisitos", "que incluye", "plan de entrenamiento", "nuestros docentes" , "preguntas Frecuentes" , "soliocitar informacion", "visitanos"]
                        },
                        empleadores:{
                            datos:["bienvenida", "capacitacion y ubicacion", "que nos diferencia", "transformar vidas", "constante de desarrollo", "cumpliendo roles" , "preguntas Frecuentes" , "soliocitar informacion", "visitanos"]
                        },
                        sobreNosotros:{
                            datos:["historia", "vision", "proposito", "creencia", "por que riwi", "trabaja con nosotros"]
                        }
                    },
                    contacto: 3017325327,
                    idiomas : {
                        idioma1:"español",
                        idioma2:"ingles"
                    }
                }
            },
            
            integrantes: {
                empleados:{
                    Administracion: {
                        meroMero:{
                        datos: {
                            nombre: "Alberto Enrique Godoy",
                            documento: 73161304,
                            rh: "A-",
                            edad: 50,
                            estudios: {
                                colegio: {
                                    primaria : "liceo x",
                                    bachillerato: "colegio y",
                                },
                                universidad: {
                                    titulo: "ingeniero",
                                    posgrado: true,
                                    maestria: true,
                                    doctorado: true
                                }
                            },
                            bienes: {
                                casaPropia: true,
                                carroPropio: true,
                                empresaPropia: "riwi",
                                cantidadEmpresas: 3
                            }
                        },
                        funcion: "Representante legal",
                        tiempo: {
                            desde: "primer dia",
                            hasta: "que se termine riwi"
                        }
                        },
                        gerencia: {
                            datos:{
                                nombre: "Ricardo",
                                documento : 12345670,
                                rh: "A+",
                                edad :35,
                                estudios: {
                                    colegio: {
                                        primaria : "liceo x2",
                                        bachillerato: "colegio y2",
                                    },
                                    universidad: {
                                        titulo: "gerencia de proyectos",
                                        posgrado: false,
                                    }
                                },
                                bienes: {
                                    casaPropia: false,
                                    carroPropio: true,
                                }
                            },
                            tiempo: {
                                desde: 2022,
                                hasta: 2023
                            },
                            funcion: "Gerenciar proyectos de proyeccion de riwi",
                        },
                        recursos: {
                            datos:{
                                nombre: "jackeline",
                                documento: 731634,
                                edad: 32,
                                rh: "AB-",
                                estudios: {
                                    colegio: {
                                        primaria : "liceo x3",
                                        bachillerato: "colegio y3",
                                    },
                                    universidad: {
                                        titulo: "salud ocupacional",
                                    }
                                }
                            },
                            tiempo:{
                                desde: 2021,
                                hasta: 2023
                            },
                            funcion: "validad papeleria, salud, pagos",
                        },
                        abogado:{
                            datos: {
                                nombre: "mona",
                                documento: 1234565,
                            },
                            funcion: "validar estado de papeleria y porcesos judiciales"
                        },
                    },
                    Operacion: {
                        coordinador: {
                            nombre: "Mauricio",
                            documento : 1234,
                            edad: 32
                        },
                        trainers: {
                            Software:{
                                primerProfesorS :{
                                    datos: {
                                        nombre: "Vermen Ayala",
                                        documento: 731604,
                                        vivienda: {
                                            telefono: 322343423,
                                            direccionVivienda: "calle 1#3-32",
                                            barrio: "poblado",
                                        },     
                                        especialidad: "Back-End",
                                        rh: "A-",   
                                        edad: 40
                                    },
                                    horasLaborDiaria: 12,
                                    tiempoVinvulacon:{
                                        desde: 2018,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorS:{
                                    datos: {
                                        nombre: "no se",
                                        documento: 7316349,
                                        vivienda: {
                                            telefono: 322343422,
                                            direccionVivienda: "calle 1#35-60",
                                            barrio: "laureles",
                                        },
                                        especialidad: "Front-End",
                                        rh: "O-",   
                                        edad: 38
                                    },
                                    horasLaborDiaria: 10,
                                    tiempoVinvulacon:{
                                        desde: 2020,
                                        hasta: 2025
                                    }
                                }
                            },
                            ingles:{
                                primerProfesorI :{
                                    datos: {
                                        nombre: "Javier",
                                        documento: 5415325,
                                        vivienda: {
                                            telefono: 32616515,
                                            direccionVivienda: "calle 1#3-32",
                                            barrio: "belen",
                                        },
                                        especialidad: "Idiomas",
                                        rh: "B+",   
                                        edad: 30
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2021,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorI:{
                                    datos: {
                                        nombre: "Negrito",
                                        documento: 8418516,
                                        vivienda: {
                                            telefono: 45544510,
                                            direccionVivienda: "calle 15#60-39",   
                                            barrio: "itagui",
                                        },
                                        
                                        especialidad: "Idiomas",
                                        rh: "O-",   
                                        edad: 35
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2023,
                                        hasta: 2023
                                    }
                                }
                            },
                            habilidades: {
                                primerProfesorH :{
                                    datos: {
                                        nombre: "Liliana",
                                        documento: 2161561,
                                        vivienda: {
                                            telefono: 322343423,
                                            direccionVivienda: "calle 1#35-94b",
                                            barrio: "envigado",
                                        },
                                        especialidad: "Salud Ocupacional",
                                        rh: "A+",   
                                        edad: 30
                                    },
                                    horasLaborDiaria: 10,
                                    tiempoVinvulacon:{
                                        desde: 2020,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorH:{
                                    datos: {
                                        nombre: "La de las gafas",
                                        documento: 71652665,
                                        vivienda: {
                                            telefono: 32239989523,
                                            direccionVivienda: "calle 89#65-1",
                                            barrio: "parqueBerrio",
                                        }, 
                                        especialidad: "No sabe nada",
                                        rh: "AB+",   
                                        edad: 31
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2023,
                                        hasta: 2023
                                    }
                                }
                            }
                        },
                        serviciosGenerales :{
                            aseo:{
                                nombre: "Señora",
                                edad: 42,
                                vivienda: {
                                    telefono: 3223159,
                                    direccionVivienda: "calle 332# 1",
                                    barrio: "bello",
                                }, 
                            },
                            oficinosgenerales: {
                                nombre: "Calvito",
                                edad: 48,
                                vivienda: {
                                    telefono: 3223159,
                                    direccionVivienda: "calle 38# 19",
                                    barrio: "robledo",
                                },
                            }
                        },
                    },
                },
                coders:{
                    informacionGrupal: {
                        cantidadEstudiantes : 300,
                        clanes: {
                            meta: {
                                grupo: "1A",
                                cantidadEstudiantes: 15,
                                puntajeCodigoR : 30
                            },
                            vanRossum:{
                                grupo: "1B",
                                cantidadEstudiantes: 22,
                                puntajeCodigoR : 100
                            },
                            gates:{
                                grupo: "1C",
                                cantidadEstudiantes: 10,
                                puntajeCodigoR : 20
                            },
                            lovelace:{
                                grupo: "2A",
                                cantidadEstudiantes: 30,
                                puntajeCodigoR : 10
                            },
                            gosling:{
                                grupo: "2B",
                                cantidadEstudiantes: 25,
                                puntajeCodigoR : 12
                            },
                            dell:{
                                grupo: "2C",
                                cantidadEstudiantes: 18,
                                puntajeCodigoR : 27
                            },
                            jobs:{
                                grupo: "3A",
                                cantidadEstudiantes: 32,
                                puntajeCodigoR : 12
                            },
                            tesla:{
                                grupo: "3B",
                                cantidadEstudiantes: 25,
                                puntajeCodigoR : 0
                            },
                            ritchie:{
                                grupo: "3C",
                                cantidadEstudiantes: 40,
                                puntajeCodigoR : 70
                            }
                        },
                    },
                    informacionIndividual:{
                        datos:{
                            nombre:"Juan Camilo Chaparro Castellanos",
                            vivienda: {
                                direccion:"Calle 119 #64d-70",
                                barrio: "las brisas",
                            },
                            contacto:{
                                telefono: 3134254361,
                                correo: "jccaste1002@gmail.com",
                            },
                            transporte:{
                                distanciaRecorridoKm: 20,
                                vehiculoPropio: true,
                                transportePublico: false,
                            }
                        },
                        estudio:{
                            horarioEstudio:"mañana",
                            talentoEspecializado:"Back-End",
                            notas:{
                                desarrollo: 80,
                                ingles: 90,
                                habilidades: 65,
                                review: 70
                            },
                            entrevista:{
                                nombreEmpresa: "Globant",
                                cargo :"Junior Developer",
                                departamentoEmpresa: "Usa",
                                nombreEntrevistador: "scarlett johansson"
                            }
                        }
                    }
                },
            },
        },
        cartagena: {
            direccion: "Calle 16 #55-32, frente a la muralla ",
            telefono: 3017325328,
            recursos: {
                espacios: {
                    tercerPiso: {
                        esp1:"Lobby",
                        esp2:"salon Review",
                        esp3:"Coworking",
                        esp4: "gradas N1"
                    },
                    cuartoPiso: {
                        esp1:"salon Desarrollo de software",
                        esp2:"salon Review",
                        esp3:"oficina profesores",
                        esp4: "gradas N2"
                    },
                    quintoPiso:{
                        esp1:"salon Desarrollo de software",
                        esp2:"salon Review",
                        esp3:"salon Habilidades e Ingles",
                        esp4: "Baños",
                        esp5: "Zona de juegos"
                    }
                },
                materias:{
                    desarrolloDeSoftware: {
                        docentes: ["vermen", "el otro" ],
                        temas: ["python", "css", "html", "javascript"],
                        cantidadHoras : 4,
                        proyecto: "Crear tu propia pagina web responsiva y base de datos no relacional",
                        salon: "4 y 5",
                    },
                    ingles : {
                        docentes: ["javier", "el otro2" ],
                        habilidades :{
                            reading: {
                                porcentaje: 20,
                                dificultad: "medio"
                            },
                            speaking :{
                                porcentaje: 30,
                                dificultad: "alto"
                            },
                            writing:{
                                porcentaje: 20,
                                dificultad: "medio"
                            },
                            listening: {
                                porcentaje: 30,
                                dificultad: "alto"
                            },
                        },
                        cantidadHoras:1,
                        proyecto: "ganar una entrevista en ingles",
                        salon: "5",
                    },
                    habilidadesDeLaVida :{
                        docentes: ["liliana", "susana" ],
                        temas: ["manejo de emociones", "que harias si", "adaptacion al cambio", "tipo de mentalidad"],
                        cantidadHoras : 1,
                        proyecto: "poder controlar las emociones en cualquier ambito",
                        salon : "5"
                    },
                    review :{
                        docente: "NN",
                        temas: ["python", "css", "html", "javascript"],
                        cantidadHoras : 2,
                        salon: "3 y 4"
                    }
                },
                paginaWeb: {
                    menus: {
                        nuestroCurso:{
                            datos:["que es un coder", "como funciona", "requisitos", "que incluye", "plan de entrenamiento", "nuestros docentes" , "preguntas Frecuentes" , "soliocitar informacion", "visitanos"]
                        },
                        empleadores:{
                            datos:["bienvenida", "capacitacion y ubicacion", "que nos diferencia", "transformar vidas", "constante de desarrollo", "cumpliendo roles" , "preguntas Frecuentes" , "soliocitar informacion", "visitanos"]
                        },
                        sobreNosotros:{
                            datos:["historia", "vision", "proposito", "creencia", "por que riwi", "trabaja con nosotros"]
                        }
                    },
                    contacto: 3017325327,
                    idiomas : {
                        idioma1:"español",
                        idioma2:"ingles"
                    }
                }
            },
            
            integrantes: {
                empleados:{
                    Administracion: {
                        meroMero:{
                        datos: {
                            nombre: "Alberto Enrique Godoy",
                            documento: 73161304,
                            rh: "A-",
                            edad: 50,
                            estudios: {
                                colegio: {
                                    primaria : "liceo x",
                                    bachillerato: "colegio y",
                                },
                                universidad: {
                                    titulo: "ingeniero",
                                    posgrado: true,
                                    maestria: true,
                                    doctorado: true
                                }
                            },
                            bienes: {
                                casaPropia: true,
                                carroPropio: true,
                                empresaPropia: "riwi",
                                cantidadEmpresas: 3
                            }
                        },
                        funcion: "Representante legal",
                        tiempo: {
                            desde: "primer dia",
                            hasta: "que se termine riwi"
                        }
                        },
                        gerencia: {
                            datos:{
                                nombre: "Ricardo",
                                documento : 12345670,
                                rh: "A+",
                                edad :35,
                                estudios: {
                                    colegio: {
                                        primaria : "liceo x2",
                                        bachillerato: "colegio y2",
                                    },
                                    universidad: {
                                        titulo: "gerencia de proyectos",
                                        posgrado: false,
                                    }
                                },
                                bienes: {
                                    casaPropia: false,
                                    carroPropio: true,
                                }
                            },
                            tiempo: {
                                desde: 2022,
                                hasta: 2023
                            },
                            funcion: "Gerenciar proyectos de proyeccion de riwi",
                        },
                        recursos: {
                            datos:{
                                nombre: "jackeline",
                                documento: 731634,
                                edad: 32,
                                rh: "AB-",
                                estudios: {
                                    colegio: {
                                        primaria : "liceo x3",
                                        bachillerato: "colegio y3",
                                    },
                                    universidad: {
                                        titulo: "salud ocupacional",
                                    }
                                }
                            },
                            tiempo:{
                                desde: 2021,
                                hasta: 2023
                            },
                            funcion: "validad papeleria, salud, pagos",
                        },
                        abogado:{
                            datos: {
                                nombre: "mona",
                                documento: 1234565,
                            },
                            funcion: "validar estado de papeleria y porcesos judiciales"
                        },
                    },
                    Operacion: {
                        coordinador: {
                            nombre: "Mauricio",
                            documento : 1234,
                            edad: 32
                        },
                        trainers: {
                            Software:{
                                primerProfesorS :{
                                    datos: {
                                        nombre: "Vermen Ayala",
                                        documento: 731604,
                                        vivienda: {
                                            telefono: 322343423,
                                            direccionVivienda: "calle 1#3-32",
                                            barrio: "poblado",
                                        },     
                                        especialidad: "Back-End",
                                        rh: "A-",   
                                        edad: 40
                                    },
                                    horasLaborDiaria: 12,
                                    tiempoVinvulacon:{
                                        desde: 2018,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorS:{
                                    datos: {
                                        nombre: "no se",
                                        documento: 7316349,
                                        vivienda: {
                                            telefono: 322343422,
                                            direccionVivienda: "calle 1#35-60",
                                            barrio: "laureles",
                                        },
                                        especialidad: "Front-End",
                                        rh: "O-",   
                                        edad: 38
                                    },
                                    horasLaborDiaria: 10,
                                    tiempoVinvulacon:{
                                        desde: 2020,
                                        hasta: 2025
                                    }
                                }
                            },
                            ingles:{
                                primerProfesorI :{
                                    datos: {
                                        nombre: "Javier",
                                        documento: 5415325,
                                        vivienda: {
                                            telefono: 32616515,
                                            direccionVivienda: "calle 1#3-32",
                                            barrio: "belen",
                                        },
                                        especialidad: "Idiomas",
                                        rh: "B+",   
                                        edad: 30
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2021,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorI:{
                                    datos: {
                                        nombre: "Negrito",
                                        documento: 8418516,
                                        vivienda: {
                                            telefono: 45544510,
                                            direccionVivienda: "calle 15#60-39",   
                                            barrio: "itagui",
                                        },
                                        
                                        especialidad: "Idiomas",
                                        rh: "O-",   
                                        edad: 35
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2023,
                                        hasta: 2023
                                    }
                                }
                            },
                            habilidades: {
                                primerProfesorH :{
                                    datos: {
                                        nombre: "Liliana",
                                        documento: 2161561,
                                        vivienda: {
                                            telefono: 322343423,
                                            direccionVivienda: "calle 1#35-94b",
                                            barrio: "envigado",
                                        },
                                        especialidad: "Salud Ocupacional",
                                        rh: "A+",   
                                        edad: 30
                                    },
                                    horasLaborDiaria: 10,
                                    tiempoVinvulacon:{
                                        desde: 2020,
                                        hasta: 2023
                                    }
                                }, 
                                segundoProfesorH:{
                                    datos: {
                                        nombre: "La de las gafas",
                                        documento: 71652665,
                                        vivienda: {
                                            telefono: 32239989523,
                                            direccionVivienda: "calle 89#65-1",
                                            barrio: "parqueBerrio",
                                        }, 
                                        especialidad: "No sabe nada",
                                        rh: "AB+",   
                                        edad: 31
                                    },
                                    horasLaborDiaria: 8,
                                    tiempoVinvulacon:{
                                        desde: 2023,
                                        hasta: 2023
                                    }
                                }
                            }
                        },
                        serviciosGenerales :{
                            aseo:{
                                nombre: "Señora",
                                edad: 42,
                                vivienda: {
                                    telefono: 3223159,
                                    direccionVivienda: "calle 332# 1",
                                    barrio: "bello",
                                }, 
                            },
                            oficinosgenerales: {
                                nombre: "Calvito",
                                edad: 48,
                                vivienda: {
                                    telefono: 3223159,
                                    direccionVivienda: "calle 38# 19",
                                    barrio: "robledo",
                                },
                            }
                        },
                    },
                },
                coders:{
                    informacionGrupal: {
                        cantidadEstudiantes : 300,
                        clanes: {
                            meta: {
                                grupo: "1A",
                                cantidadEstudiantes: 15,
                                puntajeCodigoR : 30
                            },
                            vanRossum:{
                                grupo: "1B",
                                cantidadEstudiantes: 22,
                                puntajeCodigoR : 100
                            },
                            gates:{
                                grupo: "1C",
                                cantidadEstudiantes: 10,
                                puntajeCodigoR : 20
                            },
                            lovelace:{
                                grupo: "2A",
                                cantidadEstudiantes: 30,
                                puntajeCodigoR : 10
                            },
                            gosling:{
                                grupo: "2B",
                                cantidadEstudiantes: 25,
                                puntajeCodigoR : 12
                            },
                            dell:{
                                grupo: "2C",
                                cantidadEstudiantes: 18,
                                puntajeCodigoR : 27
                            },
                            jobs:{
                                grupo: "3A",
                                cantidadEstudiantes: 32,
                                puntajeCodigoR : 12
                            },
                            tesla:{
                                grupo: "3B",
                                cantidadEstudiantes: 25,
                                puntajeCodigoR : 0
                            },
                            ritchie:{
                                grupo: "3C",
                                cantidadEstudiantes: 40,
                                puntajeCodigoR : 70
                            }
                        },
                    },
                    informacionIndividual:{
                        datos:{
                            nombre:"Juan Camilo Chaparro Castellanos",
                            vivienda: {
                                direccion:"Calle 119 #64d-70",
                                barrio: "las brisas",
                            },
                            contacto:{
                                telefono: 3134254361,
                                correo: "jccaste1002@gmail.com",
                            },
                            transporte:{
                                distanciaRecorridoKm: 20,
                                vehiculoPropio: true,
                                transportePublico: false,
                            }
                        },
                        estudio:{
                            horarioEstudio:"mañana",
                            talentoEspecializado:"Back-End",
                            notas:{
                                desarrollo: 80,
                                ingles: 90,
                                habilidades: 65,
                                review: 70
                            },
                            entrevista:{
                                nombreEmpresa: "Globant",
                                cargo :"Junior Developer",
                                departamentoEmpresa: "Usa",
                                nombreEntrevistador: "scarlett johansson"
                            }
                        }
                    }
                },
            },
        }
    }
}
/* ----------------4----------------------------- */
const centroComercialDeModaOulet={
    s1:{
        parqueadero: true,
        ascensor: false,
        baños: true,
    },
    p1:{
        parqueadero: false,
        ascensor: true,
        baños: true,
        tipoNegocios: {
            banco: {
                banco1: "bancolombia",
            },
            ropa:{
                negocioRopa1:"branchos",
                negocioRopa2:"koaj",
                negocioRopa3:"diesel",
                negocioRopa4:"superdry"
            },
            deporte:{
                neogcioDeporte1: "smartfit",
                negocioDeporte2:"proteina y batidos"
            },
            comida:{
                negocioComida1: "cafe",
                negocioComida2: "tostao",
                negocioComida1: "almuerzos",
            },
            comercio: {
                negocioComercio1: "tigo",
                negocioComercio2: "claro",
            }
        }
    },
    p2:{
        parqueadero: false,
        ascensor: true,
        baños: true,
        tipoNegocios: {
            banco: {
                banco1: "banco de bogota",
            },
            salud:{
                negocioSalud: "EPS",
            },
            comunicacion:{
                negocioComunicacion1:"celulares",
                negocioComunicacion1:"pc's",
                negocioComunicacion1:"computrabajo",
            }
        }
    },
    p3:{
        parqueadero: false,
        ascensor: true,
        baños: true,
        tipoNegocios: {
            comida:{
                negocioComida1: "almuerzos",
            },
            comercio: {
                negocioComercio1: "dolarcity",
            },
            estudio: {
                negocioComercio1: "OpenEnglish",
            }
        }
    },
    p4:{
        parqueadero: true,
        ascensor: true,
        baños: true,
        tipoNegocios: {
            // estudio: {
            //     negocioComercio1: "Riwi",
            // }
        }
    },
    p5:{
        parqueadero: true,
        ascensor: true,
        baños: true,
        tipoNegocios: {
            // estudio: {
            //     negocioComercio1: "Riwi",
            // }
        }
    },
    p6:{
        parqueadero: false,
        ascensor: true,
        baños: false,
        tipoNegocios: {
            comida:{
                negocioComida1: "parche de pola",
            },
            deporte: {
                negocioComercio1: "canchas sinteticas",
            },
        }
    }

}



/* ----------------2----------------------------- */
const {sedesEmpresa:{medellin:{integrantes:{coders:{informacionIndividual:{datos: {vivienda:{direccion}}}}}}}}=Riwi;
console.log(direccion);

const {sedesEmpresa:{medellin:{integrantes:{coders:{informacionIndividual:{estudio:{talentoEspecializado}}}}}}}=Riwi
console.log(talentoEspecializado);

const {sedesEmpresa:{medellin:{integrantes:{coders:{informacionIndividual:{estudio:{entrevista:{cargo}}}}}}}}=Riwi
console.log(cargo);

const {sedesEmpresa:{medellin:{integrantes:{coders:{informacionIndividual:{estudio:{entrevista:{nombreEmpresa}}}}}}}}=Riwi
console.log(nombreEmpresa);
/* ----------------2.2----------------------------- */

const {sedesEmpresa:{medellin:{telefono}}}=Riwi
console.log(telefono)

const {sedesEmpresa:{houston:{direcciontexas}}}=Riwi
console.log(direcciontexas)
/* ----------------3----------------------------- */

console.log(Riwi.sedesEmpresa.medellin.telefono);
console.log(Riwi.sedesEmpresa.houston.direcciontexas);
/* ----------------3.1----------------------------- */
console.log(Riwi.sedesEmpresa.medellin.integrantes.coders.informacionIndividual.estudio.entrevista);

/* ----------------4 resultado ----------------------------- */
const copia ={...centroComercialDeModaOulet.p3.estudio, ...Riwi};
console.log(copia);