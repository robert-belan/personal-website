import {
    showElement,
    backToMainMenu,
    fadeOutFadeIn,
    afterAnimation,
    fadeElement,
    createNavigation
} from "/src/helpers.js";


export function extras() {
    createNavigation(extrasData["Extras"]);

    const main = document.querySelector("main");

    if (document.querySelector("#welcome-msg")) {
        fadeElement(document.querySelector("#welcome-msg"), "remove");
    }

    // if element with that ID isn't already there, create one
    if (!main.querySelector("#extras-text-container")) {
        const html = `
            <div id="extras-text-container" class="extras-text-container" hidden">
            </div>`;
        main.insertAdjacentHTML("beforeend", html);
    }

    setTimeout(() => {
        showElement(document.querySelector("#extras-text-container"));
    }, afterAnimation);
}



/** 
 * Show short version of article about author
 */
function aboutAuthorShort() {
    createNavigation(extrasData["Články o autorovi"]);
    changeText(shortStory);
}

function aboutAuthorLong() {
    createNavigation(extrasData["Články o autorovi"]);
    changeText(longStory);
}

function releaseNotes() {
    createNavigation(extrasData["Změny na webu"]);
    changeText(releaseNotesData);
}

function aboutThisWeb() {
    createNavigation(extrasData["Jak vznikal tento web?"]);
    changeText(aboutThisWebData);
}



/**
 * Clear text in Extras section. U
 */
function backToExtras() {
    fadeOutFadeIn(() => { }, document.querySelector("#extras-text-container"));
    extras();
}



/**
 * Changes text in Extras section with smooth animation.
 * 
 * @param {string} text Text contains string with html tags.
 */
function changeText(text) {
    const textContainer = document.querySelector("#extras-text-container");
    fadeOutFadeIn(() => {
        textContainer.insertAdjacentHTML("beforeend", text);
    }, textContainer);
}



function scrollTo(target) {
    // TODO: volitelne parametry funkce scrollIntoView zatim nepodporuje Safari
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}



/** Data */
const extrasData = {
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
            func: backToMainMenu,
            toggle: 0
        }
    },

    "Články o autorovi": {
        "Nadpis": "Obsah článku",
        "Vzdělání a kurzy": {
            func: function education() { scrollTo("#education") },
            toggle: 0
        },
        "O autorovi": {
            func: function aboutAuthor() { scrollTo("#aboutAuthor") },
            toggle: 0
        },
        "Cíle": {
            func: function goals() { scrollTo("#goals") },
            toggle: 0
        },
        "Čím mohu přispět?": {
            func: function contribution() { scrollTo("#contribution") },
            toggle: 0
        },
        "Závěr": {
            func: function conclusion() { scrollTo("#conclusion") },
            toggle: 0
        },
        "Praktické poznámky": {
            func: function practicalNotes() { scrollTo("#practicalNotes") },
            toggle: 0
        },
        "Zpět": {
            func: backToExtras,
            toggle: 0
        }
    },

    "Jak vznikal tento web?": {
        "Nadpis": "Jak vznikal tento web?",
        "Zpět": {
            func: backToExtras,
            toggle: 0
        }
    },

    "Změny na webu": {
        "Nadpis": "Změny na webu",
        "Poslední": {
            func: function latest() { scrollTo("#latest") },
            toggle: 0
        },
        "Plánované": {
            func: function planned() { scrollTo("#planned") },
            toggle: 0
        },
        "Uvažované": {
            func: function potential() { scrollTo("#potential") },
            toggle: 0
        },
        "Zpět": {
            func: backToExtras,
            toggle: 0
        }
    }
}

const foreword = ``;
// const foreword = `
// <div class="welcome-msg extras-foreword extras-text">
// <h3>Předmluva</h3>
// <p>Tento text slouží k efektivnějšímu využití času mého, ten který zaměstnání hledá, tak i Vašeho, který naopak nového zaměstnance hledá. Sekce Založit novou postavu je mým životopisem a celý tento web je ukázkou mé práce a motivace. Pokud nejprve čtete tyto řádky, doporučuji nejprve si projít zmíněnou sekci. Pokud Vás web zaujme, pak pokračujte čtením níže, kde se již dopředu dozvíte nějaké informace o mé osobě a budete tak moci kvalifikovaněji posoudit, zdali má vůbec smysl se se mnou zabývat dál nebo ne.</p>
// </div>`;


const shortStory = `<div class="extras-text">
<h2 id="education">Vzdělání, kurzy a cíle</h2>
<p>Díky sice krátké, ale intenzivné zkušenosti s C++ jsem pochytil základy programování. Tyto znalosti byly užitečné pro následné rychlejší vstřebání základů a pokročilejších témat v Pythonu. Po dvou měsících "pythonování" jsem nasedl na zběsilé tempo Davida J. Malana a jeho bandy z <b>Harvardu</b> zodpovědné za světově známý kurz <a href="https://cs50.harvard.edu/x/2021/" target="_blank">CS50x</a>. Odtud už to byl jen krůček k <a href="https://learnjavascript.online/" target="_blank">Javascriptu</a>. Již kdysi na základní škole mě bavilo HTML a proto nebylo těžké do tohoto vlaku s připojeným CSS naskočit, spojit všechno včetně základů Flasku dohromady a začít tvořit. V tuto chvíli se již věnuji studiu Reactu.</p>
<p>Nezpochybnitelnou roli při mém "přerodu" v programátora má Honza Javorek a jeho projekt <a href="https://junior.guru/" target="_blank">Junior.guru</a> a jeho komunita. Díky.</p>

<h2 id="aboutAuthor">O autorovi</h2>
<p>Narozen v Brně, posledních pár let žiji pár minut na jih od Brna s výhledem na Pálavu. Mám ukončené gymnázium a neukončené studium VŠ oboru Zdravotní laborant na MU. Ve skutečnosti je to ještě marnější, ale ne každý měl štěstí, aby věděl ve studijních letech jistojistě, co chce v budoucnu dělat. Já jsem se se svým stavem nesmířil a když jsem konečně zjistil, co je pro mě to pravé, tak jsem šel za tím. Proto čtete tyto řádky. Dříve jsem chvíli pracoval jako pomocný dělník při vrtání studní. Pár let chodil v uniformě PČR. Přes dva roky jsem pracoval pro brněnské ISP a připojoval lidi k internetu.</p>

<h2 id="goals">Krátkodobé a střednědobé cíle</h2>
<p>Najít si již práci ve vývoji na poli webových technologií a stát se co nejrychleji užitečným a platným členem týmu.</p>
<p>Javascript doplnit Typescriptem. Doplnit další technologie dle domluvy se zaměstnavatelem.</p>

<h2 id="contribution">Čím mohu přispět Vaší společnosti?</h2>
<p>Programování je jen prostředek k dosažení cíle. Snažím se uvažovat nad výrobky celkově. Především se vztahem k uživateli a jeho zkušenosti. Přemýšlím, jak učinit produkt efektivnějším. Funkce však musí být v <a href="https://www.vitsoe.com/us/about/good-design" target"_blank">rovnováze</a> s formou. Nakonec jsou to hlavně lidské emoce, které rozhodují zda se uživatel/zákazník vrátí, a na ty se zaměřuji.</p>

<h2 id="conclusion">Závěr</h2>
<p>Mnohokrát děkuji za Váš čas a pokud jsem Vás alespoň trochu zaujal, v sekci Extras existuje i delší varianta tohoto textu, kde se můžete dozvědět trochu více.</p>

<p>Buďte dobří,</p>
<p>Robert</p>
<p>[temp: velmi brzy doplním kontakty, zatím je najde vpravo dole]</p>

<h2 id="practicalNotes">Praktické poznámky</h2>
<p>
    <ul>
        <li>Hledám juniorní pozici!</li> 
        <li>Nástup je možný ihned</li> 
        <li>Pouze full-time na HPP nebo IČO</li>
        <li>Upřednostňuji in-house.</li>
    </ul>
</p>
</div>`;

const longStory = `<div class="extras-text">
<h2 id="education">Vzdělání a kurzy</h2>
<p>Před dvěma lety jsem začal s C++. Vydrželo to přibližně dva měsíce než vstoupila na scénu stále aktuální pandemie. Já byl, k mému štěstí, na té straně barikády, která nejen že o práci nepřišla, ale naopak ji měla ještě mnohem víc. Tento jazyk jsem vstřebával "pod vedením" <a href="https://www.learncpp.com/" target="_blank">tohoto webu</a>, jehož přístup mi naprosto sedl. Stihl jsem se dostat před kapitolu o základech objektového programování, vypracovat průběžný znalosti-upevňující projekt a "zbastlit" hru Blackjack pro příkazový řádek. Zdrojový soubor bych ještě někde našel, ale praktickou schopnost použití jazyka už hůře. C++ mi bylo ale velmi sympatické, neboť člověk musí mít pod kontrolou téměř vše. Pro začátečníka to přinášelo hromadu frustrace, ale ten přehled o všem mi vyhovoval.</p>

<p>Pár měsíců zpět jsem si potykal s Pythonem a vzájemně jsme si porozuměli. Díky společnému známému C/C++ byla prvotní spolupráce takřka raketová. C++ vyžadovalo nějaké základní znalosti principů fungování paměti počítače a tak vůbec všeho možnýho kolem těch křemíkových vnitřností počítače. Po asi dvou nebo třech týdnech jsem se pustil do vypracování entry úkolu pro tzv. Python Weekend pořádaný společností Kiwi. Seděl jsem u toho dnem a nocí, neboť nezbývalo moc času. Víkend s notebookem v Bratislavě jsem nakonec nestrávil, ale za to jsem se toho hodně naučil. Výsledný skript nakonec nefungoval a já ještě nepřišel na to proč. A to především z toho důvodu, že jsem se přesunul ke světově známému kurzu <a href="https://cs50.harvard.edu/x/2021/" target="_blank">CS50x</a>, což zpětně vnímám jako nejlepší možné rozhodnutí.</p>
<p>Zde bych se chtěl přiznat ke zcela vědomé lži. V sekci Dovednosti mám uvedeno, že kurz mám hotový, ale fakticky jej hotový ještě nemám. Tento web je součástí jednoho z úkolu. A proč ta lež? Já jej jako hotový kurz vnímám už teď. Jsem totiž přesvědčem, že  David J. Malan a jeho skvělí kolegové mi předali téměř všechno, co kurzem (fakticky semestrálním předmětem) předat svým studentům zamýšleli. Vypracování finálního projektu je již "jen" taková třešnička.</p>
<p>Co je pro mě nejdůležitější je to, že díky CS50x a času strávenému jeho studiem ve mně vykrystalizovala představa, jakým směrem se chci aktuálně ubírat. Využil jsem také příležitosti a v mezičase si "nalil" do hlavy trochu Javascriptu pomocí <a href="https://learnjavascript.online/" target="_blank">tohoto</a> výtečně zpracovaného kurzu. Systematičnost, suverénnost a nápaditost s jakou autor přistoupil nejen k obsahu kurzu, ale i k celému UX byla inspirujicí a já v tu chvíli už věděl, že full-stack je směrem, kterým se chci aktuálně ubírat. Kurzů pod záštitou CS50 je více a postupně chci projít nejen ze zvědavosti všechny. Už jen proto, že je na autorech vidět, jak si užívají tu zatraceně dobře odvedenou práci. Je to až nakažlivé.</p>
<p>Bylo by další lží tvrdit, že už teď mám na to být full-stackovým juniorem. Zcela určitě ne. V tuto chvíli jsem si výrazně jistější na front-endovém pobřeží. Back-Side-Story je v jeho delším závěsu, ale to mám v úmyslu velmi brzy napravit.</p>
<p>Pravda, těch technologií se teď na člověka sype spousty. Já mám ale rád přehled možností. Nemusím znát jednu věc hned super pořádně. Já chci vědět, jaké nástroje mám k dispozici a kde je efektivní je použít. Poté podle potřeb zvyšovat dovednost.</p>
<p>Poslední, ale o to kritičtější věc musím zmínit. Nezpochybnitelnou roli při mém "přerodu" v programátora má Honza Javorek a jeho projekt Junior.guru a jeho komunita. Pokud byste si měli z tohoto webu něco odnést pak vědomí o tomto projektu. Pro lidí jako já je to nezpochybnitelný zdroj motivace a inspirace. Byť jsem zatím nebyl příliš aktivním přispěvovatelem, vědomí, že jsou další lidé zápasící s podobnými problémy, je v některých frustrujících dnech skoro až záchranným kruhem. Cílem projektu není vést Vás za ručičku, ale ukázat směr pokud zabloudíte a dát najevo, že v tom nejste sami. Začátky v programování jsou totiž jako stezka odvahy na dětském táboře. Jen je z toho méně papírování pokud se úplně ztratíte.</p>


<h2 id="aboutAuthor">O autorovi</h2>
<p>Narozen v Brně, posledních pár let žiji pár minut na jih od Brna s výhledem na Pálavu. Mám ukončené gymnázium a neukončené studium VŠ oboru Zdravotní laborant na MU. Ve skutečnosti je to ještě marnější, ale ne každý měl štěstí, aby věděl ve studijních letech jistojistě, co chce v budoucnu dělat. Já se svým stavem nesmířil a když jsem konečně zjistil, co je pro mě to pravé, tak jsem šel zatím a proto čtete tyto řádky.</p>
<p>Mezitím jsem dělal rok pomocného dělníka při vrtání studní. Poměrně poctivá dřina v neustálém mokru a vlhku - v létě vítáném, v zimě tolik ne. Neb to nikam nevedlo, zhypnotizoval mě ukazující prst našeho strýčka Sama a tak jsem na pár let oblékl uniformu příslušníka republikové policie. Protože mě z toho neustálého sezení v oktávce začaly bolet záda, přijal jsem nabídku kamaráda, šel lozit po střechách a připojovat lidi k internetu. Záda přestala bolet.</p>
<p>Stále jsem cítil, že to není to, co chci dělat i za pár let. A protože jsem pořád dost mladý, plný mentálních sil, a hlavně protože už jsem zjistil, kam mě to opravdu táhne, práci jsem ukončil, sedl si chvíli za monitor a studoval. Během toho jsem si udělal menší zastávku v jedné digitální agentuře na pozici SEO konzultant junior.</p>
<p>Teď už vím, že práce programátora je přesně to ozubené kolečko, které naprosto pasuje do mé povahy a doplňuje mé vnitřní předpoklady a nastavení. Ne, nejsem Tony Stark, Steve Wozniak, Samantha Carter ani jiný superhrdina, kterému nestíhá počítač zaznamenávat jeho myšlenky. Občas sedím nad primitivní funkcí a musím ji procházet krok za krokem jako jsem kdysi počítal na prstech.</p>
<p>Snažím se to však vyvážit svým přístupem a uvažováním nad drobnými detaily, které jsou důležité pro uživatele jako člověka. Mám rád hezký a poctivý obsah, ale stejně důležité jsou pro mě i jeho funkce a forma. Proto jsou pro mě hrdinové spíše Jonathan Ive a jeho vzor <a href="https://www.vitsoe.com/us/about/good-design" target"_blank">Dieter Rams</a>.</p>


<h2 id="goals">Krátkodobé a střednědobé cíle</h2>
<p>V tuto chvíli mi jde o to již získat zaměstnání ve vývoji na poli webových technologií a stát se co nejrychleji užitečným a platným členem týmu. Nyní se věnuji Reactu a znalosti Javascriptu doplňuji průběžně. Dále doplním Javascript Typescriptem. Více než React mě zaujal Svelte. Ten však ještě není tak rozšířený a zdaleka tolik žádaný. Programování je prostředek k dosažení cílů bez ohledu na jazyk a technologie a proto si nechávám dveře otevřené pro diskuzi s potenciálním zaměstnavatelem.</p> 
<p>V dlouhodobějším horizontu se chci ponořit do technologie blockchainu a jeho přidružených technologií.</p>


<h2 id="contribution">Čím tedy mohu přispět Vaší společnosti?</h2>
<p>Snažím se uvažovat a dělat věci trochu jinak, ale zase ne nezbytně "na sílu". Na internetu strávím hodiny denně a navštívím spousty domén. Většina z nich je jako přes kopírák pouze s jinými barvami. Má to často pochopitelně své logické, eknomické a jiné důvody, které jsou v mnoha <a href="https://www.nngroup.com/ target"_blank">článcích</a> obhajovány. Rozumím tomu a nehodlám proti tomu nijak bojovat. Na druhou stranu mnoho domén mě utvrzuje v tom, že věci jdou dělat lépe, byť se může jednat o drobný funkční detail. Drobné nepatrné tlačítko, nápad, který může zvrátit celou Vaši zkušenost. A vůbec nemusí jít ani o skutečnou smysluplnou funkci, ale jen o "prostou" známku takového toho lidského doteku. Taková ta drobnost, kvůli které si uvědomíte, že na druhé straně klávesnice seděl člověk, který si byl sakra vědom, že to dělá pro jiné lidi, a chtěl předat kromě nul a jedniček i nějaké upřímné <b>emoce</b>.</p>
<p>Stejný přístup jsem připraven přinášet i já. To je jako všechno? Ne. Tak třeba díky tomu, že už je to rok a něco málo co zcela abstinuji, můžu své kolegy odvést z večírků až před prahy jejich domů. Podceňovaná schopnost abstinujících.</p>


<h2 id="conclusion">Závěr</h2>
<p>Celý tento web měl za cíl postupně Vás zaujmout a poskytnout Vám více informací, než které byste byli ochotni vstřebat na běžném životopisu. Takový životopis snese všechno, spousta věcí se "schová" za vyžadovanou strohost, občas si člověk něco přidá, znáte to. Věřím, že jsem poskytl dostatek informací na kvalifikovanější posouzení zda se s člověkem za klávesnicí, tentokrát se mnou, vůbec setkat.</p>

<br>
<p>Mnohokrát děkuji za Váš čas,<br>
Robert</p>
<p>[temp: velmi brzy doplním kontakty, zatím je najde vpravo dole]</p>


<h2 id="practicalNotes">Praktické poznámky</h2>
<p>
    <ul>
        <li>Hledám juniorní pozici!</li> 
        <li>Nástup je možný ihned</li> 
        <li>Pouze full-time na HPP nebo IČO</li>
        <li>Upřednostňuji in-house.</li>
    </ul>
</p>
</div>`;


const releaseNotesData = `<div class="extras-text">
<h2 id="latest">Poslední</h2>
<p>
    <ul>
        <li>(7.12.2021) - Umístění na web</li>
    </ul>
</p>

<h2 id="planned">Plánované</h2>
<p>
    <ul>
        <li>Doposud proběhla nulová optimalizace pro malé obrazovky - priorita</li>
        <li>Zvýšení rychlosti webu</li>
        <li>Refaktorace kódu i CSS</li>
        <li>Doplnit obsah sekce "Jak vznikl tento web"</li>
        <li>Plynulá změna barevného schéma light/dark</li>
        <li>Přepsání do Reactu</li>
        <li>Překlad webu do AJ</li>
    </ul>
</p>

<h2 id="potential">Uvažované</h2>
<p>
    <ul>
        <li></li>
    </ul>
</p>
</div>
`

const aboutThisWebData = `<div class="extras-text">
    <p>Spontánně.</p>
</div>
`;