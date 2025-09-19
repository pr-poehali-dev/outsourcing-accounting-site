import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const services = [
    {
      icon: 'Calculator',
      title: 'Ведение учета УСН и ОСНО',
      description: 'Полное ведение бухгалтерского учета для ООО и ИП на любой системе налогообложения'
    },
    {
      icon: 'FileText',
      title: 'Сдача отчетности',
      description: 'Своевременная подача всех видов отчетности в налоговую, ПФР и ФСС'
    },
    {
      icon: 'Bitcoin',
      title: 'Отчетность майнеров',
      description: 'Специализированные услуги по ведению учета и отчетности для майнинговых компаний'
    },
    {
      icon: 'Users',
      title: 'Кадровый учет',
      description: 'Ведение кадрового делопроизводства, расчет зарплаты, отпускных'
    },
    {
      icon: 'Shield',
      title: 'Воинский учет',
      description: 'Ведение воинского учета сотрудников в соответствии с требованиями'
    },
    {
      icon: 'Scale',
      title: 'Юридические услуги',
      description: 'Правовое сопровождение бизнеса, консультации по налоговому праву'
    }
  ]

  const plans = [
    {
      name: 'Базовый',
      price: '5 000',
      period: 'в месяц',
      features: [
        'Ведение учета УСН',
        'Сдача отчетности',
        'Консультации по телефону',
        'Документооборот'
      ]
    },
    {
      name: 'Стандарт',
      price: '12 000',
      period: 'в месяц',
      popular: true,
      features: [
        'Ведение учета УСН/ОСНО',
        'Полная отчетность',
        'Кадровый учет',
        'Консультации юриста',
        'Электронный документооборот'
      ]
    },
    {
      name: 'Премиум',
      price: '25 000',
      period: 'в месяц',
      features: [
        'Все услуги стандарт',
        'Воинский учет',
        'Специальная отчетность',
        'Персональный менеджер',
        'Выездные консультации'
      ]
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold text-gray-900">БухАутсорс</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'about', label: 'О нас' },
                { id: 'pricing', label: 'Тарифы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button onClick={() => scrollToSection('contact')} className="hidden md:block">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Профессиональная <span className="text-primary">бухгалтерия</span> для вашего бизнеса
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Полный спектр бухгалтерских услуг для компаний любого размера. 
              Работаем с УСН, ОСНО, ООО и ИП. Специализируемся на майнинге и IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8 py-3">
                <Icon name="Eye" size={20} className="mr-2" />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексное бухгалтерское обслуживание с индивидуальным подходом к каждому клиенту
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                О нашей компании
              </h2>
              <p className="text-xl text-gray-600">
                Надежный партнер в области бухгалтерского учета с многолетним опытом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                  Почему выбирают нас
                </h3>
                <div className="space-y-4">
                  {[
                    'Опыт работы более 10 лет',
                    'Команда сертифицированных специалистов',
                    'Индивидуальный подход к каждому клиенту',
                    'Современные технологии ведения учета',
                    'Полная конфиденциальность данных',
                    'Гарантия качества услуг'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">200+</div>
                    <div className="text-gray-600">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">10+</div>
                    <div className="text-gray-600">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">99%</div>
                    <div className="text-gray-600">Без штрафов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-600">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите оптимальный план обслуживания для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-heading font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('contact')}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Связаться с нами
              </h2>
              <p className="text-xl text-gray-600">
                Готовы обсудить ваши потребности в бухгалтерском обслуживании
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Телефон</div>
                      <div className="text-gray-600">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">info@buhautsors.ru</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Адрес</div>
                      <div className="text-gray-600">г. Москва, ул. Примерная, д. 1</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Режим работы</div>
                      <div className="text-gray-600">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-heading">Оставить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                    <Input type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Сообщение</label>
                    <Textarea placeholder="Расскажите о ваших потребностях..." rows={4} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Calculator" size={24} className="text-primary" />
                <span className="text-xl font-heading font-bold">БухАутсорс</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Профессиональные бухгалтерские услуги для развития вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ведение УСН</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ведение ОСНО</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кадровый учет</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Отчетность</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">+7 (495) 123-45-67</div>
                <div className="text-gray-400">info@buhautsors.ru</div>
                <div className="text-gray-400">г. Москва</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 БухАутсорс. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index