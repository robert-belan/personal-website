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
    exit,
    aboutAuthorShort,
    aboutAuthorLong,
    clearAndMoveToMainMenu,
    backToEmptyExtras,
    teleportTo,
    releaseNotes,
    aboutThisWeb
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
    },

    "Extras": {
        "Nadpis": "Extras",
        "Krátce o autorovi": {
            func: aboutAuthorShort,
            toggle: 1
        },
        "Dlouze o autorovi": {
            func: aboutAuthorLong,
            toggle: 1
        },
        "Jak vznikal tento web?": {
            func: aboutThisWeb,
            toggle: 1
        },
        "Změny na webu": {
            func: releaseNotes,
            toggle: 1
        },
        "Zpět": {
            func: clearAndMoveToMainMenu,
            toggle: 0
        }
    },

    "Články o autorovi": {
        "Nadpis": "Obsah článku",
        "Vzdělání a kurzy": {
            func: function education() { teleportTo("#education") },
            toggle: 0
        },
        "O autorovi": {
            func: function aboutAuthor() { teleportTo("#aboutAuthor") },
            toggle: 0
        },
        "Cíle": {
            func: function goals() { teleportTo("#goals") },
            toggle: 0
        },
        "Čím mohu přispět?": {
            func: function contribution() { teleportTo("#contribution") },
            toggle: 0
        },
        "Závěr": {
            func: function conclusion() { teleportTo("#conclusion") },
            toggle: 0
        },
        "Praktické poznámky": {
            func: function practicalNotes() { teleportTo("#practicalNotes") },
            toggle: 0
        },
        "Zpět": {
            func: backToEmptyExtras,
            toggle: 0
        }
    },

    "Jak vznikal tento web?": {
        "Nadpis": "Jak vznikal tento web?",
        "Zpět": {
            func: backToEmptyExtras,
            toggle: 0
        }
    },

    "Změny na webu": {
        "Nadpis": "Změny na webu",
        "Poslední": {
            func: function latest() { teleportTo("#latest") },
            toggle: 0
        },
        "Plánované": {
            func: function planned() { teleportTo("#planned") },
            toggle: 0
        },
        "Uvažované": {
            func: function potential() { teleportTo("#potential") },
            toggle: 0
        },
        "Zpět": {
            func: backToEmptyExtras,
            toggle: 0
        }
    }

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
        description: `
        <h2>Ztracený a nalezený</h2>
        <p>Spokojené dětství vystřídala řada nešťastných studijních rozhodnutí, která jej dovedla k předčasnému zanechání studia vysoké školy. Vystřídal řadu zaměstnání. Po zkušenosti pomocného dělníka u vrtani studni se na nějakou dobu navlékl do uniformy a stal se jezdcem stáje Policie ČR. Po jeho vystřízlivění ze služby odešel, ale radost z vnikání do lidských domovů jej neopustila. Na pár let tak zakotvil na brněnských střechách ve službách různých ISP a přinášel lidem, hned po zdraví zdánlivě to nejcennější, přístup k internetu. Po letech nejistot a hledání se rozhodl ze střech slézt a konečně si stoupnout na pevnou půdu pod nohama.</p>`
    },

    {
        profile: "Premiant",
        description: `
        <h2>Premiant (nelze zvolit)</h2>
        <p>Oba tvoji rodiče byli úspěšnými kapacitami svých oborů a to strojního inženýrství a aplikované matematiky. Jejich až patologická snaha být ve vše lepší než ostatní se tak zákonitě musela přenést i na tebe a tvé dva sourozencem. S vyznamenáním jsi vystudoval slavné MIT v americkém Massachusetts a měl pocit, že ti kromě diplomu u nohou leží i celý svět. V Googlu si tě různá oddělení prohazovala jako horký brambor. Po pár měsících si tě k sobě přetáhl Apple, aby se tě sám nakonec zbavil. Byl jsi moc dobrej a začal z tebe mít strach. Rodinné důvody tě donutily opustit divoký život v Silicon Valley a vrátit se domů.</p>`
    },

    {
        profile: "Poslední",
        description: `
        <h2>Poslední (nelze zvolit)</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas sollicitudin. Nulla quis diam. In rutrum. Aliquam erat volutpat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Et harum quidem rerum facilis est et expedita distinctio. Aliquam erat volutpat. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Fusce tellus. Duis pulvinar. Praesent in mauris eu tortor porttitor accumsan.</p>`
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
    // TODO: Doplnit funkci zobrazení bonusu až po nějaké chvíli. Samozřejmě někdy, až se ti bude chtít. *mrk*

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


export const foreword = `
<h2>Předmluva</h2>
<p>Tento text slouží k efektivnějšímu využití času mého, ten který zaměstnání hledá, tak i Vašeho, který naopak nového zaměstnance hledá. Sekce Založit novou postavu je mým životopisem a celý tento web je ukázkou mé práce a motivace. Pokud nejprve čtete tyto řádky, doporučuji nejprve si projít zmíněnou sekci. Pokud Vás web zaujme, pak pokračujte čtením níže, kde se již dopředu dozvíte nějaké informace o mé osobě a budete tak moci kvalifikovaněji posoudit, zdali má vůbec smysl se se mnou zabývat dál nebo ne.</p>`;


export const shortStory = `
<h2 id="education">Vzdělání, kurzy a cíle</h2>
<p>Díky sice krátké, ale intenzivné zkušenosti s C++ jsem pochytil základy programování a základy vnitřního fungování PC. Tyto znalosti byly užitečné pro následné rychlejší vstřebání základů a pokročilejších témat v Pythonu. Po měsící "pythonování" jsem nasedl na zběsilé tempo Davida J. Malana a jeho bandy z Harvardu zodpovědné za světově známý kurz CS50x. Odtud už to byl jen krůček k JavaScriptu. Díky tomu, že již kdysi na základní škole mě bavilo HTML, nebylo těžké do toho vlaku s připojeným CSS naskočit, spojit všechno včetně základů Flasku dohromady a začít tvořit.</p>
<p>Nezpochybnitelnou roli při mém "přerodu" v programátora má Honza Javorek a jeho projekt Junior.guru a jeho komunita. Díky.</p>


<h2 id="aboutAuthor">O autorovi</h2>
<p>[první varianta]
Prosím, věnujte čas dlouhé verzi. Kontext a motivace jsou důležité.
[dlouhá varianta pro ladění designu]
Narozen v Brně, posledních pár let žiji pár minut na jih od Brna s výhledem na Pálavu. Mám ukončené gymnázium a neukončené studium VŠ oboru Zdravotní laborant na MU. Ve skutečnosti je to ještě marnější, ale ne každý měl štěstí, aby věděl ve studijních letech jistojistě, co chce v budoucnu dělat. Já se svým stavem nesmířil a když jsem konečně zjistil, co je pro mě to pravé, tak jsem šel zatím a proto čtete tyto řádky.</p>


<h2 id="goals">Krátkodobé a střednědobé cíle</h2>
<p>Najít si již práci ve vývoji na poli webových technologií. Doplnit rychle React nebo jiný framework, dle požadavků zaměstnavatele. Rozhodnout se pro technologii na beck-end. A hlavně, stát se co nejrychleji užitečným a platným členem týmu.</p>


<h2 id="contribution">Čím mohu přispět Vaší společnosti?</h2>
<p>[zatím dlouhá verze pro ladění designu]
Snažím se uvažovat a dělat věci trochu jinak, ale zase ne nezbytně "na sílu". Na internetu strávím hodiny denně a navštívím spousty domén. Většina z nich je jako přes kopírák pouze s jinými barvami. Má to často pochopitelně své logické, ekonomické a jiné důvody, které jsou v mnoha a mnoha článcích obhajovány například na stránkách společnosti Nielsen Norman Group. Rozumím tomu a nehodlám proti tomu systémově bojovat. Na druhou stranu mnoho domén mě utvrzuje v tom, že věci jdou dělat občas lépe, byť se může jednat o drobný funkční detail. Drobné nepatrné tlačítko, nápad, který může zvrátit celou Vaši zkušenost. A vůbec nemusí jít ani o skutečnou smysluplnou funkci, ale jen o "prostou" známku lidského doteku (human touch). Taková ta drobnost, kvůli které si uvědomíte, že na druhé klávesnice seděl člověk, který si byl sakra vědom, že to dělá pro jiné lidi, a chtěl předat kromě nul a jedniček i nějaké upřímné emoce.</p>


<h2 id="conclusion">Závěr</h2>
<p>Pokud jste se touto rigorózní prací "prokousali" až sem, tak Vám mnohokrát děkuji a pevně doufám, že jsem jen neplýtval Vaším časem a minimálně jsem Vás trochu pobavil. Na první kontakt to bylo možná trochu svérázné a možná jsem si pod sebou podřezal pár větví, ale já hraju na upřímnost. Jsem si totiž vědom toho, že i Vy personalisté jste lidé s emocemi a přestože hledáte nejprve člověka podle dovedností na papíře, na pracovišti se budeme potkávat v jiné roli a ta musí dávat hlubší smysl pokud má tým držet pohromadě.</p>
<p>A pokud byste měli pocit, že některé myšlenky v odstavcích nebyly zcela vysvětleny nebo ukončeny, byl to většinou záměr, aby toho textu nebylo úplně tolik a abychom si něco nechali na případný pohovor. :-)</p>


<p>Ještě jednou díky,</p>
<p>Robert</p>



<h2 id="practicalNotes">Praktické poznámky</h2>
<p>
    <ul>
        <li>Nástup možný ihned</li> 
        <li>Pouze full-time</li>
        <li>Upřednostňuji HPP, IČO možné.</li>
        <li>On-site, remote možný, ale raději bych se mu vyhnul</li>
    </ul>
</p>`;

export const longStory = `
<h2 id="education">Vzdělání a kurzy</h2>
<p>Před dvěma lety jsem začal s C++. Vydrželo to přibližně dva měsíce než vstoupila na scénu stále aktuální pandemie. Já byl, k mému štěstí, na té straně barikády, která nejen že o práci nepřišla, ale naopak ji měla ještě mnohem víc. Tento jazyk jsem vstřebával "pod vedením" tohoto webu, jehož přístup mi naprosto sedl. Stihl jsem se dostat před kapitolu o základech objektového programování, vypracovat průběžný znalosti-upevňující projekt a "zbastlit" hru Blackjack pro příkazový řádek. Zdrojový soubor bych ještě někde našel, ale praktickou schopnost použití jazyka už hůř. C++ mi bylo ale velmi sympatické, neboť člověk musí mít pod kontrolou téměř vše. Pro začátečníka to přínášelo hromadu frustrace, ale ten přehled o všem mi vyhovoval. Nevylučuji budoucí oživení zájmu, ale v tuto chvíli mám jiné cíle.</p>
<p>Pár měsíců zpět jsem na C++ nenavázal. Místo něj jsem si potykal s Pythonem a vzájemně jsme si porozuměli. Díky společnému známému C++ byla prvotní spolupráce takřka raketová. C++ vyžadovalo nějaké základní znalosti principů fungování paměti počítače a tak vůbec všeho možnýho kolem těch křemíkových vnitřností počítače. Po asi dvou třech týdnech jsem se pustil do vypracování entry úkolu pro tzv. Python Weekend pořádaný společností Kiwi. Seděl jsem u toho dnem a nocí, neboť nezbývalo moc času. Víkend s notebookem v Bratislavě jsem nakonec nestrávil, ale za to jsem se toho hodně naučil. Výsledný skript nakonec nefungoval a já ještě nepřišel na to proč. A to především z toho důvodu, že jsem si od toho chtěl dát chvíli pauzu a taky jsem se přesunul ke světově známému kurzu CS50x, což zpětně vnímám jako nejlepší možné rozhodnutí.</p>
<p>Zde bych se chtěl omluvit, za zcela vědomou lež. V sekci Dovednosti mám uvedeno, že kurz mám hotový, ale fakticky jej hotový ještě nemám. Tento web je součástí předposledního úkolu. A proč ta lež? Já jej jako hotový kurz vnímám už teď. Jsem totiž přesvědčem, že  David J. Malan a jeho skvělí kolegové mi předali všechno, co kurzem (ve skutečnosti semestrálním předmětem) předat svým studentům zamýšleli. Vypracování finálního projektu je již "jen" taková třešnička. Pro oficiální studenty Harvardovi univerzity je vypracování povinnost. Pro mě, jako nadšeného aspirujícího programátora, je to už jen čestné zakončení. (No a kdo by taky nechtěl certifikát s logem Harvardu, že? Tedy snad tam takové logo je, jináč si sednu a budu se mračit).</p>
<p>Co je pro mě nejdůležitější je to, že díky CS50x a času strávenému jeho studiem ve mně vykrystalizovala představa, jakým směrem se chci aktuálně ubírat. Využil jsem také příležitosti a v mezičase si "nalil" do hlavy trochu JavaScriptu (>== ES2015) pomocí tohoto výtečně zpracovaného kurzu. Systematičnost, suverénnost a nápaditost s jakou autor přistoupil nejen k obsahu kurzu, ale i k celému UX byla inspirujicí a já v tu chvíli už věděl, že full-stack a cross-platformní PWA jsou mým aktuálním směrem, kterým se chci ubírat. Kurzů pod záštitou CS50 je více a postupně chci projít ze zvědavosti všechny. Už jen proto, že je na autorech vidět, jak si užívají tu zatraceně dobře odvedenou práci. Je to až nakažlivé.</p>
<p>Bylo by další lží tvrdit, že už teď mám na to být full-stackovým juniorem. Zcela určitě ne. V tuto chvíli jsem si výrazně jistější na front-endovém pobřeží. Back-Side-Story je v jeho delším závěsu, ale to mám v úmyslu velmi brzy napravit.</p>
<p>Pravda, těch technologií se teď na člověka sype asi tolik, jako neočkovaných k nohám lékařů. Já mám ale rád přehled možností. Nemusím znát jednu věc hned super pořádně. Já chci vědět, jaké nástroje mám k dispozici a kde je efektivní je použít. Poté podle potřeb zvyšovat dovednost. Stejně jako mám vybavenou dílnu a jak přistupuji k opravě domu. Třeba nedávno jsem doma našel takový malý vrták do dlaně, nebozízek nebojak. Do té chvíle jsem nevěděl, že něco takového existuje, ale teď zpětně vím, že bych jej v jistých chvílích použil spíše než obyčejné šídlo. Už je zařazen v inventáři.</p>
<p>Poslední, ale o to kritičtější věc musím zmínit. Nezpochybnitelnou roli při mém "přerodu" v programátora má Honza Javorek a jeho projekt Junior.guru a jeho komunita. Pokud byste si měli z tohoto webu něco odnést pak vědomí o tomto projektu. Pro lidí jako já je to nezpochybnitelný zdroj takřka neomezené motivace a inspirace. Byť jsem zatím nebyl příliš aktivním přispěvovatelem, vědomí, že jsou další lidé zápasící s podobnými problémy, je v některých frustrujících dnech skoro až záchranným kruhem. Cílem projektu není vést Vás za ručičku, ale ukázat směr pokud zabloudíte a dát najevo, že v tom nejste sami. Začátky v programování jsou totiž jako stezka odvahy na dětském táboře. Jen je z toho méně papírování pokud se úplně ztratíte.</p>


<h2 id="aboutAuthor">O autorovi</h2>
<p>Narozen v Brně, posledních pár let žiji pár minut na jih od Brna s výhledem na Pálavu. Mám ukončené gymnázium a neukončené studium VŠ oboru Zdravotní laborant na MU. Ve skutečnosti je to ještě marnější, ale ne každý měl štěstí, aby věděl ve studijních letech jistojistě, co chce v budoucnu dělat. Já se svým stavem nesmířil a když jsem konečně zjistil, co je pro mě to pravé, tak jsem šel zatím a proto čtete tyto řádky.</p>
<p>Mezitím jsem dělal rok "helfra" při vrtání studní. Poměrně poctivá dřina v neustálém mokru a vlhku - v létě vítáném, v zimě tolik ne. Neb to nikam nevedlo, zhypnotizoval mě ukazující prst našeho strýčka Sama a tak jsem na pár let oblékl uniformu příslušníka republikové policie. Protože mě z toho neustálého sezení v oktávce začaly bolet záda, přijal jsem nabídku kamaráda, šel lozit po střechách a připojovat lidi k internetu. Záda přestala bolet.</p>
<p>Stále jsem cítil, že to není to, co chci dělat i za pár let. A protože jsem pořád dost mladý, plný mentálních sil, a hlavně protože už jsem zjistil, kam mě to opravdu táhne, práci jsem ukončil, sedl si chvíli za monitor a studoval. K programování jsem se chtěl dostat přes praxi jako SEO konzultant junior. Avšak v digitální agentuře pro mě nakonec neměli práci (a možná i další důvody, netuším) a spolupráce skončila. Tak jsem si sedl opět za monitor a to je také nakonec přičina toho, proč jste na tomto webu. :-)</p>
<p>Teď už vím, že práce programátora je přesně to ozubené kolečko, které naprosto pasuje do mé povahy a doplňuje mé vnitřní předpoklady a nastavení. Ne, nejsem Tony Stark, Steve Wozniak, Samantha Carter ani jiný superhrdina, kterému nestíhá počítač zaznamenávat jeho myšlenky. Občas sedím nad primitivní funkcí a musím ji procházet krok za krokem jako jsem kdysi počítal na prstech.</p>
<p>Snažím se to však vyvážit svým přístupem a uvažováním nad drobnými detaily, které jsou důležité pro uživatele jako člověka. Mám rád hezký a poctivý obsah, ale stejně důležitá je pro mě i jeho forma. Proto jsou pro mě hrdinové spíše Jonathan Ive a jeho vzor Dieter Rams. Teď zpětně mohu říct, že pokud bych znovu volil ještě jako středoškolák vysokou školu, váhal bych mezi studiem informatiky a průmyslového designu.</p>
<p>Mým obecným cílem je tak stát se řemeslníkem, který dokáže vyrobit "skříň" nejen hezkou a funkční, ale i bytelnou. Nechci zadní stěnu skříně z nějakýho křehkýho sololitu, chci tam pořádný poctivý bednění. Tyto dvě věty jsou inspirované tím, co tvrdil otec Steva Jobse. (parafrázuji) "Když vyrábíš nábytek, musíš udělat poctivě i to, co není vidět.".</p> 
<p>PS: Nebudu pokrytec. Jsem velmi rád, že mě táhne právě IT. Jsou v něm totiž kromě spousty zajímavé práce také peníze a zodpovědný člověk může pracovat i vzdáleně. Třeba z pokoje z výhledem na moře. Představa, že volám klientovi a popisuji mu, jak má přidělat anténu na střeše a co má nastavit je vtipná. Že by to skutečně udělal, je představa směšná. [Toto PS patrně smažu]</p>


<h2 id="goals">Krátkodobé a střednědobé cíle</h2>
<p>V tuto chvíli mi jde o to již získat zaměstnání ve vývoji na poli webových technologií. Jak jsem zmínil, chci se naučit/učit programovat bez ohledu na jazyk a technologie. Nechávám si dveře otevřené pro diskuzi s potenciálním zaměstnavatelem. Jsem si vědom všudypřítomného a vyžadovaného Reactu, ale zaměřím se zatím na Svelte. Pokud bude mít o mě zájem společnost vyžadující React, nemám problém jej v rychlém tempu dohnat. Chlápek, který vytvořil dříve zmíněný kurz learnjavascript.online, má také navazující kurz pro React. Naučit se dá vše a pokud je dobrý studijní materiál tak i poměrně rychle.</p> 
<p>V době psaní tohoto elaborátu jsem se ještě nerozhodl zda věnovat v tuto chvíli čas Svelte či TypeScriptu. Zatím probíhá sběr informací.</p>
<p>V dlouhodobějším horizontu se chci ponořit do technologie blockchainu a vše, co se kolem něj motá. Mnoho lidí se shoduje, že je to budoucnost a já bych rád bruslil tam, kam směřuje puk. Zatím o tom vím ale dost málo na to, abych dělal nějaké závěry. Jak by mohl někdo říct: "Cesty programátora jsou nevyzpitatelné.". Už teď ale vím jistě, že u "pouhého" JavaScriptu a jeho známých nezůstanu.</p>


<h2 id="contribution">Čím tedy mohu přispět Vaší společnosti?</h2>
<p>Snažím se uvažovat a dělat věci trochu jinak, ale zase ne nezbytně "na sílu". Na internetu strávím hodiny denně a navštívím spousty domén. Většina z nich je jako přes kopírák pouze s jinými barvami. Má to často pochopitelně své logické, eknomické a jiné důvody, které jsou v mnoha a mnoha článcích obhajovány například na stránkách společnosti Nielsen Norman Group. Rozumím tomu a nehodlám proti tomu systémově bojovat. Na druhou stranu mnoho domén mě utvrzuje v tom, že věci jdou dělat občas lépe, byť se může jednat o drobný funkční detail. Drobné nepatrné tlačítko, nápad, který může zvrátit celou Vaši zkušenost. A vůbec nemusí jít ani o skutečnou smysluplnou funkci, ale jen o "prostou" známku lidského doteku (human touch). Taková ta drobnost, kvůli které si uvědomíte, že na druhé klávesnice seděl člověk, který si byl sakra vědom, že to dělá pro jiné lidi, a chtěl předat kromě nul a jedniček i nějaké upřímné emoce.</p>
<p>Stejný přístup jsem připraven přinášet i já. 
To je jako všechno? Ne. Tak třeba díky tomu, že už je to rok a něco málo co zcela abstinuji, můžu své kolegy odvést z večírků až před prahy jejich domů. Podceňovaná schopnost abstinujících. A jak řekl Joe Hallenbeck: "Občas je se mnou sranda." On to řekl vlastně jinak a vždycky je podezřelý, když to o sobě někdo řekne, ale nebe je modrý, voda je mokrá a koho to s**e.</p>


<h2 id="conclusion">Závěr</h2>
<p>Pokud jste se touto rigorózní prací "prokousali" až sem, tak Vám mnohokrát děkuji a pevně doufám, že jsem jen neplýtval Vaším časem a minimálně jsem Vás trochu pobavil. Na první kontakt to bylo možná trochu svérázné a možná jsem si pod sebou podřezal pár větví, ale já hraju na upřímnost. Jsem si totiž vědom toho, že i Vy personalisté jste lidé s emocemi a přestože hledáte nejprve člověka podle dovedností na papíře, na pracovišti se budeme potkávat v jiné roli a ta musí dávat hlubší smysl pokud má tým držet pohromadě.</p>
<p>A pokud byste měli pocit, že některé myšlenky v odstavcích nebyly zcela vysvětleny nebo ukončeny, byl to většinou záměr, aby toho textu nebylo úplně tolik a abychom si něco nechali na případný pohovor. :-)</p>

<br>
<p>Ještě jednou díky,<br>
Robert</p>


<h2 id="practicalNotes">Praktické poznámky</h2>
<p>
    <ul>
        <li>Nástup možný ihned</li> 
        <li>Pouze full-time</li>
        <li>Upřednostňuji HPP, IČO možné.</li>
        <li>On-site, remote možný, ale raději bych se mu vyhnul</li>
    </ul>
</p>`


export const releaseNotesData = `
<h2 id="latest">Poslední</h2>
<p>
    <ul>
        <li>Doplněný obsah "Jak vznikl tento web"</li>
        <li>Upravená responzivita pro menší obrazovky</li>
    </ul>
</p>

<h2 id="planned">Plánované</h2>
<p>
    <ul>
        <li>Upravit text v Extras a doplnit formátování</li>
        <li>Horní a spodní okraj textu v sekci Extras bude přecházet do ztracena</li>
        <li>Doplnit JSDoc popisky k funkcím !</li>
        <li>Přidat robots.txt. Nechci tento web nikde indexovat.</li>
        <li>Doplnit záložní obrázek v případě selhání serveru Vectary</li>
        <li>Změna na Darkmode a zpět bude plynulá</li>
        <li>Upravit barvy scrollbaru v DarkModu. Plete se posunovadlo s jeho pozadím</li>
        <li>Doplnit alt atributy obrázků log v sekci Dovednosti</li>
    </ul>
</p>

<h2 id="potential">Uvažované</h2>
<p>
    <ul>
        <li>Drobečková navigace</li>
    </ul>
</p>
`

export const aboutThisWebData = `
    <p>Spontánně.</p>
`