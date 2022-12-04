import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "./Admin/index";
import Ticket from "../pages/Ticket/index";
import TicketDetail from "../pages/Ticket/detail";
import Question from "../pages/Question/index";
import User from "../pages/User/index";
import LandingPage from "../pages/LandingPage";
import Voting from "../pages/Voting";

export default function Home() {
  return <LandingPage />;
}
