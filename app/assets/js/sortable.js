const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");
let candidate = Sortable.create(candidateDOM, {
  group: "shared",
  animation: 500,
  // onEnd: (event) => {
  //   console.log(event.to);
  //   console.log(event.from);
  //   console.log(event.oldIndex);
  //   console.log(event.newIndex);
  // }
});

let productBacklog = Sortable.create(productBacklogDOM, {
  group: "shared",
  onChange: (e) => {
    let order = productBacklog.toArray();
    // 取得 dataset
    console.log(order);
  }
});