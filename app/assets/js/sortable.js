const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");

if (candidateDOM) {
  let candidate = Sortable.create(candidateDOM, {
    group: {
      name: "shared",
      pull: "clone"
    },
    animation: 500,
    sort: false,
    onAdd: (e) => {
      e.item.classList.add("d-none");
    }
  });

  let productBacklog = Sortable.create(productBacklogDOM, {
    group: "shared",
    animation: 500,
  });
}