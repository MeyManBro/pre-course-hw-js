const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

function searchOrange() {
  if (words.indexOf("апельсин") === 2) {
    return console.log('Ура! нашел');
  } else {
    return console.log('Придется поискать в другом магазине…');
  }
}

searchOrange();

