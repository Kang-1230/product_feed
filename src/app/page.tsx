import Header from './components/Header';
import ProductList from './components/ProductList';
import SearchForm from './components/SearchForm';

export default function Home() {
  return (
    <div className=" py-[32px] flex flex-col justify-center items-center  ">
      <section className="max-w-[1440px]  flex-col flex items-center">
        <Header />
        <SearchForm />
        <ProductList />
      </section>
    </div>
  );
}
