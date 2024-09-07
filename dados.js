let dados = [
    {
        nome: "Marie Curie",
        nacionalidade: "Polonesa/Francesa",
        atuacao: "Física e química",
        contribuicao: "Pioneira no estudo da radioatividade, descobrindo os elementos polônio e rádio. Primeira mulher a ganhar um Prêmio Nobel, e a única a ganhar em duas áreas diferentes (Física e Química).",
        relevancia: "Suas descobertas revolucionaram a física e a medicina, abrindo caminho para o tratamento do câncer com radioterapia.",
        link: "https://pt.wikipedia.org/wiki/Marie_Curie",
        tags: "frança polônia pioneira",
    },
    {
        nome: "Ada Lovelace",
        nacionalidade: "Britânica",
        atuacao: "Matemática",
        contribuicao: "Considerada a primeira programadora da história, desenvolvendo algoritmos para a máquina analítica de Charles Babbage.",
        relevancia: "Seus trabalhos anteciparam o conceito de computador moderno e a programação de computadores.",
        link: "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        tags: "inglaterra",
    },
    {
        nome: "Rosalind Franklin",
        nacionalidade: "Britânica",
        atuacao: "Química e cristalógrafa",
        contribuicao: "Seus trabalhos com difração de raios X foram cruciais para a descoberta da estrutura do DNA, embora não tenha recebido o crédito devida em vida.",
        relevancia: "Sua pesquisa foi fundamental para o entendimento da genética e da biologia molecular.",
        link: "https://pt.wikipedia.org/wiki/Rosalind_Franklin",
        tags: "inglaterra cristalografia",
    },
    {
        nome: "Katherine Johnson",
        nacionalidade: "Americana",
        atuacao: "Matemática",
        contribuicao: "Realizou cálculos complexos para as missões espaciais da NASA, incluindo os projetos Mercury e Apollo.",
        relevancia: "Seus cálculos precisos foram essenciais para o sucesso das primeiras missões tripuladas ao espaço.",
        link: "https://pt.wikipedia.org/wiki/Katherine_Johnson",
        tags: "eua usa estados unidos espaço lua",
    },
    {
        nome: "Tu Youyou",
        nacionalidade: "Chinesa",
        atuacao: "Farmacologista",
        contribuicao: "Descobriu a artemisinina, um medicamento eficaz contra a malária, salvando milhões de vidas.",
        relevancia: "Sua descoberta revolucionou o tratamento da malária e lhe rendeu o Prêmio Nobel de Fisiologia ou Medicina em 2015.",
        link: "https://pt.wikipedia.org/wiki/Tu_Youyou",
        tags: "china farmacia"
    },
    {
        nome: "Grace Murray Hopper",
        nacionalidade: "Americana",
        atuacao: "Cientista da Computação",
        contribuicao: "Pioneira na programação de computadores, desenvolveu o primeiro compilador e popularizou o termo 'bug' na computação.",
        relevancia: "Suas contribuições foram fundamentais para o desenvolvimento da linguagem COBOL e para a popularização da computação.",
        link: "https://pt.wikipedia.org/wiki/Grace_Hopper",
        tags: "eua usa estados unidos"
    },
    {
        nome: "Gertrude Belle Elion",
        nacionalidade: "Americana",
        atuacao: "Farmacologista",
        contribuicao: "Descobriu vários medicamentos importantes, incluindo a azatioprina (imunossupressor) e o acyclovir (antiviral).",
        relevancia: "Seus trabalhos revolucionaram o tratamento de doenças autoimunes e infecciosas.",
        link: "https://en.wikipedia.org/wiki/Gertrude_Belle_Elion",
        tags: "eua usa estados unidos farmacia"
    },
    {
        nome: "Mae Jemison",
        nacionalidade: "Americana",
        atuacao: "Médica e Astronauta",
        contribuicao: "Primeira mulher afro-americana a viajar para o espaço.",
        relevancia: "Inspirou gerações de mulheres e meninas a seguir carreiras STEM.",
        link: "https://en.wikipedia.org/wiki/Mae_Jemison",
        tags: "eua usa estados unidos lua"
    },
    {
        nome: "Jaqueline Goes",
        nacionalidade: "Brasileira",
        atuacao: "Médica e Pesquisadora",
        contribuicao: "Realizou importantes pesquisas na área de oncologia, especialmente no tratamento do câncer de mama.",
        relevancia: "É uma referência na medicina brasileira e internacional.",
        link: "https://pt.wikipedia.org/wiki/Jaqueline_Goes",
        tags: "brasil"
    },
    {
        nome: "Hedy Lamarr",
        nacionalidade: "Austríaca/Americana",
        atuacao: "Atriz e Inventora",
        contribuicao: "Inventou um sistema de comunicação de salto de frequência, que foi a base para tecnologias modernas como o Wi-Fi e o Bluetooth.",
        relevancia: "Demonstrou que mulheres podem ser talentosas em diversas áreas, inclusive ciência e tecnologia.",
        link: "https://en.wikipedia.org/wiki/Hedy_Lamarr",
        tags: "áustria usa eua estados unidos wifi"
    },
    {
        nome: "Bertha Lutz",
        nacionalidade: "Brasileira",
        atuacao: "Botânica, Zoóloga e Diplomata",
        contribuicao: "Foi uma das fundadoras do Partido Comunista Brasileiro e lutou pelos direitos das mulheres.",
        relevancia: "Uma figura importante na política e na ciência brasileira.",
        link: "https://pt.wikipedia.org/wiki/Bertha_Lutz",
        tags: "brasil zoologia diplomacia"
    },
    {
        nome: "Caroline Herschel",
        nacionalidade: "Alemã",
        atuacao: "Astrônoma",
        contribuicao: "Descobriu vários cometas e nebulosas, sendo a primeira mulher a receber uma medalha da Royal Astronomical Society.",
        relevancia: "Pioneira na astronomia feminina.",
        link: "https://en.wikipedia.org/wiki/Caroline_Herschel",
        tags: "alemanha astronomia"
    },
    {
        nome: "Lise Meitner",
        nacionalidade: "Austríaca/Sueca",
        atuacao: "Física",
        contribuicao: "Contribuiu significativamente para a compreensão da fissão nuclear.",
        relevancia: "Apesar de seu trabalho fundamental, não recebeu o reconhecimento adequado em seu tempo.",
        link: "https://en.wikipedia.org/wiki/Lise_Meitner",
        tags: "áustria suécia"
    },
    {
        nome: "Margaret Hamilton",
        nacionalidade: "Americana",
        atuacao: "Cientista da Computação",
        contribuicao: "Foi líder do grupo de engenharia de software do projeto Apollo da NASA.",
        relevancia: "Suas contribuições foram essenciais para o sucesso das missões Apollo à Lua.",
        link: "https://en.wikipedia.org/wiki/Margaret_Hamilton_(computer_scientist)",
        tags: "eua usa estados unidos espaço"
    },
    {
        nome: "Karen Spärck Jones",
        nacionalidade: "Britânica",
        atuacao: "Cientista da Computação",
        contribuicao: "Realizou importantes pesquisas na área de recuperação de informação e processamento de linguagem natural.",
        relevancia: "Suas ideias são fundamentais para os modernos sistemas de busca e análise de texto.",
        link: "https://en.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones",
        tags: "inglaterra"
    },
    {
        nome: "Donna Dubinsky",
        nacionalidade: "Americana",
        atuacao: "Empresária",
        contribuicao: "Fundadora da Palm Computing, pioneira na indústria de dispositivos móveis.",
        relevancia: "Uma das primeiras mulheres a liderar uma empresa de tecnologia de sucesso.",
        link: "https://en.wikipedia.org/wiki/Donna_Dubinsky",
        tags: "usa eua estados unidos empreendedorismo"
    },
    {
        nome: "Mary Jackson",
        nacionalidade: "Americana",
        atuacao: "Matemática e Engenheira Aeroespacial",
        contribuicao: "Trabalhou na NASA, realizando cálculos complexos para projetos de aeronaves e espaçonaves.",
        relevancia: "Uma das primeiras mulheres afro-americanas a trabalhar como engenheira na NASA.",
        link: "https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)",
        tags: "eua usa estados unidos espaço engenharia"
    },
    {
        nome: "Carol Shaw",
        nacionalidade: "Americana",
        atuacao: "Desenvolvedora de Jogos",
        contribuicao: "Foi uma das primeiras mulheres desenvolvedoras de jogos eletrônicos, criando jogos como 'Pong' e 'River Raid'.",
        relevancia: "Pioneira na indústria de jogos eletrônicos.",
        link: "https://en.wikipedia.org/wiki/Carol_Shaw",
        tags: "eua usa estados unidos"
    },
    {
        nome: "Frances Allen",
        nacionalidade: "Americana",
        atuacao: "Cientista da Computação",
        contribuicao: "Realizou importantes pesquisas na área de otimização de compiladores.",
        relevancia: "Foi a primeira mulher a receber o Prêmio Turing, considerado o Nobel da Computação.",
        link: "https://en.wikipedia.org/wiki/Frances_Allen",
        tags: "eua usa estados unidos ciência da computação"
    },
    {
        nome: "Mary Kenneth Keller",
        nacionalidade: "Americana",
        atuacao: "Cientista da Computação",
        contribuicao: "Primeira mulher a obter um doutorado em Ciência da Computação nos Estados Unidos.",
        relevancia: "Pioneira na educação em ciência da computação para mulheres.",
        link: "https://en.wikipedia.org/wiki/Mary_Kenneth_Keller",
        tags: "eua usa estados unidos"
    }
];