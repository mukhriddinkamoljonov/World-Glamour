import { BsFillInfoCircleFill, BsFillGiftFill } from "react-icons/bs";
import { FaCloudSun, FaCcVisa, FaBriefcase } from "react-icons/fa";
import globus from "./img/globus.jpg";
import fasl from "./img/fasl.jpg";
import bayram from "./img/bayram.jpg";
import diplomat from "./img/diplomat.jpg";
import viza from "./img/viza.jpg";
import { useTranslation } from "react-i18next";
import { t } from "i18next";


// const {t} = useTranslation();

const SayyohData = [
  [
    {
      id: 1,
      title: "Umumiy ma'lumotlar",
      info: (
        <div>
          <strong>{t("useful")} </strong> {t("useful1")} <br /> <strong> {t("useful2")} </strong>{" "}
          {t("useful3")}
          <br /> <strong> {t("useful4")} </strong> {t("useful5")}
          <br /> <strong> {t("useful6")} </strong>
          {t("useful7")}
          <br /> <strong>{t("useful8")} </strong> {t("useful9")}
          <br /> <strong> {t("useful10")} </strong> {t("useful11")}
          <br /> <strong> {t("useful12")} </strong>{t("useful13")}<br />{" "}
          <strong> {t("useful14")}</strong>{t("useful15")}<br /> <strong> {t("useful16")} </strong> {t("useful17")}
          <br /> <strong> {t("useful18")} </strong> {t("useful19")}
          <br /> <strong> {t("useful20")} </strong> {t("useful21")} <br />{" "}
          <strong>{t("useful22")} </strong> +998. <br />{" "}
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
  ]
];

export default SayyohData;
