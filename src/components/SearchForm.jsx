import { useEffect } from 'react';
import { useRef } from 'react';
import { useGlobalContext } from '../Context/context';

export default function SearchForm() {
  const { setSearchTearm } = useGlobalContext();
  const searchValue = useRef('');
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTearm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}
