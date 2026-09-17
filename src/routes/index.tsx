import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ExpedienteCheck — GovTech para la inversión pública en Perú" },
      {
        name: "description",
        content:
          "Plataforma GovTech que ayuda a municipios peruanos a revisar expedientes, consultar normativa con IA y monitorear obras en riesgo en tiempo real.",
      },
      { property: "og:title", content: "ExpedienteCheck — Tecnología al servicio de la inversión pública" },
      {
        property: "og:description",
        content:
          "Tres módulos, tres pilotos activos (Tacna, Coronel Portillo y Urubamba). Datos de MEF, INFOBRAS y SEACE al alcance de los equipos locales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ExpedienteCheck" },
      {
        name: "twitter:description",
        content:
          "GovTech para inversión pública en Perú. Tres módulos, tres pilotos activos.",
      },
    ],
  }),
  component: OnePager,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-border/60 pt-4">
      <div className="font-serif text-3xl text-foreground">
        <span className="text-accent-gold">{value}</span>
      </div>
      <p className="mt-2 text-sm leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold">
        {children}
      </span>
      <span className="h-px flex-1 bg-border/50" />
    </div>
  );
}

function ModuleCard({
  number,
  status,
  statusTone,
  tag,
  tagTone,
  title,
  description,
  bullets,
  footer,
  dark,
}: {
  number: string;
  status: string;
  statusTone: "amber" | "green";
  tag?: string;
  tagTone?: "outline" | "solid";
  title: string;
  description: string;
  bullets: string[];
  footer?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={
        "flex flex-col gap-4 p-6 " +
        (dark ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground")
      }
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70">
          Módulo {number}
        </span>
        <span
          className={
            "rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest " +
            (statusTone === "green"
              ? "bg-brand-green/15 text-brand-green"
              : "bg-accent-gold/20 text-accent-gold")
          }
        >
          {status}
        </span>
      </div>
      {tag && (
        <div
          className={
            "self-start rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-widest " +
            (tagTone === "solid"
              ? "bg-accent-gold text-primary"
              : "border border-accent-gold text-accent-gold")
          }
        >
          ✦ {tag}
        </div>
      )}
      <h3 className="font-serif text-xl leading-tight">{title}</h3>
      <p className="text-sm leading-relaxed opacity-85">{description}</p>
      <ul className="space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-accent-gold">—</span>
            <span className="opacity-90">{b}</span>
          </li>
        ))}
      </ul>
      {footer && <p className="mt-auto pt-2 text-sm italic text-accent-gold">{footer}</p>}
    </div>
  );
}

function TeamCard({
  initials,
  name,
  role,
  bio,
}: {
  initials: string;
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="flex flex-col gap-4 border border-border bg-muted p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-accent-gold font-serif text-lg font-bold text-primary">
        {initials}
      </div>
      <div>
        <h3 className="font-serif text-lg text-foreground">{name}</h3>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-gold">
          {role}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
    </div>
  );
}

function MunicipalityCard({
  scope,
  region,
  name,
  works,
}: {
  scope: string;
  region: string;
  name: string;
  works: number;
}) {
  return (
    <div className="flex flex-col gap-3 border border-border bg-card p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-gold">
            {scope}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {region}
          </p>
        </div>
        <div className="rounded bg-muted px-2 py-1 text-xs font-semibold text-foreground">
          {works} obras
        </div>
      </div>
      <h3 className="font-serif text-lg leading-tight text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground">Obras en seguimiento: {works}</p>
    </div>
  );
}

function OnePager() {
  const municipalities = [
    {
      scope: "Municipalidad Distrital",
      region: "Lima",
      name: "Municipalidad Distrital de Miraflores",
      works: 22,
    },
    {
      scope: "Municipalidad Distrital",
      region: "Cajamarca",
      name: "Municipalidad Distrital de Sallique",
      works: 15,
    },
    {
      scope: "Municipalidad Distrital",
      region: "Lima",
      name: "Municipalidad Distrital de Santiago de Surco",
      works: 14,
    },
    {
      scope: "Municipalidad Distrital",
      region: "Cajamarca",
      name: "Municipalidad Distrital de Tabaconas",
      works: 42,
    },
    {
      scope: "Municipalidad Distrital",
      region: "Cusco",
      name: "Municipalidad Distrital de Wanchaq",
      works: 21,
    },
    {
      scope: "Municipalidad Provincial",
      region: "Tacna",
      name: "Municipalidad Provincial de Tacna",
      works: 79,
    },
    {
      scope: "Municipalidad Provincial",
      region: "Cusco",
      name: "Municipalidad Provincial de Urubamba",
      works: 34,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-start justify-between gap-4 border-b border-border/60 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              GovTech · Inversión Pública · Perú
            </p>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl">
              Expediente<span className="text-accent-gold">Check</span>
            </h1>
          </div>
          <div className="text-left md:text-right">
            <p className="font-serif italic text-muted-foreground">
              Tecnología al servicio
              <br />
              de la inversión pública
            </p>
            <a
              href="https://www.expedientecheck.com"
              className="mt-1 inline-block text-sm font-medium text-accent-gold hover:underline"
            >
              www.expedientecheck.com
            </a>
          </div>
        </header>

        {/* Lede */}
        <section className="mt-8 border-l-2 border-accent-gold bg-muted/50 px-6 py-6">
          <p className="font-serif text-lg leading-relaxed md:text-xl">
            Los municipios peruanos gestionan{" "}
            <span className="font-semibold">S/ 24,000 millones</span> en inversión pública al año —
            con equipos técnicos reducidos, normativa compleja y sin herramientas para detectar
            problemas antes de que escalen. ExpedienteCheck cambia eso.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          <Stat value="S/24B" label="en inversión pública local gestionada al año en Perú" />
          <Stat value="~1,874" label="municipios con capacidad digital de monitoreo casi nula" />
          <Stat value="8" label="municipalidades con monitor de obras ya operando" />
          <Stat value="+331" label="obras paralizadas solo en GORE Puno (Contraloría 2025)" />
        </section>

        {/* Problem + Traction */}
        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <SectionLabel>El problema</SectionLabel>
            <h2 className="font-serif text-2xl leading-snug">
              Los datos existen. La capacidad de actuar sobre ellos, no.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Invierte.pe genera datos ricos: aprobaciones, presupuesto, avance de obras. Pero
              viven en silos nacionales — MEF, INFOBRAS, SEACE — invisibles para los equipos
              locales que son responsables de ejecutar.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              El resultado: decisiones a ciegas, proyectos paralizados, órganos de control que
              llegan tarde. No es un problema de datos. Es un{" "}
              <span className="font-semibold text-foreground">
                problema de usabilidad y gobernanza.
              </span>
            </p>
          </div>

          <div>
            <SectionLabel>Tracción</SectionLabel>
            <h2 className="font-serif text-2xl leading-snug">
              Implementación real. Datos en uso. Reconocimiento en curso.
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                <>
                  <span className="font-semibold text-foreground">
                    Monitor de Obras en Riesgo
                  </span>{" "}
                  — Ya operando en Miraflores, Sallique, Santiago de Surco, Tabaconas,
                  Wanchaq, Tacna y Urubamba
                </>,
                <>
                  <span className="font-semibold text-foreground">
                    Asistente Normativo con IA (RAG)
                  </span>{" "}
                  — Desarrollado y listo para responder consultas técnicas con base normativa
                  verificable
                </>,
                <>
                  <span className="font-semibold text-foreground">
                    Checklist Digital Inteligente
                  </span>{" "}
                  — próximamente, para revisar expedientes y detectar observaciones antes de la
                  aprobación
                </>,
                <>
                  <span className="font-semibold text-foreground">
                    LAC AI Accelerator, Banco Mundial
                  </span>{" "}
                  — propuesta presentada con GORE Puno como respaldo institucional; feedback
                  informal positivo
                </>,
                <>
                  🏆 <span className="font-semibold text-foreground">Ganadores</span> — Reto de
                  Innovación Abierta, Municipalidad de Miraflores — junio 2026
                </>,
                <>
                  🏆 <span className="font-semibold text-foreground">Ganadores</span> — eAwards
                  2026, NTT DATA Foundation
                </>,
                <>
                  <span className="font-semibold text-foreground">PUCP</span> — caso real en
                  posgrado de Gestión de Inversión Pública
                </>,
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent-gold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Platform intro */}
        <section className="mt-14 flex flex-col gap-2 border-y border-border/60 bg-muted/40 px-6 py-5 md:flex-row md:items-center md:gap-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold md:w-64">
            La plataforma · tres módulos
          </p>
          <p className="text-sm text-muted-foreground">
            Solución modular que acompaña todo el ciclo del proyecto — desde la revisión del
            expediente hasta el monitoreo en tiempo real de la obra en campo.
          </p>
        </section>

        {/* Modules */}
        <section className="mt-6 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          <ModuleCard
            number="01"
            status="Desarrollado"
            statusTone="green"
            title="Monitor de Obras en Riesgo"
            description="Tablero en tiempo real que agrega datos de MEF, INFOBRAS y SEACE para detectar obras en riesgo de paralización antes de que ocurra. Ya opera en municipalidades con seguimiento activo de obras."
            bullets={[
              "Alertas automáticas por proyecto y nivel de riesgo",
              "Trazabilidad completa del estado de cada obra",
              "Arquitectura multi-municipio: una plataforma, múltiples instancias",
            ]}
          />
          <ModuleCard
            dark
            number="02"
            status="Desarrollado"
            statusTone="green"
            tag="Módulo central de IA"
            tagTone="solid"
            title="Asistente Normativo con IA (RAG)"
            description="Asistente de lenguaje natural entrenado en normativa peruana de inversión pública. Responde consultas técnicas en segundos, con trazabilidad y soporte para equipos que necesitan criterio normativo al instante."
            bullets={[
              "Base normativa: Invierte.pe, RNE, directivas MEF y circulares",
              "Respuestas con citas normativas verificables",
              "Accesible para funcionarios sin perfil especializado",
              "Actualizable ante cambios normativos en tiempo real",
            ]}
            footer="La IA no reemplaza el juicio técnico. Lo fortalece."
          />
          <ModuleCard
            number="03"
            status="Próximamente"
            statusTone="amber"
            tag="IA preventiva"
            tagTone="outline"
            title="Checklist Digital Inteligente"
            description="Revisa expedientes técnicos contra requisitos normativos vigentes antes de que entren a aprobación. La IA identifica observaciones, vacíos y prioridades para acelerar la revisión técnica."
            bullets={[
              "Detección de errores y observaciones priorizadas",
              "IA aplicada a la lectura de documentos técnicos",
              "Reducción del ciclo de revisión de expedientes",
              "Enfoque preventivo antes de la aprobación",
            ]}
          />
        </section>

        {/* Municipalities */}
        <section className="mt-16">
          <SectionLabel>Municipalidades activas</SectionLabel>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-serif text-2xl leading-snug">
                Gobiernos locales que ya lo están usando.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Despliegues reales del Monitor de Obras en Riesgo con seguimiento activo por
                municipalidad.
              </p>
            </div>
            <p className="text-sm font-medium text-accent-gold">
              Elegí una municipalidad para entrar a su monitor
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {municipalities.map((municipality) => (
              <MunicipalityCard key={municipality.name} {...municipality} />
            ))}
          </div>
        </section>

        {/* Business model */}
        <section className="mt-16">
          <SectionLabel>Modelo de negocio</SectionLabel>
          <h2 className="font-serif text-2xl leading-snug">
            SaaS para gobiernos locales: suscripción anual por municipio, con módulos escalables.
          </h2>
          <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            <div className="bg-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                Plan Básico
              </p>
              <h3 className="mt-2 font-serif text-lg">Monitor de Obras</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tablero en tiempo real, alertas de riesgo y trazabilidad de proyectos para un
                municipio.
              </p>
            </div>
            <div className="bg-primary p-6 text-primary-foreground">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-80">
                Plan Profesional
              </p>
              <h3 className="mt-2 font-serif text-lg">Monitor + Checklist</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">
                Revisión digital de expedientes y monitoreo combinados. Ideal para equipos técnicos
                que quieren cerrar el ciclo preventivo.
              </p>
            </div>
            <div className="bg-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold">
                Plan Institucional
              </p>
              <h3 className="mt-2 font-serif text-lg">Full Stack + IA</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Los tres módulos, multi-municipio, asistente normativo con IA, soporte dedicado e
                integraciones a medida.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Ingresos recurrentes por licencia anual + servicios de implementación, capacitación y
            soporte. Escalable a regiones, mancomunidades y programas nacionales de inversión
            pública.
          </p>
        </section>

        {/* What we're looking for */}
        <section className="mt-16 grid gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>Lo que buscamos</SectionLabel>
            <h2 className="font-serif text-2xl leading-snug">
              Conexiones con financiadores de desarrollo, fondos de civic tech e inversores GovTech
              activos en LAC.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Estamos en el momento en que la introducción correcta — más que el capital directo —
              es lo que acelera el crecimiento. Buscamos conexiones con fondos y programas
              alineados con capacidad digital de gobiernos locales, transparencia en inversión
              pública y tecnología cívica en América Latina.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 self-center text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {[
              "BID / BID Lab",
              "Banco Mundial GovTech",
              "Bloomberg Philanthropies",
              "UNICEF Venture Fund",
              "Omidyar Network",
              "CAF GovTech",
              "Open Society Foundations",
              "Digital Public Goods Alliance",
            ].map((f) => (
              <li key={f} className="border border-border bg-muted px-3 py-3">
                {f}
              </li>
            ))}
          </ul>
        </section>

        {/* Team */}
        <section className="mt-16">
          <SectionLabel>El equipo</SectionLabel>
          <div className="grid gap-6 md:grid-cols-3">
            <TeamCard
              initials="RB"
              name="Rocío Béjar"
              role="Liderazgo de proyecto"
              bio="Lidera la estrategia, coordinación institucional y crecimiento de ExpedienteCheck. Encargada de articular relaciones con municipios, gobiernos regionales y aliados del ecosistema GovTech, asegurando que la plataforma responda a las necesidades reales de los equipos locales de inversión pública."
            />
            <TeamCard
              initials="MB"
              name="Marco Béjar"
              role="Arquitectura tecnológica y seguridad"
              bio="Responsable del desarrollo, arquitectura tecnológica y seguridad de la plataforma. Lidera el diseño técnico del sistema con foco en la integridad de los datos, la escalabilidad y las buenas prácticas de desarrollo de software para entornos institucionales. Más de 15 años desarrollando soluciones empresariales para grandes organizaciones en sectores como telecomunicaciones y retail."
            />
            <TeamCard
              initials="SP"
              name="Rodrigo Silva"
              role="Full Stack Developer · La Libertad"
              bio="Especialista en construcción de APIs REST escalables y automatización de procesos críticos de negocio con Python y Node.js. Actualmente voluntario como científico de datos en AENUP. Experiencia en desarrollo de bots RPA con Playwright para SUNAT en Grupo Ormasan, reduciendo procesos de horas a minutos."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-foreground">ExpedienteCheck</span> · Lima, Perú
            <br />
            Disponible para reuniones y llamadas a nivel regional e internacional
          </div>
          <a
            href="https://www.expedientecheck.com"
            className="font-medium text-accent-gold hover:underline"
          >
            www.expedientecheck.com
          </a>
        </footer>
      </div>
    </main>
  );
}
