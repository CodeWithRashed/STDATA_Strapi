import Header from "../components/header/HeaderHero";
import Nav from "../components/nav/Navbar";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import Blogs from "../components/blogs/Blogs";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import ContactForm from "../components/contact/ContactUs";
import Support from "../components/CustomerSupport";

function HomePage() {
  return (
    <div className="bg-[#1a1f25]">
      <Nav />
      <Header />
      <Services />
      <Projects />
      <Blogs />
      <Team />
      <ContactForm />
      <Support />
      <Footer />
    </div>
  );
}

export default HomePage;
