import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CorrectAnswer from '../components/QuizModule/CorrectAnswer';
import IncorrectAnswer from '../components/QuizModule/IncorrectAnswer';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import Leaderboard from './Leaderboard';

const QuizModule = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { name } = useParams();

  const quizData = {
    science: [
      {
        question: 'What is the chemical symbol for the element oxygen?',
        options: ['a) O', 'b) Ox', 'c) Oz', 'd) Om'],
        correctAnswer: 'a) O',
      },
      {
        question: 'What is the chemical formula for water?',
        options: ['a) HO2', 'b) CO2', 'c) H2O', 'd) O2H'],
        correctAnswer: 'c) H2O',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['a) Venus', 'b) Earth', 'c) Mars', 'd) Jupiter'],
        correctAnswer: 'c) Mars',
      },
      {
        question: 'What is the smallest unit of matter?',
        options: ['a) Molecule', 'b) Atom', 'c) Proton', 'd) Electron'],
        correctAnswer: 'b) Atom',
      },
      {
        question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
        options: ['a) Carbon dioxide', 'b) Oxygen', 'c) Nitrogen', 'd) Hydrogen'],
        correctAnswer: 'a) Carbon dioxide',
      },
      {
        question: 'What force is responsible for keeping planets in orbit around the Sun?',
        options: ['a) Gravitational force', 'b) Magnetic force', 'c) Centrifugal force', 'd) Electromagnetic force'],
        correctAnswer: 'a) Gravitational force',
      },
      {
        question: 'What is the chemical symbol for the element gold?',
        options: ['a) Go', 'b) Au', 'c) Ag', 'd) Ge'],
        correctAnswer: 'b) Au',
      },
      {
        question: 'What is the largest organ in the human body?',
        options: ['a) Heart', 'b) Brain', 'c) Skin', 'd) Liver'],
        correctAnswer: 'c) Skin',
      },
      {
        question: "Which gas is responsible for the Earth's ozone layer?",
        options: ['a) Oxygen', 'b) Carbon dioxide', 'c) Ozone', 'd) Chlorofluorocarbons (CFCs)'],
        correctAnswer: 'c) Ozone',
      },
      {
        question: 'What is the process by which plants make their own food using sunlight?',
        options: ['a) Respiration', 'b) Fermentation', 'c) Photosynthesis', 'd) Digestion'],
        correctAnswer: 'c) Photosynthesis',
      },
      {
        question: 'What is the chemical symbol for the element iron?',
        options: ['a) Ir', 'b) Fe', 'c) In', 'd) F'],
        correctAnswer: 'b) Fe',
      },
      {
        question: 'Which gas is essential for respiration in humans?',
        options: ['a) Nitrogen', 'b) Hydrogen', 'c) Oxygen', 'd) Carbon dioxide'],
        correctAnswer: 'c) Oxygen',
      },
      {
        question: "What is the study of the Earth's physical structure and substance called?",
        options: ['a) Meteorology', 'b) Geology', 'c) Astronomy', 'd) Biology'],
        correctAnswer: 'b) Geology',
      },
      {
        question: 'What is the chemical symbol for the element carbon?',
        options: ['a) Ca', 'b) Co', 'c) C', 'd) Cr'],
        correctAnswer: 'c) C',
      },
      {
        question: 'What is the process by which plants release water vapor into the atmosphere?',
        options: ['a) Condensation', 'b) Precipitation', 'c) Transpiration', 'd) Evaporation'],
        correctAnswer: 'c) Transpiration',
      },
      {
        question: 'What is the unit of measurement for electric current?',
        options: ['a) Volt', 'b) Watt', 'c) Ampere', 'd) Ohm'],
        correctAnswer: 'c) Ampere',
      },
      {
        question: 'What is the chemical symbol for the element hydrogen?',
        options: ['a) Hy', 'b) Hg', 'c) He', 'd) H'],
        correctAnswer: 'd) H',
      },
      {
        question: 'What is the process by which a solid changes directly into a gas without passing through the liquid state?',
        options: ['a) Melting', 'b) Condensation', 'c) Sublimation', 'd) Evaporation'],
        correctAnswer: 'c) Sublimation',
      },
      {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ['a) Mars', 'b) Venus', 'c) Saturn', 'd) Neptune'],
        correctAnswer: 'b) Venus',
      },
      {
        question: 'What is the chemical symbol for the element nitrogen?',
        options: ['a) Ni', 'b) Ne', 'c) N', 'd) Na'],
        correctAnswer: 'c) N',
      },
    ],
    history: [
      {
        question: 'Who was the first king of Rwanda?',
        options: ['a) King Kigeli I', 'b) King Ruganzu I', 'c) King Gihanga', 'd) King Mutara III'],
        correctAnswer: 'c) King Gihanga',
      },
      {
        question: 'Which kingdom is known as the most powerful in pre-colonial Rwanda?',
        options: ['a) Gisaka Kingdom', 'b) Bugesera Kingdom', 'c) Gikuyu Kingdom', 'd) Gihanga Kingdom'],
        correctAnswer: 'd) Gihanga Kingdom',
      },
      {
        question: 'Who is considered the founder of the Gisaka Kingdom?',
        options: ['a) King Kigeli IV', 'b) King Rwabugiri', 'c) King Kinyinya', 'd) King Byigirwa'],
        correctAnswer: 'd) King Byigirwa',
      },
      {
        question: 'Which Rwandan king is known for expanding the territory of the kingdom significantly?',
        options: ['a) King Gihanga', 'b) King Kigeli II', 'c) King Mutara I', 'd) King Ruganzu II'],
        correctAnswer: 'd) King Ruganzu II',
      },
      {
        question: 'Which king is known for introducing the cattle-keeping culture to Rwanda?',
        options: ['a) King Kigeli III', 'b) King Ndahiro I', 'c) King Mutara II', 'd) King Ruganzu III'],
        correctAnswer: 'b) King Ndahiro I',
      },
      {
        question: 'Who is considered the last independent king of Rwanda before colonization?',
        options: ['a) King Yuhi IV', 'b) King Kigeli V', 'c) King Musinga', 'd) King Rutarindwa'],
        correctAnswer: 'c) King Musinga',
      },
      {
        question: 'Which king is known for initiating the construction of royal palaces in Nyanza?',
        options: ['a) King Mutara II', 'b) King Kigeli IV', 'c) King Mutara III', 'd) King Kigeli V'],
        correctAnswer: 'a) King Mutara II',
      },
      {
        question: 'Which king is credited with the establishment of the Nyiginya dynasty?',
        options: ['a) King Gihanga', 'b) King Ruganzu I', 'c) King Ndahiro II', 'd) King Kigeli III'],
        correctAnswer: 'b) King Ruganzu I',
      },
      {
        question: 'What was the primary economic activity during the pre-colonial era in Rwanda?',
        options: ['a) Trade', 'b) Agriculture', 'c) Mining', 'd) Hunting'],
        correctAnswer: 'b) Agriculture',
      },
      {
        question: 'Which king is known for his role in the abolition of slavery in Rwanda?',
        options: ['a) King Rutarindwa', 'b) King Kigeli III', 'c) King Mutara III', 'd) King Mibambwe II'],
        correctAnswer: 'a) King Rutarindwa',
      },
      {
        question: 'Who is considered the greatest military strategist among the pre-colonial Rwandan kings?',
        options: ['a) King Mutara II', 'b) King Ruganzu II', 'c) King Rwabugiri', 'd) King Ndahiro I'],
        correctAnswer: 'c) King Rwabugiri',
      },
      {
        question: 'Which king is known for promoting the adoption of Christianity in Rwanda?',
        options: ['a) King Kigeli V', 'b) King Mutara III', 'c) King Yuhi IV', 'd) King Musinga'],
        correctAnswer: 'a) King Kigeli V',
      },
      {
        question: 'Who was the first European explorer to visit Rwanda in the late 19th century?',
        options: ['a) Henry Morton Stanley', 'b) David Livingstone', 'c) Richard Burton', 'd) John Hanning Speke'],
        correctAnswer: 'a) Henry Morton Stanley',
      },
      {
        question: 'Which king resisted colonial rule and was eventually exiled by the colonial authorities?',
        options: ['a) King Yuhi V', 'b) King Mibambwe III', 'c) King Rutarindwa', 'd) King Mutara II'],
        correctAnswer: 'a) King Yuhi V',
      },
      {
        question: 'What event marked the beginning of direct colonial rule in Rwanda?',
        options: ['a) Berlin Conference', 'b) Scramble for Africa', 'c) Treaty of Versailles', 'd) Battle of Kigali'],
        correctAnswer: 'a) Berlin Conference',
      },
      {
        question: 'Who was the first colonial governor of Rwanda?',
        options: ['a) Paul von Lettow-Vorbeck', 'b) Carl Peters', 'c) Gustav Adolf von Götzen', 'd) Richard Kandt'],
        correctAnswer: 'd) Richard Kandt',
      },
      {
        question: 'Which colonial power initially controlled Rwanda before it was taken over by Belgium?',
        options: ['a) France', 'b) Germany', 'c) Britain', 'd) Portugal'],
        correctAnswer: 'b) Germany',
      },
      {
        question: 'What year did Rwanda gain independence from Belgium?',
        options: ['a) 1955', 'b) 1961', 'c) 1962', 'd) 1970'],
        correctAnswer: 'c) 1962',
      },
      {
        question: 'Who became the first president of Rwanda after gaining independence?',
        options: ['a) King Kigeli V', 'b) Gregoire Kayibanda', 'c) Juvenal Habyarimana', 'd) Paul Kagame'],
        correctAnswer: 'b) Gregoire Kayibanda',
      },
    ],
    geography: [
      {
        question: 'What is the capital city of Rwanda?',
        options: ['a) Kigali', 'b) Butare', 'c) Gisenyi', 'd) Rwamagana'],
        correctAnswer: 'a) Kigali',
      },
      {
        question: "Which lake forms part of Rwanda's western border with the Democratic Republic of the Congo?",
        options: ['a) Lake Tanganyika', 'b) Lake Victoria', 'c) Lake Kivu', 'd) Lake Edward'],
        correctAnswer: 'c) Lake Kivu',
      },
      {
        question: 'What is the highest peak in Rwanda?',
        options: ['a) Mount Karisimbi', 'b) Mount Muhabura', 'c) Mount Bisoke', 'd) Mount Sabyinyo'],
        correctAnswer: 'a) Mount Karisimbi',
      },
      {
        question: "Which river flows along Rwanda's eastern border with Tanzania?",
        options: ['a) Nile River', 'b) Ruvubu River', 'c) Akagera River', 'd) Congo River'],
        correctAnswer: 'c) Akagera River',
      },
      {
        question: "Rwanda is known as the 'Land of a Thousand Hills.' What is the predominant geographical feature of the country?",
        options: ['a) Valleys', 'b) Mountains', 'c) Plateaus', 'd) Lakes'],
        correctAnswer: 'b) Mountains',
      },
      {
        question: 'Which neighboring country of Rwanda is located to the south?',
        options: ['a) Uganda', 'b) Burundi', 'c) Tanzania', 'd) Democratic Republic of the Congo'],
        correctAnswer: 'b) Burundi',
      },
      {
        question: 'What is the largest national park in Rwanda, known for its conservation efforts to protect mountain gorillas?',
        options: ['a) Akagera National Park', 'b) Volcanoes National Park', 'c) Nyungwe Forest National Park', 'd) Gishwati-Mukura National Park'],
        correctAnswer: 'b) Volcanoes National Park',
      },
      {
        question: 'What is the official language of Rwanda?',
        options: ['a) English', 'b) French', 'c) Kinyarwanda', 'd) Swahili'],
        correctAnswer: 'c) Kinyarwanda',
      },
      {
        question: 'Which region of Rwanda is known for its lush rainforests and is a biodiversity hotspot?',
        options: ['a) Eastern Province', 'b) Northern Province', 'c) Western Province', 'd) Southern Province'],
        correctAnswer: 'c) Western Province',
      },
      {
        question: 'What is the name of the large canyon located in the Northern Province of Rwanda?',
        options: ['a) Akagera Canyon', 'b) Ruhengeri Canyon', 'c) Rusizi Canyon', 'd) Huye Canyon'],
        correctAnswer: 'a) Akagera Canyon',
      },
      {
        question: 'Rwanda is a landlocked country. Which neighboring country provides access to the Indian Ocean?',
        options: ['a) Tanzania', 'b) Burundi', 'c) Uganda', 'd) Democratic Republic of the Congo'],
        correctAnswer: 'a) Tanzania',
      },
      {
        question: 'What is the predominant climate type in Rwanda?',
        options: ['a) Desert', 'b) Tropical rainforest', 'c) Mediterranean', 'd) Savanna'],
        correctAnswer: 'b) Tropical rainforest',
      },
      {
        question: 'What is the name of the largest island in Lake Kivu, which is part of Rwanda?',
        options: ['a) Ukerewe Island', 'b) Idjwi Island', 'c) Rusinga Island', 'd) Bulisa Island'],
        correctAnswer: 'b) Idjwi Island',
      },
      {
        question: 'What is the primary agricultural product grown in Rwanda?',
        options: ['a) Coffee', 'b) Tea', 'c) Bananas', 'd) Maize'],
        correctAnswer: 'a) Coffee',
      },
      {
        question: 'Which national park in Rwanda is known for its rich biodiversity and is home to chimpanzees?',
        options: ['a) Volcanoes National Park', 'b) Akagera National Park', 'c) Nyungwe Forest National Park', 'd) Gishwati-Mukura National Park'],
        correctAnswer: 'c) Nyungwe Forest National Park',
      },
      {
        question: 'What is the name of the largest city in Rwanda after Kigali?',
        options: ['a) Butare', 'b) Gisenyi', 'c) Rwamagana', 'd) Muhanga'],
        correctAnswer: 'a) Butare',
      },
      {
        question: 'Which province in Rwanda is known for its scenic tea plantations?',
        options: ['a) Eastern Province', 'b) Northern Province', 'c) Western Province', 'd) Southern Province'],
        correctAnswer: 'd) Southern Province',
      },
      {
        question: "What is the name of the international airport located in Kigali, Rwanda's capital?",
        options: ['a) Kigali International Airport', 'b) Gisenyi International Airport', 'c) Butare International Airport', 'd) Rwamagana International Airport'],
        correctAnswer: 'a) Kigali International Airport',
      },
      {
        question: 'Which famous explorer first visited Rwanda in the late 19th century?',
        options: ['a) Christopher Columbus', 'b) Ferdinand Magellan', 'c) Henry Morton Stanley', 'd) Marco Polo'],
        correctAnswer: 'c) Henry Morton Stanley',
      },
      {
        question: 'What is the currency of Rwanda?',
        options: ['a) Rwandan Dollar', 'b) Rwandan Franc', 'c) Rwandan Peso', 'd) Rwandan Euro'],
        correctAnswer: 'b) Rwandan Franc',
      },
    ],
    umuhanda1: [
      {
        question: 'Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:',
        options: ['a) Umuyobozi', 'b) Umuherekeza', 'c) A na B ni ibisubizo by’ukuri', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:',
        options: ['a) Abanyamaguru', 'b) Ibinyabiziga bigendera ku biziga bibiri', 'c) A na B ni ibisubizo by’ukuri', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) Ibinyabiziga bigendera ku biziga bibiri',
      },
      {
        question: 'Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha:',
        options: ['a) Igisate cy’umuhanda abayobozi bagomba gukurikira', 'b) Ahegereye umurongo ukomeje', 'c) Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo', 'd) A na C nibyo'],
        correctAnswer: 'd) A na C nibyo',
      },
      {
        question: 'Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda:',
        options: ['a) Biteganye', 'b) Ku murongo umwe', 'c) A na B nibyo', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B nibyo',
      },
      {
        question: 'Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:',
        options: [
          'a) Ibinyabiziga bigenewe gutwara abagenzi muri rusange',
          'b) Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5',
          'c) Ibinyabiziga bigenewe kwigisha gutwara',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5',
      },
      {
        question: 'Ubugari bwa romoruki ikuruwe n’ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira:',
        options: ['a) cm75', 'b) cm125', 'c) cm265', 'd) Nta gisubizo cy’ukuri'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri',
      },
      {
        question: 'Uburebure bw’ibinyabiziga bikurikira ntibugomba kurenga metero 11:',
        options: ['a) Ibifite umutambiko umwe uhuza imipira', 'b) Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo', 'c) Makuzungu', 'd) Nta gisubizo cy’ukuri'],
        correctAnswer: 'b) Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo',
      },
      {
        question: 'Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira:',
        options: [
          'a) Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini',
          'b) Ahantu hari ibimenyetso bibuza byabugenewe',
          'c) Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi',
          'd) Ibisubizo byose nibyo',
        ],
        correctAnswer: 'Ahatarengeje metero 1 imbere cyangwa inyuma y’ikinyabiziga gihagaze akanya gato cyangwa kanini',
      },
      {
        question: 'Kunyuranaho bikorerwa:',
        options: ['a) Mu ruhande rw’iburyo gusa', 'b) Igihe cyose ni ibumoso', 'c) Iburyo iyo unyura ku nyamaswa', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) Mu ruhande rw’iburyo gusa',
      },
      {
        question: 'Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira:',
        options: ['a) Burenga toni 1', 'b) Burenga toni 2', 'c) Burenga toni 24', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) Burenga toni 2',
      },
      {
        question: 'Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni:',
        options: ['a) Km50', 'b) Km40', 'c) Km30', 'd) Nta gisubizo cy’ukuri'],
        correctAnswer: 'a) Km50',
      },
      {
        question: 'Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k’abanyamaguru ariko amaze kureba ibi bikurikira:',
        options: ['a) Umuvuduko w’abanyamaguru', 'b) Ubugari bw’umuhanda', 'c) Umubare w’abanyamaguru', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) Umuvuduko w’abanyamaguru',
      },
      {
        question:
          'Ku byerekeye kwerekana ibinyabiziga n’ukumurika kwabyo ndetse no kwerekana ihindura ry’ibyerekezo byabyo. Birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira:',
        options: ['a) Amatara ndanga', 'b) Amatara ari imbere mu modoka', 'c) Amatara ndangaburambarare', 'd) Ibisubizo byose nibyo'],
        correctAnswer: 'a) Amatara ndanga',
      },
      {
        question: 'Iyo nta mategeko awugabanya by’umwihariko umuvuduko ntarengwa w’amapikipiki mu isaha ni:',
        options: ['a) Km25', 'b) Km70', 'c) Km40', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) Km40',
      },
      {
        question: 'Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita:',
        options: ['a) Feri y’urugendo', 'b) Feri yo guhagarara umwanya munini', 'c) Feri yo gutabara', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) Feri yo guhagarara umwanya munini',
      },
      {
        question: 'Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe:',
        options: ['a) 2', 'b) 3', 'c) 1', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) 1',
      },
      {
        question: 'Amatara maremare y’ikinyabiziga agomba kuzimwa mu bihe bikurikira:',
        options: ['a) Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20', 'b) Iyo ikinyabiziga kigiye kubisikana n’ibindi', 'c) Iyo ari mu nsisiro', 'd) Ibisubizo byose ni ukuri'],
        correctAnswer: 'a) Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20',
      },
      {
        question: 'Ikinyabiziga ntigishobora kugira amatara arenga abiri y’ubwoko bumwe keretse kubyerekeye amatara akurikira:',
        options: ['a) Itara ndangamubyimba', 'b) Itara ryerekana icyerekezo', 'c) Itara ndangaburumbarare', 'd) Ibisubizo byose ni ukuri'],
        correctAnswer: 'c) Itara ndangaburumbarare',
      },
      {
        question: 'Ubugari bwa romoruki ikuruwe n’igare cyangwa velomoteri ntiburenza ibipimo bikurikira:',
        options: ['a) cm25', 'b) cm125', 'c) cm45', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question:
          'Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira:',
        options: ['a) Ni itara ry’icyatsi rishyirwa imbere ku kinyabiziga', 'b) Ni itara ry’icyatsi rishyirwa ibumoso', 'c) Ni itara ry’umuhondo rishyirwa inyuma', 'd) A na C ni ibisubizo by’ukuri'],
        correctAnswer: 'd) A na C ni ibisubizo by’ukuri',
      },
    ],
    umuhanda2: [
      {
        question:
          'Za otobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n’icunga rihishije amyasa kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda, ayo matara ashyirwaho ku buryo bukurikira :',
        options: ['a) Amatara abiri ashyirwa inyuma', 'b) Amatara abiri ashyirwa imbere', 'c) Rimwe rishyirwa imbere irindi inyuma', 'd) b na c ni ibisubizo by’ukuri'],
        correctAnswer: 'd) b na c ni ibisubizo by’ukuri',
      },
      {
        question: 'Itara ryo guhagarara ry’ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira:',
        options: [
          'a) Metero 100 ku manywa na metero 20 mu ijoro',
          'b) Metero 150 ku manywa na metero 50 mu ijoro',
          'c) Metero 200 ku manywa na metero 100 mu ijoro',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Iyo umuvuduko w’ibinyabiziga bidapakiye ushobora kurenga km50 mu isaha ahategamye, bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera:',
        options: ['a) Metero 100', 'b) Metero 200', 'c) Metero 50', 'd) Metero 150'],
        correctAnswer: 'c) Metero 50',
      },
      {
        question:
          'Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri naza romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:',
        options: ['a) Ku binyabiziga by’ingabo bijya ahatarenga km25', 'b) Ibinyabiziga bihinga', 'c) Ibinyabiziga bya police', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question: "Igice cy'inzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugirango ngo imodoka zitambuke neza, kiba ari:",
        options: ['a) Ahanyurwa n’amagare na velomoteri', 'b) Ahanyurwa n’ingorofani', 'c) Ahanyurwa n’ibinyamitende', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Ubugari bwa romoruki ntiburenza ubugari bw’ikinyabiziga kiyikurura iyo ikuruwe n’ibinyabiziga bikurikira:',
        options: ['a) Igare', 'b) Velomoteri', 'c) Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y’imbere y’imodoka abana badafite imyaka:',
        options: ['a) Imyaka 10', 'b) Imyaka 12', 'c) Imyaka 7', 'd) Ntagisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) Ntagisubizo cy’ukuri kirimo',
      },
      {
        question: 'Icyapa kivuga gutambuka mbere y’ibinyabiziga biturutse imbere gifite amabara akurikira:',
        options: ['a) Ubuso ni umweru', 'b) Ikirango ni umutuku n’umukara', 'c) Ikirango ni umweru n’umukara', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Ni ryari itegeko rigenga gutambuka mbere kw’iburyo rikurikizwa mu masangano:',
        options: ['a) Iyo nta cyapa cyo gutambuka mbere gihari', 'b) Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora', 'c) A na B ni ibisubizo by’ukuri', 'd) Nta gisubizo cy’ukuri'],
        correctAnswer: 'd) Nta gisubizo cy’ukuri',
      },
      {
        question: "Ibimenyetso bimurika byerekana uburyo bwo kugendera mu muhanda kw'ibinyabiziga bishyirwa iburyo bw'umuhanda. Ariko bishobora no gushyirwa ibumoso cyangwa hejuru y’umuhanda:",
        options: [
          'a) Hakurikijwe icyerekezo abagenzi bireba baganamo',
          'b) Hakurikijwe icyo ibyo bimenyetso bigamije kwerekana',
          'c) Kugirango birusheho kugaragara neza',
          'd) Ibisubizo byose ni ukuri',
        ],
        correctAnswer: 'c) Kugirango birusheho kugaragara neza',
      },
      {
        question: 'Iyo itara ry’umuhondo rimyatsa rikoreshejwe mu masangano y’amayira ahwanyije agaciro rishyirwa ahagana he:',
        options: ['a) Kuri buri nzira', 'b) Hagati y’amasangano', 'c) Iburyo bw’amasangano', 'd) a na b ni ibisubizo by’ukuri'],
        correctAnswer: 'a) Kuri buri nzira',
      },
      {
        question: 'Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona :',
        options: [
          'a) Babona gusa ibumoso bwabo iby’ibara ritukura',
          'b) Iburyo babona iby’ibara risa n’icunga rihishije gusa',
          'c) Babona iby’ibara ry’umuhondo ibumoso',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa rimwe mu mezi 6:',
        options: [
          'a) Ibinyabiziga bitwara abagenzi muri rusange',
          'b) Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5',
          'c) Ibinyabiziga bigenewe kwigisha gutwara',
          'd) Ibisubizo byose ni ukuri',
        ],
        correctAnswer: 'd) Ibisubizo byose ni ukuri',
      },
      {
        question: 'Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n’icyapa gifite ubuso bw’amabara akurikira:',
        options: ['a) Ubururu', 'b) Umweru', 'c) Umutuku', 'd) Nta gisubizo cy’ukuri'],
        correctAnswer: 'a) Ubururu',
      },
      {
        question: 'Ku mihanda ibyapa bikurikira bigomba kugaragazwa ku buryo bumwe:',
        options: ['a) Ibyapa biyobora n’ibitegeka', 'b) Ibyapa biburira n’ibitegeka', 'c) Ibyapa bibuza n’ibitegeka', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) Ibyapa bibuza n’ibitegeka',
      },
      {
        question: 'Ni iyihe feri ituma imodoka igenda buhoro kandi igahagarara ku buryo bwizewe bubangutse kandi nyabwo, uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyangwa ahaterera:',
        options: ['a) Feri y’urugendo', 'b) Feri yo gutabara', 'c) Feri yo guhagarara umwanya munini', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) Feri yo guhagarara umwanya munini',
      },
      {
        question:
          'Ibizirikisho by’iminyururu cyangwa by’insinga kimwe n’ibindi by’ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe km 20 mu isaha, ibyo bizirikisho bigaragazwa ku buryo bukurikira:',
        options: [
          'a) Agatambaro gatukura kuri cm 50 z’umuhanda',
          'b) Ikimenyetso cy’itara risa n’icunga rihishije',
          'c) Icyapa cyera cya mpande enye zingana gifite cm 20 kuri buri ruhande',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'd) Nta gisubizo cy’ukuri kirimo',
      },
      {
        question:
          'Uretse mu mujyi, ku yindi mihanda yajyenwe na minisitiri ushinzwe gutwara abantu n’ibintu, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo makuzungu ni :',
        options: ['a) Toni 10', 'b) Toni 12', 'c) Toni 16', 'd) Toni 24'],
        correctAnswer: 'd) Toni 24',
      },
      {
        question:
          'Ubugari bw’imizigo yikorewe n’ibinyamitende itatu n’ubwiyikorewe n’ibinyamitende 4 bifite cyangwa bidafite moteri kimwe n’ubw’iyikorewe na romuruki zikuruwe n’ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira:',
        options: [
          'a) cm 30 ku bugari bw’icyo kinyabiziga kidapakiye',
          'b) Ubugari ntarengwa budakuka ni metero 2 na sentimetero 50',
          'c) A na B ni ibisubizo by’ukuri',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Kunyura ku binyabiziga bindi, uretse icy’ibiziga bibiri, bibujijwe aha hakurikira:',
        options: ['a) Hafi y’iteme iyo hari umuhanda ufunganye', 'b) Hafi y’aho abanyamaguru banyura', 'c) Hafi y’ibice by’umuhanda bimeze nabi', 'd) Ibi bisubizo byose ni ukuri'],
        correctAnswer: 'c) Hafi y’ibice by’umuhanda bimeze nabi',
      },
    ],
    umuhanda3: [
      {
        question: 'Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni:',
        options: ['a) Km 60 mu isaha', 'b) Km 40 mu isaha', 'c) Km 25 mu isaha', 'd) Km 20 mu isaha'],
        correctAnswer: 'd) Km 20 mu isaha',
      },
      {
        question: 'Iyo nta mategeko awugabanya by’umwihariko, umuvuduko ntarengwa ku modoka zikoreshwa nk’amavatiri y’ifasi cyangwa amatagisi zifite uburemere bwemewe butarenga kilogarama 3500 ni:',
        options: ['a) Km 60 mu isaha', 'b) Km 40 mu isaha', 'c) Km 75 mu isaha', 'd) Km 20 mu isaha'],
        correctAnswer: 'b) Km 40 mu isaha',
      },
      {
        question: 'Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira:',
        options: [
          'a) Imbere y’ahantu hinjirwa hakasohokerwa n’abantu benshi',
          'b) Mu muhanda aho ugabanyijemo ibisate bigaragazwa n’imirongo idacagaguye',
          'c) A na B ni ibisubizo by’ukuri',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question:
          'Iyo bwije kugeza bukeye cyangwa bitewe n’uko ibihe bimeze nk’igihe cy’ibihu cyangwa cy’imvura bitagishoboka kubona neza muri m 200, udutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri bari ku murongo bayobowe n’umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira :',
        options: [
          'a) Imbere ni itara ry’umuhondo ritwariwe ibumoso',
          'b) Inyuma ni itara ryera ritwariwe ibumoso n’umuntu uri ku murongo w’inyuma hafi y’umurongo ugabanya umuhanda mo kabiri',
          'c) A na B ni ibisubizo by’ukuri',
          'd) Nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Utuyira turi ku mpande z’umuhanda n’ inkengero zigiye hejuru biharirwa abanyamaguru mu bihe bikurikira:',
        options: [
          'a) Iyo hari amategeko yihariye yerekanwa n’ibimenyetso',
          'b) Iyo badatatanye kandi bayobowe n’umwarimu',
          'c) Iyo hatari amategeko yihariye yerekanwa n’ibimenyetso',
          'd) Ibisubizo byose ni ukuri',
        ],
        correctAnswer: 'a) Iyo hari amategeko yihariye yerekanwa n’ibimenyetso',
      },
      {
        question: 'Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira:',
        options: ['a) Mu nsisiro gusa', 'b) Ahegereye inyamaswa zikurura', 'c) Hafi y’amatungo', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) Hafi y’amatungo',
      },
      {
        question: 'Uburemere ntarengwa bwemewe ntibushobora kurenga 1⁄2 cy’uburemere bw’ikinyabiziga gikurura nubw’umuyobozi kuri romoruki zikurikira :',
        options: ['a) Romoruki ifite feri y’urugendo', 'b) Romoruki idafite feri y’urugendo', 'c) Romoruki itarenza kg 750', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) Romoruki ifite feri y’urugendo',
      },
      {
        question: 'Ibinyabiziga bifite ubugari bufite ibipimo bikurikira bigomba kugira amatara ndangaburumbarare :',
        options: ['a) Metero 2 na cm 10', 'b) Metero 2 na cm 50', 'c) Metero 3', 'd) Metero 2'],
        correctAnswer: 'b) Metero 2 na cm 50',
      },
      {
        question:
          'Nta tara na rimwe cyangwa akagarurarumuri bishobora kuba bifunze ku buryo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi y’ibipimo bikurikira kuva ku butaka igihe ikinyabiziga kidapakiye :',
        options: ['a) Cm 30', 'b) Cm 40', 'c) Cm 50', 'd) Metero 1 na cm 55'],
        correctAnswer: 'd) Metero 1 na cm 55',
      },
      {
        question:
          'Iyo ikinyabiziga gifite amatara abiri cyangwa menshi y’ubwoko bumwe ayo matara agomba kugira ibara rimwe n’ingufu zingana kandi akagomba gushyirwaho ku buryo buteganye uhereye ku murongo ugabanya ikinyabizigamo kabiri mu burebure bwacyo. Ariko ibi ntibikurikizwa ku matara akurikira:',
        options: ['a) itara ndangamubyimba', 'b) itara ndangaburumbarare', 'c) itara ribonesha icyapa kiranga numero y’ikinyabiziga inyuma', 'd) A na B byose nibyo'],
        correctAnswer: 'd) A na B byose nibyo',
      },
      {
        question: 'Ahari hejuru cyane y’ubuso bumurika h’amatara ndangambere na ndanganyuma ntihashobora kuba aharenze ibipimo bikurikira hejuru y’ubutaka iyo ikinyabiziga kidapakiye:',
        options: ['a) m1 na cm 50', 'b) m1 na cm 75', 'c) m 1 na cm 90', 'd) m2 na cm 10'],
        correctAnswer: 'b) m1 na cm 75',
      },
      {
        question: 'Ni ryari ikinyabiziga gishobora kugenda mu muhanda moteri itaka cyangwa vitesi idakora:',
        options: ['a) igihe kigenda ahamanuka', 'b) igihe gikuruwe n’ikindi kinyabiziga', 'c) igihe gifite feri y’urugendo', 'd) ibisubizo byose ni byo'],
        correctAnswer: 'c) igihe gifite feri y’urugendo',
      },
      {
        question: 'Umurongo mugari wera udacagaguye ushobora gucibwa ku muhanda kugirango ugaragaze ibi bikurikira:',
        options: ['a) inkombe mpimbano z’umuhanda', 'b) ahahagararwa umwanya muto n’umunini', 'c) ahanyura abayobozi b’amagare', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) inkombe mpimbano z’umuhanda',
      },
      {
        question: 'Ibinyabiziga bikurikira bigomba kugira icyerekana umuvuduko kiri aho umuyobozi areba neza kandi kigahora kitabwaho kugirango kigume gukora neza:',
        options: [
          'a) ibinyabiziga bifite umuvuduko nibura wa km 60 mu isaha',
          'b) ibinyabiziga bishobora kurenza km 40 mu isaha',
          'c) ibinyabiziga bishobora kurenza km 30 mu isaha',
          'd) ibinyabiziga bishobora kurenza km 25 mu isaha',
        ],
        correctAnswer: 'd) ibinyabiziga bishobora kurenza km 25 mu isaha',
      },
      {
        question: 'Ubugari bw’imizigo yikorewe n’ipikipiki idafite akanyabiziga ko kuruhande kimwe n’ubwa romoruki ikuruwe na bene icyo kinyabiziga ntibushobora kurenza ibipimo bikurikira:',
        options: ['a) m 1.25', 'b) cm 35', 'c) cm 75', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) m 1.25',
      },
      {
        question: 'Ibinyabiziga bikurikira bigomba kugira itara ry’ubururu rimyatsa riboneka mu mpande zose:',
        options: ['a) ibinyabiziga bifite ubugari burenga m 2 na cm 10', 'b) ibinyabiziga bya police y’igihugu', 'c) ibinyabiziga ndakumirwa', 'd) ibisubizo byose ni ukuri'],
        correctAnswer: 'b) ibinyabiziga bya police y’igihugu',
      },
      {
        question:
          'Ibinyabiziga bihinga n’ibindi bikoresho byihariye bikoreshwa n’ibigo bipatana imirimo, iyo bigenda mu nzira nyabagendwa igihe cya nijoro cyangwa bitewe n’uko ibihe bimeze bitagishoboka kubona neza muri m 200 bishobora kugaragazwa inyuma n’amatara 2 atukura, bipfa kuba bitarenza ibipimo bikurikira:',
        options: [
          'a) kutarenza umuvuduko wa km 20 mu isaha',
          'b) uburebure bwabyo habariwemo ibyo bitwaye bukaba butarengeje m6',
          'c) uburebure ntarengwa ntiburenga m8',
          'd) A na B nibyo bisubizo by’ukuri',
        ],
        correctAnswer: 'd) A na B nibyo bisubizo by’ukuri',
      },
      {
        question:
          'Iyo romoruki iziritse ku kinyamitende, velomoteri n’amapikipiki bidafite akanyabiziga ko kuruhande uretse ikinyamitende na velomoteri bidafite umuyobozi, iyo uburumbarare bwayo cyangwa bw’ibyo yikoreye bituma itara ry’ikinyabiziga gikurura ritagaragara igihe bitagishoboka kubona neza muri m 200 bigomba kugaragazwa ku buryo bukurikira:',
        options: [
          'a) itara ryera cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma',
          'b) itara ry’icyatsi cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma',
          'c) A na B ni ibisubizo by’ukuri',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'a) itara ryera cyangwa ry’umuhondo cyangwa risa n’icunga rihishije riri kuri rumoruki inyuma',
      },
      {
        question: 'Ku kinyabiziga cyangwa ibinyabiziga bikururana igice kirenga ku biziga ntikigomba kurenga ibipimo bikurikira:',
        options: ['a) inyuma ni m 3 na cm 50', 'b) imbere ni m 1 na cm 70', 'c) A na B ni ibisubizo by’ukuri', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Iyo amatara y’ikinyabiziga agomba gucanwa kandi igihe imizigo isumba impera y’ikinyabiziga ho metero irenga igice gihera cy’imizigo kigaragazwa ku buryo bukurikira:',
        options: [
          'a) itara ritukura cyangwa akagarurarumuri ku mutuku ku manywa',
          'b) agatambaro gatukura gafite nibura cm 50 z’uruhande mu ijoro',
          'c) itara ry’umuhondo cyangwa akagarurarumuri k’umuhondo',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'a) itara ritukura cyangwa akagarurarumuri ku mutuku ku manywa',
      },
    ],
    umuhanda4: [
      {
        question:
          'Iyo imizigo igizwe n’ibinyampeke, ikawa, ipamba idatonoye, ibishara, ibyatsi, ibishami cyangwa ubwatsi bw’amatungo bidahambiriye uretse amapaki afunze, ubugari bwayo bushobora kugera ku bipimo bikurikira:',
        options: ['a) m 2.50', 'b) m 2.75', 'c) m 3', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) m 2.75',
      },
      {
        question: 'Uretse mu mijyi kuyindi mihanda yagenywe na minisiteri ushinzwe gutwara ibintu n’abantu, uburemere ntarengwa bwemewe ku binyabiziga bifatanye bifite imitambiko itatu ni:',
        options: ['a) toni 20', 'b) toni 16', 'c) toni 12', 'd) toni 10'],
        correctAnswer: 'c) toni 12',
      },
      {
        question:
          'Buri modoka cyangwa buri romoruki ikuruwe n’iyo modoka bishobora kugira itara rituma umuyobozi yerekana ko yabonye ikimenyetso cy’uwitegura kumunyuraho. Iryo tara rifite amabara akurikira:',
        options: ['a) umuhondo', 'b) icyatsi kibisi', 'c) umweru', 'd) umutuku'],
        correctAnswer: 'a) umuhondo',
      },
      {
        question:
          'Ikinyabiziga cyangwa ibinyabiziga bikururana bifite imitambiko ibiri ikurikiranye mu bugari bwayo ni ukuvuga imitambiko yihindukiza kucyo ifungiyeho, uburebure bwabyo ntibugomba kurenza ibipimo bikurikira:',
        options: ['a) m11', 'b) m10', 'c) m7', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) m10',
      },
      {
        question:
          'Bumwe muri ubu bwoko bwa feri ituma imodoka iguma aho iri uko yaba yikoreye kose ku muzamuko cyangwa ku gacuri bya 16%, imyanya ya feri igomba gufata igakomeza kwegera kuburyo bw’ibyuma niyo umuyobozi yaba atarimo:',
        options: ['a) feri yo guhagarara umwanya munini', 'b) feri y’urugendo', 'c) feri yo gutabara', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) feri y’urugendo',
      },
      {
        question: 'Utugarurarumuri turi mu mbavu z’ikinyabiziga tugomba kugira ibara rikurikira:',
        options: ['a) umweru', 'b) umuhondo', 'c) umutuku', 'd) Nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) umuhondo',
      },
      {
        question: 'Romoruki zifite ubugari ntarengwa bwa cm 80 zishobora gushyirwaho akagarurarumuri kamwe gusa iyo zikuruwe n’ibinyabiziga bikurikira:',
        options: ['a) velomoteri', 'b) ipikipiki idafite akanyabiziga ku ruhande', 'c) amavatiri y’ifasi', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) ipikipiki idafite akanyabiziga ku ruhande',
      },
      {
        question:
          'Amatara maremare y’ibara ryera cyangwa ry’umuhondo agomba, nijoro igihe ijuru rikeye, kumurika mu muhanda mu ntera ya m 100 nibura imbere y’ikinyabiziga, ariko ku binyabiziga bifite moteri itarengeje za sentimetero kibe 125 iyo ntera igira ibipimo bikurikira:',
        options: ['a) m200', 'b) m100', 'c) m85', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) m85',
      },
      {
        question:
          'Iyo banyuze iruhande rw’inkomyi abanyamaguru bagomba gukikira banyuze mu muhanda, abayobozi bagomba gusiga umwanya ufite ubugari bwa m 1 nibura hagati yabo nayo. Iyo ibyo bidashobora kubahirizwa kandi umunyamaguru akaba anyura hafi yiyo nkomyi, umuyobozi agomba kuyikikira afite umuvuduko utarengeje ibipimo bikurikira:',
        options: ['a) km 10 mu isaha', 'b) km 20 mu isaha', 'c) km 30 mu isaha', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) km 30 mu isaha',
      },
      {
        question: 'Guhagarara akanya gato no guhagarara akanya kanini bibujijwe cyane cyane aha hakurikira:',
        options: [
          'a) ku mihanda y’icyerekezo kimwe hose',
          'b) mu ruhande ruteganye n’urwo ikindi kinyabiziga gihagazemo akanya gato cyangwa kanini',
          'c) ku mihanda ibisikanirwamo, iyo ubugari bw’umwanya w’ibinyabiziga ugomba gutuma bibisikana butagifite m12',
          'd) ibisubizo byose nibyo',
        ],
        correctAnswer: 'd) ibisubizo byose nibyo',
      },
      {
        question:
          'Imizigo yikorewe n’amagare, velomoteri, z’ubugari habariwemo imitwaro kdi nta kinyabiziga kindi kiziritseho ashobora gusimburwa n’amatara akurikira, iyo ibyo binyabiziga bihagaze umwanya muto cyangwa munini mu nsisiro bibangikanye ku ruhande rw’umuhanda:',
        options: ['a) amatara magufi', 'b) amatara ndangaburumbarare', 'c) amatara yo guhagarara umwanya munini', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) amatara yo guhagarara umwanya munini',
      },
      {
        question: 'Iyo tumuritswe n’amatara y’urugendo y’i kinyabiziga utugarurarumuri tugomba n’ijoro, igihe ijuru rikeye kubonwa n’umuyobozi w’ikinyabiziga kiri mu ntera ikurikira:',
        options: ['a) metero 100', 'b) metero 150', 'c) metero 200', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) metero 150',
      },
      {
        question:
          'Ibinyabiziga bigendeshwa na moteri, hatarimo velomoteri n’ibinyabiziga bidapakiye umuvuduko wabyo udashobora kurenga km 50 mu isaha ahateganye bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera ikurikira:',
        options: ['a) metero 200', 'b) metero 150', 'c) metero 100', 'd) metero 50'],
        correctAnswer: 'c) metero 100',
      },
      {
        question: 'Itara ndanganyuma rigomba gushyirwa aha hakurikira:',
        options: [
          'a) ahagereye inguni y’ibumoso y’ikinyabiziga',
          'b) ahagereye inguni y’iburyo bw’ikinyabiziga',
          'c) inyuma kandi y’impera y’ibumoso bw’ikinyabiziga',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) inyuma kandi y’impera y’ibumoso bw’ikinyabiziga',
      },
      {
        question:
          'Nta tara na rimwe cyangwa utugarurarumuri bishobora kuba bifunze kuburyo igice cyabyo cyo hasi cyane kimurika kitaba kiri hasi ya cm 40 kuva ku butaka igihe ikinyabiziga kidapakiye ariko ibyo ntibikurikizwa ku matara akurikira:',
        options: ['a) amatara kamenabihu', 'b) amatara yo gusubira inyuma', 'c) A na B ni ibisubizo by’ukuri', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Iyo tumuritswe n’amatara y’urugendo y’i kinyabiziga utugarurarumuri tugomba n’ijoro, igihe ijuru rikeye kubonwa n’umuyobozi w’ikinyabiziga kiri mu ntera ikurikira:',
        options: ['a) metero 100', 'b) metero 150', 'c) metero 200', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) metero 150',
      },
      {
        question:
          'Ibinyabiziga bigendeshwa na moteri, hatarimo velomoteri n’ibinyabiziga bidapakiye umuvuduko wabyo udashobora kurenga km 50 mu isaha ahateganye bigomba kuba bifite ibikoresho by’ihoni byumvikanira mu ntera ikurikira:',
        options: ['a) metero 200', 'b) metero 150', 'c) metero 100', 'd) metero 50'],
        correctAnswer: 'c) metero 100',
      },
      {
        question: 'Ahatari mu nsisiro ibyapa biburira n’ibyapa byo gutambuka mbere bigomba gushyirwa mu ntera ikurikira y’ahantu habyerekana:',
        options: ['a) metero 150 kugeza kuri 200', 'b) metero 100 kugeza kuri 150', 'c) metero 50 kugeza kuri 100', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'b) metero 100 kugeza kuri 150',
      },
      {
        question:
          'Inkombe z’inzira nyabagendwa cyangwa z’umuhanda zishobora kugaragazwa n’ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona ku buryo bukurikira:',
        options: [
          'a) babona iburyo bwabo ibyibara ritukura cyangwa ibisa n’icunga rihishije',
          'b) ibumoso babona iby’ibara ryera',
          'c) A na B ni ibisubizo by’ukuri',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question:
          'Ikinyabiziga kimwe cyangwa ibinyabiziga bikomatanye bifite uburemere ntarengwa bwemewe burenga ibiro 3500 cyangwa bifite uburebure bwite burenga metero 10 agomba, keretse iyo anyuze cyangwa agiye kunyura ku bindi binyabiziga, gusiga hagati y’ikinyabiziga cye n’iki muri imbere umwanya uhagije kugirango ibinyabiziga bimuhiseho bishobore kuhigobeka bidateje impanuka igihe bibaye ngombwa ariko ibyo ntibikurikizwa mu bihe bikurikira:',
        options: [
          "a) mu gihe ibigendera mu muhanda ari byinshi kimwe no mu duce tw'inzira nyabagendwa aho kunyuranaho bibujijwe",
          'b) igihe ibigendera mu muhanda ari byinshi',
          'c) mu duce tw’inzira nyabagendwa aho kunyuranaho bibujijwe',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: "a) mu gihe ibigendera mu muhanda ari byinshi kimwe no mu duce tw'inzira nyabagendwa aho kunyuranaho bibujijwe",
      },
    ],
    umuhanda5: [
      {
        question:
          'Amatara ndangacyerekezo agomba kuba agizwe n’ibintu bifashe ku rumuri rumyasa, biringaniye ku buryo bigira umubare utari igiharwe ku mpande z’imbere n’inyuma z’ikinyabiziga ayo matara aba afite amabara akurikira:',
        options: [
          'a) amatara y’imbere aba yera cyangwa ari umuhondo',
          'b) ayinyuma aba atukura cyangwa asa n’icunga rihishije',
          'c) A na B ni ibisubizo by’ukuri',
          'd) ayinyuma aba asa n’icunga rihishije',
        ],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question:
          'Amahoni y’ibinyabiziga bigendeshwa na moteri agomba kohereza ijwi ry’injyana imwe rikomeza kandi ridacengera amatwi ariko ibinyabiziga bikurikira bishobora kugira ihoni ridasanzwe ridahuye n’ibivuzwe haruguru:',
        options: ['a) ibinyabiziga ndakumirwa', 'b) ibinyabiziga bikora ku mihanda', 'c) ibinyabiziga bifite ubugari burenze m 2.10', 'd) A na B ni ibisubizo by’ukuri'],
        correctAnswer: 'd) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Icyapa kibuza kunyura kubindi binyabiziga byose uretse ibinyamitende ibiri n’amapikipiki adafite akanyabiziga ku ruhande gifite ibimenyetso by’amabara akurikira:',
        options: ['a) umweru n’umukara', 'b) umutuku n’umukara', 'c) ubururu', 'd) A na B ni ibisubizo by’ukuri'],
        correctAnswer: 'd) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Icyapa kivuga ko hatanyurwa mu byerekezo byombi kirangwa n’ubuso bw’ibara rikurikira:',
        options: ['a) umukara', 'b) umweru', 'c) ubururu', 'd) umutuku'],
        correctAnswer: 'c) ubururu',
      },
      {
        question: 'Ibinyabiziga bikurikira bigomba kugira ibikoresho by’ihoni byumvikanira mu ntera ya m 20:',
        options: ['a) amapikipiki', 'b) velomoteri', 'c) ibinyabiziga bigendeshwa na moteri bidapakiye', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) nta gisubizo cy’ukuri kirimo',
      },
      {
        question:
          'Imirongo y’ingabo z’igihugu zigendera kuri gahunda n’utundi dutsiko twose tw’abanyamaguru nk’imperekerane cyangwa udutsiko tw’abanyeshuri iyo bitagishoboka kubona neza muri m200, bagaragazwa ni itara ryera imbere naho inyuma ni itara ry’umutuku ariko iyo uburebure bwiyo mirongo cyangwa bw’utwo dutsiko burenga m6 impande zatwo cyangwa zayo zigaragazwa ku buryo bukurikira:',
        options: ['a) itara rimwe cyangwa menshi yera', 'b) amatara menshi y’umuhondo', 'c) amatara menshi asa n’icunga rihishije', 'd) ibisubizo byose nibyo'],
        correctAnswer: 'd) ibisubizo byose nibyo',
      },
      {
        question: 'Amatara ndangaburumbarare agomba kubonwa nijoro igihe ijuru rikeye n’umuyobozi w’ikinyabiziga kiri mu ntera ya :',
        options: ['a) m 50 nibura', 'b) m 100', 'c) m 150', 'd) m 200 nibura'],
        correctAnswer: 'c) m 150',
      },
      {
        question:
          'Uretse ku byerekeye imihanda iromboreje y’ibisate byinshi n’imihanda yimodoka igice cy’umuhanda kiri hakurya y’umurongo mugari wera ucibwa ku muhanda ngo ugaragaze inkombe mpimbano zawo kigenewe ibi bikurikira:',
        options: ['a) guhagararwamo umwanya muto gusa', 'b) guhagararwamo umwanya munini gusa', 'c) guhagararwamo umwanya muto n’umunini', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Ibimenyetso by’agateganyo bigizwe n’imitemeri y’ibara risa n’icunga rihishije bishobora gusimbura ibi bikurikira:',
        options: [
          'a) imirongo yera irombereje idacagaguye gusa',
          'b) imirongo yera irombereje idacagaguye n’icagaguye',
          'c) imirongo icagaguye n’idacagaguye ibangikanye',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) imirongo icagaguye n’idacagaguye ibangikanye',
      },
      {
        question: 'Iyo bitagishoboka kubona muri m 200 imodoka zikuruwe n’inyamaswa, ingorofani, inyamaswa zitwaye imizigo cyangwa zigenderwamo kimwe n’amatungo bigomba kurangwa na :',
        options: ['a) imbere ni itara ryera', 'b) imbere ni itara ry’umuhondo cyangwa risa n’icunga rihishije', 'c) inyuma ni itara rimwe ritukura', 'd) ibisubizo byose ni ukuri'],
        correctAnswer: 'd) ibisubizo byose ni ukuri',
      },
      {
        question:
          'Uretse igihe hari amategeko yihariye akurikizwa muri ako karere ikinyabiziga cyose gihagaze umwanya muto cyangwa munini, iyo gihagaze mu mwanya wo kuruhande wagenewe abanyamaguru, kugirango bashobore kugenda batagombye kunyura mu muhanda, umuyobozi agombye kubasigira akayira gafite byibura ibipimo bikurikira by’ubugari:',
        options: ['a) m 1', 'b) m 2', 'c) m 0.5', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) m 1',
      },
      {
        question: 'Icyapa cyerekana ahantu hagenewe guhagararwamo n’imodoka nini zagenewe gutwara abantu cyirangwa n’ubuso bw’amabara akurikira:',
        options: ['a) ubururu', 'b) umweru', 'c) umutuku', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'a) ubururu',
      },
      {
        question: 'Icyapa cyerekana ko inzira giteyeho mu ntangiriro idakomeza kigaragazwa n’ikirango (ikimenyetso) cy’amabara akurikira:',
        options: ['a) umukara n’umutuku', 'b) umukara n’umweru', 'c) umweru n’umutuku', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'd) nta gisubizo cy’ukuri kirimo',
      },
      {
        question: 'Buri modoka yagenewe gutwara abantu, ariko umubare wabo ntarengwa ukaba munsi ya 6 umuyobozi abariwemo igomba kugira imikandara yo kurinda ibyago igenewe aba bakurikira:',
        options: ['a) umuyobozi', 'b) umugenzi wicaye ku ntebe y’imbere', 'c) ishobora no kugira imikandara kuzindi ntebe z’inyuma', 'd) ibisubizo byose ni ukuri'],
        correctAnswer: 'c) ishobora no kugira imikandara kuzindi ntebe z’inyuma',
      },
      {
        question:
          "Usibye ibinyabiziga by'ingabo z'Igihugu, Ikinyabiziga kigendeshwa na moteri kiriho ibyuma ntamenwa cyangwa ikindi cyose gituma gikoreshwa mu gutera cyangwa mu kwitabara ntigishobora kugenda mu nzira nyabagendwa kidafite uruhushya rwihariye. Urwo ruhushya rutangwa naba bakurikira:",
        options: ['a) police y’igihugu', 'b) minisitiri ushinzwe gutwara abantu n’ibintu', 'c) minisitiri w’ingabo', 'd) ikigo cy’igihugu gishinzwe imisoro n’amahoro.'],
        correctAnswer: 'b) minisitiri ushinzwe gutwara abantu n’ibintu',
      },
      {
        question:
          'Iyo umukumbi ugizwe n’amatungo maremare arenze ane cyangwa amatungo magufi arenze atandatu mu nzira nyabagendwa iyo hatakibona neza kuburyo umuyobozi abona muri m 200 ugomba kugaragazwa kuburyo bukurikira:',
        options: [
          'a) itara ry’urumuri rwera cyangwa rusa n’icunga rihishije imbere y’umukumbi',
          'b) itara ry’urumuri rutukura cyangwa umuhondo ritwawe inyuma y’umukumbi',
          'c) A na B ni ibisubizo by’ukuri',
          'd) nta gisubizo cy’ukuri kirimo',
        ],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question:
          'Ibinyabiziga biherekeranyije mu butumwa ntibishobora gutonda uburebure burenga umurongo wa m 5Iyi bibaye bityo ibinyabiziga biherekeranye mu butumwa bishobora kugabanwamo amatsinda atonze umurongo atarengeje m 50 z’uburebure kdi hagati yayo hakaba byibura m 50 ariko ibyo ntibikurikizwa kubinyabiziga bikurikira:',
        options: ['a) ibinyabiziga bya police biherekeranyije', 'b) ibinyabiziga by’abasirikare biherekeranyije mu nsisiro', 'c) A na B ni ibisubizo by’ukuri', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question:
          'Iyo ikinyabiziga gikururwa n’inyamaswa nacyo gikuruye ikindi uburebure bw’ibikururwa bukaba burenga m 18 hatabariwemo icyo kinyabiziga cya mbere kiziritseho hagomba ibi bikurikira:',
        options: ['a) umuherekeza w’ikinyabiziga cya kabiri', 'b) abaherekeza babiri', 'c) A na B ni ibisubizo by’ukuri', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Ibinyabiziga bikurikira ntibitegetswe kugira ibimenyetso bibyerekana iyo byambukiranya umuhanda cyangwa bigenda ku ruhande rwawo:',
        options: ['a) ibinyabiziga bigendwamo n’abana', 'b) ibinyabiziga bigendwamo n’abamugaye', 'c) A na B ni ibisubizo by’ukuri', 'd) nta gisubizo cy’ukuri kirimo'],
        correctAnswer: 'c) A na B ni ibisubizo by’ukuri',
      },
      {
        question: 'Buri modoka yagenewe gutwara abantu, ariko umubare wabo ntarengwa ukaba munsi ya 6 umuyobozi abariwemo igomba kugira imikandara yo kurinda ibyago igenewe aba bakurikira:',
        options: ['a) umuyobozi', 'b) umugenzi wicaye ku ntebe y’imbere', 'c) ishobora no kugira imikandara kuzindi ntebe z’inyuma', 'd) ibisubizo byose ni ukuri'],
        correctAnswer: 'c) ishobora no kugira imikandara kuzindi ntebe z’inyuma',
      },
    ],
    literature: [
      {
        question: "Who is the renowned Rwandan author known for the novel 'Baking Cakes in Kigali'?",
        options: ['a) Chimamanda Ngozi Adichie', 'b) Monica Arac de Nyeko', 'c) Gaile Parkin', 'd) Scholastique Mukasonga'],
        correctAnswer: 'c) Gaile Parkin',
      },
      {
        question: "Which Rwandan author wrote the memoir 'The Girl Who Smiled Beads'?",
        options: ['a) Immaculée Ilibagiza', 'b) Louise Mushikiwabo', 'c) Clemantine Wamariya', 'd) Véronique Tadjo'],
        correctAnswer: 'c) Clemantine Wamariya',
      },
      {
        question: 'What is the title of the novel by Scholastique Mukasonga that tells the story of the Rwandan genocide?',
        options: ["a) 'The Fishermen'", "b) 'Our Lady of the Nile'", "c) 'Cockroaches'", "d) 'Americanah'"],
        correctAnswer: "c) 'Cockroaches'",
      },
      {
        question: "Who is the author of the book 'The Antelope Wife,' which explores the Rwandan diaspora?",
        options: ['a) Shailja Patel', 'b) Diana Evans', 'c) Louise Erdrich', 'd) Bessie Head'],
        correctAnswer: 'c) Louise Erdrich',
      },
      {
        question: "Which famous Rwandan author wrote the novel 'Our Lady of the Nile,' set in a girls' school in Rwanda?",
        options: ['a) NoViolet Bulawayo', 'b) Immaculée Ilibagiza', 'c) Clemantine Wamariya', 'd) Scholastique Mukasonga'],
        correctAnswer: 'd) Scholastique Mukasonga',
      },
      {
        question: 'What is the title of the autobiography by Immaculée Ilibagiza that recounts her experiences during the Rwandan genocide?',
        options: ["a) 'The Girl Who Smiled Beads'", "b) 'Left to Tell'", "c) 'Baking Cakes in Kigali'", "d) 'Cockroaches'"],
        correctAnswer: "b) 'Left to Tell'",
      },
      {
        question: "Who is the Rwandan author known for her work 'Miracle in Kigali,' which tells the story of a hotel manager who sheltered refugees during the genocide?",
        options: ['a) Véronique Tadjo', 'b) Gaile Parkin', 'c) Immaculée Ilibagiza', 'd) Eugenia Kim'],
        correctAnswer: 'c) Immaculée Ilibagiza',
      },
      {
        question: "Which Rwandan author's novel 'Cockroaches' is a powerful memoir about her experiences during and after the genocide?",
        options: ['a) Scholastique Mukasonga', 'b) Chimamanda Ngozi Adichie', 'c) Monica Arac de Nyeko', 'd) Clemantine Wamariya'],
        correctAnswer: 'a) Scholastique Mukasonga',
      },
      {
        question: 'What is the title of the novel by Monica Arac de Nyeko that won the Caine Prize for African Writing in 2007?',
        options: ["a) 'The Thing Around Your Neck'", "b) 'Beneath the Lion's Gaze'", "c) 'Jambula Tree'", "d) 'Americanah'"],
        correctAnswer: "c) 'Jambula Tree'",
      },
      {
        question: "Which Rwandan author wrote 'The Barefoot Woman,' a memoir about her mother's life and resilience?",
        options: ['a) Véronique Tadjo', 'b) Eugenia Kim', 'c) Clemantine Wamariya', 'd) Scholastique Mukasonga'],
        correctAnswer: 'd) Scholastique Mukasonga',
      },
      {
        question: "Who is the author of 'Small Country,' a novel that explores the coming-of-age story of a young boy in Rwanda during the genocide?",
        options: ['a) Monica Arac de Nyeko', 'b) Gaile Parkin', 'c) NoViolet Bulawayo', 'd) Gaël Faye'],
        correctAnswer: 'd) Gaël Faye',
      },
      {
        question: "Which Rwandan author is known for her poetry collection 'Teaching My Mother How to Give Birth'?",
        options: ['a) Yrsa Daley-Ward', 'b) Clemantine Wamariya', 'c) Immaculée Ilibagiza', 'd) Chimamanda Ngozi Adichie'],
        correctAnswer: 'a) Yrsa Daley-Ward',
      },
      {
        question: 'What is the title of the novel by Yvonne Adhiambo Owuor that explores the impact of war on a Rwandan family?',
        options: ["a) 'The Fishermen'", "b) 'Dust'", "c) 'The Orchard of Lost Souls'", "d) 'Americanah'"],
        correctAnswer: "b) 'Dust'",
      },
      {
        question: "Which famous Nigerian author's work often touches on themes related to Rwanda, including her novel 'Half of a Yellow Sun'?",
        options: ['a) Chimamanda Ngozi Adichie', 'b) Monica Arac de Nyeko', 'c) Gaile Parkin', 'd) Scholastique Mukasonga'],
        correctAnswer: 'a) Chimamanda Ngozi Adichie',
      },
      {
        question: 'What is the title of the novel by Bessie Head that explores the experiences of a Rwandan refugee in Botswana?',
        options: ["a) 'The Book of Not'", "b) 'Maru'", "c) 'The Cardinals'", "d) 'When Rain Clouds Gather'"],
        correctAnswer: "d) 'When Rain Clouds Gather'",
      },
      {
        question: "Who is the author of the book 'Our Lady of the Nile,' which explores the complexities of ethnicity and identity in Rwanda?",
        options: ['a) Immaculée Ilibagiza', 'b) Gaile Parkin', 'c) Scholastique Mukasonga', 'd) Louise Mushikiwabo'],
        correctAnswer: 'c) Scholastique Mukasonga',
      },
      {
        question: "Which Rwandan author is known for her work 'The Hundred Wells of Salaga,' a novel set in pre-colonial West Africa?",
        options: ['a) Scholastique Mukasonga', 'b) Ayesha Harruna Attah', 'c) NoViolet Bulawayo', 'd) Monica Arac de Nyeko'],
        correctAnswer: 'b) Ayesha Harruna Attah',
      },
      {
        question: 'What is the title of the collection of short stories by Véronique Tadjo that explores Rwandan folklore and mythology?',
        options: ["a) 'The Thing Around Your Neck'", "b) 'The Orchard of Lost Souls'", "c) 'The Shadow King'", "d) 'The Emperor's Babe'"],
        correctAnswer: "d) 'The Emperor's Babe'",
      },
      {
        question: "Who is the Rwandan author known for the novel 'Running the Rift,' which explores the world of competitive running in Rwanda?",
        options: ['a) Gaile Parkin', 'b) Naomi Benaron', 'c) NoViolet Bulawayo', 'd) Yrsa Daley-Ward'],
        correctAnswer: 'b) Naomi Benaron',
      },
    ],
    art: [
      {
        question: 'Who is the renowned Rwandan visual artist known for their vibrant and colorful paintings inspired by Rwandan culture?',
        options: ['a) Jean Bosco Bakunzi', 'b) Aimable Twahirwa', 'c) Emmanuel Nkuranga', 'd) Joseph Ntensibe'],
        correctAnswer: 'c) Emmanuel Nkuranga',
      },
      {
        question: 'Which traditional Rwandan art form involves the intricate weaving of natural fibers to create baskets and other decorative items?',
        options: ['a) Beadwork', 'b) Pottery', 'c) Imigongo', 'd) Agaseke'],
        correctAnswer: 'd) Agaseke',
      },
      {
        question: "What is 'Imigongo' in Rwandan art, which involves decorating wooden boards with geometric patterns made from cow dung?",
        options: ['a) Basket weaving', 'b) Beadwork', 'c) Cow dung art', 'd) Pottery'],
        correctAnswer: 'c) Cow dung art',
      },
      {
        question: 'Which Rwandan dance is characterized by its fast-paced, energetic movements and is often performed at celebrations and festivals?',
        options: ['a) Umushagiriro', 'b) Umuganura', 'c) Intore', 'd) Ikinimba'],
        correctAnswer: 'c) Intore',
      },
      {
        question: 'What is the name of the Rwandan traditional music instrument that consists of a wooden bow with a single string, played with a bow?',
        options: ['a) Inanga', 'b) Umuduri', 'c) Iningiri', 'd) Umudende'],
        correctAnswer: 'a) Inanga',
      },
      {
        question: 'Which Rwandan musician is known for blending traditional Rwandan sounds with modern music genres like hip-hop and reggae?',
        options: ['a) Riderman', 'b) The Ben', 'c) Knowless Butera', 'd) Mani Martin'],
        correctAnswer: 'a) Riderman',
      },
      {
        question: "What is 'Umuganura' in Rwandan culture?",
        options: ['a) A traditional dance', 'b) A celebration of harvest and culture', 'c) A famous Rwandan artwork', 'd) A traditional music instrument'],
        correctAnswer: 'b) A celebration of harvest and culture',
      },
      {
        question: 'Which famous Rwandan poet is known for their powerful and thought-provoking poems about identity, history, and social issues?',
        options: ['a) Yolande Mukagasana', 'b) Ishimwe', 'c) Lillian Umurungi', 'd) Edouard Bamporiki'],
        correctAnswer: 'd) Edouard Bamporiki',
      },
      {
        question: "What is the name of the traditional Rwandan dance troupe that performs the 'Intore' dance?",
        options: ['a) Abakobwa Beza', 'b) Inkera Arts', 'c) Inganzo Ngari', 'd) Indangamirwa'],
        correctAnswer: 'c) Inganzo Ngari',
      },
      {
        question: 'Which Rwandan artist is known for their skill in creating intricate and colorful beadwork designs?',
        options: ['a) Charles Kwizera', 'b) Jean Bosco Bakunzi', 'c) Ange Imanishimwe', 'd) Aimable Twahirwa'],
        correctAnswer: 'b) Jean Bosco Bakunzi',
      },
      {
        question: "What is 'Ubuhake' in Rwandan art and culture, which represents the traditional practice of exchanging artworks between families?",
        options: ['a) A form of pottery', 'b) A dance ritual', 'c) A type of basket weaving', 'd) A cultural exchange of artworks'],
        correctAnswer: 'd) A cultural exchange of artworks',
      },
      {
        question: 'Which Rwandan artist is known for their sculptures made from recycled materials, reflecting environmental and social themes?',
        options: ['a) Innocent Nkurunziza', 'b) Ange Imanishimwe', 'c) Joseph Ntensibe', 'd) Lillian Umurungi'],
        correctAnswer: 'a) Innocent Nkurunziza',
      },
      {
        question: 'What is the name of the famous Rwandan ceramicist known for creating unique pottery pieces?',
        options: ['a) Jean Bosco Bakunzi', 'b) Charles Kwizera', 'c) Emmanuel Nkuranga', 'd) Aimable Twahirwa'],
        correctAnswer: 'b) Charles Kwizera',
      },
      {
        question: 'Which Rwandan poet and writer is celebrated for her poetry collections that explore themes of identity and womanhood?',
        options: ['a) Edouard Bamporiki', 'b) Ange Imanishimwe', 'c) Yolande Mukagasana', 'd) Ishimwe'],
        correctAnswer: 'd) Ishimwe',
      },
      {
        question: 'What is the name of the traditional Rwandan drum ensemble that plays a significant role in Rwandan cultural events?',
        options: ['a) Amasimbi', 'b) Ingoma Nshya', 'c) Inanga Ensemble', 'd) Umuduri'],
        correctAnswer: 'b) Ingoma Nshya',
      },
      {
        question: 'Which famous Rwandan filmmaker is known for documentaries that focus on issues such as reconciliation and justice?',
        options: ['a) Lillian Umurungi', 'b) Deo Munyakazi', 'c) Kivu Ruhorahoza', 'd) Ange Imanishimwe'],
        correctAnswer: 'c) Kivu Ruhorahoza',
      },
      {
        question: "In Rwandan traditional dance, what does the 'Umushagiriro' dance symbolize?",
        options: ['a) Joy and celebration', 'b) Harvest and fertility', 'c) Mourning and remembrance', 'd) Love and courtship'],
        correctAnswer: 'b) Harvest and fertility',
      },
      {
        question: "What is 'Inanga' in Rwandan music, which is a traditional stringed musical instrument?",
        options: ['a) A type of drum', 'b) A dance style', 'c) A traditional flute', 'd) A musical instrument'],
        correctAnswer: 'd) A musical instrument',
      },
      {
        question: 'Which Rwandan artist is known for their unique sculptures made from wood and metal, often portraying cultural and historical themes?',
        options: ['a) Charles Kwizera', 'b) Aimable Twahirwa', 'c) Emmanuel Nkuranga', 'd) Joseph Ntensibe'],
        correctAnswer: 'a) Charles Kwizera',
      },
    ],
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const [result, setResult] = useState([]); // [1, 0, 1, 1, 0, 1, 0, 1, 1, 1];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
      //    store  1 if answer is true and 0 if is false  in result array in useState
    } else {
      setQuizCompleted(true);
    }
  };
  const handleCheckAnswer = () => {
    if (!showFeedback) {
      if (selectedOption?.replace(/\s/, '')?.toLowerCase() == currentQuestion.correctAnswer?.replace(/\s/, '')?.toLowerCase()) {
        setResult([...result, 1]);
      } else {
        setResult([...result, 0]);
      }
    }
    setShowFeedback(true);
  };
  const questions = quizData[name];
  console.log(questions);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-8">
      {quizCompleted ? (
        <Leaderboard result={result} />
      ) : (
        <div className="border p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Question {currentQuestionIndex + 1}</h3>
          <p className="text-gray-700 mb-4">{currentQuestion.question}</p>
          <ul className="list-none">
            {currentQuestion.options.map((option, index) => (
              <li
                key={index}
                onClick={() => !showFeedback && handleSelectOption(option)}
                className={`border p-2 mb-2 cursor-pointer ${selectedOption === option ? 'bg-blue-200' : ''}`}
                disabled={showFeedback}
              >
                {option}
              </li>
            ))}
          </ul>
          {showFeedback && <p className="mt-4">{selectedOption === currentQuestion.correctAnswer ? <CorrectAnswer /> : <IncorrectAnswer correctAnswer={currentQuestion.correctAnswer} />}</p>}
          {!showFeedback && (
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => handleCheckAnswer()} disabled={showFeedback}>
              Check Answer
            </button>
          )}
        </div>
      )}
      {currentQuestionIndex < questions.length && !quizCompleted && showFeedback && (
        <button className={`mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600`} onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuizModule;
