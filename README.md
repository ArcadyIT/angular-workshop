# angular-workshop
Code snippets that go along with Arcady's Angular Workshop.

## recipe-list/models/recipe.ts

```javascript
export class Recipe {
  id: string;
  imageUrl: string;
  description: string;
  title: string;
  prep: string;
  chef: Chef;
  ingredients: Ingredient[];
}

export class Chef {
  name: string;
  chefImageUrl: string;
}

export class Ingredient {
  ingredientName: string;
  unit: string;
}
```

## recipe-list/shared/recipe-list.mock.ts

```typescript
import { Recipe } from '../models/recipe';

export const RECIPES: Recipe[] = JSON.parse(`
[
  {
      "id": "5DBzA0a",
      "imageUrl": "https://static.ah.nl/static/recepten/img_110968_445x297_JPG.jpg",
      "description": "De groenten wok je en eet je met verse ravioli en buffelburrata.",
      "title": "Ra­vi­o­li met to­maat, au­ber­gi­ne en bur­ra­ta",
      "prep": "Snijd de aubergine in blokjes van 1 cm. Verhit de olie in een wok en roerbak de aubergine 10 min. op middelhoog vuur. Halveer ondertussen de tomaten en rasp ze op de snijkant op een grove rasp. Je houdt dan alleen het vel over, dat wordt niet gebruikt.<br>            Kook de pasta gaar volgens de aanwijzingen op de verpakking. Halveer de burrata en snijd de ham en alleen de basilicumblaadjes in reepjes.<br>            Haal de wok van het vuur en meng de geraspte tomaat, de ham, het basilicum en de kappertjes door de aubergine. Verdeel de lauwwarme pasta over de borden en schep de saus erop. Leg op elk bord een halve burrata. Bestrooi royaal met versgemalen peper.<br>",
      "chef": {
          "name": "Gordon Ramsay",
          "chefImageUrl": "https://media.glassdoor.com/people/sql/157167/gordon-ramsay-holdings-gordon-ramsay.png"
      },
      "ingredients": [
          {
              "ingredientName": "aubergine",
              "unit": "1"
          },
          {
              "ingredientName": "traditionele olijfolie",
              "unit": "2 el"
          },
          {
              "ingredientName": "tastytom-trostomaten",
              "unit": "190 g"
          },
          {
              "ingredientName": "koelverse ravioli met burrata en tomaat",
              "unit": "250 g"
          },
          {
              "ingredientName": "buffelburrata",
              "unit": "125 g"
          },
          {
              "ingredientName": "parmaham",
              "unit": "70 g"
          },
          {
              "ingredientName": "verse basilicum",
              "unit": "7 1/2 g"
          },
          {
              "ingredientName": "kappertjes",
              "unit": "1 el"
          }
      ]
  },
  {
      "id": "5DBzA0b",
      "imageUrl": "https://static.ah.nl/static/recepten/img_110986_445x297_JPG.jpg",
      "description": "Diner voor twee? Dat vraagt om pasta gevúld met truffel en met een saus van truffel.",
      "title": "Mez­ze­lu­ne met pad­den­stoe­len­room­saus en spi­na­zie",
      "prep": "Veeg de paddenstoelen schoon met keukenpapier en snijd ze in plakjes. Verhit de olie in een wok en bak de paddenstoelen 3 min. op middelhoog vuur. Kook ondertussen de pasta volgens de aanwijzingen op de verpakking.<br>            Voeg de spinazie toe aan de paddenstoelen en roerbak 2 min. Voeg de truffeltapenade en de slagroom toe. Laat even inkoken op hoog vuur. Breng op smaak met peper en eventueel zout.<br>            Rasp de kaas. Meng de pasta voorzichtig met de paddenstoelensaus. Bestrooi met de kaas.<br>",
      "chef": {
          "name": "Sergio Herman",
          "chefImageUrl": "https://www.detafelvantine.be/sites/default/files/sergio_S9L0700-B100.jpg"
      },
      "ingredients": [
          {
              "ingredientName": "paddenstoelen voor pasta",
              "unit": "200 g"
          },
          {
              "ingredientName": "traditionele olijfolie",
              "unit": "2 el"
          },
          {
              "ingredientName": "koelverse mezzelune met ricotta, eekhoorntjesbrood en truffel",
              "unit": "250 g"
          },
          {
              "ingredientName": "verse spinazie",
              "unit": "200 g"
          },
          {
              "ingredientName": "truffel-paddenstoelentapenade",
              "unit": "1 el"
          },
          {
              "ingredientName": "slagroom",
              "unit": "125 ml"
          },
          {
              "ingredientName": "Pecorino Romano",
              "unit": "25 g"
          }
      ]
  },
  {
      "id": "5DBzA0C",
      "imageUrl": "https://static.ah.nl/static/recepten/img_006254_445x297_JPG.jpg",
      "description": "Pak groots uit met dit grand dessert. IJs, koekjes, chocolademousse. Loopt het water je al in de mond?",
      "title": "Grand des­sert met 3 va­ri­a­ties",
      "prep": "Klop 300 ml van de slagroom luchtig. Schep met een kleine lepel het vruchtvlees uit 8 van de passievruchten. Breek de schuimkransjes in grove kruimels en spatel deze, samen met de passievruchtpulp, luchtig door de slagroom. Schep het mengsel in de openingen van de cakevormpjes of in kleine bakjes. Laat ca. 1 1/2 uur in de vriezer opstijven.<br>Smelt de chocolade in een pannetje dat in een iets grotere pan heet water hangt (au bain-marie). Laat afkoelen. Klop de rest van de slagroom en spatel de afgekoelde chocolade erdoor. Verdeel over de borrelglaasjes en laat ca. 1 uur in de koelkast opstijven.<br>           Verwarm de oven voor op 180 °C. Snijd de vellen ontdooide filodeeg op de vouwlijnen door en snijd de banen vervolgens doormidden zodat u 6 gelijke rechthoeken krijgt. Bestrijk ze met een kwastje met losgeklopt ei en leg er een rechthoek bovenop. Druk goed aan. Bestrijk nogmaals met ei en snijd ze diagonaal doormidden. Strooi er tot slot de helft van de kokos over. Leg ze op een met bakpapier bedekte bakplaat en bak ze in het midden van de oven in 8-10 min. goudbruin.<br>            Laat de koekjes afkoelen en bestrooi dun met 2 eetlepels van de poedersuiker. U hebt 3 koekjes p.p. nodig, dus u houdt er een paar over. De koekjes breken snel, dus het is handig om wat reserve te hebben. Doe de resterende kokos in een kom, schenk het (hete) water bij en laat even wellen. Rasp de groene schil van de schoongeboende limoenen en pers ze uit. Meng het rasp, het sap, de kokos en de rest van de poedersuiker door de mascarpone.<br>Bestrooi de grote borden met poedersuiker. Leg op elk bord een koekje. Beleg ieder koekje met een schepje mascarponemengsel, bedek met het tweede koekje, schep er weer wat mascarpone op en leg er het laatste koekje op. Neem vlak voor het opdienen het passievruchtroomijs uit de vriezer. Duw het ijs uit de vormpjes en leg op de borden. Schep de pulp van de resterende passievruchten erover. Zet tot slot een borrelglaasje chocolade-sinaasappelcrème op elk bord.</br>",
      "chef": {
          "name": "Will Goldfarb",
          "chefImageUrl": "http://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2014/06/Will-Goldfarb_edit.jpg__1.jpg_.jpg?resize=603%2C%20364"
      },
      "ingredients": [
          {
              "ingredientName": "verse slagroom (beker à 250 ml)",
              "unit": "500 ml"
          },
          {
              "ingredientName": "passievruchten",
              "unit": "12"
          },
          {
              "ingredientName": "schuimkransjes",
              "unit": "8"
          },
          {
              "ingredientName": "chocolade extra puur orange (tablet)",
              "unit": "100 g"
          },
          {
              "ingredientName": "diepvries filodeeg",
              "unit": "8 plakken"
          },
          {
              "ingredientName": "middelgroot ei",
              "unit": "1"
          },
          {
              "ingredientName": "gemalen kokos",
              "unit": "8 el"
          },
          {
              "ingredientName": "poedersuiker",
              "unit": "10 el"
          },
          {
              "ingredientName": "kraanwater",
              "unit": "4 el"
          },
          {
              "ingredientName": "limoenen",
              "unit": "2"
          },
          {
              "ingredientName": "mascarpone (bakje)",
              "unit": "250 g"
          }
      ]
  },
  {
      "id": "5DBzA0D",
      "imageUrl": "https://static.ah.nl/static/recepten/img_110329_445x297_JPG.jpg",
      "description": "Mis je nu je veganistisch eet een goede romige pasta? Voilà!",
      "title": "Ve­gan pas­ta al fun­g­hi",
      "prep": "Kook de spaghetti volgens de aanwijzingen op de verpakking beetgaar. Snijd ondertussen de paddenstoelen voor pasta in stukken en de kastanjechampignons in plakken. Snijd de knoflook fijn en snipper de sjalot.<br>Verhit de olie in de pan en fruit de sjalot en knoflook al roerend 2 min. Voeg de rest van de olie en paddenstoelen toe en bak 8 min. op middelhoog vuur. Snijd ondertussen de peterselie fijn.<br>            Voeg de rijstcuisine, spaghetti en de bouillonpoeder toe aan de paddenstoelen en verwarm 2 min. al roerend. Breng royaal op smaak met versgemalen peper en eventueel zout. Strooi de peterselie en edelgistvlokken over de pasta.<br>",
      "chef": {
          "name": "Jamie Oliver",
          "chefImageUrl": "https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/user/avatar/2143/JAMIE-PIC-TO-USE140.jpg"
      },
      "ingredients": [
          {
              "ingredientName": "spaghetti",
              "unit": "300 g"
          },
          {
              "ingredientName": "paddenstoelen voor pasta",
              "unit": "200 g"
          },
          {
              "ingredientName": "kastanjechampignons",
              "unit": "400 g"
          },
          {
              "ingredientName": "knoflook",
              "unit": "1 teen"
          },
          {
              "ingredientName": "sjalot",
              "unit": "1"
          },
          {
              "ingredientName": "milde olijfolie",
              "unit": "1 el"
          },
          {
              "ingredientName": "verse platte peterselie",
              "unit": "15 g"
          },
          {
              "ingredientName": "Alpro rice cuisine kookroom",
              "unit": "250 ml"
          },
          {
              "ingredientName": "Bio Today vegetable stock powder",
              "unit": "½ el"
          },
          {
              "ingredientName": "edelgistvlokken",
              "unit": "2 el"
          }
      ]
  }
]`);

```
