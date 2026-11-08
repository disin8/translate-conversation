(() => {
  const storageKey = "tc-lang";
  const button = document.getElementById("lang-toggle");

  const apply = (lang) => {
    const next = lang === "ru" ? "ru" : "en";
    document.documentElement.lang = next;
    if (button) button.textContent = next.toUpperCase();
    try {
      localStorage.setItem(storageKey, next);
    } catch (_) {}
  };

  const saved = (() => {
    try {
      return localStorage.getItem(storageKey);
    } catch (_) {
      return null;
    }
  })();

  const fallback = (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
  apply(saved || fallback);

  button?.addEventListener("click", () => {
    apply(document.documentElement.lang === "ru" ? "en" : "ru");
  });
})();
