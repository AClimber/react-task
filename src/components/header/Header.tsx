import { useTranslation } from "react-i18next";
import { NAMESPACE, LANGS } from "../../locales/config";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const { i18n, t } = useTranslation(NAMESPACE);
  const currentLang =
    LANGS.find((lang) => lang.value === i18n.language) || LANGS[0];

  const changeLang = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <div className="Header">
      <h1>{t("welcome")}</h1>
      <Select
        label={currentLang.label}
        onChange={changeLang}
        value={currentLang.value}
      >
        {LANGS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Header;
