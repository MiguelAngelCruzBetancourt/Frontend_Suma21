import { AppShell } from "@/components/layout/AppShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TopBar } from "@/components/layout/TopBar";
import { Logo } from "@/components/ui/Logo";
import { TextSizeToggle } from "@/features/accessibility";
import { DonationLauncher } from "@/features/donation";
import { HomePage } from "@/features/home";

const NAV_ITEMS = [
  { label: "Inicio", href: "/", current: true },
  { label: "Semana Down", href: "/semana-down" },
  { label: "Iniciativa Café", href: "/iniciativa-cafe" },
  { label: "Apóyanos / Tienda", href: "/apoyanos-tienda" },
  { label: "Acceso Admin", href: "/admin" },
];

const header = (
  <>
    <TopBar>
      <span>Modo accesibilidad</span>
      <span>Lectura fácil</span>
    </TopBar>
    <SiteHeader
      brand={
        <a href="/" aria-label="SUMA21 by ASISCO, ir al inicio">
          <Logo />
        </a>
      }
      items={NAV_ITEMS}
      leading={<DonationLauncher />}
      actions={<TextSizeToggle />}
    />
  </>
);

const footer = (
  <SiteFooter
    brand={
      <>
        <Logo size="lg" />
        <p>[Descripción breve de la asociación]</p>
      </>
    }
    columns={[
      {
        title: "Navegación",
        content: (
          <ul>
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        ),
      },
      { title: "Contacto", content: <p>[Datos de contacto]</p> },
      { title: "Accesibilidad", content: <p>[Información de accesibilidad]</p> },
    ]}
    bottom={<p>© {new Date().getFullYear()} ASISCO</p>}
  />
);

export default function App() {
  return (
    <AppShell header={header} footer={footer}>
      <HomePage />
    </AppShell>
  );
}
