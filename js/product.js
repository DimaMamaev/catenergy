//Список питания

const products = [
  {
    _id: "564216544126756",
    period: "на неделю питания",
    title: "Slim",
    description: "Вкус : Гречка",
    weight: "Вес : 500Г",
    cost: "Цена : 400Р",
    logo: "img/buckwheat-small-mobile@1x.jpg"
  },
  {
    _id: "56421645346346456",
    period: "на неделю питания",
    title: "Slim",
    description: "Вкус : Рис",
    weight: "Вес : 500Г",
    cost: "Цена : 400Р",
    logo: "img/rice-small-mobile@1x.jpg"
  },
  {
    _id: "5642165234112334435",
    period: "на неделю питания",
    title: "Pro",
    description: "Вкус : Курица",
    weight: "Вес : 500Г",
    cost: "Цена : 700Р",
    logo: "img/chicken-small-mobile@1x.jpg"
  },
  {
    _id: "234234235234112334435",
    period: "на неделю питания",
    title: "Pro",
    description: "Вкус : Рыба",
    weight: "Вес : 500Г",
    cost: "Цена : 700Р",
    logo: "img/fish-small-mobile@1x.jpg"
  }
];

(function(arrOfProd) {
  const objOfProd = arrOfProd.reduce((acc, prod) => {
    acc[prod._id] = prod;
    return acc;
  }, {});
  
  const prodContainer = document.querySelector(".products__list");
  const programmSelector = document.getElementById("programm__select");

  programmSelector.addEventListener("change", selectorHandler);
  prodContainer.addEventListener("click", prodDeleteHandler);

 function selectorHandler(e) {
    const selectedProgramm = programmSelector.value;
    if (selectedProgramm === "Набор массы") {
      renderProProd(objOfProd);
    } else if (selectedProgramm === "Похудение") {
      renderSlimProd(objOfProd);
  }
}

  
  function renderProProd(prodList) {
    const fragment = document.createDocumentFragment();
    Object.values(prodList)
      .filter(item => item.title === "Pro")
      .forEach(prod => {
        const li = listProduct(prod);
        fragment.appendChild(li);
      });
    prodContainer.appendChild(fragment);
  }
  function renderSlimProd(prodList) {
    const fragment = document.createDocumentFragment();
    Object.values(prodList)
      .filter(item => item.title === "Slim")
      .forEach(prod => {
        const li = listProduct(prod);
        fragment.appendChild(li);
      });
    prodContainer.appendChild(fragment);
  }

  function listProduct({ _id, description, weight, cost, logo } = {}) {
    const li = document.createElement("li");
    li.classList.add("list__products");
    li.setAttribute("data-prod-id", _id);
    const img = document.createElement("img");
    img.classList.add("products__logo");
    img.setAttribute("src", logo);
    const p = document.createElement("p");
    p.classList.add("products__description");
    p.textContent=description;
    const spanWeight = document.createElement("span");
    spanWeight.classList.add("products__weight");
    spanWeight.textContent=weight;
    const spanCost = document.createElement("span")
    spanCost.classList.add("products__cost");
    spanCost.textContent=cost;
    const btn = document.createElement("button");
    btn.classList.add("products__close-btn");
    const liArray = [img, p, spanWeight, spanCost, btn];
    liArray.forEach(elem => {
      li.appendChild(elem)
    });
    return li;
  }
  function deleteProd (idProd) {
    const { description, weight} = objOfProd[idProd];
    const deleteConfirm = confirm (`Удаление продукта ${description}, ${weight} может привести к проблемам в питании Вашего питомца!`);
    if (!deleteConfirm) return deleteConfirm;
    delete objOfProd[idProd];
    return deleteConfirm;
  }
  function deleteProdFromHtml (confirm, el) {
    if (!confirm) return;
    el.remove();
  }
  function prodDeleteHandler ({target}) {
    if (target.classList.contains("products__close-btn")) {
      const parentProd = target.closest("[data-prod-id]");
      const idProd = parentProd.dataset.prodId;
      const confirm = deleteProd(idProd);
      deleteProdFromHtml(confirm, parentProd);
    }
  }

}) (products);
