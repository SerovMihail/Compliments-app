import { useState } from 'react';

export function About() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Counter</div>
      {count}
    </div>
  );
}

export default About;
