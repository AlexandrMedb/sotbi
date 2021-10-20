const rand = () => {
  return Math.floor(Math.random() * 10);
};

const data = fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => {
    let looser1 = rand();
    let looser2 = rand();
    if (looser1 == looser2) {
      looser2 = rand();
    }

    result = response
      .filter((el) => {
        if (el.id !== looser1 && el.id !== looser2) {
          return true;
        }
      })
      .map((el) => `${el.name} ${el.username}`);

    return result;
  });

const dataContainer = document.querySelector(".task3");
data.then((result) => {
  result.forEach((el) => {
    dataContainer.insertAdjacentHTML("beforeend", `<p>${el}</p>`);
  });
});
