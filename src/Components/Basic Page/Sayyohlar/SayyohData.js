import { BsFillInfoCircleFill, BsFillGiftFill } from "react-icons/bs";
import { FaCloudSun, FaCcVisa, FaBriefcase } from "react-icons/fa";
import globus from "./img/globus.jpg";
import fasl from "./img/fasl.jpg";
import bayram from "./img/bayram.jpg";
import diplomat from "./img/diplomat.jpg";
import viza from "./img/viza.jpg";

const SayyohData = [
  {
    id: 1,
    title: "Umumiy ma'lumotlar",
    info: (
      <div>
        <strong>Geografik va fazoviy joylashuvi: </strong> Yer sayyorasi,
        Yevrosiyo qit’asi, Markaziy Osiyo. <br /> <strong> Maydoni: </strong>{" "}
        447,4 ming kv. km.
        <br /> <strong> Aholisi: </strong> 34 million kishi.
        <br /> <strong> Millatlar: </strong>
        mamlakatda 134 dan ortiq millat vakillari yashaydi, ammo aholining
        asosiy qismi o‘zbeklardir (83,8%).
        <br /> <strong> Hududlar: </strong> 12 viloyat + Qoraqalpog‘iston
        Respublikasi.
        <br /> <strong> Mashhur shaharlari: </strong> Toshkent, Samarqand,
        Buxoro, Xiva, Shahrisabz, Termiz, Qo‘qon, Farg‘ona, Mo‘ynoq.
        <br /> <strong> Poytaxti: </strong>Toshkent. <br />{" "}
        <strong> Til: </strong>asosiy til – o‘zbek tili, xalqaro aloqa tillari -
        rus, ingliz. <br /> <strong> Din: </strong> O‘zbekiston – dunyoviy
        davlat, aholining ko‘p qismi musulmon. Shuningdek, mamlakatda
        xristianlik, buddizm va boshqa dinlarning vakillari istiqomat qiladi.
        <br /> <strong> Soat mintaqasi: </strong> UTC +5.
        <br /> <strong> Internet zonasi: </strong> .uz. <br />{" "}
        <strong> Xalqaro telefon kodi: </strong> +998. <br />{" "}
        <strong> Pul birligi: </strong> so‘m. <br /> <strong> Iqlimi: </strong>{" "}
        Qishi yumshoq, yozi issiq.
      </div>
    ),
    icon: <BsFillInfoCircleFill />,
    img: globus,
  },
  {
    id: 2,
    title: "4 fasl",
    info: (
      <div>
        O‘zbekiston – quyoshli mamlakat, yilning istalgan vaqtida bu yer
        chiroyli. Bahor va kuz baxmal mavsumi bo‘lib, bu vaqtda Siz o‘lkamizning
        tabiatidan zavqlanishingiz, mashhur diqqatga sazovor joylarni
        ko‘rishingiz va Buyuk Ipak yo‘li bo‘ylab o‘tishingiz mumkin. Qishda
        haqiqiy qorli go‘zallikni ko‘rish uchun to‘rtta tog‘-chang‘i
        kurortlaridan biriga borishingiz, shaharda muzeylarga, san’at
        galereyalariga borishingiz, bahorda bizning ajoyib milliy
        festivallarimizga tashrif buyurishingiz mumkin, yozda esa shahar
        tashqarisiga yoki tog‘lar tomon otlanib, O‘zbekistonning qo‘riqlanadigan
        joylarida piyoda sayr qilgan holda toza tog‘ havosidan bahramand
        bo‘'ling. Bular yilning istalgan vaqtida shug‘ullanishingiz mumkin
        bo‘lgan ishlarning ozgina qismi xolos. O‘zbekistondagi iqlim asosan
        issiq va quruq, shuning uchun yozda bu yerda ob-havoga oson chidash
        mumkin, qishi esa asosan iliq bo‘ladi.Eng sovuq oyda harorat -6
        darajadan pastga tushishi mumkin, eng issiq oyda esa harorat 32
        darajadan oshadi. O‘zbekistondagi chillaO‘zbekistondagi chilla haqida
        eshitganmisiz? Chilla o‘zbek tilida "40 kun" degan ma’noni anglatadi.
        Odamlar 40 kun yozning jaziramasi va qishning eng sovuq davrini shunday
        deb atashadi. Yozda chilla 20 iyundan keyin boshlanadi va avgust oyining
        boshida tugaydi. Qishki chilla davri dekabr oyining o‘rtalarida
        boshlanadi va deyarli yanvar oxirigacha davom etadi. Shu bois, bu vaqt
        uchun quyosh kremi, ko‘zoynak va qalpoqlarni tayyorlab qo‘ying.
      </div>
    ),
    icon: <FaCloudSun />,
    img: fasl,
  },
  {
    id: 3,
    title: "Bayramlar",
    info: (
      <div>
        <strong> 1 yanvar</strong> – Yangi yil.
        <br /> <strong>14 yanvar</strong> – Vatan himoyachilari kuni. <br />{" "}
        <strong>8 mart</strong> – Xalqaro xotin-qizlar kuni. <br />{" "}
        <strong>21 mart</strong> – Navro‘z bayrami.
        <br /> <strong>9 may</strong> – Xotira va qadrlash kuni.
        <br />
        <strong> 1 sentyabr</strong> – Mustaqillik kuni.
        <br />
        <strong> 1 oktyabr </strong>– O‘qituvchilar va murabbiylar kuni. <br />{" "}
        <strong> 8 dekabr </strong>– Konstitutsiya kuni.
        <br />
        <strong> Iyd al-Fitr (diniy bayram) </strong>– sanasi o‘zgarib turadi.
        <br />
        <strong> Iyd al-Adha (diniy bayram)</strong> – sanasi o‘zgarib turadi.
      </div>
    ),
    icon: <BsFillGiftFill />,
    img: bayram,
  },
  {
    id: 4,
    title: "Diplomatik vakolatxonalar",
    info: `Biror mamlakatning hozirgi maqomi va obro‘sini u bilan diplomatik munosabatlarni o‘rnatgan mamlakatlar soni bo‘yicha baholash mumkin.
Bugungi kunda O‘zbekistonning 50dan ortiq mamlakatlarda diplomatik vakolatxonalari bor, 60dan ortiq davlat mamlakatimizda vakolatxonalariga ega.`,
    icon: <FaBriefcase />,
    img: diplomat,
  },
  {
    id: 5,
    title: "Viza",
    info: (
      <div>
        O‘zbekistonga viza olishni xohlaysizmi? Bu endi ancha osonlashdi. Sizga
        kerak bo‘lgan yagona narsa – internet va pasport xolos.{" "}
        <a href="https://e-visa.gov.uz/main">e-visa.gov.uz</a> saytiga kiring va
        O‘zbekistonga elektron turistik viza olish uchun murojaat eting. Agar
        sizning mamlakatingiz O‘zbekiston uchun vizasiz rejimga ega 86 mamlakat
        ro‘yxatiga kirsa, unda xotirjam chiptalarni sotib oling,
        chamadonlaringizni yig‘ing va Welcome to Uzbekistan!{" "}
        <a href="https://e-visa.gov.uz/main"> E-Visa uchun murojaat etish</a>{" "}
      </div>
    ),
    icon: <FaCcVisa />,
    img: viza,
  },
];

export default SayyohData;
