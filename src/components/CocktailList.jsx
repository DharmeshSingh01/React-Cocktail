import { useGlobalContext } from '../Context/context';
import Cocktail from './Cocktail';
import Loading from './Loading';

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cockatils matched your search criteria
      </h2>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => (
          <Cocktail key={item.idDrink} {...item} />
        ))}
      </div>
    </section>
  );
}
