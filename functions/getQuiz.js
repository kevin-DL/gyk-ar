const quizzes = [
  [
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "Where%20is%20the%20train%20station%20%22Llanfair%C2%ADpwllgwyngyll%C2%ADgogery%C2%ADchwyrn%C2%ADdrobwll%C2%ADllan%C2%ADtysilio%C2%ADgogo%C2%ADgoch%22%3F",
      correct_answer: "Wales",
      incorrect_answers: ["Moldova", "Czech%20Republic", "Denmark"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What%20is%20the%20most%20common%20surname%20Wales%3F",
      correct_answer: "Jones",
      incorrect_answers: ["Williams", "Davies", "Evans"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "In%20past%20times%2C%20what%20would%20a%20gentleman%20keep%20in%20his%20fob%20pocket%3F",
      correct_answer: "Watch",
      incorrect_answers: ["Money", "Keys", "Notebook"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "How%20would%20one%20say%20goodbye%20in%20Spanish%3F",
      correct_answer: "Adi%C3%B3s",
      incorrect_answers: ["%20Hola", "Au%20Revoir", "Salir"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%20the%20Morse%20code%2C%20which%20letter%20is%20indicated%20by%203%20dots%3F%20",
      correct_answer: "S",
      incorrect_answers: ["O", "A", "C"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "On%20a%20dartboard%2C%20what%20number%20is%20directly%20opposite%20No.%201%3F",
      correct_answer: "19",
      incorrect_answers: ["20", "12", "15"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "What%20was%20the%20destination%20of%20the%20missing%20flight%20MH370%3F",
      correct_answer: "Beijing",
      incorrect_answers: ["Kuala%20Lumpur", "Singapore", "Tokyo"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "According%20to%20the%20United%20States%27%20CDC%2C%20one%20in%20how%20many%20Americans%20die%20annually%20due%20to%20smoking%3F",
      correct_answer: "Five",
      incorrect_answers: ["Twenty", "Ten", "One%20hundred"]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "easy",
      question:
        "What%20do%20the%20letters%20of%20the%20fast%20food%20chain%20KFC%20stand%20for%3F",
      correct_answer: "Kentucky%20Fried%20Chicken",
      incorrect_answers: [
        "Kentucky%20Fresh%20Cheese",
        "Kibbled%20Freaky%20Cow",
        "Kiwi%20Food%20Cut"
      ]
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "hard",
      question: "Where%20is%20Apple%20Inc.%20headquartered%3F",
      correct_answer: "Cupertino%2C%20California",
      incorrect_answers: [
        "Redwood%20City%2C%20California",
        "Redmond%2C%20Washington",
        "Santa%20Monica%2C%20CA"
      ]
    }
  ],
  [
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "The%20Harvard%20architecture%20for%20micro-controllers%20added%20which%20additional%20bus%3F",
      correct_answer: "Instruction",
      incorrect_answers: ["Address", "Data", "Control"]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In%20any%20programming%20language%2C%20what%20is%20the%20most%20common%20way%20to%20iterate%20through%20an%20array%3F",
      correct_answer: "%27For%27%20loops",
      incorrect_answers: [
        "%27If%27%20Statements",
        "%27Do-while%27%20loops",
        "%27While%27%20loops"
      ]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "When%20Gmail%20first%20launched%2C%20how%20much%20storage%20did%20it%20provide%20for%20your%20email%3F",
      correct_answer: "1GB",
      incorrect_answers: ["512MB", "5GB", "Unlimited"]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which%20computer%20hardware%20device%20provides%20an%20interface%20for%20all%20other%20connected%20devices%20to%20communicate%3F",
      correct_answer: "Motherboard",
      incorrect_answers: [
        "Central%20Processing%20Unit",
        "Hard%20Disk%20Drive",
        "Random%20Access%20Memory"
      ]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which%20of%20these%20is%20the%20name%20for%20the%20failed%20key%20escrow%20device%20introduced%20by%20the%20National%20Security%20Agency%20in%201993%3F",
      correct_answer: "Clipper%20Chip",
      incorrect_answers: ["Enigma%20Machine", "Skipjack", "Nautilus"]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which%20one%20of%20these%20is%20not%20an%20official%20development%20name%20for%20a%20Ubuntu%20release%3F",
      correct_answer: "Mystic%20Mansion",
      incorrect_answers: [
        "Trusty%20Tahr",
        "Utopic%20Unicorn",
        "Wily%20Werewolf"
      ]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which%20computer%20language%20would%20you%20associate%20Django%20framework%20with%3F",
      correct_answer: "Python",
      incorrect_answers: ["C%23", "C%2B%2B", "Java"]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%20computing%20terms%2C%20typically%20what%20does%20CLI%20stand%20for%3F",
      correct_answer: "Command%20Line%20Interface",
      incorrect_answers: [
        "Common%20Language%20Input",
        "Control%20Line%20Interface",
        "Common%20Language%20Interface"
      ]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which%20of%20the%20following%20is%20a%20personal%20computer%20made%20by%20the%20Japanese%20company%20Fujitsu%3F",
      correct_answer: "FM-7",
      incorrect_answers: ["PC-9801", "Xmillennium%20", "MSX"]
    },
    {
      category: "Science%3A%20Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "The%20name%20of%20technology%20company%20HP%20stands%20for%20what%3F",
      correct_answer: "Hewlett-Packard",
      incorrect_answers: ["Howard%20Packmann", "Husker-Pollosk", "Hellman-Pohl"]
    }
  ],
  [
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%20Dragon%20Ball%20Z%2C%20who%20was%20the%20first%20character%20to%20go%20Super%20Saiyan%202%3F",
      correct_answer: "Gohan",
      incorrect_answers: ["Goku", "Vegeta", "Trunks"]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "easy",
      question:
        "Who%20was%20given%20the%20title%20%22Full%20Metal%22%20in%20the%20anime%20series%20%22Full%20Metal%20Alchemist%22%3F",
      correct_answer: "Edward%20Elric",
      incorrect_answers: [
        "Alphonse%20Elric",
        "Van%20Hohenheim",
        "Izumi%20Curtis"
      ]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%20the%20anime%20series%20%22Full%20Metal%20Alchemist%22%2C%20what%20do%20Alchemists%20consider%20the%20greatest%20taboo%3F",
      correct_answer: "Human%20Transmutation%20",
      incorrect_answers: [
        "Transmuting%20Lead%20Into%20Gold",
        "Using%20Alchemy%20For%20Crime%20",
        "Preforming%20Without%20A%20Permit"
      ]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "The%20main%20protagonist%20of%20the%20fifth%20part%20of%20JoJo%27s%20Bizarre%20Adventure%20is%20which%20of%20the%20following%3F",
      correct_answer: "Giorno%20Giovanna",
      incorrect_answers: ["Guido%20Mista", "Jonathan%20Joestar", "Joey%20JoJo"]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "easy",
      question:
        "In%20the%20anime%20Noragami%20who%20is%20one%20of%20the%20main%20protagonists%3F",
      correct_answer: "Yukine",
      incorrect_answers: ["Karuha", "Mineha", "Mayu"]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%20the%20ADV%20%28English%29%20Dub%20of%20the%20anime%20%22Ghost%20Stories%22%2C%20which%20character%20is%20portrayed%20as%20a%20Pentacostal%20Christian%3F",
      correct_answer: "Momoko%20Koigakubo",
      incorrect_answers: [
        "Hajime%20Aoyama",
        "Satsuki%20Miyanoshita",
        "Mio%20Itai"
      ]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "easy",
      question:
        "The%20two%20main%20characters%20of%20%22No%20Game%20No%20Life%22%2C%20Sora%20and%20Shiro%2C%20together%20go%20by%20what%20name%3F",
      correct_answer: "Blank",
      incorrect_answers: ["Immanity", "Disboard", "Warbeasts"]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%20%22One%20Piece%22%2C%20which%20one%20of%20the%20following%20is%20NOT%20an%20Ancient%20Weapon%3F",
      correct_answer: "Jupiter",
      incorrect_answers: ["Uranus", "Poseidon", "Pluton"]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question: "Which%20studio%20animated%20Soul%20Eater%3F",
      correct_answer: "Bones",
      incorrect_answers: ["Kyoto%20Animation", "xebec", "Production%20I.G"]
    },
    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question: "What%20studio%20animated%20Fullmetal%20Alchemist%3F",
      correct_answer: "Bones",
      incorrect_answers: ["Trigger", "Pierrot", "xebec"]
    }
  ],
  [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "What%20is%20the%20nickname%20of%20Northampton%20town%27s%20rugby%20union%20club%3F",
      correct_answer: "Saints",
      incorrect_answers: ["Harlequins", "Saracens", "Wasps"]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which%20English%20football%20club%20has%20the%20nickname%20%27The%20Foxes%27%3F",
      correct_answer: "Leicester%20City",
      incorrect_answers: [
        "Northampton%20Town",
        "Bradford%20City",
        "West%20Bromwich%20Albion"
      ]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "A%20stimpmeter%20measures%20the%20speed%20of%20a%20ball%20over%20what%20surface%3F",
      correct_answer: "Golf%20Putting%20Green",
      incorrect_answers: [
        "%20Football%20Pitch",
        "Cricket%20Outfield",
        "Pinball%20Table"
      ]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "The%20F1%20season%20of%201994%20is%20remembered%20for%20what%20tragic%20event%3F",
      correct_answer: "Death%20of%20Ayrton%20Senna%20%28San%20Marino%29",
      incorrect_answers: [
        "The%20Showdown%20%28Australia%29",
        "Verstappen%20on%20Fire%20%28Germany%29",
        "Schumacher%27s%20Ban%20%28Britain%29"
      ]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which%20driver%20has%20been%20the%20Formula%201%20world%20champion%20for%20a%20record%207%20times%3F",
      correct_answer: "Michael%20Schumacher",
      incorrect_answers: ["Ayrton%20Senna", "Fernando%20Alonso", "Jim%20Clark"]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question: "Which%20team%20was%20the%202015-2016%20NBA%20Champions%3F",
      correct_answer: "Cleveland%20Cavaliers",
      incorrect_answers: [
        "Golden%20State%20Warriors",
        "Toronto%20Raptors",
        "Oklahoma%20City%20Thunders"
      ]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "hard",
      question:
        "Where%20was%20the%20Games%20of%20the%20XXII%20Olympiad%20held%3F",
      correct_answer: "Moscow",
      incorrect_answers: ["Barcelona", "Tokyo", "Los%20Angeles"]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "In%20Baseball%2C%20how%20many%20times%20does%20the%20ball%20have%20to%20be%20pitched%20outside%20of%20the%20strike%20zone%20before%20the%20batter%20is%20walked%3F",
      correct_answer: "4",
      incorrect_answers: ["1", "2", "3"]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "Who%20won%20the%202016%20Formula%201%20World%20Driver%27s%20Championship%3F",
      correct_answer: "Nico%20Rosberg",
      incorrect_answers: [
        "Lewis%20Hamilton",
        "Max%20Verstappen",
        "Kimi%20Raikkonen"
      ]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "What%20is%20the%20exact%20length%20of%20one%20non-curved%20part%20in%20Lane%201%20of%20an%20Olympic%20Track%3F",
      correct_answer: "84.39m",
      incorrect_answers: ["100m", "100yd", "109.36yd"]
    }
  ],
  [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What alcoholic drink is made from molasses?",
      correct_answer: "Rum",
      incorrect_answers: ["Gin", "Vodka", "Whisky"]
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "medium",
      question:
        "In World War II, Hawker Typhoons served in the Pacific theater.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "medium",
      question: "Which element has the atomic number of 7?",
      correct_answer: "Nitrogen",
      incorrect_answers: ["Oxygen", "Hydrogen", "Neon"]
    },
    {
      category: "Geography",
      type: "boolean",
      difficulty: "medium",
      question: "Vietnam is the only country in the world that starts with V. ",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
      correct_answer: "DING Ning (China)",
      incorrect_answers: [
        "LI Xiaoxia (China)",
        "Ai FUKUHARA (Japan)",
        "Song KIM (North Korea)"
      ]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What is the capital of Spain?",
      correct_answer: "Madrid",
      incorrect_answers: ["Barcelona", "Sevilla", "Toledo"]
    },
    {
      category: "Science & Nature",
      type: "boolean",
      difficulty: "hard",
      question:
        "The chemical element Lithium is named after the country of Lithuania.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Sports",
      type: "boolean",
      difficulty: "easy",
      question:
        "In Rugby League, performing a &quot;40-20&quot; is punished by a free kick for the opposing team.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Entertainment: Cartoon & Animations",
      type: "multiple",
      difficulty: "medium",
      question: "Adam West was the mayor of which cartoon town?",
      correct_answer: "Quahog",
      incorrect_answers: ["Springfield", "South Park", "Langley Falls"]
    },
    {
      category: "Entertainment: Books",
      type: "multiple",
      difficulty: "medium",
      question:
        "In Alice in Wonderland, what is the name of Alice&#039;s kitten?",
      correct_answer: "Dinah",
      incorrect_answers: ["Oscar", "Heath", "Smokey"]
    }
  ],
  [
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the code name given to Sonic the Hedgehog 4 during its development?",
      correct_answer: "Project Needlemouse",
      incorrect_answers: [
        "Project Bluespike",
        "Project Roboegg",
        "Project Darksphere"
      ]
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which one of these was not a beach landing site in the Invasion of Normandy?",
      correct_answer: "Silver",
      incorrect_answers: ["Gold", "Juno", "Sword"]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of these countries is &quot;doubly landlocked&quot; (surrounded entirely by one or more landlocked countries)?",
      correct_answer: "Uzbekistan",
      incorrect_answers: ["Switzerland", "Bolivia", "Ethiopia"]
    },
    {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "easy",
      question:
        "Alzheimer&#039;s disease primarily affects which part of the human body?",
      correct_answer: "Brain",
      incorrect_answers: ["Lungs", "Skin", "Heart"]
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
      correct_answer: "Animalympics",
      incorrect_answers: [
        "The Fox and the Hound",
        "The Black Cauldron",
        "The Great Mouse Detecive"
      ]
    },
    {
      category: "Entertainment: Books",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these book series is by James Patterson?",
      correct_answer: "Maximum Ride",
      incorrect_answers: [
        "Harry Potter",
        "The Legend of Xanth",
        "The Bartemaeus Trilogy"
      ]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the first company to use the term &quot;Golden Master&quot;?",
      correct_answer: "Apple",
      incorrect_answers: ["IBM", "Microsoft", "Google"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "In &quot;Call Of Duty: Zombies&quot;, what is the name of Samantha Maxis&#039; dog?",
      correct_answer: "Fluffy",
      incorrect_answers: ["Baxter", "Fido", "Henry"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the perk that was introduced in the &quot;Call Of Duty: Zombies&quot; map, &quot;Mob Of The Dead&quot;?",
      correct_answer: "Electric Cherry",
      incorrect_answers: ["Quick Revive", "Vulture Aid", "Tombstone"]
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "hard",
      question:
        "Pete Townshend collaborated with which famous guitarist for an event at Brixton Academy in 1985?",
      correct_answer: "David Gilmour",
      incorrect_answers: ["Jimmy Page", "Mark Knopfler", "Eric Clapton"]
    }
  ],
  [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
      correct_answer: "Jordan",
      incorrect_answers: ["Benetton", "Ferrari", "Mercedes"]
    },
    {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "medium",
      question:
        "The humerus, paired radius, and ulna come together to form what joint?",
      correct_answer: "Elbow",
      incorrect_answers: ["Knee", "Sholder", "Ankle"]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What geometric shape is generally used for stop signs?",
      correct_answer: "Octagon",
      incorrect_answers: ["Hexagon", "Circle", "Triangle"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "In the Portal series, Aperture Science was founded under what name in the early 1940s?",
      correct_answer: "Aperture Fixtures",
      incorrect_answers: [
        "Aperture Lavatories",
        "Aperture Science Innovators",
        "Wheatley Laboratories"
      ]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "Final Fantasy VI was originally released outside Japan under what name?",
      correct_answer: "Final Fantasy III",
      incorrect_answers: [
        "Final Fantasy VI",
        "Final Fantasy V",
        "Final Fantasy II"
      ]
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "multiple",
      difficulty: "medium",
      question: "Which of the following manga have the most tankouban volumes?",
      correct_answer: "Golgo 13",
      incorrect_answers: [
        "JoJo&#039;s Bizarre Adventure",
        "Detective Conan",
        "One Piece"
      ]
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which portuguese island is soccer player Cristiano Ronaldo from?",
      correct_answer: "Madeira",
      incorrect_answers: ["Terceira", "Santa Maria", "Porto Santo"]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "hard",
      question:
        "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
      correct_answer: "28%",
      incorrect_answers: ["13%", "20%", "7%"]
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which rapper had an album that went double platinum with no features?",
      correct_answer: "J. Cole",
      incorrect_answers: ["Kendrick Lamar", "Drake", "Big Sean"]
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which Japanese music group was formed to produce theme music for the anime &quot;Guilty Crown&quot;?",
      correct_answer: "Egoist",
      incorrect_answers: ["Goose house", "Babymetal", "Garnidelia"]
    }
  ],
  [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question:
        "The retail disc of Tony Hawk&#039;s Pro Skater 5 only comes with the tutorial.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which company did Gabe Newell work at before founding Valve Corporation?",
      correct_answer: "Microsoft",
      incorrect_answers: ["Apple", "Google", "Yahoo"]
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question:
        "What historical event was Tchaikovsky&#039;s 1812 Overture referencing?",
      correct_answer: "The Napoleonic Wars",
      incorrect_answers: [
        "The American War of 1812",
        "The Russian Revolution",
        "The Charge of the Light Brigade (Crimean War)"
      ]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "How long are all the cutscenes from Metal Gear Solid 4 (PS3, 2008) combined?",
      correct_answer: "8 hours",
      incorrect_answers: ["4 hours", "12 hours", "5 hours"]
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "easy",
      question: "Which brass instrument has the lowest pitch in an orchestra?",
      correct_answer: "Tuba",
      incorrect_answers: ["Trumpet", "Saxophone", "Trombone"]
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question:
        "In &quot;Super Mario 3D World&quot;, the Double Cherry power-up originated from a developer accidentally making two characters controllable.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question:
        "Gordon Freeman, the protagonist of &quot;Half-Life&quot;, is said to have once had a ponytail.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "How many times was Albert Einstein married in his lifetime?",
      correct_answer: "Twice",
      incorrect_answers: ["Five", "Thrice", "Once"]
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "easy",
      question:
        "According to the American rapper Nelly, what should you do when its hot in here?",
      correct_answer: "Take off all your clothes",
      incorrect_answers: [
        "Take a cool shower",
        "Drink some water",
        "Go skinny dipping"
      ]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question: "Which variant of the MP5 is depicted in Counter-Strike 1.6?",
      correct_answer: "MP5N",
      incorrect_answers: ["MP5SD", "MP5K", "MP5RAS"]
    }
  ],
  [
    {
      category: "Entertainment: Cartoon & Animations",
      type: "multiple",
      difficulty: "medium",
      question: "What is Scooby-Doo&#039;s real name?",
      correct_answer: "Scoobert",
      incorrect_answers: ["Scooter", "Scrappy", "Shooby"]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "In 2013 how much money was lost by Nigerian scams?",
      correct_answer: "$12.7 Billion",
      incorrect_answers: ["$95 Million", "$956 Million", "$2.7 Billion"]
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "multiple",
      difficulty: "hard",
      question: "Which of these anime have over 7,500 episodes?",
      correct_answer: "Sazae-san",
      incorrect_answers: ["Naruto", "One Piece", "Chibi Maruko-chan"]
    },
    {
      category: "Geography",
      type: "boolean",
      difficulty: "medium",
      question: "The Sonoran Desert is located in eastern Africa.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In computing terms, typically what does CLI stand for?",
      correct_answer: "Command Line Interface",
      incorrect_answers: [
        "Common Language Input",
        "Control Line Interface",
        "Common Language Interface"
      ]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the first primary weapon the player gets in &quot;PAYDAY: The Heist&quot;?",
      correct_answer: "AMCAR-4",
      incorrect_answers: ["Brenner 21", "Reinbeck", "M308"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "The numbering system with a radix of 16 is more commonly referred to as ",
      correct_answer: "Hexidecimal",
      incorrect_answers: ["Binary", "Duodecimal", "Octal"]
    },
    {
      category: "Entertainment: Television",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the &quot;Flash&quot; and &quot;Arrow&quot; spinoff featuring a team of characters that have appeared on both shows?",
      correct_answer: "Legends of Tomorrow",
      incorrect_answers: [
        "Heroes of Tomorrow",
        "The Justice Society of America",
        "The Justice Society"
      ]
    },
    {
      category: "Entertainment: Books",
      type: "multiple",
      difficulty: "medium",
      question:
        "What was the last message of the Dolphins in &quot;The Hitchhiker&#039;s Guide to the Galaxy&quot;?",
      correct_answer: "&quot;So long, and thanks for all the fish.&quot;",
      incorrect_answers: [
        "&quot;The answer is 42.&quot;",
        "&quot;Land of the brave.&quot;",
        "&quot;Goodbye cruel world!&quot;"
      ]
    },
    {
      category: "Celebrities",
      type: "multiple",
      difficulty: "hard",
      question:
        "The eccentric natural philosopher Tycho Brahe kept what as a pet?",
      correct_answer: "Moose",
      incorrect_answers: ["Dog", "Bear", "Goat"]
    }
  ],
  [
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "The Spitfire L.F. Mk IX had what engine?",
      correct_answer: "Merlin 66",
      incorrect_answers: ["Griffon 65", "Merlin 50", "Merlin X"]
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question:
        "Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.",
      correct_answer: "True",
      incorrect_answers: ["False"]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
      correct_answer: "Yale University",
      incorrect_answers: [
        "Princeton University",
        "Harvard University",
        "Columbia University"
      ]
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question:
        "The main playable character of the 2015 RPG &quot;Undertale&quot; is a monster.",
      correct_answer: "False",
      incorrect_answers: ["True"]
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      type: "multiple",
      difficulty: "medium",
      question: "Which of the following manga have the most tankouban volumes?",
      correct_answer: "Golgo 13",
      incorrect_answers: [
        "JoJo&#039;s Bizarre Adventure",
        "Detective Conan",
        "One Piece"
      ]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "easy",
      question: "Which Animal Crossing game was for the Nintendo Wii?",
      correct_answer: "Animal Crossing: City Folk",
      incorrect_answers: [
        "Animal Crossing: New Leaf",
        "Animal Crossing: Wild World",
        "Animal Crossing: Population Growing!"
      ]
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "hard",
      question: "When was the city of Rome, Italy founded?",
      correct_answer: "753 BCE",
      incorrect_answers: ["902 BCE", "524 BCE", "697 BCE"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the first level in &quot;Call of Duty: World at War&quot;?",
      correct_answer: "Semper Fi",
      incorrect_answers: ["Ring of Steel", "Vendetta", "Eviction"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which programming language was developed by Sun Microsystems in 1995?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "Solaris OS", "C++"]
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "medium",
      question:
        "When was the 3rd album &quot;Notes from the Underground&quot; of the band &quot;Hollywood Undead&quot; released?",
      correct_answer: "2013",
      incorrect_answers: ["2011", "2014", "2009"]
    }
  ],
  [
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "medium",
      question:
        "What French artist/band is known for playing on the midi instrument &quot;Launchpad&quot;?",
      correct_answer: "Madeon",
      incorrect_answers: ["Daft Punk ", "Disclosure", "David Guetta"]
    },
    {
      category: "Entertainment: Music",
      type: "multiple",
      difficulty: "medium",
      question: "Which country is singer Kyary Pamyu Pamyu from?",
      correct_answer: "Japan",
      incorrect_answers: ["South Korea", "China", "Vietnam"]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these companies does NOT manufacture automobiles?",
      correct_answer: "Ducati",
      incorrect_answers: ["Nissan", "GMC", "Fiat"]
    },
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of these is the name of a Japanese system of alternative medicine, literally meaning &quot;finger pressure&quot;?",
      correct_answer: "Shiatsu",
      incorrect_answers: ["Ukiyo", "Majime", "Ikigai"]
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question: "Who plays the Nemesis in the Resident Evil movies?",
      correct_answer: "Matthew Taylor",
      incorrect_answers: ["Jason Dip", "Eric Mabius", "Jimmy Matts"]
    },
    {
      category: "Vehicles",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these car models are produced by Lamborghini?",
      correct_answer: "Aventador",
      incorrect_answers: ["Huayra", "918", "Chiron"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "Who voices the infamous Citadel Station A.I known as S.H.O.D.A.N, in the System Shock games?",
      correct_answer: "Terri Brosius",
      incorrect_answers: [" Jennifer Hale", "Jenn Taylor", "Lori Alan"]
    },
    {
      category: "Animals",
      type: "multiple",
      difficulty: "medium",
      question:
        "What dog bread is one of the oldest breeds of dog and has flourished since before 400 BCE.",
      correct_answer: "Pugs",
      incorrect_answers: ["Bulldogs", "Boxers", "Chihuahua"]
    },
    {
      category: "Entertainment: Comics",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the alter-ego of the DC comics character &quot;Superman&quot;?",
      correct_answer: "Clark Kent",
      incorrect_answers: ["Bruce Wayne", "Arthur Curry", "John Jones"]
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which artist composed the original soundtrack for &quot;Watch Dogs 2&quot;?",
      correct_answer: "Hudson Mohawke",
      incorrect_answers: ["Rustie", "Machinedrum", "Flying Lotus"]
    }
  ]
];

exports.handler = function(event, context, callback) {
  // your server-side functionality
  const id = event.queryStringParameters.id
    ? event.queryStringParameters.id
    : 1;

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(getQuizz(id))
  });
};

function getQuizz(id) {
  if (id < 1 || id > quizzes.length) {
    return quizzes[0];
  }

  return quizzes[id - 1];
}
