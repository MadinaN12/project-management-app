import Image from "next/image";
import router from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import HeroImage from "../../images/hero.png";
import styles from "../../styles/welcome/HeroSection.module.scss";

interface IEmailForm {
  setEmailInput: Dispatch<SetStateAction<string>>;
  emailInput: string;
  handleSubmitBtn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const HeroSection = () => {
  const [emailInput, setEmailInput] = useState("");
  function handleSubmitBtn(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.push({
      pathname: "/signup",
      query: { email: emailInput },
    });
  }
  return (
    <section id={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroLeftPart}>
          <h1 className={styles.heroTitle}>
            Trello helps teams move work forward.
          </h1>
          <p className={styles.heroParagraph}>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </p>
          <EmailForm
            setEmailInput={setEmailInput}
            emailInput={emailInput}
            handleSubmitBtn={handleSubmitBtn}
          />
        </div>
        <div className={styles.heroRightPart}>
          <Image src={HeroImage}></Image>
        </div>
      </div>
    </section>
  );
};

const EmailForm: React.FC<IEmailForm> = ({
  setEmailInput,
  emailInput,
  handleSubmitBtn,
}) => {
  return (
    <form action="" className={styles.heroForm}>
      <input
        type="email"
        className={styles.heroForm_input}
        placeholder="Email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      ></input>
      <button
        type="button"
        className={styles.heroForm_btn}
        onClick={handleSubmitBtn}
      >
        Sign up — it’s free!
      </button>
    </form>
  );
};
