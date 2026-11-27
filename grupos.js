const GRUPOS = [
  {
    "id": "1",
    "proyecto": "Huella Natural",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Yamila Castro",
        "doc": "601507",
        "estado": "Puede defender"
      },
      {
        "nombre": "Rodrigo Franco",
        "doc": "585228",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1O1E6_Y81yA-Nyo88zByOdRq4nzF9ziMt/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo presenta coherencia interna entre análisis estratégico, diseño UX y decisiones comerciales, respaldadas con cifras concretas y sitio funcional entregado.",
      "queEs": "E-commerce de snacks naturales para mascotas, diferenciado por transparencia de ingredientes, contenido educativo y experiencia mobile-first sin competir por precio.",
      "fortalezas": [
        "Cifras de mercado articuladas coherentemente: TAM $2.252B, SAM $337B, SOM $27M con justificación por segmento.",
        "Sitio funcional real entregado en Pantheon con catálogo, carrito, checkout y blog evidenciados en capturas.",
        "Gestión de crisis documentada (sobreventa y fraude ERR-508) con aprendizajes estratégicos explícitos."
      ],
      "interrogar": [
        "El ROI proyectado del 98% se afirma sin mostrar el cálculo detallado: inversión total $2.900.000 vs. ingresos $27.000.000 con margen 50% no cuadra directamente.",
        "Se declara pasarela de pago fuera del alcance, pero el checkout implementado muestra 'pago online seguro': ¿cómo procesa realmente el pago hoy?",
        "Las estrategias de mitigación de riesgos se mencionan en el cuerpo pero el cuadro del documento aparece vacío de acciones concretas."
      ],
      "dondeApretar": "Presionar sobre la consistencia financiera (cálculo real del ROI) y la operatividad real del checkout dado que la pasarela de pagos se declaró fuera de alcance."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Decidieron no competir por precio y diferenciarse por transparencia de ingredientes y contenido educativo. ¿Por qué eligieron ese camino frente a competidores ya establecidos?",
            "buscamos": "Que vinculen la decisión con un problema real del dueño de mascota (no saber qué come su animal) y con su capacidad de sostenerla.",
            "evasiva": "Describir el diferencial sin explicar por qué lo eligieron sobre otras opciones."
          },
          {
            "pregunta": "¿Por qué recortaron el SAM al 15% del mercado total y no a otro porcentaje?",
            "buscamos": "El criterio de segmentación (canal online, zona, perfil) y por qué tiene sentido para este negocio.",
            "evasiva": "Repetir las cifras sin justificar el recorte."
          },
          {
            "pregunta": "¿Por qué fijaron 150 ventas mensuales como escenario base, casi el doble del equilibrio de 80?",
            "buscamos": "Los supuestos que los llevaron a ese número y por qué los consideraron razonables.",
            "evasiva": "Decir que es alcanzable sin explicar el razonamiento."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron un enfoque mobile-first para este negocio en particular?",
            "buscamos": "Que lo conecten con cómo compra su buyer persona.",
            "evasiva": "Responder que hoy todo es mobile, sin vincularlo a su público."
          },
          {
            "pregunta": "¿Por qué decidieron dejar el mensaje 'pago online seguro' en el checkout si la pasarela quedó fuera de alcance?",
            "buscamos": "Que expliquen la decisión y reconozcan la tensión con el alcance declarado.",
            "evasiva": "Hablar de la pasarela a futuro sin explicar la decisión."
          },
          {
            "pregunta": "¿Por qué apostaron al blog y al contenido educativo como parte de la experiencia y no solo al catálogo?",
            "buscamos": "El rol que le asignan al contenido en la decisión de compra.",
            "evasiva": "Enumerar artículos sin explicar el por qué."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WordPress con WooCommerce sobre Pantheon y no otra plataforma?",
            "buscamos": "Criterios concretos (costo, control, requisitos de la cátedra, escalabilidad).",
            "evasiva": "'Porque lo pedía la consigna' sin más."
          },
          {
            "pregunta": "¿Por qué dejaron el cupón de bienvenida, el email automatizado y la recuperación de carrito como acciones futuras?",
            "buscamos": "La priorización que hicieron y qué riesgo aceptaron al lanzar sin ellas.",
            "evasiva": "Decir que no llegaron con el tiempo."
          },
          {
            "pregunta": "¿Por qué decidieron declarar la pasarela de pago fuera del alcance inicial?",
            "buscamos": "El criterio de alcance del MVP.",
            "evasiva": "Describir el checkout sin explicar la decisión."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué destinaron el 60% del presupuesto de marketing a Google y Meta?",
            "buscamos": "Razones ligadas al comportamiento de su público y al objetivo de adquisición.",
            "evasiva": "Decir que son los canales más usados."
          },
          {
            "pregunta": "¿Por qué confían en el ROI del 98% que proyectan?",
            "buscamos": "Los supuestos que lo sostienen y si los revisarían.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Por qué eligieron esos KPIs y no otros para seguir el negocio?",
            "buscamos": "La relación entre cada KPI y una decisión que tomarían.",
            "evasiva": "Listar indicadores."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis de sobreventa, ¿por qué eligieron esa forma de responder a los clientes afectados?",
            "buscamos": "El criterio detrás de la respuesta (reputación, costo, confianza).",
            "evasiva": "Narrar lo que pasó sin la razón."
          },
          {
            "pregunta": "Ante el fraude ERR-508, ¿por qué priorizaron esas medidas y no otras?",
            "buscamos": "La lógica de la priorización.",
            "evasiva": "Enumerar medidas."
          },
          {
            "pregunta": "¿Por qué se organizaron como equipo de esa manera para resolver las crisis?",
            "buscamos": "Que justifiquen la distribución de roles.",
            "evasiva": "'Lo hicimos entre todos'."
          }
        ]
      }
    ],
    "nota": 8,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "4",
    "proyecto": "NUNA",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Mariana Di Pilla",
        "doc": "611033",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1Co72d9BYjaOcK5Aou9XKS0IvTmysYpkH/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra consistencia interna entre análisis, diseño e implementación, con métricas definidas y gestión de crisis documentada, aunque algunos supuestos financieros carecen de validación empírica externa.",
      "queEs": "Ecommerce B2C de bienestar integral (yoga, pilates, meditación) que combina kits físicos con contenido digital y acompañamiento postventa.",
      "fortalezas": [
        "KPIs definidos con umbrales concretos: CR 1,2-1,5%, CAC $7.305, abandono checkout ≤60%.",
        "Gestión de dos crisis documentadas con causa raíz, plan de acción y criterios de cierre explícitos.",
        "Customer Journey mapea emociones y puntos de dolor en 7 etapas, derivando decisiones UX concretas."
      ],
      "interrogar": [
        "SOM proyectado 28.000-56.000 clientes pero meta operativa real es solo 300 ventas anuales (0,7%): brecha de tres órdenes de magnitud sin explicación metodológica.",
        "Se afirma ROI 8,7% año 1 pero no se presenta el estado de resultados ni los costos fijos totales que sustentan ese cálculo.",
        "El sitio funcional declarado es un entorno de desarrollo en Pantheon, no el dominio productivo nuna.shop."
      ],
      "dondeApretar": "Presionar la coherencia entre las proyecciones financieras (SOM, punto de equilibrio, ROI) y los supuestos que las sostienen, exigiendo el modelo de costos subyacente."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué fijaron una meta operativa de 300 ventas anuales cuando el SOM habla de decenas de miles de clientes?",
            "buscamos": "El razonamiento que conecta ambos números, o que reconozcan la brecha.",
            "evasiva": "Repetir las cifras."
          },
          {
            "pregunta": "¿Por qué descartaron Shopify y Tienda Nube si Mercado Pago también cobra comisión?",
            "buscamos": "Que el argumento sea consistente (control, costos totales, personalización).",
            "evasiva": "Decir solo que las otras cobran comisión."
          },
          {
            "pregunta": "¿Por qué combinar kits físicos con contenido digital en lugar de vender solo uno de los dos?",
            "buscamos": "La lógica de valor para el cliente y para el negocio.",
            "evasiva": "Describir los kits."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué embebieron las clases desde YouTube si plantean que la plataforma propia da control de los datos?",
            "buscamos": "Que resuelvan la tensión con criterio (costo, practicidad, alcance).",
            "evasiva": "Describir la integración."
          },
          {
            "pregunta": "¿Por qué el Customer Journey los llevó a esas decisiones de UX y no a otras?",
            "buscamos": "Vínculo entre puntos de dolor y decisiones.",
            "evasiva": "Releer el mapa."
          },
          {
            "pregunta": "¿Por qué fijaron un abandono de checkout ≤60% como meta?",
            "buscamos": "El criterio o referencia usada.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué presentaron el sitio en Pantheon y no en el dominio nuna.shop?",
            "buscamos": "La decisión de alcance y sus implicancias.",
            "evasiva": "Decir que no llegaron."
          },
          {
            "pregunta": "¿Por qué el WAF se planificó para la fase Beta y no desde el inicio?",
            "buscamos": "El criterio de secuencia y qué riesgo aceptaron.",
            "evasiva": "Explicar qué es un WAF."
          },
          {
            "pregunta": "¿Por qué eligieron Mercado Pago como medio de pago principal?",
            "buscamos": "Razones ligadas al cliente argentino y al negocio.",
            "evasiva": "Decir que es el más usado."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué consideran que el CAC de $7.305 es realista?",
            "buscamos": "Supuestos y fuentes.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué proyectan un ROI positivo ya en el año 1 y creciendo fuerte al año 3?",
            "buscamos": "Qué cambia entre años según su modelo.",
            "evasiva": "Repetir porcentajes."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de pauta para llegar a 25 ventas por mes?",
            "buscamos": "Razones ligadas a su público.",
            "evasiva": "Enumerar canales."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 1, ¿por qué dieron por cerrado el problema con conversión arriba del 1% durante dos semanas?",
            "buscamos": "La lógica del criterio de cierre.",
            "evasiva": "Contar lo que hicieron."
          },
          {
            "pregunta": "¿Por qué creen que la crisis de seguridad ocurrió igual, si estaba prevista una Fase Beta?",
            "buscamos": "Que identifiquen la decisión que falló y por qué la tomaron.",
            "evasiva": "Culpar a factores externos."
          },
          {
            "pregunta": "¿Por qué repartieron las responsabilidades de crisis de esa forma?",
            "buscamos": "Justificación de roles.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 8.5,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "6",
    "proyecto": "FitnessGO",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Ian Marco Manfredi",
        "doc": "637985",
        "estado": "Puede defender"
      },
      {
        "nombre": "Florencia Mansilla",
        "doc": "601014",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1Zdzav7wPsQpwUcbYo7auBK5q2TVO1TxC/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra coherencia discursiva y proceso estructurado, pero carece de datos financieros concretos, métricas reales de implementación y evidencia verificable de decisiones de diseño.",
      "queEs": "E-commerce de viandas saludables para el nicho fitness en AMBA, con suscripciones y compras puntuales, diferenciado por personalización, practicidad y acompañamiento.",
      "fortalezas": [
        "Proceso metodológico completo: FODA, PESTEL, TAM-SAM-SOM, Buyer Persona, Customer Journey, wireframes y sitio publicado.",
        "Sitio funcional efectivamente publicado en Pantheon con WordPress/WooCommerce, URL verificable incluida.",
        "TAM-SAM-SOM con cifras explícitas (520.000 / 156.000 / 1.560) y criterios de segmentación declarados."
      ],
      "interrogar": [
        "SOM de 1.560 clientes equivale al 1% del SAM pero no hay proyección de ingresos, ticket promedio ni plazo para alcanzarlo.",
        "Se afirma viabilidad económica y punto de equilibrio 'estimado', pero no aparecen cifras de costos, precios ni proyección financiera.",
        "La Crisis 2 describe una falla del Pixel de TikTok Ads durante el lanzamiento, pero no hay evidencia de que el sitio haya sido lanzado; la URL es un entorno de desarrollo ('dev-')."
      ],
      "dondeApretar": "Presionar sobre la brecha entre viabilidad económica declarada y ausencia total de datos financieros, y sobre el estado real del proyecto (entorno dev vs. lanzamiento efectivo)."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron apuntar primero a solo el 1% del mercado accesible?",
            "buscamos": "El criterio de prudencia o capacidad que lo justifica.",
            "evasiva": "Decir que es conservador sin explicar por qué."
          },
          {
            "pregunta": "¿Por qué eligieron un buyer persona tan amplio (20 a 45 años que hacen actividad física) si prometen personalización?",
            "buscamos": "Que reconcilien amplitud y personalización.",
            "evasiva": "Describir el perfil."
          },
          {
            "pregunta": "¿Por qué combinar suscripciones con compras puntuales?",
            "buscamos": "Lógica de negocio (recurrencia, entrada de clientes nuevos).",
            "evasiva": "Describir la oferta."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron Montserrat SemiBold para los títulos?",
            "buscamos": "Relación con el rubro y el público.",
            "evasiva": "'Porque se ve bien'."
          },
          {
            "pregunta": "¿Por qué el verde como color principal?",
            "buscamos": "Qué quieren comunicar a quien evalúa suscribirse.",
            "evasiva": "Teoría general del color."
          },
          {
            "pregunta": "¿Por qué consideran que su recorrido de compra reduce el abandono de carrito?",
            "buscamos": "Las decisiones de diseño y su fundamento.",
            "evasiva": "Repetir el KPI."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce sobre Pantheon para un negocio de suscripciones?",
            "buscamos": "Criterios técnicos y de costo.",
            "evasiva": "'Lo pedía la cátedra'."
          },
          {
            "pregunta": "¿Por qué TikTok Ads estaba en su estrategia de medición y pauta?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Describir la falla."
          },
          {
            "pregunta": "¿Por qué eligieron esos KPIs (abandono, retención) como claves?",
            "buscamos": "Qué decisión dispararía cada uno.",
            "evasiva": "Listarlos."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué afirman viabilidad económica sin precios ni costos explícitos en el documento?",
            "buscamos": "Que expliquen en qué se apoyaron o reconozcan el faltante.",
            "evasiva": "Repetir que es viable."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing para un e-commerce de viandas en AMBA?",
            "buscamos": "Relación con el comportamiento del público.",
            "evasiva": "Enumerar canales."
          },
          {
            "pregunta": "¿Por qué el SOM de 1.560 clientes les alcanza para que el negocio funcione?",
            "buscamos": "Lógica de ingresos y plazos.",
            "evasiva": "Repetir el número."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Ante la suba de costos de última milla, ¿por qué eligieron esa respuesta y no trasladar todo al precio?",
            "buscamos": "El criterio detrás (margen, retención, posicionamiento).",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "En la crisis del Pixel de TikTok, ¿por qué priorizaron esos pasos?",
            "buscamos": "Lógica de la priorización.",
            "evasiva": "Explicar qué es un pixel."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo frente a dos crisis tan distintas?",
            "buscamos": "Justificación de la organización.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 7,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "7",
    "proyecto": "NooMind — Agencia Alto Impacto",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Eugenia Prado",
        "doc": "616011",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1-z463DPsvaapZ5ojUcluoAMqSbDZLpyL/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Consistencia interna sólida entre diagnóstico, diseño e implementación, con fundamentación financiera bottom-up y gestión de crisis documentada con causa raíz y KPIs cuantificados.",
      "queEs": "E-commerce B2C de nootrópicos para Argentina, diferenciado por compliance ANMAT visible y autoridad científica en un mercado sin ese posicionamiento.",
      "fortalezas": [
        "Modelo financiero construido desde CAC benchmarkeado ($33.000 ARS) hacia arriba, con LTV:CAC 8,2:1 año 1.",
        "Crisis gestionadas con 5 Porqués, impacto cuantificado y umbrales de validación medibles para reapertura.",
        "Decisión estratégica coherente: riesgo ANMAT convertido en trust badge diferenciador, trasladado a UX y contenidos."
      ],
      "interrogar": [
        "El SOM declara ~2.300 clientes en Año 3, pero el objetivo del proyecto fija 1.820: cifras contradictorias sin explicación.",
        "Se afirma sitio funcional en Pantheon (URL incluida), pero no hay evidencia de datos reales de performance ni métricas post-lanzamiento.",
        "El margen bruto usado en el LTV se define como 50%, pero el margen neto declarado en Año 1 es 25%: no se explica la brecha."
      ],
      "dondeApretar": "Presionar sobre la validación empírica: qué datos reales existen del sitio live y cómo se sostienen los supuestos financieros ante ese vacío."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron convertir el requisito ANMAT en su ventaja competitiva central?",
            "buscamos": "El razonamiento estratégico (confianza en un mercado sin regulación visible).",
            "evasiva": "Describir el sello."
          },
          {
            "pregunta": "Si el compliance era la ventaja central, ¿por qué en la Crisis 1 reconocen que lo trataron como riesgo futuro?",
            "buscamos": "Que expliquen la decisión de secuencia y qué aprendieron.",
            "evasiva": "Minimizar la contradicción."
          },
          {
            "pregunta": "¿Por qué fijaron un ticket de $90.000, 23% por encima del benchmark?",
            "buscamos": "Qué supuesto de valor percibido lo sostiene.",
            "evasiva": "Hablar de premium en abstracto."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué el requisito LCP < 2,5 s, que estaba escrito desde el inicio, no se convirtió en condición de aceptación?",
            "buscamos": "Que identifiquen la decisión de proceso y su razón.",
            "evasiva": "Explicar qué es el LCP."
          },
          {
            "pregunta": "¿Por qué apoyaron la viabilidad en una recompra del 40% a 60 días?",
            "buscamos": "En qué basaron ese supuesto.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué eligieron un posicionamiento de autoridad científica en el diseño?",
            "buscamos": "Relación con el público y el producto.",
            "evasiva": "Describir el diseño."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué dejaron el sitio en el entorno dev de Pantheon?",
            "buscamos": "Decisión de alcance y consecuencias.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué eligieron esa plataforma para un producto con restricciones regulatorias?",
            "buscamos": "Criterios técnicos y de control de contenido.",
            "evasiva": "Listar herramientas."
          },
          {
            "pregunta": "¿Por qué priorizaron performance recién después del go-live?",
            "buscamos": "Que reconozcan la priorización y su lógica.",
            "evasiva": "Culpar al hosting."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué calcularon el LTV:CAC con margen del 50% si el margen neto del año 1 es 25%?",
            "buscamos": "Que justifiquen la elección o reconozcan el error.",
            "evasiva": "Repetir el 8,2:1."
          },
          {
            "pregunta": "¿Por qué construyeron el modelo financiero bottom-up desde el CAC?",
            "buscamos": "Ventaja metodológica que buscaron.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Por qué quedaron dos cifras distintas de clientes al año 3 (2.300 y 1.820)?",
            "buscamos": "Origen de la inconsistencia.",
            "evasiva": "Elegir una sin explicar."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando el CAC se disparó a $165.000, ¿por qué tomaron esa decisión y no otra?",
            "buscamos": "Criterio de la respuesta (proteger caja, aprender, pausar).",
            "evasiva": "Narrar el impacto."
          },
          {
            "pregunta": "¿Por qué eligieron los 5 Porqués como herramienta de análisis de las crisis?",
            "buscamos": "Para qué les sirvió frente a otras opciones.",
            "evasiva": "Explicar la técnica."
          },
          {
            "pregunta": "¿Por qué no definieron un plan de contingencia si la recompra no llegaba al 40%?",
            "buscamos": "Que reconozcan la decisión y qué harían.",
            "evasiva": "Repetir el supuesto."
          }
        ]
      }
    ],
    "nota": 6,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "10",
    "proyecto": "Mimo Animal",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Camila Del Federico",
        "doc": "607424",
        "estado": "Puede defender"
      },
      {
        "nombre": "Narella Sosa",
        "doc": "618927",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1HSzq9zQlnBbGj6-hs7JoLA9qPDHsdPZs/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra consistencia interna, autocrítica explícita sobre proyecciones y aprendizaje real documentado en crisis concretas.",
      "queEs": "E-commerce B2C/D2C de snacks naturales deshidratados para mascotas bajo modelo marca blanca, posicionado como boutique de nutrición animal.",
      "fortalezas": [
        "SOM construido bottom-up desde embudo real (5.000 sesiones, 1% conversión, $22.500 ticket), no desde market share deseado.",
        "Dos crisis reales documentadas (quiebre de stock 95 pedidos; error 504 Google Merchant) con resolución concreta y aprendizaje explícito.",
        "Decisiones UX justificadas en pain points del buyer persona: checkout 3 pasos, costos de envío visibles desde paso 1."
      ],
      "interrogar": [
        "Presenta dos valores SOM distintos sin reconciliar: $13.500.000 (bottom-up) y $81.120.000 (valor final destacado). ¿Cuál es el correcto?",
        "Se declara un 'Club Mimo' con 10% OFF y suscripción mensual como KPI de recompra, pero no hay descripción técnica de cómo está implementado en WooCommerce.",
        "La Crisis 1 menciona 95 pedidos por quiebre de stock, pero el SOM proyecta 50 pedidos/mes; tener 95 activos implicaría superar la proyección, sin explicación."
      ],
      "dondeApretar": "Centrar la defensa en la inconsistencia numérica del SOM y en demostrar con evidencia qué funciona realmente en el sitio live versus lo declarado."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué construyeron el SOM bottom-up desde el embudo y no desde un porcentaje de mercado?",
            "buscamos": "La ventaja que vieron en ese método.",
            "evasiva": "Describir las cifras."
          },
          {
            "pregunta": "¿Por qué calcularon el TAM solo con perros si venden también para gatos?",
            "buscamos": "Criterio de la decisión y su impacto.",
            "evasiva": "Decir que los perros son mayoría."
          },
          {
            "pregunta": "¿Por qué eligieron un modelo de marca blanca?",
            "buscamos": "Razones de costo, riesgo o velocidad.",
            "evasiva": "Describir el modelo."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron un checkout de tres pasos con el costo de envío en el primero?",
            "buscamos": "El problema de abandono que buscaban evitar.",
            "evasiva": "Describir el checkout."
          },
          {
            "pregunta": "¿Por qué crearon el Club Mimo como mecanismo de recompra?",
            "buscamos": "Lógica de fidelización elegida.",
            "evasiva": "Describir el beneficio."
          },
          {
            "pregunta": "¿Por qué el posicionamiento de 'boutique de nutrición animal'?",
            "buscamos": "Relación con el público y el precio.",
            "evasiva": "Describir la estética."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué presentaron el sitio en una URL de desarrollo y no en dominio propio?",
            "buscamos": "Decisión de alcance e implicancias para el posicionamiento.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué incluyeron Google Shopping en la estrategia?",
            "buscamos": "Relación con el comportamiento de compra.",
            "evasiva": "Describir el feed."
          },
          {
            "pregunta": "¿Por qué eligieron WooCommerce para este modelo?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué quedaron dos SOM distintos ($13,5M y $81,1M)?",
            "buscamos": "Origen de cada uno y cuál defienden.",
            "evasiva": "Elegir uno sin explicar."
          },
          {
            "pregunta": "¿Por qué fijaron $22.500 de ticket asociado al combo?",
            "buscamos": "Supuesto de comportamiento de compra.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué eligieron Meta y Google como canales principales?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Enumerar canales."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Durante el quiebre de stock, ¿por qué no pausaron las campañas de Meta?",
            "buscamos": "Que expliquen la decisión o reconozcan el error de criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué eligieron esa forma de compensar a los clientes afectados?",
            "buscamos": "Criterio de reputación y costo.",
            "evasiva": "Describir la compensación."
          },
          {
            "pregunta": "¿Por qué creen que el rechazo de Google Merchant no se detectó antes de activar tráfico?",
            "buscamos": "La decisión de proceso que faltó.",
            "evasiva": "Explicar el error 504."
          }
        ]
      }
    ],
    "nota": 7.5,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "13bis",
    "proyecto": "MOTRIA",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Claudio Daniel Pascua",
        "doc": "645741",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1jSsxxtoiYsLzvPv7NOVukzNCK7hvkUT5/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo articula consistentemente análisis estratégico, diseño UX y modelo financiero, con MVP desplegado y URLs funcionales comprobables.",
      "queEs": "Plataforma SaaS para talleres mecánicos independientes que centraliza turnos, clientes, presupuestos y órdenes de trabajo, diferenciada por especialización vertical y UX simplificada.",
      "fortalezas": [
        "Modelo financiero detallado: punto de equilibrio (267 clientes), tres escenarios, ROI y márgenes SaaS (82–87%) explicitados.",
        "MVP funcional desplegado: sitio en Pantheon/WordPress con checkout WooCommerce y demo navegable en Vercel enlazados.",
        "Customer journey de cinco etapas con fricción, oportunidad y solución concreta mapeadas para cada paso."
      ],
      "interrogar": [
        "La pasarela de pago es offline (transferencia); el checkout declarado como 'operativo' no procesa pagos reales, contradiciendo la validación comercial del MVP.",
        "Los KPIs financieros (MRR, churn, CAC) se describen como medibles pero se activarán 'con la base de clientes en producción', es decir, aún no hay datos reales.",
        "El TAM/SAM cita entre 12.000 y 20.200 talleres sin fuente primaria propia; la referencia AFAC (2023) aparece solo al pie de un párrafo de ROI, no del dimensionamiento de mercado."
      ],
      "dondeApretar": "Presionar sobre la brecha entre lo declarado (MVP validable, checkout operativo, KPIs medibles) y lo implementado (pago offline, cero clientes reales, métricas inactivas)."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron especializarse en talleres mecánicos independientes y no en un software de gestión general?",
            "buscamos": "El razonamiento de especialización vertical.",
            "evasiva": "Describir el producto."
          },
          {
            "pregunta": "¿Por qué fijaron un objetivo de 350 a 700 clientes sobre más de 12.000 talleres?",
            "buscamos": "Supuestos del rango.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué eligieron un modelo SaaS de suscripción?",
            "buscamos": "Lógica de ingresos recurrentes y del cliente.",
            "evasiva": "Describir planes."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué aplicaron la Ley de Fitts y la regla de menos de tres clics?",
            "buscamos": "Relación con el contexto de un mecánico (manos ocupadas, poco tiempo).",
            "evasiva": "Definir la ley."
          },
          {
            "pregunta": "¿Por qué eligieron Chivo Mono para datos operativos y validar contraste WCAG AA?",
            "buscamos": "Problema del contexto del taller que resolvían.",
            "evasiva": "Hablar de accesibilidad en general."
          },
          {
            "pregunta": "¿Por qué priorizaron una UX simplificada como diferencial?",
            "buscamos": "Vínculo con el perfil del usuario.",
            "evasiva": "Describir pantallas."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué separaron el sitio (WordPress en Pantheon) de la app (Vercel)?",
            "buscamos": "Criterios técnicos de la separación.",
            "evasiva": "Describir las dos partes."
          },
          {
            "pregunta": "¿Por qué decidieron un checkout con transferencia y diferir Mercado Pago?",
            "buscamos": "Priorización del MVP y riesgo aceptado.",
            "evasiva": "Hablar de MP a futuro."
          },
          {
            "pregunta": "¿Por qué consideran que la demo en Vercel valida el producto?",
            "buscamos": "Qué querían validar con ella.",
            "evasiva": "Describir la demo."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué armaron tres escenarios financieros?",
            "buscamos": "Para qué les sirvió cada escenario.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué eligieron MRR, churn y CAC como KPIs si todavía no hay clientes?",
            "buscamos": "Lógica de la elección.",
            "evasiva": "Listar KPIs."
          },
          {
            "pregunta": "¿Por qué confían en recuperar la inversión en 6 a 12 meses?",
            "buscamos": "Supuestos principales.",
            "evasiva": "Repetir plazos."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron qué entraba en el MVP y qué quedaba afuera de esa manera?",
            "buscamos": "Criterio de priorización.",
            "evasiva": "Listar funcionalidades."
          },
          {
            "pregunta": "¿Por qué organizaron así el trabajo cuando la dinámica del equipo no funcionaba bien?",
            "buscamos": "Razón de los cambios de organización.",
            "evasiva": "Hablar del equipo en general."
          },
          {
            "pregunta": "¿Por qué creen que esa forma de trabajar les permitió terminar el proyecto?",
            "buscamos": "Reflexión sobre sus decisiones de equipo.",
            "evasiva": "Generalidades."
          }
        ]
      }
    ],
    "nota": 8,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "15",
    "proyecto": "Bridge: Academia de Inglés",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Moira Lopez Mesoraca",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/13uskJK6Z3itNwAiB_zvnlrD9uCLBU1Hp/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra estructura coherente y buen diseño conceptual, pero presenta brechas significativas entre lo declarado y lo implementado: KPIs sin datos reales, análisis financiero casi ausente y TAM/SAM/SOM sin fuentes.",
      "queEs": "Academia digital de inglés para argentinos 18-50 años, diferencial en autoaprendizaje acompañado con recursos asincrónicos accesibles y comunidad.",
      "fortalezas": [
        "Buyer personas bien definidos con motivaciones, barreras y fit con la propuesta claramente articulados.",
        "Customer Journey desarrollado en 4 etapas con acciones concretas por fase y oportunidades de mejora identificadas.",
        "Stack técnico funcional documentado: WordPress + WooCommerce + Pantheon, con URL de sitio real adjunta."
      ],
      "interrogar": [
        "TAM 8M / SAM 2M / SOM 2.000 alumnos declarados sin ninguna fuente ni metodología de cálculo citada.",
        "Punto de equilibrio fijado en 67 alumnos activos pero no se detalla precio, mix de productos ni estructura de costos que lo sustenten.",
        "Paleta de colores propuesta es azul/celeste en identidad visual, pero el sitio funcional implementado usa verde oscuro/oliva como color principal."
      ],
      "dondeApretar": "El tribunal debe presionar sobre la viabilidad económica real: cómo se llega a 67 alumnos de equilibrio sin datos de precio, costo fijo ni proyección temporal."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron no incluir clases en vivo en la propuesta?",
            "buscamos": "Razones de costo, escalabilidad o perfil del alumno.",
            "evasiva": "Describir la oferta."
          },
          {
            "pregunta": "¿Por qué fijaron 2.000 alumnos como objetivo?",
            "buscamos": "Supuestos detrás del número, o reconocer que falta.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Por qué el autoaprendizaje acompañado como diferencial?",
            "buscamos": "Problema del alumno que resuelve.",
            "evasiva": "Describir el modelo."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué el sitio terminó con verde oscuro si la identidad definía azul y celeste?",
            "buscamos": "La decisión que tomaron al construirlo.",
            "evasiva": "Hablar de los colores en general."
          },
          {
            "pregunta": "¿Por qué agregaron Checkout y Testimonios al sitemap original?",
            "buscamos": "Criterio del cambio.",
            "evasiva": "Describir las páginas."
          },
          {
            "pregunta": "¿Por qué construyeron los buyer personas con ese método?",
            "buscamos": "Ventajas y límites del método.",
            "evasiva": "Describir los personajes."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce en Pantheon para una academia?",
            "buscamos": "Criterios técnicos.",
            "evasiva": "'Lo pedía la cátedra'."
          },
          {
            "pregunta": "¿Por qué simularon una crisis de clases en vivo si el producto no las ofrece?",
            "buscamos": "Que justifiquen la elección del escenario.",
            "evasiva": "Describir la crisis."
          },
          {
            "pregunta": "¿Por qué creen que se generó la dependencia de una sola plataforma?",
            "buscamos": "La decisión que originó el riesgo.",
            "evasiva": "Explicar la causa técnica."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué el punto de equilibrio está en 67 alumnos?",
            "buscamos": "Precio y costos supuestos.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué no fijaron metas numéricas a los KPIs?",
            "buscamos": "Que expliquen la decisión o reconozcan el faltante.",
            "evasiva": "Listar KPIs."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público 18-50.",
            "evasiva": "Enumerar canales."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del pixel de TikTok, ¿por qué priorizaron esa respuesta?",
            "buscamos": "Lógica de la priorización.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué consideran crítico ese tipo de error para un e-commerce?",
            "buscamos": "Relación con la toma de decisiones basada en datos.",
            "evasiva": "Definir el pixel."
          },
          {
            "pregunta": "¿Por qué se organizaron de esa forma como equipo?",
            "buscamos": "Justificación de roles.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 8,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "16",
    "proyecto": "ReWear",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Martin Burgos",
        "doc": "641005",
        "estado": "Puede defender"
      },
      {
        "nombre": "Iara Camil Peña",
        "doc": "625141",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/13DKx_nhzAq-rcZtqg6-bmZdcZ4x8bLQN/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Hay coherencia conceptual entre buyer persona, UX y propuesta de valor, pero las implementaciones técnicas son básicas, el análisis financiero es casi inexistente y varias afirmaciones críticas carecen de evidencia.",
      "queEs": "E-commerce de moda circular (compra, venta e intercambio de ropa de segunda mano) para Gen Z en AMBA, diferenciado por curaduría y modelo circular comprador-proveedor.",
      "fortalezas": [
        "Customer Journey mapea con coherencia la barrera 'desconfianza' y la traduce en decisiones concretas de UX (fotos reales, FAQ de higiene, política visible en checkout).",
        "Las dos crisis simuladas generan KPIs de salida específicos y medibles (exactitud inventario 100%, abandono checkout <15%), articulados con los riesgos del modelo SKU único.",
        "La arquitectura del sitio integra el flujo comprador→proveedor ('Canjear o Vender') como diferencial estructural fundamentado en el modelo circular."
      ],
      "interrogar": [
        "El documento proyecta '$5.000.000 mensuales' sin mostrar cálculo, ticket promedio real, ni volumen de SKUs necesario.",
        "Se declara checkout 'multistep' como decisión UX relevante, pero las capturas muestran un checkout de una sola pantalla sin pasos diferenciados.",
        "El TAM/SAM/SOM menciona 'datos demográficos del INDEC' pero no cita ninguna cifra concreta ni porcentaje de penetración digital."
      ],
      "dondeApretar": "Forzar la conexión entre las decisiones tecnológicas declaradas (cloud escalable, CDN, API/ERP de inventario) y lo realmente implementado en el sitio de Pantheon, que es una instalación básica de WooCommerce sin esas mejoras."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron a 'Sofía', estudiante universitaria de CABA, como único buyer persona para un público Gen Z de todo el AMBA?",
            "buscamos": "Criterio de foco y qué ganan y pierden con él.",
            "evasiva": "Describir a Sofía."
          },
          {
            "pregunta": "¿Por qué un modelo circular de compra, venta e intercambio y no solo reventa?",
            "buscamos": "Lógica de abastecimiento y fidelización.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Por qué proyectan $5.000.000 mensuales?",
            "buscamos": "Supuestos de volumen y ticket.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué declararon un checkout multistep y terminaron con una sola pantalla?",
            "buscamos": "La decisión que tomaron al implementarlo.",
            "evasiva": "Defender el multistep en teoría."
          },
          {
            "pregunta": "¿Por qué consideran el Centro de Ayuda y Sobre Nosotros herramientas de conversión?",
            "buscamos": "Relación con la desconfianza hacia la ropa usada.",
            "evasiva": "Describir las secciones."
          },
          {
            "pregunta": "¿Por qué decidieron atacar la desconfianza con fotos reales, FAQ de higiene y políticas visibles?",
            "buscamos": "Vínculo con el journey.",
            "evasiva": "Enumerar elementos."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué arrancaron sin CDN ni infraestructura escalable si las crisis mostraron que era un problema?",
            "buscamos": "Priorización y riesgo aceptado.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué eligieron WooCommerce para manejar prendas únicas?",
            "buscamos": "Criterio técnico.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "¿Por qué quedaron tres umbrales distintos de tiempo de carga del checkout?",
            "buscamos": "Origen de la inconsistencia y cuál rige.",
            "evasiva": "Elegir uno sin explicar."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué fijaron conversión objetivo del 2% y aceptan cerrar una crisis por debajo?",
            "buscamos": "Lógica del rango.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing para la Gen Z?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Enumerar canales."
          },
          {
            "pregunta": "¿Por qué dimensionaron el mercado con datos del INDEC sin cifras concretas en el documento?",
            "buscamos": "Que expliquen la decisión o reconozcan el faltante.",
            "evasiva": "Mencionar el INDEC."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 1, ¿por qué eligieron esa forma de manejar cancelaciones que triplicaban el objetivo?",
            "buscamos": "Criterio de confianza y costo.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué fijaron exactitud de inventario del 100% como KPI de salida?",
            "buscamos": "Relación con el modelo de SKU único.",
            "evasiva": "Repetir el KPI."
          },
          {
            "pregunta": "¿Por qué se repartieron así las tareas del equipo?",
            "buscamos": "Justificación de roles.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 7.5,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "25",
    "proyecto": "MateGo",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Josefina Borgobello",
        "doc": "638427",
        "estado": "Puede defender"
      },
      {
        "nombre": "Valentina Cudina",
        "doc": "633398",
        "estado": "Puede defender"
      },
      {
        "nombre": "Ayelen Julia",
        "doc": "615870",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1fNmN6xgDtwukeozuySotACLp4HD3FjcM/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo presenta estructura completa y coherente temática, pero el SAM carece de cifra concreta, la proyección de 3.800 clientes no tiene metodología validada y la brecha entre wireframes documentados y sitio funcional real no se cierra con evidencia.",
      "queEs": "E-commerce DNVB de productos materos sobre WordPress/WooCommerce, diferencial: especialización vertical frente a marketplaces genéricos.",
      "fortalezas": [
        "Sitio funcional desplegado y accesible (URL + credenciales incluidas en el documento).",
        "Análisis estratégico FODA/PESTEL/TAM-SAM-SOM con fuentes citadas (CACE, INDEC, INYM).",
        "KPIs definidos con valores concretos: conversión >2%, carrito <65%, ROAS >3."
      ],
      "interrogar": [
        "SAM no tiene cifra: se describe cualitativamente como 'compradores interesados en hogar, diseño y lifestyle' sin número que justifique el SOM de 3.800.",
        "Proyección de $171.000.000 asume ticket promedio de $45.000 sin fecha ni ajuste inflacionario, en un contexto de inflación reconocido en el propio PESTEL.",
        "Las crisis 1 y 2 se presentan como 'simulaciones' con 'resultados' y 'aprendizajes', pero no hay evidencia de que se hayan ejecutado ni métricas reales del sitio."
      ],
      "dondeApretar": "Interrogar la consistencia entre el análisis económico declarado y la ausencia de datos reales del sitio funcional: tráfico, conversiones o cualquier KPI medido."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron especializarse en el segmento matero frente a marketplaces generalistas?",
            "buscamos": "Qué ventaja da la especialización al cliente.",
            "evasiva": "Describir el catálogo."
          },
          {
            "pregunta": "¿Por qué el SAM quedó descripto sin cifra?",
            "buscamos": "Que expliquen la decisión o reconozcan el faltante.",
            "evasiva": "Describir el segmento."
          },
          {
            "pregunta": "¿Por qué usaron un ticket fijo de $45.000 si el PESTEL reconoce inflación sostenida?",
            "buscamos": "Supuesto y su riesgo.",
            "evasiva": "Repetir la proyección."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué un checkout de cuatro pasos?",
            "buscamos": "Criterio de diseño.",
            "evasiva": "Definir la ley de Fitts."
          },
          {
            "pregunta": "¿Por qué incluyeron un campo de código de descuento si no hay estrategia de cupones?",
            "buscamos": "Que expliquen la decisión.",
            "evasiva": "Minimizar el detalle."
          },
          {
            "pregunta": "¿Por qué fijaron un rebote objetivo por debajo del 45%?",
            "buscamos": "Referencia usada.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué decidieron integrar GA4 y Meta Pixel?",
            "buscamos": "Qué decisiones querían tomar con esos datos.",
            "evasiva": "Listar herramientas."
          },
          {
            "pregunta": "¿Por qué fijaron KPIs de conversión y rebote antes de tener datos reales?",
            "buscamos": "Lógica de metas previas.",
            "evasiva": "Repetir metas."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué fijaron conversión >2%, carrito <65% y ROAS >3?",
            "buscamos": "Referencias detrás de cada meta.",
            "evasiva": "Repetir números."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público matero.",
            "evasiva": "Enumerar canales."
          },
          {
            "pregunta": "¿Por qué confían en el SOM de 3.800 clientes?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En las crisis simuladas, ¿por qué eligieron esas respuestas?",
            "buscamos": "Criterio de cada respuesta.",
            "evasiva": "Narrar las crisis."
          },
          {
            "pregunta": "¿Por qué asignaron así los roles para un problema técnico grave?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          },
          {
            "pregunta": "¿Por qué no definieron un mecanismo de ajuste del ticket ante inflación?",
            "buscamos": "Que reconozcan la decisión y qué harían.",
            "evasiva": "Repetir el PESTEL."
          }
        ]
      }
    ],
    "nota": 8,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "27",
    "proyecto": "OSMOS",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Noelia Giselle Fernandez",
        "doc": "606027",
        "estado": "Puede defender"
      },
      {
        "nombre": "Nicolas Solomin",
        "doc": "614111",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1kv6lTU8nz0Uun81VMth76hEbDqUfsWLz/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo presenta consistencia interna entre diagnóstico, diseño e implementación, con evidencias reales del MVP, gestión de crisis documentada y KPIs definidos, aunque con brechas operativas notorias.",
      "queEs": "E-commerce DNVB de purificadores de agua para hogares urbanos AMBA, diferenciado por educación, simplificación y recurrencia vía filtros.",
      "fortalezas": [
        "MVP publicado y funcional en Pantheon con carrito, checkout y catálogo operativo verificado con capturas.",
        "Gestión de dos crisis documentadas con tickets, KPIs de cierre, responsables y acciones correctivas específicas.",
        "Coherencia entre FODA/PESTEL y decisiones de plataforma, contenido educativo, soporte WhatsApp y SEO."
      ],
      "interrogar": [
        "Checkout solo admite transferencia bancaria (p.32): contradice la propuesta de cuotas y medios digitales declarada como diferencial clave.",
        "Break-even de 64 unidades con ROI 88,09% (p.5): el presupuesto de $1.349.000 y contribución de $21.145 no detallan cómo se calculó el precio promedio de $140.966,67 del TAM.",
        "Buscador validado con solo 1 búsqueda crítica (p.38): el criterio de cierre de crisis ERR-508 exigía <5% búsquedas sin resultados, pero la muestra es insuficiente para declarar el KPI cumplido."
      ],
      "dondeApretar": "Concentrar la defensa en la brecha entre la propuesta de valor (cuotas, múltiples medios de pago, recurrencia) y lo efectivamente implementado en el MVP entregado."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron un modelo de recurrencia basado en la reposición de filtros?",
            "buscamos": "Lógica de ingresos y de relación con el cliente.",
            "evasiva": "Describir el producto."
          },
          {
            "pregunta": "¿Por qué apuntaron a hogares urbanos del AMBA?",
            "buscamos": "Criterio de segmentación.",
            "evasiva": "Describir el mercado."
          },
          {
            "pregunta": "¿Por qué consideran alcanzable el 1% del mercado partiendo de 64 unidades de equilibrio?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir cifras."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué el checkout solo admite transferencia si las cuotas eran un diferencial?",
            "buscamos": "La decisión y su impacto en la propuesta.",
            "evasiva": "Hablar de cuotas a futuro."
          },
          {
            "pregunta": "¿Por qué eligieron contenido educativo como pilar?",
            "buscamos": "Relación con la decisión de compra de un purificador.",
            "evasiva": "Describir contenidos."
          },
          {
            "pregunta": "¿Por qué soporte por WhatsApp?",
            "buscamos": "Vínculo con el cliente.",
            "evasiva": "Describir el canal."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué dieron por cerrada la crisis del buscador validando con una sola búsqueda?",
            "buscamos": "Criterio y qué riesgo aceptaron.",
            "evasiva": "Afirmar que quedó resuelto."
          },
          {
            "pregunta": "¿Por qué dejaron el sitio en el entorno de desarrollo y no en dominio propio?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué usaron un precio promedio del TAM para el break-even si los productos tienen el mismo precio?",
            "buscamos": "Que justifiquen o reconozcan la inconsistencia.",
            "evasiva": "Repetir el ROI."
          },
          {
            "pregunta": "¿Por qué estimaron una caída de 10 a 7–8 ventas en la crisis del troll sin historial propio?",
            "buscamos": "Base de la estimación.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué ese presupuesto de $1.349.000?",
            "buscamos": "Criterio de asignación.",
            "evasiva": "Dar el total."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del troll, ¿por qué eligieron esa forma de responder?",
            "buscamos": "Criterio de reputación de marca.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué fijaron volver al 90% del baseline como KPI de recuperación?",
            "buscamos": "Lógica del umbral.",
            "evasiva": "Repetir el KPI."
          },
          {
            "pregunta": "¿Por qué asignaron así los responsables de cada crisis?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "33",
    "proyecto": "ZIO Pinturería",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Mirian Noemi Romero",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/11CzxdKAH5BZI9PiRCTWDaPX8Y8r8lSLz/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo articula diagnóstico, diseño e implementación con consistencia, fundamenta cada decisión con datos propios y documenta dos crisis con análisis de causa raíz.",
      "queEs": "Tienda WooCommerce para pinturería 100% digital de La Plata, producción a pedido sin stock, diferencial en precio y asesoramiento personalizado por WhatsApp.",
      "fortalezas": [
        "Dos crisis simuladas (ERR-142 y ERR-503) documentadas con impacto financiero cuantificado y resolución en tres capas.",
        "Proyecciones financieras respaldadas en benchmarking real con SimilarWeb y SEMrush sobre tres competidores.",
        "Decisiones de UX/MVP fundamentadas: exclusión deliberada del selector de colores con argumento de riesgo de usabilidad."
      ],
      "interrogar": [
        "El documento dice 157 pedidos proyectados en escenario base (sección objetivos) pero la sección KPIs dice 126 pedidos; la tasa y el tráfico son iguales: ¿cuál es el número correcto?",
        "El SAM se calcula como 2% del TAM nacional sin justificar por qué ese porcentaje es alcanzable para una pinturería con radio de 5 km en La Plata.",
        "El sitio está en entorno de desarrollo (dev-zio.pantheonsite.io) con indexación desactivada; no hay evidencia de migración a producción ni de ventas reales validadas."
      ],
      "dondeApretar": "Presionar sobre la brecha entre lo planificado y lo efectivamente validado: sin ventas reales ni dominio productivo, ¿qué del modelo de negocio está verdaderamente probado?"
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron un modelo de producción a pedido sin stock?",
            "buscamos": "Ventajas y riesgos que evaluaron.",
            "evasiva": "Describir el flujo."
          },
          {
            "pregunta": "¿Por qué calcularon el SAM como 2% de las viviendas del país si operan en 5 km de La Plata?",
            "buscamos": "Criterio o reconocer la debilidad.",
            "evasiva": "Defender el porcentaje."
          },
          {
            "pregunta": "¿Por qué diferenciarse por precio y asesoramiento por WhatsApp?",
            "buscamos": "Lógica frente a la competencia local.",
            "evasiva": "Describir el diferencial."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué excluyeron el selector de colores del MVP si el miedo al color equivocado es el principal dolor?",
            "buscamos": "El razonamiento de riesgo detrás de la exclusión.",
            "evasiva": "Repetir la decisión."
          },
          {
            "pregunta": "¿Por qué presentaron wireframes de escritorio si su público es mobile-first?",
            "buscamos": "Criterio de la decisión.",
            "evasiva": "Citar el 86% mobile."
          },
          {
            "pregunta": "¿Por qué el asesoramiento por WhatsApp y no otro canal?",
            "buscamos": "Vínculo con el cliente.",
            "evasiva": "Describir el canal."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué usaron SimilarWeb y SEMrush para las proyecciones?",
            "buscamos": "Qué buscaban validar.",
            "evasiva": "Nombrar las herramientas."
          },
          {
            "pregunta": "¿Por qué el sitio quedó con la indexación desactivada?",
            "buscamos": "Decisión y su impacto en las proyecciones.",
            "evasiva": "'Está en dev'."
          },
          {
            "pregunta": "¿Por qué eligieron WooCommerce con Yoast?",
            "buscamos": "Criterios concretos.",
            "evasiva": "Listar plugins."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué quedaron dos cifras de pedidos (157 y 126) para el escenario base?",
            "buscamos": "Origen y cuál rige.",
            "evasiva": "Elegir una."
          },
          {
            "pregunta": "¿Por qué definieron un umbral de alerta del CAC y con qué lógica?",
            "buscamos": "Qué decisión disparaba.",
            "evasiva": "Definir CAC."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de pauta?",
            "buscamos": "Vínculo con el público local.",
            "evasiva": "Enumerar canales."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 1, ¿por qué eligieron esa respuesta cuando el CAC se disparó?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "En la Crisis 2, ¿por qué priorizaron así la gestión con el proveedor de Berisso?",
            "buscamos": "Lógica de contención.",
            "evasiva": "Describir el impacto."
          },
          {
            "pregunta": "¿Por qué una resolución en tres capas?",
            "buscamos": "Para qué sirve cada capa.",
            "evasiva": "Describir el esquema."
          }
        ]
      }
    ],
    "nota": 10,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "34",
    "proyecto": "Kit And Go",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Maylen Sacco",
        "doc": "645066",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/176Ky-XA5GRJOGM_Kzximu7Wfd9OqlYeN/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo es completo en estructura pero presenta contradicciones financieras relevantes y referencias bibliográficas inconsistentes que debilitan su solidez académica.",
      "queEs": "E-commerce de kits tecnológicos prearmados para creadores de contenido principiantes, diferenciado por curaduría experta y asesoramiento personalizado.",
      "fortalezas": [
        "Modelo financiero coherente internamente: ticket promedio $222.500, punto de equilibrio 55 kits, facturación proyectada $111.250.000.",
        "Decisiones UX/UI justificadas en el buyer persona 'Santi' con evidencia visual en los wireframes del anexo.",
        "Gestión de crisis documentada con reportes reales adjuntos (ERR-389 y ERR-505) que fundamentan decisiones estratégicas concretas."
      ],
      "interrogar": [
        "Contradicción financiera: la inversión inicial es $4.200.000 pero el CAC se calcula sobre una 'inversión anual en marketing de $6.000.000' nunca presupuestada.",
        "Referencia bibliográfica cita 'ChatGPT (modelo GPT-5.5)' de OpenAI (2026): ese modelo no existe públicamente, sugiere uso acrítico de IA sin verificación.",
        "El margen bruto declarado es 35%, pero los datos de la tabla muestran márgenes reales de 36,7% (Starter), 36% (Creator) y 35% (Pro): la cifra no es uniforme."
      ],
      "dondeApretar": "Confrontar la inconsistencia entre el presupuesto inicial de $4,2M y el CAC calculado sobre $6M anuales, pidiendo que justifiquen de dónde salen esos fondos adicionales."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron creadores de contenido principiantes como cliente principal?",
            "buscamos": "Necesidad del segmento que resuelven.",
            "evasiva": "Describir el segmento."
          },
          {
            "pregunta": "¿Por qué vender kits prearmados en lugar de productos sueltos?",
            "buscamos": "Valor para el principiante y para el negocio.",
            "evasiva": "Describir los kits."
          },
          {
            "pregunta": "¿Por qué consideran alcanzables 500 clientes en el primer año?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron checkout como invitado si el formulario pide muchos datos?",
            "buscamos": "Que concilien la decisión con la fricción.",
            "evasiva": "Describir el formulario."
          },
          {
            "pregunta": "¿Por qué la curaduría experta como diferencial?",
            "buscamos": "Lógica de valor.",
            "evasiva": "Repetir el diferencial."
          },
          {
            "pregunta": "¿Por qué diseñaron el sitio pensando en 'Santi'?",
            "buscamos": "Vínculo entre persona y decisiones UX.",
            "evasiva": "Describir a Santi."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WooCommerce para vender kits?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué citaron como fuente un modelo de ChatGPT en el trabajo?",
            "buscamos": "Criterio sobre uso y citación de IA.",
            "evasiva": "Minimizar."
          },
          {
            "pregunta": "¿Por qué ese margen del 35%?",
            "buscamos": "Criterio de precio.",
            "evasiva": "Repetir el margen."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué arrancaron solo con Instagram y TikTok y no incluyeron Google Ads desde el inicio?",
            "buscamos": "Razón de la decisión original.",
            "evasiva": "Describir la crisis."
          },
          {
            "pregunta": "¿Por qué el CAC se calcula sobre $6.000.000 si la inversión inicial es $4.200.000?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Defender el CAC."
          },
          {
            "pregunta": "¿Por qué consideran que el presupuesto de pauta alcanza?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir montos."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En ERR-389, ¿por qué eligieron sumar Google Ads como respuesta?",
            "buscamos": "Lógica de la decisión.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "En ERR-505, ¿por qué priorizaron esas acciones?",
            "buscamos": "Criterio.",
            "evasiva": "Enumerar acciones."
          },
          {
            "pregunta": "¿Por qué se organizaron así en el equipo para responder?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 6,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "38",
    "proyecto": "ECOMPULSE/HANPURE",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Tibor Santorufo",
        "doc": "611683",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1hh48TwTJ8QesNWV80LnYzX7jK720ZzRu/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Alta consistencia interna entre diagnóstico, diseño UX y modelo financiero, con fundamentación técnica concreta y gestión documentada de incidentes reales.",
      "queEs": "E-commerce D2C de K-Beauty premium en Argentina, diferenciado por posicionamiento como 'Asesora Esteticista' con diagnóstico guiado y precios transparentes sin descuentos.",
      "fortalezas": [
        "Modelo financiero trianual detallado con Curva en J: déficit controlado Año 1 (-$15.922.200 ARS) y ROI acumulado +15% en Año 3.",
        "Decisiones UX justificadas explícitamente en leyes de usabilidad (Hick, Miller, Fitts, Fogg) vinculadas al buyer persona Adriana.",
        "Gestión de dos crisis documentadas con tickets, impacto financiero cuantificado y resolución técnica específica (fallback GeoLite2)."
      ],
      "interrogar": [
        "SOM Año 1 fijado en $56.320.000 ARS = 640 unidades × $88.000 ARS, pero el COGS efectivo del 39,2% incluye logística Jipink desde mes 3 solamente: ¿cómo se calculó el COGS de los meses 1 y 2?",
        "Se declara MVP funcional en Pantheon y PageSpeed 82/100 con FCP 0,8s, pero la URL aún es 'dev-hanpure.pantheonsite.io': ¿el sitio está en producción real o sigue en entorno de desarrollo?",
        "Crisis 1: el simulador UTN arrojó $7.355.328 ARS de penalidad pero el equipo la 'saneó' a $300.000 ARS; el criterio de recálculo no tiene respaldo metodológico documentado en el TFI."
      ],
      "dondeApretar": "Presionar la brecha entre lo declarado como implementado y el estado real del sitio (dev vs. producción), y la solidez del recálculo financiero de la Crisis 1."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué se posicionaron como 'Asesora Esteticista' con diagnóstico guiado?",
            "buscamos": "Lógica frente al e-commerce de promociones.",
            "evasiva": "Describir el diagnóstico."
          },
          {
            "pregunta": "¿Por qué decidieron precios fijos sin descuentos en un contexto inflacionario?",
            "buscamos": "Razonamiento de posicionamiento y riesgo.",
            "evasiva": "Repetir la política."
          },
          {
            "pregunta": "¿Por qué igualaron el SOM del año 1 con la meta de facturación?",
            "buscamos": "Que justifiquen o reconozcan la confusión.",
            "evasiva": "Repetir cifras."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué agregaron 'Paso en la rutina' durante el desarrollo?",
            "buscamos": "Relación con el posicionamiento.",
            "evasiva": "Describir la sección."
          },
          {
            "pregunta": "¿Por qué reservaron el terracota solo para CTAs críticos?",
            "buscamos": "Criterio de jerarquía visual.",
            "evasiva": "Teoría del color."
          },
          {
            "pregunta": "¿Por qué basaron el diseño en Hick, Miller, Fitts y Fogg?",
            "buscamos": "Vínculo con Adriana.",
            "evasiva": "Definir las leyes."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron geolocalizar precios con la API de MaxMind?",
            "buscamos": "Necesidad que resolvía.",
            "evasiva": "Describir la integración."
          },
          {
            "pregunta": "¿Por qué el fallback GeoLite2, previsto desde el diseño, no estaba activo en el go-live?",
            "buscamos": "La decisión que lo explica.",
            "evasiva": "Narrar la falla."
          },
          {
            "pregunta": "¿Por qué hicieron el go-live en entorno de desarrollo?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "'No llegamos'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué aceptaron un año 1 deficitario dentro de la curva en J?",
            "buscamos": "Lógica de inversión.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué recalcularon la penalidad del simulador de $7.355.328 a $300.000?",
            "buscamos": "Criterio del recálculo.",
            "evasiva": "Defender el número final."
          },
          {
            "pregunta": "¿Por qué eligieron Jipink para la logística desde el mes 3?",
            "buscamos": "Criterio.",
            "evasiva": "Describir el servicio."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del Influencer Fantasma, ¿por qué eligieron esa respuesta?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "En la crisis de precios del go-live, ¿por qué priorizaron esos pasos?",
            "buscamos": "Lógica.",
            "evasiva": "Narrar la falla."
          },
          {
            "pregunta": "¿Por qué cambiarían su proceso de trabajo después de las dos crisis?",
            "buscamos": "Reflexión sobre decisiones de equipo.",
            "evasiva": "Generalidades."
          }
        ]
      }
    ],
    "nota": 8,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "39",
    "proyecto": "Linda Bags",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Ayelen Broggi",
        "doc": "39598",
        "estado": "Puede defender"
      },
      {
        "nombre": "Jessica Bulldain",
        "doc": "635232",
        "estado": "Puede defender"
      },
      {
        "nombre": "Vanesa Ayelen Marino",
        "doc": "604821",
        "estado": "Puede defender"
      },
      {
        "nombre": "Cinthia Beatriz Toro",
        "doc": "530594",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1JTBmzczG0bk1qejXrtiz67CY8KiRJbPm/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo es completo en estructura y declaraciones pero presenta brechas importantes entre lo planificado y lo evidenciado como realmente implementado, con secciones incompletas (SEO repite texto del Customer Journey) y ausencia de conclusiones redactadas.",
      "queEs": "E-commerce propio para marca argentina de marroquinería en Chubut, desarrollado en WordPress/WooCommerce, como alternativa a redes sociales y marketplaces.",
      "fortalezas": [
        "KPIs definidos con metas concretas a 6 meses (ej.: conversión ≥2%, abandono <65%, CAC ≤$1.000).",
        "Dos casos de crisis documentados con tablas de acciones, responsables y ETAs.",
        "TAM/SAM/SOM estimados con cifras explícitas y proyección realista de SOM (0,046% del SAM)."
      ],
      "interrogar": [
        "La sección SEO (pág. 15) repite textualmente el párrafo del Customer Journey: no hay estrategia SEO real documentada.",
        "El sitio funcional existe en Pantheon (URL declarada) pero no se evidencia qué está realmente implementado versus planificado; brecha declarado/construido no cuantificada.",
        "La sección 'Conclusiones' (pág. 26) aparece como título vacío sin contenido redactado."
      ],
      "dondeApretar": "Presionar en la distinción entre lo diseñado/planificado y lo efectivamente construido en el sitio, y en la ausencia total de contenido SEO concreto pese a declararlo como estrategia central."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron desarrollar un e-commerce propio en lugar de seguir en redes y marketplaces?",
            "buscamos": "Razones de negocio para una marca de Chubut.",
            "evasiva": "Describir el sitio."
          },
          {
            "pregunta": "¿Por qué proyectaron capturar el 0,046% del SAM?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Por qué fijaron un CAC ≤ $1.000 en relación con el precio de los productos?",
            "buscamos": "Lógica de la relación.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué fijaron abandono de carrito <65% como meta aceptable y no algo más ambicioso?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué priorizaron esas decisiones de diseño en las fichas de producto?",
            "buscamos": "Vínculo con el cliente de marroquinería.",
            "evasiva": "Describir fichas."
          },
          {
            "pregunta": "¿Por qué consideran el sitio 'listo' si no tiene dominio propio ni hosting productivo?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "'Está en Pantheon'."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué la sección SEO quedó con el texto del Customer Journey?",
            "buscamos": "Que reconozcan y expliquen.",
            "evasiva": "Minimizar."
          },
          {
            "pregunta": "¿Por qué creen que se produjo el error de caché que generó la sobreventa?",
            "buscamos": "Decisión técnica que lo originó.",
            "evasiva": "Explicar el error."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué proyectan +30% de tráfico mensual durante seis meses?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Enumerar canales."
          },
          {
            "pregunta": "¿Por qué la sección Conclusiones quedó vacía?",
            "buscamos": "Que expliquen la decisión.",
            "evasiva": "Minimizar."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Ante la sobreventa a 100 clientes, ¿por qué eligieron Gift Cards y no reembolsos directos?",
            "buscamos": "Criterio de retención y caja.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué el bloqueo de Facebook Marketplace reforzó la decisión de tener sitio propio?",
            "buscamos": "Aprendizaje estratégico.",
            "evasiva": "Describir la pérdida."
          },
          {
            "pregunta": "¿Por qué el plan de crisis asigna varios roles si el FODA dice que todo recae en una persona?",
            "buscamos": "Que concilien.",
            "evasiva": "Repetir el organigrama."
          }
        ]
      }
    ],
    "nota": 7,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "40",
    "proyecto": "El Negro Tati - Cuchillería de Autor",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Gastón Eduardo Insfran",
        "doc": "616839",
        "estado": "Puede defender"
      },
      {
        "nombre": "Veronica Cecilia Rendon",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/189HfkHn1QE0gnMnehCKlARa4F4eSCCHS/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra consistencia interna sólida entre análisis estratégico, diseño digital y gestión de crisis, con KPIs definidos y fundamentación de cada decisión.",
      "queEs": "E-commerce D2C sobre WordPress/WooCommerce para artesano cuchillero, diferencial: storytelling del forjado y posicionamiento premium anti-industrial.",
      "fortalezas": [
        "Coherencia entre buyer persona, propuesta de valor y decisiones UX: fotos macro, fichas técnicas y WhatsApp atienden objeciones explícitas de Facundo y Valentina.",
        "KPIs operativos post-crisis (TDT, COR, Lead Time) creados con causa raíz documentada, no genéricos.",
        "Análisis TAM/SAM/SOM con filtros explícitos (47% NSE + 10% psicográfico) que justifican el SOM de $90M sin sobredimensionarlo."
      ],
      "interrogar": [
        "El SOM asume 75 unidades/mes vendidas todas vía e-commerce, pero el canal aún no probó conversión real: ¿qué pasa si el CR del 1,5% tarda en alcanzarse?",
        "Se declara integración de HubSpot o Salesforce como CRM, pero el sitio funcional (Pantheon) no muestra evidencia de esa integración: ¿está implementada o solo planificada?",
        "El presupuesto de influencers ($100.000/mes) se describe como 'barter marketing' con envío de piezas físicas, pero el costo del cuchillo entregado no figura en el CAC calculado: ¿está contemplado?"
      ],
      "dondeApretar": "Presionar la brecha entre proyecciones financieras (SOM, ROAS, CAC) y la ausencia de datos reales de conversión del sitio funcional ya desplegado."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron un posicionamiento premium anti-industrial basado en el storytelling del forjado?",
            "buscamos": "Lógica frente al cuchillo industrial.",
            "evasiva": "Describir el storytelling."
          },
          {
            "pregunta": "¿Por qué dimensionaron el mercado con la categoría 'Hogar y Decoración' de CACE?",
            "buscamos": "Criterio de la elección.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué fijaron 75 clientes mensuales, igual al tope de producción?",
            "buscamos": "Lógica y riesgo de la decisión.",
            "evasiva": "Repetir el objetivo."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron fotos macro, fichas técnicas y WhatsApp para responder a las objeciones?",
            "buscamos": "Vínculo con Facundo y Valentina.",
            "evasiva": "Enumerar elementos."
          },
          {
            "pregunta": "¿Por qué el storytelling como eje de la experiencia?",
            "buscamos": "Relación con el precio premium.",
            "evasiva": "Describir secciones."
          },
          {
            "pregunta": "¿Por qué crearon dos buyer personas?",
            "buscamos": "Qué aporta cada uno.",
            "evasiva": "Describirlos."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué plantearon HubSpot o Salesforce como CRM?",
            "buscamos": "Necesidad que resolvería.",
            "evasiva": "Describir el CRM."
          },
          {
            "pregunta": "¿Por qué SPF, DKIM y DMARC no se configuraron antes del go-live?",
            "buscamos": "La decisión de proceso que lo explica.",
            "evasiva": "Explicar qué son."
          },
          {
            "pregunta": "¿Por qué eligieron WooCommerce?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron barter con influencers en vez de pago en efectivo?",
            "buscamos": "Lógica de costo y autenticidad.",
            "evasiva": "Describir el barter."
          },
          {
            "pregunta": "¿Por qué no incluyeron el costo del cuchillo entregado en el CAC?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Repetir el CAC."
          },
          {
            "pregunta": "¿Por qué crearon TDT, COR y Lead Time como KPIs?",
            "buscamos": "Qué decisión dispara cada uno.",
            "evasiva": "Definirlos."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del packaging, ¿por qué eligieron esa respuesta?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "En la crisis de email, ¿por qué priorizaron esas acciones?",
            "buscamos": "Lógica.",
            "evasiva": "Explicar la causa técnica."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo en las crisis?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 7,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "41",
    "proyecto": "Estilo Organizado",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Noelia Zaragoza Dietrich",
        "doc": "601920",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1qrXn5qLN053KS1EFjruxcocLnYiDR0Fy/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo integra coherentemente análisis estratégico, implementación técnica real y gestión de crisis con datos propios, aunque algunos supuestos de mercado carecen de fuente primaria verificable.",
      "queEs": "Ecommerce WordPress/WooCommerce de productos de organización del hogar para mujeres 25-45 años, diferenciado por packs por ambiente y sección de consejos.",
      "fortalezas": [
        "Gestión de crisis documentada con tickets, KPIs, impacto económico ($38.752 ARS pérdida ERR-503) y protocolos concretos.",
        "Estimación TAM/SAM/SOM coherente y autocrítica: justifican 0,015% vs. 1-5% bibliográfico con argumentos operativos.",
        "Sitio publicado en Pantheon con plugins reales documentados (WooCommerce, Mercado Pago, Rank Math, MetaSlider)."
      ],
      "interrogar": [
        "Declaran atención personalizada 24/7 pero no evidencian chatbot implementado ni herramienta concreta que lo sostenga.",
        "El ROI positivo del 12,61% se menciona en la sección de factibilidad pero no aparece el cálculo ni los datos base en ninguna parte del documento.",
        "Las crisis ERR-903 y ERR-503 se presentan como 'simuladas' pero se describen con pérdidas económicas reales cuantificadas: ¿ocurrieron efectivamente o son hipotéticas?"
      ],
      "dondeApretar": "Forzar a los alumnos a sostener con números propios la viabilidad financiera (ROI 12,61%, punto de equilibrio 12 pedidos) cuya fórmula y fuente de datos no aparecen en el documento."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué cambiaron el nombre de 'Pausa' a 'Estilo Organizado'?",
            "buscamos": "Razones de marca y negocio.",
            "evasiva": "Contar el cambio."
          },
          {
            "pregunta": "¿Por qué eligieron a mujeres de 25 a 45 años de clase media de Provincia de Buenos Aires?",
            "buscamos": "Criterio de segmentación.",
            "evasiva": "Describir el perfil."
          },
          {
            "pregunta": "¿Por qué un SOM de 0,015% frente al 1–5% de la bibliografía?",
            "buscamos": "Argumentos operativos.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué ofrecer packs por ambiente en lugar de productos sueltos?",
            "buscamos": "Ventaja para la usuaria y el ticket.",
            "evasiva": "Describir packs."
          },
          {
            "pregunta": "¿Por qué incorporar una sección de consejos?",
            "buscamos": "Rol en la decisión de compra.",
            "evasiva": "Describir la sección."
          },
          {
            "pregunta": "¿Por qué una paleta cálida y suave?",
            "buscamos": "Vínculo con la clienta.",
            "evasiva": "Teoría del color."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron esos plugins (Mercado Pago, Rank Math, MetaSlider)?",
            "buscamos": "Criterio de cada elección.",
            "evasiva": "Listarlos."
          },
          {
            "pregunta": "¿Por qué declararon atención 24/7?",
            "buscamos": "Qué querían lograr y cómo pensaban sostenerla.",
            "evasiva": "Repetir la promesa."
          },
          {
            "pregunta": "¿Por qué Pantheon como hosting?",
            "buscamos": "Criterios concretos.",
            "evasiva": "'Lo pedía la consigna'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué proyectan 50 pedidos por mes?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Por qué una conversión objetivo del 1,20%?",
            "buscamos": "Referencia.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué el ROI de 12,61% los convence de la viabilidad?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir el número."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "¿Por qué respondieron distinto a ERR-903 y a ERR-503?",
            "buscamos": "Criterio de cada respuesta.",
            "evasiva": "Narrar las crisis."
          },
          {
            "pregunta": "¿Por qué asignaron un fondo de contingencia del 5%?",
            "buscamos": "Lógica del porcentaje.",
            "evasiva": "Repetir el dato."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 7,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "43",
    "proyecto": "Brújula Digital – Escanear y Comer",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Lucas Martin Benik",
        "doc": "613873",
        "estado": "Puede defender"
      },
      {
        "nombre": "Georgina Cabrera",
        "doc": "600861",
        "estado": "Puede defender"
      },
      {
        "nombre": "Andrea Sanchez",
        "doc": "618351",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1ZYdOcUQKA_RSRApvYaVT5bqEsKP2ajr2/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo articula análisis estratégico completo y prototipo funcional, pero sus proyecciones financieras carecen de sustento empírico y la implementación real queda reducida a un sitio WordPress sin pedidos ni pagos operativos.",
      "queEs": "SaaS de menú QR y pedidos digitales para gastronomía PyME, diferenciado por interfaz inspirada en cartas físicas tradicionales.",
      "fortalezas": [
        "TAM/SAM/SOM con cifras explícitas y coherentes entre sí ($45.000/mes base, 15 clientes SOM).",
        "Gestión de crisis documentada con planes alternativos concretos (Plan B tablet, Plan C WhatsApp).",
        "Prototipo funcional desplegado en Pantheon con URL pública verificable."
      ],
      "interrogar": [
        "El SOM proyecta 15 clientes 'en el segundo año', pero el plan de lanzamiento no menciona ningún restaurante piloto real confirmado ni pipeline.",
        "El sitio funcional solo simula el panel administrativo y el pago; nunca se procesa una transacción real con Mercado Pago, contradiciendo la sección de infraestructura tecnológica.",
        "El TAM asume 90.000 establecimientos a $45.000/mes sin citar fuente; ningún benchmark competitivo nombra precios ni cuota de mercado de competidores identificados."
      ],
      "dondeApretar": "Profundizar en la brecha entre lo declarado (SaaS con pagos integrados, pedidos en tiempo real) y lo efectivamente implementado (prototipo WordPress sin transacciones reales ni clientes activos)."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron una interfaz inspirada en las cartas físicas como diferencial?",
            "buscamos": "Problema del usuario gastronómico que resuelve.",
            "evasiva": "Describir la interfaz."
          },
          {
            "pregunta": "¿Por qué proyectaron solo 15 clientes al segundo año?",
            "buscamos": "Criterio de prudencia o capacidad.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Por qué el análisis usa $45.000 si el sitio ofrece tres planes?",
            "buscamos": "Que expliquen la decisión.",
            "evasiva": "Describir los planes."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué Montserrat SemiBold y Open Sans para un menú que se lee en el celular?",
            "buscamos": "Criterio de legibilidad.",
            "evasiva": "Nombrar las fuentes."
          },
          {
            "pregunta": "¿Por qué imitar el formato papel en pantalla y qué riesgo asumieron?",
            "buscamos": "Razonamiento.",
            "evasiva": "Describir el diseño."
          },
          {
            "pregunta": "¿Por qué apuntar a gastronomía PyME?",
            "buscamos": "Criterio de segmento.",
            "evasiva": "Describir el mercado."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué dejaron Mercado Pago como integración simulada?",
            "buscamos": "Priorización del prototipo.",
            "evasiva": "Hablar de la integración ideal."
          },
          {
            "pregunta": "¿Por qué no hicieron pruebas de carga antes del lanzamiento?",
            "buscamos": "Decisión de proceso.",
            "evasiva": "Narrar la caída."
          },
          {
            "pregunta": "¿Por qué eligieron WordPress en Pantheon para un SaaS?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron Google Ads como canal?",
            "buscamos": "Vínculo con el comprador gastronómico.",
            "evasiva": "Describir campañas."
          },
          {
            "pregunta": "¿Por qué confían en sus proyecciones financieras?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué asumen 90.000 establecimientos a $45.000 en el TAM?",
            "buscamos": "Fuente y criterio.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron Plan B (tablet) y Plan C (WhatsApp) como alternativas?",
            "buscamos": "Criterio de continuidad.",
            "evasiva": "Describir planes."
          },
          {
            "pregunta": "¿Por qué creen que los links de Google Ads no se actualizaron tras cambiar la estructura?",
            "buscamos": "Decisión de proceso que faltó.",
            "evasiva": "Narrar el error."
          },
          {
            "pregunta": "¿Por qué proponen una checklist obligatoria pre go-live?",
            "buscamos": "Qué riesgo cubre.",
            "evasiva": "Mencionarla."
          }
        ]
      }
    ],
    "nota": 7,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "48",
    "proyecto": "CAIRO",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Olivia Florespresedo",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1m5NQHilKtS5l4B79vZd89zdIW1vcChy8/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo integra con coherencia estrategia, diseño, implementación y gestión de crisis, con fundamentación explícita de cada decisión técnica y de negocio.",
      "queEs": "Suscripción mensual de productos de limpieza sustentables con sistema refill y reposición automática, diferencial: único modelo estructurado del sector en Argentina.",
      "fortalezas": [
        "Cada decisión técnica (WordPress, Blocksy, WooCommerce Subscriptions) está fundamentada en necesidades del modelo de negocio, no en preferencias.",
        "Las dos crisis simuladas generaron protocolos concretos incorporados al modelo: checklist pre-launch y churn rate como KPI central.",
        "La tabla de KPIs distingue indicadores adelantados de resultado y asocia cada uno a una decisión de respuesta concreta."
      ],
      "interrogar": [
        "El margen bruto declarado es 99,83% pero existen costos de kits detallados ($11.740 refill, $12.500 esencial, $6.140 starter): ¿cómo se reconcilia ese margen con esos costos de producto?",
        "El sitio funcional opera en Pantheon (desarrollo) pero se declara Hostinger como entorno de producción: ¿hay evidencia de migración o prueba real en producción?",
        "El SOM proyecta $72.856.350 anuales con 253 clientes mensuales y ticket promedio $24.045, pero el churn rate es 16,67% (permanencia 6 meses): ¿los ingresos proyectados descuentan la pérdida mensual de suscriptores?"
      ],
      "dondeApretar": "Presionar la consistencia financiera entre el margen bruto declarado del 99,83%, los costos de kit detallados y el impacto del churn de 16,67% sobre los ingresos anuales proyectados."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron un modelo de suscripción con refill y reposición automática?",
            "buscamos": "Lógica de recurrencia y sustentabilidad.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Por qué basar la ventaja en ser 'el único modelo estructurado' del sector?",
            "buscamos": "Cómo piensan sostenerla.",
            "evasiva": "Repetir el diferencial."
          },
          {
            "pregunta": "¿Por qué partir del TAM nacional de productos de limpieza para un formato tan distinto?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué un checkout de tres pasos con compra como invitado en un modelo de suscripción?",
            "buscamos": "Problema que querían resolver.",
            "evasiva": "Describir el checkout."
          },
          {
            "pregunta": "¿Por qué decidieron no cumplir la extensión mínima de Yoast en las fichas?",
            "buscamos": "Criterio y costo SEO asumido.",
            "evasiva": "Repetir la decisión."
          },
          {
            "pregunta": "¿Por qué eligieron Blocksy como tema?",
            "buscamos": "Criterios.",
            "evasiva": "Nombrar el tema."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué WooCommerce Subscriptions?",
            "buscamos": "Necesidad del modelo.",
            "evasiva": "Nombrar el plugin."
          },
          {
            "pregunta": "¿Por qué declararon Hostinger para producción y presentaron en Pantheon?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué consideran la integridad del evento de conversión condición de todos los KPIs?",
            "buscamos": "Lógica de medición.",
            "evasiva": "Narrar el error de GA4."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué declaran un margen bruto de 99,83% si hay costos de kits detallados?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Repetir el margen."
          },
          {
            "pregunta": "¿Por qué la proyección de ingresos no descuenta el churn de 16,67%?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Hablar de retención."
          },
          {
            "pregunta": "¿Por qué distinguieron indicadores adelantados de resultado?",
            "buscamos": "Para qué decisiones.",
            "evasiva": "Definirlos."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Ante el error de GA4, ¿por qué decidieron seguir o pausar el lanzamiento?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar el error."
          },
          {
            "pregunta": "¿Por qué aumentaron el presupuesto para gestión de comunidad?",
            "buscamos": "Problema detectado.",
            "evasiva": "Dar el monto."
          },
          {
            "pregunta": "¿Por qué el churn pasó a ser KPI central después de la crisis?",
            "buscamos": "Aprendizaje.",
            "evasiva": "Repetir el KPI."
          }
        ]
      }
    ],
    "nota": 8.5,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "49",
    "proyecto": "EcoBox Argentina S.R.L.",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Tomas Diego Rojas",
        "doc": "607895",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/15NR8wsAOuRfT64kCcEULar1hHe26fMhp/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Consistencia interna sólida, KPIs articulados entre sí y gestión de crisis con metodología documentada, aunque con brechas verificables entre cifras declaradas.",
      "queEs": "Plataforma e-commerce WordPress/WooCommerce en Pantheon para packaging sustentable B2B/B2C, diferencial: sin MOQ restrictivo y certificación ecológica.",
      "fortalezas": [
        "Nota metodológica explica y unifica el AOV de $28.500 ARS en SOM, KPIs y Crisis 1, evitando contradicción interna.",
        "Crisis 1 aplica 5 Porqués con causa raíz identificada y plan SLA 48hs en tres capas diferenciadas.",
        "Decisiones UX/UI (Ley de Hick, One Page Checkout, accesibilidad táctil) conectadas directamente a fricciones del Buyer Persona."
      ],
      "interrogar": [
        "El catálogo muestra precios $9,50 y $12,00 en capturas reales, incompatibles con el AOV objetivo de $28.500 ARS declarado.",
        "Margen bruto del 10% con punto de equilibrio en 150 pedidos/mes nunca se reconcilia con el SOM de solo 70 pedidos/mes en Año 1: el negocio arranca bajo su propio breakeven.",
        "ROI proyectado del 68% para Año 1 se afirma sin mostrar el cálculo ni los costos operativos que lo sostienen."
      ],
      "dondeApretar": "Presionar sobre la coherencia financiera: los precios reales del catálogo, el breakeven vs. volumen proyectado y la falta de cálculo explícito del ROI del 68%."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron no tener mínimo de pedido como diferencial?",
            "buscamos": "Lógica para clientes B2B y B2C.",
            "evasiva": "Describir la política."
          },
          {
            "pregunta": "¿Por qué partieron de la población total del país para el TAM?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Por qué tomaron el 30% para pasar al SAM?",
            "buscamos": "Justificación del porcentaje.",
            "evasiva": "Repetir el dato."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué un enfoque 100% mobile-first?",
            "buscamos": "Vínculo con el comprador.",
            "evasiva": "Repetir el enfoque."
          },
          {
            "pregunta": "¿Por qué aplicaron la ley de Hick y One Page Checkout?",
            "buscamos": "Problema que resolvían.",
            "evasiva": "Definir la ley."
          },
          {
            "pregunta": "¿Por qué la certificación ecológica como argumento de venta?",
            "buscamos": "Peso en la decisión de compra.",
            "evasiva": "Describir la certificación."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce en Pantheon para B2B y B2C?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué creen que el abandono del carrito se disparó en mobile si el enfoque era mobile-first?",
            "buscamos": "Decisión que falló.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué los precios del catálogo no se corresponden con el AOV objetivo?",
            "buscamos": "Que expliquen.",
            "evasiva": "Minimizar."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué fijaron el AOV en $28.500?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir el dato."
          },
          {
            "pregunta": "¿Por qué el SOM de 70 pedidos queda por debajo del equilibrio de 150?",
            "buscamos": "Que expliquen.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué confían en el ROI de 68%?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir el número."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Durante el go-live, ¿por qué eligieron esa respuesta al abandono masivo?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué aplicaron 5 Porqués y un SLA de 48 h en tres capas?",
            "buscamos": "Para qué servía cada parte.",
            "evasiva": "Explicar la técnica."
          },
          {
            "pregunta": "¿Por qué hicieron una crisis simulada deliberada?",
            "buscamos": "Valor que le vieron.",
            "evasiva": "Describirla."
          }
        ]
      }
    ],
    "nota": 7,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "51",
    "proyecto": "Sandía Sublimación",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Jorgelina Acebo",
        "doc": "638855",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1PGx9TkmIIE9YZW2xHEgFyz18oeLcAIMw/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra estructura completa y sitio funcional, pero la fundamentación estratégica es superficial y varias cifras clave carecen de fuente verificable dentro del documento.",
      "queEs": "Tienda online WordPress/WooCommerce para emprendimiento de productos sublimados, diferencial declarado: experiencia emocional de compra y automatización de gestión.",
      "fortalezas": [
        "Sitio funcional publicado en Pantheon con checkout real documentado en capturas (Anexo A).",
        "Gestión de dos crisis documentadas con tickets, causa raíz, KPIs en riesgo y plan de recuperación.",
        "Customer Journey y decisiones UX/UI alineadas explícitamente con el Buyer Persona construido."
      ],
      "interrogar": [
        "SOM de 86,4M ARS no tiene metodología de cálculo expuesta; el documento solo dice '0,001% del SAM' sin justificar ese porcentaje.",
        "Se declara Mercado Pago como medio de pago pero el sitio lo lista como 'Próximamente': brecha entre propuesta y go-live real.",
        "Crisis 2 ocurrió por 'falta de adopción del protocolo', no por falla técnica, pero las métricas de KPI post-corrección no aparecen: sin evidencia de resolución efectiva."
      ],
      "dondeApretar": "Presionar en la solidez de las estimaciones económicas y en qué indicadores concretos demuestran que las crisis quedaron efectivamente resueltas."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron la experiencia emocional de compra como diferencial?",
            "buscamos": "Vínculo con el producto sublimado.",
            "evasiva": "Describir el concepto."
          },
          {
            "pregunta": "¿Por qué construyeron a Sofía por observación de clientes, Instagram y WhatsApp y no con encuestas?",
            "buscamos": "Ventajas y límites del método.",
            "evasiva": "Describir a Sofía."
          },
          {
            "pregunta": "¿Por qué el SOM como 0,001% del SAM?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué el menú pasó de seis ítems planificados a tres?",
            "buscamos": "Decisión durante la implementación.",
            "evasiva": "Describir el menú."
          },
          {
            "pregunta": "¿Por qué priorizar la automatización de gestión?",
            "buscamos": "Problema operativo que resuelve.",
            "evasiva": "Enumerar automatizaciones."
          },
          {
            "pregunta": "¿Por qué eligieron esa stack si más del 80% del tráfico es móvil?",
            "buscamos": "Criterio técnico.",
            "evasiva": "Citar el 80%."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué lanzaron con Mercado Pago como 'Próximamente'?",
            "buscamos": "Decisión y riesgo aceptado.",
            "evasiva": "Hablar de MP a futuro."
          },
          {
            "pregunta": "¿Por qué WordPress/WooCommerce?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué la crisis de impresión los llevó a estandarizar el proceso?",
            "buscamos": "Aprendizaje.",
            "evasiva": "Narrar la crisis."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué fijaron reducir abandono al 20% sin línea de base?",
            "buscamos": "Que expliquen.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Enumerar canales."
          },
          {
            "pregunta": "¿Por qué esos KPIs?",
            "buscamos": "Qué decisión dispara cada uno.",
            "evasiva": "Listarlos."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "¿Por qué creen que el protocolo no se adoptó tras ERR-275?",
            "buscamos": "Decisión de equipo que lo explica.",
            "evasiva": "Narrar la repetición."
          },
          {
            "pregunta": "¿Por qué eligieron esa respuesta la segunda vez?",
            "buscamos": "Criterio.",
            "evasiva": "Enumerar acciones."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 6,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "55",
    "proyecto": "HogarFix",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Melina Oriana Galuszka",
        "doc": "592867",
        "estado": "Puede defender"
      },
      {
        "nombre": "Juan Manuel Garcia",
        "doc": "623263",
        "estado": "Puede defender"
      },
      {
        "nombre": "Cintia Jimenez",
        "doc": "638620",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1HyJl55L4muvwWAXKwWOrGsfRCxrq0zRj/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El proyecto tiene coherencia estratégica y base conceptual sólida, pero la implementación real (WordPress/WooCommerce básico) no demuestra operativamente los diferenciales clave declarados: verificación de profesionales, pagos protegidos y garantía del servicio.",
      "queEs": "Marketplace de servicios para el hogar (plomería, electricidad, gas, limpieza) con profesionales verificados, precios transparentes y pagos protegidos, apuntando a grandes urbes argentinas.",
      "fortalezas": [
        "Análisis estratégico completo (FODA, PESTEL, TAM/SAM/SOM) con coherencia interna entre sí.",
        "Gestión documentada de dos crisis reales (ERR-504 LCP y saturación de soporte) con resoluciones concretas.",
        "Customer Journey de 5 etapas con KPIs diferenciados por dimensión (negocio, experiencia, operaciones)."
      ],
      "interrogar": [
        "El diferencial central es 'verificación de profesionales', pero el sitio live (pantheonsite.io) muestra productos WooCommerce estándar tipo catálogo; ¿cómo funciona operativamente esa verificación?",
        "Se declara 'garantía del servicio' y 'pagos protegidos' como diferenciales, pero no hay descripción de ningún mecanismo técnico u operativo concreto que los sustente en el MVP.",
        "Los KPIs del primer año (3.000 visitas orgánicas, CTR >5%, conversión 2,5%) se presentan sin justificación numérica ni benchmark comparativo que los valide."
      ],
      "dondeApretar": "Presionar la brecha entre los diferenciales declarados (verificación, garantía, pagos protegidos) y lo efectivamente implementado en el MVP, para evaluar si el equipo comprende qué falta construir y cómo."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué arrancar por Buenos Aires, Córdoba y Rosario?",
            "buscamos": "Criterio de elección.",
            "evasiva": "Nombrar ciudades."
          },
          {
            "pregunta": "¿Por qué la verificación de profesionales como diferencial central?",
            "buscamos": "Problema que resuelve frente a grupos de Facebook o Mercado Libre.",
            "evasiva": "Repetir el diferencial."
          },
          {
            "pregunta": "¿Por qué un modelo de comisión por transacción?",
            "buscamos": "Lógica de ingresos.",
            "evasiva": "Describir el modelo."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué reemplazaron el video de la home por imágenes estáticas y no otra alternativa?",
            "buscamos": "Criterio bajo presión.",
            "evasiva": "Narrar el cambio."
          },
          {
            "pregunta": "¿Por qué fijaron que el 40% de las consultas se resuelva sin intervención?",
            "buscamos": "Lógica operativa.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué una estructura de catálogo para un marketplace de servicios?",
            "buscamos": "Decisión de diseño.",
            "evasiva": "Describir el sitio."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué WordPress/WooCommerce para un marketplace?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué declararon pagos protegidos y garantía sin mecanismo en el MVP?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "Repetir la promesa."
          },
          {
            "pregunta": "¿Por qué presentan el sitio como productivo si la URL es de desarrollo?",
            "buscamos": "Que expliquen.",
            "evasiva": "Minimizar."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué 3.000 visitas orgánicas, CTR >5% y conversión 2,5%?",
            "buscamos": "Referencias.",
            "evasiva": "Repetir metas."
          },
          {
            "pregunta": "¿Por qué no precisaron la comisión en pesos?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Por qué priorizar SEO orgánico?",
            "buscamos": "Lógica de adquisición.",
            "evasiva": "Teoría de SEO."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la saturación de soporte, ¿por qué eligieron esa respuesta?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué creen que un error menor generó miles de tickets?",
            "buscamos": "Decisión que lo explica.",
            "evasiva": "Describir el error."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 8.5,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "56",
    "proyecto": "Modo Piloto",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Lizeth Lilian Tancara Sirpa",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/12nqzP7hPI3Qqm6xSaSsPhL1Dtm3fJufI/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Consistencia interna sólida, gestión de crisis con metodología documentada y trazabilidad de decisiones, aunque sin validación con clientes reales.",
      "queEs": "Consultoría de automatización omnicanal para vendedores medianos de Mercado Libre, modelo retainer, complejidad técnica invisible para el cliente.",
      "fortalezas": [
        "Gestión de dos crisis simuladas con herramientas diferenciadas: 5 Porqués para ERR-418, Ishikawa para ERR-419.",
        "Arquitectura técnica en dos capas separadas (sitio web vs. producto), con justificación explícita de cada componente elegido.",
        "Evolución documentada del proyecto: cambios de nombre, plataforma, calculadora y contratos, cada uno con su justificación."
      ],
      "interrogar": [
        "El SOM suma USD 24.000 en retainers más USD 38.200 en implementaciones pero el total declarado es USD 59.000, no USD 62.200 como se indica un párrafo después.",
        "La infraestructura del producto (n8n, PostgreSQL, Retool, VPS) figura como 'prevista para lanzamiento comercial', no implementada; el tribunal puede preguntar qué se probó realmente.",
        "El LTV proyectado asume retención de 12 meses a USD 400, pero el rango de retainer declarado es USD 400-900: no se explica por qué el escenario base usa el piso."
      ],
      "dondeApretar": "Exigir que distingan con precisión qué está implementado y qué es diseño conceptual, y que defiendan la aritmética financiera inconsistente del SOM."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron vendedores medianos de Mercado Libre como cliente?",
            "buscamos": "Problema específico que resuelven.",
            "evasiva": "Describir al cliente."
          },
          {
            "pregunta": "¿Por qué un modelo retainer más implementación?",
            "buscamos": "Lógica de ingresos.",
            "evasiva": "Describir los servicios."
          },
          {
            "pregunta": "¿Por qué proyectaron con USD 400, el piso del rango de retainer?",
            "buscamos": "Criterio de prudencia.",
            "evasiva": "Repetir el número."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué la 'complejidad técnica invisible para el cliente' como propuesta?",
            "buscamos": "Vínculo con el perfil del vendedor.",
            "evasiva": "Repetir el lema."
          },
          {
            "pregunta": "¿Por qué incluyeron una calculadora en el sitio?",
            "buscamos": "Rol en la conversión.",
            "evasiva": "Describirla."
          },
          {
            "pregunta": "¿Por qué cambiaron de plataforma y de contratos durante el proyecto?",
            "buscamos": "Razones de cada cambio.",
            "evasiva": "Enumerar cambios."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron n8n, PostgreSQL, Retool y un VPS para el producto?",
            "buscamos": "Criterios de cada componente.",
            "evasiva": "Listarlos."
          },
          {
            "pregunta": "¿Por qué separaron el sitio web del producto en dos capas?",
            "buscamos": "Lógica técnica.",
            "evasiva": "Describir la arquitectura."
          },
          {
            "pregunta": "¿Por qué presentaron el sitio en entorno de desarrollo?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "'No llegamos'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué el SOM total no coincide con la suma de sus partes?",
            "buscamos": "Que expliquen.",
            "evasiva": "Minimizar."
          },
          {
            "pregunta": "¿Por qué creen que un vendedor pagaría más que su gasto tecnológico actual?",
            "buscamos": "Argumento de valor.",
            "evasiva": "Repetir precios."
          },
          {
            "pregunta": "¿Por qué consideran sostenible el margen neto proyectado?",
            "buscamos": "Costos supuestos.",
            "evasiva": "Repetir el margen."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "¿Por qué usaron 5 Porqués para ERR-418 e Ishikawa para ERR-419?",
            "buscamos": "Criterio de elección de cada herramienta.",
            "evasiva": "Explicar las técnicas."
          },
          {
            "pregunta": "¿Por qué creen que ERR-418 mejoró su propuesta en lugar de debilitarla?",
            "buscamos": "Aprendizaje.",
            "evasiva": "Narrar el incidente."
          },
          {
            "pregunta": "¿Por qué el cambio de nombre no se detectó antes?",
            "buscamos": "Decisión de proceso.",
            "evasiva": "Contar el cambio."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "58",
    "proyecto": "Venika Jewerly",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Gabriel Oliva",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1uryc8y86hoNSZGQ9yLG0Ep4VscdseTNL/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El TFI sostiene coherencia interna entre propuesta de valor, decisiones técnicas, KPIs y gestión de crisis, con autocrítica metodológica explícita sobre lo validado vs. proyectado.",
      "queEs": "E-commerce B2C de joyería en acero 316L con PVD; diferencial declarado: inalterabilidad demostrable con evidencia técnica, no solo prometida.",
      "fortalezas": [
        "Gestión de crisis documentada con 5 Whys, impacto cuantificado y plan en tres capas para ambos incidentes.",
        "Distinción honesta entre lo validado (sitio funcional, KPIs de lanzamiento) y lo proyectado (SOM años 2–3).",
        "Modelo financiero ajustado post-crisis con márgenes explícitos: 65% bruto, ROI 500–550%, punto de equilibrio ~475 uds."
      ],
      "interrogar": [
        "El dominio productivo declarado es 'venikajewelry.com.ar' pero el proyecto se llama 'Venika Jewerly' (con 'y'): ¿cuál es el nombre registrado en INPI?",
        "La ERR-501 afirma umbrales verificados a 48 hs (conversión ≥1,5%, rebote ≤50%) pero el sitio está en Pantheon/dev, no en producción real: ¿cómo se midieron esos umbrales?",
        "La duplicación del SOM año 1→2→3 se apoya en recompra ≥15%, pero ese dato aún no existe operativamente; ¿qué benchmark de mercado sustenta ese supuesto?"
      ],
      "dondeApretar": "Presionar la brecha entre evidencia real disponible y métricas declaradas como alcanzadas, dado que el sitio opera en entorno de desarrollo y no hay datos reales de conversión ni recompra."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué diferenciarse por la durabilidad del acero 316L con PVD y no por precio o diseño?",
            "buscamos": "Lógica frente al público.",
            "evasiva": "Describir el material."
          },
          {
            "pregunta": "¿Por qué arrancar con una porción chica del mercado el primer año?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué apostar a la recompra desde el tercer mes?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir el supuesto."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué diseñar todo a no más de dos clics de la home?",
            "buscamos": "Problema de experiencia que resuelve.",
            "evasiva": "Describir la navegación."
          },
          {
            "pregunta": "¿Por qué presentar evidencia técnica de inalterabilidad?",
            "buscamos": "Rol en la confianza.",
            "evasiva": "Describir la evidencia."
          },
          {
            "pregunta": "¿Por qué el tablero muestra metas alcanzadas sin tráfico real?",
            "buscamos": "Que expliquen.",
            "evasiva": "Repetir los KPIs."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué WordPress con WooCommerce y no Tiendanube o Shopify?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué Hostinger en el documento y Pantheon en el sitio?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué eligieron esos umbrales de 48 h para evaluar la recuperación?",
            "buscamos": "Lógica del plazo.",
            "evasiva": "Repetir umbrales."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué proyectan duplicar ventas cada año durante tres años?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir la proyección."
          },
          {
            "pregunta": "¿Por qué consideran sólido el modelo después del ajuste de costos?",
            "buscamos": "Argumentos.",
            "evasiva": "Repetir márgenes."
          },
          {
            "pregunta": "¿Por qué una recompra ≥15% como base?",
            "buscamos": "Referencia.",
            "evasiva": "Repetir el número."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "¿Por qué decidieron trabajar con al menos dos proveedores homologados, y no uno o tres?",
            "buscamos": "Criterio de riesgo y costo.",
            "evasiva": "Repetir la política."
          },
          {
            "pregunta": "Cuando el sitio se cayó, ¿por qué se repartieron así las tareas?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          },
          {
            "pregunta": "¿Por qué eligieron los 5 Whys y un plan en tres capas?",
            "buscamos": "Para qué servía.",
            "evasiva": "Explicar la técnica."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "62",
    "proyecto": "Coty John",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Brenda Alejandra Perez",
        "doc": "",
        "estado": "Puede defender"
      },
      {
        "nombre": "Micaela Salomon",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/13CRpET_20HTqTmex-DDFgufvHL4a_g3j/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo muestra análisis estratégico correcto pero la implementación técnica es declarativa sin evidencia verificable de funcionamiento real.",
      "queEs": "E-commerce para emprendimiento de cotillón sanjuanino; diferencial: kits listos para eventos frente a competidores que venden productos sueltos.",
      "fortalezas": [
        "Análisis FODA y PESTEL coherentes con el contexto económico argentino y el rubro estacional.",
        "Buyer Persona detallado (Laura Gómez) consistente con la estrategia de kits y canales elegidos.",
        "Identificación y respuesta a dos crisis concretas: presión competitiva de precios y falla en GA4."
      ],
      "interrogar": [
        "La URL del sitio funcional figura como enlace vacío 'COTY JOHN TODO PARA TU FIESTA' sin URL real: ¿el sitio existe o solo es prototipo?",
        "Se declara WordPress + WooCommerce en Pantheon pero no hay capturas, métricas reales ni evidencia de configuración; brecha total entre lo planificado y lo demostrado.",
        "Los KPIs listados (tráfico, conversión, ticket, recompra) no tienen valores base ni metas numéricas; el TAM/SAM/SOM tampoco incluye cifras concretas."
      ],
      "dondeApretar": "Presionar sobre la brecha entre diseño declarado e implementación real: qué funciona efectivamente, qué se midió y con qué resultados."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron kits listos para eventos como diferencial?",
            "buscamos": "Lógica frente a competidores de productos sueltos.",
            "evasiva": "Describir los kits."
          },
          {
            "pregunta": "¿Por qué tomaron decisiones de producto y precio sin cifras de mercado?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Describir el mercado."
          },
          {
            "pregunta": "¿Por qué eligieron a Laura Gómez como buyer persona?",
            "buscamos": "Criterio.",
            "evasiva": "Describir a Laura."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué diseñar un e-commerce con carrito si Laura compra por WhatsApp?",
            "buscamos": "Que concilien canal y cliente.",
            "evasiva": "Describir el sitio."
          },
          {
            "pregunta": "¿Por qué incluir una sección de promociones estacionales?",
            "buscamos": "Lógica del rubro estacional.",
            "evasiva": "Describir la sección."
          },
          {
            "pregunta": "¿Por qué priorizar el celular en la experiencia?",
            "buscamos": "Vínculo con el cliente.",
            "evasiva": "Repetir el dato."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué WordPress en Pantheon y no WordPress.com gratuito?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué no hicieron pruebas completas antes del lanzamiento?",
            "buscamos": "Decisión de proceso.",
            "evasiva": "Narrar la crisis de GA4."
          },
          {
            "pregunta": "¿Por qué los anexos quedaron sin evidencia del sitio?",
            "buscamos": "Que expliquen.",
            "evasiva": "Minimizar."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué no fijaron metas numéricas a los KPIs?",
            "buscamos": "Que expliquen.",
            "evasiva": "Listar KPIs."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público sanjuanino.",
            "evasiva": "Enumerar canales."
          },
          {
            "pregunta": "¿Por qué no analizaron márgenes al definir precios?",
            "buscamos": "Que expliquen o reconozcan.",
            "evasiva": "Hablar de valor."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Frente a competidores más baratos, ¿por qué descartaron el precio como palanca?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir la estrategia."
          },
          {
            "pregunta": "Cuando el grupo pasó de cuatro a dos integrantes, ¿por qué priorizaron lo que priorizaron?",
            "buscamos": "Lógica de la reorganización.",
            "evasiva": "Lamentar la situación."
          },
          {
            "pregunta": "¿Por qué eligieron esa respuesta en la crisis de GA4?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          }
        ]
      }
    ],
    "nota": 6,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "63",
    "proyecto": "SastreCo",
    "nivel": "Regular",
    "integrantes": [
      {
        "nombre": "Lucía Mena",
        "doc": "",
        "estado": "Puede defender"
      },
      {
        "nombre": "Asdrubal Valera",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/19cfabuHhgn-WTLpQ6yfD0g9syeB5sOg5/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo tiene estructura completa pero presenta brechas significativas entre proyecciones financieras no respaldadas, un SOM inconsistente entre el cuerpo y los anexos, y escasa evidencia de implementación real más allá de capturas.",
      "queEs": "Ecommerce de muebles y decoración para el hogar en Argentina, diferenciado por asesoría técnica online y trazabilidad de materiales.",
      "fortalezas": [
        "Análisis estratégico coherente: FODA, PESTEL y TAM/SAM/SOM articulados con la propuesta de valor.",
        "Buyer persona y customer journey concretos, con friccciones identificadas y decisiones UX/UI trazables al documento.",
        "Gestión de dos crisis simuladas documentadas en Miro con responsables, fechas y KPIs de umbral definidos."
      ],
      "interrogar": [
        "Inconsistencia en SOM: el cuerpo dice 2.611 clientes (0,2% del SAM), pero el anexo Miro muestra 9.141 clientes potenciales sin explicación.",
        "Proyecciones financieras sin soporte: se declaran ingresos de $70.497.000 con inversión de $50.000.000 y ROI 42%, pero no hay datos reales de proveedores según el propio anexo.",
        "Brecha declarado/implementado: el diferencial central es la asesoría técnica online, pero el sitio funcional solo muestra un botón de WhatsApp; no hay sistema de asesoría implementado."
      ],
      "dondeApretar": "Cuestionar la viabilidad real del diferencial de asesoría online y la solidez de las proyecciones financieras, que son el núcleo de la propuesta de valor y la factibilidad económica."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué eligieron la asesoría técnica online y la trazabilidad de materiales como diferenciales?",
            "buscamos": "Lógica frente a la competencia en muebles.",
            "evasiva": "Repetir los diferenciales."
          },
          {
            "pregunta": "¿Por qué quedaron dos SOM distintos (2.611 y 9.141)?",
            "buscamos": "Origen y cuál defienden.",
            "evasiva": "Elegir uno."
          },
          {
            "pregunta": "¿Por qué un único buyer persona masculino para un segmento mixto?",
            "buscamos": "Criterio.",
            "evasiva": "Describir a Pedro."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué la asesoría se resolvió con un botón de WhatsApp?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "Describir el botón."
          },
          {
            "pregunta": "¿Por qué priorizaron esas fricciones del customer journey?",
            "buscamos": "Criterio.",
            "evasiva": "Releer el journey."
          },
          {
            "pregunta": "¿Por qué eligieron esa estructura de catálogo?",
            "buscamos": "Vínculo con el comprador.",
            "evasiva": "Describir el catálogo."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué WordPress/WooCommerce sobre Shopify y Tienda Nube, más allá de costo y personalización?",
            "buscamos": "Criterios concretos y qué sacrificaron.",
            "evasiva": "'Shopify es caro'."
          },
          {
            "pregunta": "¿Por qué lanzaron la campaña sin verificar el cupón?",
            "buscamos": "Decisión de proceso.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué eligieron Miro para gestionar las crisis?",
            "buscamos": "Para qué les sirvió.",
            "evasiva": "Nombrar la herramienta."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué proyectan ingresos del primer año por debajo de la inversión?",
            "buscamos": "Lógica de inversión.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué confían en el ROI de 42% sin datos de proveedores?",
            "buscamos": "Que expliquen.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Enumerar canales."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del cupón, ¿por qué eligieron esa respuesta con los clientes?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué definieron esos umbrales en los KPIs de crisis?",
            "buscamos": "Lógica.",
            "evasiva": "Repetir umbrales."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "65",
    "proyecto": "Yerba Mate María Epul",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Natalia Soledad Aravena",
        "doc": "414618",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1jEIxQzJcDdZgftVBulCVfjfngVPhwI3q/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "El trabajo integra análisis estratégico, implementación técnica real, gestión de crisis documentada y reflexión crítica con consistencia interna notable para una tecnicatura.",
      "queEs": "E-commerce de yerba mate compuesta inspirado en saberes mapuche, posicionado en nicho premium por identidad cultural, storytelling y sustentabilidad, operando en WordPress/WooCommerce.",
      "fortalezas": [
        "Sitio funcional real desplegado en Pantheon con URL verificable y stack técnico detallado (plugins, hosting, SSL, backups).",
        "Dos crisis simuladas con tickets, métricas de impacto concretas y protocolos de mitigación documentados.",
        "Fichas de producto con advertencias sanitarias explícitas, alineadas con regulación ANMAT sin atribuir propiedades medicinales."
      ],
      "interrogar": [
        "El documento describe canal físico como fuera de alcance inicial, pero el plan de lanzamiento del 1° semestre incluye posicionamiento en dietéticas y delicatessen: ¿cuál es el alcance real?",
        "La integración de Mercado Pago y PayPal se declara fallida sin resolución; Braintree figura como alternativa pero no se acredita que procese pagos en producción: ¿el checkout funciona efectivamente?",
        "El SOM proyecta capturar 1% del SAM al tercer año (≈$1.304.100.000 ARS), pero los KPIs apuntan solo a 2.000 usuarios únicos mensuales en el mes 3: la brecha entre ambas metas no está reconciliada."
      ],
      "dondeApretar": "Presionar sobre la coherencia entre las metas financieras del TAM/SAM/SOM, los KPIs digitales declarados y la operatividad real del checkout, que es el cuello de botella no resuelto del proyecto."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué construir la marca sobre saberes mapuche y storytelling cultural?",
            "buscamos": "Lógica de posicionamiento premium.",
            "evasiva": "Describir la marca."
          },
          {
            "pregunta": "¿Por qué el plan incluye dietéticas y delicatessen si el canal físico estaba fuera de alcance?",
            "buscamos": "Que expliquen.",
            "evasiva": "Describir el plan."
          },
          {
            "pregunta": "¿Por qué creen que ese posicionamiento justifica el precio frente a marcas conocidas?",
            "buscamos": "Argumento de valor.",
            "evasiva": "Repetir el diferencial."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué incluir advertencias sanitarias explícitas en las fichas?",
            "buscamos": "Criterio regulatorio y de confianza.",
            "evasiva": "Describir las fichas."
          },
          {
            "pregunta": "¿Por qué priorizaron el storytelling en la experiencia?",
            "buscamos": "Vínculo con el comprador.",
            "evasiva": "Describir secciones."
          },
          {
            "pregunta": "¿Por qué eligieron esas medidas para la velocidad en datos móviles?",
            "buscamos": "Criterio.",
            "evasiva": "Enumerar optimizaciones."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué Braintree como alternativa cuando fallaron Mercado Pago y PayPal?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar el fallo."
          },
          {
            "pregunta": "¿Por qué eligieron WordPress/WooCommerce en Pantheon?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          },
          {
            "pregunta": "¿Por qué dejaron el checkout como pendiente operativo?",
            "buscamos": "Decisión y riesgo.",
            "evasiva": "Minimizar."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué aceptaron un ROI negativo en el año 1?",
            "buscamos": "Lógica de inversión.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué proyectan el 1% del SAM al tercer año con KPIs iniciales tan modestos?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué el marketing es el gasto principal?",
            "buscamos": "Criterio.",
            "evasiva": "Dar montos."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis de velocidad, ¿por qué eligieron esa respuesta?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué modelaron una crisis de filtración de datos que no ocurrió?",
            "buscamos": "Valor del ejercicio.",
            "evasiva": "Describirla."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "68",
    "proyecto": "Red Pink",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "Micaela Ivonne Fariña Polichiso",
        "doc": "",
        "estado": "Puede defender"
      },
      {
        "nombre": "Carmen Ivonne Polichiso",
        "doc": "",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/1Kot0I66kX8V-lVX57Y8wJYB1lHPvFKDQ/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Alta consistencia interna entre estrategia, implementación y análisis de crisis, con fundamentación cuantificada y autocrítica documentada.",
      "queEs": "Marketplace que conecta mujeres técnicas verificadas con clientes en CABA/GBA, diferencial: género + identidad validada + reputación atada a transacciones reales.",
      "fortalezas": [
        "Simulacros de crisis con causas raíz, métricas de impacto y criterios de resolución explícitos (ERR-507 y ERR-411).",
        "Decisiones UX/UI justificadas estratégicamente y contrastadas contra lo planificado en entregables previos.",
        "Modelo económico con punto de equilibrio (678), meta (950) y margen de seguridad del 40% explicitados."
      ],
      "interrogar": [
        "SAM calculado sobre 35% del TAM geográfico sin citar fuente: ¿de dónde sale ese 35% de actividad económica concentrada en CABA/GBA?",
        "Se declara tasa de conversión del 2,5% como meta validable, pero el sitio beta no tiene pagos integrados: ¿qué convierte exactamente — formulario de contacto o reserva efectiva?",
        "ERR-411 simula churn del 18% en mes 3 con 950 suscriptoras activas previas, pero la beta no llegó a esa escala: ¿en qué datos reales se basa el escenario del incidente?"
      ],
      "dondeApretar": "Presionar la viabilidad del modelo de ingresos en ausencia de pagos integrados: sin cobro interno, el diferencial de retención declarado no existe en la beta real."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué un marketplace solo de mujeres técnicas verificadas?",
            "buscamos": "Problema que resuelve para clientas y prestadoras.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Por qué tomaron el 35% del TAM para el SAM?",
            "buscamos": "Fuente o razonamiento.",
            "evasiva": "Repetir el porcentaje."
          },
          {
            "pregunta": "¿Por qué atar la reputación a transacciones reales?",
            "buscamos": "Lógica de confianza.",
            "evasiva": "Describir el sistema."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué ubicaron el acceso para prestadoras en el footer y no en el header?",
            "buscamos": "Criterio y riesgo.",
            "evasiva": "Describir el sitio."
          },
          {
            "pregunta": "¿Por qué cambiaron decisiones respecto de entregables previos?",
            "buscamos": "Razón de los cambios.",
            "evasiva": "Enumerarlos."
          },
          {
            "pregunta": "¿Por qué la verificación de identidad es manual en la beta?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "Describir el proceso."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué la beta no tiene pagos integrados?",
            "buscamos": "Priorización.",
            "evasiva": "'No llegamos'."
          },
          {
            "pregunta": "¿Por qué el checklist de go-live verificaba solo estabilidad funcional?",
            "buscamos": "Decisión que lo explica.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué eligieron esa plataforma para un marketplace?",
            "buscamos": "Criterios.",
            "evasiva": "'Lo pedía la consigna'."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué dividieron el presupuesto en partes iguales entre Meta y Google sin canal orgánico?",
            "buscamos": "Criterio.",
            "evasiva": "Repetir montos."
          },
          {
            "pregunta": "¿Por qué fijaron la conversión del 2,5% como meta?",
            "buscamos": "Referencia y qué mide.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Por qué un margen de seguridad del 40% entre equilibrio y meta?",
            "buscamos": "Lógica.",
            "evasiva": "Repetir cifras."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En ERR-507, ¿por qué eligieron esa respuesta?",
            "buscamos": "Criterio.",
            "evasiva": "Narrar la crisis."
          },
          {
            "pregunta": "¿Por qué construyeron ERR-411 con 950 suscriptoras si la beta no llegó a esa escala?",
            "buscamos": "Lógica del escenario.",
            "evasiva": "Describir el escenario."
          },
          {
            "pregunta": "¿Por qué no definieron un umbral para automatizar la verificación?",
            "buscamos": "Que expliquen.",
            "evasiva": "Repetir el problema."
          }
        ]
      }
    ],
    "nota": 6,
    "notaFuente": "Entrega Final"
  },
  {
    "id": "73",
    "proyecto": "Quedá Bien",
    "nivel": "Muy Bueno",
    "integrantes": [
      {
        "nombre": "German Ariel Leicker",
        "doc": "641816",
        "estado": "Puede defender"
      },
      {
        "nombre": "Giorgina Lo Iacona",
        "doc": "632404",
        "estado": "Puede defender"
      }
    ],
    "tribunal": [],
    "linkTrabajo": "https://drive.google.com/file/d/14YZvik0zMxMrFQ2F9-DEs0yGOaLb0U6L/preview",
    "linkPreguntas": null,
    "informe": {
      "resumen": "Presenta coherencia estratégica-técnica sólida, fundamentación cruzada entre FODA/PESTEL/financiero y evidencias reales de implementación en WordPress/Pantheon.",
      "queEs": "Q-Commerce de regalería express desde dark store en Parque Patricios, con entrega en menos de 120 minutos y catálogo curado por ocasión.",
      "fortalezas": [
        "Financiero robusto: punto de equilibrio calculado (59 pedidos), margen bruto 55%, payback 1,89 meses y ROI 634,2% documentados.",
        "Infraestructura técnica real demostrada: Pantheon, WordPress+WooCommerce, Mercado Pago sandbox y JSON-LD validado con DevTools.",
        "FODA cruzado operativo: cada cuadrante vincula variable interna con acción concreta, evitando la enumeración vacía."
      ],
      "interrogar": [
        "ROI 634,2% con payback 57 días resulta extraordinario para Argentina inflacionaria; ¿qué supuestos de tipo de cambio y precios de proveedores lo sostienen?",
        "Uber Direct se declara integrado vía API pero en sandbox se simuló manualmente con tarifas fijas en WooCommerce: ¿existe algún webhook real probado?",
        "SOM proyecta 1.200–3.600 clientes anuales pero el modelo financiero usa 1.440 pedidos/año a $80.000 ticket: ¿pedido = cliente único o incluye recompra?"
      ],
      "dondeApretar": "Exigir que justifiquen los supuestos financieros optimistas y la brecha entre logística 'integrada' declarada y la simulación manual realmente ejecutada."
    },
    "bloques": [
      {
        "titulo": "A. Por qué: mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Por qué un modelo Q-Commerce de regalería express?",
            "buscamos": "Necesidad del cliente que resuelve.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Por qué una dark store en Parque Patricios?",
            "buscamos": "Criterio de ubicación.",
            "evasiva": "Nombrar el barrio."
          },
          {
            "pregunta": "¿Por qué el modelo financiero usa una base mucho menor que el SOM?",
            "buscamos": "Criterio de prudencia.",
            "evasiva": "Repetir cifras."
          }
        ]
      },
      {
        "titulo": "B. Por qué: diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Por qué organizar el catálogo por ocasión de regalo y no por precio o categoría?",
            "buscamos": "Efecto esperado en la decisión.",
            "evasiva": "Describir el catálogo."
          },
          {
            "pregunta": "¿Por qué mostrar 90 minutos al cliente si el objetivo interno es 120?",
            "buscamos": "Criterio y riesgo.",
            "evasiva": "Minimizar."
          },
          {
            "pregunta": "¿Por qué rojo y amarillo como colores principales?",
            "buscamos": "Vínculo con producto y cliente.",
            "evasiva": "Teoría del color."
          }
        ]
      },
      {
        "titulo": "C. Por qué: decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Por qué simular Uber Direct con tarifas fijas en lugar de integrarlo?",
            "buscamos": "Priorización del alcance.",
            "evasiva": "Describir la simulación."
          },
          {
            "pregunta": "¿Por qué Mercado Pago en sandbox?",
            "buscamos": "Criterio.",
            "evasiva": "Describir la integración."
          },
          {
            "pregunta": "¿Por qué validaron el JSON-LD?",
            "buscamos": "Para qué servía.",
            "evasiva": "Explicar qué es."
          }
        ]
      },
      {
        "titulo": "D. Por qué: marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Por qué confían en un ROI de 634,2% en el contexto argentino?",
            "buscamos": "Supuestos.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Por qué tratan pedidos como equivalentes a clientes en el modelo?",
            "buscamos": "Que expliquen.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Por qué eligieron esos canales de marketing?",
            "buscamos": "Vínculo con el público.",
            "evasiva": "Enumerar canales."
          }
        ]
      },
      {
        "titulo": "E. Por qué: respuesta a las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la guerra de precios, ¿por qué bundling y no bajar precios?",
            "buscamos": "Criterio de posicionamiento y margen.",
            "evasiva": "Describir los bundles."
          },
          {
            "pregunta": "¿Por qué hostearon en un sandbox que se cayó por tráfico?",
            "buscamos": "Decisión de alcance.",
            "evasiva": "Narrar la caída."
          },
          {
            "pregunta": "¿Por qué se organizaron así como equipo?",
            "buscamos": "Justificación.",
            "evasiva": "'Entre todos'."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  }
];
