import { useTranslator } from "i18n";

interface ViewLinkProps {
  href: string
}

function ViewLink(props: ViewLinkProps) {
  const t = useTranslator("global");

  return (
    <a title={t("ui.view")} class="text-purple" href={props.href}>
      {t("ui.view")} &gt;
    </a>
  )
}

export default ViewLink;