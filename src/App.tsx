import { Route, Switch } from "wouter";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

function Portfolio() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}

function Router() {
    return (
        <Switch>
            <Route path={"/"} component={Portfolio} />
            <Route path={"/404"} component={NotFound} />
            <Route component={NotFound} />
        </Switch>
    )
}

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider
                defaultTheme="light"
                switchable
            >
                <TooltipProvider>
                    <Toaster />
                    <Router />
                </TooltipProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;