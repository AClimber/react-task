import { useTranslation } from "react-i18next";
import { NAMESPACE } from "../../locales/config";

const Header = () => {
  const { t } = useTranslation(NAMESPACE);

  return (
    <div className="Content">
      <h2>{t("content")}</h2>
    </div>
  );
};

export default Header;
