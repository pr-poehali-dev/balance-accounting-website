import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Scale" className="text-accent" size={32} />
            <span className="text-2xl font-bold text-primary">Баланс</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <Link to="/contacts" className="text-primary font-medium">
              Контакты
            </Link>
          </nav>
          <Link to="/contacts">
            <Button className="bg-accent hover:bg-accent/90">Связаться</Button>
          </Link>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Свяжитесь с нами</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Готовы ответить на ваши вопросы и предложить оптимальное решение для вашего бизнеса
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Наши контакты</h2>
              <div className="space-y-6 mb-8">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 977 727 47 53</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground">alishka-v@mail.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                      <p className="text-sm text-muted-foreground">БЦ "Деловой", офис 305</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                      <p className="text-sm text-muted-foreground">Суббота - Воскресенье: Выходной</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/5 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Готовы помочь
                </h3>
                <p className="text-muted-foreground text-sm">
                  Наши специалисты с радостью проконсультируют вас по всем вопросам бухгалтерского учета и налогообложения. Первая консультация бесплатно!
                </p>
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Оставьте заявку</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Иванов"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.ru"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите о вашей задаче..."
                        rows={5}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
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
                <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
                <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 977 727 47 53
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  alishka-v@mail.ru
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

export default Contacts;