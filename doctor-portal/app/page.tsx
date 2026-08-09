import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RegistrationForm from "@/components/RegistrationForm";
import DoctorProfile from "@/components/DoctorProfile";
import Procedures from "@/components/Procedures";
import Blog from "@/components/Blog";
import ReferralForm from "@/components/ReferralForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RegistrationForm />
      <DoctorProfile />
      <Procedures />
      <Blog />
      <ReferralForm />
      <Footer />
    </>
  );
}
