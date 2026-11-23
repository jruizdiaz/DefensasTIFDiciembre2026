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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Eligieron no competir por precio y diferenciarse por transparencia de ingredientes. ¿Qué hicieron concretamente en el catálogo y en las fichas para que eso se vea? Muéstrenlo en el sitio.",
            "buscamos": "Que señalen elementos concretos ya publicados (listado de ingredientes, contenido educativo, textos de ficha) y dónde están.",
            "evasiva": "Explicar por qué la transparencia es valorada por el cliente sin mostrar qué implementaron."
          },
          {
            "pregunta": "¿Qué pasos siguieron para llegar del TAM de $2.252B al SOM de $27M? Recorran el cálculo.",
            "buscamos": "Que reconstruyan la secuencia de recortes, las fuentes que consultaron y quién hizo el cálculo.",
            "evasiva": "Decir que los números son razonables sin poder rehacer el procedimiento."
          },
          {
            "pregunta": "Fijaron 150 ventas mensuales como escenario base con un equilibrio de 80. ¿Qué datos tomaron y qué cuenta hicieron para fijar ese número?",
            "buscamos": "Que describan los insumos (tráfico, conversión, ticket) y el cálculo concreto que usaron.",
            "evasiva": "Responder que es un número alcanzable sin explicar cómo lo obtuvieron."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Declararon un enfoque mobile-first. ¿Qué cambios concretos hicieron en el sitio para el celular (menú, botones, checkout, imágenes)?",
            "buscamos": "Que nombren ajustes puntuales hechos y los muestren en vista móvil.",
            "evasiva": "Decir que el template es responsive y nada más."
          },
          {
            "pregunta": "En el checkout aparece 'pago online seguro' aunque la pasarela quedó fuera de alcance. ¿Qué medio de pago dejaron habilitado y qué hicieron con ese mensaje?",
            "buscamos": "Que describan con precisión cómo se completa hoy una compra y qué decidieron mostrar al cliente.",
            "evasiva": "Hablar de la pasarela a futuro sin decir qué está configurado hoy."
          },
          {
            "pregunta": "¿Qué contenido educativo publicaron efectivamente en el blog y cómo lo enlazaron con los productos?",
            "buscamos": "Que muestren artículos concretos y los vínculos con las fichas.",
            "evasiva": "Describir el plan de contenidos (dos artículos por mes) en lugar de lo publicado."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Recórrannos el panel de WordPress: ¿qué plugins instalaron y qué configuraron en WooCommerce (envíos, impuestos, pagos)?",
            "buscamos": "Un recorrido concreto de lo configurado y quién lo hizo.",
            "evasiva": "Enumerar plugins genéricos sin mostrar su configuración."
          },
          {
            "pregunta": "El cupón BIENVENIDA10, el email automatizado y la recuperación de carrito quedaron en el Anexo 4. ¿Qué dejaron funcionando al momento de la entrega y qué no?",
            "buscamos": "Que distingan con claridad lo implementado de lo planificado.",
            "evasiva": "Presentar las acciones futuras como si estuvieran activas."
          },
          {
            "pregunta": "¿Qué hicieron en SEO on-page: qué ajustaron en títulos, descripciones, slugs o imágenes?",
            "buscamos": "Ejemplos concretos de ajustes realizados en páginas o productos.",
            "evasiva": "Explicar la importancia del SEO sin ejemplos propios."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Asignaron el 60% del presupuesto de marketing a Google y Meta. ¿Qué campañas armaron: objetivo, público y piezas?",
            "buscamos": "Que describan las campañas definidas con detalle operativo.",
            "evasiva": "Justificar la elección de canales sin decir qué campañas diseñaron."
          },
          {
            "pregunta": "¿Cómo calcularon el ROI del 98%? Muéstrennos las cifras que usaron (inversión de $2.900.000, ingresos, margen).",
            "buscamos": "Que reconstruyan la cuenta y reconozcan si no cierra.",
            "evasiva": "Repetir el porcentaje sin poder mostrar el cálculo."
          },
          {
            "pregunta": "¿Qué KPIs dejaron configurados para medir y con qué herramienta los relevan?",
            "buscamos": "Indicadores concretos y la herramienta o reporte donde se ven.",
            "evasiva": "Listar KPIs teóricos sin decir cómo los miden."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis de sobreventa, ¿qué hicieron primero, qué después y qué cambiaron en la gestión de stock?",
            "buscamos": "Una secuencia de acciones concretas y el cambio que quedó incorporado.",
            "evasiva": "Hablar de aprendizajes generales sin acciones."
          },
          {
            "pregunta": "Ante el fraude ERR-508, ¿qué medidas concretas aplicaron en el sitio o en el proceso de pedidos?",
            "buscamos": "Medidas específicas (validaciones, revisiones, bloqueos) y quién las ejecutó.",
            "evasiva": "Decir que 'reforzaron la seguridad' sin detalle."
          },
          {
            "pregunta": "¿Cómo se repartieron el trabajo en el equipo? Cada integrante: ¿qué parte del sitio o del documento hizo?",
            "buscamos": "Que cada integrante describa su aporte concreto.",
            "evasiva": "Respuestas grupales genéricas ('lo hicimos entre todos')."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Pasaron de un SOM de 28.000–56.000 clientes a una meta operativa de 300 ventas anuales. ¿Qué cálculo hicieron para fijar esas 300 ventas?",
            "buscamos": "Que reconstruyan cómo llegaron al número operativo (funnel, ticket, capacidad).",
            "evasiva": "Explicar que es una meta prudente sin decir cómo la calcularon."
          },
          {
            "pregunta": "Descartaron Shopify y Tienda Nube. ¿Qué compararon concretamente antes de elegir WordPress con Mercado Pago?",
            "buscamos": "Que describan la comparación hecha (costos, comisiones, funciones) y el resultado.",
            "evasiva": "Decir solo que las otras plataformas cobran comisión."
          },
          {
            "pregunta": "¿Qué pusieron en cada kit físico y cómo lo combinaron con el contenido digital en la oferta del sitio?",
            "buscamos": "Contenido concreto de los kits y cómo se entrega el contenido asociado.",
            "evasiva": "Describir la propuesta de bienestar integral en abstracto."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "El Customer Journey tiene 7 etapas. Elijan dos puntos de dolor y muéstrennos qué cambiaron en el sitio para cada uno.",
            "buscamos": "Dos ejemplos trazables: dolor detectado → cambio implementado en el sitio.",
            "evasiva": "Volver a explicar el mapa sin mostrar cambios."
          },
          {
            "pregunta": "¿Cómo integraron las clases grabadas de YouTube en el sitio y qué ve el usuario después de comprar?",
            "buscamos": "El recorrido concreto del usuario postcompra.",
            "evasiva": "Discutir ventajas de YouTube sin mostrar la integración."
          },
          {
            "pregunta": "¿Qué hicieron en el checkout para apuntar a un abandono ≤60%?",
            "buscamos": "Decisiones concretas de diseño del checkout (pasos, campos, medios de pago).",
            "evasiva": "Citar la meta sin decir qué hicieron para alcanzarla."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en Cloudflare y en qué momento del proyecto activaron el WAF?",
            "buscamos": "Configuración concreta y momento real de activación.",
            "evasiva": "Explicar qué es un WAF sin decir qué hicieron."
          },
          {
            "pregunta": "El sitio funciona en Pantheon y no en nuna.shop. ¿Qué pasos del pasaje a producción hicieron y cuáles quedaron pendientes?",
            "buscamos": "Un estado claro: hecho vs. pendiente.",
            "evasiva": "Presentar el dominio productivo como operativo."
          },
          {
            "pregunta": "¿Cómo configuraron Mercado Pago y qué compras de prueba hicieron?",
            "buscamos": "Configuración y pruebas realizadas con resultado.",
            "evasiva": "Hablar de la elección de Mercado Pago sin evidencia de prueba."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué datos usaron para calcular el CAC de $7.305?",
            "buscamos": "Los insumos concretos y la cuenta.",
            "evasiva": "Decir que es un benchmark sin poder reconstruirlo."
          },
          {
            "pregunta": "¿Qué acciones de pauta y contenido planificaron para llegar a 25 ventas por mes?",
            "buscamos": "Campañas o acciones concretas con canal y objetivo.",
            "evasiva": "Describir el funnel teórico."
          },
          {
            "pregunta": "Para el ROI de 8,7% del año 1, ¿qué costos fijos y variables incluyeron?",
            "buscamos": "Que enumeren los costos que entraron en el cálculo.",
            "evasiva": "Repetir el porcentaje sin desglose."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 1 (caída de conversión), ¿qué acciones concretas tomaron y en qué orden hasta estabilizarla por encima del 1%?",
            "buscamos": "Una secuencia de acciones con responsables.",
            "evasiva": "Explicar el criterio de cierre en lugar de lo que hicieron."
          },
          {
            "pregunta": "En el incidente de seguridad del lanzamiento, ¿qué hicieron en las primeras horas?",
            "buscamos": "Acciones inmediatas concretas (bloqueos, WAF, comunicación).",
            "evasiva": "Analizar las causas sin contar la respuesta."
          },
          {
            "pregunta": "¿Quién del equipo se encargó de cada crisis y cómo se coordinaron?",
            "buscamos": "Roles y forma de coordinación concretos.",
            "evasiva": "'Lo resolvimos entre todos'."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Definieron un SOM de 1.560 clientes. ¿Qué pasos siguieron para llegar a ese número desde los 520.000 del TAM?",
            "buscamos": "El procedimiento de recorte y las fuentes.",
            "evasiva": "Decir que el 1% es un criterio conservador sin más."
          },
          {
            "pregunta": "¿Qué productos y planes armaron en concreto: qué viandas, qué suscripciones y qué compras puntuales ofrece el sitio?",
            "buscamos": "La oferta tal como quedó cargada.",
            "evasiva": "Hablar de personalización en abstracto."
          },
          {
            "pregunta": "Se diferencian por personalización, practicidad y acompañamiento. ¿Qué hicieron en el sitio para que cada uno de esos tres se vea?",
            "buscamos": "Un elemento concreto por cada diferencial.",
            "evasiva": "Volver a enumerar los diferenciales."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Eligieron Montserrat SemiBold y verde como color principal. ¿Dónde y cómo aplicaron esas decisiones en el sitio publicado?",
            "buscamos": "Que muestren la aplicación concreta (títulos, CTAs, fondos).",
            "evasiva": "Explicar psicología del color sin mostrar el sitio."
          },
          {
            "pregunta": "¿Qué hicieron en el recorrido de compra para reducir el abandono del carrito?",
            "buscamos": "Decisiones concretas en carrito y checkout.",
            "evasiva": "Citar el KPI sin acciones."
          },
          {
            "pregunta": "¿Qué pasos le pide hoy el sitio a alguien que quiere suscribirse?",
            "buscamos": "El flujo real, paso a paso.",
            "evasiva": "Describir cómo debería funcionar."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué instalaron y configuraron en WordPress/WooCommerce sobre Pantheon para manejar suscripciones?",
            "buscamos": "Plugins y configuración concreta.",
            "evasiva": "Hablar de la plataforma en general."
          },
          {
            "pregunta": "¿Qué herramienta de medición dejaron instalada y qué eventos configuraron?",
            "buscamos": "Herramientas y eventos efectivamente configurados.",
            "evasiva": "Decir qué medirían en el futuro."
          },
          {
            "pregunta": "Ante la falla del Pixel de TikTok que no registraba el pago completado, ¿qué revisaron y qué cambiaron?",
            "buscamos": "Pasos de diagnóstico y corrección realizados.",
            "evasiva": "Explicar para qué sirve el pixel."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Afirman un punto de equilibrio 'estimado'. ¿Qué precios y costos usaron para estimarlo?",
            "buscamos": "Los datos concretos utilizados, o reconocer que no los tienen.",
            "evasiva": "Afirmar la viabilidad sin cifras."
          },
          {
            "pregunta": "¿Qué acciones de marketing ejecutaron o dejaron listas para el lanzamiento (piezas, campañas, publicaciones)?",
            "buscamos": "Acciones concretas y evidencia.",
            "evasiva": "Describir la estrategia de canales en general."
          },
          {
            "pregunta": "¿Qué KPIs eligieron y qué valor objetivo le pusieron a cada uno?",
            "buscamos": "Indicadores con metas numéricas.",
            "evasiva": "Listar KPIs sin metas."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando subieron los costos de logística de última milla, ¿qué decidieron hacer con precios, zonas o envíos?",
            "buscamos": "Una decisión concreta tomada.",
            "evasiva": "Analizar el contexto sin decisión."
          },
          {
            "pregunta": "En la crisis del Pixel de TikTok, ¿quién lo detectó y qué hizo el equipo en orden?",
            "buscamos": "Secuencia y responsables.",
            "evasiva": "Hablar de lo que aprendieron en general."
          },
          {
            "pregunta": "¿Cómo se repartieron el trabajo durante el proyecto? Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales concretos.",
            "evasiva": "'Trabajamos todos en todo'."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Convirtieron el requisito ANMAT en un trust badge. ¿Qué hicieron concretamente en el sitio para mostrar ese compliance?",
            "buscamos": "Elementos visibles en el sitio (sellos, textos, fichas) y dónde están.",
            "evasiva": "Explicar por qué ANMAT da confianza."
          },
          {
            "pregunta": "¿Qué pasos siguieron para fijar el SAM en 1 millón de personas y qué fuentes usaron?",
            "buscamos": "Procedimiento y fuentes concretas.",
            "evasiva": "Defender el número como razonable."
          },
          {
            "pregunta": "Fijaron un ticket promedio de $90.000. ¿Qué productos o combos armaron para llegar a ese ticket?",
            "buscamos": "Oferta concreta que sostiene el ticket.",
            "evasiva": "Hablar de posicionamiento premium."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "El requisito LCP < 2,5 s estaba escrito desde el inicio. ¿Qué hicieron en el sitio para cumplirlo antes del go-live?",
            "buscamos": "Acciones de optimización concretas, o reconocer que no se hicieron.",
            "evasiva": "Explicar qué es el LCP."
          },
          {
            "pregunta": "Después del go-live con LCP de 8 s y 80% de rebote, ¿qué cambios hicieron en el sitio?",
            "buscamos": "Cambios concretos implementados y resultado.",
            "evasiva": "Analizar las causas sin acciones."
          },
          {
            "pregunta": "¿Qué incluyeron en el diseño o el flujo para impulsar la recompra del 40% a 60 días?",
            "buscamos": "Mecanismos implementados (recordatorios, suscripción, emails).",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce sobre Pantheon y qué falta para considerar el sitio lanzado?",
            "buscamos": "Lista de lo hecho y lo pendiente.",
            "evasiva": "Presentar el entorno dev como productivo."
          },
          {
            "pregunta": "¿Qué medición dejaron instalada para obtener las métricas que reportan?",
            "buscamos": "Herramientas y eventos configurados.",
            "evasiva": "Citar métricas sin fuente."
          },
          {
            "pregunta": "¿Qué hicieron para auditar el contenido y que no prometa propiedades no autorizadas?",
            "buscamos": "Proceso concreto de revisión de textos.",
            "evasiva": "Hablar de la regulación en general."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo armaron el modelo financiero bottom-up desde el CAC de $33.000? Recórranlo.",
            "buscamos": "Secuencia del cálculo y fuentes del benchmark.",
            "evasiva": "Mencionar el LTV:CAC 8,2:1 sin reconstruirlo."
          },
          {
            "pregunta": "En el documento conviven 2.300 y 1.820 clientes para el año 3. ¿Qué hicieron para llegar a cada número y cuál usaron en el modelo?",
            "buscamos": "Que identifiquen de dónde salió cada cifra.",
            "evasiva": "Elegir uno sin explicar el origen."
          },
          {
            "pregunta": "¿Qué campañas pusieron en marcha en el lanzamiento y cómo distribuyeron la pauta?",
            "buscamos": "Campañas concretas con canales y montos.",
            "evasiva": "Hablar de autoridad científica en general."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando el CAC escaló a $165.000, ¿qué decisión tomaron en las primeras horas y quién la tomó?",
            "buscamos": "Acción concreta (pausa, ajuste de campañas) y responsable.",
            "evasiva": "Describir el impacto sin decir qué hicieron."
          },
          {
            "pregunta": "Aplicaron 5 Porqués a las crisis. ¿Cómo hicieron ese análisis en la práctica: quiénes participaron y qué concluyeron?",
            "buscamos": "El proceso real y la conclusión.",
            "evasiva": "Explicar qué es la técnica."
          },
          {
            "pregunta": "¿Qué umbrales definieron para reabrir y quién los controlaba?",
            "buscamos": "Umbrales concretos y responsable de control.",
            "evasiva": "Hablar de aprendizaje en general."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Construyeron el SOM bottom-up (5.000 sesiones, 1% de conversión, $22.500 de ticket). ¿De dónde sacaron cada uno de esos tres datos?",
            "buscamos": "Fuente o supuesto concreto de cada variable.",
            "evasiva": "Defender el método sin explicar los datos."
          },
          {
            "pregunta": "Calcularon el TAM solo con perros, pero venden snacks para gatos. ¿Qué hicieron con el segmento gatos en el cálculo y en el catálogo?",
            "buscamos": "Qué decisión tomaron sobre ese segmento.",
            "evasiva": "Decir que los perros son el mercado principal."
          },
          {
            "pregunta": "Trabajan con marca blanca. ¿Qué hicieron para elegir proveedor y qué acordaron con él?",
            "buscamos": "Acciones concretas de selección y acuerdo.",
            "evasiva": "Explicar ventajas del modelo de marca blanca."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "El checkout tiene tres pasos y muestra el envío en el primero. ¿Cómo lo configuraron? Muéstrennos el recorrido.",
            "buscamos": "Recorrido real del checkout y cómo lo lograron.",
            "evasiva": "Explicar por qué los costos ocultos generan abandono."
          },
          {
            "pregunta": "¿Cómo funciona hoy el Club Mimo en el sitio: qué ve y qué hace un cliente para sumarse?",
            "buscamos": "Funcionamiento concreto o reconocer que no está implementado.",
            "evasiva": "Describir el beneficio del club."
          },
          {
            "pregunta": "¿Qué hicieron en el diseño para transmitir la idea de boutique de nutrición animal?",
            "buscamos": "Elementos concretos (fotos, textos, paleta) en el sitio.",
            "evasiva": "Hablar del posicionamiento en general."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce para envíos y medios de pago?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "¿Cómo armaron el feed de Google Merchant y qué corrigieron cuando fue rechazado?",
            "buscamos": "Pasos de armado y corrección.",
            "evasiva": "Explicar el error 504 en abstracto."
          },
          {
            "pregunta": "¿Qué tareas hicieron para pasar del sitio dev a un dominio propio, y cuáles faltan?",
            "buscamos": "Hecho vs. pendiente.",
            "evasiva": "Presentar el entorno dev como definitivo."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Aparecen dos SOM: $13.500.000 y $81.120.000. ¿Qué cálculo hicieron para cada uno y cuál usan?",
            "buscamos": "Origen de cada cifra.",
            "evasiva": "Elegir uno sin explicar el otro."
          },
          {
            "pregunta": "¿Qué campañas de Meta y Google Shopping armaron (público, presupuesto, piezas)?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Hablar de canales en general."
          },
          {
            "pregunta": "¿Qué KPIs dejaron configurados y dónde los consultan?",
            "buscamos": "Indicadores y herramienta.",
            "evasiva": "Lista teórica."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Durante el quiebre de stock con 95 pedidos, ¿qué hicieron con los clientes y con los pedidos pendientes?",
            "buscamos": "Acciones concretas (comunicación, reembolsos, reprogramación).",
            "evasiva": "Analizar la causa sin acciones."
          },
          {
            "pregunta": "Las campañas de Meta siguieron corriendo durante el quiebre. ¿Qué hicieron con ellas cuando lo advirtieron?",
            "buscamos": "Qué decidieron y cuándo.",
            "evasiva": "Explicar por qué no deberían haber seguido."
          },
          {
            "pregunta": "¿Quién del equipo resolvió cada crisis y cómo se comunicaron?",
            "buscamos": "Roles y canales concretos.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Apuntan a talleres mecánicos independientes. ¿Qué hicieron para conocerlos: hablaron con talleres, relevaron competidores, probaron con alguien?",
            "buscamos": "Acciones concretas de relevamiento.",
            "evasiva": "Describir el problema de los talleres en general."
          },
          {
            "pregunta": "¿Qué pasos siguieron para fijar el rango de 350–700 clientes y el punto de equilibrio de 267?",
            "buscamos": "Cálculo y supuestos usados.",
            "evasiva": "Decir que el rango es alcanzable."
          },
          {
            "pregunta": "¿Qué funcionalidades decidieron incluir en el MVP y cuáles dejaron afuera?",
            "buscamos": "Lista concreta de incluido/excluido y quién lo decidió.",
            "evasiva": "Hablar de la visión del producto completo."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Aplicaron la Ley de Fitts y la regla de menos de tres clics. Muéstrennos en la demo una tarea frecuente del taller y cuántos clics lleva.",
            "buscamos": "Demostración concreta en la demo.",
            "evasiva": "Explicar la ley de Fitts."
          },
          {
            "pregunta": "Validaron contraste WCAG AA y usaron Chivo Mono para datos. ¿Dónde aplicaron esas decisiones y cómo verificaron el contraste?",
            "buscamos": "Pantallas concretas y herramienta de verificación.",
            "evasiva": "Hablar de accesibilidad en general."
          },
          {
            "pregunta": "Elijan una etapa del customer journey y muéstrennos qué solución implementaron para esa fricción.",
            "buscamos": "Trazabilidad fricción → solución visible.",
            "evasiva": "Releer el mapa."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Separaron el sitio (WordPress en Pantheon) de la app (Vercel). ¿Qué construyeron en cada uno y cómo los conectaron?",
            "buscamos": "Descripción de lo hecho y del enlace entre ambos.",
            "evasiva": "Justificar la arquitectura en abstracto."
          },
          {
            "pregunta": "El checkout acepta transferencia o pago contra entrega. ¿Qué configuraron y qué pasa hoy cuando un taller se suscribe?",
            "buscamos": "Flujo real de suscripción.",
            "evasiva": "Hablar de Mercado Pago a futuro."
          },
          {
            "pregunta": "¿Qué dejaron configurado en GA4 y qué eventos miden?",
            "buscamos": "Eventos concretos.",
            "evasiva": "Listar KPIs como MRR sin medición."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Armaron tres escenarios financieros. ¿Qué variables cambiaron entre uno y otro?",
            "buscamos": "Las variables y valores concretos.",
            "evasiva": "Decir que el escenario base es razonable."
          },
          {
            "pregunta": "¿Qué acciones de captación de talleres planificaron para los primeros meses?",
            "buscamos": "Acciones concretas con canal.",
            "evasiva": "Hablar de marketing en general."
          },
          {
            "pregunta": "Hoy no hay MRR ni churn real. ¿Qué sí midieron durante el proyecto?",
            "buscamos": "Lo efectivamente medido.",
            "evasiva": "Describir lo que medirían."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando el trabajo en equipo no funcionaba del todo, ¿qué cambiaron en la organización para seguir avanzando?",
            "buscamos": "Cambios concretos (reparto, reuniones, herramientas).",
            "evasiva": "Hablar de la importancia del trabajo en equipo."
          },
          {
            "pregunta": "¿Cómo y quién decidió diferir Mercado Pago y los módulos operativos completos?",
            "buscamos": "El momento y el criterio usado.",
            "evasiva": "Justificar la decisión en abstracto."
          },
          {
            "pregunta": "Cada integrante: ¿qué parte del proyecto hizo?",
            "buscamos": "Aportes individuales concretos.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Fijaron 2.000 alumnos como SOM. ¿Qué hicieron para llegar a ese número? ¿Usaron alguna fuente o cálculo?",
            "buscamos": "El procedimiento real, o reconocer que no hubo cálculo.",
            "evasiva": "Decir que es un objetivo prudente."
          },
          {
            "pregunta": "Decidieron no incluir clases en vivo. ¿Qué ofrece entonces concretamente el producto: qué recursos, en qué formato?",
            "buscamos": "Oferta concreta tal como quedó.",
            "evasiva": "Hablar de autoaprendizaje en abstracto."
          },
          {
            "pregunta": "¿Qué hicieron para construir los buyer personas: entrevistas, encuestas, observación?",
            "buscamos": "Método real utilizado.",
            "evasiva": "Describir los personajes."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "El informe define una paleta azul/celeste y el sitio usa verde oscuro. ¿Qué decidieron en el momento de construirlo?",
            "buscamos": "Qué cambió y quién lo decidió.",
            "evasiva": "Explicar el significado de los colores."
          },
          {
            "pregunta": "El sitemap tenía cinco secciones y el sitio tiene siete, con Checkout y Testimonios. ¿Qué agregaron y en qué momento?",
            "buscamos": "Cambios concretos durante la implementación.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Qué hicieron para resolver en el sitio las oportunidades de mejora del Customer Journey?",
            "buscamos": "Ejemplos concretos implementados.",
            "evasiva": "Releer el journey."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WordPress/WooCommerce para vender cursos y dar acceso a los recursos?",
            "buscamos": "Plugins y flujo de acceso.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "Ante la crisis por depender de una sola plataforma, ¿qué cambiaron o qué respaldo implementaron?",
            "buscamos": "Acción concreta (backups, redundancia).",
            "evasiva": "Explicar la causa raíz."
          },
          {
            "pregunta": "En la crisis del pixel de TikTok, ¿qué revisaron y qué tocaron para corregirlo?",
            "buscamos": "Pasos de diagnóstico y corrección.",
            "evasiva": "Explicar para qué sirve el pixel."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Para el equilibrio de 67 alumnos, ¿qué precio y qué costos tomaron?",
            "buscamos": "Datos concretos usados.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Qué acciones de marketing dejaron listas o ejecutaron?",
            "buscamos": "Acciones con evidencia.",
            "evasiva": "Estrategia en general."
          },
          {
            "pregunta": "Si tuvieran que mostrarnos un tablero, ¿qué KPIs pusieron y con qué meta?",
            "buscamos": "Indicadores con meta, o reconocer que no la fijaron.",
            "evasiva": "Listar KPIs sin metas."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Simularon la caída de un sistema de clases en vivo. ¿Qué hicieron en ese escenario, paso a paso?",
            "buscamos": "Acciones concretas del plan de respuesta.",
            "evasiva": "Justificar la elección del escenario."
          },
          {
            "pregunta": "¿Quién del equipo tomó cada decisión durante las crisis?",
            "buscamos": "Roles concretos.",
            "evasiva": "Respuesta grupal genérica."
          },
          {
            "pregunta": "Cada integrante: ¿qué parte del trabajo hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "'Lo hicimos entre todos'."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Definieron a 'Sofía' como único buyer persona. ¿Qué hicieron para construirla: con quién hablaron o qué datos relevaron?",
            "buscamos": "Método concreto de construcción.",
            "evasiva": "Justificar por qué ese perfil es el correcto."
          },
          {
            "pregunta": "Dicen que usaron datos del INDEC para el TAM/SAM/SOM. ¿Qué datos tomaron exactamente y qué cuentas hicieron?",
            "buscamos": "Cifras y procedimiento, o reconocer que no están.",
            "evasiva": "Mencionar el INDEC sin datos."
          },
          {
            "pregunta": "¿Cómo funciona hoy la curaduría: quién selecciona las prendas y con qué criterios las cargan?",
            "buscamos": "Proceso operativo concreto.",
            "evasiva": "Hablar de moda circular en general."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Muéstrennos el flujo 'Canjear o Vender': ¿qué hace hoy un proveedor que quiere entregar ropa?",
            "buscamos": "Recorrido real en el sitio.",
            "evasiva": "Describir el modelo circular."
          },
          {
            "pregunta": "Para la barrera de desconfianza, ¿qué pusieron en el sitio (fotos reales, FAQ de higiene, políticas)? Muéstrenlo.",
            "buscamos": "Elementos concretos visibles.",
            "evasiva": "Explicar por qué la desconfianza es una barrera."
          },
          {
            "pregunta": "Declararon un checkout multistep y el sitio muestra una sola pantalla. ¿Qué terminaron implementando y por qué cambió?",
            "buscamos": "Qué hicieron realmente.",
            "evasiva": "Defender el multistep en teoría."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Cómo configuraron en WooCommerce el manejo de prendas únicas (stock de 1 unidad)?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar del riesgo del SKU único."
          },
          {
            "pregunta": "¿Qué contenido cargaron en el Centro de Ayuda y Sobre Nosotros?",
            "buscamos": "Contenido concreto publicado.",
            "evasiva": "Describir su función de conversión."
          },
          {
            "pregunta": "¿Qué hicieron para medir el tiempo de carga del checkout y qué valor obtuvieron?",
            "buscamos": "Herramienta y medición real.",
            "evasiva": "Citar umbrales del documento."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué cuenta hicieron para proyectar $5.000.000 mensuales (ventas, ticket, cantidad de prendas)?",
            "buscamos": "El cálculo o reconocer que no existe.",
            "evasiva": "Defender que es alcanzable."
          },
          {
            "pregunta": "¿Qué acciones de marketing dirigidas a la Gen Z planificaron o ejecutaron?",
            "buscamos": "Acciones concretas con canal.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "Fijaron conversión objetivo del 2%. ¿Qué dejaron configurado para medirla?",
            "buscamos": "Medición concreta.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 1, con cancelaciones que triplicaban el objetivo, ¿qué acciones tomaron con los pedidos y los clientes?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Analizar el impacto en la confianza."
          },
          {
            "pregunta": "¿Qué hicieron para llegar a la exactitud de inventario del 100% que fijaron como KPI de salida?",
            "buscamos": "Cambio operativo concreto.",
            "evasiva": "Repetir el KPI."
          },
          {
            "pregunta": "Cada integrante: ¿qué parte del sitio o del documento hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "El SAM quedó descripto sin cifra. ¿Qué cálculo hicieron para llegar al SOM de 3.800 clientes?",
            "buscamos": "Procedimiento concreto, o reconocer que falta.",
            "evasiva": "Hablar del segmento matero."
          },
          {
            "pregunta": "¿Qué fuentes de CACE, INDEC e INYM usaron y qué dato tomaron de cada una?",
            "buscamos": "Datos concretos por fuente.",
            "evasiva": "Citar fuentes sin datos."
          },
          {
            "pregunta": "¿Qué productos eligieron para el catálogo y con qué criterio armaron la oferta especializada?",
            "buscamos": "Catálogo real y criterio aplicado.",
            "evasiva": "Comparar con MercadoLibre en abstracto."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Muéstrennos el checkout de cuatro pasos: ¿qué hay en cada paso?",
            "buscamos": "Recorrido real.",
            "evasiva": "Explicar la ley de Fitts."
          },
          {
            "pregunta": "En el carrito hay un campo de código de descuento. ¿Lo configuraron ustedes o vino con el tema? ¿Crearon algún cupón?",
            "buscamos": "Qué hicieron con ese campo.",
            "evasiva": "Justificar su utilidad teórica."
          },
          {
            "pregunta": "La figura 2 dice 'wireframe de la home' y muestra un formulario de login. ¿Qué wireframes hicieron efectivamente y con qué herramienta?",
            "buscamos": "Wireframes realmente producidos.",
            "evasiva": "Minimizar el error."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Declaran GA4 y Meta Pixel. ¿Qué instalaron y cómo verificaron que registran datos?",
            "buscamos": "Instalación y verificación concretas.",
            "evasiva": "Mostrar solo WooCommerce Analytics."
          },
          {
            "pregunta": "¿Qué configuraron en WooCommerce: envíos, medios de pago, impuestos?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "¿Qué hicieron en SEO on-page en productos y páginas?",
            "buscamos": "Ejemplos concretos.",
            "evasiva": "Teoría de SEO."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Para proyectar $171.000.000 usaron un ticket de $45.000. ¿De dónde salió ese ticket y qué hicieron con la inflación en el cálculo?",
            "buscamos": "Origen del dato y tratamiento.",
            "evasiva": "Reconocer la inflación sin decir qué hicieron."
          },
          {
            "pregunta": "¿Qué campañas o acciones de marketing dejaron armadas para el lanzamiento?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Estrategia en general."
          },
          {
            "pregunta": "Fijaron conversión >2%, carrito <65% y ROAS >3. ¿Qué tomaron como referencia para cada meta?",
            "buscamos": "Fuente concreta de cada meta.",
            "evasiva": "Repetir los números."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Presentan dos crisis simuladas. En cada una, ¿qué acciones concretas definieron y quién las ejecutaba?",
            "buscamos": "Acciones y responsables.",
            "evasiva": "Hablar de los aprendizajes."
          },
          {
            "pregunta": "Si hubiera un problema técnico grave en las primeras 48 h, ¿quién del equipo lo atiende según lo que definieron?",
            "buscamos": "Rol asignado concretamente.",
            "evasiva": "'Lo resolveríamos entre todos'."
          },
          {
            "pregunta": "Cada integrante: ¿qué parte del trabajo hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Para llegar al objetivo de casi 92.000 hogares y al equilibrio de 64 unidades, ¿qué cálculos hicieron?",
            "buscamos": "Procedimiento y datos usados.",
            "evasiva": "Defender que el 1% es razonable."
          },
          {
            "pregunta": "¿Qué productos y qué precios cargaron en el catálogo?",
            "buscamos": "Oferta real.",
            "evasiva": "Hablar del mercado de purificadores."
          },
          {
            "pregunta": "La recurrencia vía filtros es central. ¿Qué implementaron para que el cliente vuelva a comprar filtros?",
            "buscamos": "Mecanismo concreto o reconocer que no está.",
            "evasiva": "Describir el modelo de recurrencia."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Prometían cuotas y medios digitales, y el checkout solo admite transferencia. ¿Qué decidieron y cuándo?",
            "buscamos": "Decisión concreta y momento.",
            "evasiva": "Explicar por qué las cuotas son importantes."
          },
          {
            "pregunta": "¿Qué contenido educativo publicaron y dónde está en el sitio?",
            "buscamos": "Contenido concreto.",
            "evasiva": "Hablar de la estrategia educativa."
          },
          {
            "pregunta": "¿Cómo quedó configurado el soporte por WhatsApp en el sitio?",
            "buscamos": "Implementación concreta.",
            "evasiva": "Justificar el canal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "En la crisis del buscador (ERR-508), ¿qué cambiaron para que devuelva resultados y cómo lo probaron?",
            "buscamos": "Cambio técnico y prueba realizada.",
            "evasiva": "Afirmar que quedó resuelto."
          },
          {
            "pregunta": "GA4 aparece sin datos en la entrega. ¿Qué instalaron y qué pasó?",
            "buscamos": "Qué se hizo y qué faltó.",
            "evasiva": "Explicar para qué sirve GA4."
          },
          {
            "pregunta": "¿Qué hicieron para publicar el MVP en Pantheon: carrito, checkout, catálogo?",
            "buscamos": "Recorrido de lo configurado.",
            "evasiva": "Hablar de Pantheon en general."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo llegaron al precio promedio de $140.966,67 que usaron para el break-even?",
            "buscamos": "Origen del dato.",
            "evasiva": "Defender el ROI del 88%."
          },
          {
            "pregunta": "¿Qué incluyeron en el presupuesto de $1.349.000?",
            "buscamos": "Desglose concreto.",
            "evasiva": "Total sin desglose."
          },
          {
            "pregunta": "¿Qué acciones de SEO hicieron en el sitio?",
            "buscamos": "Ejemplos concretos.",
            "evasiva": "Teoría de SEO."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del troll en la comunidad, ¿qué hicieron paso a paso?",
            "buscamos": "Acciones y responsables.",
            "evasiva": "Hablar del impacto estimado."
          },
          {
            "pregunta": "¿Qué tickets, responsables y acciones correctivas registraron en cada crisis?",
            "buscamos": "Que muestren lo documentado.",
            "evasiva": "Resumir sin detalle."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo en el proyecto?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Usaron SimilarWeb y SEMrush sobre tres competidores. ¿Qué datos sacaron y cómo los usaron en las proyecciones?",
            "buscamos": "Datos concretos y uso.",
            "evasiva": "Mencionar las herramientas sin datos."
          },
          {
            "pregunta": "Para el SAM tomaron el 2% de las viviendas del país. ¿Qué pasos siguieron hasta llegar al radio de 5 km en La Plata?",
            "buscamos": "Procedimiento concreto.",
            "evasiva": "Defender el porcentaje."
          },
          {
            "pregunta": "¿Cómo funciona la producción a pedido sin stock: qué pasa desde que entra un pedido hasta la entrega?",
            "buscamos": "Flujo operativo real.",
            "evasiva": "Describir ventajas del modelo."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Excluyeron el selector de colores del MVP. ¿Qué pusieron en su lugar para que el cliente elija el color con confianza?",
            "buscamos": "Alternativa concreta implementada.",
            "evasiva": "Defender la exclusión."
          },
          {
            "pregunta": "¿Cómo implementaron el asesoramiento por WhatsApp en el sitio y en qué momentos de la compra aparece?",
            "buscamos": "Implementación concreta.",
            "evasiva": "Hablar del valor del asesoramiento."
          },
          {
            "pregunta": "Los wireframes son de escritorio. ¿Qué hicieron para la versión móvil?",
            "buscamos": "Trabajo concreto en mobile.",
            "evasiva": "Citar el 86% de tráfico mobile."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce y qué hicieron con Yoast en las fichas?",
            "buscamos": "Configuración y ajustes concretos.",
            "evasiva": "Hablar de SEO en general."
          },
          {
            "pregunta": "¿Qué pasos dieron o les faltan para pasar de dev con indexación desactivada a producción?",
            "buscamos": "Hecho vs. pendiente.",
            "evasiva": "Dar por publicado el sitio."
          },
          {
            "pregunta": "En ERR-503 hubo órdenes sobre stock inexistente. ¿Qué cambiaron en el sitio para que no se repita?",
            "buscamos": "Cambio técnico concreto.",
            "evasiva": "Analizar la causa."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Aparecen 157 y 126 pedidos para el escenario base. ¿Qué cuenta hicieron para cada número?",
            "buscamos": "Origen de cada cifra.",
            "evasiva": "Elegir uno sin explicar."
          },
          {
            "pregunta": "¿Cómo configuraron el umbral de alerta del CAC: con qué periodicidad lo miraban y qué acción disparaba?",
            "buscamos": "Funcionamiento concreto.",
            "evasiva": "Definir qué es el CAC."
          },
          {
            "pregunta": "¿Qué campañas armaron para el lanzamiento?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Estrategia en general."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 1, cuando el CAC se disparó, ¿qué hicieron con la pauta?",
            "buscamos": "Acción concreta.",
            "evasiva": "Describir el impacto."
          },
          {
            "pregunta": "En la Crisis 2, ¿qué hicieron con el proveedor de Berisso en las primeras horas?",
            "buscamos": "Acción concreta y responsable.",
            "evasiva": "Analizar el riesgo."
          },
          {
            "pregunta": "Describen la resolución en tres capas. ¿Quién del equipo ejecutó cada capa?",
            "buscamos": "Roles concretos.",
            "evasiva": "Explicar el esquema en teoría."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Qué hicieron para definir el contenido de cada kit (Starter, Creator, Pro)? ¿Quién eligió los productos y con qué criterio?",
            "buscamos": "Proceso concreto de curaduría.",
            "evasiva": "Hablar de curaduría experta en abstracto."
          },
          {
            "pregunta": "¿Cómo calcularon el ticket promedio de $222.500 y el equilibrio de 55 kits?",
            "buscamos": "Datos y cálculo.",
            "evasiva": "Repetir las cifras."
          },
          {
            "pregunta": "¿Qué hicieron para conocer a los creadores principiantes: entrevistas, encuestas, observación?",
            "buscamos": "Método concreto.",
            "evasiva": "Describir a 'Santi'."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Muéstrennos el checkout como invitado: ¿qué campos pide y qué decidieron sacar o dejar?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Explicar por qué reduce fricción."
          },
          {
            "pregunta": "¿Qué pusieron en el sitio para que un principiante entienda qué kit le conviene?",
            "buscamos": "Elementos concretos (comparadores, textos, guías).",
            "evasiva": "Hablar de la experiencia ideal."
          },
          {
            "pregunta": "¿Cómo implementaron el asesoramiento personalizado en el sitio?",
            "buscamos": "Canal y ubicación concretos.",
            "evasiva": "Describir el diferencial."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce para los kits (productos agrupados, variaciones, stock)?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "¿Qué medición dejaron instalada?",
            "buscamos": "Herramientas y eventos.",
            "evasiva": "Listar KPIs."
          },
          {
            "pregunta": "En el informe citan un modelo de ChatGPT inexistente. ¿Para qué usaron IA en el trabajo y cómo verificaron lo que produjo?",
            "buscamos": "Uso concreto y verificación.",
            "evasiva": "Minimizar la cita."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "El CAC se calcula sobre $6.000.000 de marketing que no está en el presupuesto de $4.200.000. ¿Qué cuenta hicieron?",
            "buscamos": "Reconstrucción del cálculo.",
            "evasiva": "Defender el CAC."
          },
          {
            "pregunta": "¿Qué campañas pusieron en Instagram y TikTok?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Justificar los canales."
          },
          {
            "pregunta": "¿Qué hicieron para fijar el margen del 35% por kit?",
            "buscamos": "Cálculo por kit.",
            "evasiva": "Repetir el margen."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En ERR-389, ¿qué hicieron para sumar Google Ads: qué campañas armaron y con qué presupuesto?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Explicar por qué Google Ads era necesario."
          },
          {
            "pregunta": "En ERR-505, ¿qué acciones tomaron?",
            "buscamos": "Secuencia concreta.",
            "evasiva": "Describir el problema."
          },
          {
            "pregunta": "Cuando surgió la crisis, ¿quién hizo qué dentro del equipo?",
            "buscamos": "Roles concretos.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Se posicionaron como 'Asesora Esteticista' con diagnóstico guiado. ¿Cómo implementaron ese diagnóstico en el sitio? Muéstrenlo.",
            "buscamos": "Recorrido concreto del diagnóstico.",
            "evasiva": "Explicar el posicionamiento."
          },
          {
            "pregunta": "Decidieron precios fijos sin descuentos. ¿Qué pusieron en el sitio para sostener ese valor sin promociones?",
            "buscamos": "Elementos concretos (contenido, envío bonificado, rutinas).",
            "evasiva": "Justificar la política de precios."
          },
          {
            "pregunta": "¿Cómo calcularon el SOM del año 1 (640 unidades × $88.000)?",
            "buscamos": "Origen de cada dato.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Agregaron 'Paso en la rutina' en las fichas durante el desarrollo. ¿Quién lo propuso, cómo lo implementaron y qué muestra?",
            "buscamos": "Proceso concreto del cambio.",
            "evasiva": "Relacionarlo con el posicionamiento en abstracto."
          },
          {
            "pregunta": "Reservaron el terracota para CTAs críticos y la barra de envío. Muéstrennos dónde lo aplicaron.",
            "buscamos": "Aplicación concreta en el sitio.",
            "evasiva": "Explicar teoría del color."
          },
          {
            "pregunta": "Mencionan Hick, Miller, Fitts y Fogg. Elijan una y muéstrennos qué cambiaron en el sitio por esa ley.",
            "buscamos": "Un cambio concreto y visible.",
            "evasiva": "Definir las leyes."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Cómo implementaron la geolocalización de precios con MaxMind?",
            "buscamos": "Implementación concreta.",
            "evasiva": "Explicar para qué sirve."
          },
          {
            "pregunta": "Durante el go-live la API falló y los precios se mostraron mal casi 8 horas. ¿Qué hicieron para activar el fallback GeoLite2?",
            "buscamos": "Pasos concretos y responsable.",
            "evasiva": "Analizar por qué no estaba antes."
          },
          {
            "pregunta": "¿Qué hicieron para llegar a PageSpeed 82 y FCP 0,8 s?",
            "buscamos": "Optimizaciones concretas.",
            "evasiva": "Citar el puntaje."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo armaron el modelo trianual con curva en J? ¿Qué supuestos cambian año a año?",
            "buscamos": "Supuestos concretos.",
            "evasiva": "Defender el ROI del año 3."
          },
          {
            "pregunta": "¿Cómo calcularon el COGS del 39,2%, incluidos los meses 1 y 2 sin Jipink?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Repetir el porcentaje."
          },
          {
            "pregunta": "En la crisis del Influencer Fantasma, ¿qué hicieron para recalcular la penalidad de $7.355.328 a $300.000?",
            "buscamos": "Procedimiento concreto.",
            "evasiva": "Defender el número final."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del Influencer Fantasma, ¿qué acciones concretas tomaron con la campaña y el contrato?",
            "buscamos": "Acciones y responsables.",
            "evasiva": "Describir el impacto."
          },
          {
            "pregunta": "En el go-live, ¿quién detectó el error de precios y qué hizo el equipo en orden?",
            "buscamos": "Secuencia concreta.",
            "evasiva": "Aprendizajes generales."
          },
          {
            "pregunta": "Cada integrante: ¿qué parte del proyecto hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Pasaron de redes y marketplaces a un e-commerce propio. ¿Qué hicieron concretamente para migrar: qué productos cargaron, qué trasladaron de redes?",
            "buscamos": "Acciones concretas de migración.",
            "evasiva": "Explicar por qué conviene un sitio propio."
          },
          {
            "pregunta": "¿Cómo calcularon el TAM, SAM y el SOM del 0,046%?",
            "buscamos": "Datos y procedimiento.",
            "evasiva": "Defender que el SOM es realista."
          },
          {
            "pregunta": "Fijaron un CAC ≤ $1.000. ¿Qué datos usaron para llegar a ese número?",
            "buscamos": "Origen del dato.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Fijaron abandono de carrito <65%. ¿Qué cambiaron en el carrito o el checkout para lograrlo?",
            "buscamos": "Decisiones concretas de diseño.",
            "evasiva": "Citar la meta."
          },
          {
            "pregunta": "¿Qué hicieron en las fichas para mostrar el producto artesanal (fotos, medidas, materiales)?",
            "buscamos": "Elementos concretos.",
            "evasiva": "Hablar de la marca."
          },
          {
            "pregunta": "Muéstrennos el recorrido de compra desde la home hasta el pago.",
            "buscamos": "Recorrido real.",
            "evasiva": "Describir el journey teórico."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce sobre Pantheon: envíos desde Chubut, medios de pago?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "La sección SEO repite el Customer Journey. ¿Qué hicieron efectivamente en SEO en el sitio?",
            "buscamos": "Acciones concretas, o reconocer que no hubo.",
            "evasiva": "Teoría de SEO."
          },
          {
            "pregunta": "¿Qué cambiaron en el caché después de la sobreventa?",
            "buscamos": "Cambio técnico concreto.",
            "evasiva": "Explicar el error."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Proyectan +30% de tráfico mensual por seis meses. ¿Desde cuántas visitas arrancan y qué acciones lo sostienen?",
            "buscamos": "Punto de partida y acciones.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Qué campañas o publicaciones dejaron armadas para el lanzamiento?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "La sección Conclusiones quedó vacía. ¿Qué conclusiones sacaron como equipo del proyecto?",
            "buscamos": "Conclusiones concretas sobre lo hecho.",
            "evasiva": "Generalidades."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la sobreventa a 100 clientes, ¿qué hicieron paso a paso para emitir las Gift Cards y comunicarlo?",
            "buscamos": "Secuencia concreta.",
            "evasiva": "Justificar las Gift Cards."
          },
          {
            "pregunta": "Cuando se bloqueó Facebook Marketplace, ¿qué hicieron para seguir vendiendo?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Describir la pérdida."
          },
          {
            "pregunta": "El plan de crisis asigna roles, pero el FODA dice que todo recae en una persona. ¿Quién hizo efectivamente cada tarea?",
            "buscamos": "Asignación real.",
            "evasiva": "Repetir el organigrama del plan."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Para el SOM de $90M aplicaron filtros de 47% NSE y 10% psicográfico. ¿Qué datos tomaron de CACE y cómo hicieron las cuentas?",
            "buscamos": "Datos y procedimiento.",
            "evasiva": "Defender la categoría elegida."
          },
          {
            "pregunta": "Fijaron 75 clientes mensuales, igual al tope de producción. ¿Qué hicieron para conocer esa capacidad real del artesano?",
            "buscamos": "Relevamiento concreto.",
            "evasiva": "Hablar de la estrategia."
          },
          {
            "pregunta": "¿Qué hicieron para construir a Facundo y Valentina como buyer personas?",
            "buscamos": "Método concreto.",
            "evasiva": "Describir los perfiles."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Para las objeciones de los buyer personas, ¿qué pusieron en el sitio (fotos macro, fichas técnicas, WhatsApp)? Muéstrenlo.",
            "buscamos": "Elementos visibles concretos.",
            "evasiva": "Explicar las objeciones."
          },
          {
            "pregunta": "¿Cómo contaron el storytelling del forjado en el sitio?",
            "buscamos": "Secciones y contenidos concretos.",
            "evasiva": "Hablar del posicionamiento anti-industrial."
          },
          {
            "pregunta": "Muéstrennos el recorrido de compra de un cuchillo de principio a fin.",
            "buscamos": "Recorrido real.",
            "evasiva": "Journey teórico."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Declaran HubSpot o Salesforce como CRM. ¿Qué integraron efectivamente?",
            "buscamos": "Estado real de la integración.",
            "evasiva": "Explicar para qué sirve un CRM."
          },
          {
            "pregunta": "Antes del go-live no estaban configurados SPF, DKIM y DMARC. ¿Qué hicieron para configurarlos después?",
            "buscamos": "Pasos concretos.",
            "evasiva": "Explicar qué son."
          },
          {
            "pregunta": "¿Qué configuraron en WooCommerce sobre Pantheon?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "El presupuesto de influencers es barter. ¿Cómo lo organizaron: a quiénes enviaron piezas y cómo registraron ese costo?",
            "buscamos": "Operativa concreta.",
            "evasiva": "Justificar el barter."
          },
          {
            "pregunta": "¿Qué datos usaron para calcular el CAC?",
            "buscamos": "Datos concretos.",
            "evasiva": "Repetir el CAC."
          },
          {
            "pregunta": "Crearon TDT, COR y Lead Time después de las crisis. ¿Cómo los miden y quién los mira?",
            "buscamos": "Medición concreta.",
            "evasiva": "Definir los indicadores."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del packaging, ¿qué hicieron con los pedidos y con el proveedor?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Describir el riesgo."
          },
          {
            "pregunta": "En la crisis de email, ¿qué hicieron con los envíos ya hechos y con la lista?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Analizar la causa."
          },
          {
            "pregunta": "Durante las crisis, ¿quién tomó las decisiones y cómo se comunicaron?",
            "buscamos": "Roles y canales concretos.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "El proyecto empezó como 'Pausa' y pasó a 'Estilo Organizado'. ¿Qué hicieron para decidir el cambio y qué tuvieron que rehacer?",
            "buscamos": "Proceso concreto y tareas rehechas.",
            "evasiva": "Justificar el nombre nuevo."
          },
          {
            "pregunta": "Justifican un SOM de 0,015% frente al 1–5% bibliográfico. ¿Qué cálculo hicieron?",
            "buscamos": "Procedimiento concreto.",
            "evasiva": "Defender que es prudente."
          },
          {
            "pregunta": "¿Qué productos pusieron en cada pack por ambiente y cómo los eligieron?",
            "buscamos": "Composición concreta.",
            "evasiva": "Hablar del diferencial."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Qué publicaron en la sección de consejos y cómo la enlazaron con los packs?",
            "buscamos": "Contenido concreto y enlaces.",
            "evasiva": "Describir su función."
          },
          {
            "pregunta": "¿Dónde aplicaron la paleta cálida y qué elementos del sitio la usan?",
            "buscamos": "Aplicación concreta.",
            "evasiva": "Teoría del color."
          },
          {
            "pregunta": "Muéstrennos cómo navega una usuaria desde un ambiente hasta comprar el pack.",
            "buscamos": "Recorrido real.",
            "evasiva": "Explicar la ventaja de los packs."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Recórrannos los plugins: WooCommerce, Mercado Pago, Rank Math, MetaSlider. ¿Qué configuraron en cada uno?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Listar plugins."
          },
          {
            "pregunta": "Declaran atención 24/7. ¿Qué herramienta pusieron en el sitio para eso?",
            "buscamos": "Implementación concreta, o reconocer que no está.",
            "evasiva": "Explicar la importancia de la atención."
          },
          {
            "pregunta": "En ERR-903, ¿qué pasos siguieron para restablecer el sitio?",
            "buscamos": "Secuencia concreta.",
            "evasiva": "Describir el problema."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo calcularon el ROI del 12,61%?",
            "buscamos": "Datos y cálculo.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Qué acciones de marketing planificaron para llegar a 50 pedidos por mes?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "¿Cómo miden la conversión del 1,20%?",
            "buscamos": "Herramienta y configuración.",
            "evasiva": "Repetir la meta."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En ERR-503, ¿qué hicieron y cómo calcularon la pérdida de $38.752?",
            "buscamos": "Acciones y cálculo.",
            "evasiva": "Describir el impacto."
          },
          {
            "pregunta": "¿Qué protocolos concretos quedaron después de las dos crisis?",
            "buscamos": "Protocolos escritos.",
            "evasiva": "Aprendizajes generales."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo en el proyecto?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Proyectan 15 clientes en el segundo año. ¿Qué hicieron para buscar los primeros restaurantes: contactaron alguno?",
            "buscamos": "Acciones concretas de prospección.",
            "evasiva": "Defender el número."
          },
          {
            "pregunta": "¿Cómo calcularon el TAM de 90.000 establecimientos a $45.000 por mes?",
            "buscamos": "Fuente y cálculo.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "El sitio muestra planes de $45.000, $70.000 y $105.000. ¿Qué incluye cada plan y cómo los definieron?",
            "buscamos": "Contenido concreto de los planes.",
            "evasiva": "Hablar de precios en general."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "La interfaz se inspira en las cartas físicas. Muéstrennos qué elementos de la carta física reprodujeron.",
            "buscamos": "Elementos concretos.",
            "evasiva": "Explicar el concepto."
          },
          {
            "pregunta": "¿Dónde y cómo aplicaron Montserrat SemiBold y Open Sans?",
            "buscamos": "Aplicación concreta.",
            "evasiva": "Hablar de legibilidad."
          },
          {
            "pregunta": "Muéstrennos el recorrido de un comensal que escanea el QR y hace un pedido.",
            "buscamos": "Recorrido real del prototipo.",
            "evasiva": "Describir el ideal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué parte del panel administrativo y del pago construyeron y qué parte simularon?",
            "buscamos": "Hecho vs. simulado.",
            "evasiva": "Presentar todo como operativo."
          },
          {
            "pregunta": "¿Cómo configuraron Mercado Pago: API real o simulación?",
            "buscamos": "Estado concreto.",
            "evasiva": "Explicar la integración ideal."
          },
          {
            "pregunta": "Cuando fallaron los links de Google Ads, ¿qué corrigieron en el sitio y en la campaña?",
            "buscamos": "Cambios concretos.",
            "evasiva": "Analizar la causa."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué campañas de Google Ads armaron?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Justificar el canal."
          },
          {
            "pregunta": "¿Qué datos usaron para las proyecciones financieras?",
            "buscamos": "Datos concretos.",
            "evasiva": "Repetir proyecciones."
          },
          {
            "pregunta": "¿Qué KPIs dejaron definidos y cómo los miden?",
            "buscamos": "Indicadores y medición.",
            "evasiva": "Lista teórica."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando el sistema se cayó por alta demanda, ¿qué hicieron con el Plan B (tablet) y el Plan C (WhatsApp)?",
            "buscamos": "Activación concreta.",
            "evasiva": "Explicar los planes."
          },
          {
            "pregunta": "¿Qué items pusieron en la checklist pre go-live que proponen?",
            "buscamos": "Ítems concretos.",
            "evasiva": "Hablar de su importancia."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo en el proyecto?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Cómo armaron los kits (refill, esencial, starter): qué incluye cada uno y a qué costo?",
            "buscamos": "Composición y costos concretos.",
            "evasiva": "Hablar del modelo sustentable."
          },
          {
            "pregunta": "¿Qué cálculo hicieron para llegar a 253 clientes mensuales y $72.856.350 anuales?",
            "buscamos": "Datos y procedimiento.",
            "evasiva": "Defender la cifra."
          },
          {
            "pregunta": "¿Qué relevaron para afirmar que son el único modelo de suscripción con refill en Argentina?",
            "buscamos": "Relevamiento concreto.",
            "evasiva": "Repetir el diferencial."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Muéstrennos el checkout de tres pasos con compra como invitado.",
            "buscamos": "Recorrido real.",
            "evasiva": "Explicar la decisión."
          },
          {
            "pregunta": "¿Cómo gestiona un suscriptor su suscripción en el sitio (pausar, cambiar, cancelar)?",
            "buscamos": "Flujo concreto.",
            "evasiva": "Describir el ideal."
          },
          {
            "pregunta": "Decidieron no cumplir la extensión mínima de Yoast en las fichas. ¿Qué pusieron en las fichas?",
            "buscamos": "Contenido concreto.",
            "evasiva": "Defender la decisión."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce Subscriptions y en Blocksy?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Justificar las herramientas."
          },
          {
            "pregunta": "GA4 mostraba cero conversiones con pedidos entrando bien. ¿Qué revisaron y qué cambiaron?",
            "buscamos": "Diagnóstico y corrección.",
            "evasiva": "Explicar la importancia de medir."
          },
          {
            "pregunta": "Declaran Hostinger para producción. ¿Qué hicieron en Hostinger hasta ahora?",
            "buscamos": "Estado concreto.",
            "evasiva": "Hablar del plan."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo calcularon el margen bruto de 99,83%?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Repetir el margen."
          },
          {
            "pregunta": "¿Cómo incorporaron el churn de 16,67% en la proyección de ingresos?",
            "buscamos": "Tratamiento concreto.",
            "evasiva": "Hablar de retención."
          },
          {
            "pregunta": "¿Qué indicadores adelantados configuraron y qué acción asociaron a cada uno?",
            "buscamos": "Indicadores y acciones.",
            "evasiva": "Definir indicadores adelantados."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Ante el error de GA4, ¿decidieron seguir o pausar el lanzamiento? ¿Quién lo decidió?",
            "buscamos": "Decisión y responsable.",
            "evasiva": "Aprendizajes generales."
          },
          {
            "pregunta": "Aumentaron el presupuesto para gestión de comunidad. ¿Qué hicieron con ese dinero?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Justificar el aumento."
          },
          {
            "pregunta": "¿Qué items tiene la checklist pre-launch que incorporaron?",
            "buscamos": "Ítems concretos.",
            "evasiva": "Hablar de su importancia."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Cómo armaron el TAM desde la población total y el 30% para el SAM?",
            "buscamos": "Procedimiento concreto.",
            "evasiva": "Defender los porcentajes."
          },
          {
            "pregunta": "¿Cómo implementaron 'sin mínimo de pedido' en el sitio?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar del diferencial."
          },
          {
            "pregunta": "¿Qué hicieron para mostrar la certificación ecológica en el sitio?",
            "buscamos": "Elementos visibles.",
            "evasiva": "Explicar su importancia."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Aplicaron la ley de Hick y One Page Checkout. Muéstrennos dónde.",
            "buscamos": "Aplicación concreta.",
            "evasiva": "Definir la ley."
          },
          {
            "pregunta": "Declararon enfoque 100% mobile-first. ¿Qué hicieron concretamente para el celular?",
            "buscamos": "Ajustes concretos.",
            "evasiva": "Repetir el enfoque."
          },
          {
            "pregunta": "En el catálogo aparecen precios de $9,50 y $12,00. ¿Cómo cargaron los precios?",
            "buscamos": "Proceso de carga.",
            "evasiva": "Justificar el AOV."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué configuraron en WooCommerce sobre Pantheon para clientes B2B y B2C?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Justificar la plataforma."
          },
          {
            "pregunta": "¿Qué medición tenían instalada durante el go-live?",
            "buscamos": "Herramientas y eventos.",
            "evasiva": "Describir lo ideal."
          },
          {
            "pregunta": "¿Qué cambiaron en el checkout después del abandono masivo?",
            "buscamos": "Cambios concretos.",
            "evasiva": "Analizar la causa."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo calcularon el AOV de $28.500 que unificaron en la nota metodológica?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Repetir el dato."
          },
          {
            "pregunta": "¿Cómo calcularon el ROI de 68%?",
            "buscamos": "Datos y costos.",
            "evasiva": "Repetir el número."
          },
          {
            "pregunta": "¿Qué campañas de lanzamiento armaron?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Estrategia general."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando el abandono se duplicó en el go-live, ¿qué hicieron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Describir el problema."
          },
          {
            "pregunta": "¿Cómo aplicaron los 5 Porqués y el plan SLA de 48 h en tres capas: quién hizo qué?",
            "buscamos": "Proceso real y responsables.",
            "evasiva": "Explicar la técnica."
          },
          {
            "pregunta": "En la crisis simulada deliberada, ¿qué hicieron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Valorar el ejercicio."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Cómo calcularon el SOM de $86,4M como 0,001% del SAM?",
            "buscamos": "Procedimiento concreto.",
            "evasiva": "Repetir la cifra."
          },
          {
            "pregunta": "¿Qué hicieron para construir a Sofía: qué observaron en clientes, Instagram y WhatsApp?",
            "buscamos": "Método concreto.",
            "evasiva": "Describir a Sofía."
          },
          {
            "pregunta": "¿Qué productos sublimados ofrecen y cómo los eligieron?",
            "buscamos": "Catálogo real.",
            "evasiva": "Hablar del mercado."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Qué hicieron en el sitio para lograr la 'experiencia emocional de compra'?",
            "buscamos": "Elementos concretos.",
            "evasiva": "Explicar el concepto."
          },
          {
            "pregunta": "El menú planificado tenía seis ítems y el sitio muestra tres. ¿Qué decidieron y por qué cambió?",
            "buscamos": "Qué hicieron realmente.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Cómo carga el cliente la imagen o el diseño a sublimar?",
            "buscamos": "Flujo concreto.",
            "evasiva": "Describir lo ideal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué automatizaciones de gestión implementaron?",
            "buscamos": "Automatizaciones concretas.",
            "evasiva": "Hablar del diferencial."
          },
          {
            "pregunta": "Mercado Pago figura como 'Próximamente'. ¿Qué medio de pago funciona hoy y qué hicieron con Mercado Pago?",
            "buscamos": "Estado concreto.",
            "evasiva": "Explicar la importancia de MP."
          },
          {
            "pregunta": "¿Midieron la velocidad de carga móvil? ¿Con qué herramienta y qué resultado?",
            "buscamos": "Medición concreta.",
            "evasiva": "Citar el 80% mobile."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Fijaron reducir abandono al 20%. ¿Cuál era la tasa de partida y cómo la midieron?",
            "buscamos": "Medición concreta.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Qué acciones de marketing ejecutaron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "¿Qué KPIs miden y dónde?",
            "buscamos": "Indicadores y herramienta.",
            "evasiva": "Lista teórica."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis de impresión, ¿qué cambio operativo implementaron?",
            "buscamos": "Cambio concreto.",
            "evasiva": "Analizar la causa."
          },
          {
            "pregunta": "Cuando ERR-275 se repitió por falta de adopción del protocolo, ¿qué hicieron la segunda vez?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Explicar el fallo."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Qué hicieron para elegir Buenos Aires, Córdoba y Rosario?",
            "buscamos": "Datos o relevamiento concreto.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Cómo definieron el proceso de verificación de profesionales? Descríbanlo paso a paso.",
            "buscamos": "Proceso concreto.",
            "evasiva": "Explicar el diferencial."
          },
          {
            "pregunta": "¿Qué servicios cargaron y con qué precios?",
            "buscamos": "Oferta real.",
            "evasiva": "Hablar del mercado."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Dónde ve el usuario que un profesional está verificado en el sitio?",
            "buscamos": "Elemento concreto o reconocer que no está.",
            "evasiva": "Repetir el diferencial."
          },
          {
            "pregunta": "¿Qué contenidos y FAQs publicaron para resolver el 40% de consultas sin intervención?",
            "buscamos": "Contenidos concretos.",
            "evasiva": "Describir la meta."
          },
          {
            "pregunta": "Muéstrennos cómo contrata hoy un usuario un servicio.",
            "buscamos": "Recorrido real.",
            "evasiva": "Journey teórico."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Reemplazaron el video de la home por imágenes estáticas. ¿Qué cambiaron y qué mejoró el LCP?",
            "buscamos": "Cambio y medición.",
            "evasiva": "Justificar la decisión."
          },
          {
            "pregunta": "¿Cómo implementaron 'pagos protegidos' y 'garantía del servicio'?",
            "buscamos": "Mecanismo concreto.",
            "evasiva": "Hablar de confianza."
          },
          {
            "pregunta": "¿Qué configuraron en WooCommerce para un marketplace de servicios?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo llegaron a 3.000 visitas orgánicas, CTR >5% y conversión 2,5%?",
            "buscamos": "Datos y referencias usadas.",
            "evasiva": "Repetir las metas."
          },
          {
            "pregunta": "¿Qué comisión definieron por transacción y cómo la calcularon?",
            "buscamos": "Cifra concreta.",
            "evasiva": "Describir el modelo."
          },
          {
            "pregunta": "¿Qué acciones de SEO hicieron?",
            "buscamos": "Ejemplos concretos.",
            "evasiva": "Teoría de SEO."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la saturación de soporte con miles de tickets, ¿qué hicieron en las primeras horas?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Aprendizajes generales."
          },
          {
            "pregunta": "En ERR-504, ¿quién detectó el problema y qué hizo el equipo en orden?",
            "buscamos": "Secuencia concreta.",
            "evasiva": "Explicar el LCP."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "El SOM suma USD 24.000 + USD 38.200 pero el total declarado es USD 59.000. ¿Qué cuentas hicieron?",
            "buscamos": "Reconstrucción del cálculo.",
            "evasiva": "Minimizar la diferencia."
          },
          {
            "pregunta": "El nombre colisionaba con una marca existente. ¿Qué hicieron para detectarlo y para elegir el nuevo?",
            "buscamos": "Pasos concretos.",
            "evasiva": "Aprendizaje general."
          },
          {
            "pregunta": "¿Qué incluye concretamente el retainer y la implementación que venden?",
            "buscamos": "Servicios concretos.",
            "evasiva": "Hablar de complejidad invisible."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Muéstrennos la calculadora del sitio: ¿qué datos pide y qué devuelve?",
            "buscamos": "Funcionamiento real.",
            "evasiva": "Explicar su objetivo."
          },
          {
            "pregunta": "Documentaron cambios de plataforma y contratos. ¿Qué cambiaron y en qué momento?",
            "buscamos": "Cambios concretos.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Qué recorrido hace un vendedor de Mercado Libre que llega al sitio?",
            "buscamos": "Recorrido real.",
            "evasiva": "Describir al cliente ideal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "n8n, PostgreSQL, Retool y VPS figuran como previstos. ¿Qué probaron efectivamente de esas herramientas?",
            "buscamos": "Pruebas concretas realizadas.",
            "evasiva": "Explicar la arquitectura."
          },
          {
            "pregunta": "¿Qué construyeron en el sitio web y con qué herramientas?",
            "buscamos": "Construcción concreta.",
            "evasiva": "Hablar de las dos capas."
          },
          {
            "pregunta": "En la tabla de herramientas hay una descripción duplicada. ¿Qué revisión hicieron antes de entregar?",
            "buscamos": "Proceso real de revisión.",
            "evasiva": "Minimizar el error."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué costos incluyeron para llegar al margen neto del año 1?",
            "buscamos": "Costos concretos.",
            "evasiva": "Repetir el margen."
          },
          {
            "pregunta": "¿Qué hicieron para fijar USD 400 como base del LTV?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Justificar el piso."
          },
          {
            "pregunta": "¿Qué acciones de captación de clientes planificaron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Estrategia general."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En ERR-418, ¿qué hicieron en los flujos afectados y cuánto tardaron en cada uno?",
            "buscamos": "Secuencia concreta.",
            "evasiva": "Aprendizaje general."
          },
          {
            "pregunta": "¿Cómo aplicaron Ishikawa en ERR-419: quiénes participaron y qué concluyeron?",
            "buscamos": "Proceso real.",
            "evasiva": "Explicar la técnica."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Cómo calcularon el SOM del año 1 y el equilibrio de ~475 unidades?",
            "buscamos": "Datos y procedimiento.",
            "evasiva": "Defender que es prudente."
          },
          {
            "pregunta": "¿Qué hicieron para demostrar la inalterabilidad del acero 316L con PVD: qué evidencia técnica pusieron en el sitio?",
            "buscamos": "Evidencia concreta publicada.",
            "evasiva": "Explicar el material."
          },
          {
            "pregunta": "¿Qué hicieron con el nombre de marca ('Jewerly'/'Jewelry') y el dominio: qué registraron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Minimizar la diferencia."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Diseñaron todo a dos clics de la home. Muéstrennos un recorrido.",
            "buscamos": "Demostración concreta.",
            "evasiva": "Explicar la regla."
          },
          {
            "pregunta": "¿Qué pusieron en las fichas de producto?",
            "buscamos": "Contenido concreto.",
            "evasiva": "Hablar del diferencial."
          },
          {
            "pregunta": "Muéstrennos el checkout.",
            "buscamos": "Recorrido real.",
            "evasiva": "Describir el ideal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Eligieron WordPress con WooCommerce y descartaron Tiendanube y Shopify. ¿Qué compararon?",
            "buscamos": "Comparación concreta.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Cómo midieron los umbrales de 48 h (conversión ≥1,5%, rebote ≤50%) en el entorno dev?",
            "buscamos": "Medición real o reconocer que no la hubo.",
            "evasiva": "Repetir los números."
          },
          {
            "pregunta": "¿Qué hicieron en Hostinger y qué en Pantheon?",
            "buscamos": "Estado concreto.",
            "evasiva": "Hablar del plan."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "Después del ajuste de costos, ¿qué cambiaron en el modelo financiero?",
            "buscamos": "Cambios concretos.",
            "evasiva": "Defender la solidez."
          },
          {
            "pregunta": "¿Qué datos usaron para el supuesto de recompra ≥15%?",
            "buscamos": "Fuente concreta.",
            "evasiva": "Repetir el supuesto."
          },
          {
            "pregunta": "¿Qué campañas armaron?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Estrategia general."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Cuando el sitio se cayó, ¿qué hizo cada integrante?",
            "buscamos": "Roles concretos.",
            "evasiva": "Respuesta grupal genérica."
          },
          {
            "pregunta": "Ante la ruptura de stock, ¿qué hicieron para homologar un segundo proveedor?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Justificar la política."
          },
          {
            "pregunta": "¿Cómo aplicaron los 5 Whys y el plan en tres capas?",
            "buscamos": "Proceso real.",
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Qué datos relevaron del mercado de cotillón en San Juan?",
            "buscamos": "Datos concretos o reconocer que no hay.",
            "evasiva": "Descripción cualitativa."
          },
          {
            "pregunta": "¿Qué kits armaron y qué contiene cada uno (por ejemplo el Kit Mundial)?",
            "buscamos": "Composición concreta.",
            "evasiva": "Hablar del diferencial."
          },
          {
            "pregunta": "¿Qué hicieron para construir el buyer persona Laura Gómez?",
            "buscamos": "Método concreto.",
            "evasiva": "Describir a Laura."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Laura compra por WhatsApp desde el celular. ¿Qué pusieron en el sitio para ella?",
            "buscamos": "Elementos concretos.",
            "evasiva": "Justificar el e-commerce."
          },
          {
            "pregunta": "¿Cómo funciona la sección 'Promociones estacionales'?",
            "buscamos": "Funcionamiento real.",
            "evasiva": "Describir el ideal."
          },
          {
            "pregunta": "Muéstrennos el sitio y el recorrido de compra.",
            "buscamos": "Sitio funcionando.",
            "evasiva": "Hablar del diseño planificado."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "La URL del sitio no aparece y los anexos están vacíos. ¿Qué construyeron efectivamente en WordPress/WooCommerce?",
            "buscamos": "Evidencia concreta.",
            "evasiva": "Describir lo declarado."
          },
          {
            "pregunta": "En la crisis de GA4, ¿qué revisaron y qué cambiaron?",
            "buscamos": "Diagnóstico y corrección.",
            "evasiva": "Explicar la causa."
          },
          {
            "pregunta": "¿Qué configuraron en WooCommerce?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué metas numéricas le pusieron a los KPIs?",
            "buscamos": "Metas concretas.",
            "evasiva": "Listar KPIs."
          },
          {
            "pregunta": "¿Qué acciones de marketing hicieron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "¿Cómo fijaron los precios de los kits?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Hablar de valor percibido."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "Frente a competidores más baratos, ¿qué hicieron para reforzar la identidad de marca?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Justificar la estrategia."
          },
          {
            "pregunta": "El grupo pasó de cuatro a dos integrantes. ¿Qué hicieron con el trabajo pendiente?",
            "buscamos": "Reorganización concreta.",
            "evasiva": "Lamentar la situación."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "El cuerpo dice 2.611 clientes y Miro 9.141. ¿Qué cálculo hicieron para cada número?",
            "buscamos": "Origen de cada cifra.",
            "evasiva": "Elegir uno sin explicar."
          },
          {
            "pregunta": "¿Qué hicieron para construir a Pedro Martínez como buyer persona?",
            "buscamos": "Método concreto.",
            "evasiva": "Describir a Pedro."
          },
          {
            "pregunta": "¿Qué hicieron para implementar la trazabilidad de materiales?",
            "buscamos": "Implementación concreta.",
            "evasiva": "Hablar del diferencial."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "La asesoría técnica online es su diferencial. ¿Qué implementaron en el sitio además del botón de WhatsApp?",
            "buscamos": "Implementación concreta.",
            "evasiva": "Repetir la propuesta."
          },
          {
            "pregunta": "Elijan una fricción del customer journey y muéstrennos qué cambiaron en el sitio.",
            "buscamos": "Fricción → cambio visible.",
            "evasiva": "Releer el journey."
          },
          {
            "pregunta": "¿Qué pusieron en las fichas de muebles?",
            "buscamos": "Contenido concreto.",
            "evasiva": "Hablar del catálogo."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "Eligieron WordPress y WooCommerce. ¿Qué compararon con Shopify y Tienda Nube?",
            "buscamos": "Comparación concreta.",
            "evasiva": "'Shopify es caro'."
          },
          {
            "pregunta": "¿Qué configuraron en WooCommerce?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "En la crisis del cupón, ¿qué corrigieron en el checkout?",
            "buscamos": "Corrección concreta.",
            "evasiva": "Analizar la causa."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué datos usaron para los $70.497.000 de ingresos y el ROI de 42%?",
            "buscamos": "Datos concretos.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Qué campañas armaron?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "¿Qué KPIs de umbral definieron en Miro?",
            "buscamos": "Umbrales concretos.",
            "evasiva": "Lista teórica."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la crisis del cupón, ¿qué hicieron con los clientes afectados?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Aprendizaje general."
          },
          {
            "pregunta": "¿Qué responsables y fechas pusieron en Miro para cada crisis?",
            "buscamos": "Asignación concreta.",
            "evasiva": "Generalidades."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Qué hicieron para incorporar los saberes mapuche en la marca: con quién hablaron, qué fuentes usaron?",
            "buscamos": "Proceso concreto.",
            "evasiva": "Hablar del posicionamiento."
          },
          {
            "pregunta": "El canal físico estaba fuera de alcance pero aparece en el plan. ¿Qué hicieron con dietéticas y delicatessen?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Cómo calcularon el SOM del 1% del SAM?",
            "buscamos": "Procedimiento concreto.",
            "evasiva": "Repetir la cifra."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "¿Cómo contaron el storytelling en el sitio?",
            "buscamos": "Secciones concretas.",
            "evasiva": "Explicar el concepto."
          },
          {
            "pregunta": "¿Qué pusieron en las fichas sobre advertencias sanitarias?",
            "buscamos": "Contenido concreto.",
            "evasiva": "Hablar de ANMAT."
          },
          {
            "pregunta": "Muéstrennos el checkout tal como funciona hoy.",
            "buscamos": "Recorrido real.",
            "evasiva": "Describir el ideal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué hicieron para mejorar la carga en celulares con datos móviles?",
            "buscamos": "Optimizaciones concretas.",
            "evasiva": "Explicar el problema."
          },
          {
            "pregunta": "Mercado Pago y PayPal fallaron. ¿Qué hicieron con Braintree y qué pruebas corrieron?",
            "buscamos": "Acciones y pruebas.",
            "evasiva": "Describir el fallo."
          },
          {
            "pregunta": "Recórrannos plugins, SSL y backups configurados.",
            "buscamos": "Configuración concreta.",
            "evasiva": "Listar herramientas."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué campañas de marketing ejecutaron en el primer año?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Estrategia general."
          },
          {
            "pregunta": "¿Qué indicadores miran para saber si el gasto en marketing funciona?",
            "buscamos": "Indicadores y herramienta.",
            "evasiva": "Repetir el ROI."
          },
          {
            "pregunta": "¿Cómo armaron la proyección del segundo y tercer año?",
            "buscamos": "Supuestos concretos.",
            "evasiva": "Defender el crecimiento."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la Crisis 2, ¿qué decisión tomaron cuando el rebote se disparó?",
            "buscamos": "Acción concreta.",
            "evasiva": "Describir el impacto."
          },
          {
            "pregunta": "¿Cómo armaron la Crisis 3 de filtración de datos?",
            "buscamos": "Proceso concreto.",
            "evasiva": "Valorar el ejercicio."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "Para el SAM tomaron el 35% del TAM. ¿Qué cálculo hicieron?",
            "buscamos": "Procedimiento y fuente.",
            "evasiva": "Defender el porcentaje."
          },
          {
            "pregunta": "¿Cómo funciona la verificación de identidad de las prestadoras en la beta?",
            "buscamos": "Proceso concreto.",
            "evasiva": "Hablar del diferencial."
          },
          {
            "pregunta": "¿Cómo calcularon el equilibrio de 678 y la meta de 950?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Repetir las cifras."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Pusieron el acceso para prestadoras en el footer. ¿Qué evaluaron para ubicarlo ahí?",
            "buscamos": "Decisión concreta.",
            "evasiva": "Justificar en abstracto."
          },
          {
            "pregunta": "¿Qué cambiaron respecto de lo planificado en entregables previos?",
            "buscamos": "Cambios concretos.",
            "evasiva": "Generalidades."
          },
          {
            "pregunta": "Muéstrennos cómo un cliente contacta o reserva a una prestadora.",
            "buscamos": "Recorrido real.",
            "evasiva": "Describir el ideal."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Qué mide la 'conversión' en una beta sin pagos integrados?",
            "buscamos": "Evento concreto medido.",
            "evasiva": "Repetir la meta."
          },
          {
            "pregunta": "¿Qué configuraron en el sitio beta?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Hablar de la plataforma."
          },
          {
            "pregunta": "¿Qué incluía el checklist de go-live?",
            "buscamos": "Ítems concretos.",
            "evasiva": "Hablar de su importancia."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Cómo distribuyeron el presupuesto entre Meta y Google y qué campañas armaron?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Justificar la división."
          },
          {
            "pregunta": "¿Qué hicieron para medir el 0,2–0,4% de conversión del go-live?",
            "buscamos": "Medición concreta.",
            "evasiva": "Repetir el dato."
          },
          {
            "pregunta": "¿Qué acciones de retención tenían previstas para las suscriptoras?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Hablar del churn."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En ERR-507, ¿qué hicieron con la pauta y la comunicación?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Analizar la causa raíz."
          },
          {
            "pregunta": "En ERR-411, ¿qué acciones de retención activaron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Describir el impacto."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
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
        "titulo": "A. Decisiones de mercado y propuesta de valor",
        "preguntas": [
          {
            "pregunta": "¿Qué hicieron para elegir la dark store de Parque Patricios?",
            "buscamos": "Proceso concreto.",
            "evasiva": "Justificar la ubicación."
          },
          {
            "pregunta": "¿Cómo armaron el catálogo curado por ocasión: quién elige los productos?",
            "buscamos": "Proceso concreto.",
            "evasiva": "Hablar del diferencial."
          },
          {
            "pregunta": "¿Cómo calcularon el equilibrio de 59 pedidos y el ticket de $80.000?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Repetir cifras."
          }
        ]
      },
      {
        "titulo": "B. Decisiones de diseño y experiencia (UX/UI)",
        "preguntas": [
          {
            "pregunta": "Muéstrennos el recorrido hasta el checkout en cuatro clics.",
            "buscamos": "Demostración concreta.",
            "evasiva": "Explicar la meta."
          },
          {
            "pregunta": "El sitio promete 90 minutos y el objetivo interno es 120. ¿Qué decidieron mostrar y por qué quedó así?",
            "buscamos": "Decisión concreta.",
            "evasiva": "Minimizar la diferencia."
          },
          {
            "pregunta": "¿Dónde aplicaron rojo y amarillo en el sitio?",
            "buscamos": "Aplicación concreta.",
            "evasiva": "Teoría del color."
          }
        ]
      },
      {
        "titulo": "C. Decisiones técnicas y de implementación",
        "preguntas": [
          {
            "pregunta": "¿Cómo simularon Uber Direct con tarifas fijas en WooCommerce?",
            "buscamos": "Configuración concreta.",
            "evasiva": "Presentarlo como integrado."
          },
          {
            "pregunta": "¿Qué configuraron en Mercado Pago sandbox y qué pruebas corrieron?",
            "buscamos": "Pruebas concretas.",
            "evasiva": "Hablar de la integración ideal."
          },
          {
            "pregunta": "¿Cómo validaron el JSON-LD con DevTools?",
            "buscamos": "Proceso concreto.",
            "evasiva": "Explicar qué es JSON-LD."
          }
        ]
      },
      {
        "titulo": "D. Decisiones de marketing, finanzas y KPIs",
        "preguntas": [
          {
            "pregunta": "¿Qué supuestos usaron para el ROI de 634,2% y el payback de 1,89 meses?",
            "buscamos": "Supuestos concretos.",
            "evasiva": "Defender los números."
          },
          {
            "pregunta": "¿Cómo pasaron de 1.200–3.600 clientes a 1.440 pedidos anuales?",
            "buscamos": "Cálculo concreto.",
            "evasiva": "Repetir cifras."
          },
          {
            "pregunta": "¿Qué campañas armaron?",
            "buscamos": "Campañas concretas.",
            "evasiva": "Estrategia general."
          }
        ]
      },
      {
        "titulo": "E. Decisiones ante las crisis y trabajo en equipo",
        "preguntas": [
          {
            "pregunta": "En la guerra de precios, ¿qué bundles armaron y cómo los pusieron en el sitio?",
            "buscamos": "Bundles concretos.",
            "evasiva": "Justificar el bundling."
          },
          {
            "pregunta": "Cuando se cayó el sandbox por tráfico, ¿qué hicieron?",
            "buscamos": "Acciones concretas.",
            "evasiva": "Aprendizaje general."
          },
          {
            "pregunta": "Cada integrante: ¿qué hizo?",
            "buscamos": "Aportes individuales.",
            "evasiva": "Respuesta grupal genérica."
          }
        ]
      }
    ],
    "nota": 9,
    "notaFuente": "Entrega Final"
  }
];
