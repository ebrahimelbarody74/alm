import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import "./Searches.scss";
import surgery from "../../assets/images/site_images/surgery-1822458_1920.jpg";
import Header from "../Header/Header";
function Searches() {
  const [search, setSearch] = useState("search");
  return (
    <>
      <Header />
      <div className="searches">
        <div className="right">
          <div className="img">
            <img src={surgery} />
          </div>
          <div className="info">
            <div className="top">
              <div className="download">
                <div className="btn">
                  تحميل <BiDownload />
                </div>
                <span>تم النشر 1/11/2012 - 9:00 م</span>
              </div>
              <div className="title">
                دراسة متعددة الجنسيات على نطاق -19COVID الآثار السلبية المُبلغ
                عنها والمواقف بين السكان العرب بعد التطعيم على عوامل الاستعداد
              </div>
            </div>
            <div className="txt">
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ " فتجعلها تبدو (أي هنا يوجد محتوى نصي،
                هنا يوجد محتوى نصي " طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
              </p>
            </div>
            <div className="author">
              <h3>المؤلفون :</h3>
              <div className="img">
                <img src="" />
                <img src="" />
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="top">
            <h3>الاخبار والمقالات</h3>
            <FiAlertCircle />
          </div>
          <div className="articleList">
            <div className="articlce">
              <div className="img">
                <img src={surgery} />
              </div>
              <span>تم النشر 1/11/2012 - 9:00 م</span>
              <div className="buttom">
                <p>
                  الآثار السلبية المُبلغ عنها والمواقف بين السكان العرب دراسة
                  متعددة الجنسيات -19COVID بعد التطعيم
                </p>
              </div>
            </div>
            <div className="articlce">
              <div className="img">
                <img src={surgery} />
              </div>
              <span>تم النشر 1/11/2012 - 9:00 م</span>
              <div className="buttom">
                <p>
                  الآثار السلبية المُبلغ عنها والمواقف بين السكان العرب دراسة
                  متعددة الجنسيات -19COVID بعد التطعيم
                </p>
              </div>
            </div>

            <div className="articlce">
              <div className="img">
                <img src={surgery} />
              </div>
              <span>تم النشر 1/11/2012 - 9:00 م</span>
              <div className="buttom">
                <p>
                  الآثار السلبية المُبلغ عنها والمواقف بين السكان العرب دراسة
                  متعددة الجنسيات -19COVID بعد التطعيم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searches;
