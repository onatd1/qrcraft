import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import PageContainer from "./components/Layout/PageContainer";
import Home from "./pages/Home";

export default function App() {
  return (
    <PageContainer>
      <Header />
      <Home />
      <Footer />
    </PageContainer>
  );
}
