/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const s = [];
  for (let i = 0; i < asteroids.length; i++) {
    const a = asteroids[i];

    // Negative asteroids to the left of the stack can be ignored.
    // They'll never collide. Let's just add it to the answer stack and
    // move on. I consider this a special case.
    if ((s.length === 0 || s[s.length - 1] < 0) && a < 0) {
      s.push(a);

      // If an asteroid a is positive (l to r), it may still collide with an
      // a negative asteroid further on in the asteroids array
    } else if (a > 0) {
      s.push(a);

      // a is negative. It can only collide with positive ones in
      // the stack. The following will keep on iterating
      // until it is dealt with.
    } else {
      const pop = s.pop();

      // positive pop beats negative a, so pick up pop
      // and re-add it to the stack.
      if (Math.abs(pop) > Math.abs(a)) {
        s.push(pop);

        // a has larger size than pop, so pop will get dropped
        // and we'll retry another iteration with the same
        // negative a asteroid and whatever the stack's state is.
      } else if (Math.abs(pop) < Math.abs(a)) {
        i--;
        // magnitude of positive pop and negative a are the same
        // so we can drop both of them.
      } else {
        continue;
      }
    }
  }

  // The stack should be the answer
  return s;
};

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let a of asteroids) {

      // while we have a stack, asteroid is positive and the top of the stack is positive
      while (stack.length > 0 && a < 0 && stack[stack.length - 1] > 0) {
          // find the diff between the asteroid and the top of the stack
          const diff = a + stack[stack.length - 1];

          // if diff is negative, asteroid is going to win that means destroy the asteroid in the stack
          // asteroid is moving left is going to win
          if (diff < 0) {
              stack.pop();
        // if diff is positive then the asteroid on top of stack is going to win, asteroid moving right is going to win
        // set it to 0 so it won't be added to the stack
          } else if (diff > 0) {
              a = 0;
        // destroy both asteroids
          } else {
              a = 0;
              stack.pop();
          }
      
      }

      // only add truthy asteroids to the stack
      if (a) {
          stack.push(a);
      }
  }

  return stack;

};


// Time: O(N)
// Space: O(N)