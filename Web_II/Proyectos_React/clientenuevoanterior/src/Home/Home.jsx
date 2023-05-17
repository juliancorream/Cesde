import { Menu } from "../shared/Menu/Menu";
import "./Home.css";
import { History } from "../History/History";
import { Members } from "../Members/Members";
import { Shop } from "../Shop/Shop";
import { Musica } from "../Musica/Musica";

export function Home() {
  return (
    <>
      <section className="banner"></section>

      <section>
        <History />
      </section>

      <section>
        <Members />
      </section>
    </>
  );
}
