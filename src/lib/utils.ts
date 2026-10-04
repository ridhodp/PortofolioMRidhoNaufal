export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToSection(href: string): void {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
