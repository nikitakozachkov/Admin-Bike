import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Statistics } from "./Statistics/Statistics";
import { List } from "./List/List";
import { Form } from "./Form/Form";

export const App = () => {
  return (
    <>
      <Header />

      <div className="wrapper">
        <main className="main">
          <List />
        </main>

        <aside className="sidebar">
          <Form />

          <Statistics />
        </aside>
      </div>

      <Footer />
    </>
  );
};
