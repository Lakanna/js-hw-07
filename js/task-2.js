const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const list = document.querySelector(".gallery");

// console.log(list);

function markup(arr) {
  // return images
  //   .map(({ url, alt }) => {
  //     return `<li class="list"><img class="js-img" src=${url} alt=${alt}></li>`;
  //   })
  //   .join("");
  return arr.reduce((acc, { url, alt }, idx) => {
    if (idx < 3) {
      console.log(idx);
      const markUp = `<li class="list"><img class="js-img" src=${url} alt=${alt}></li>`;
      acc.push(markUp);
    }
    return acc;
  }, [])
  .join("");
}

console.log(markup(images));





list.insertAdjacentHTML("afterbegin", markup(images));

const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  console.dir(form);
  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;

  console.dir(event.currentTarget);

  const textInput = document.querySelector(".text-input");
  const setFocusBtn = document.querySelector('[data-action="set"]');
  const removeFocusBtn = document.querySelector('[data-action="remove"]');

  setFocusBtn.addEventListener("click", () => {
    textInput.focus();
  });

  removeFocusBtn.addEventListener("click", () => {
    textInput.blur();
  });

  textInput.addEventListener("focus", () => {
    textInput.value = "This input has focus";
  });

  textInput.addEventListener("blur", () => {
    textInput.value = "";
  });
}
