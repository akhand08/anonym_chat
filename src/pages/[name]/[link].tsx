import { useState } from 'react';
import { client } from '../../utils/trpc';
import { useRouter } from 'next/router';

const CommentPage = () => {
  const router = useRouter();
  const { name, link } = router.query; // Access the dynamic URL params
  const [comment, setComment] = useState('');
  
  const mutation = client.comments.useMutation();

  const handleSubmit = async () => {
    if (!comment || comment.length < 10) {
      alert('Comment must be at least 10 characters long.');
      return;
    }

    try {
      await mutation.mutateAsync({
        comment,
        link: `http://localhost:3000/${name}/${link}`, // Use the dynamic link from URL
      });

      // After submission, clear the comment and stay on the same page
      setComment('');
    } catch (error) {
      console.error('Failed to submit comment', error);
    }
  };

  return (
    <div>
      <h1>Leave an Anonymous Comment for {name}</h1>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
        rows={5}
        cols={40}
      />
      <br />
      <button onClick={handleSubmit}>Submit Comment</button>
      <p>After submitting, you can continue leaving more comments.</p>
    </div>
  );
};

export default CommentPage;
