import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Download, r as RotateCcw, t as Upload } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as PptxGenJS } from "../_libs/pptxgenjs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-DaXPN17E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var seed = {
	"company": "Cogeim Europe S.r.l.",
	"document": "Analisi dei rischi ICT · v1.0 R02",
	"approach": "Approccio metodologico\nL’approccio metodologico adottato per l’analisi e la valutazione dei rischi ICT si basa sull’identificazione dei rischi/minace ICT in base ad una tassonomia predefinita, e all’analisi della probabilità di accadimento degli stessi e dei potenziali impatti, tenendo conto anche della presenza di eventuali tecniche di attenuazione e di mitigazione.\nL’intero processo di analisi dei rischi ICT si fonda su un approccio “asset-based”, che rappresenta la base logica e operativa per l’identificazione dei rischi ICT. Tale approccio prevede:\n• Il recepimento della lista dei processi critici, (ottenuta ad esempio attraverso l’effettuazione di una Business Impact Analysis (BIA));\n• L’individuazione degli asset ICT (es. applicativi, sistemi, infrastrutture) che supportano tali processi;\n• La valutazione puntuale dei rischi per ciascun asset che consente la gestione e la tracciabilità delle analisi effettuate.\n\nIl processo prevede tre macrofasi principali:\n• Identificazione: mappatura delle fonti di rischio attraverso l’individuazione, il riconoscimento e la descrizione delle minacce a cui la Società è o potrebbe essere esposta;\n• Valutazione: analisi della natura dei rischi identificati e determinazione del livello di rischio potenziale e di quello residuo;\n• Monitoraggio e Trattamento: confronto dei risultati dell’analisi del rischio con le soglie di accettabilità definite dalla Società, al fine di determinare se i rischi identificati e la loro significatività rientrino nei limiti tollerabili. In caso di superamento delle soglie, vengono definite e pianificate azioni correttive o di rafforzamento dei presidi, con l’obiettivo di ridurre il livello di rischio potenziale e ricondurlo entro i parametri di accettabilità.\n\nIdentificazione\nL’identificazione dei rischi ICT avviene a partire dai rischi rappresentativi e categorizzati nelle Linee guida dell’EBA sulla valutazione del rischio ICT nell’ambito del processo di revisione e valutazione prudenziale.\nPer ciascun asset mappato (es. applicativi, sistemi, infrastrutture, componenti di rete, servizi digitali) e inserito nel perimetro di valutazione in funzione della sua rilevanza/criticità, si procede con l’analisi dell’applicabilità dei rischi identificati, rispetto alle caratteristiche tecniche, funzionali e di esposizione dell’asset considerato. Tale attività può prevede il coinvolgimento delle strutture aziendali coinvolte nella gestione dei processi e delle risorse ICT. \n\nValutazione\nLa valutazione del rischio parte dall’individuazione del rischio potenziale, inteso come il livello di rischio prima dell’applicazione delle misure di sicurezza, che avviene con il coinvolgimento dei risk owner interessati. Successivamente, sempre con il supporto dei risk owner, si procede alla determinazione del rischio residuo, che tiene conto dell’efficacia dei presidi e controlli già implementati.\nLa valutazione del rischio potenziale prevede:\n• la determinazione della probabilità di accadimento delle minacce identificate sugli asset della Società, in base ad una metrica predefinita;\n• la stima dei potenziali impatti connessi alle conseguenze negative derivanti dal concretizzarsi di una minaccia sui processi e sull’operatività della Società, in base ad una metrica predefinita;\n• la determinazione del rischio potenziale, attraverso una matrice che combina probabilità e impatto.\nLa valutazione del rischio complessivo tiene conto anche dell’effetto di mitigazione dei rischi potenziali offerto dai presidi e dai controlli adottati dalla Società. A tal fine, i presidi/controlli sono identificati e selezionati tra quelli previsti dal framework CIS Critical Security Controls (v8.1). \nPer ciascun presidio/controllo si assegna un grado di efficacia secondo una scala predefinita. La combinazione tra il livello di rischio potenziale e l’efficacia dei controlli consente di determinare il rischio residuo effettivo, utile per orientare le successive decisioni di trattamento.\n\nMonitoraggio e Trattamento\nLa Società effettua almeno con cadenza annuale l’aggiornamento del risk assessment e la revisione della mappatura dei rischi ICT. Sulla base dei relativi esiti, viene predisposto un eventuale \"action plan\" qualora i rischi ICT valutati assumano una rilevanza critica tale da comportare l’intervento e la messa in atto di azioni da intraprendere per il contenimento degli stessi, ovvero rischi residui superiori alla soglia di tollerabilità definita dalla Società. Al fine di un opportuno monitoraggio, oltre all’azione da intraprendere sarà individuato un responsabile per la sua implementazione, una priorità ed una scadenza.\nE' predisposto un Report riepilogativo dei risultati dell’attività svolta e dello stato di attuazione degli interventi effettuati e che è portato all’attenzione degli Organi aziendali per opportuna valutazione.",
	"risks": [
		{
			"id": 1,
			"category": "Rischi di disponibilità e continuità ICT",
			"categoryDescription": "Possibilità che si verifichi un'interruzione significativa del funzionamento dei sistemi ICT, compromettendo la capacità dell'entità di fornire servizi",
			"name": "Inadeguata gestione della capacità",
			"description": "La mancanza di risorse (ad es. hardware, software, personale, fornitore di servizi) può comportare un'incapacità di offrire un servizio che soddisfi esigenze aziendali, interruzioni di sistema, degrado di servizio e/o ritardi operativi.",
			"examples": "• La mancanza di capacità può influenzare la velocità di trasmissione e la disponibilità della rete (Internet) per servizi come l’Internet banking. \n• La mancanza di personale (interno o esterno) può comportare interruzioni di sistema e/o errori operativi."
		},
		{
			"id": 2,
			"category": "Rischi di disponibilità e continuità ICT",
			"categoryDescription": "Possibilità che si verifichi un'interruzione significativa del funzionamento dei sistemi ICT, compromettendo la capacità dell'entità di fornire servizi",
			"name": "Guasti dei sistemi ICT",
			"description": "Perdita di disponibilità a causa di guasti hardware.",
			"examples": "• Guasti/malfunzionamento di dispositivi di archiviazione (hard disk), server o altre apparecchiature ICT, causati, ad esempio, da mancanza di manutenzione."
		},
		{
			"id": 3,
			"category": "Rischi di disponibilità e continuità ICT",
			"categoryDescription": "Possibilità che si verifichi un'interruzione significativa del funzionamento dei sistemi ICT, compromettendo la capacità dell'entità di fornire servizi",
			"name": "Guasti dei sistemi ICT",
			"description": "Perdita di disponibilità a causa di malfunzionamenti software e bug.",
			"examples": "• Loop infinito nel software applicativo che impedisce l’esecuzione delle operazioni. \n• Interruzioni dovute all’uso continuo di sistemi e soluzioni ICT obsoleti che non soddisfano più i requisiti attuali di disponibilità e resilienza e/o che non sono più supportati dai loro fornitori."
		},
		{
			"id": 4,
			"category": "Rischi di disponibilità e continuità ICT",
			"categoryDescription": "Possibilità che si verifichi un'interruzione significativa del funzionamento dei sistemi ICT, compromettendo la capacità dell'entità di fornire servizi",
			"name": "Inadeguatezza dei piani di ripristino in caso di disastro e della continuità dei sistemi ICT",
			"description": "Inefficienza delle soluzioni pianificate per la disponibilità e/o di continuità ICT e/o del piano di ripristino in caso di disastro (ad es. centri dati di ripristino alternativi) quando attivato per intervenire in caso di incidente.",
			"examples": "Le differenze di configurazione tra il centro dati primario e quello secondario possono causare l’incapacità del centro dati alternativo di fornire la continuità di servizio prevista."
		},
		{
			"id": 5,
			"category": "Rischi di disponibilità e continuità ICT",
			"categoryDescription": "Possibilità che si verifichi un'interruzione significativa del funzionamento dei sistemi ICT, compromettendo la capacità dell'entità di fornire servizi",
			"name": "Attacchi informatici dirompenti e distruttivi",
			"description": "Attacchi per scopi diversi (ad es. Movimenti militanti, ricatti) che comportano un sovraccarico dei sistemi e della rete, impedendo agli utenti legittimi di accedere ai servizi informatici online.",
			"examples": "Gli attacchi di tipo DDOS (Distributed Denial of Service) hanno l’intento di interrompere il servizio e vengono eseguiti tramite una moltitudine di sistemi informatici su Internet controllati da un hacker, che invia a servizi Internet una grande quantità di richieste di servizio apparentemente legittime (ad es. servizi di e-banking)."
		},
		{
			"id": 6,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Attacchi informatici e altri attacchi esterni ICT",
			"description": "Attacchi eseguiti attraverso Internet o da reti esterne per scopi diversi (ad es. frode, spionaggio, movimenti militanti /sabotaggio, terrorismo informatico) utilizzando una gamma di tecniche (ad es. social engineering, tentativi di intrusione attraverso lo sfruttamento delle vulnerabilità, utilizzo di software malevoli) per ottenere il controllo dei sistemi ICT interni.",
			"examples": "Diversi tipi di attacchi: \n• Attacchi mirati e persistenti (APT, Advanced Persistent Threat) per ottenere il controllo dei sistemi interni o rubare informazioni (ad es. informazioni relative all’identità, informazioni su carte di credito). \n• Software malevolo (ad es. ransomware) che crittografa i dati allo scopo di ricatto.\n• Contagio dei sistemi ICT interni mediante software trojan per commettere azioni malevole sui sistemi in modo celato. \n• Sfruttamento delle vulnerabilità di sistemi ICT e/o applicazioni (web), come SQL injection"
		},
		{
			"id": 7,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Attacchi informatici e altri attacchi esterni ICT",
			"description": "Esecuzione di operazioni di pagamento fraudolente da parte di hacker attraverso l’accesso non autorizzato o l’elusione della sicurezza dei servizi di e-banking e di pagamento e/o attaccando e sfruttando le vulnerabilità di sicurezza dei sistemi di pagamento interni dell’ente.",
			"examples": "•  Attacchi a servizi di e-banking o di pagamento, con l’obiettivo di effettuare operazioni non autorizzate. \n• Creazione e invio di transazioni di pagamento fraudolente da parte dei sistemi di pagamento interni dell’ente (ad es. messaggi SWIFT fraudolenti)."
		},
		{
			"id": 8,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Attacchi informatici e altri attacchi esterni ICT",
			"description": "Esecuzione di operazioni in titoli fraudolente da parte di hacker attraverso l’accesso non autorizzato o l’elusione della sicurezza dei servizi di e-banking che forniscono anche l’accesso ai conti dei titoli dei clienti.",
			"examples": "•  Attacchi pump & dump tramite cui gli hacker ottengono l’accesso ai conti titoli e-banking dei clienti ed effettuano acquisti o vendite fraudolenti per influenzare il prezzo di mercato e/o ottenere guadagni in base a posizioni in titoli precedentemente stabilite."
		},
		{
			"id": 9,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Attacchi informatici e altri attacchi esterni ICT",
			"description": "Attacchi su connessioni di comunicazione e conversazioni di tutti i tipi o sistemi ICT con l’obiettivo di raccogliere informazioni e/o commettere frodi.",
			"examples": "Intercettazione della trasmissione non protetta dei dati di autenticazione codificati in testo non crittografato."
		},
		{
			"id": 10,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza interna delle ICT",
			"description": "Accesso non autorizzato dall’interno dell’ente a sistemi ICT critici per scopi diversi (ad es. frode, esecuzione e occultamento di attività commerciali illecite, furto di dati, attivismo/sabotaggio) mediante una varietà di \ntecniche (ad es. abusi e/o sfruttamento di privilegi, furto d’identità, ingegneria sociale, sfruttamento delle \nvulnerabilità dei sistemi ICT, utilizzo di software malevoli).",
			"examples": "• Installazione di keylogger per rubare ID utente e password e ottenere l’accesso non autorizzato a dati riservati e/o commettere frodi. \n• Decifrare/indovinare password deboli per ottenere diritti di accesso illegittimi o elevati. \n• L’amministratore di sistema utilizza sistemi operativi o servizi di database (per modifiche dirette del database) per commettere frodi."
		},
		{
			"id": 11,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza interna delle ICT",
			"description": "Utilizzi non autorizzati dell’ICT dovuti a procedure e pratiche di gestione degli accessi inadeguate.",
			"examples": "• Mancata disattivazione o eliminazione di account non necessari, ad esempio di membri del personale che hanno cambiato funzione e/o hanno lasciato l’ente, inclusi ospiti o fornitori che non hanno più bisogno di accesso, che dà luogo all’accesso non autorizzato ai sistemi ICT. \n• Concessione di diritti e privilegi di accesso eccessivi, consentendo accessi non autorizzati e/o di celare attività illecite."
		},
		{
			"id": 12,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza interna delle ICT",
			"description": "Minacce alla sicurezza dovute alla mancanza di responsabilizzazione in materia di sicurezza per cui i dipendenti non comprendono, trascurano o non rispettano le politiche e le procedure di sicurezza ICT.",
			"examples": "• Dipendenti raggirati e portati a fornire assistenza per un attacco (ad es. ingegneria sociale). \n• Cattive pratiche relative alle credenziali: condivisione di password, utilizzo di password “facili” da indovinare, stessa password per diversi scopi, ecc. \n• Archiviazione di dati riservati non crittografati su computer portatili (laptop) e dispositivi portatili di archiviazione dati (ad es. chiavette USB) che possono essere persi o rubati."
		},
		{
			"id": 13,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza interna delle ICT",
			"description": "Archiviazione o trasferimento non autorizzato di informazioni riservate all’esterno dell’ente.",
			"examples": "Persone che ottengono indebitamente, comunicano deliberatamente o forniscono illegalmente informazioni riservate a persone non autorizzate o al pubblico."
		},
		{
			"id": 14,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza fisica ICT",
			"description": "Uso improprio o furto di componenti ICT tramite accesso fisico che provochi danni, perdita di beni o dati o altre possibili minacce.",
			"examples": "Irruzione fisica in uffici e/o centri dati per appropriarsi indebitamente delle apparecchiature ICT (ad es. computer, computer portatili, soluzioni di archiviazione) e/o per copiare dati accedendo fisicamente ai sistemi ICT."
		},
		{
			"id": 15,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza fisica ICT",
			"description": "Eventuali danni materiali alle componenti ICT, accidentali o volontari, causati da terrorismo, incidenti o manomissioni fatali/erronee da parte del personale dell’ente e/o di terzi (fornitori, personale della manutenzione).",
			"examples": "• Terrorismo (ad es. bombe terroristiche) o sabotaggio di beni ICT. \n• Distruzione del centro dati in seguito a incendi, perdite d’acqua o altri fattori."
		},
		{
			"id": 16,
			"category": "Rischi di sicurezza ICT",
			"categoryDescription": "Potenziale compromissione della riservatezza, integrità e disponibilità dei dati e dei sistemi ICT a causa di minacce informatiche",
			"name": "Insufficiente sicurezza fisica ICT",
			"description": "Protezione fisica insufficiente contro le catastrofi naturali risultante nella distruzione parziale o totale di sistemi ICT /centri dati a seguito di catastrofi naturali.",
			"examples": "Terremoti, calore estremo, tempeste di vento, forti tempeste di neve, inondazioni, incendi, fulmini."
		},
		{
			"id": 17,
			"category": "Rischi relativi ai cambiamenti ICT",
			"categoryDescription": "Problemi derivanti da modifiche nell'infrastruttura ICT, inclusi aggiornamenti e nuove implementazioni.",
			"name": "Controlli inadeguati rispetto a cambiamenti dei \nsistemi ICT e sviluppo di ICT",
			"description": "Incidenti causati da errori o vulnerabilità non rilevati a seguito di un cambiamento di, ad esempio, software, sistemi e dati ICT (ad es. effetti imprevisti di un cambiamento o di un cambiamento gestito in modo errato a causa di mancanza di test o di pratiche di gestione del cambiamento improprie).",
			"examples": "•  Messa in produzione di software insufficientemente testati o modifiche di configurazione con effetti negativi imprevisti sui dati (ad es. corruzione, cancellazione) e/o sulle prestazioni del sistema ICT (ad es. guasto, degrado delle prestazioni). \n• Cambiamenti incontrollati dei sistemi ICT o dei dati nell’ambiente di produzione. \n• Messa in produzione di sistemi informatici e applicazioni Internet non sicuri, che creano opportunità per gli hacker di attaccare i servizi Internet forniti e/o di violare i sistemi ICT interni. \n• Cambiamenti incontrollati del codice sorgente del software sviluppato internamente.\n• Test insufficienti a causa dell’assenza di ambienti di prova adeguati."
		},
		{
			"id": 18,
			"category": "Rischi relativi ai cambiamenti ICT",
			"categoryDescription": "Problemi derivanti da modifiche nell'infrastruttura ICT, inclusi aggiornamenti e nuove implementazioni.",
			"name": "Architettura ICT inadeguata",
			"description": "Una debole gestione delle architetture ICT in fase di progettazione, costruzione e manutenzione dei sistemi ICT (ad es. software, hardware, dati) può portare, nel tempo, a sistemi ICT poco flessibili o complessi, difficili e costosi in termini di gestione, che non sono più sufficientemente allineati alle esigenze aziendali e ai requisiti di gestione dei rischi in vigore.",
			"examples": "• Modifiche a sistemi, software e/o dati ICT gestite in modo inadeguato per un lungo periodo di tempo, che portano a sistemi e architetture ICT poco flessibili e complessi, eterogenei e difficili da gestire, causando impatti negativi sulle attività aziendali e sulla gestione del rischio (ad es. mancanza di flessibilità e agilità, incidenti e guasti ICT, costi operativi elevati, indebolimento di sicurezza e resilienza ICT, riduzione della qualità dei dati e capacità di segnalazione). \n• Eccessiva personalizzazione ed estensione dei pacchetti software commerciali con software sviluppato internamente, che impedisce di utilizzare versioni successive e aggiornamenti del software commerciale, generando il rischio di non essere più supportati dal fornitore."
		},
		{
			"id": 19,
			"category": "Rischi relativi ai cambiamenti ICT",
			"categoryDescription": "Problemi derivanti da modifiche nell'infrastruttura ICT, inclusi aggiornamenti e nuove implementazioni.",
			"name": "Gestione inadeguata del ciclo di vita e delle patch",
			"description": "Mancanza di un adeguato inventario di tutti i beni ICT a supporto di e unitamente alle pratiche di gestione del ciclo di vita e della corretta gestione delle patch. Ciò porta a sistemi ICT con patch insufficienti (e quindi più vulnerabili) e obsoleti che potrebbero non supportare le esigenze aziendali e di gestione dei rischi.",
			"examples": "Sistemi informatici non aggiornati e obsoleti che possono causare impatti negativi sulle attività aziendali e sulla gestione del rischio (ad es. mancanza di flessibilità e agilità, interruzioni ICT, indebolimento di sicurezza e resilienza ICT)."
		},
		{
			"id": 20,
			"category": "Rischi di integrità dei dati ICT",
			"categoryDescription": "Rischi che si manifestano quando i dati archiviati ed elaborati dai sistemi ICT diventano incompleti, inesatti o incoerenti, compromettendo la capacità dell'entità di operare correttamente e di produrre informazioni affidabili",
			"name": "Trattamento o gestione inadeguati dei dati ICT",
			"description": "A causa di errori o guasti di sistema, di comunicazione e/o di applicazione o errori di estrazione, trasferimento e caricamento (ETL) di dati, questi potrebbero essere danneggiati o persi.",
			"examples": "•  Errore del sistema IT nel trattamento dei batch, che genera saldi non corretti nei conti bancari dei clienti. \n• Query eseguite in modo errato. \n• Perdita di dati dovuta all’errore di replica (backup) dei dati."
		},
		{
			"id": 21,
			"category": "Rischi di integrità dei dati ICT",
			"categoryDescription": "Rischi che si manifestano quando i dati archiviati ed elaborati dai sistemi ICT diventano incompleti, inesatti o incoerenti, compromettendo la capacità dell'entità di operare correttamente e di produrre informazioni affidabili",
			"name": "Controlli di validazione dei dati progettati in \nmodo inadeguato per i sistemi ICT",
			"description": "Errori causati da mancati o inefficaci controlli automatizzati di alimentazione e di accettazione dei dati (ad es. dati utilizzati da terze parti), di trasferimento, di elaborazione e output di dati nei sistemi ICT (ad es. controlli di validità degli input, riconciliazione dei dati, ecc.).",
			"examples": "• Formattazione/convalida insufficiente o invalida degli input dei dati nelle applicazioni e/o nelle interfacce utente.   \n• Assenza di controlli di riconciliazione dei dati sugli output \n• Assenza di controlli sui processi di estrazione dei dati eseguiti (ad es. query di database) che generano dati errati. \n• Utilizzo di dati esterni difettosi."
		},
		{
			"id": 22,
			"category": "Rischi di integrità dei dati ICT",
			"categoryDescription": "Rischi che si manifestano quando i dati archiviati ed elaborati dai sistemi ICT diventano incompleti, inesatti o incoerenti, compromettendo la capacità dell'entità di operare correttamente e di produrre informazioni affidabili",
			"name": "Modifiche dei dati non adeguatamente \ncontrollate nei sistemi ICT in produzione",
			"description": "Errori sui dati causati dalla mancanza di controlli sulla correttezza e sulla legittimità delle manipolazioni dei dati in produzione nei sistemi ICT.",
			"examples": "Sviluppatori o amministratori di database che accedono e modificano i dati direttamente nei sistemi ICT di produzione in modo non controllato, ad esempio nel caso di un incidente ICT."
		},
		{
			"id": 23,
			"category": "Rischi di integrità dei dati ICT",
			"categoryDescription": "Rischi che si manifestano quando i dati archiviati ed elaborati dai sistemi ICT diventano incompleti, inesatti o incoerenti, compromettendo la capacità dell'entità di operare correttamente e di produrre informazioni affidabili",
			"name": "Architettura di dati, flussi di dati, modelli di dati o dizionari di dati progettati e/o gestiti in modo inadeguato",
			"description": "Le architetture, i modelli, i flussi o i dizionari di dati gestiti in modo inadeguato possono creare più versioni degli stessi dati nei sistemi ICT che non sono più coerenti a causa di modelli di dati o definizioni dei dati applicati in modo diverso e/o delle differenze nel processo di generazione e modifica dei dati sottostanti.",
			"examples": "Esistenza di diversi database clienti per ogni prodotto o unità di business con diverse definizioni e campi di dati, che genera dati dei clienti inadeguati e difficili da confrontare e integrare a livello globale dell’ente o del gruppo finanziario."
		},
		{
			"id": 24,
			"category": "Rischi di esternalizzazione ICT",
			"categoryDescription": "Rischi derivanti dalla dipendenza da fornitori di servizi ICT esterni.",
			"name": "Resilienza insufficiente di servizi di terzi o di altri enti del gruppo",
			"description": "Fornitori con scarsa resilienza possono influenzare la continuità operativa dell’azienda.",
			"examples": "• Mancata disponibilità dei servizi di base a causa di errori in sistemi o applicazioni ICT (esternalizzati) dei fornitori.  \n• Interruzione dei collegamenti di telecomunicazione. \n• Interruzione dell’alimentazione elettrica."
		},
		{
			"id": 25,
			"category": "Rischi di esternalizzazione ICT",
			"categoryDescription": "Rischi derivanti dalla dipendenza da fornitori di servizi ICT esterni.",
			"name": "Organizzazione inadeguata dell’esternalizzazione",
			"description": "Problemi nella gestione dei contratti di esternalizzazione possono portare a disservizi.",
			"examples": "• Procedure inadeguate di gestione degli incidenti, meccanismi di controllo contrattuali e garanzie integrate nell’accordo per la fornitura dei servizi che aumentano la dipendenza da terzi e fornitori.  \n• Controlli di gestione del cambiamento inadeguati relativi all’ambiente ICT del fornitore di servizi possono causare un degrado o un’interruzione del servizio."
		},
		{
			"id": 26,
			"category": "Rischi di esternalizzazione ICT",
			"categoryDescription": "Rischi derivanti dalla dipendenza da fornitori di servizi ICT esterni.",
			"name": "Insufficiente sicurezza di terzi o altri enti del gruppo",
			"description": "Attacchi ai fornitori possono compromettere la sicurezza dei servizi esternalizzati.",
			"examples": "• L’attacco informatico ai fornitori di servizi da parte di criminali o terroristi, come punto di accesso ai sistemi ICT degli enti o per accedere/distruggere i dati fondamentali o sensibili archiviati presso il fornitore dei servizi. \n• Soggetti malintenzionati, operanti presso il fornitore di servizi, tentano di appropriarsi indebitamente e vendere dati sensibili."
		}
	],
	"controls": [
		{
			"id": "1.1",
			"control": 1,
			"family": "Inventario e controllo degli asset aziendali",
			"title": "Creare e mantenere un inventario dettagliato degli asset aziendali",
			"assetClass": "Devices",
			"fn": "Identify",
			"description": "Establish and maintain an accurate, detailed, and up-to-date inventory of all enterprise assets with the potential to store or process data, to include: end-user devices (including portable and mobile), network devices, non-computing/IoT devices, and servers. Ensure the inventory records the network address (if static), hardware address, machine name, enterprise asset owner, department for each asset, and whether the asset has been approved to connect to the network. For mobile end-user devices,\xA0MDM type tools can support this process, where appropriate. This inventory includes assets\xA0connected to the infrastructure physically, virtually, remotely, and those within cloud environments. Additionally, it includes assets that are regularly connected to the enterprise’s network infrastructure, even if they are\xA0not under control of the enterprise. Review and update the inventory of all enterprise assets bi-annually, or more frequently.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "1.2",
			"control": 1,
			"family": "Inventario e controllo degli asset aziendali",
			"title": "Gestire gli asset non autorizzati",
			"assetClass": "Devices",
			"fn": "Respond",
			"description": "Ensure that a process exists to address unauthorized assets on a weekly basis. The enterprise may choose to remove the asset from the network, deny the asset from connecting remotely to the network, or quarantine the asset.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "1.3",
			"control": 1,
			"family": "Inventario e controllo degli asset aziendali",
			"title": "Utilizzare uno strumento di rilevamento attivo",
			"assetClass": "Devices",
			"fn": "Detect",
			"description": "Utilize an active discovery tool to identify assets connected to the enterprise’s network. Configure the active discovery tool to execute daily, or more frequently.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "1.4",
			"control": 1,
			"family": "Inventario e controllo degli asset aziendali",
			"title": "Usare i log DHCP per aggiornare l'inventario degli asset",
			"assetClass": "Devices",
			"fn": "Identify",
			"description": "Use DHCP logging on all DHCP servers or Internet Protocol (IP) address management tools to update the enterprise’s asset inventory. Review and use logs to update the enterprise’s asset inventory weekly, or more frequently.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "1.5",
			"control": 1,
			"family": "Inventario e controllo degli asset aziendali",
			"title": "Utilizzare uno strumento di rilevamento passivo degli asset",
			"assetClass": "Devices",
			"fn": "Detect",
			"description": "Use a passive discovery tool to identify assets connected to the enterprise’s network. Review and use scans to update the enterprise’s asset inventory at least weekly, or more frequently.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "2.1",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Creare e mantenere un inventario del software",
			"assetClass": "Software",
			"fn": "Identify",
			"description": "Establish and maintain a detailed inventory of all licensed software installed on enterprise assets. The software inventory must document the title, publisher, initial install/use date, and business purpose for each entry; where appropriate, include the Uniform Resource Locator (URL), app store(s), version(s), deployment mechanism, decommission date, and number of licenses. Review and update the software inventory bi-annually, or more frequently.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "2.2",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Verificare che il software autorizzato sia supportato",
			"assetClass": "Software",
			"fn": "Identify",
			"description": "Ensure that only currently supported software is designated as authorized in the software inventory for enterprise assets. If software is unsupported, yet necessary for the fulfillment of the enterprise’s mission, document an exception detailing mitigating controls and residual risk acceptance. For any unsupported software without an exception documentation, designate as unauthorized. Review the software list to verify software support at least monthly, or more frequently.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "2.3",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Gestire il software non autorizzato",
			"assetClass": "Software",
			"fn": "Respond",
			"description": "Ensure that unauthorized software is either removed from use on enterprise assets or receives a documented exception. Review monthly, or more frequently.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "2.4",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Usare strumenti automatizzati per l'inventario del software",
			"assetClass": "Software",
			"fn": "Detect",
			"description": "Utilize software inventory tools, when possible, throughout the enterprise to automate the discovery and documentation of installed software.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "2.5",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Inserire nella allowlist il software autorizzato",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Use technical controls, such as application allowlisting, to ensure that only authorized software can execute or be accessed. Reassess\xA0bi-annually, or more frequently.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "2.6",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Inserire nella allowlist le librerie autorizzate",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Use technical controls to ensure that only authorized software libraries, such as specific .dll, .ocx, and .so files, are allowed to load into a system process. Block unauthorized libraries from loading into a system process. Reassess bi-annually, or more frequently.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "2.7",
			"control": 2,
			"family": "Inventario e controllo del software",
			"title": "Inserire nella allowlist gli script autorizzati",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Use technical controls, such as digital signatures and version control, to ensure that only authorized scripts, such as specific .ps1 and .py files, are allowed to execute. Block unauthorized scripts from executing. Reassess\xA0bi-annually, or more frequently.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "3.1",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Definire e mantenere un processo di gestione dei dati",
			"assetClass": "Data",
			"fn": "Govern",
			"description": "Establish and maintain a documented data management process. In the process, address data sensitivity, data owner, handling of data, data retention limits, and disposal requirements, based on sensitivity and retention standards for the enterprise. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.2",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Definire e mantenere un inventario dei dati",
			"assetClass": "Data",
			"fn": "Identify",
			"description": "Establish and maintain a data inventory based on the enterprise’s data management process. Inventory sensitive data, at a minimum. Review and update inventory annually, at a minimum, with a priority on sensitive data.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.3",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Configurare le liste di controllo degli accessi ai dati",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Configure data access control lists based on a user’s need to know. Apply data access control lists, also known as access permissions, to local and remote file systems, databases, and applications.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.4",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Applicare le politiche di conservazione dei dati",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Retain data according to the enterprise’s documented data management process. Data retention must include both minimum and maximum timelines.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.5",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Eliminare i dati in modo sicuro",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Securely dispose of data as outlined in the enterprise’s documented data management process. Ensure the disposal process and method are commensurate with the data sensitivity.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.6",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Crittografare i dati sui dispositivi degli utenti",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Encrypt data on end-user devices containing sensitive data. Example implementations can include: Windows BitLocker®, Apple FileVault®, Linux® dm-crypt.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.7",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Definire e mantenere uno schema di classificazione dei dati",
			"assetClass": "Data",
			"fn": "Identify",
			"description": "Establish and maintain an overall data classification scheme for the enterprise. Enterprises may use labels, such as “Sensitive,” “Confidential,” and “Public,” and classify their data according to those labels. Review and update the classification scheme annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.8",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Documentare i flussi di dati",
			"assetClass": "Data",
			"fn": "Identify",
			"description": "Document data flows. Data flow documentation includes service provider data flows and should be based on the enterprise’s data management process. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.9",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Crittografare i dati su supporti rimovibili",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Encrypt data on removable media.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.10",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Crittografare i dati sensibili in transito",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Encrypt sensitive data in transit. Example implementations can include: Transport Layer Security (TLS) and Open Secure Shell (OpenSSH).",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.11",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Crittografare i dati sensibili a riposo",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Encrypt sensitive data at rest on servers, applications, and databases. Storage-layer encryption, also known as server-side encryption, meets the minimum requirement of this Safeguard. Additional encryption methods may include application-layer encryption, also known as client-side encryption, where access to the data storage device(s) does not permit access to the plain-text data.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.12",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Segmentare il trattamento e la memorizzazione dei dati in base alla sensibilità",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Segment data processing and storage based on the sensitivity of the data. Do not process sensitive data on enterprise assets intended for lower sensitivity data.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "3.13",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Implementare una soluzione di prevenzione della perdita di dati (DLP)",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Implement an automated tool, such as a host-based Data Loss Prevention (DLP) tool to identify all sensitive data stored, processed, or transmitted through enterprise assets, including those located onsite or at a remote service provider, and update the enterprise's data inventory.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "3.14",
			"control": 3,
			"family": "Protezione dei dati",
			"title": "Registrare gli accessi ai dati sensibili",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Log sensitive data access, including modification and disposal.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "4.1",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Definire e mantenere un processo di configurazione sicura",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented secure configuration process for enterprise assets (end-user devices, including portable and mobile, non-computing/IoT devices, and servers) and software (operating systems and applications). Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.2",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Definire e mantenere un processo di configurazione sicura per l'infrastruttura di rete",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented secure configuration process for network devices. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.3",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Configurare il blocco automatico della sessione sugli asset aziendali",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Configure automatic session locking on enterprise assets after a defined period of inactivity. For general purpose operating systems, the period must not exceed 15 minutes. For mobile end-user devices, the period must not exceed 2 minutes.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.4",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Implementare e gestire un firewall sui server",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Implement and manage a firewall on servers, where supported. Example implementations include a virtual firewall, operating system firewall, or a third-party firewall agent.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.5",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Implementare e gestire un firewall sui dispositivi degli utenti",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Implement and manage a host-based firewall or port-filtering tool on end-user devices, with a default-deny rule that drops all traffic except those services and ports that are explicitly allowed.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.6",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Gestire in modo sicuro gli asset e il software aziendale",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Securely manage enterprise assets and software. Example implementations include managing configuration through version-controlled Infrastructure-as-Code (IaC) and accessing administrative interfaces over secure network protocols, such as Secure Shell (SSH) and Hypertext Transfer Protocol Secure (HTTPS). Do not use insecure management protocols, such as Telnet (Teletype Network) and HTTP, unless operationally essential.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.7",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Gestire gli account predefiniti su asset e software",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Manage default accounts on enterprise assets and software, such as root, administrator, and other pre-configured vendor accounts. Example implementations can include: disabling default accounts or making them unusable.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.8",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Disinstallare o disabilitare i servizi non necessari su asset e software",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Uninstall or disable unnecessary services on enterprise assets and software, such as an unused file sharing service, web application module, or service function.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.9",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Configurare server DNS attendibili sugli asset aziendali",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Configure trusted DNS servers on network infrastructure. Example implementations include configuring network devices to use enterprise-controlled DNS servers and/or reputable externally accessible DNS servers.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.10",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Applicare il blocco automatico dei dispositivi portatili",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Enforce automatic device lockout following a predetermined threshold of local failed authentication attempts on portable end-user devices, where supported. For laptops, do not allow more than 20 failed authentication attempts; for tablets and smartphones, no more than 10 failed authentication attempts. Example implementations include Microsoft® InTune Device Lock and Apple® Configuration Profile maxFailedAttempts.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.11",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Abilitare la cancellazione da remoto sui dispositivi portatili",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Remotely wipe enterprise data from enterprise-owned portable end-user devices when deemed appropriate such as lost or stolen devices, or when an individual no longer supports the enterprise.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "4.12",
			"control": 4,
			"family": "Configurazione sicura degli asset e del software aziendale",
			"title": "Separare gli ambienti aziendali sui dispositivi mobili",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Ensure separate enterprise workspaces are used on mobile end-user devices, where supported. Example implementations include using an Apple® Configuration Profile or Android™ Work Profile to separate enterprise applications and data from personal applications and data.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "5.1",
			"control": 5,
			"family": "Gestione degli account",
			"title": "Creare e mantenere un inventario degli account",
			"assetClass": "Users",
			"fn": "Identify",
			"description": "Establish and maintain an inventory of all accounts managed in the enterprise. The inventory must at a minimum include user, administrator, and service accounts. The inventory, at a minimum, should contain the person’s name, username, start/stop dates, and department. Validate that all active accounts are authorized, on a recurring schedule at a minimum quarterly, or more frequently.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "5.2",
			"control": 5,
			"family": "Gestione degli account",
			"title": "Utilizzare password univoche",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Use unique passwords for all enterprise assets. Best practice implementation includes, at a minimum, an 8-character password for accounts using Multi-Factor Authentication (MFA) and a 14-character password for accounts not using MFA.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "5.3",
			"control": 5,
			"family": "Gestione degli account",
			"title": "Disabilitare gli account inattivi",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Delete or disable any dormant accounts after a period of 45 days of inactivity, where supported.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "5.4",
			"control": 5,
			"family": "Gestione degli account",
			"title": "Limitare i privilegi amministrativi ad account dedicati",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Restrict administrator privileges to dedicated administrator accounts on enterprise assets. Conduct general computing activities, such as internet browsing, email, and productivity suite use, from the user’s primary, non-privileged account.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "5.5",
			"control": 5,
			"family": "Gestione degli account",
			"title": "Creare e mantenere un inventario degli account di servizio",
			"assetClass": "Users",
			"fn": "Identify",
			"description": "Establish and maintain an inventory of service accounts. The inventory, at a minimum, must contain department owner, review date, and purpose. Perform service account reviews to validate that all active accounts are authorized, on a recurring schedule at a minimum quarterly, or more frequently.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "5.6",
			"control": 5,
			"family": "Gestione degli account",
			"title": "Centralizzare la gestione degli account",
			"assetClass": "Users",
			"fn": "Govern",
			"description": "Centralize account management through a directory or identity service.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.1",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Definire un processo per la concessione degli accessi",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and follow a documented process, preferably automated, for granting access to enterprise assets upon new hire or role change of a user.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.2",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Definire un processo per la revoca degli accessi",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and follow a process, preferably automated, for revoking access to enterprise assets, through disabling accounts immediately upon termination, rights revocation, or role change of a user. Disabling accounts, instead of deleting accounts, may be necessary to preserve audit trails.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.3",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Richiedere MFA per applicazioni esposte all'esterno",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Require all externally-exposed enterprise or third-party applications to enforce MFA, where supported. Enforcing MFA through a directory service or SSO provider is a satisfactory implementation of this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.4",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Richiedere MFA per accessi remoti alla rete",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Require MFA for remote network access.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.5",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Richiedere MFA per accessi amministrativi",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Require MFA for all administrative access accounts, where supported, on all enterprise assets, whether managed on-site or through a service provider.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.6",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Creare e mantenere un inventario dei sistemi di autenticazione e autorizzazione",
			"assetClass": "Software",
			"fn": "Identify",
			"description": "Establish and maintain an inventory of the enterprise’s authentication and authorization systems, including those hosted on-site or at a remote service provider. Review and update the inventory, at a minimum, annually, or more frequently.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.7",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Centralizzare il controllo degli accessi",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Centralize access control for all enterprise assets through a directory service or SSO provider, where supported.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "6.8",
			"control": 6,
			"family": "Gestione del controllo accessi",
			"title": "Definire e mantenere controlli di accesso basati sui ruoli (RBAC)",
			"assetClass": "Users",
			"fn": "Govern",
			"description": "Define and maintain role-based access control, through determining and documenting the access rights necessary for each role within the enterprise to successfully carry out its assigned duties. Perform access control reviews of enterprise assets to validate that all privileges are authorized, on a recurring schedule at a minimum annually, or more frequently.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "7.1",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Definire e mantenere un processo di gestione delle vulnerabilità",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented vulnerability management process for enterprise assets. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "7.2",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Definire e mantenere un processo di remediation",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a risk-based remediation strategy documented in a remediation process, with monthly, or more frequent, reviews.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "7.3",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Gestire automaticamente le patch del sistema operativo",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Perform operating system updates on enterprise assets through automated patch management on a monthly, or more frequent, basis.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "7.4",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Gestire automaticamente le patch delle applicazioni",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Perform application updates on enterprise assets through automated patch management on a monthly, or more frequent, basis.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "7.5",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Eseguire scansioni automatiche delle vulnerabilità\xA0 sugli asset interni",
			"assetClass": "Software",
			"fn": "Identify",
			"description": "Perform automated vulnerability scans of internal enterprise assets on a quarterly, or more frequent, basis. Conduct both authenticated and unauthenticated scans.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "7.6",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Eseguire scansioni automatiche delle vulnerabilità\xA0 sugli asset esposti all'esterno",
			"assetClass": "Software",
			"fn": "Identify",
			"description": "Perform automated vulnerability scans of externally-exposed enterprise assets. Perform scans on a monthly, or more frequent, basis.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "7.7",
			"control": 7,
			"family": "Gestione continua delle vulnerabilità",
			"title": "Correggere le vulnerabilità\xA0 rilevate",
			"assetClass": "Software",
			"fn": "Respond",
			"description": "Remediate detected vulnerabilities in software through processes and tooling on a monthly, or more frequent, basis, based on the remediation process.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.1",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Definire e mantenere un processo di gestione dei log di audit",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented audit log management process that defines the enterprise’s logging requirements. At a minimum, address the collection, review, and retention of audit logs for enterprise assets. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.2",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Raccogliere i log di audit",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Collect audit logs. Ensure that logging, per the enterprise’s audit log management process, has been enabled across enterprise assets.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.3",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Garantire un'adeguata capacità\xA0 di archiviazione dei log",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Ensure that logging destinations maintain adequate storage to comply with the enterprise’s audit log management process.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.4",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Standardizzare la sincronizzazione dell'orario",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Standardize time synchronization. Configure at least two synchronized time sources across enterprise assets, where supported.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.5",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Raccogliere log di audit dettagliati",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Configure detailed audit logging for enterprise assets containing sensitive data. Include event source, date, username, timestamp, source addresses, destination addresses, and other useful elements that could assist in a forensic investigation.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.6",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Raccogliere i log delle query DNS",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Collect DNS query audit logs on enterprise assets, where appropriate and supported.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.7",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Raccogliere i log delle richieste URL",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Collect URL request audit logs on enterprise assets, where appropriate and supported.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.8",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Raccogliere i log della riga di comando",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Collect command-line audit logs. Example implementations include collecting audit logs from PowerShell®, BASH™, and remote administrative terminals.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.9",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Centralizzare i log di audit",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Centralize, to the extent possible, audit log collection and retention across enterprise assets in accordance with the documented audit log management process. Example implementations primarily include leveraging a SIEM tool to centralize multiple log sources.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.10",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Conservare i log di audit",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Retain audit logs across enterprise assets for a minimum of 90 days.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.11",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Condurre revisioni dei log di audit",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Conduct reviews of audit logs to detect anomalies or abnormal events that could indicate a potential threat. Conduct reviews on a weekly, or more frequent, basis.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "8.12",
			"control": 8,
			"family": "Gestione dei log di audit",
			"title": "Raccogliere i log dei fornitori di servizi",
			"assetClass": "Data",
			"fn": "Detect",
			"description": "Collect service provider logs, where supported. Example implementations include collecting authentication and authorization events, data creation and disposal events, and user management events.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "9.1",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Utilizzare solo browser e client email completamente supportati",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Ensure only fully supported browsers and email clients are allowed to execute in the enterprise, only using the latest version of browsers and email clients provided through the vendor.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "9.2",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Utilizzare servizi di filtraggio DNS",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Use DNS filtering services on all end-user devices, including remote and on-premises assets, to block access to known malicious domains.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "9.3",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Gestire e applicare filtri URL basati su rete",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Enforce and update network-based URL filters to limit an enterprise asset from connecting to potentially malicious or unapproved websites. Example implementations include category-based filtering, reputation-based filtering, or through the use of block lists. Enforce filters for all enterprise assets.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "9.4",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Limitare estensioni non necessarie o non autorizzate su browser e client email",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Restrict, either through uninstalling or disabling, any unauthorized or unnecessary browser or email client plugins, extensions, and add-on applications.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "9.5",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Implementare DMARC",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "To lower the chance of spoofed or modified emails from valid domains, implement DMARC policy and verification, starting with implementing the Sender Policy Framework (SPF) and the DomainKeys Identified Mail (DKIM) standards.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "9.6",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Bloccare i tipi di file non necessari",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Block unnecessary file types attempting to enter the enterprise’s email gateway.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "9.7",
			"control": 9,
			"family": "Protezione della posta elettronica e del browser web",
			"title": "Distribuire e mantenere protezioni antimalware sui server email",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Deploy and maintain email server anti-malware protections, such as attachment scanning and/or sandboxing.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "10.1",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Distribuire e mantenere software antimalware",
			"assetClass": "Devices",
			"fn": "Detect",
			"description": "Deploy and maintain anti-malware software on all enterprise assets.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "10.2",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Configurare aggiornamenti automatici delle firme antimalware",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Configure automatic updates for anti-malware signature files on all enterprise assets.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "10.3",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Disabilitare autorun e autoplay per i supporti rimovibili",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Disable autorun and autoplay auto-execute functionality for removable media.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "10.4",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Configurare la scansione automatica antimalware dei supporti rimovibili",
			"assetClass": "Devices",
			"fn": "Detect",
			"description": "Configure anti-malware software to automatically scan removable media.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "10.5",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Abilitare funzionalità\xA0 anti-exploit",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Enable anti-exploitation features on enterprise assets and software, where possible, such as Microsoft® Data Execution Prevention (DEP), Windows® Defender Exploit Guard (WDEG), or Apple® System Integrity Protection (SIP) and Gatekeeper™.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "10.6",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Gestire centralmente il software antimalware",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Centrally manage anti-malware software.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "10.7",
			"control": 10,
			"family": "Difesa contro malware",
			"title": "Utilizzare software antimalware basato su comportamento",
			"assetClass": "Devices",
			"fn": "Detect",
			"description": "Use behavior-based anti-malware software.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "11.1",
			"control": 11,
			"family": "Recupero dei dati",
			"title": "Definire e mantenere un processo di recupero dati",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented data recovery process that includes detailed backup procedures. In the process, address the scope of data recovery activities, recovery prioritization, and the security of backup data. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "11.2",
			"control": 11,
			"family": "Recupero dei dati",
			"title": "Eseguire backup automatici",
			"assetClass": "Data",
			"fn": "Recover",
			"description": "Perform automated backups of in-scope enterprise assets. Run backups weekly, or more frequently, based on the sensitivity of the data.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "11.3",
			"control": 11,
			"family": "Recupero dei dati",
			"title": "Proteggere i dati di recupero",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Protect recovery data with equivalent controls to the original data. Reference encryption or data separation, based on requirements.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "11.4",
			"control": 11,
			"family": "Recupero dei dati",
			"title": "Mantenere un'istanza isolata dei dati di recupero",
			"assetClass": "Data",
			"fn": "Recover",
			"description": "Establish and maintain an isolated instance of recovery data. Example implementations include, version controlling backup destinations through offline, cloud, or off-site systems or services.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "11.5",
			"control": 11,
			"family": "Recupero dei dati",
			"title": "Testare il recupero dei dati",
			"assetClass": "Data",
			"fn": "Recover",
			"description": "Test backup recovery quarterly, or more frequently, for a sampling of in-scope enterprise assets.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.1",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Assicurarsi che l'infrastruttura di rete sia aggiornata",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Ensure network infrastructure is kept up-to-date. Example implementations include running the latest stable release of software and/or using currently supported network-as-a-service (NaaS) offerings. Review software versions monthly, or more frequently, to verify software support.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.2",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Definire e mantenere un'architettura di rete sicura",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Design and maintain a secure network architecture. A secure network architecture must address segmentation, least privilege, and availability, at a minimum. Example implementations may include documentation, policy, and design components.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.3",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Gestire in modo sicuro l'infrastruttura di rete",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Securely manage network infrastructure. Example implementations include version-controlled Infrastructure-as-Code (IaC), and the use of secure network protocols, such as SSH and HTTPS.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.4",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Creare e mantenere i diagrammi architetturali",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain architecture diagram(s) and/or other network system documentation. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.5",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Centralizzare autenticazione, autorizzazione e auditing (AAA) di rete",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Centralize network AAA.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.6",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Utilizzare protocolli sicuri per la gestione e la comunicazione di rete",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Adopt secure network management protocols (e.g., 802.1X) and secure communication protocols (e.g., Wi-Fi Protected Access 2 (WPA2) Enterprise or more secure alternatives).",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.7",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Garantire che i dispositivi remoti utilizzino VPN e si connettano all'infrastruttura AAA aziendale",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Require users to authenticate to enterprise-managed VPN and authentication services prior to accessing enterprise resources on end-user devices.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "12.8",
			"control": 12,
			"family": "Gestione dell'infrastruttura di rete",
			"title": "Assegnare risorse informatiche dedicate per tutte le attività\xA0 amministrative",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Establish and maintain dedicated computing resources, either physically or logically separated, for all administrative tasks or tasks requiring administrative access. The computing resources should be segmented from the enterprise's primary network and not be allowed internet access.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "13.1",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Centralizzare gli avvisi sugli eventi di sicurezza",
			"assetClass": "Network",
			"fn": "Detect",
			"description": "Centralize security event alerting across enterprise assets for log correlation and analysis. Best practice implementation requires the use of a SIEM, which includes vendor-defined event correlation alerts. A log analytics platform configured with security-relevant correlation alerts also satisfies this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "13.2",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Distribuire una soluzione di rilevamento intrusioni basata su host",
			"assetClass": "Devices",
			"fn": "Detect",
			"description": "Deploy a host-based intrusion detection solution on enterprise assets, where appropriate and/or supported.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "13.3",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Distribuire una soluzione di rilevamento intrusioni basata su rete",
			"assetClass": "Network",
			"fn": "Detect",
			"description": "Deploy a network intrusion detection solution on enterprise assets, where appropriate. Example implementations include the use of a Network Intrusion Detection System (NIDS) or equivalent cloud service provider (CSP) service.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "13.4",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Filtrare il traffico tra segmenti di rete",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Perform traffic filtering between network segments, where appropriate.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "13.5",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Gestire il controllo accessi per gli asset remoti",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Manage access control for assets remotely connecting to enterprise resources. Determine amount of access to enterprise resources based on: up-to-date anti-malware software installed, configuration compliance with the enterprise’s secure configuration process, and ensuring the operating system and applications are up-to-date.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "13.6",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Raccogliere i log di flusso del traffico di rete",
			"assetClass": "Network",
			"fn": "Detect",
			"description": "Collect network traffic flow logs and/or network traffic to review and alert upon from network devices.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "13.7",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Distribuire una soluzione di prevenzione intrusioni basata su host",
			"assetClass": "Devices",
			"fn": "Protect",
			"description": "Deploy a host-based intrusion prevention solution on enterprise assets, where appropriate and/or supported. Example implementations include use of an Endpoint Detection and Response (EDR) client or host-based IPS agent.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "13.8",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Distribuire una soluzione di prevenzione intrusioni basata su rete",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Deploy a network intrusion prevention solution, where appropriate. Example implementations include the use of a Network Intrusion Prevention System (NIPS) or equivalent CSP service.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "13.9",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Applicare controlli di accesso a livello di porta",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Deploy port-level access control. Port-level access control utilizes 802.1x, or similar network access control protocols, such as certificates, and may incorporate user and/or device authentication.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "13.10",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Applicare filtri a livello applicativo",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Perform application layer filtering. Example implementations include a filtering proxy, application layer firewall, or gateway.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "13.11",
			"control": 13,
			"family": "Monitoraggio e difesa della rete",
			"title": "Regolare le soglie di allerta per gli eventi di sicurezza",
			"assetClass": "Network",
			"fn": "Detect",
			"description": "Tune security event alerting thresholds monthly, or more frequently.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "14.1",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Definire e mantenere un programma di sensibilizzazione alla sicurezza",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a security awareness program. The purpose of a security awareness program is to educate the enterprise’s workforce on how to interact with enterprise assets and data in a secure manner. Conduct training at hire and, at a minimum, annually. Review and update content annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.2",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale a riconoscere attacchi di ingegneria sociale",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce members to recognize social engineering attacks, such as phishing, business email compromise (BEC), pretexting, and tailgating.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.3",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale sulle migliori pratiche di autenticazione",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce members on authentication best practices. Example topics include MFA, password composition, and credential management.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.4",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale sulla gestione sicura dei dati",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce members on how to identify and properly store, transfer, archive, and destroy sensitive data. This also includes training workforce members on clear screen and desk best practices, such as locking their screen when they step away from their enterprise asset, erasing physical and virtual whiteboards at the end of meetings, and storing data and assets securely.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.5",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale sulle cause dell'esposizione involontaria dei dati",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce members to be aware of causes for unintentional data exposure. Example topics include mis-delivery of sensitive data, losing a portable end-user device, or publishing data to unintended audiences.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.6",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale a riconoscere e segnalare incidenti di sicurezza",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce members to be able to recognize a potential incident and be able to report such an incident.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.7",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale a identificare e segnalare la mancanza di aggiornamenti sugli asset aziendali",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce to understand how to verify and report out-of-date software patches or any failures in automated processes and tools. Part of this training should include notifying IT personnel of any failures in automated processes and tools.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.8",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Formare il personale sui rischi legati all'uso di reti insicure per il trasferimento di dati aziendali",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Train workforce members on the dangers of connecting to, and transmitting data over, insecure networks for enterprise activities. If the enterprise has remote workers, training must include guidance to ensure that all users securely configure their home network infrastructure.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "14.9",
			"control": 14,
			"family": "Formazione sulla sicurezza e sulle competenze",
			"title": "Condurre formazione e sviluppo di competenze specifiche per ruolo",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Conduct role-specific security awareness and skills training. Example implementations include secure system administration courses for IT professionals, OWASP® Top 10 vulnerability awareness and prevention training for web application developers, and advanced social engineering awareness training for high-profile roles.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "15.1",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Creare e mantenere un inventario dei fornitori di servizi",
			"assetClass": "Users",
			"fn": "Identify",
			"description": "Establish and maintain an inventory of service providers. The inventory is to list all known service providers, include classification(s), and designate an enterprise contact for each service provider. Review and update the inventory annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "15.2",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Definire e mantenere una policy di gestione dei fornitori di servizi",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a service provider management policy. Ensure the policy addresses the classification, inventory, assessment, monitoring, and decommissioning of service providers. Review and update the policy annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "15.3",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Classificare i fornitori di servizi",
			"assetClass": "Users",
			"fn": "Govern",
			"description": "Classify service providers. Classification consideration may include one or more characteristics, such as data sensitivity, data volume, availability requirements, applicable regulations, inherent risk, and mitigated risk. Update and review classifications annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "15.4",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Assicurarsi che i contratti con i fornitori includano requisiti di sicurezza",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Ensure service provider contracts include security requirements. Example requirements may include minimum security program requirements, security incident and/or data breach notification and response, data encryption requirements, and data disposal commitments. These security requirements must be consistent with the enterprise’s service provider management policy. Review service provider contracts annually to ensure contracts are not missing security requirements.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "15.5",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Valutare i fornitori di servizi",
			"assetClass": "Users",
			"fn": "Govern",
			"description": "Assess service providers consistent with the enterprise’s service provider management policy. Assessment scope may vary based on classification(s), and may include review of standardized assessment reports, such as Service Organization Control 2 (SOC 2) and Payment Card Industry (PCI) Attestation of Compliance (AoC), customized questionnaires, or other appropriately rigorous processes. Reassess service providers annually, at a minimum, or with new and renewed contracts.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "15.6",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Monitorare i fornitori di servizi",
			"assetClass": "Data",
			"fn": "Govern",
			"description": "Monitor service providers consistent with the enterprise’s service provider management policy. Monitoring may include periodic reassessment of service provider compliance, monitoring service provider release notes, and dark web monitoring.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "15.7",
			"control": 15,
			"family": "Gestione dei fornitori di servizi",
			"title": "Disattivare in modo sicuro i fornitori di servizi",
			"assetClass": "Data",
			"fn": "Protect",
			"description": "Securely decommission service providers. Example considerations include user and service account deactivation, termination of data flows, and secure disposal of enterprise data within service provider systems.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "16.1",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Definire e mantenere un processo di sviluppo sicuro del software",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a secure application development process. In the process, address such items as: secure application design standards, secure coding practices, developer training, vulnerability management, security of third-party code, and application security testing procedures. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.2",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Definire e mantenere un processo per gestire le vulnerabilità\xA0 software",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a process to accept and address reports of software vulnerabilities, including providing a means for external entities to report.\xA0The process is to include such items as: a vulnerability handling policy that identifies reporting process, responsible party for handling vulnerability reports, and a process for intake, assignment, remediation, and remediation testing.\xA0As part of the process, use a vulnerability tracking system that includes severity ratings and metrics for measuring timing for identification, analysis, and remediation of vulnerabilities.\xA0Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard.\n\nThird-party application developers need to consider this an externally-facing policy that helps to set expectations for outside stakeholders.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.3",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Eseguire analisi delle cause alla radice delle vulnerabilità",
			"assetClass": "Software",
			"fn": "Detect",
			"description": "Perform root cause analysis on security vulnerabilities. When reviewing vulnerabilities, root cause analysis is the task of evaluating underlying issues that create vulnerabilities in code, and allows development teams to move beyond just fixing individual vulnerabilities as they arise.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.4",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Creare e gestire un inventario dei componenti software di terze parti",
			"assetClass": "Software",
			"fn": "Identify",
			"description": "Establish and manage an updated inventory of third-party components used in development, often referred to as a “bill of materials,” as well as components slated for future use.\xA0This inventory is to include any risks that each third-party component could pose.\xA0Evaluate the list at least monthly to identify any changes or updates to these components, and validate that the component is still supported.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.5",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Usare componenti software aggiornati e affidabili",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Use up-to-date and trusted third-party software components. When possible, choose established and proven frameworks and libraries that provide adequate security.\xA0Acquire these components from trusted sources or evaluate the software for vulnerabilities before use.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.6",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Definire e mantenere un sistema di classificazione delle vulnerabilità\xA0 applicative",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a severity rating system and process for application vulnerabilities that facilitates prioritizing the order in which discovered vulnerabilities are fixed. This process includes setting a minimum level of security acceptability for releasing code or applications. Severity ratings bring a systematic way of triaging vulnerabilities that improves risk management and helps ensure the most severe bugs are fixed first. Review and update the system and process annually.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.7",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Utilizzare configurazioni standard per l'infrastruttura applicativa",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Use standard, industry-recommended hardening configuration templates for application infrastructure components. This includes underlying servers, databases, and web servers, and applies to cloud containers, Platform as a Service (PaaS) components, and SaaS components. Do not allow in-house developed software to weaken configuration hardening.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.8",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Separare gli ambienti di produzione e non produzione",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Maintain separate environments for production and non-production systems.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.9",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Formare gli sviluppatori sui concetti di sicurezza e codifica sicura",
			"assetClass": "Users",
			"fn": "Protect",
			"description": "Ensure that all software development personnel receive training in writing secure code for their specific development environment and responsibilities. Training can include general security principles and application security standard practices. Conduct training at least annually and design in a way to promote security within the development team, and build a culture of security among the developers.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.10",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Applicare principi di progettazione sicura all'architettura applicativa",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Apply secure design principles in application architectures. Secure design principles include the concept of least privilege and enforcing mediation to validate every operation that the user makes, promoting the concept of \"never trust user input.\" Examples include ensuring that explicit error checking is performed and documented for all input, including for size, data type, and acceptable ranges or formats. Secure design also means minimizing the application infrastructure attack surface, such as turning off unprotected ports and services, removing unnecessary programs and files, and renaming or removing default accounts.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.11",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Utilizzare moduli o servizi validati per la sicurezza delle applicazioni",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Leverage vetted modules or services for application security components, such as identity management, encryption, auditing, and logging. Using platform features in critical security functions will reduce developers’ workload and minimize the likelihood of design or implementation errors. Modern operating systems provide effective mechanisms for identification, authentication, and authorization and make those mechanisms available to applications. Use only standardized, currently accepted, and extensively reviewed encryption algorithms. Operating systems also provide mechanisms to create and maintain secure audit logs.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "16.12",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Implementare controlli di sicurezza a livello di codice",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Apply static and dynamic analysis tools within the application life cycle to verify that secure coding practices are being followed.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "16.13",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Eseguire test di penetrazione sulle applicazioni",
			"assetClass": "Software",
			"fn": "Detect",
			"description": "Conduct application penetration testing. For critical applications, authenticated penetration testing is better suited to finding business logic vulnerabilities than code scanning and automated security testing.\xA0Penetration testing relies on the skill of the tester to manually manipulate an application as an authenticated and unauthenticated user.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "16.14",
			"control": 16,
			"family": "Sicurezza del software applicativo",
			"title": "Condurre attività\xA0 di threat modeling",
			"assetClass": "Software",
			"fn": "Protect",
			"description": "Conduct threat modeling. Threat modeling is the process of identifying and addressing application security design flaws within a design, before code is created. It is conducted through specially trained individuals who evaluate the application design and gauge security risks for each entry point and access level. The goal is to map out the application, architecture, and infrastructure in a structured way to understand its weaknesses.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "17.1",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Assegnare personale alla gestione degli incidenti",
			"assetClass": "Users",
			"fn": "Respond",
			"description": "Designate one key person, and at least one backup, who will manage the enterprise’s incident handling process. Management personnel are responsible for the coordination and documentation of incident response and recovery efforts and can consist of employees internal to the enterprise, service providers, or a hybrid approach. If using a service provider, designate at least one person internal to the enterprise to oversee any third-party work. Review annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.2",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Definire e mantenere i contatti per la segnalazione degli incidenti",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain contact information for parties that need to be informed of security incidents. Contacts may include internal staff, service providers, law enforcement, cyber insurance providers, relevant government agencies, Information Sharing and Analysis Center (ISAC) partners, or other stakeholders. Verify contacts annually to ensure that information is up-to-date.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.3",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Definire e mantenere un processo aziendale per la segnalazione degli incidenti",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented enterprise process for the workforce to report security incidents. The process includes reporting timeframe, personnel to report to, mechanism for reporting, and the minimum information to be reported. Ensure the process is publicly available to all of the workforce. Review annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": true,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.4",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Definire e mantenere un processo di risposta agli incidenti",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a documented incident response process that addresses roles and responsibilities, compliance requirements, and a communication plan. Review annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.5",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Assegnare ruoli e responsabilità\xA0 chiave",
			"assetClass": "Users",
			"fn": "Respond",
			"description": "Assign key roles and responsibilities for incident response, including staff from legal, IT, information security, facilities, public relations, human resources, incident responders, analysts, and relevant third parties. Review annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.6",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Definire i meccanismi di comunicazione durante la risposta agli incidenti",
			"assetClass": "Users",
			"fn": "Respond",
			"description": "Determine which primary and secondary mechanisms will be used to communicate and report during a security incident. Mechanisms can include phone calls, emails, secure chat, or notification letters. Keep in mind that certain mechanisms, such as emails, can be affected during a security incident. Review annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.7",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Condurre esercitazioni periodiche di risposta agli incidenti",
			"assetClass": "Users",
			"fn": "Recover",
			"description": "Plan and conduct routine incident response exercises and scenarios for key personnel involved in the incident response process to prepare for responding to real-world incidents. Exercises need to test communication channels, decision making, and workflows. Conduct testing on an annual basis, at a minimum.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.8",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Eseguire analisi post-incidente",
			"assetClass": "Users",
			"fn": "Recover",
			"description": "Conduct post-incident reviews. Post-incident reviews help prevent incident recurrence through identifying lessons learned and follow-up action.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "17.9",
			"control": 17,
			"family": "Gestione della risposta agli incidenti",
			"title": "Definire e mantenere soglie per gli incidenti di sicurezza",
			"assetClass": "Documentation",
			"fn": "Recover",
			"description": "Establish and maintain security incident thresholds, including, at a minimum, differentiating between an incident and an event. Examples can include: abnormal activity, security vulnerability, security weakness, data breach, privacy incident, etc. Review annually, or when significant enterprise changes occur that could impact this Safeguard.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "18.1",
			"control": 18,
			"family": "Test di penetrazione",
			"title": "Definire e mantenere un programma di penetration test",
			"assetClass": "Documentation",
			"fn": "Govern",
			"description": "Establish and maintain a penetration testing program appropriate to the size, complexity, industry, and maturity of the enterprise. Penetration testing program characteristics include scope, such as network, web application, Application Programming Interface (API), hosted services, and physical premise controls; frequency; limitations, such as acceptable hours, and excluded attack types; point of contact information; remediation, such as how findings will be routed internally; and retrospective requirements.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "18.2",
			"control": 18,
			"family": "Test di penetrazione",
			"title": "Eseguire test di penetrazione esterni periodici",
			"assetClass": "Network",
			"fn": "Detect",
			"description": "Perform periodic external penetration tests based on program requirements, no less than annually. External penetration testing must include enterprise and environmental reconnaissance to detect exploitable information. Penetration testing requires specialized skills and experience and must be conducted through a qualified party. The testing may be clear box or opaque box.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "18.3",
			"control": 18,
			"family": "Test di penetrazione",
			"title": "Correggere i risultati dei penetration test",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Remediate penetration test findings based on the enterprise’s documented vulnerability remediation process. This should include determining a timeline and level of effort based on the impact and prioritization of each identified finding.",
			"ig1": false,
			"ig2": true,
			"ig3": true
		},
		{
			"id": "18.4",
			"control": 18,
			"family": "Test di penetrazione",
			"title": "Verificare le misure di sicurezza",
			"assetClass": "Network",
			"fn": "Protect",
			"description": "Validate security measures after each penetration test. If deemed necessary, modify rulesets and capabilities to detect the techniques used during testing.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		},
		{
			"id": "18.5",
			"control": 18,
			"family": "Test di penetrazione",
			"title": "Eseguire test di penetrazione interni periodici",
			"assetClass": "Network",
			"fn": "Detect",
			"description": "Perform periodic internal penetration tests based on program requirements, no less than annually. The testing may be clear box or opaque box.",
			"ig1": false,
			"ig2": false,
			"ig3": true
		}
	],
	"perimeters": [
		{
			"id": "erp",
			"name": "ERP"
		},
		{
			"id": "network",
			"name": "Network"
		},
		{
			"id": "email-microsoft",
			"name": "Email Microsoft"
		},
		{
			"id": "backup",
			"name": "Infrastruttura Backup"
		},
		{
			"id": "mobile",
			"name": "Mobile"
		}
	],
	"assets": [
		{
			"id": "1",
			"name": "ERP",
			"inScope": true,
			"perimeterId": "erp",
			"area": "COM",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "48h",
			"notes": "Software trasversale di integrazione dei processi aziendali"
		},
		{
			"id": "2",
			"name": "Cartelle di rete/dati amministrazione",
			"inScope": true,
			"perimeterId": "network",
			"area": "UT,COM,AMM,ASS",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": "Archiviazione su file system (potenziali 60.000,00 euro/giorno di perdita)"
		},
		{
			"id": "3",
			"name": "Email Microsoft",
			"inScope": true,
			"perimeterId": "email-microsoft",
			"area": "UT,COM,AMM,ASS",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": "In cloud Office 365+backup Mailstore (potenziali 60.000,00 euro/giorno di perdita)"
		},
		{
			"id": "4",
			"name": "Infrastruttura di Backup",
			"inScope": true,
			"perimeterId": "backup",
			"area": "UT,COM,AMM,ASS",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": "Rete aziendale (potenziali 60.000,00 euro/giorno di perdita)"
		},
		{
			"id": "5",
			"name": "Mobile",
			"inScope": true,
			"perimeterId": "mobile",
			"area": "COM,AMM,ASS",
			"owner": "AMM",
			"rto": "4h",
			"rpo": "24h",
			"notes": "Dispositivi aziendali non gestiti, solo inventariati. (potenziali 60.000,00 euro/giorno di perdita)"
		},
		{
			"id": "6",
			"name": "Software automazione",
			"inScope": true,
			"perimeterId": "network",
			"area": "UT",
			"owner": "UT",
			"rto": "24h",
			"rpo": "72h",
			"notes": "Definire procedure operative di archiviazione e backup file progetto."
		},
		{
			"id": "7",
			"name": "Cloud-SaaS",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "8",
			"name": "DB",
			"inScope": true,
			"perimeterId": "network",
			"area": "",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "9",
			"name": "Applicazione Web",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "10",
			"name": "Sito Web",
			"inScope": false,
			"perimeterId": "",
			"area": "COM",
			"owner": "COM",
			"rto": "24h",
			"rpo": "72h",
			"notes": "Gestito da agenzia esterna, istituzionale."
		},
		{
			"id": "11",
			"name": "Sito eCommerce",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "12",
			"name": "Pagine social",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "13",
			"name": "Server Virtuali",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "14",
			"name": "Server Fisici",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "15",
			"name": "Software di Terze Parti (installato su propri server)",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "16",
			"name": "Rete",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "17",
			"name": "Applicativi Office (inclusa posta elettronica, sharepoint)",
			"inScope": true,
			"perimeterId": "",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "18",
			"name": "PC",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "19",
			"name": "Domani Controller",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "20",
			"name": "Sistema di archiviazione",
			"inScope": true,
			"perimeterId": "network",
			"area": "",
			"owner": "",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "21",
			"name": "Apparati Hardware/Rete aziendale",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "24h",
			"notes": ""
		},
		{
			"id": "22",
			"name": "VPN",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "72h",
			"notes": ""
		},
		{
			"id": "23",
			"name": "PrintServer/FileServer",
			"inScope": true,
			"perimeterId": "network",
			"area": "MSP",
			"owner": "MSP",
			"rto": "4h",
			"rpo": "72h",
			"notes": ""
		},
		{
			"id": "24",
			"name": "Cloud-IaaS",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "25",
			"name": "Cloud-PaaS",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "26",
			"name": "Data Center",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "27",
			"name": "OT - ICS (Sistemi di controllo industriale)",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		},
		{
			"id": "28",
			"name": "OT - PLC (controllori logici programmabili",
			"inScope": true,
			"perimeterId": "network",
			"area": "PROD",
			"owner": "",
			"rto": "24h",
			"rpo": "72h",
			"notes": "VLan compartimentata dell'area di produzione"
		},
		{
			"id": "29",
			"name": "OT - sistemi SCADA (Supervisory Control And Data Acquisition)",
			"inScope": true,
			"perimeterId": "network",
			"area": "PROD",
			"owner": "",
			"rto": "24h",
			"rpo": "72h",
			"notes": "VLan compartimentata dell'area di produzione"
		},
		{
			"id": "30",
			"name": "IoT",
			"inScope": false,
			"perimeterId": "",
			"area": "",
			"owner": "",
			"rto": "",
			"rpo": "",
			"notes": ""
		}
	],
	"answers": {
		"erp:1": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Monitoraggio e difesa della rete",
			"controlMeasure": "Centralizzare gli avvisi sugli eventi di sicurezza",
			"controlIds": ["13.1", "12.2"],
			"controlNotes": "Monitoraggio in essere (su tutti gli asset, inclusi i pc)",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:2": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Assicurarsi che l'infrastruttura di rete sia aggiornata",
			"controlIds": ["12.1"],
			"controlNotes": "Rischi legati all'obsolescenza hw",
			"effectiveness": "parziale",
			"action": "Valutare l'aggiornamento dell'hardware",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"erp:3": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Sicurezza del software applicativo",
			"controlMeasure": "Usare componenti software aggiornati e affidabili",
			"controlIds": ["16.5", "16.3"],
			"controlNotes": "Verificare le cause di eventuali malfinzionamenti, la root cause, ed implementare una strategia di mitigazione, verificando eventuali problemi di compatibilità degli aggiornamenti dei componenti software usati.",
			"effectiveness": "non",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:4": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Eseguire backup automatici",
			"controlIds": [
				"11.1",
				"11.2",
				"11.5"
			],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:5": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:6": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Segmentare il trattamento e la memorizzazione dei dati in base alla sensibilità",
			"controlIds": ["3.12"],
			"controlNotes": "",
			"effectiveness": "parziale",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:7": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": false,
			"impact": 3,
			"controlFamily": "Sicurezza del software applicativo",
			"controlMeasure": "Definire e mantenere un sistema di classificazione delle vulnerabilità\xA0 applicative",
			"controlIds": ["16.4", "16.5"],
			"controlNotes": "in carico a fornitore",
			"effectiveness": "prev-adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:8": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:9": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:10": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Crittografare i dati sensibili a riposo",
			"controlIds": ["3.11", "12.2"],
			"controlNotes": "Accesso al client dall'interno (alcuni utenti accedono tramite VPN)\n\nGli amminstratori di Dominio hanno le credenziali di accesso al DB (solo per manutenzione e credenziali univoche) e non al Gestionale\n\nE' prevista complessità della password e cambio forzato",
			"effectiveness": "prev-non",
			"action": "Valutare rafforzamento delle modalità di accesso",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:11": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione degli account",
			"controlMeasure": "Creare e mantenere un inventario degli account",
			"controlIds": [
				"5.1",
				"5.6",
				"6.3"
			],
			"controlNotes": "Configurzione Zero Trust.\nAggiornamento periodico parco utenti, e relativa pulizia.\nAccesso da remoto ADMIN tramite piattaforma con MFA\n\nVPN no MFA integrata firewall (commerciali, remote work contabile e service, Controllo e Executive aiendali)",
			"effectiveness": "parziale",
			"action": "Verificare l'applicazione delle procedure di ingresso, modifica profilo, uscita dipendenti + disattivazione tempestiva utenze su Impresa (Office System)",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:12": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione degli account",
			"controlMeasure": "Limitare i privilegi amministrativi ad account dedicati",
			"controlIds": ["5.4"],
			"controlNotes": "Rischio su utenza operativa in trasferta.\nAmministratori di sistema MSP con credenziali forti e MFA\nCampagna di Awareness",
			"effectiveness": "parziale",
			"action": "Campagne di awareness annuali da piano formazione",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:13": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione del controllo accessi",
			"controlMeasure": "Definire e mantenere controlli di accesso basati sui ruoli (RBAC)",
			"controlIds": ["3.3", "5.4"],
			"controlNotes": "Porte USB Blocate salvo responsabili per attività specifiche.",
			"effectiveness": "parziale",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:14": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Mantenere un'istanza isolata dei dati di recupero",
			"controlIds": ["11.4", "11.1"],
			"controlNotes": "Sala server, con chiusura a chiave\n\nMisure di sicurezza fisica in essere",
			"effectiveness": "prev-adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:15": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Mantenere un'istanza isolata dei dati di recupero",
			"controlIds": ["11.1", "11.4"],
			"controlNotes": "Sala server, con chiusura a chiave\n\nMisure di backup ridondanti in cloud immutabile",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:16": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Mantenere un'istanza isolata dei dati di recupero",
			"controlIds": ["11.4"],
			"controlNotes": "Soluzione di DR in locale e cloud immutabile",
			"effectiveness": "prev-adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:17": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Sicurezza del software applicativo",
			"controlMeasure": "Separare gli ambienti di produzione e non produzione",
			"controlIds": ["16.8"],
			"controlNotes": "Vedi componenti infrastrutturali (esiste solo ambiente di produzione)\n\nLe versioni delle componenti infrastrutturali sono dettate dal fornitore dell'applicativo\n\nServer Legacy con software MES, da verificare integrazione con database generale ERP",
			"effectiveness": "prev-non",
			"action": "In corso la definizione del piano di gestione delle vulnerabilità",
			"actionDetail": "Valutazione per la creazione di VM adeguata per gestione dei dati legacy",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": "Da avviare"
		},
		"erp:18": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Monitoraggio e difesa della rete",
			"controlMeasure": "Distribuire una soluzione di prevenzione intrusioni basata su host",
			"controlIds": ["13.7"],
			"controlNotes": "zero trust sia client che server",
			"effectiveness": "parziale",
			"action": "I gestione delle macchine legacy in ciclo vita o a fine vita da rielaborare",
			"actionDetail": "",
			"priority": "Media",
			"owner": "Propiretà",
			"due": "",
			"status": "Da avviare"
		},
		"erp:19": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Configurazione sicura degli asset e del software aziendale",
			"controlMeasure": "Definire e mantenere un processo di configurazione sicura",
			"controlIds": ["4.2"],
			"controlNotes": "invia di definizion per creare uno standard aziendale",
			"effectiveness": "prev-non",
			"action": "Valutare passaggio a Windows Server e client aggiornati (rischio RDS)",
			"actionDetail": "",
			"priority": "Media",
			"owner": "Propiretà",
			"due": "",
			"status": "Da avviare"
		},
		"erp:20": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": false,
			"impact": 1,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Documentare i flussi di dati",
			"controlIds": ["3.8"],
			"controlNotes": "in carico a gestionale e sua manutenzione",
			"effectiveness": "prev-adeguato",
			"action": "verificare con fornitore esistenza ed adeguatezza documentazione flusso dati",
			"actionDetail": "",
			"priority": "Bassa",
			"owner": "MSP",
			"due": "",
			"status": "Da avviare"
		},
		"erp:21": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:22": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": true,
			"availability": false,
			"impact": 2,
			"controlFamily": "Sicurezza del software applicativo",
			"controlMeasure": "Separare gli ambienti di produzione e non produzione",
			"controlIds": ["16.8"],
			"controlNotes": "verificare segregazione tra MES e ERP",
			"effectiveness": "parziale",
			"action": "Verifica della segregazione effettiva in allineamento e aggiornamento dei dati del sistema MES con ERP",
			"actionDetail": "",
			"priority": "Media",
			"owner": "MSP\nSoftwarehouse",
			"due": "",
			"status": "In corso"
		},
		"erp:23": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"erp:24": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione della risposta agli incidenti",
			"controlMeasure": "Definire e mantenere i contatti per la segnalazione degli incidenti",
			"controlIds": [
				"17.2",
				"17.3",
				"17.4",
				"17.5",
				"17.6"
			],
			"controlNotes": "Dipendenza da società di erogazione energia elettrica e connettività",
			"effectiveness": "parziale",
			"action": "manca ridondanza connettività. Ridondanza elettrica ritenuta non necessaria salvo UPS ICT",
			"actionDetail": "MSP propone nuovi fornitori connettività",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": "In corso"
		},
		"erp:25": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 1,
			"controlFamily": "Gestione della risposta agli incidenti",
			"controlMeasure": "Definire e mantenere un processo di risposta agli incidenti",
			"controlIds": [
				"17.2",
				"17.3",
				"17.4",
				"17.5",
				"17.6"
			],
			"controlNotes": "Il contratto di assistenza prevedere diritto di aprire ticket e chiamare il centralino. Prevedere regolamentazione di accesso VPN e server per sviluppatore software, attualmente always on",
			"effectiveness": "prev-non",
			"action": "il fornitore software ERP deve essere trasferito a sistema differente da VPN per accedere in remoto al server relativo a SW",
			"actionDetail": "Il sistema VPN è legato al Firewall, che non permette MFA. Il sistema alternativo lo gestice e mantiene garanzia di protezione e monitoraggio attività",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": "Da avviare"
		},
		"erp:26": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:1": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Monitoraggio e difesa della rete",
			"controlMeasure": "Centralizzare gli avvisi sugli eventi di sicurezza",
			"controlIds": ["13.1", "12.2"],
			"controlNotes": "vengono monitorati risorse macchina per mantenimento prestazioni rete.",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:2": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Assicurarsi che l'infrastruttura di rete sia aggiornata",
			"controlIds": ["12.1"],
			"controlNotes": "Rischi legati all'obsolescenza hw",
			"effectiveness": "parziale",
			"action": "Valutare l'aggiornamento dell'hardware",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": "In corso"
		},
		"network:3": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 2,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Assicurarsi che l'infrastruttura di rete sia aggiornata",
			"controlIds": ["12.1"],
			"controlNotes": "DNS server unico, no ridondanza",
			"effectiveness": "parziale",
			"action": "valutare ridondanza dns interno",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": "In corso"
		},
		"network:4": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Definire e mantenere un'architettura di rete sicura",
			"controlIds": ["12.2"],
			"controlNotes": "In caso di DR dei server manca HW o politica di ripristino su infrastruttura temporanea",
			"effectiveness": "prev-non",
			"action": "Proposto sistema BKP+DR e soluzione Business Continuity (BCDR)",
			"actionDetail": "proposto sistema che virtualizza in cloud l'HW in caso di failure fino a 30gg da Diszastro",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": "In corso"
		},
		"network:5": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:6": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Gestire in modo sicuro l'infrastruttura di rete",
			"controlIds": ["12.3"],
			"controlNotes": "",
			"effectiveness": "parziale",
			"action": "",
			"actionDetail": "monitoraggio contnuo",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:7": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:8": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:9": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Configurazione sicura degli asset e del software aziendale",
			"controlMeasure": "Gestire in modo sicuro gli asset e il software aziendale",
			"controlIds": ["12.3"],
			"controlNotes": "disabilitazione protocolli non sicuri",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:10": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Crittografare i dati sensibili in transito",
			"controlIds": ["3.1"],
			"controlNotes": "macchine produzione e OT (legacy e non) sono segregate tranne una",
			"effectiveness": "parziale",
			"action": "segregare rete taglio laser",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": "In corso"
		},
		"network:11": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione degli account",
			"controlMeasure": "Creare e mantenere un inventario degli account",
			"controlIds": [
				"5.1",
				"5.2",
				"5.3",
				"5.4"
			],
			"controlNotes": "Configurzione Zero Trust.\nSegregazione e mantenimento di supporto alle macchine segregate",
			"effectiveness": "parziale",
			"action": "scviluppare politica di accesso estorno a fini supporto e manutenzione SW",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP/Proprietà",
			"due": "",
			"status": "In corso"
		},
		"network:12": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione del controllo accessi",
			"controlMeasure": "Creare e mantenere un inventario dei sistemi di autenticazione e autorizzazione",
			"controlIds": [
				"5.5",
				"5.6",
				"6.5"
			],
			"controlNotes": "Rischio su utenza operativa.\nAmministratori di sistema MSP con credenziali forti e MFA",
			"effectiveness": "parziale",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP/Proprietà",
			"due": "",
			"status": ""
		},
		"network:13": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione del controllo accessi",
			"controlMeasure": "Definire e mantenere controlli di accesso basati sui ruoli (RBAC)",
			"controlIds": [],
			"controlNotes": "rischio di esfiltrazione credenziali e errate configurazioni da parte MSP",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:14": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Formazione sulla sicurezza e sulle competenze",
			"controlMeasure": "Definire e mantenere un programma di sensibilizzazione alla sicurezza",
			"controlIds": ["14.1"],
			"controlNotes": "Sala server, con chiusura a chiave",
			"effectiveness": "prev-adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:15": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Mantenere un'istanza isolata dei dati di recupero",
			"controlIds": ["12.7"],
			"controlNotes": "MSP forma e protegge i sistemi di accesso che permettono amministrazione della rete",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:16": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Proteggere i dati di recupero",
			"controlIds": ["11.4"],
			"controlNotes": "BKP il loco e Cloud+ monitoraggio+ BKP configurazioni nodi rete da parte MSP",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:17": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Gestire in modo sicuro l'infrastruttura di rete",
			"controlIds": ["12.3"],
			"controlNotes": "MSP si cura di verificare in sandbox evenutali modifiche prima della messa in servizio",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:18": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Gestire in modo sicuro l'infrastruttura di rete",
			"controlIds": ["12.3"],
			"controlNotes": "MSP si cura di verificare in sandbox evenutali modifiche prima della messa in servizio",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:19": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Assicurarsi che l'infrastruttura di rete sia aggiornata",
			"controlIds": ["12.1"],
			"controlNotes": "inventari HW e nodi manutenuto in modo ibrido tra sistemi di monitoraggio automatico e inventario specifico di risorse escluse dal monitoraggio automatioc",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:20": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": false,
			"impact": 1,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Documentare i flussi di dati",
			"controlIds": ["3.8"],
			"controlNotes": "in carico a gestionale e sua manutenzione",
			"effectiveness": "prev-adeguato",
			"action": "verificare con fornitore esistenza ed adeguatezza documentazione flusso dati",
			"actionDetail": "",
			"priority": "Bassa",
			"owner": "MSP",
			"due": "",
			"status": "Da avviare"
		},
		"network:21": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:22": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:23": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"network:24": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione della risposta agli incidenti",
			"controlMeasure": "Definire e mantenere i contatti per la segnalazione degli incidenti",
			"controlIds": [
				"17.2",
				"17.3",
				"17.4",
				"17.5",
				"17.6"
			],
			"controlNotes": "Dipendenza da società di erogazione energia elettrica e connettività",
			"effectiveness": "parziale",
			"action": "manca ridondanza connettività. Ridondanza elettrica ritenuta non necessaria salvo UPS ICT",
			"actionDetail": "MSP propone nuovi fornitori connettività",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": "In corso"
		},
		"network:25": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 1,
			"controlFamily": "Gestione della risposta agli incidenti",
			"controlMeasure": "Definire e mantenere un processo di risposta agli incidenti",
			"controlIds": [
				"17.2",
				"17.3",
				"17.4",
				"17.5",
				"17.6"
			],
			"controlNotes": "Il contratto di assistenza prevedere diritto di aprire ticket e chiamare il centralino. Prevedere regolamentazione di accesso VPN e server per sviluppatore software, attualmente always on",
			"effectiveness": "prev-non",
			"action": "il fornitore software ERP deve essere trasferito a sistema differente da VPN per accedere in remoto al server relativo a SW",
			"actionDetail": "Il sistema VPN è legato al Firewall, che non permette MFA. Il sistema alternativo lo gestice e mantiene garanzia di protezione e monitoraggio attività",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": "Da avviare"
		},
		"network:26": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Formazione sulla sicurezza e sulle competenze",
			"controlMeasure": "Condurre formazione e sviluppo di competenze specifiche per ruolo",
			"controlIds": ["14.9"],
			"controlNotes": "valutare le clausole contrattuali con il fornitore, richiedere specifica formazione del personale del fornitore, richiedere al fornitori specifiche azioni per la riduzione di questo riscchio (Verifica in fase assunzione, Assicurazioni per copertura danni da azioni di questo tipo, compartimentare, controllare e monitorare accessi ai dati e loro eventuale download).",
			"effectiveness": "prev-non",
			"action": "valutare modifiche contrattuali con i fornitori esterni",
			"actionDetail": "",
			"priority": "Media",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:1": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:2": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:3": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Inventario e controllo del software",
			"controlMeasure": "Verificare che il software autorizzato sia supportato",
			"controlIds": ["2.1"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:4": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:5": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Utilizzare protocolli sicuri per la gestione e la comunicazione di rete",
			"controlIds": ["2.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:6": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Configurazione sicura degli asset e del software aziendale",
			"controlMeasure": "Definire e mantenere un processo di configurazione sicura",
			"controlIds": ["4.1", "4.2"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:7": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione della posta elettronica e del browser web",
			"controlMeasure": "Limitare estensioni non necessarie o non autorizzate su browser e client email",
			"controlIds": ["9.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:8": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:9": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Crittografare i dati sensibili in transito",
			"controlIds": ["3.1"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:10": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione del controllo accessi",
			"controlMeasure": "Centralizzare il controllo degli accessi",
			"controlIds": ["6.7"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:11": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione degli account",
			"controlMeasure": "Limitare i privilegi amministrativi ad account dedicati",
			"controlIds": ["5.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:12": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione degli account",
			"controlMeasure": "Utilizzare password univoche",
			"controlIds": ["5.2"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:13": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Configurare le liste di controllo degli accessi ai dati",
			"controlIds": ["3.3"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:14": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Crittografare i dati sui dispositivi degli utenti",
			"controlIds": ["3.6"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:15": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Applicare le politiche di conservazione dei dati",
			"controlIds": ["3.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:16": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Eseguire backup automatici",
			"controlIds": ["11.2"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:17": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Mantenere un'istanza isolata dei dati di recupero",
			"controlIds": ["11.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:18": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:19": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione continua delle vulnerabilità",
			"controlMeasure": "Definire e mantenere un processo di gestione delle vulnerabilità",
			"controlIds": ["7.1"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:20": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:21": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:22": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Definire e mantenere un processo di recupero dati",
			"controlIds": ["11.1"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:23": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:24": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:25": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"email-microsoft:26": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dei fornitori di servizi",
			"controlMeasure": "Assicurarsi che i contratti con i fornitori includano requisiti di sicurezza",
			"controlIds": ["15.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"backup:1": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Inventario e controllo degli asset aziendali",
			"controlMeasure": "Creare e mantenere un inventario dettagliato degli asset aziendali",
			"controlIds": ["2.1"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP,Proprietà",
			"due": "",
			"status": ""
		},
		"backup:2": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 2,
			"controlFamily": "Inventario e controllo degli asset aziendali",
			"controlMeasure": "Utilizzare uno strumento di rilevamento attivo",
			"controlIds": ["1.3"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:3": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 2,
			"controlFamily": "Inventario e controllo del software",
			"controlMeasure": "Usare strumenti automatizzati per l'inventario del software",
			"controlIds": ["2.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:4": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Definire e mantenere un processo di recupero dati",
			"controlIds": ["11.1"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:5": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 2,
			"controlFamily": "Monitoraggio e difesa della rete",
			"controlMeasure": "Distribuire una soluzione di prevenzione intrusioni basata su rete",
			"controlIds": ["13.8"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:6": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Difesa contro malware",
			"controlMeasure": "Gestire centralmente il software antimalware",
			"controlIds": ["10.6"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:7": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Formazione sulla sicurezza e sulle competenze",
			"controlMeasure": "Definire e mantenere un programma di sensibilizzazione alla sicurezza",
			"controlIds": ["14.1"],
			"controlNotes": "In via di definizione calendari e tipologia di formazione",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"backup:8": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Formazione sulla sicurezza e sulle competenze",
			"controlMeasure": "Formare il personale sulla gestione sicura dei dati",
			"controlIds": ["14.4"],
			"controlNotes": "In via di definizione calendari e tipologia di formazione",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"backup:9": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione dell'infrastruttura di rete",
			"controlMeasure": "Utilizzare protocolli sicuri per la gestione e la comunicazione di rete",
			"controlIds": ["12.6"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:10": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione del controllo accessi",
			"controlMeasure": "Centralizzare il controllo degli accessi",
			"controlIds": ["6.7"],
			"controlNotes": "Blocco USB",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:11": {
			"applicable": true,
			"probability": 3,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione del controllo accessi",
			"controlMeasure": "Centralizzare il controllo degli accessi",
			"controlIds": ["5.6", "6.7"],
			"controlNotes": "Disattivazione Tempestiva degli acessi esterni da parte degli utenti non più in forza",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"backup:12": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Formazione sulla sicurezza e sulle competenze",
			"controlMeasure": "Definire e mantenere un programma di sensibilizzazione alla sicurezza",
			"controlIds": ["14.1"],
			"controlNotes": "Formazione annuale",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"backup:13": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Configurare le liste di controllo degli accessi ai dati",
			"controlIds": ["3.3"],
			"controlNotes": "Revisione annuale liste utenti ed accessi",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP, Proprietà",
			"due": "",
			"status": ""
		},
		"backup:14": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Protezione dei dati",
			"controlMeasure": "Crittografare i dati sui dispositivi degli utenti",
			"controlIds": ["3.6"],
			"controlNotes": "Crittografia dispositivi mobili utilizzati da trasfertisti",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP,Proprietà",
			"due": "",
			"status": ""
		},
		"backup:15": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 5,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Mantenere un'istanza isolata dei dati di recupero",
			"controlIds": ["11.4"],
			"controlNotes": "Backup Cloud immutabile",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:16": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 5,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Eseguire backup automatici",
			"controlIds": ["11.2"],
			"controlNotes": "Come da procedura di Backup. Implementare ed aggiornare procedure in base a nuovi asset non previsti precedentemente (Software IDE per PLC ed automazione)",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP, Proprietà",
			"due": "",
			"status": ""
		},
		"backup:17": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione continua delle vulnerabilità",
			"controlMeasure": "Definire e mantenere un processo di remediation",
			"controlIds": ["7.2"],
			"controlNotes": "RMM su tutti I dispositivi PC e Server connessi su rete aziendale",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:18": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Inventario e controllo del software",
			"controlMeasure": "Usare strumenti automatizzati per l'inventario del software",
			"controlIds": ["2.4"],
			"controlNotes": "RMM su tutti I dispositivi PC e Server connessi su rete aziendale",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:19": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione continua delle vulnerabilità",
			"controlMeasure": "Correggere le vulnerabilità\xA0 rilevate",
			"controlIds": ["7.7"],
			"controlNotes": "RMM su tutti I dispositivi PC e Serveevcontinunessi su reon aziendale",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:20": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Testare il recupero dei dati",
			"controlIds": ["11.5"],
			"controlNotes": "Test annuale di DR",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:21": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Definire e mantenere un processo di recupero dati",
			"controlIds": ["11.1"],
			"controlNotes": "Procedura formalizzata e testata annualmente",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:22": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Recupero dei dati",
			"controlMeasure": "Eseguire backup automatici",
			"controlIds": ["11.2"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"backup:23": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"backup:24": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 2,
			"controlFamily": "Gestione dei fornitori di servizi",
			"controlMeasure": "Definire e mantenere una policy di gestione dei fornitori di servizi",
			"controlIds": ["15.2"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"backup:25": {
			"applicable": true,
			"probability": 2,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 4,
			"controlFamily": "Gestione dei fornitori di servizi",
			"controlMeasure": "Monitorare i fornitori di servizi",
			"controlIds": ["15.6"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"backup:26": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "Gestione dei fornitori di servizi",
			"controlMeasure": "Assicurarsi che i contratti con i fornitori includano requisiti di sicurezza",
			"controlIds": ["15.4"],
			"controlNotes": "",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "Proprietà",
			"due": "",
			"status": ""
		},
		"mobile:1": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 1,
			"controlFamily": "Inventario e controllo degli asset aziendali",
			"controlMeasure": "Creare e mantenere un inventario dettagliato degli asset aziendali",
			"controlIds": ["1.1"],
			"controlNotes": "",
			"effectiveness": "parziale",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:2": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 2,
			"controlFamily": "Inventario e controllo degli asset aziendali",
			"controlMeasure": "Creare e mantenere un inventario dettagliato degli asset aziendali",
			"controlIds": ["1.1"],
			"controlNotes": "",
			"effectiveness": "parziale",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:3": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:4": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:5": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:6": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": true,
			"impact": 3,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Non esistono presidi di sicurezza centralizzati",
			"effectiveness": "prev-non",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:7": {
			"applicable": true,
			"probability": 3,
			"confidentiality": true,
			"integrity": true,
			"availability": false,
			"impact": 4,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Non esistono presidi di sicurezza centralizzati",
			"effectiveness": "non",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:8": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:9": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": false,
			"impact": 4,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Non esistono presidi di sicurezza centralizzati",
			"effectiveness": "non",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:10": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:11": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": false,
			"availability": false,
			"impact": 2,
			"controlFamily": "Protezione della posta elettronica e del browser web",
			"controlMeasure": "Implementare DMARC",
			"controlIds": ["9.5"],
			"controlNotes": "La mail aziendale è protetta secondo configurazioni in standard per Microsoft. Se usati altri account personali non c'è controllo.",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:12": {
			"applicable": true,
			"probability": 2,
			"confidentiality": true,
			"integrity": true,
			"availability": false,
			"impact": 3,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Dovrà essere implementata nel piano di formazione",
			"effectiveness": "prev-non",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:13": {
			"applicable": true,
			"probability": 3,
			"confidentiality": true,
			"integrity": false,
			"availability": false,
			"impact": 4,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Non esistono presidi di sicurezza centralizzati",
			"effectiveness": "non",
			"action": "verificare opportunità di controllo centralizzato patch e antivirus tramite MDM per dispositivi critici, integnrati office",
			"actionDetail": "",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"mobile:14": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:15": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:16": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:17": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:18": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:19": {
			"applicable": true,
			"probability": 3,
			"confidentiality": false,
			"integrity": false,
			"availability": false,
			"impact": 4,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Non esistono presidi di sicurezza centralizzati, anche se c'è una policy e procedura di dismissione degli asset",
			"effectiveness": "parziale",
			"action": "verificare opportunità di controllo centralizzato patch e antivirus tramite MDM per dispositivi critici",
			"actionDetail": "",
			"priority": "Media",
			"owner": "MSP",
			"due": "",
			"status": ""
		},
		"mobile:20": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:21": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:22": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:23": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:24": {
			"applicable": true,
			"probability": 1,
			"confidentiality": false,
			"integrity": false,
			"availability": true,
			"impact": 1,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Fornitori di telefonia mobile aziendale, non contratto con un unico fornitore (1 principale e 2 con numero di SIM limitato).",
			"effectiveness": "prev-non",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:25": {
			"applicable": false,
			"probability": null,
			"confidentiality": null,
			"integrity": null,
			"availability": null,
			"impact": null,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "",
			"effectiveness": null,
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		},
		"mobile:26": {
			"applicable": true,
			"probability": 1,
			"confidentiality": true,
			"integrity": false,
			"availability": true,
			"impact": 1,
			"controlFamily": "",
			"controlMeasure": "",
			"controlIds": [],
			"controlNotes": "Fornitori sono tutti operatori primari.",
			"effectiveness": "adeguato",
			"action": "",
			"actionDetail": "",
			"priority": "",
			"owner": "",
			"due": "",
			"status": ""
		}
	}
};
function blankAnswer() {
	return {
		applicable: null,
		probability: null,
		confidentiality: null,
		integrity: null,
		availability: null,
		impact: null,
		controlFamily: "",
		controlMeasure: "",
		controlIds: [],
		controlNotes: "",
		effectiveness: null,
		action: "",
		actionDetail: "",
		priority: "",
		owner: "",
		due: "",
		status: ""
	};
}
function answerKey(perimeterId, riskId) {
	return `${perimeterId}:${riskId}`;
}
function getAnswer(answers, perimeterId, riskId) {
	const raw = answers[answerKey(perimeterId, riskId)];
	if (!raw) return blankAnswer();
	return {
		...blankAnswer(),
		...raw,
		controlIds: Array.isArray(raw.controlIds) ? raw.controlIds : []
	};
}
var JUDGMENTS = [
	"Basso",
	"Medio Basso",
	"Medio Alto",
	"Alto"
];
var PROBABILITY = [
	{
		v: 1,
		label: "Assente",
		hint: "0–5% · meno di 1 volta / 5 anni"
	},
	{
		v: 2,
		label: "Raro",
		hint: "6–20% · meno di 1 volta / 2–3 anni"
	},
	{
		v: 3,
		label: "Possibile",
		hint: "21–35% · una o due volte l'anno"
	},
	{
		v: 4,
		label: "Probabile",
		hint: "36–55% · una o due volte al mese"
	},
	{
		v: 5,
		label: "Molto probabile",
		hint: "56–100% · più volte al mese"
	}
];
var IMPACT = [
	{
		v: 1,
		label: "Trascurabile",
		hint: "Sotto 50.000 €"
	},
	{
		v: 2,
		label: "Contenuto",
		hint: "50.000 – 150.000 €"
	},
	{
		v: 3,
		label: "Significativo",
		hint: "150.000 – 700.000 €"
	},
	{
		v: 4,
		label: "Rilevante",
		hint: "700.000 – 2 mln €"
	},
	{
		v: 5,
		label: "Catastrofico",
		hint: "Oltre 2 mln €"
	}
];
var EFFECTIVENESS = [
	{
		id: "adeguato",
		label: "Adeguato",
		delta: -1,
		hint: "Il presidio copre il rischio"
	},
	{
		id: "prev-adeguato",
		label: "Prevalentemente Adeguato",
		delta: -.75,
		hint: "Lacune minori"
	},
	{
		id: "parziale",
		label: "Parzialmente Adeguato",
		delta: -.5,
		hint: "Copertura solo parziale"
	},
	{
		id: "prev-non",
		label: "Prevalentemente Non Adeguato",
		delta: -.25,
		hint: "Lacune rilevanti"
	},
	{
		id: "non",
		label: "Non Adeguato",
		delta: 0,
		hint: "Non riduce il rischio"
	}
];
var MATRIX = [
	[
		"Basso",
		"Basso",
		"Basso",
		"Basso",
		"Medio Basso"
	],
	[
		"Basso",
		"Basso",
		"Medio Basso",
		"Medio Basso",
		"Medio Alto"
	],
	[
		"Basso",
		"Medio Basso",
		"Medio Basso",
		"Medio Alto",
		"Medio Alto"
	],
	[
		"Basso",
		"Medio Basso",
		"Medio Alto",
		"Medio Alto",
		"Alto"
	],
	[
		"Medio Basso",
		"Medio Alto",
		"Medio Alto",
		"Alto",
		"Alto"
	]
];
function round2(n) {
	return Math.round((n + Number.EPSILON) * 100) / 100;
}
function fmt(n) {
	if (n == null || Number.isNaN(n)) return "—";
	return n.toLocaleString("it-IT", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});
}
function potentialScore(p, i) {
	return 1 + (Math.sqrt(p * i) - 1) * .75;
}
function matrixJudgment(p, i) {
	return MATRIX[p - 1]?.[i - 1] ?? "Basso";
}
function band(score) {
	if (score <= 1.9) return "Basso";
	if (score <= 2.4) return "Medio Basso";
	if (score <= 2.9) return "Medio Alto";
	return "Alto";
}
function rank(j) {
	return JUDGMENTS.indexOf(j);
}
function effectivenessOf(id) {
	return EFFECTIVENESS.find((item) => item.id === id) ?? null;
}
function evaluate(input, threshold) {
	const base = {
		status: "incomplete",
		potential: null,
		potentialJudgment: null,
		residual: null,
		residualJudgment: null,
		needsAction: false,
		delta: null
	};
	if (input.applicable === false) return {
		...base,
		status: "na"
	};
	if (input.applicable !== true || !input.probability || !input.impact) return base;
	const potential = round2(potentialScore(input.probability, input.impact));
	const potentialJudgment = matrixJudgment(input.probability, input.impact);
	const eff = effectivenessOf(input.effectiveness);
	if (!eff) return {
		...base,
		potential,
		potentialJudgment
	};
	const residual = round2(Math.max(1, potential + eff.delta));
	const residualJudgment = band(residual);
	return {
		status: "ok",
		potential,
		potentialJudgment,
		residual,
		residualJudgment,
		needsAction: rank(residualJudgment) > rank(threshold),
		delta: eff.delta
	};
}
function buildRows(args) {
	const rows = [];
	for (const perimeter of args.perimeters) for (const risk of seed.risks) {
		const input = getAnswer(args.answers, perimeter.id, risk.id);
		rows.push({
			perimeter,
			risk,
			input,
			evaluation: evaluate(input, args.threshold)
		});
	}
	return rows;
}
function categoryShort(category) {
	const c = category.toLowerCase();
	if (c.includes("disponibil")) return "Disponibilità";
	if (c.includes("sicurezza")) return "Sicurezza";
	if (c.includes("cambiament")) return "Cambiamento";
	if (c.includes("integrit")) return "Integrità";
	if (c.includes("esternal")) return "Esternalizzazione";
	return category;
}
function groupByCategory(risks) {
	const groups = [];
	for (const risk of risks) {
		const last = groups[groups.length - 1];
		if (!last || last.category !== risk.category) groups.push({
			category: risk.category,
			items: [risk]
		});
		else last.items.push(risk);
	}
	return groups;
}
function isOpenAction(row) {
	const hasWork = row.evaluation.needsAction || row.input.action.trim().length > 0;
	const closed = row.input.status === "Completata" || row.input.status === "Accettato";
	return hasWork && !closed;
}
var controlById = new Map(seed.controls.map((control) => [control.id, control]));
function cell(value) {
	const text = value == null ? "" : String(value);
	if (/[;"\n\r]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
	return text;
}
function sheet(rows) {
	return `\uFEFF${rows.map((row) => row.map(cell).join(";")).join("\r\n")}`;
}
function yn(value) {
	if (value === true) return "Sì";
	if (value === false) return "No";
	return "";
}
function risksCsv(state) {
	return sheet([[
		"Scheda",
		"ID rischio",
		"Categoria",
		"Rischio",
		"Applicabile",
		"Probabilità",
		"Confidenzialità",
		"Integrità",
		"Disponibilità",
		"Impatto",
		"Score potenziale",
		"Giudizio potenziale",
		"Controlli CIS",
		"Presidio principale",
		"Misura di dettaglio",
		"Note presidi",
		"Efficacia",
		"Delta efficacia",
		"Score residuo",
		"Giudizio residuo",
		"Supera la soglia",
		"Azione",
		"Descrizione azione",
		"Priorità",
		"Responsabile",
		"Scadenza",
		"Stato"
	], ...buildRows(state).map((row) => line(row))]);
}
function line(row) {
	const { input, evaluation, risk, perimeter } = row;
	const applicable = input.applicable === true;
	return [
		perimeter.name,
		risk.id,
		risk.category,
		risk.name,
		input.applicable == null ? "" : input.applicable ? "Sì" : "No",
		applicable ? input.probability ?? "" : "",
		applicable ? yn(input.confidentiality) : "",
		applicable ? yn(input.integrity) : "",
		applicable ? yn(input.availability) : "",
		applicable ? input.impact ?? "" : "",
		applicable ? fmt(evaluation.potential) : "",
		applicable ? evaluation.potentialJudgment ?? "" : "",
		applicable ? input.controlIds.join(", ") : "",
		applicable ? input.controlFamily : "",
		applicable ? input.controlMeasure : "",
		applicable ? input.controlNotes : "",
		applicable ? input.effectiveness ?? "" : "",
		applicable && evaluation.delta != null ? String(evaluation.delta).replace(".", ",") : "",
		applicable ? fmt(evaluation.residual) : "",
		applicable ? evaluation.residualJudgment ?? "" : "",
		evaluation.needsAction ? "Sì" : "No",
		input.action,
		input.actionDetail,
		input.priority,
		input.owner,
		input.due,
		input.status
	];
}
function assetsCsv(state) {
	const names = new Map(state.perimeters.map((item) => [item.id, item.name]));
	return sheet([[
		"ID",
		"Asset ICT",
		"In perimetro",
		"Scheda",
		"Area",
		"Owner",
		"RTO (ore)",
		"RPO (ore)",
		"Note"
	], ...state.assets.map((asset) => [
		asset.id,
		asset.name,
		asset.inScope ? "Sì" : "No",
		names.get(asset.perimeterId) ?? "",
		asset.area,
		asset.owner,
		asset.rto,
		asset.rpo ?? "",
		asset.notes
	])]);
}
function registerJson(state) {
	return JSON.stringify({
		schema: 2,
		document: seed.document,
		company: state.company,
		profile: state.profile,
		threshold: state.threshold,
		perimeters: state.perimeters,
		assets: state.assets,
		systems: state.systems,
		processes: state.processes,
		answers: state.answers,
		introDismissed: state.introDismissed,
		updatedAt: state.updatedAt,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString()
	}, null, 2);
}
function downloadBlob(filename, blob) {
	triggerDownload(filename, blob);
}
function downloadText(filename, content, mime) {
	triggerDownload(filename, new Blob([content], { type: mime }));
}
function triggerDownload(filename, blob) {
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(url);
}
var DB_NAME = "cogeim-aziende";
var STORE = "kv";
var HANDLE_KEY = "dir";
function supportsFolder() {
	return typeof window !== "undefined" && "showDirectoryPicker" in window;
}
function openDb() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, 1);
		request.onupgradeneeded = () => request.result.createObjectStore(STORE);
		request.onsuccess = () => resolve(request.result);
		request.onerror = () => reject(request.error);
	});
}
async function idbGet(key) {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const request = db.transaction(STORE).objectStore(STORE).get(key);
		request.onsuccess = () => resolve(request.result ?? null);
		request.onerror = () => reject(request.error);
	});
}
async function idbSet(key, value) {
	const db = await openDb();
	return new Promise((resolve, reject) => {
		const request = db.transaction(STORE, "readwrite").objectStore(STORE).put(value, key);
		request.onsuccess = () => resolve();
		request.onerror = () => reject(request.error);
	});
}
function companyFileName(name) {
	return `${name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "azienda"}.json`;
}
async function rememberFolder() {
	if (!supportsFolder()) return null;
	try {
		return await idbGet(HANDLE_KEY);
	} catch {
		return null;
	}
}
async function chooseFolder() {
	if (!supportsFolder()) return null;
	const picker = window.showDirectoryPicker;
	if (!picker) return null;
	const dir = await picker();
	const permission = await dir.requestPermission?.({ mode: "readwrite" });
	if (permission && permission !== "granted") return null;
	await idbSet(HANDLE_KEY, dir);
	return dir;
}
async function writableFolder() {
	const dir = await rememberFolder();
	if (!dir) return null;
	const current = await dir.queryPermission?.({ mode: "readwrite" });
	if (current === "granted") return dir;
	if (current === "prompt") return await dir.requestPermission?.({ mode: "readwrite" }) === "granted" ? dir : null;
	return null;
}
async function listCompanyFiles(dir) {
	const names = [];
	for await (const entry of dir.values()) if (entry.kind === "file" && entry.name.toLowerCase().endsWith(".json")) names.push(entry.name);
	return names.sort((a, b) => a.localeCompare(b, "it"));
}
async function readCompanyFile(dir, name) {
	return (await (await dir.getFileHandle(name)).getFile()).text();
}
async function writeCompanyFile(dir, name, json) {
	const writable = await (await dir.getFileHandle(name, { create: true })).createWritable();
	await writable.write(json);
	await writable.close();
}
async function uniqueFileName(dir, desired) {
	const existing = new Set((await listCompanyFiles(dir)).map((name) => name.toLowerCase()));
	if (!existing.has(desired.toLowerCase())) return desired;
	const stem = desired.replace(/\.json$/i, "");
	let n = 2;
	while (existing.has(`${stem}-${n}.json`.toLowerCase())) n += 1;
	return `${stem}-${n}.json`;
}
function defaultProfile(name = "Cogeim Europe S.r.l.", document = "Analisi dei rischi ICT · v1.0 R02") {
	return {
		name,
		vat: "",
		address: "",
		sector: "",
		document,
		notes: "",
		logoDataUrl: null
	};
}
function systemsFromCatalog(perimeters, assets) {
	return perimeters.map((perimeter, index) => {
		const owned = assets.filter((asset) => asset.perimeterId === perimeter.id);
		const owners = owned.map((asset) => asset.owner).filter(Boolean);
		const owner = owners.sort((a, b) => owners.filter((item) => item === b).length - owners.filter((item) => item === a).length)[0] ?? "";
		return {
			id: perimeter.id,
			code: `SIS-${String(index + 1).padStart(2, "0")}`,
			name: perimeter.name,
			owner,
			inAnalysis: true,
			subsystems: owned.map((asset, subIndex) => ({
				id: asset.id,
				code: `${String(index + 1).padStart(2, "0")}.${String(subIndex + 1).padStart(2, "0")}`,
				name: asset.name
			}))
		};
	});
}
function nextCode(codes, prefix) {
	const used = new Set(codes.map((code) => code.trim().toUpperCase()));
	let n = 1;
	while (used.has(`${prefix}-${String(n).padStart(2, "0")}`)) n += 1;
	return `${prefix}-${String(n).padStart(2, "0")}`;
}
var MAX_SNAPSHOTS = 12;
var MAX_COMPANIES = 30;
var memoryStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
function stamp(partial) {
	return {
		...partial,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function initialPersisted() {
	const perimeters = seed.perimeters.map((item) => ({ ...item }));
	const assets = seed.assets.map((item) => ({ ...item }));
	return {
		company: seed.company,
		profile: defaultProfile(seed.company, seed.document),
		threshold: "Basso",
		perimeters,
		assets,
		systems: systemsFromCatalog(perimeters, assets),
		processes: [],
		answers: structuredClone(seed.answers),
		updatedAt: null,
		introDismissed: false
	};
}
function slug(name) {
	return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 42) || "scheda";
}
function newId(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
function withAssessment(systems, answers) {
	const selected = systems.filter((system) => system.inAnalysis);
	if (selected.length === 0) return {
		error: "Tieni almeno un sistema in analisi.",
		perimeters: null,
		answers
	};
	const nextAnswers = { ...answers };
	for (const system of selected) for (const risk of seed.risks) {
		const key = answerKey(system.id, risk.id);
		if (!nextAnswers[key]) nextAnswers[key] = blankAnswer();
	}
	return {
		error: null,
		perimeters: selected.map((system) => ({
			id: system.id,
			name: system.name || system.code
		})),
		answers: nextAnswers
	};
}
function uniqueId(perimeters, base) {
	const taken = new Set(perimeters.map((item) => item.id));
	if (!taken.has(base)) return base;
	let n = 2;
	while (taken.has(`${base}-${n}`)) n += 1;
	return `${base}-${n}`;
}
function freshId(taken, base) {
	const root = base || "sistema";
	if (!taken.has(root)) return root;
	let n = 2;
	while (taken.has(`${root}-${n}`)) n += 1;
	return `${root}-${n}`;
}
function materializeSubsystems(systemCode, existing, incoming) {
	const result = [];
	const used = /* @__PURE__ */ new Set();
	for (const item of incoming) {
		const name = item.name.trim();
		let code = item.code.trim().toUpperCase();
		if (!code && !name) continue;
		if (!code) code = nextCode([...existing.map((subsystem) => subsystem.code), ...result.map((subsystem) => subsystem.code)], systemCode);
		if (used.has(code)) continue;
		used.add(code);
		const prev = existing.find((subsystem) => subsystem.code.trim().toUpperCase() === code);
		result.push({
			id: prev?.id ?? newId("sub"),
			code,
			name: name || prev?.name || code
		});
	}
	return result;
}
function freshCompanyId() {
	return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `c-${Date.now()}`;
}
function blankCompany(name) {
	return {
		company: name,
		profile: defaultProfile(name, seed.document),
		threshold: "Basso",
		perimeters: [],
		assets: [],
		systems: [],
		processes: [],
		answers: {},
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		introDismissed: true
	};
}
function applyRegister(set, data) {
	if (!Array.isArray(data.perimeters) || !data.answers || typeof data.answers !== "object") return false;
	const base = initialPersisted();
	set(stamp({
		company: typeof data.company === "string" ? data.company : base.company,
		profile: data.profile ?? {
			...base.profile,
			name: typeof data.company === "string" ? data.company : base.company
		},
		threshold: isThreshold(data.threshold) ? data.threshold : base.threshold,
		perimeters: data.perimeters,
		assets: Array.isArray(data.assets) ? data.assets : base.assets,
		systems: Array.isArray(data.systems) ? data.systems : systemsFromCatalog(data.perimeters, Array.isArray(data.assets) ? data.assets : base.assets),
		processes: Array.isArray(data.processes) ? data.processes : [],
		answers: {
			...base.answers,
			...data.answers
		},
		introDismissed: Boolean(data.introDismissed)
	}));
	return true;
}
function isThreshold(value) {
	return value === "Basso" || value === "Medio Basso" || value === "Medio Alto" || value === "Alto";
}
function blankFor(perimeterId) {
	const answers = {};
	for (const risk of seed.risks) answers[answerKey(perimeterId, risk.id)] = blankAnswer();
	return answers;
}
function capture(state) {
	return {
		company: state.company,
		profile: structuredClone(state.profile),
		threshold: state.threshold,
		perimeters: structuredClone(state.perimeters),
		assets: structuredClone(state.assets),
		systems: structuredClone(state.systems),
		processes: structuredClone(state.processes),
		answers: structuredClone(state.answers),
		updatedAt: state.updatedAt,
		introDismissed: state.introDismissed
	};
}
var useRiskStore = create()(persist((set, get) => ({
	...initialPersisted(),
	snapshots: [],
	companies: [],
	openCompanyId: null,
	openFileName: null,
	lastSavedAt: null,
	setCompany: (company) => set(stamp({
		company,
		profile: {
			...get().profile,
			name: company
		}
	})),
	setProfile: (patch) => {
		const profile = {
			...get().profile,
			...patch
		};
		set(stamp({
			profile,
			company: profile.name.trim() || get().company
		}));
	},
	setThreshold: (threshold) => set(stamp({ threshold })),
	dismissIntro: () => set({ introDismissed: true }),
	patchAnswer: (perimeterId, riskId, patch) => {
		const prev = getAnswer(get().answers, perimeterId, riskId);
		set(stamp({ answers: {
			...get().answers,
			[answerKey(perimeterId, riskId)]: {
				...prev,
				...patch
			}
		} }));
	},
	patchAsset: (id, patch) => set(stamp({ assets: get().assets.map((asset) => asset.id === id ? {
		...asset,
		...patch
	} : asset) })),
	addAsset: () => {
		const next = get().assets.reduce((max, asset) => Math.max(max, Number(asset.id) || 0), 0) + 1;
		set(stamp({ assets: [...get().assets, {
			id: String(next),
			name: "Nuovo asset",
			inScope: true,
			perimeterId: get().perimeters[0]?.id ?? "",
			area: "",
			owner: "",
			rto: "",
			rpo: "",
			notes: ""
		}] }));
	},
	addPerimeter: (name) => {
		const id = uniqueId(get().perimeters, slug(name));
		const label = name.trim() || "Nuova scheda";
		set(stamp({
			perimeters: [...get().perimeters, {
				id,
				name: label
			}],
			answers: {
				...get().answers,
				...blankFor(id)
			},
			systems: [...get().systems, {
				id,
				code: nextCode(get().systems.map((system) => system.code), "SIS"),
				name: label,
				owner: "",
				inAnalysis: true,
				subsystems: []
			}]
		}));
		return id;
	},
	renamePerimeter: (id, name) => set(stamp({
		perimeters: get().perimeters.map((item) => item.id === id ? {
			...item,
			name
		} : item),
		systems: get().systems.map((system) => system.id === id ? {
			...system,
			name
		} : system)
	})),
	removePerimeter: (id) => {
		const answers = { ...get().answers };
		for (const key of Object.keys(answers)) if (key.startsWith(`${id}:`)) delete answers[key];
		set(stamp({
			perimeters: get().perimeters.filter((item) => item.id !== id),
			systems: get().systems.filter((system) => system.id !== id),
			processes: get().processes.map((process) => ({
				...process,
				systemIds: process.systemIds.filter((systemId) => systemId !== id)
			})),
			assets: get().assets.map((asset) => asset.perimeterId === id ? {
				...asset,
				perimeterId: ""
			} : asset),
			answers
		}));
	},
	duplicatePerimeter: (fromId, name) => {
		if (!get().perimeters.some((item) => item.id === fromId)) return null;
		const id = uniqueId(get().perimeters, slug(name));
		const answers = { ...get().answers };
		for (const risk of seed.risks) answers[answerKey(id, risk.id)] = structuredClone(getAnswer(get().answers, fromId, risk.id));
		set(stamp({
			perimeters: [...get().perimeters, {
				id,
				name: name.trim() || "Copia scheda"
			}],
			answers
		}));
		return id;
	},
	addSystem: () => {
		const code = nextCode(get().systems.map((system) => system.code), "SIS");
		const id = uniqueId(get().perimeters, slug(code));
		const system = {
			id,
			code,
			name: "Nuovo sistema",
			owner: "",
			inAnalysis: false,
			subsystems: []
		};
		set(stamp({ systems: [...get().systems, system] }));
		return id;
	},
	patchSystem: (id, patch) => {
		const systems = get().systems.map((system) => system.id === id ? {
			...system,
			...patch
		} : system);
		const name = systems.find((system) => system.id === id)?.name ?? "";
		set(stamp({
			systems,
			perimeters: get().perimeters.map((item) => item.id === id ? {
				...item,
				name: name || item.name
			} : item)
		}));
	},
	removeSystem: (id) => {
		const target = get().systems.find((system) => system.id === id);
		const still = get().systems.some((system) => system.inAnalysis && system.id !== id);
		if (target?.inAnalysis && !still) return "È l'ultimo sistema in analisi. Toglilo dalla BIA solo dopo averne incluso un altro.";
		const systems = get().systems.filter((system) => system.id !== id);
		const synced = withAssessment(systems, get().answers);
		set(stamp({
			systems,
			processes: get().processes.map((process) => ({
				...process,
				systemIds: process.systemIds.filter((systemId) => systemId !== id)
			})),
			...synced.perimeters ? {
				perimeters: synced.perimeters,
				answers: synced.answers
			} : {}
		}));
		return null;
	},
	setSystemInAnalysis: (id, inAnalysis) => {
		const systems = get().systems.map((system) => system.id === id ? {
			...system,
			inAnalysis
		} : system);
		const synced = withAssessment(systems, get().answers);
		if (synced.error || !synced.perimeters) return synced.error;
		set(stamp({
			systems,
			perimeters: synced.perimeters,
			answers: synced.answers
		}));
		return null;
	},
	setAnalysisIds: (ids) => {
		const wanted = new Set(ids);
		const systems = get().systems.map((system) => ({
			...system,
			inAnalysis: wanted.has(system.id)
		}));
		const synced = withAssessment(systems, get().answers);
		if (synced.error || !synced.perimeters) return synced.error;
		set(stamp({
			systems,
			perimeters: synced.perimeters,
			answers: synced.answers
		}));
		return null;
	},
	addSubsystem: (systemId) => {
		set(stamp({ systems: get().systems.map((system) => {
			if (system.id !== systemId) return system;
			const code = nextCode(system.subsystems.map((item) => item.code), system.code || "SUB");
			return {
				...system,
				subsystems: [...system.subsystems, {
					id: newId("sub"),
					code,
					name: "Nuovo sottosistema"
				}]
			};
		}) }));
	},
	patchSubsystem: (systemId, subsystemId, patch) => {
		set(stamp({ systems: get().systems.map((system) => system.id === systemId ? {
			...system,
			subsystems: system.subsystems.map((item) => item.id === subsystemId ? {
				...item,
				...patch
			} : item)
		} : system) }));
	},
	removeSubsystem: (systemId, subsystemId) => {
		set(stamp({ systems: get().systems.map((system) => system.id === systemId ? {
			...system,
			subsystems: system.subsystems.filter((item) => item.id !== subsystemId)
		} : system) }));
	},
	addProcess: () => {
		const id = newId("prc");
		const process = {
			id,
			code: nextCode(get().processes.map((item) => item.code), "PRC"),
			description: "",
			owner: "",
			systemIds: [],
			rto: "",
			rpo: "",
			notes: "",
			probability: null,
			impact: null,
			euroPerDay: null
		};
		set(stamp({ processes: [...get().processes, process] }));
		return id;
	},
	patchProcess: (id, patch) => {
		set(stamp({ processes: get().processes.map((process) => process.id === id ? {
			...process,
			...patch
		} : process) }));
	},
	removeProcess: (id) => {
		set(stamp({ processes: get().processes.filter((process) => process.id !== id) }));
	},
	importProcesses: (rows) => {
		const systems = get().systems;
		const byCode = new Map(get().processes.map((process) => [process.code.trim().toUpperCase(), process]));
		const processes = [...get().processes];
		let added = 0;
		let updated = 0;
		const unknown = /* @__PURE__ */ new Set();
		for (const row of rows) {
			const code = row.code.trim().toUpperCase();
			if (!code) continue;
			const systemIds = (row.systemIds ?? []).map((token) => {
				const key = token.trim().toLowerCase();
				const match = systems.find((system) => system.code.toLowerCase() === key || system.name.toLowerCase() === key || system.id.toLowerCase() === key);
				if (!match && token.trim()) unknown.add(token.trim());
				return match?.id ?? "";
			}).filter(Boolean);
			const existing = byCode.get(code);
			if (existing) {
				const index = processes.findIndex((process) => process.id === existing.id);
				processes[index] = {
					...processes[index],
					...row,
					code,
					systemIds: row.systemIds ? systemIds : processes[index].systemIds,
					id: existing.id
				};
				updated += 1;
			} else {
				const created = {
					id: newId("prc"),
					code,
					description: row.description ?? "",
					owner: row.owner ?? "",
					systemIds,
					rto: row.rto ?? "",
					rpo: row.rpo ?? "",
					notes: row.notes ?? "",
					probability: row.probability ?? null,
					impact: row.impact ?? null,
					euroPerDay: row.euroPerDay ?? null
				};
				processes.push(created);
				byCode.set(code, created);
				added += 1;
			}
		}
		set(stamp({ processes }));
		return {
			added,
			updated,
			unknown: [...unknown]
		};
	},
	importSystems: (rows) => {
		const systems = [...get().systems];
		const byCode = new Map(systems.map((system) => [system.code.trim().toUpperCase(), system]));
		const taken = /* @__PURE__ */ new Set([...get().perimeters.map((item) => item.id), ...systems.map((system) => system.id)]);
		let added = 0;
		let updated = 0;
		for (const row of rows) {
			const code = row.code.trim().toUpperCase();
			if (!code) continue;
			const existing = byCode.get(code);
			const subsystems = row.subsystemsProvided ? materializeSubsystems(code, existing?.subsystems ?? [], row.subsystems) : existing?.subsystems ?? [];
			if (existing) {
				const index = systems.findIndex((system) => system.id === existing.id);
				systems[index] = {
					...systems[index],
					code,
					name: row.name.trim() || systems[index].name,
					owner: row.owner.trim() || systems[index].owner,
					subsystems
				};
				updated += 1;
			} else {
				const id = freshId(taken, slug(code));
				taken.add(id);
				const created = {
					id,
					code,
					name: row.name.trim() || code,
					owner: row.owner.trim(),
					inAnalysis: false,
					subsystems
				};
				systems.push(created);
				byCode.set(code, created);
				added += 1;
			}
		}
		set(stamp({
			systems,
			perimeters: get().perimeters.map((item) => {
				const system = systems.find((entry) => entry.id === item.id);
				return system ? {
					...item,
					name: system.name || item.name
				} : item;
			})
		}));
		return {
			added,
			updated
		};
	},
	resetSeed: () => {
		set({
			...initialPersisted(),
			snapshots: get().snapshots ?? [],
			companies: get().companies ?? [],
			openCompanyId: null,
			openFileName: null,
			lastSavedAt: get().lastSavedAt
		});
	},
	importPersisted: (data) => {
		if (!applyRegister(set, data)) return false;
		set({
			openCompanyId: null,
			openFileName: null
		});
		return true;
	},
	saveSnapshot: (name, note) => {
		const now = /* @__PURE__ */ new Date();
		const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `s-${now.getTime()}`;
		const snap = {
			id,
			name: name?.trim() || `Registro ${now.toLocaleString("it-IT", {
				dateStyle: "short",
				timeStyle: "short"
			})}`,
			note: note?.trim() ?? "",
			savedAt: now.toISOString(),
			data: capture(get())
		};
		set({
			snapshots: [snap, ...Array.isArray(get().snapshots) ? get().snapshots : []].slice(0, MAX_SNAPSHOTS),
			lastSavedAt: snap.savedAt
		});
		return id;
	},
	loadSnapshot: (id) => {
		const snap = (get().snapshots ?? []).find((item) => item.id === id);
		if (!snap?.data?.perimeters || !snap.data.answers) return false;
		set(stamp({
			company: snap.data.company,
			profile: snap.data.profile ?? defaultProfile(snap.data.company),
			threshold: isThreshold(snap.data.threshold) ? snap.data.threshold : "Basso",
			perimeters: snap.data.perimeters,
			assets: Array.isArray(snap.data.assets) ? snap.data.assets : [],
			systems: Array.isArray(snap.data.systems) ? snap.data.systems : systemsFromCatalog(snap.data.perimeters, Array.isArray(snap.data.assets) ? snap.data.assets : []),
			processes: Array.isArray(snap.data.processes) ? snap.data.processes : [],
			answers: snap.data.answers,
			introDismissed: Boolean(snap.data.introDismissed)
		}));
		return true;
	},
	deleteSnapshot: (id) => {
		set({ snapshots: (get().snapshots ?? []).filter((item) => item.id !== id) });
	},
	renameSnapshot: (id, name) => {
		set({ snapshots: (get().snapshots ?? []).map((item) => item.id === id ? {
			...item,
			name
		} : item) });
	},
	saveOpenCompany: () => {
		const data = capture(get());
		const name = (data.profile.name || data.company || "Azienda").trim() || "Azienda";
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const companies = [...get().companies ?? []];
		const currentId = get().openCompanyId;
		const index = currentId ? companies.findIndex((item) => item.id === currentId) : -1;
		if (index >= 0) {
			const id = companies[index].id;
			companies[index] = {
				...companies[index],
				name,
				savedAt: now,
				data: {
					...data,
					company: name,
					profile: {
						...data.profile,
						name
					}
				}
			};
			set({
				companies,
				lastSavedAt: now,
				openCompanyId: id
			});
			return {
				id,
				name,
				created: false
			};
		}
		const id = freshCompanyId();
		set({
			companies: [{
				id,
				name,
				savedAt: now,
				fileName: null,
				data: {
					...data,
					company: name,
					profile: {
						...data.profile,
						name
					}
				}
			}, ...companies].slice(0, MAX_COMPANIES),
			lastSavedAt: now,
			openCompanyId: id
		});
		return {
			id,
			name,
			created: true
		};
	},
	saveCompanyAs: (name) => {
		const trimmed = name.trim() || "Azienda";
		const data = capture(get());
		const profile = {
			...data.profile,
			name: trimmed
		};
		const stored = {
			...data,
			company: trimmed,
			profile
		};
		const id = freshCompanyId();
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const created = {
			id,
			name: trimmed,
			savedAt: now,
			fileName: null,
			data: stored
		};
		set({
			...stamp({
				company: trimmed,
				profile
			}),
			companies: [created, ...get().companies ?? []].slice(0, MAX_COMPANIES),
			lastSavedAt: now,
			openCompanyId: id,
			openFileName: null
		});
		return {
			id,
			name: trimmed
		};
	},
	openCompany: (id) => {
		const record = (get().companies ?? []).find((item) => item.id === id);
		if (!record || !applyRegister(set, record.data)) return false;
		set({
			openCompanyId: id,
			openFileName: record.fileName
		});
		return true;
	},
	deleteCompany: (id) => {
		set({
			companies: (get().companies ?? []).filter((item) => item.id !== id),
			openCompanyId: get().openCompanyId === id ? null : get().openCompanyId,
			openFileName: get().openCompanyId === id ? null : get().openFileName
		});
	},
	startCompany: (name) => {
		const trimmed = name.trim() || "Nuova azienda";
		const data = blankCompany(trimmed);
		const id = freshCompanyId();
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const created = {
			id,
			name: trimmed,
			savedAt: now,
			fileName: null,
			data
		};
		applyRegister(set, data);
		set({
			companies: [created, ...get().companies ?? []].slice(0, MAX_COMPANIES),
			lastSavedAt: now,
			openCompanyId: id,
			openFileName: null
		});
		return id;
	},
	setOpenFileName: (fileName) => {
		const id = get().openCompanyId;
		set({
			openFileName: fileName,
			companies: (get().companies ?? []).map((item) => item.id === id ? {
				...item,
				fileName
			} : item)
		});
	}
}), {
	name: "cogeim-ict-risk-v2",
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : localStorage),
	partialize: (state) => ({
		company: state.company,
		profile: state.profile,
		threshold: state.threshold,
		perimeters: state.perimeters,
		assets: state.assets,
		systems: state.systems,
		processes: state.processes,
		answers: state.answers,
		updatedAt: state.updatedAt,
		introDismissed: state.introDismissed,
		snapshots: state.snapshots ?? [],
		companies: state.companies ?? [],
		openCompanyId: state.openCompanyId ?? null,
		openFileName: state.openFileName ?? null,
		lastSavedAt: state.lastSavedAt
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Midpoint of the probability bands already used in the register. */
var PROBABILITY_WEIGHT = {
	1: .025,
	2: .13,
	3: .28,
	4: .455,
	5: .78
};
function parseEuro(raw) {
	let trimmed = raw.trim().replace(/€/g, "").replace(/\s/g, "");
	if (!trimmed) return null;
	if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(trimmed)) trimmed = trimmed.replace(/\./g, "").replace(",", ".");
	else if (/^\d{1,3}(\.\d{3})+$/.test(trimmed)) trimmed = trimmed.replace(/\./g, "");
	else if (trimmed.includes(",") && !trimmed.includes(".")) trimmed = trimmed.replace(",", ".");
	const value = Number(trimmed);
	return Number.isFinite(value) && value >= 0 ? value : null;
}
function formatEuro(value) {
	return value.toLocaleString("it-IT", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 0
	});
}
function weightedDailyCost(process) {
	if (process.euroPerDay == null || process.probability == null) return null;
	const weight = PROBABILITY_WEIGHT[process.probability];
	if (weight == null) return null;
	return Math.round(process.euroPerDay * weight);
}
function rankSystems(systems, processes) {
	const rows = systems.map((system) => {
		const linked = processes.filter((process) => process.systemIds.includes(system.id));
		return {
			system,
			exposure: linked.reduce((sum, process) => sum + (weightedDailyCost(process) ?? 0), 0),
			share: 0,
			processCount: linked.length
		};
	});
	const total = rows.reduce((sum, row) => sum + row.exposure, 0);
	for (const row of rows) row.share = total > 0 ? row.exposure / total : 0;
	return rows.sort((a, b) => b.exposure - a.exposure || a.system.code.localeCompare(b.system.code, "it"));
}
var INK = "1C2430";
var PAPER = "F3EFE6";
var COPPER = "C4622D";
var CARD = "FFFCF8";
var LINE = "E3D9CC";
var MUTED = "5E6872";
var JUDGMENT_COLOR = {
	Basso: "2F6B4F",
	"Medio Basso": "8A6424",
	"Medio Alto": "C4622D",
	Alto: "8C2F2F"
};
function clip(value, max = 140) {
	const text = value.replace(/\s+/g, " ").trim();
	if (text.length <= max) return text;
	return `${text.slice(0, max - 1)}…`;
}
function footer(slide, company, page, total) {
	slide.addText(`${company}   ·   Sintesi rischi ICT   ·   ${seed.document}`, {
		x: .48,
		y: 7.08,
		w: 10,
		h: .26,
		fontFace: "Calibri",
		fontSize: 11,
		color: MUTED
	});
	slide.addText(`${page}  /  ${total}`, {
		x: 10.6,
		y: 7.08,
		w: 2.2,
		h: .26,
		align: "right",
		fontFace: "Calibri",
		fontSize: 11,
		color: MUTED
	});
}
function heading(slide, kicker, title) {
	slide.background = { color: PAPER };
	slide.addText(kicker, {
		x: .48,
		y: .28,
		w: 12.3,
		h: .26,
		fontFace: "Calibri",
		fontSize: 12,
		bold: true,
		color: COPPER,
		charSpacing: 1.2
	});
	slide.addText(title, {
		x: .48,
		y: .54,
		w: 12.3,
		h: .48,
		fontFace: "Calibri",
		fontSize: 26,
		bold: true,
		color: INK
	});
}
function headCell(text) {
	return {
		text,
		options: {
			fill: { color: INK },
			color: PAPER,
			bold: true,
			align: "left",
			valign: "middle"
		}
	};
}
function bodyCell(text, color = INK, align = "left") {
	return {
		text,
		options: {
			fill: { color: CARD },
			color,
			align,
			valign: "middle"
		}
	};
}
function addTable(slide, rows, y, colW) {
	const w = colW.reduce((sum, value) => sum + value, 0);
	slide.addTable(rows, {
		x: .48,
		y,
		w,
		colW,
		fontFace: "Calibri",
		fontSize: 12,
		color: INK,
		border: [
			{
				pt: .4,
				color: LINE
			},
			{
				pt: .4,
				color: LINE
			},
			{
				pt: .4,
				color: LINE
			},
			{
				pt: .4,
				color: LINE
			}
		],
		valign: "middle",
		rowH: .36
	});
}
function listJoin(names) {
	if (names.length <= 1) return names[0] ?? "";
	return `${names.slice(0, -1).join(", ")} e ${names.at(-1)}`;
}
function chunks(items, size) {
	if (items.length === 0) return [[]];
	const pages = [];
	for (let index = 0; index < items.length; index += size) pages.push(items.slice(index, index + size));
	return pages;
}
function hottest(rows) {
	const map = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const current = map.get(row.perimeter.id) ?? {
			name: row.perimeter.name,
			over: 0,
			max: 0,
			judgment: ""
		};
		if (row.evaluation.needsAction) {
			current.over += 1;
			if ((row.evaluation.residual ?? 0) >= current.max) {
				current.max = row.evaluation.residual ?? 0;
				current.judgment = row.evaluation.residualJudgment ?? "";
			}
		}
		map.set(row.perimeter.id, current);
	}
	return [...map.values()].sort((a, b) => b.over - a.over || b.max - a.max)[0];
}
function openGaps(rows) {
	const map = /* @__PURE__ */ new Map();
	for (const row of rows) {
		if (row.input.applicable === false || row.evaluation.status === "ok") continue;
		const current = map.get(row.perimeter.id) ?? {
			name: row.perimeter.name,
			missing: 0
		};
		current.missing += 1;
		map.set(row.perimeter.id, current);
	}
	return [...map.values()].sort((a, b) => b.missing - a.missing);
}
async function buildSynthesis(state) {
	const pptx = new PptxGenJS();
	pptx.layout = "LAYOUT_WIDE";
	pptx.author = state.profile.name || state.company;
	pptx.title = `Sintesi rischi ICT · ${state.company}`;
	pptx.subject = seed.document;
	const rows = buildRows(state);
	const applicable = rows.filter((row) => row.input.applicable !== false);
	const complete = applicable.filter((row) => row.evaluation.status === "ok");
	const over = rows.filter((row) => row.evaluation.needsAction);
	const missing = applicable.filter((row) => row.evaluation.status !== "ok");
	const actions = rows.filter((row) => isOpenAction(row));
	const gaps = openGaps(rows);
	const hot = hottest(rows);
	const counts = Object.fromEntries(JUDGMENTS.map((judgment) => [judgment, complete.filter((row) => row.evaluation.residualJudgment === judgment).length]));
	const ranked = rankSystems(state.systems, state.processes).filter((item) => item.exposure > 0);
	const inAnalysis = state.systems.filter((system) => system.inAnalysis);
	const company = state.profile.name || state.company;
	const date = (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	const draws = [];
	const add = (draw) => {
		draws.push((page, total) => draw(pptx.addSlide(), page, total));
	};
	add((slide, page, total) => {
		slide.background = { color: INK };
		if (state.profile.logoDataUrl) slide.addImage({
			data: state.profile.logoDataUrl,
			x: 11.15,
			y: .38,
			w: 1.6,
			h: .85
		});
		slide.addText("DOCUMENTO DI SINTESI", {
			x: .55,
			y: 1.15,
			w: 10,
			h: .3,
			fontFace: "Calibri",
			fontSize: 13,
			bold: true,
			color: COPPER,
			charSpacing: 1.4
		});
		slide.addText("Analisi dei rischi ICT", {
			x: .55,
			y: 1.5,
			w: 11,
			h: .7,
			fontFace: "Calibri",
			fontSize: 36,
			bold: true,
			color: PAPER
		});
		slide.addText(company, {
			x: .55,
			y: 2.25,
			w: 11,
			h: .4,
			fontFace: "Calibri",
			fontSize: 20,
			color: PAPER
		});
		slide.addText(`Quadro aggiornato al momento del download, tratto dal registro in compilazione.\nTassonomia EBA, presidi CIS Controls v8.1, soglia di accettazione fino a ${state.threshold}.`, {
			x: .55,
			y: 2.8,
			w: 10.5,
			h: .7,
			fontFace: "Calibri",
			fontSize: 15,
			color: "D9D3C7"
		});
		[
			[String(complete.length), "valutazioni chiuse"],
			[String(over.length), "sopra la soglia"],
			[String(missing.length), "ancora da compilare"]
		].forEach(([value, label], index) => {
			const x = .55 + index * 3.5;
			slide.addText(value, {
				x,
				y: 4.15,
				w: 3.2,
				h: .7,
				fontFace: "Calibri",
				fontSize: 36,
				bold: true,
				color: PAPER
			});
			slide.addText(label, {
				x,
				y: 4.85,
				w: 3.2,
				h: .32,
				fontFace: "Calibri",
				fontSize: 14,
				color: "D9D3C7"
			});
		});
		slide.addText(date, {
			x: .55,
			y: 6.5,
			w: 6,
			h: .3,
			fontFace: "Calibri",
			fontSize: 14,
			color: "D9D3C7"
		});
		slide.addText(`${page}  /  ${total}`, {
			x: 10.6,
			y: 6.5,
			w: 2.2,
			h: .3,
			align: "right",
			fontFace: "Calibri",
			fontSize: 12,
			color: "D9D3C7"
		});
	});
	const lowLine = complete.length === 0 ? "Non c'è ancora una valutazione chiusa, quindi il residuo non si può leggere." : counts.Alto === 0 ? `Su ${complete.length} valutazioni complete, ${counts.Basso} sono Basse. Nessun rischio arriva ad Alto.` : `Su ${complete.length} valutazioni complete, ${counts.Basso} sono Basse e ${counts.Alto} ${counts.Alto === 1 ? "è Alto" : "sono Alti"}.`;
	const hotLine = !hot || hot.over === 0 ? `Nessun residuo chiuso supera la soglia «${state.threshold}».` : `Il punto caldo è ${hot.name}. ${hot.over} dei ${over.length} rischi sopra soglia sono lì. Il più alto vale ${fmt(hot.max)}, giudizio ${hot.judgment}.`;
	const namedGaps = listJoin(gaps.slice(0, 2).map((item) => item.name));
	const extraGaps = gaps.length - 2;
	const gapLine = gaps.length === 0 ? "Tutte le valutazioni applicabili hanno un residuo." : `${namedGaps}${extraGaps > 0 ? ` e ${extraGaps === 1 ? "un'altra scheda" : `altre ${extraGaps} schede`}` : ""} ${gaps.length === 1 ? "è ancora da chiudere" : "tengono ancora aperto il quadro"}. ${missing.length} valutazioni applicabili non hanno un residuo.`;
	const points = [
		[
			"01",
			"Il residuo chiuso",
			lowLine
		],
		[
			"02",
			hot && hot.over > 0 ? `Il punto caldo è ${hot.name}` : "Niente sopra soglia",
			hotLine
		],
		[
			"03",
			gaps.length ? "Il quadro non è ancora intero" : "Il quadro è chiuso",
			gapLine
		]
	];
	add((slide, page, total) => {
		heading(slide, "IN SINTESI", "Tre cose da portare in riunione");
		points.forEach(([num, title, body], index) => {
			const y = 1.35 + index * 1.75;
			slide.addText(num, {
				x: .48,
				y,
				w: .8,
				h: .4,
				fontFace: "Calibri",
				fontSize: 18,
				bold: true,
				color: COPPER
			});
			slide.addText(title, {
				x: 1.4,
				y,
				w: 11,
				h: .38,
				fontFace: "Calibri",
				fontSize: 18,
				bold: true,
				color: INK
			});
			slide.addText(body, {
				x: 1.4,
				y: y + .4,
				w: 11,
				h: 1.05,
				fontFace: "Calibri",
				fontSize: 15,
				color: INK
			});
		});
		footer(slide, company, page, total);
	});
	add((slide, page, total) => {
		heading(slide, "PERIMETRO", "Sistemi portati in valutazione");
		slide.addText("Si valuta il sistema, non il singolo sottosistema. L'elenco è quello in analisi al momento del download.", {
			x: .48,
			y: 1.15,
			w: 12,
			h: .35,
			fontFace: "Calibri",
			fontSize: 14,
			color: MUTED
		});
		const listed = inAnalysis.slice(0, 10);
		addTable(slide, [[
			headCell("Codice"),
			headCell("Sistema"),
			headCell("Owner"),
			headCell("Sottosistemi")
		], ...listed.length ? listed.map((system) => [
			bodyCell(system.code),
			bodyCell(system.name),
			bodyCell(system.owner || "—"),
			bodyCell(system.subsystems.map((item) => item.name).join(", ") || "—")
		]) : [[
			bodyCell("—"),
			bodyCell("Nessun sistema in analisi"),
			bodyCell("—"),
			bodyCell("—")
		]]], 1.6, [
			1.8,
			4.2,
			2.6,
			3.7
		]);
		if (inAnalysis.length > listed.length) slide.addText(`Altri ${inAnalysis.length - listed.length} sistemi sono in analisi e restano nel registro.`, {
			x: .48,
			y: 6.55,
			w: 12,
			h: .3,
			fontFace: "Calibri",
			fontSize: 12,
			color: MUTED
		});
		footer(slide, company, page, total);
	});
	add((slide, page, total) => {
		heading(slide, "BIA", "Sistemi per costo di disservizio ponderato");
		slide.addText("Il costo è l'euro al giorno del processo, moltiplicato per il peso della probabilità. Lo stesso importo è attribuito a ogni sistema collegato.", {
			x: .48,
			y: 1.15,
			w: 12,
			h: .4,
			fontFace: "Calibri",
			fontSize: 14,
			color: MUTED
		});
		const listed = ranked.slice(0, 8);
		addTable(slide, [[
			headCell("Sistema"),
			headCell("Processi"),
			headCell("€ / giorno ponderati"),
			headCell("Quota"),
			headCell("In analisi")
		], ...listed.length ? listed.map((item) => [
			bodyCell(`${item.system.code} · ${item.system.name}`),
			bodyCell(String(item.processCount), INK, "right"),
			bodyCell(formatEuro(item.exposure), INK, "right"),
			bodyCell(`${Math.round(item.share * 100)}%`, INK, "right"),
			bodyCell(item.system.inAnalysis ? "Sì" : "No")
		]) : [[
			bodyCell("—"),
			bodyCell("—"),
			bodyCell("Nessun costo in BIA"),
			bodyCell("—"),
			bodyCell("—")
		]]], 1.7, [
			4.6,
			1.6,
			2.8,
			1.4,
			1.9
		]);
		footer(slide, company, page, total);
	});
	add((slide, page, total) => {
		heading(slide, "RESIDUO", "Come si distribuisce il rischio chiuso");
		JUDGMENTS.forEach((judgment, index) => {
			const x = .48 + index * 3.2;
			slide.addText(String(counts[judgment]), {
				x,
				y: 1.25,
				w: 3,
				h: .55,
				fontFace: "Calibri",
				fontSize: 28,
				bold: true,
				color: JUDGMENT_COLOR[judgment]
			});
			slide.addText(judgment, {
				x,
				y: 1.8,
				w: 3,
				h: .3,
				fontFace: "Calibri",
				fontSize: 13,
				color: INK
			});
		});
		const bySystem = state.perimeters.map((perimeter) => {
			const own = rows.filter((row) => row.perimeter.id === perimeter.id && row.evaluation.status === "ok");
			const above = own.filter((row) => row.evaluation.needsAction);
			const max = own.reduce((best, row) => Math.max(best, row.evaluation.residual ?? 0), 0);
			return [
				perimeter.name,
				String(own.length),
				String(above.length),
				own.length ? fmt(max) : "—"
			];
		});
		addTable(slide, [[
			headCell("Sistema"),
			headCell("Chiuse"),
			headCell("Sopra soglia"),
			headCell("Residuo massimo")
		], ...bySystem.slice(0, 8).map((item) => item.map((value, index) => bodyCell(value, INK, index === 0 ? "left" : "right")))], 2.35, [
			5.2,
			2.2,
			2.6,
			2.3
		]);
		footer(slide, company, page, total);
	});
	chunks(over, 6).forEach((pageRows, index, pages) => {
		add((slide, page, total) => {
			heading(slide, "SOPRA SOGLIA", pages.length > 1 ? `Rischi da trattare (${index + 1}/${pages.length})` : "Rischi da trattare");
			slide.addText(`Soglia di accettazione: fino a ${state.threshold}.`, {
				x: .48,
				y: 1.15,
				w: 12,
				h: .3,
				fontFace: "Calibri",
				fontSize: 14,
				color: MUTED
			});
			addTable(slide, [[
				headCell("Sistema"),
				headCell("Rischio"),
				headCell("Residuo"),
				headCell("Giudizio"),
				headCell("Azione")
			], ...pageRows.length ? pageRows.map((row) => [
				bodyCell(row.perimeter.name),
				bodyCell(clip(`${categoryShort(row.risk.category)} · ${row.risk.name}`, 70)),
				bodyCell(fmt(row.evaluation.residual), INK, "right"),
				bodyCell(row.evaluation.residualJudgment ?? "—", JUDGMENT_COLOR[row.evaluation.residualJudgment ?? "Basso"]),
				bodyCell(clip(row.input.action || "Non indicata", 80))
			]) : [[
				bodyCell("—"),
				bodyCell("Nessun rischio sopra soglia"),
				bodyCell("—"),
				bodyCell("—"),
				bodyCell("—")
			]]], 1.55, [
				2.2,
				3.4,
				1.4,
				1.8,
				3.5
			]);
			footer(slide, company, page, total);
		});
	});
	const actionPages = chunks(actions, 7).slice(0, 2);
	const shownActions = actionPages.reduce((sum, pageRows) => sum + pageRows.length, 0);
	actionPages.forEach((pageRows, index) => {
		add((slide, page, total) => {
			heading(slide, "AZIONI", index === 0 ? "Interventi già scritti" : "Interventi già scritti, segue");
			const leftover = actions.length - shownActions;
			slide.addText(leftover > 0 && index === actionPages.length - 1 ? `${actions.length} azioni aperte. In questa sintesi ne entrano ${shownActions}: le altre ${leftover} restano nel registro.` : actions.length ? `${actions.length} azioni aperte, anche sotto soglia. Lo stato chiuso è solo «Completata» o «Accettato».` : "Nessuna azione aperta nel registro.", {
				x: .48,
				y: 1.15,
				w: 12,
				h: .4,
				fontFace: "Calibri",
				fontSize: 14,
				color: MUTED
			});
			addTable(slide, [[
				headCell("Sistema"),
				headCell("Rischio"),
				headCell("Azione"),
				headCell("Stato"),
				headCell("Owner")
			], ...pageRows.length ? pageRows.map((row) => [
				bodyCell(row.perimeter.name),
				bodyCell(clip(row.risk.name, 42)),
				bodyCell(clip(row.input.action || row.input.actionDetail || "Non indicata", 70)),
				bodyCell(row.input.status || "—"),
				bodyCell(row.input.owner || "—")
			]) : [[
				bodyCell("—"),
				bodyCell("—"),
				bodyCell("Nessuna azione"),
				bodyCell("—"),
				bodyCell("—")
			]]], 1.65, [
				2.2,
				2.6,
				4.2,
				1.8,
				1.5
			]);
			footer(slide, company, page, total);
		});
	});
	const next = JUDGMENTS[Math.min(JUDGMENTS.length - 1, JUDGMENTS.indexOf(state.threshold) + 1)];
	const overNext = complete.filter((row) => row.evaluation.residualJudgment && JUDGMENTS.indexOf(row.evaluation.residualJudgment) > JUDGMENTS.indexOf(next)).length;
	const nameless = over.filter((row) => !row.input.owner.trim() || !row.input.due.trim()).length;
	const decisions = [
		[
			"1",
			"Confermare la soglia",
			next === state.threshold ? `Si accetta fino a ${state.threshold}, il livello più alto della scala.` : `Si accetta fino a ${state.threshold}. Se la soglia salisse a ${next}, i casi da trattare passerebbero da ${over.length} a ${overNext}.`
		],
		[
			"2",
			hot && hot.over > 0 ? `Dare priorità a ${hot.name}` : "Nessuna priorità sopra soglia",
			hot && hot.over > 0 ? `${hot.over} rischi superano la soglia. Il più alto è ${fmt(hot.max)}, ${hot.judgment}.` : "Non c'è un residuo da trattare. La priorità, se resta del lavoro, è chiudere le schede aperte."
		],
		[
			"3",
			gaps.length ? "Chiudere le schede aperte" : "Il quadro valutativo è chiuso",
			gaps.length ? `${listJoin(gaps.slice(0, 3).map((item) => item.name))} ${gaps.length === 1 ? "non ha" : "non hanno"} ancora tutte le valutazioni.` : "Ogni rischio applicabile ha probabilità, impatto ed efficacia del presidio."
		],
		[
			"4",
			"Nominare i responsabili",
			over.length === 0 ? "Non ci sono rischi sopra soglia a cui assegnare un nome." : nameless === 0 ? "Ogni rischio sopra soglia ha un responsabile e una scadenza." : `${nameless} dei ${over.length} rischi sopra soglia non hanno responsabile o scadenza.`
		]
	];
	add((slide, page, total) => {
		heading(slide, "COSA SI CHIEDE", "Quattro decisioni, non un nuovo studio");
		decisions.forEach(([num, title, body], index) => {
			const y = 1.25 + index * 1.35;
			slide.addText(num, {
				x: .48,
				y,
				w: .55,
				h: .35,
				fontFace: "Calibri",
				fontSize: 18,
				bold: true,
				color: COPPER
			});
			slide.addText(title, {
				x: 1.15,
				y,
				w: 11.4,
				h: .32,
				fontFace: "Calibri",
				fontSize: 16,
				bold: true,
				color: INK
			});
			slide.addText(body, {
				x: 1.15,
				y: y + .34,
				w: 11.4,
				h: .7,
				fontFace: "Calibri",
				fontSize: 14,
				color: INK
			});
		});
		footer(slide, company, page, total);
	});
	const total = draws.length;
	draws.forEach((draw, index) => draw(index + 1, total));
	const output = await pptx.write({ outputType: "blob" });
	return output instanceof Blob ? output : new Blob([output], { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" });
}
async function downloadSynthesis(state) {
	const blob = await buildSynthesis(state);
	downloadBlob(`${(state.profile.name || state.company).replace(/[^\p{L}\p{N}]+/gu, "_").replace(/^_|_$/g, "").slice(0, 40) || "Sintesi"}_Sintesi_Rischi_ICT.pptx`, blob);
}
var FILE_URL = "/locale/azienda.json";
var started = false;
function whenHydrated() {
	if (useRiskStore.persist.hasHydrated()) return Promise.resolve();
	return new Promise((resolve) => {
		const stop = useRiskStore.persist.onFinishHydration(() => {
			stop();
			resolve();
		});
	});
}
async function loadLocalCompanyFile() {
	if (started || typeof window === "undefined") return false;
	started = true;
	await whenHydrated();
	try {
		const response = await fetch(FILE_URL, { cache: "no-store" });
		if (!response.ok) return false;
		const data = await response.json();
		if (!useRiskStore.getState().importPersisted(data)) return false;
		const encoded = response.headers.get("X-Company-File");
		if (encoded) useRiskStore.getState().setOpenFileName(decodeURIComponent(encoded));
		return true;
	} catch {
		return false;
	}
}
async function saveLocalCompanyFile(json, fileName) {
	try {
		const response = await fetch(FILE_URL, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				...fileName ? { "X-Company-File": encodeURIComponent(fileName) } : {}
			},
			body: json
		});
		if (!response.ok) return null;
		const encoded = response.headers.get("X-Company-File");
		return encoded ? decodeURIComponent(encoded) : fileName;
	} catch {
		return null;
	}
}
var NAV = [
	{
		to: "/azienda",
		label: "Azienda"
	},
	{
		to: "/sistemi",
		label: "Sistemi"
	},
	{
		to: "/processi",
		label: "Processi"
	},
	{
		to: "/bia",
		label: "BIA"
	},
	{
		to: "/valuta",
		label: "Compila"
	},
	{
		to: "/azioni",
		label: "Azioni"
	},
	{
		to: "/archivio",
		label: "Aziende"
	},
	{
		to: "/",
		label: "Riepilogo"
	}
];
function Shell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const company = useRiskStore((s) => s.company);
	const logo = useRiskStore((s) => s.profile.logoDataUrl);
	(0, import_react.useEffect)(() => {
		loadLocalCompanyFile();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "no-print sticky top-0 z-30 border-b border-ink bg-rail text-rail-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 px-4 py-3 md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo,
						alt: "",
						className: "h-9 w-9 rounded-md bg-white object-contain"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-xl leading-none tracking-tight",
							children: "Registro Rischi ICT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 truncate text-xs text-rail-muted",
							children: company
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportMenu, {})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-1 overflow-x-auto px-2 pb-2 md:px-4",
				"aria-label": "Sezioni",
				children: NAV.map((item) => {
					const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("shrink-0 rounded-md px-3 py-2 text-sm font-semibold", active ? "bg-rail-fg text-ink" : "text-rail-muted hover:text-rail-fg"),
						children: item.label
					}, item.to);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-3xl px-4 py-6 md:px-6 md:py-8",
			children
		})]
	});
}
function SaveButton() {
	const saveOpenCompany = useRiskStore((s) => s.saveOpenCompany);
	const saveCompanyAs = useRiskStore((s) => s.saveCompanyAs);
	const profileName = useRiskStore((s) => s.profile.name);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [naming, setNaming] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	async function persist(forceNew) {
		const state = useRiskStore.getState();
		const wanted = !forceNew && state.openFileName ? state.openFileName : companyFileName(state.profile.name || state.company);
		const saved = await saveLocalCompanyFile(registerJson(state), wanted);
		if (saved) {
			useRiskStore.getState().setOpenFileName(saved);
			return;
		}
		const dir = await writableFolder().catch(() => null);
		if (!dir) return;
		const fileName = !forceNew && state.openFileName ? state.openFileName : await uniqueFileName(dir, wanted);
		await writeCompanyFile(dir, fileName, registerJson(state));
		useRiskStore.getState().setOpenFileName(fileName);
	}
	function flash() {
		setSaved(true);
		window.setTimeout(() => setSaved(false), 1600);
	}
	if (naming) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex items-center gap-1",
		onSubmit: (event) => {
			event.preventDefault();
			saveCompanyAs(name);
			persist(true).finally(() => {
				setNaming(false);
				flash();
			});
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: name,
				onChange: (event) => setName(event.target.value),
				"aria-label": "Nome della nuova azienda",
				className: "h-11 w-36 rounded-md bg-white px-2 text-sm text-ink",
				autoFocus: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex min-h-11 items-center rounded-md bg-copper px-3 text-sm font-semibold text-copper-ink",
				children: "Ok"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 px-2 text-sm text-rail-fg",
				onClick: () => setNaming(false),
				children: "Annulla"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "inline-flex min-h-11 items-center rounded-md bg-copper px-3 text-sm font-semibold text-copper-ink",
			onClick: () => {
				saveOpenCompany();
				persist(false).finally(flash);
			},
			children: saved ? "Salvato" : "Salva"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "inline-flex min-h-11 items-center rounded-md border border-rail-muted/40 px-2 text-sm font-semibold text-rail-fg",
			onClick: () => {
				setName(profileName);
				setNaming(true);
			},
			children: "con nome"
		})]
	});
}
function ExportMenu() {
	const state = useRiskStore();
	const resetSeed = useRiskStore((s) => s.resetSeed);
	const importPersisted = useRiskStore((s) => s.importPersisted);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const [confirmReset, setConfirmReset] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "inline-flex min-h-11 items-center gap-2 rounded-md border border-rail-muted/40 px-3 text-sm font-semibold text-rail-fg",
			onClick: () => setOpen((v) => !v),
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
				className: "size-4",
				"aria-hidden": true
			}), "Esporta"]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-0 z-40 mt-2 w-72 rounded-lg border border-line bg-card p-3 text-ink shadow-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
						onClick: () => {
							downloadText("registro-rischi-ict.csv", risksCsv(state), "text/csv;charset=utf-8");
							setOpen(false);
						},
						children: "Registro CSV (Excel)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
						onClick: () => {
							downloadText("perimetro-asset.csv", assetsCsv(state), "text/csv;charset=utf-8");
							setOpen(false);
						},
						children: "Asset CSV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
						onClick: () => {
							if (busy) return;
							setBusy(true);
							setMessage("Aggiorno la sintesi…");
							downloadSynthesis(useRiskStore.getState()).then(() => {
								setMessage("Sintesi aggiornata e scaricata.");
								setOpen(false);
							}).catch(() => setMessage("La sintesi non è stata generata. Riprova.")).finally(() => setBusy(false));
						},
						children: busy ? "Aggiorno la sintesi…" : "Sintesi PowerPoint"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-line px-3 text-sm font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
								className: "size-4",
								"aria-hidden": true
							}),
							"Importa JSON",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "application/json",
								className: "sr-only",
								onChange: async (event) => {
									const file = event.target.files?.[0];
									event.target.value = "";
									if (!file) return;
									try {
										const data = JSON.parse(await file.text());
										setMessage(importPersisted(data) ? "Registro importato." : "File non riconosciuto.");
									} catch {
										setMessage("File non valido.");
									}
								}
							})
						]
					}),
					confirmReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-copper-soft p-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tornare ai dati del file v1.0 R01? Le modifiche di questo browser si perdono." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 rounded-md bg-copper px-3 text-sm font-semibold text-copper-ink",
								onClick: () => {
									resetSeed();
									setConfirmReset(false);
									setOpen(false);
								},
								children: "Ripristina"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 px-3 text-sm font-semibold",
								onClick: () => setConfirmReset(false),
								children: "Annulla"
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-copper",
						onClick: () => setConfirmReset(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
							className: "size-4",
							"aria-hidden": true
						}), "Ripristina il file originale"]
					}),
					message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: message
					}) : null
				]
			})
		}) : null]
	});
}
function MenuButton({ children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "min-h-11 rounded-md border border-line px-3 text-left text-sm font-semibold",
		children
	});
}
//#endregion
export { writableFolder as A, readCompanyFile as C, uniqueFileName as D, supportsFolder as E, useRiskStore as O, rankSystems as S, seed as T, groupByCategory as _, Shell as a, matrixJudgment as b, chooseFolder as c, controlById as d, downloadSynthesis as f, formatEuro as g, fmt as h, PROBABILITY as i, writeCompanyFile as j, weightedDailyCost as k, cn as l, evaluate as m, IMPACT as n, buildRows as o, downloadText as p, JUDGMENTS as r, categoryShort as s, EFFECTIVENESS as t, companyFileName as u, isOpenAction as v, registerJson as w, parseEuro as x, listCompanyFiles as y };
