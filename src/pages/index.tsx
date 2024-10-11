import { client } from '../utils/trpc';
import { useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const [name, setName] = useState('');
  const mutation = client.users.useMutation();
  const router = useRouter();

  const handleSubmit = async () => {
    const result = await mutation.mutateAsync({ name });
    console.log('New User:', result);

    
    const generatedLink = result.link;
   

    
    router.push({
      pathname: `/${name}/`,
      query: { link: generatedLink },
    });
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Create User</button>
    </div>
  );
};

export default HomePage;


