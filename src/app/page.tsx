import Header from './components/Header';
import ProductSection from './components/ProductSection';
import SearchForm from './components/SearchForm';
import SortForm from './components/SortForm';

export default function Home() {
  return (
    <div className=" py-[32px] flex flex-col justify-center items-center  ">
      <section className="w-[1440px]  flex-col flex items-center">
        <Header />
        <SearchForm />
        <SortForm />
        <ProductSection />
      </section>
    </div>
  );
}
