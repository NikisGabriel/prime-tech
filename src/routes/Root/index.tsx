import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import styles from "./styles.module.scss";

import { ItemsList } from "../../components/ItemsList";
import { Text } from "../../components/Text";
import { Item } from "../../components/Item";
import { ProductCard } from "../../components/ProductCard";
import { Icon } from "../../components/Icon";
import { HighlightText } from "../../components/HighlightText";

import img from "../../assets/images/1-40-520x520-removebg-preview.png";

const mock: Record<string, string>[] = [
  { FONTE: "750W" },
  { RAM: "4BG" },
  { PROCESSADOR: "intel i5" },
  { SSD: "1T" },
];

function Root() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <ItemsList>
          <Item>
            <ProductCard
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </Item>
          <Item selected={true}>
            <ProductCard
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </Item>
          <Item>
            <ProductCard
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </Item>
          <Item>
            <ProductCard
              specifications={mock}
              imageAlt="teste"
              imageUrl={img}
            />
          </Item>
        </ItemsList>
      </aside>
      <section>
        <header className={styles.header}>
          <section className={styles["logo-container"]}>
            <Icon icon={<LogoIcon />} />
            <Text is="h1">
              Prime <HighlightText>Tech</HighlightText>
            </Text>
          </section>
        </header>
      </section>
    </div>
  );
}

export { Root };