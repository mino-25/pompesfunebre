// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fait défiler en haut à chaque changement de route
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
}
