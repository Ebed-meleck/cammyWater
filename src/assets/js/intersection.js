const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handler = (entries, observer) => {
  console.log(entries);
};
const observer = new IntersectionObserver(handler, options);
document.querySelectorAll("section.reveal").forEach((r) => {
  observer.observe(r);
});
