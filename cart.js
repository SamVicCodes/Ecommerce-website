const product = [
      {
        id: 1,
        image: "ear.png",
        title: "Headphones",
        price: "$20"
      },
      {
        id: 2,
        image: "mic.png",
        title: "Rode NT1 Microphone",
        price: "$45"
      },
      {
        id: 3,
        image: "wrist.png",
        title: "Smart Watch",
        price: "$30"
      },
      {
        id: 4,
        image: "lap.png",
        title: "HP Laptop Next Generation",
        price: "$70"
      },
      {
        id: 5,
        image: "camera.png",
        title: "250D Camera",
        price: "$60"
      },
      {
        id: 6,
        image: "torch.png",
        title: "Metal Dask Lamb",
        price: "$35"
      },
      {
        id: 7,
        image: "laprad.png",
        title: "Z Flip Foldable Mobile",
        price: "$55"
      },
      {
        id: 8,
        image: "pod.png",
        title: "Air Pod Pro",
        price: "$50"
      }
]
const categories = [...new Set(product.map((item) =>
  {return item}))]
  let cart = document.getElementById("root")
  cart.innerHTML = categories.map((item)=>
  {
    var {image, title, price} = item;
    return(
      `<div class ="box">
          <div class ="img-box">
            <img src=${image}></img>
          </div>
          <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add to cart</button>
          </div>
        </div>`
    )
  }).join("")