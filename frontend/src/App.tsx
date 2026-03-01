import Navbar  from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />


            <main className="flex-grow">
                <Hero />
            

            <div className="p-6 grid gap-6 md:grid-cols-3">
                <ProductCard />
                <ProductCard />
                <ProductCard /> 

                <ProductCard />
                <ProductCard />
                <ProductCard />

                <ProductCard />
                <ProductCard />
                <ProductCard />     

                

            </div>
            </main>

            <Footer />
        </div>
        
    );
}