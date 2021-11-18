import {
    howCreateColleague,
    settings,
    extras,
    leaveThisWebsite,
    generateColleague,
    letsCreateMyOwn,
    mainMenu,
    appearance,
    history,
    skills,
    attributes,
    summary,
    darkmode,
    exit
} from "/static/menuFunctions.js"


export const navigationData = {
    "Hlavní menu": {
        "Nadpis": "Hlavní menu",
        "Založit novou postavu": {
            func: howCreateColleague,
            toggle: 0
        },
        "Nastavení": {
            func: settings,
            toggle: 0
        },
        "Extras": {
            func: extras,
            toggle: 0
        },
        "Opustit hru": {
            func: leaveThisWebsite,
            toggle: 0
        }
    },

    "Jak vytvořit postavu?": {
        "Nadpis": "Jak chcete vytvořit postavu?",
        "Zkusím štěstí": {
            func: generateColleague,
            toggle: 0
        },
        "Zvolím si sám": {
            func: letsCreateMyOwn,
            toggle: 0
        },
        "Zpět": {
            func: mainMenu,
            toggle: 0
        }
    },

    "Vytváření postavy": {
        "Nadpis": "Vytváření postavy",
        "Vzhled": {
            func: appearance,
            toggle: 1
        },
        "Historie": {
            func: history,
            toggle: 1
        },
        "Dovednosti": {
            func: skills,
            toggle: 1
        },
        "Vlastnosti": {
            func: attributes,
            toggle: 1
        },
        "Shrnutí": {
            func: summary,
            toggle: 1
        }
    },

    "Nastavení": {
        "Nadpis": "Nastavení",
        "Dark Mode": {
            func: darkmode,
            toggle: 0
        },
        "Zpět": {
            func: mainMenu,
            toggle: 0
        }
    },

    "Ukončit hru": {
        "Nadpis": "Jste si jisti?",
        "Ano": {
            func: exit,
            toggle: 0
        },
        "Ne": {
            func: mainMenu,
            toggle: 0
        }
    }

    // "Extras": {
    //     "Nadpis": "Extras",
    //     "Vznik webu": whyThisWebsite,
    //     "Log": records,
    //     "Zpět": mainMenu
    // }
}

export const creation_layout = `<div id="main-container" class="main-container">
<section id="model3d" class="model3d-container">
</section>

<section id="text" class="text-container">
</section>
</div>`

export const model3dHTML = `
<iframe id="5f9ba68e-d40f-48d5-8d73-5095246e5dd9" 
        src="https://app.vectary.com/viewer/v1/?model=5f9ba68e-d40f-48d5-8d73-5095246e5dd9&env=studio3&showInteractionPrompt=0" 
        frameborder="0" 
        width="100%" 
        height="100%"
        noAr="1"
        ></iframe>`;


export const appearanceData = [
    {
        prop: "Portrét",
        option: "Obrázek"
    },
    {
        prop: "Druh",
        option: "člověk"
    },
    {
        prop: "Pohlaví",
        option: "muž"
    },
    {
        prop: "Základ vzhledu",
        option: "udržovaný"
    },
    {
        prop: "Zdánlivý věk",
        option: "29"
    },
    {
        prop: "Kondice",
        option: "chabá"
    },
    {
        prop: "Výška",
        option: "vyšší"
    },
    {
        prop: "Hlava",
        option: "č. 22"
    },
    {
        prop: "Hlas",
        option: "mužský"
    },
    {
        prop: "Držení těla",
        option: "asertivní"
    },
    {
        prop: "Styl oblečení",
        option: "neformální"
    },
]


export const historyData = [
    {
        profile: "Ztracený a nalezený",
        description: "Spokojené dětství vystřídala řada nešťastných studijních rozhodnutí, která jej dovedla k předčasnému zanechání studia vysoké školy. Vystřídal řadu zaměstnání. Po zkušenosti pomocného dělníka u vrtani studni se na nějakou dobu navlékl do uniformy a stal se jezdcem stáje Policie ČR. Po jeho vystřízlivění ze služby odešel, ale radost z vnikání do lidských domovů jej neopustila. Na pár let tak zakotvil na brněnských střechách ve službách různých ISP a přinášel lidem, hned po zdraví zdánlivě to nejcennější, přístup k internetu. Po letech nejistot a hledání se rozhodl ze střech slézt a konečně si stoupnout na pevnou půdu pod nohama."
    },

    {
        profile: "Premiant",
        description: "Oba tvoji rodiče byli úspěšnými kapacitami svých oborů a to strojního inženýrství a aplikované matematiky. Jejich až patologická snaha být ve vše lepší než ostatní se tak zákonitě musela přenést i na tebe a tvé dva sourozencem. S vyznamenáním jsi vystudoval slavné MIT v americkém Massachusetts a měl pocit, že ti kromě diplomu u nohou leží i celý svět. V Googlu si tě různá oddělení prohazovala jako horký brambor. Po pár měsících si tě k sobě přetáhl Apple, aby se tě sám nakonec zbavil. Byl jsi moc dobrej a začal z tebe mít strach. Rodinné důvody tě donutily opustit divoký život v Silicon Valley a vrátit se domů."
    },

    {
        profile: "Poslední",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas sollicitudin. Nulla quis diam. In rutrum. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio. Aliquam erat volutpat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Fusce tellus. Duis pulvinar. Praesent in mauris eu tortor porttitor accumsan."
    }
]


export const skillsData = [
    {
        logo: "c.png",
        skill: "C/C++",
        levels: ["Rozhodnutí naučit se programovat",
            "První printf('Hello World!')",
            "Poznávání vnitřního fungování PC",
            "Ztráta praktické schopnosti používání jazyka"
        ],
        completed: 4
    },

    {
        logo: "cs50.png",
        skill: "Obecné základy programování",
        levels: ["Schopen zapnout počítač",
            "První printf('Hello World')",
            "Hotový první menší projekt(y)",
            "Hotové CS50 by Harvard",
            "Komerční praxe",
            "'Připraven do <span class='g1'>G</span><span class='o1'>o</span><span class='o2'>o</span><span class='g2'>g</span><span class='l'>l</span><span class='u'>u</span>'"
        ],
        completed: 4
    },

    {
        logo: "html.png",
        skill: "HTML",
        levels: ["Rozpozná zkratku",
            "První &lt;h1&gt;Hello World!&lt;/h1&gt;",
            "První jednodušší web",
            "Praktické využívání",
            "Nic ho nemůže zaskočit",
        ],
        completed: 4
    },

    {
        logo: "css.png",
        skill: "CSS",
        levels: ["Rozliší CSS a CCS",
            "První vystylovaný Hello World",
            "Začíná používat proměnné a funkce v CCS",
            "Věc se komplikuje s SCCS",
            "Přestane všude psát CCS místo CSS"
        ],
        completed: 4
    },

    {
        logo: "js.png",
        skill: "JavaScript",
        levels: ["Rozliší JavaScript od Jawy",
            "První >alert('Hello World')",
            "První praktické používání",
            "Začíná rozpoznávat a používat různé Web API",
            "Stačí krátké nahlédnutí do dokumentace",
            "Nahlážení do dokumentace už jen zdržuje"
        ],
        completed: 4
    },

    {
        logo: "react.png",
        skill: "React",
        levels: ["Upřednostnil React nad Svelt",
            "První &lt;HelloWorld /&gt;",
            "Uvedení znalostí do praxe",
            "První projekt postavený na Reactu"
        ],
        completed: 2
    },

    {
        logo: "python.png",
        skill: "Python",
        levels: ["Přechod z C/C++ na Python",
            "První print('Hello World!')",
            "Uvedení znalostí do praxe a první menší projekty",
            "Počátek průzkumu Python 'vnitřností'",
            "Mírné schlazení znalostí kvůli JS"
        ],
        completed: 5
    },

    {
        logo: "flask.png",
        skill: "Flask",
        levels: ["Přičichnutí k Flasku",
            "První menší loky",
            "Vlastní menší večírek a první vystřízlivění",
            "... *první ztráty paměti*",
            "... *další ztráty paměti*",
            "Zkušený pijan",
        ],
        completed: 3
    },

    {
        logo: "sqlite.png",
        skill: "SQL",
        levels: ["Seznámení s SQLite",
            "První SELECT * FROM greetings WHERE greeting = 'Hello World';",
            "Drobná praxe",
            "Nějakou dobu nic",
            "SQL engineer"
        ],
        completed: 3
    },

    {
        logo: "git.png",
        skill: "GIT",
        levels: ["Cože? Gastrointestinální trakt?",
            "git commit greeting.html -m 'Hello world!';",
            "Průběžná praxe",
            "Pokročilejší používání GIT"
        ],
        completed: 3
    },

    {
        logo: "linux.png",
        skill: "Linux",
        levels: ["První krůčky v Ubuntu",
            "Rok s Ubuntu",
            "Zpět k W10 + WSL",
        ],
        completed: 3
    },
]

// it is possible to include html tags in strings for forrmating
export const attributesData = [
    {
        name: "Hlava otevřená",
        description: "V útlém předškolním věku jsi letěl na konci závodu na kolech přes řidítka a hlavou jsi přistál betonovém obrubníku. Hlava se zahojila, ale otevřená mysl pro nové a neotřelé myšlenky a technologie (naštěstí) ne.",
        bonus: ["Zvědavost +3"],
        selected: 1
    },

    {
        name: "Co je v tý krabici?!",
        description: "Jestli je uvnitř krabice Schrödingerovic mrtvá kočka nebo snad i něco horšího tě vlastně vůbec nezajímá. Zásadně se snažíš uvažovat <i>out-of-the-box</i>.",
        bonus: ["Bonus neznámý. Jen <a href='https://www.csfd.cz/film/2671-sedm/prehled/'target='_blank'>Brad Pitt</a> spatřil, co je uvnitř krabice."],
        selected: 1
    },

    {
        name: "Dlouhé vedení",
        description: "Ne vždy všechno pochopíš na první dobrou. Občas uniká drobný detail, který brání uzavření okruhu. Výsledek však bývá lépe ukotven v paměti.",
        bonus: ["+5 pochopení", "-4 trpělivost spoluhráčů v nejbližším okolí"],
        selected: 1
    },

    {
        name: "Nikdo není dokonalý",
        description: "A už vůbec ne tato postava.",
        bonus: ["+1 Sebereflexe"],
        selected: 1
    },

    {
        name: "Abstinující, spící",
        description: "Propařil sis svoje. Teď je čas i na práci.",
        bonus: ["+5 Spánek, +100 Energie (v kombinaci s Hlava rodiny)", "-4 Pochopení okolních spoluhráčů"],
        selected: 1
    },

    {
        name: "Hlava rodiny",
        description: "Jsou všude ...",
        bonus: ["+3 Zodpovědnost", "+3 Radost", "-NaN&sup2; Spánku", "+3 Šedý vlasy/den"],
        selected: 1
    },

    {
        name: "Očipovaný",
        description: "Čipy přijímáš zásadně od Applu a Pfizeru.",
        bonus: ["+12 Obrana proti návštěvě JIP"],
        selected: 1
    },

    {
        name: "Savá houba",
        description: "Baví tě co děláš a tak nový informace nasáváš jako suchá houba vodu.",
        bonus: ["+2 Vědění"],
        selected: 1
    },

    {
        name: "Rétor",
        description: "Své myšlenky prezentuješ s chirurgickou přesností. Míla Rozner tiše závidí.",
        bonus: ["+4 Komunikace", "+2 Pochopení okolních spoluhráčů"],
        selected: 0
    },

    {
        name: "Extrovert",
        description: "Rád na sebe strháváš pozornost a řádně si to užíváš.",
        bonus: ["+8 % Komunikace za každou novou úroveň", "-2 Pochopení od okolních introvertů"],
        selected: 0
    },

    {
        name: "Prokrastinátor",
        description: "Kdyby ti platili za množství odložené práce na neurčito, jsi milionář.",
        bonus: ["+25 % odložení účinku jiného bonusu na neurčito"],
        selected: 0
    },
    // TODO: Doplnit funkci zobrazení bonusu až po delší chvíli. Samozřejmě někdy, až se ti bude chtít. Mrk. :-)

    {
        name: "Skromný pisálek",
        description: "Než ze sebe něco vymáčkneš tak to trvá, ale není to tak špatný.",
        bonus: ["+7 Psaný projev"],
        selected: 1
    },

    {
        name: "Nápad na další dovednost",
        description: "Ticho po pěšině...",
        bonus: ["-něco Neznámý bonus"],
        selected: 0
    },


]

export const summaryData = `
    <h3>Jméno:  Robert</h3>
    <h4>Věk:    29</h4>

<p>Ze zvolených kombinací dovedností se postava profiluje jako aspirující full&#8209;stackový vývojář. Pod vedením zkušeného hráče je schopna a ochotna velmi rychle dohnat chybějící technologie a nástroje. Vybrané dovednosti nejsou její alfou a omegou, ale "pouze" prostředky k dosahování cílů.</p>

<p>Z vybraných vlastností se postava hodí do jakéhokoliv kolektivu spoluhráčů, kteří si umí udělat srandu nejen z ostatních, ale i sami ze sebe. "Skrytou" touhou postavy je být součástí profesionálů a nadšenců, kteří dokáží nejen inspirovat, ale když je potřeba, tak i motivovat.</p>

<p>Tato ambiciózní postava je vhodná pro hráče, kteří nehledají "obyčejné" dělníky, ale spíše se ohlíží po disciplinovaných budoucích řemeslnících, kteří se neučí nové věci protože musí, ale protože to je součástí jejich vnitřního nastavení.</p>
`;



export const extrasKratke = `
Doplňkové informace pro recruitery, headhuntery a HR

Účel webu
    Krátká verze
        Ukázka práce a uvažování. Zaujmout. Trochu čtenáře pobavit. Snad se i dostat blíže ke své první práci v IT. 

    Delší verze
        Primárním cílem bylo vytvořit prezentační web o mé osobě tak, aby byl funkční, pěkný a osobitý. Úvaha byla taková, že pokud dostatečně zaujmu, dáte mi, náboráři, personalisté, více času než běžným životopisům. Na oplátku Vás nebudu zbytečně zdržovat, mlžit a zbytečně kecat. 

    Web je inspirován počítačovými hrami 

FAQ
    Proč IT a vývoj?
        Krátká verze
            Protože neumím zpívat ani tancovat. 

        Delší verze
            Protože vytvořit něco funkčního, hezkého a smysluplného je opojný pocit. 
            Jasně, to může dělat i truhláře že? Přestože vůně dřeva je taky nakažlivá, asi se shodneme, že truhlářství a jiná řemesla nejsou zdaleka tak progresivní, interaktivní a zdaleka nenabízí takové možnosti jako svět nul a jedniček. A to jsme stále na jeho počátcích. Blížící se nástup virtuální reality nám umožní vytvářet zážitky, které zkrátka v realitě možné nejsou. 
            Jsem generace, která vyrůstala, mimo jiné, s Harrym Potterem a snil jsem být součástí toho kouzelného světa. Byť jsem z toho vyrostl, fantazie obecně jsem se nevzdal. Chci být aktivní součástí těchto nových nastupujících možností.

            PS: Nebuďme pokrytci, v IT se pohybuje spousty peněz. Nejsou priorita, ale ideály Vám složenky a nový Macbooky a dovolený nezaplatí.
    
            `

    // Cíle autora - krátkodobé - technologie, kurzy, 
    //                 delšího horizontu - kam směřuji
    // Background autora

    // /od Evky
    // - co dělal předtím, a proč přišel posun
    // - vize, co prinesou na produkt noveho
    // - jak jsem zvykly pracovat
    // = chce z lidí dostat, jak přemýšlí

    // Potřeby/Požadavky/Nároky/Prosby
    // Kdy jsem volný k nástupu


    // Odkazy na github, linkedin, spotify
    // `

    `
    Dlouhá verze
Účel webu a jeho budoucnost
Důvodů vzniku je nespočet a všechny mají své místo. Jedním z hlavních bylo zaujmout a trochu zčeřit hladiny běžných životopisů. 
Samotnému se mi líbí pracovní inzeráty, které jsou zajímavé nejen obsahem, ale i formou. Takové, za kterým lze "cítit" člověka a ne umaštěné klávesy CTRL, C a V. Snažil jsem se na tyto inzeráty navázat a trochu přispět. Do jaké míry se mi to povedlo už je na Vás, čtenářích, uživatelích. Sám s výsledkem nejsem zcela spokojen. Web vyžaduje ještě mnoho menších či větších úprav, ale už toto je verze, za kterou se nestydím a která předává vše, co bylo mým hlavním cílem. 

Prací na webu jsem si chtěl procvičit nově nabyté znalosti o JavaScriptu, ukotvit je nespočtem provedených chyb a začít objevovat a prozkoumávat možnosti webových prohlížečů. Nějaké tyto možnosti zde ještě implementuji v rámci praxe, ale poté již půjdu "o web dál".

Tento projekt také použiji jako výsledek zadání předposledního úkolu v kurzu CS50x a přesunu se ke vzniku finálního projektu, ve kterém chci již využít technologie jako Service Workers, Cache Storage a principy PWA. 

Jaké úpravy zde ještě zamýšlím?
1) Refaktorace nadbytečného kódu
2) Využít Svelte a podle zbylého času v něm "překopat" celý web

    Krátká verze
Ukázka práce a uvažování. Zaujmout. Trochu čtenáře pobavit. Snad se i dostat blíže ke své první práci v IT. 
Dále uvést do praxe nově nabyté znalosti o JavaScriptu a jejich ukotvení při hledání chyb a řešení. 



    Vzdělání, kurzy a cíle
Před dvěma lety jsem začal s C++. Vydrželo to přibližně dva měsíce než vstoupila na scénu stále aktuální pandemie. Já byl, k mému štěstí, na té straně barikády, která nejen že o práci nepřišla, ale naopak ji měla ještě mnohem víc. Tento jazyk jsem vstřebával "pod vedením" tohoto webu, jehož přístup mi naprosto sedl. Stihl jsem se dostat před kapitolu o základech objektového programování, vypracovat průběžný znalosti-upevňující projekt a "zbastlit" hru Blackjack pro příkazový řádek. Zdrojový soubor bych ještě někde našel, ale praktickou schopnost použití jazyka už hůř. C++ mi bylo ale velmi sympatické, neboť člověk musí mít pod kontrolou téměř vše. Pro začátečníka to přínašelo hromadu frustrace, ale ten přehled o všem mi vyhovoval. Nevylučuji budoucí oživení zájmu, ale v tuto chvíli mám jiné cíle.

Pár měsíců zpět jsem na C++ nenavázal. Místo něj jsem si potykal s Pythonem a vzájemně jsme si porozuměli. Díky společnému známému C++ byla prvotní spolupráce takřka raketová. C++ vyžadovalo nějaké základní znalosti principů fungování paměti počítače a tak vůbec všeho možnýho kolem těch křemíkových vnitřností počítače. Po asi dvou třech týdnech jsem se pustil do vypracování entry úkolu pro tzv. Python Weekend pořádaný společností Kiwi. Seděl jsem u toho dnem a nocí, neboť nezbývalo moc času. Víkend s notebookem v Bratislavě jsem nakonec nestrávil, ale za to jsem se toho hodně naučil. Výsledný skript nakonec nefungoval a já ještě nepřišel na to proč. A to především z toho důvodu, že jsem si od toho chtěl dát chvíli pauzu a taky jsem se přesunul ke světově známému kurzu CS50x, což zpětně vnímám jako nejlepší možné rozhodnutí. 

Zde bych se chtěl omluvit, za zcela vědomou lež. V sekci Dovednosti mám uvedeno, že kurz mám hotový, ale fakticky jej hotový ještě nemám. Tento web je součástí předposledního úkolu. A proč ta lež? Já jej jako hotový kurz vnímám už teď. Jsem totiž přesvědčem, že  David J. Malan a jeho skvělí kolegové mi předali všechno, co kurzem (ve skutečnosti semestrálním předmětem) předat svým studentům zamýšleli. Vypracování finálního projektu je již "jen" taková třešnička. Pro oficiální studenty Harvardovi univerzity je vypracování povinnost. Pro mě, jako nadšeného aspirujícího programátora, je to už jen čestné zakončení. (No a kdo by taky nechtěl certifikát s logem Harvardu, že? Tedy snad tam takové logo je, jináč si sednu a budu se mračit)

Co je pro mě nejdůležitější je to, že díky CS50x a času strávenému jeho studiem ve mně vykrystalizovala představa, jakým směrem se chci aktuálně ubírat. Využil jsem také příležitosti a v mezičase si "nalil" do hlavy trochu JavaScriptu (>==ES2015) pomocí tohoto výtečně zpracovaného kurzu. Systematičnost, suverénnost a nápaditost s jakou autor přistoupil nejen k obsahu kurzu, ale i k celému UX byla inspirujicí a já v tu chvíli už věděl, že full-stack a cross-platformní PWA jsou mým aktuálním směrem, kterým se chci ubírat.

Bylo by další lží tvrdit, že už teď mám na to být full-stackovým juniorem. Zcela určitě ne. V tuto chvíli jsem si výrazně jistější na front-endovém pobřeží. Back-Side-Story je v jeho delším závěsu, ale to mám v úmyslu velmi rychle napravit.

Pravda, těch technologií se teď na člověka sype asi tolik, jako neočkovaných k nohám lékařů. Já mám ale rád přehled možností. Nemusím znát jednu věc super pořádně. Já chci vědět, jaké nástroje mám k dispozici a kde je efektivní je použít. Poté podle potřeb zvyšovat dovednost. Stejně jako mám vybavenou dílnu a jak přistupuji k opravě domu. Třeba nedávno jsem doma našel takový malý vrták do dlaně, nebozízek nebojak. Do té chvíle jsem nevěděl, že něco takového existuje, ale teď zpětně vím, že bych jej v jistých chvílích použil spíše než obyčejné šídlo. Už je zařazen v mém inventáři nástrojů.




    Krátká verze
Díky sice krátké, ale intenzivné zkušenosti s C++ jsem pochytil základy programování a základy vnitřního fungování PC. Tyto znalosti byly užitečné pro následné rychlejší vstřebání základů a pokročilejších záležitostí v Pythonu. Po měsící "pythonování" jsem nasedl na zběsilé tempo Davida J. Malana a jeho bandy zodpovědné za světové známý kurz CS50x. 










`