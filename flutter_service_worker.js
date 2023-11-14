'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6ca805b9994d707fcaf94e6e13ef9488",
"assets/AssetManifest.json": "23f0f175dc38eadd25b132ad0df6b58b",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Acumin-Variable-Concept.ttf": "066ce24dae3730ed6c648b09efaea93a",
"assets/assets/fonts/BYekan+_Bold.ttf": "7cceaa19cfb427713f1893d749613e95",
"assets/assets/fonts/dana%2520light.ttf": "1f2f3fdd3039752cdf05ed2d98aec500",
"assets/assets/fonts/dana_light.ttf": "1f2f3fdd3039752cdf05ed2d98aec500",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/0.png": "03cdec50496fcfc0fc01b4cc0be38dbc",
"assets/assets/images/0_(1).png": "beec3f42ea0bc81c85abc76553cf234d",
"assets/assets/images/512x512_logo_prestige_-01_(1).png": "b47362a3ef95c506f31f708b4c5f9c1e",
"assets/assets/images/99627-loading-blocks-unscreen_(1).gif": "95b2f03610e6beeca79aec99259f9995",
"assets/assets/images/a.png": "0ab4e4933ea2ba19aebb7249831c715d",
"assets/assets/images/app_launcher_icon.png": "b47362a3ef95c506f31f708b4c5f9c1e",
"assets/assets/images/a_(2).png": "dcf42387a68401a25c1a16eff7c5b663",
"assets/assets/images/Black_wallpaper_1.svg": "87fc1c06c7bad3981e104537ff85b45b",
"assets/assets/images/Comp-1-1-1-unscreen.gif": "4fe97e4dc48616c3e22040396328993b",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/globe_(1)_1.svg": "a401a62abc8896de3a52c5e36164d50f",
"assets/assets/images/globe_(1)_2.png": "d6edf4a543883747d0e1aed67a238f56",
"assets/assets/images/Group.png": "ae0bd1faa99135a04ab002c649b80a13",
"assets/assets/images/Group_(1).png": "88fdf0ae94dea9193dd2fe9180573145",
"assets/assets/images/Group_(2).png": "68b531f8ce8c69084325d1c12c615453",
"assets/assets/images/Group_(3).png": "fd0276694350a5180ac501e8b1536a12",
"assets/assets/images/Group_1.svg": "cfa26e54f68128f4cdad657ae6ff72ee",
"assets/assets/images/Group_111.png": "ee31324ff62efacd52e3f7caa82129dd",
"assets/assets/images/Group_112.svg": "67e46530a31c9dd362243f5440154493",
"assets/assets/images/Group_113.png": "f7129b9b126b3a5a3de46bf3be67e28c",
"assets/assets/images/Group_115.png": "c3b497951558c922371da3a4444a414f",
"assets/assets/images/Group_125.png": "25ad9e3610c30aad36fcd274be53a710",
"assets/assets/images/Group_144.png": "a441bd4c9fd41d1ba39cc8c02b42ae94",
"assets/assets/images/Group_144_(1).png": "37c1da49b9876bae995654f67e560eaf",
"assets/assets/images/Group_155.png": "1cb65b36c5e3fde146cb0f7d88b3dfab",
"assets/assets/images/Group_155_(1).png": "cca5daa8851bc639cae97c79ddd78e6b",
"assets/assets/images/Group_157.png": "e5878da8e72b2db92102caf457c6dfe8",
"assets/assets/images/Group_159.png": "a3ea8c795f193c2855487f94902ba78e",
"assets/assets/images/Group_161.png": "93ded385a554eac587f19302157f0a80",
"assets/assets/images/Group_164.png": "b461d03959501ce89c150e4f54576d04",
"assets/assets/images/Group_165.png": "68a6c0a75afc5497b88893624ec7c59f",
"assets/assets/images/Group_166.png": "e1aa8fb248c7e2af014cea7ebd8c4427",
"assets/assets/images/Group_167.png": "67dc7d7ffe54572680f36127c2ac384c",
"assets/assets/images/Group_167_(1).png": "92515d8829fcdfc043b07d73d6f8ff74",
"assets/assets/images/Group_168.png": "4404e0a07e777e129e2fdf67e8347ae9",
"assets/assets/images/Group_168_(1).png": "eaf39126ac9d77ece6016628362b469d",
"assets/assets/images/Group_169.png": "e94542da577886c90d404147507b3745",
"assets/assets/images/Group_16_(1).png": "bb5decb65beb4c2b11dedc613e80f754",
"assets/assets/images/Group_17.png": "b3310b07e10caa02e5b392779bcf4d11",
"assets/assets/images/Group_17.svg": "da0618f6628486a466fde61d089f87d3",
"assets/assets/images/Group_177.png": "c3508e92c15f3d7fa182c4e57aeffef2",
"assets/assets/images/Group_177_(1).png": "5273dd2d6a57d2006056d9b519154178",
"assets/assets/images/Group_179.png": "d12fd9fd2cc9f7f51c0e9e13a0df742f",
"assets/assets/images/Group_17_(1).png": "e1c02595f846ee33c87bd3bc8f5ee3b1",
"assets/assets/images/Group_181.png": "6650cc137fabc67a38425a7339550c8a",
"assets/assets/images/Group_183.png": "ac47b039b9bbed68a61708ebb99df47f",
"assets/assets/images/Group_187.png": "71262d9b7f59a2d203e15fa990e836a1",
"assets/assets/images/Group_188.png": "f6b061df818bfe778149bb9acdc82519",
"assets/assets/images/Group_196.png": "1c1c3febf549fe4bf96c1c19a66bd24b",
"assets/assets/images/Group_198.png": "dd1ef6abb7dba56e50e96d62332d451b",
"assets/assets/images/Group_199.svg": "e2fc105e7691a1b437f4ae78ef149b08",
"assets/assets/images/Group_1_(1).svg": "76d339d8535eb5bc3583955f343ac909",
"assets/assets/images/Group_2.svg": "9bf9274154560a03bb255554619526ab",
"assets/assets/images/Group_201.png": "ac8516be4adb8bd27af4ee149c2b368d",
"assets/assets/images/Group_202.png": "3448104f61e0a24bf2c9533daae6be41",
"assets/assets/images/Group_202_(1).png": "ad255c865e0c25577bd0e16953a6f21c",
"assets/assets/images/Group_210.png": "094bcf4d8a332c8281d7d1de848ca9fd",
"assets/assets/images/Group_214.png": "de76b75bbe90d769a2756b75f3b636ea",
"assets/assets/images/Group_215.png": "c96d4d250b982e397afda7c6c8cc46af",
"assets/assets/images/Group_217.png": "15cef13ce948660a2bb7d1873f0474f8",
"assets/assets/images/Group_218.png": "cb5f74cd8157b3b6cfab3531c6009e0a",
"assets/assets/images/Group_219.png": "bed98e99babfafebadbaf49d8e4a9fe9",
"assets/assets/images/Group_220.png": "b38899e5cc23f2517ae4f3c5a53033fb",
"assets/assets/images/Group_23_(1).png": "920297a64a670b47dab59c3dcdce2a6c",
"assets/assets/images/Group_23_(2).png": "0d78cb252e6e37c686107bcb9e630a8a",
"assets/assets/images/Group_24.svg": "aca03cd1709af5818bca7679a1820b18",
"assets/assets/images/Group_2_(1).svg": "9bf9274154560a03bb255554619526ab",
"assets/assets/images/Group_3.svg": "187bff28f2b15419ab3f21ddde7546f4",
"assets/assets/images/Group_30_(1).svg": "c99f5b1087f46f6337614f819fa5a62b",
"assets/assets/images/Group_31.svg": "979863eb68cebe152af6575e783d4054",
"assets/assets/images/Group_32.png": "84a27514014325c8d3a87deffca5720c",
"assets/assets/images/Group_32_(1).png": "9f3cac25798da2d13481f032fe2a3cb2",
"assets/assets/images/Group_40.png": "6b2259d7441cff069c39c918fc7fa43f",
"assets/assets/images/Group_40_(1).png": "61b856ae4acdf4ef92116a4372a79c63",
"assets/assets/images/Group_40_(2).png": "3e9e7da9853f39d544bdedb5c2e5ee2f",
"assets/assets/images/Group_41.png": "c80a45301c21c6eab6c419d03e9dfff7",
"assets/assets/images/Group_42.png": "565284fb0f2a1da17b8470e75e0637e6",
"assets/assets/images/Group_42_(1).png": "a402ab29c27c16d2074db15507558029",
"assets/assets/images/Group_43.png": "83e3fb465446b754dbbbd390398c7eb1",
"assets/assets/images/Group_43.svg": "19de5082c91fc921228497e26c50d338",
"assets/assets/images/Group_43_(1).png": "91eb0c1894018de84853378533172b2e",
"assets/assets/images/Group_43_(2).png": "3a67ab4d13b13e17f302720758ff014f",
"assets/assets/images/Group_44.png": "e01f3d7e0d8e70d8757e0eb63dcc0b46",
"assets/assets/images/Group_46.png": "d2925a556db4298ae557e8e0957df4a7",
"assets/assets/images/Group_47.png": "5468925f512c057f52d34adeaad6495e",
"assets/assets/images/Group_47_(1).png": "73ed6fa60f6a7795bc7e273307718c92",
"assets/assets/images/Group_47_(2).png": "d4e997d4c6050a4cc479ce94b7015792",
"assets/assets/images/Group_47_(3).png": "2e43fdbd49fa1d9cb41d7c0cd449e2b8",
"assets/assets/images/Group_50.svg": "f9254b1abb0e4f0f8c2f5890c99a63ef",
"assets/assets/images/Group_50_(1).png": "12eae2ba182d7b66526d0d0c105aaa6f",
"assets/assets/images/Group_50_(2).png": "28a66619bc0ca19be9971c5afa653d61",
"assets/assets/images/Group_50_(3).png": "812675a6a3df802188d972262a3cbc58",
"assets/assets/images/Group_51.png": "98894bbc46bfa6e2f8658cc19ec36d14",
"assets/assets/images/Group_51.svg": "ac3680bbd9c6b2bef3236d6366540845",
"assets/assets/images/Group_52.png": "5a40892556bceaf72da69e11efcfad62",
"assets/assets/images/Group_52.svg": "2df6a5ef25b5a3056b882fb2b1461030",
"assets/assets/images/Group_53.png": "0f59d75ecfd0c59b680c0f34f795c76e",
"assets/assets/images/Group_53_(1).png": "43125094c4291f6d0537b677a356d99f",
"assets/assets/images/Group_53_(3).png": "056e105e54eec1050771e493df287eef",
"assets/assets/images/Group_54.png": "d7e2d208cf35b1ac456c34c3a5746528",
"assets/assets/images/Group_55.png": "0bfff1e93acc4ad3a684b1d80a12f15e",
"assets/assets/images/Group_56.png": "f3bac33ea20abda35e78f1703c325c52",
"assets/assets/images/Group_57.png": "5aa3e957ede6fbcc52397ec743865a39",
"assets/assets/images/Group_58.png": "6300677e1fd7cee3ea5e80eb551dd7cf",
"assets/assets/images/Group_59.png": "4209ed18eda702459b1b5f20841b6cf5",
"assets/assets/images/Group_6.png": "558781393419251882c1a4da86c0918b",
"assets/assets/images/Group_7.png": "63c31e838d92bf521ccf4c11b4cd6bae",
"assets/assets/images/Group_76.png": "98a635215c491359badca4c103f04123",
"assets/assets/images/Group_77.png": "d6ec990336ce088ef296263313a64c87",
"assets/assets/images/Group_83.png": "2c67c7ba476f1d54c101e5a51086c274",
"assets/assets/images/Group_83_(1).png": "aec694cfcd24eff7ef6e702995fd3652",
"assets/assets/images/Group_83_(2).png": "722f4cebd58969aada277c8ac7c380db",
"assets/assets/images/Home_Page_(News).jpg": "d11372ecc63476f00c619d6b111443e8",
"assets/assets/images/Home_Page_(News).svg": "ee4ef9cdad7f074a6ddf3d45a8066689",
"assets/assets/images/icons8-discord-384_1.png": "a36ac1985f1d421bf81634b8ba5a310b",
"assets/assets/images/icons8-discord-384_2.png": "285396ed06789dbfa0fb85fbc78400dd",
"assets/assets/images/icons8-discord-384_2_(1).png": "205b6c6fe15a53f4f0a953599554ee7e",
"assets/assets/images/icons8-instagram-384.png": "993a1ec9ca22965df257ff6fc6aa7d6c",
"assets/assets/images/icons8-telegram-500.png": "316e2374782232ec963a8a0a0db8a4eb",
"assets/assets/images/icons8-youtube-500.png": "beebadbfd5e8dc8fb076df2e2a497c1e",
"assets/assets/images/logo.png": "7ea44269d379b7918940239b84a4fb1b",
"assets/assets/images/money.png": "3b88193bce98bff843cab6626f0d11c6",
"assets/assets/images/money.svg": "be0fc603fc2b0399eff92f73a1b6d35e",
"assets/assets/images/name_be_madareshh-01_1.png": "93bb1addc2dbbb1b14979baf4c609691",
"assets/assets/images/name_be_madareshh-01_1.svg": "38a9de2146506db81a8a6ac254d4ee78",
"assets/assets/images/name_be_madareshh-01_1_(1).png": "7365c77464f13882dab52c4733d2e397",
"assets/assets/images/new_banner_prestige_5-01.png": "777d2fec3751f6a4f8a0892b87fb138e",
"assets/assets/images/PEDARET_POWER_PLAY1_1.png": "98e62317ca0d6d554c6026be94907007",
"assets/assets/images/PEDARET_POWER_PLAY1_1.svg": "27a657290ab4229cca52171ecea7beaa",
"assets/assets/images/PEDARET_POWER_PLAY1_1_(1).png": "6c88965bb73f9e79fe224aacee07ae00",
"assets/assets/images/PEDARET_POWER_PLAY1_1_(1).svg": "c5e5caa6375e60d7ce322cb7d09f5ea5",
"assets/assets/images/pexels-the-glorious-studio-5370640_(1).jpg": "81ca9d02d21adfc7963f1dc7b1a03f2f",
"assets/assets/images/Polygon_2.svg": "a5c0478358e7935337cbcf9c47ed1276",
"assets/assets/images/Polygon_3.svg": "22fcff0f5b1ed455adc05f94a1aa852d",
"assets/assets/images/Polygon_3_(1).svg": "22fcff0f5b1ed455adc05f94a1aa852d",
"assets/assets/images/Polygon_5_(1).svg": "a533603f051cd7210d0e4da5ba44d0e3",
"assets/assets/images/Polygon_5_(2).svg": "1efcf444aa6fcd847189d5daa7d33374",
"assets/assets/images/Rank_+_Profile.png": "d1ae4c2aee709f46cae2fc606ded7573",
"assets/assets/images/Rectangle.png": "bfc43c7982d596ef371796fddfb0a36c",
"assets/assets/images/Rectangle_18.png": "336a03e2ae50d5a278b39a6f8bbf2c90",
"assets/assets/images/Rectangle_18_(1).png": "777742e967395c5e5897cc66223555e7",
"assets/assets/images/Rectangle_2.svg": "a9bc799fc7049eb61df56d2026905d3d",
"assets/assets/images/Rectangle_2_(1).svg": "8dc5bc3a2ceebb74f4e39fa4b5ad05f7",
"assets/assets/images/Rectangle_3.png": "3c2990b78d947b97b003ef117a4213d0",
"assets/assets/images/Rectangle_3.svg": "a12cac7254fcec526781d78ac71cf3c2",
"assets/assets/images/Rectangle_4.png": "22dfe47ac5e60a752779d8557106ce67",
"assets/assets/images/Rectangle_4.svg": "71f4bb68fbf90044c0f4f3412cb41033",
"assets/assets/images/Rectangle_56.png": "a15a149bde05d7d02a1e185d62d49e9f",
"assets/assets/images/Rectangle_56.svg": "bacf4b9ece6bbc219ef101024a4262dd",
"assets/assets/images/Rectangle_57.png": "77245037c1efadc8c517896a1445ba73",
"assets/assets/images/Send.png": "9ba631dee8c1c92321dcfcc508f6ce44",
"assets/assets/images/Subtract.png": "4db096fef3a231542cad1f91163ccefe",
"assets/assets/images/Team.png": "3c1ca0c2549bda55e4d1fd07c0ce7b28",
"assets/assets/images/Union.png": "34324ed407449295bd3908cbdc57f837",
"assets/assets/images/Vector_(10).png": "1aeb5a1c1751fe782198c7ae0b6a0fb2",
"assets/assets/images/Vector_(11).png": "2a3085ef2dbdd379db5e0b86af928920",
"assets/assets/images/Vector_(12).png": "dd4d69e34640843818f56acd725c6eea",
"assets/assets/images/Vector_(13).png": "fc109edc5873591b7f7b722c03e1d8f8",
"assets/assets/images/Vector_(14).png": "5304f8eb7632ed5a7ca3763b29374bcd",
"assets/assets/images/Vector_(2).png": "b4cc963d599ae3a8d2dc79544a535283",
"assets/assets/images/Vector_(3).png": "1534351f8320973538a26fde363aa6ae",
"assets/assets/images/Vector_(4).png": "2470c353f2f8ed968475ece27e7b6e37",
"assets/assets/images/Vector_(5).png": "d298677d1c97316e9ae9eacdd2912d58",
"assets/assets/images/Vector_(6).png": "44d909ea09ae11253230e9d2695d1c53",
"assets/assets/images/Vector_(7).png": "67cf85a6fc534de0ec67c247896a3a78",
"assets/assets/images/Vector_(8).png": "063f4855d09533d579f8025d8d0f86f3",
"assets/assets/images/Vector_(9).png": "0b328e2e3de44980549211aa77d72f9b",
"assets/assets/images/Vector_2.svg": "7f538819392eeffe9d6844a4a8112e7b",
"assets/assets/images/Vector_27.png": "5ee68a1e6e3a1a8b7ebe904a5427ae97",
"assets/assets/images/Vector_28.png": "aed3da6eb6042aab310177a51db5f2bf",
"assets/assets/images/Vector_29.png": "2f4a0e87c1aad98b29ff912d5bd6739d",
"assets/assets/images/Vector_2_(1).svg": "6cfed461d688ebe6265e8b2a1b6e7cf3",
"assets/assets/images/Vector_34.png": "d1ebe9157a10d171e99e0d61364f8cfa",
"assets/assets/images/Vector_8.png": "3102e48de2cb8a3b3e54c3cc9b49a13b",
"assets/assets/lottie_animations/56947-icon-failed.json": "e7c2304ee24bd84ef9ebfa6a91e03f9e",
"assets/assets/lottie_animations/73388-empty-cart.mp4.lottie.json": "653ce75b1f8ed8154bb20f3de7c25694",
"assets/assets/lottie_animations/73388-empty-cart.mp4.lottie_(1).json": "0fba98f9d8f119ccec474e8c37f084b0",
"assets/assets/lottie_animations/99627-loading-blocks.json": "d544d46ea97352bfbe751b74b5c5b5b8",
"assets/assets/lottie_animations/99627_loading_blocks_unscreen_1_.json": "640a46d4932165ab66dad6851a2d4c76",
"assets/assets/lottie_animations/animation.json": "735aa3c8045bbc91af17498e7a41bbce",
"assets/assets/lottie_animations/animation_lke725ft.json": "48bc94577da18d2160e715af1f52d845",
"assets/assets/lottie_animations/animation_lke7gwc5.json": "dd4b98d094ffa6db187c002524781a44",
"assets/assets/lottie_animations/animation_lkel63p7.json": "491cd3f687b90cc91c33b6472c745700",
"assets/assets/lottie_animations/Comp_1_2.mov.lottie.json": "36b3aebf57138c65b2b45379a4005673",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "20a00c7570811ae52bb365aba51182a7",
"assets/fonts/MaterialIcons-Regular.otf": "c9694c9d75187330a359b58c6c22c085",
"assets/NOTICES": "b32d8952817095a5224f92b90b922c7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "0bbccda152c30c8faa029fd8fc5af5d0",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/app_launcher_icon.png": "b47362a3ef95c506f31f708b4c5f9c1e",
"icons/Icon-192.png": "b8b76bb445473208bafbfb6137cfa2b2",
"icons/Icon-512.png": "a367e23c93c31ffd02faaf6ac311d28d",
"icons/Icon-maskable-192.png": "b8b76bb445473208bafbfb6137cfa2b2",
"icons/Icon-maskable-512.png": "a367e23c93c31ffd02faaf6ac311d28d",
"index.html": "a79cd5f66309492d58b0a9b7e2236abe",
"/": "a79cd5f66309492d58b0a9b7e2236abe",
"main.dart.js": "930f8a8399e4a0da5b08d26c83675b48",
"manifest.json": "7885c56daabe490d60db8547ee76612e",
"new_banner_prestige_5-01.png": "777d2fec3751f6a4f8a0892b87fb138e",
"version.json": "c199b1136685766ba55473693ee6545f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
