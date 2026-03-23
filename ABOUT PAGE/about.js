document.querySelectorAll(".about-copy .reveal, .band-card.reveal").forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 100, 500)}ms`;
});
