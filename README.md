Задачи
1. Реализовать header
| <Название Приложения>  <Выбор языка>|
Можно использовать установленный mui или выбрать чтото другое.

2. Создать кастомный хук useLocale который будет отвечать в приложении за перевод

  const { currentLang, t, allLang, onChangeLang } = useLocales();

  Таким образом в компоненты не нужно
  ```
    import { useTranslation } from "react-i18next";
    import { NAMESPACE } from "../../locales/config";

    const Comp = () => {
        const { t } = useTranslation(NAMESPACE);
    }
  ```

3. Добавить возможность задания динамических аргументов в перевод
```
en.json

{ "welcome": "Welcome {{name}}" }

.tsx
t('welcome', { name: 'World' })

```

4. Реализовать форму приветствия чтобы проверить задачу 3

<form>
    <p>Введите ваше имя?</p>
    <input name/>
    <button>Подтвердить</button>
</form>

alert(t('welcome', { name: form.name }))


