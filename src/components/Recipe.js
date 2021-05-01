import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementAsync } from '../reducers/recipeSlice';

export function Counter() {
  const count = useSelector((state) => state.recipe.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{dispatch(incrementAsync())}</span> */}
        <span>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(incrementAsync())}>Add Async</button>
      </div>
    </div>
  );
}
