var rules = {
  categories: ['Food', 'Appliances', 'Games', 'Arts & Crafts', 'Baby',
               'Beauty', 'Books', 'Music', 'Clothing', 'Jewellery', 'Art', 'Electronics',
               'Furniture', 'Kitchen', 'Kindle', 'Office products', 'Musical Instruments',
               'Sports', 'Pet Supplies', 'Tools', 'Toys', 'Booze'],
  words: ['cheese', 'Star Wars', 'Star Trek', 'cats', 'dogs', 'office equipment', 'pizza'],
  prices: ['5.99', '9.99'],
  items: [2, 3, 4, 5],
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  challenges: [
    { name: 'Category Down', description: 'You can’t buy anything from category: {}.', count: 3, type: 'categories'},
    { name: 'Budget Battle',
      description: "Limited amount of money. You can only spend up to ${}. \
        You can use coupons, because I know that\s what you were worried about.",
        count: 1, type: 'prices'},
    { name: 'Cart Swap',
      description: 'You can only buy something you already saw in someone else’s cart.'},
    { name: 'Express Lane',
      description: 'You can\'t buy more than {} items and you have to wait in the express lane when you buy them.',
      count: 1, type: 'items'},
    { name: 'Flip This Present',
      description: 'You need to incorporate {} into your present.', count: 1, type: 'words'},
    { name: 'Item List',
      description: 'You need to incorporate these 3 items in your present: {}.', count: 3, type: 'words'},
    { name: 'Keep It Sample',
      description: 'You can only use things that you find in the sample displays of the store.'},
    { name: 'Musical Carts',
      description: "Walk around aisles until the song that is currently playing stops. \
        Whatever aisle you’re left on is the one you have to buy items from."},
    { name: 'No Carts Allowed',
      description: 'You can’t use a cart; you must carry your items around the store.'},
    { name: 'One Ingredient Per Category',
      description: "You can only use items from these categories, and you can \
        only use at most one item per category: {}.",
        count: 3, type: 'categories'},
    { name: 'Red Light Special', description: 'You can only use items on sale.'},
    { name: 'Un-gredient List',
      description: "You are not allowed to include anything from \
        the {} category in your present.",
      count: 1, type: 'categories'},
    { name: 'Alphabet Soup',
      description: 'You can only buy items that start with the letter: {}.',
      count: 1, type: 'letters'},
    { name: 'Unpresidential',
      description: "Go check Donald Trump's Twitter feed. Yeah, it's gross, \
        but this is a competition, dammit, and sometimes you gotta make sacrifices. \
        Count up every tweet he's made today, and you must find a product that \
        contains that number of items. <br><br> \
        For example, if that babbling cesspool \
        manages to type seven whiny factless tweets this morning at 3am, then \
        you must find a package of, say, seven donuts. Or seven markers. Or \
        seven something. If he hasn't tweeted at all yet today, take a deep \
        breath, thank the odd circumstances that brought you here, and instead \
        you must find something that comes in a package of two."
    },
    { name: 'Tubular!',
      description: "Far out, dude! Totally rad, because you're gonna have to buy \
        something that comes in a tube. It can be anything, as long as the \
        packaging is (or vaguely resembles) a cylinder."
    },
    { name: 'Her Royal Highness',
      description: "Tally ho! Take the lift to the lorry and have some digestives \
        during high tea while rooting for your favorite footy club! (Are the Brits \
        reading this mad at us yet?) Anyway, you have to buy a product of England \
        in this challenge. Everything's fair game, as long as it was made in \
        England."
    },
    { name: 'I HAVE THE POWERRR⚡️',
      description: "Isn't it neat that we live in the modern era, with pizza \
        delivery and Real World/Road Rules Challenge and MySpace? Take some time \
        to appreciate how nifty electricity is by gifting something that makes \
        direct use of power."
    },
    { name: 'The Name Game',
      description: "Shirley! Shirley, Shirley / Bo-ber-ley, bo-na-na fanna / \
        Fo-fer-ley. fee fi mo-mer-ley, Shirley! <br><br> \
        In this name game you need to \
        count up the number of letters in your gift recipient's name and buy \
        them something that has the exact amount of letters. So, in this case, \
        \"Shirley\" means you'd buy something like \"bananas\" (ironically \
        enough), \"seafood\", or \"napkins\". (Don't get them napkins, though,\
        unless they're really cute napkins. Otherwise you'd be boring.)"
    }
  ]
}

function itsLit(){
    var randomLength = Math.floor(Math.random() *(rules.challenges.length -1)) ;
    
    if(rules.challenges[randomLength].type){
    items(randomLength);   
    }
    
    var a = document.getElementById("name");
    a.innerHTML = rules.challenges[randomLength].name;
      var b = document.getElementById("desc");
    b.innerHTML = rules.challenges[randomLength].description;
    
    
}

function items(randomLength){
    var name =rules.challenges[randomLength].type;
 
    var lengthOfItems =rules.challenges[randomLength].count;
    var items = eval("rules." + name);
    
    var listOfItems = [];
    for(var i=0; i<lengthOfItems ; i++){
        var b =items[Math.floor(Math.random()*(items.length-1))];
        listOfItems.push(b);
        
    }
    
    var concat =""
    //console.log(listOfItems.length);

    for(var i =0; i < listOfItems.length ; i++){
        if(i !== listOfItems.length -1){
            concat= concat +listOfItems[i] + ", ";

            
        }else{
             concat =  concat + listOfItems[i];
        }
        
    }
   // console.log(concat);
    
    
      rules.challenges[randomLength].description = rules.challenges[randomLength].description.replace("{}", concat);
    
//console.log(rules.challenges[randomLength].description);
    
    
    
    
        

    
}