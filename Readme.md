# Проект сайт-визитка Булгакова Тимофея Валерьивича

Стек: HTML, SCSS, JS, Webpack

Структура проекта:
- src/ — файлы проекта
- src/components/ — папка с JS компонентами

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/index.ts — точка входа приложения
- src/pages/index.css — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами


## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```


## Сборка

```
npm run build
```

или

```
yarn build
```


## Данные и типы данных


## Архитектура проекта

Код приложения разделён на слои согласно парадигме MVP:

- Model - слой данных, отвечает за хранение и изменение данных
- View - слой представления, отвечает за отображения данных на странице
- Presentor - презентор, отвечает за связь представления и данных


### Базовый код

#### Класс <span style="color:#993131">Api</span>#### Класс <span style="color:#993131">Api</span>

Содержит базовую логику отправки запросов. В конструктор передаётся базовый адрес сервера и опциональный объект с заголовками запросов.

Методы класса:
- `get` - выполняет `GET` запрос на переданный в параметрах эндпоинт и возвращает промис с объектом (ответ сервера)
- `post` - принимает объект с данными, которые будут переданы в JSON в теле запроса, и отправляет эти данные на эндпоинт переданный как параметр при вызове метода. По умолчанию выполняется `POST` запрос, но метод запроса может быть переопределён через третий параметр при вызове.


#### Класс <span style="color:#993131">EventEmitter</span>

Брокер событий позволяет подписываться на события и отправлять события. Класс используется в презенторе для обработки событий и генерации событий.

Основные методы класса, реализуемые интерфейсом `IEvents`:
- `on` - подписка на событие
- `emit` - инициализация события
- `trigger` - возвращает функцию, при вызове которой инициализируется требуемое в параметрах событие. Это позволяет передавать его в качестве обработчика события в другие классы. Эти классы будут генерировать события, не будучи при этом напрямую зависимыми от
класса  EventEmitter.

Дополнительно реализованы методы:
- `off` - отписка от события
- `onAll` - подписка на все события
- `offAll` - сброс подписки от всех событий


#### Класс <span style="color:#993131">Component</span>

Абстрактный класс, является дженериком и родителем всех компонентов слоя представления. В дженерик принимает тип объекта, в котором данные будут передаваться в метод render для отображения данных в компоненте. В конструктор принимает элемент разметки, являющийся основным родительским контейнером компонента и экземпляр брокера событий.

Метод класса:
- `render(data?: Partial<T>): HTMLElement` - отвечает за сохранение полученных в параметре данных в полях компонентов через их сеттеры, возвращает обновлённый контейнер компонента


### Слой данных (Model)

#### Класс <span style="color:#993131">AppData</span>

Класс отвечает за хранение и передачу данных приложения.
Конструктор класса принимает экземпляр брокера событий.

В полях класса хранятся следующие данные:

Класс предоставляет набор методов для взаимодействия с данными:


### Слой представления (View)

#### 1. Класс <span style="color:#993131">Page</span>


### Презентор (Presenter)

#### Класс <span style="color:#993131">AppApi</span>

Принимает в конструктор экземпляр класса `Api` и предоставляет методы реализующие взаимодействие с бэкендом сервиса.


## Взаимодействие компонентов

Код, описывающий взаимодействие представления и данных между собой находится в файле `index.ts`, выполняющем роль презентора.\
Взаимодействие осуществляется за счёт событий генерируемых с помощью брокера событий и обработчиков этих событий, описанных в `index.ts`\
В `index.ts` сначала создаются экземпляры всех необходимых классов, а затем настраивается обработка событий.

*Список всех событий, которые могут генерироваться в системе:*\
*События изменения данных (генерируются классами моделями данных)*
- `products:changed` - изменение массива карточек товаров

*События, возникающие при взаимодействии пользователя с интерфейсом (генерируются классами, отвечающими за представление)*
- `card:select` - выбор карточки товара для отображения в модальном окне
- `card:add` - добавление выбранной карточки товара в корзину
- `card:delete` - удаления выбранной карточки товара из корзины

- `basket:open` - открытие корзины
- `basket:changed` - изменение данных корзины

- `order:open` - открытие формы заказа
- `order:input` - изменение данных в форме заказа
- `order:validation` - событие, сообщающее о необходимости валидации формы заказа

- `contacts:open` - открытие формы контакты
- `contacts:input` - изменение данных в форме контакты
- `contacts:validation` - событие, сообщающее о необходимости валидации формы контакты

- `contacts:submit` - отправление данных заказа на сервер. При успешном завершении происходит переход на модальное окно подтверждающее оформление заказа

- `basket:cleaner` - очищает данные корзины
- `form:cleaner` - очищает данные пользователя в формах

- `modal:close` - закрытие модального окна

- `page:locked` - блокировка модального окна
- `page:unlocked` - разблокировка модального окна

- `success:close` - закрытие модального окна успешно завершённого заказа на дополнительную кнопку





## Примерный функционал:

Админка в которой должна быть возможность менять текст и изображения




# ДЛЯ СЕБЯ

## Задачи и ход их выполнения:

- По ходу проекта разбираться и писать в файле Readme.md про: стек, необходимые команды, структуру и логику проекта

- Так же по ходу проекта выписывать отдельно все команды, которые необходимо было выполнить через терминал, чтобы понять как самостоятельно делать настройку проекта

- Выполнить самостоятельно настройку проекта

- Накидать HTML разметку

- Накидать стили

- Доработать визуально, сделать и закодить минимальный дизайн интерфейса

- Показать заказщику проект

- Доработать дизайн

- Сделать админку

- Соглосовать с заказчиком

- Доработать если требуется

- Разобраться как это делается и выложить сайт в интернет

- Заказ готов! Смело добавляю его в портфолио


## Текущая задача

```
Выполнить самостоятельно настройку проекта:
```
- Выполнить ряд команд для создания и базовой настройки файла `package.json`
- Установить всё для компиляци cscc файлов в css (установка sass)
- Настроить webpack