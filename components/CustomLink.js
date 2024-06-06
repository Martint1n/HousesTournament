import { useRouter } from 'next/router';

const CustomLink = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (href.startsWith('instagram://')) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default CustomLink;