// import { useSelector, useDispatch } from 'react-redux';
// import Book from '../components/Book';
// import CategoryFilter from '../components/CategoryFilter';
// import { CHANGE_FILTER } from '../reducers/books';

// const BooksList = () => {
//   const dispatch = useDispatch();

//   const handleFilterChange = (event) => {
//     event.preventDefault();

//     dispatch(CHANGE_FILTER(event.target.value));
//   };

//   const { booksArray } = useSelector((state) => state.books);
//   let { filter } = useSelector((state) => state.books);
//   if (filter === undefined) {
//     filter = 'All';
//   }

//   let checkIfEmtpy = booksArray;

//   if (booksArray.length === 0 || booksArray === undefined) {
//     checkIfEmtpy = 'No books';
//   } else if (filter === 'All') {
//     checkIfEmtpy = booksArray.map((book) => <Book key={book.ID} book={book} />);
//   } else if (
//     checkIfEmtpy.length > 0 &&
//     checkIfEmtpy !== undefined &&
//     checkIfEmtpy !== []
//   ) {
//     checkIfEmtpy = booksArray.filter((obj) => obj.category === filter);
//     checkIfEmtpy = checkIfEmtpy.map((book) => (
//       <Book key={book.ID} book={book} />
//     ));
//   } else {
//     checkIfEmtpy = 'State lost';
//   }

//   return (
//     <div>
//       <div className="ml-5">
//         <CategoryFilter handleFilterChange={handleFilterChange} />
//       </div>
//       {checkIfEmtpy}
//     </div>
//   );
// };

// export default BooksList;
