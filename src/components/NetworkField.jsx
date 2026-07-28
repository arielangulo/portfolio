import { useMemo, useCallback } from "react";
import Particles, { useParticlesProvider } from "@tsparticles/react";

// Fondo de partículas conectadas: se lee como una topología de red /
// mapa de tráfico, coherente con el perfil de networking + cloud.
// El engine (loadSlim) se registra una sola vez en App.jsx vía ParticlesProvider.
export default function NetworkField() {
  const { loaded } = useParticlesProvider();

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 46,
          density: { enable: true, area: 900 },
        },
        color: { value: ["#7C9473", "#EDE8DA", "#4E5F45"] },
        opacity: { value: { min: 0.35, max: 0.8 } },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 140,
          color: "#4E5F45",
          opacity: 0.45,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.35,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 160, links: { opacity: 0.7 } },
        },
      },
    }),
    []
  );

  const particlesLoaded = useCallback(async () => {}, []);

  if (!loaded) return null;

  return (
    <Particles
      id="network-field"
      className="network-field"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  );
}
