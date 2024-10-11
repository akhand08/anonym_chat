import { useRouter } from 'next/router';

const UserPage = () => {
  const router = useRouter();
  const { name, link } = router.query;
  const generatedLink = Array.isArray(link) ? link[0] : link;

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {link ? (
        <div>
          <p>Your unique link is:</p>
          <a href={generatedLink}>{generatedLink}</a> 
          <button
            onClick={() => navigator.clipboard.writeText(generatedLink as string)}
          >
            Copy Link
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserPage;
