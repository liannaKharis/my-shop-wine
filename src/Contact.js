import image from "./бочонок.png";
import imageTwo from "./виноград.png";


function Contact() {
    return (
        <div>
            <div className="contact up">
          <div className="contact-text">
              <p className="contact-text-all">Наш винный консультант (сомелье) поможет подобрать вино к столу или в подарок. А также ответит на любой ваш вопрос по винам. Подберёт напитки по вашему вкусу и для ваших задач.</p>
              <p className="contact-text-all">Вы можете связаться с нами по телефону</p>
              <a className="contact-text-all mail" href="tel:+79608053197">+7-960-805-31-97</a>
              <p className="contact-text-all">или</p>
              <button className="contact-btn">Заказать звонок</button>
              <p className="contact-text-all">Наш адрес: г. Стерлитамак, пр. Октября, д.42</p>
          </div>
          <div><img src={image} width="400px" height="250px" alt="бочонок вина"/></div>
          </div>
          <div className="contact">
          <div><img src={imageTwo} width="400px" height="250px" alt="виноград"/></div>
          <div className="contact-text">
              <p className="contact-text-all">Для всех клиентов</p>
              <a className="contact-text-all mail" href="mailto:mail@timeofline.ru">mail@timeofline.ru</a>
              <p className="contact-text-all">Мы будем очень рады получить письмо с вашими вопросами, пожеланиями, и предложениями.</p>
              <p className="contact-text-all">По вашему запросу мы можем предоставить копии сертификатов на алкогольные напитки вместе с вашей заявкой.</p>
          </div>
          </div>
        </div>
    )
}

export default Contact;