import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Scale" className="text-accent" size={32} />
            <span className="text-2xl font-bold text-primary">Баланс</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#advantages" className="text-muted-foreground hover:text-primary transition-colors">
              Преимущества
            </a>
            <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>
          <Link to="/contacts">
            <Button className="bg-accent hover:bg-accent/90">Связаться</Button>
          </Link>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональная бухгалтерия для вашего бизнеса
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Надежный учет, своевременная отчетность и экспертные консультации — всё что нужно для успешного развития вашей компании
              </p>
              <div className="flex gap-4">
                <Link to="/contacts">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    Получить консультацию
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/fad05332-5f34-4748-8da5-ed70c59aa5b8/files/be1b108a-6514-4da8-b8ee-212a34c6861b.jpg" 
                alt="Бухгалтерские услуги"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр бухгалтерских услуг для бизнеса любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Calculator",
                title: "Ведение бухучета",
                description: "Комплексное ведение бухгалтерского учета с полным соответствием законодательству РФ"
              },
              {
                icon: "FileText",
                title: "Налоговая отчетность",
                description: "Своевременная подготовка и сдача всех видов налоговой и бухгалтерской отчетности"
              },
              {
                icon: "Users",
                title: "Кадровый учет",
                description: "Ведение кадрового учета, расчет заработной платы и взносов"
              },
              {
                icon: "TrendingUp",
                title: "Финансовый анализ",
                description: "Анализ финансового состояния компании и рекомендации по оптимизации"
              },
              {
                icon: "Building2",
                title: "Регистрация бизнеса",
                description: "Помощь в регистрации ООО и ИП, подготовка всех необходимых документов"
              },
              {
                icon: "Shield",
                title: "Консультации",
                description: "Экспертные консультации по вопросам налогообложения и бухгалтерского учета"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О компании "Баланс"</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы — команда профессиональных бухгалтеров с многолетним опытом работы. Наша миссия — обеспечить вашему бизнесу надежный финансовый фундамент, освободив вас от рутинных задач учета.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                За годы работы мы помогли сотням компаний наладить эффективный бухгалтерский учет, оптимизировать налогообложение и избежать штрафов со стороны контролирующих органов.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">надежность</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: "Award",
                  title: "Сертифицированные специалисты",
                  text: "Наши сотрудники регулярно повышают квалификацию"
                },
                {
                  icon: "Lock",
                  title: "Конфиденциальность",
                  text: "Гарантируем полную защиту ваших данных"
                },
                {
                  icon: "Clock",
                  title: "Оперативность",
                  text: "Работаем быстро и соблюдаем все сроки"
                },
                {
                  icon: "HeadphonesIcon",
                  title: "Поддержка 24/7",
                  text: "Всегда готовы ответить на ваши вопросы"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаем долгосрочные партнерские отношения с каждым клиентом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "CheckCircle2",
                title: "Точность",
                description: "Безошибочный учет и отчетность"
              },
              {
                icon: "Zap",
                title: "Эффективность",
                description: "Оптимизация налоговой нагрузки"
              },
              {
                icon: "Target",
                title: "Прозрачность",
                description: "Полный контроль над финансами"
              },
              {
                icon: "Smile",
                title: "Индивидуальный подход",
                description: "Решения под ваш бизнес"
              }
            ].map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы начать работу?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения бесплатной консультации и расчета стоимости услуг
          </p>
          <Link to="/contacts">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Связаться с нами
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" size={28} />
                <span className="text-xl font-bold">Баланс</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональные бухгалтерские услуги для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Ведение бухучета</li>
                <li>Налоговая отчетность</li>
                <li>Кадровый учет</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@balans.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 Баланс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
