import { Component } from '@angular/core';
import { Iwindow } from './iwindow';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResult : any ;
  data:String ;
  products: any =[{
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "filename": "0.jpg",
    "price": 28.1,
    "rating": 4
  }, {
    "title": "Sweet fresh strawberry",
    "type": "fruit",
    "description": "Sweet fresh strawberry on the wooden table",
    "filename": "1.jpg",
    "price": 29.45,
    "rating": 4
  }, {
    "title": "Asparagus",
    "type": "vegetable",
    "description": "Asparagus with ham on the wooden table",
    "filename": "2.jpg",
    "price": 18.95,
    "rating": 3
  }, {
    "title": "Green smoothie",
    "type": "dairy",
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "filename": "3.jpg",
    "price": 17.68,
    "rating": 4
  }, {
    "title": "Raw legums",
    "type": "vegetable",
    "description": "Raw legums on the wooden table",
    "filename": "4.jpg",
    "price": 17.11,
    "rating": 2
  }, {
    "title": "Baking cake",
    "type": "dairy",
    "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    "filename": "5.jpg",
    "price": 11.14,
    "rating": 4
  }, {
    "title": "Pesto with basil",
    "type": "vegetable",
    "description": "Italian traditional pesto with basil, chesse and oil",
    "filename": "6.jpg",
    "price": 18.19,
    "rating": 2
  }, {
    "title": "Hazelnut in black ceramic bowl",
    "type": "vegetable",
    "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    "filename": "7.jpg",
    "price": 27.35,
    "rating": 0
  }, {
    "title": "Fresh strawberry",
    "type": "fruit",
    "description": "Sweet fresh strawberry on the wooden table",
    "filename": "8.jpg",
    "price": 28.59,
    "rating": 4
  }, {
    "title": "Lemon and salt",
    "type": "fruit",
    "description": "Rosemary, lemon and salt on the table",
    "filename": "9.jpg",
    "price": 15.79,
    "rating": 5
  }, {
    "title": "Homemade bread",
    "type": "bakery",
    "description": "Homemade bread",
    "filename": "10.jpg",
    "price": 17.48,
    "rating": 3
  }, {
    "title": "Legums",
    "type": "vegetable",
    "description": "Cooked legums on the wooden table",
    "filename": "11.jpg",
    "price": 14.77,
    "rating": 0
  }, {
    "title": "Fresh tomato",
    "type": "vegetable",
    "description": "Fresh tomato juice with basil",
    "filename": "12.jpg",
    "price": 16.3,
    "rating": 2
  }, {
    "title": "Healthy breakfast",
    "type": "fruit",
    "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    "filename": "13.jpg",
    "price": 13.02,
    "rating": 2
  }, {
    "title": "Green beans",
    "type": "vegetable",
    "description": "Raw organic green beans ready to eat",
    "filename": "14.jpg",
    "price": 28.79,
    "rating": 1
  }, {
    "title": "Baked stuffed portabello mushrooms",
    "type": "bakery",
    "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    "filename": "15.jpg",
    "price": 20.31,
    "rating": 1
  }, {
    "title": "Strawberry jelly",
    "type": "fruit",
    "description": "Homemade organic strawberry jelly in a jar",
    "filename": "16.jpg",
    "price": 14.18,
    "rating": 1
  }, {
    "title": "Pears juice",
    "type": "fruit",
    "description": "Fresh pears juice on the wooden table",
    "filename": "17.jpg",
    "price": 19.49,
    "rating": 4
  }, {
    "title": "Fresh pears",
    "type": "fruit",
    "description": "Sweet fresh pears on the wooden table",
    "filename": "18.jpg",
    "price": 15.12,
    "rating": 5
  }, {
    "title": "Caprese salad",
    "type": "vegetable",
    "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
    "filename": "19.jpg",
    "price": 16.76,
    "rating": 5
  }, {
    "title": "Oranges",
    "type": "fruit",
    "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
    "filename": "20.jpg",
    "price": 21.48,
    "rating": 4
  }, {
    "title": "Vegan food",
    "type": "vegetable",
    "description": "Concept of vegan food",
    "filename": "21.jpg",
    "price": 29.66,
    "rating": 4
  }, {
    "title": "Breakfast with muesli",
    "type": "dairy",
    "description": "Concept of healthy breakfast with muesli",
    "filename": "22.jpg",
    "price": 22.7,
    "rating": 2
  }, {
    "title": "Honey",
    "type": "bakery",
    "description": "Honey and honeycell on the table",
    "filename": "23.jpg",
    "price": 17.01,
    "rating": 2
  }, {
    "title": "Breakfast with cottage",
    "type": "fruit",
    "description": "Healthy breakfast with cottage cheese and strawberry",
    "filename": "24.jpg",
    "price": 14.05,
    "rating": 1
  }, {
    "title": "Strawberry smoothie",
    "type": "fruit",
    "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
    "filename": "25.jpg",
    "price": 28.86,
    "rating": 2
  }, {
    "title": "Strawberry and mint",
    "type": "fruit",
    "description": "Homemade muesli with strawberry and mint",
    "filename": "26.jpg",
    "price": 26.21,
    "rating": 4
  }, {
    "title": "Ricotta",
    "type": "dairy",
    "description": "Ricotta with berry and mint",
    "filename": "27.jpg",
    "price": 27.81,
    "rating": 5
  }, {
    "title": "Cuban sandwiche",
    "type": "bakery",
    "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
    "filename": "28.jpg",
    "price": 18.5,
    "rating": 4
  }, {
    "title": "Granola",
    "type": "dairy",
    "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
    "filename": "29.jpg",
    "price": 29.97,
    "rating": 3
  }, {
    "title": "Smoothie with chia seeds",
    "type": "fruit",
    "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
    "filename": "30.jpg",
    "price": 25.26,
    "rating": 5
  }, {
    "title": "Yogurt",
    "type": "dairy",
    "description": "Homemade yogurt with raspberry and mint",
    "filename": "31.jpg",
    "price": 27.61,
    "rating": 4
  }, {
    "title": "Sandwich with salad",
    "type": "vegetable",
    "description": "Vegan sandwich with salad, tomato and radish",
    "filename": "32.jpg",
    "price": 22.48,
    "rating": 5
  }, {
    "title": "Cherry",
    "type": "fruit",
    "description": "Cherry with sugar on old table",
    "filename": "33.jpg",
    "price": 14.35,
    "rating": 5
  }, {
    "title": "Raw asparagus",
    "type": "vegetable",
    "description": "Raw fresh asparagus salad with cheese and dressing",
    "filename": "34.jpg",
    "price": 22.97,
    "rating": 4
  }, {
    "title": "Corn",
    "type": "vegetable",
    "description": "Grilled corn on the cob with salt and butter",
    "filename": "35.jpg",
    "price": 13.55,
    "rating": 2
  }, {
    "title": "Vegan",
    "type": "vegan",
    "description": "Concept of healthy vegan eating",
    "filename": "36.jpg",
    "price": 28.96,
    "rating": 5
  }, {
    "title": "Fresh blueberries",
    "type": "fruit",
    "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    "filename": "37.jpg",
    "price": 21.01,
    "rating": 4
  }, {
    "title": "Smashed avocado",
    "type": "fruit",
    "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    "filename": "38.jpg",
    "price": 25.88,
    "rating": 0
  }, {
    "title": "Italian ciabatta",
    "type": "bakery",
    "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    "filename": "39.jpg",
    "price": 15.18,
    "rating": 1
  }, {
    "title": "Rustic breakfast",
    "type": "dairy",
    "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    "filename": "40.jpg",
    "price": 21.32,
    "rating": 0
  }, {
    "title": "Sliced lemons",
    "type": "fruit",
    "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    "filename": "41.jpg",
    "price": 27.14,
    "rating": 2
  }, {
    "title": "Plums",
    "type": "fruit",
    "description": "Yellow and red sweet plums",
    "filename": "42.jpg",
    "price": 19.18,
    "rating": 1
  }, {
    "title": "French fries",
    "type": "bakery",
    "description": "Homemade oven baked french fries with ketchup",
    "filename": "43.jpg",
    "price": 18.32,
    "rating": 3
  }, {
    "title": "Strawberries",
    "type": "fruit",
    "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
    "filename": "44.jpg",
    "price": 15.13,
    "rating": 3
  }, {
    "title": "Ground beef meat burger",
    "type": "meat",
    "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
    "filename": "45.jpg",
    "price": 11.73,
    "rating": 5
  }, {
    "title": "Tomatoes",
    "type": "fruit",
    "description": "Organic tomatoes made with love",
    "filename": "46.jpg",
    "price": 26.03,
    "rating": 4
  }, {
    "title": "Basil",
    "type": "vegetable",
    "description": "Concept of vegan food with basil",
    "filename": "47.jpg",
    "price": 15.19,
    "rating": 4
  }, {
    "title": "Fruits bouquet",
    "type": "fruit",
    "description": "Abstract citrus fruits bouquet on blue background",
    "filename": "48.jpg",
    "price": 18.18,
    "rating": 1
  }, {
    "title": "Peaches on branch",
    "type": "fruit",
    "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    "filename": "49.jpg",
    "price": 25.62,
    "rating": 3
  }]; 

  
  
  dictateIt() {
    var product = this.products; 
    var search1 :any;
    var type = (<HTMLInputElement>document.getElementById('sel1')).value;
    function search(key:any){
      if(type == 'title'){
        search1 =  product.filter(e=>{
          return e.title.toLowerCase().includes(key);
      })
      }
      else if(type == 'type'){
        search1 = product.filter(e=>{
          return e.type.toLowerCase().includes(key);
        })
      }
      return search1;

    };

    const {webkitSpeechRecognition} : Iwindow = <Iwindow><unknown>window;
    (<HTMLInputElement>document.getElementById('text')).value = "";
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function (event) {
        for(var i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            (<HTMLInputElement>document.getElementById('text')).value += event.results[i][0].transcript;
          }
        }
        this.searchResult = search((<HTMLInputElement>document.getElementById('text')).value);
        console.log(this.searchResult);

        if(this.searchResult.length>0){
        this.searchResult.forEach(element => {
          this.data += `<div class="card" style="width:300px ;height: 550px;margin: 20px; display: inline-block;">
          <img class="card-img-top" src="../assets/images/${element.filename}" alt="Card image" style="height: 200px; width: 300px;">
          <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <h6><b>Type: </b>${element.type}</h6><hr>
            <p class="card-text">${element.description}</p>
            <p class="card-text"><b>Price: </b>${element.price}</p>
            <p class="card-text"><b>Rating: </b>${element.rating}</p>
            
          </div>
        </div>`;
        });
        document.getElementById('content').innerHTML = this.data;
      }
      else{
        document.getElementById('content').innerHTML = 'no items found';
      }
    };
    recognition.start();
}



}
